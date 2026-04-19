import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { CalendarDays, CheckCircle2, XCircle, Clock, User, Phone, Mail, MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { createNotification } from "@/utils/notifications";
import { useMarkPageAsSeen } from "@/hooks/useMarkPageAsSeen";
import { canJoinCall } from "@/lib/timeSlots";
import JitsiCallRoom from "@/components/JitsiCallRoom";

interface AppointmentManagementProps {
  visitType: 'store-visit' | 'video-call' | 'home-visit';
}

export default function AppointmentManagement({ visitType }: AppointmentManagementProps) {
  useMarkPageAsSeen(visitType === 'video-call' ? 'video-calls' : 'appointments');
  const queryClient = useQueryClient();
  const [filter, setFilter] = useState("all");
  const [selectedApp, setSelectedApp] = useState<any>(null);
  const [modalType, setModalType] = useState<'reject' | 'reschedule' | null>(null);
  const [rejectionReason, setRejectionReason] = useState("");
  const [rescheduleData, setRescheduleData] = useState({ date: "", time: "", note: "" });
  const [activeCall, setActiveCall] = useState<any>(null);

  const { data: appointments = [], isLoading } = useQuery({
    queryKey: ["admin-appointments", visitType],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("appointments")
        .select(`
          *,
          product:products(name)
        `)
        .eq('visit_type', visitType)
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, status, customerId, customerName, data }: any) => {
      const updateData: any = { status };
      if (status === 'rejected') updateData.rejection_reason = rejectionReason;
      if (status === 'rescheduled') {
        updateData.appointment_date = rescheduleData.date;
        updateData.time_slot = rescheduleData.time;
        updateData.reschedule_note = rescheduleData.note;
      }

      const { error } = await supabase
        .from("appointments")
        .update(updateData)
        .eq("id", id);
      
      if (error) throw error;

      // Special logic for video call confirmations
      if (status === 'confirmed' && visitType === 'video-call') {
        const jitsiRoomName = `SRTH-Call-${id.split('-')[0]}-${Date.now()}`;
        const roomUrl = `https://meet.jit.si/${jitsiRoomName}`;
        
        await supabase.from('appointments').update({
          daily_room_url: roomUrl,
          daily_room_name: jitsiRoomName
        }).eq('id', id);

        await supabase.from('call_events').insert({
          appointment_id: id,
          event_type: 'room_created',
          participant_type: 'system'
        });
      }

      // Send notification to customer
      if (customerId) {
        let title = `${visitType === 'video-call' ? '📹' : '🗓️'} Visit Confirmed!`;
        let message = `Your ${visitType} appointment on ${data?.appointment_date} has been confirmed.`;
        let link = '/account/appointments';
        
        if (status === 'confirmed' && visitType === 'video-call') {
          title = "📹 Video Call Confirmed!";
          message = `Your video consultation has been confirmed for ${data?.appointment_date} at ${data?.time_slot}. Join from your profile page when it's time.`;
          link = '/account/video-calls';
        } else if (status === 'rejected') {
          title = "❌ Appointment Not Available";
          message = `We're sorry, your requested time slot is not available. ${rejectionReason ? 'Reason: ' + rejectionReason : 'Please book another slot.'}`;
        } else if (status === 'rescheduled') {
          title = "🔄 Appointment Rescheduled";
          message = `Your ${visitType === 'video-call' ? 'video call' : 'appointment'} has been rescheduled to ${rescheduleData.date} at ${rescheduleData.time}. ${rescheduleData.note ? 'Note: ' + rescheduleData.note : ''}`;
        }

        await createNotification({
          user_id: customerId,
          title,
          message,
          type: 'appointment',
          link
        });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-appointments", visitType] });
      setModalType(null);
      setSelectedApp(null);
      setRejectionReason("");
      setRescheduleData({ date: "", time: "", note: "" });
      toast.success("Appointment updated successfully");
    },
    onError: (err: any) => toast.error(err.message),
  });

  const filteredAppointments = appointments.filter((a: any) => 
    filter === "all" ? true : a.status === filter
  );

  const getStatusStyle = (status: string) => {
    switch(status) {
      case 'confirmed': return "bg-green-100 text-green-700 border-green-200";
      case 'rejected': return "bg-red-100 text-red-700 border-red-200";
      case 'rescheduled': return "bg-blue-100 text-blue-700 border-blue-200";
      case 'completed': return "bg-gray-100 text-gray-700 border-gray-200";
      default: return "bg-amber-100 text-amber-700 border-amber-200";
    }
  };

  return (
    <div className="space-y-6 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="font-heading text-2xl font-serif font-bold text-[#1A1A1A]">
            {visitType === 'store-visit' ? 'Store Visit Requests' : 'Video Call Requests'}
          </h2>
          <p className="text-sm text-[#6B6B6B]">Manage customer {visitType} bookings and status.</p>
        </div>

        <div className="flex bg-[#F7F5F2] border border-[#E8E4DF] p-1 rounded-lg">
          {["all", "pending", "confirmed", "rejected", "rescheduled"].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={cn(
                "px-4 py-1.5 rounded-md text-[11px] font-bold uppercase tracking-wider transition-all",
                filter === s ? "bg-[#1A1A1A] text-white shadow-sm" : "text-[#6B6B6B] hover:text-[#1A1A1A]"
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {isLoading ? (
        <div className="grid gap-4">
           {[1,2,3].map(i => <div key={i} className="h-32 bg-gray-100 animate-pulse rounded-xl" />)}
        </div>
      ) : filteredAppointments.length === 0 ? (
        <div className="bg-white border border-[#E8E4DF] border-dashed rounded-2xl py-24 text-center">
          <CalendarDays className="w-12 h-12 text-[#E8E4DF] mx-auto mb-4" />
          <p className="text-[#6B6B6B]">No {visitType} requests found.</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredAppointments.map((app: any) => (
            <div key={app.id} className={cn(
               "bg-white border border-[#E8E4DF] p-6 rounded-xl shadow-sm hover:shadow-md transition-all group",
               app.status === 'pending' ? "border-l-4 border-l-[#C8860A]" : ""
            )}>
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-[#F7F5F2] flex items-center justify-center flex-shrink-0 border border-[#E8E4DF]">
                    <User className="w-6 h-6 text-[#1A1A1A]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="font-serif font-bold text-lg text-[#1A1A1A]">
                        {app.customer_name || "Guest Customer"}
                      </h4>
                      <span className={cn(
                        "px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest border",
                        getStatusStyle(app.status)
                      )}>
                        {app.status}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[#6B6B6B]">
                      <div className="flex items-center gap-2 text-[13px]">
                        <Phone className="w-3.5 h-3.5" /> {app.customer_phone}
                      </div>
                      <div className="flex items-center gap-2 text-[13px]">
                        <Mail className="w-3.5 h-3.5" /> {app.customer_email || "No email"}
                      </div>
                      <div className="flex items-center gap-2 text-[13px] font-semibold text-[#1A1A1A]">
                        <CalendarDays className="w-3.5 h-3.5" /> {app.appointment_date}
                      </div>
                      <div className="flex items-center gap-2 text-[13px] font-semibold text-[#C8860A]">
                        <Clock className="w-3.5 h-3.5" /> {app.time_slot}
                      </div>
                    </div>

                    {app.product && (
                        <p className="mt-2 text-[12px] font-bold text-[#C8860A] uppercase tracking-wider">
                           Interested in: {app.product.name}
                        </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end lg:self-center">
                  {app.status === "pending" && (
                    <>
                       <Button 
                         size="sm" 
                         className="h-9 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold text-xs gap-1.5"
                         onClick={() => updateStatusMutation.mutate({ id: app.id, status: "confirmed", customerId: app.customer_id, data: app })}
                       >
                         <CheckCircle2 className="w-3.5 h-3.5" /> Confirm
                       </Button>
                       <Button 
                         size="sm" 
                         variant="outline"
                         className="h-9 px-4 border-red-200 text-red-600 hover:bg-red-50 rounded-lg font-bold text-xs gap-1.5"
                         onClick={() => { setSelectedApp(app); setModalType('reject'); }}
                       >
                         <XCircle className="w-3.5 h-3.5" /> Reject
                       </Button>
                       <Button 
                         size="sm" 
                         variant="outline"
                         className="h-9 px-4 border-[#E8E4DF] text-[#1A1A1A] hover:bg-[#F7F5F2] rounded-lg font-bold text-xs gap-1.5"
                         onClick={() => { 
                           setSelectedApp(app); 
                           setModalType('reschedule');
                           setRescheduleData({ date: app.appointment_date, time: app.time_slot, note: "" });
                         }}
                       >
                         <Clock className="w-3.5 h-3.5" /> Reschedule
                       </Button>
                    </>
                  )}

                  {app.status === 'confirmed' && visitType === 'video-call' && (
                    <div className="flex items-center gap-2">
                      {canJoinCall(app.appointment_date, app.time_slot) ? (
                        <Button
                          size="sm"
                          className="h-9 px-4 bg-[#C8860A] hover:bg-[#A36D07] text-white rounded-lg font-bold text-xs"
                          onClick={() => setActiveCall(app)}
                        >
                          Join Call
                        </Button>
                      ) : (
                        <span className="text-[10px] text-muted-foreground italic">
                          Joinable 5m before slot
                        </span>
                      )}
                      
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="h-9 px-4 border-[#E8E4DF] text-[#1A1A1A] hover:bg-[#F7F5F2] rounded-lg font-bold text-xs"
                        onClick={() => updateStatusMutation.mutate({ id: app.id, status: "completed", customerId: app.customer_id, data: app })}
                      >
                        Complete
                      </Button>
                    </div>
                  )}

                  {app.status === 'confirmed' && visitType !== 'video-call' && (
                     <Button 
                         size="sm" 
                         variant="outline"
                         className="h-9 px-4 border-[#E8E4DF] text-[#1A1A1A] hover:bg-[#F7F5F2] rounded-lg font-bold text-xs"
                         onClick={() => updateStatusMutation.mutate({ id: app.id, status: "completed", customerId: app.customer_id, data: app })}
                       >
                         Mark Completed
                       </Button>
                  )}
                </div>
              </div>
              
              {app.notes && (
                <div className="mt-4 p-4 bg-[#F7F5F2] rounded-lg border border-[#E8E4DF] text-sm text-[#6B6B6B] font-body italic quote relative">
                  <span className="text-[#C8860A] font-serif text-2xl absolute -top-1 left-2 opacity-50">"</span>
                  <p className="pl-4">{app.notes}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Reject Modal */}
      {modalType === 'reject' && (
        <div className="fixed inset-0 z-[600] flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white w-full max-w-md p-8 shadow-2xl">
            <h3 className="text-xl font-serif font-bold text-[#1A1A1A] mb-4">Reject Request</h3>
            <p className="text-sm text-[#6B6B6B] mb-6">Let {selectedApp?.customer_name} know why the request was rejected.</p>
            <textarea
              className="w-full p-4 border border-[#E8E4DF] outline-none focus:border-[#C8860A] min-h-[120px] mb-6"
              placeholder="e.g. Selective slot unavailable, showroom closure..."
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
            />
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1" onClick={() => setModalType(null)}>Cancel</Button>
              <Button 
                variant="destructive" 
                className="flex-1" 
                disabled={!rejectionReason || updateStatusMutation.isPending}
                onClick={() => updateStatusMutation.mutate({ id: selectedApp.id, status: 'rejected', customerId: selectedApp.customer_id })}
              >
                Reject Request
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Reschedule Modal */}
      {modalType === 'reschedule' && (
        <div className="fixed inset-0 z-[600] flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white w-full max-w-md p-8 shadow-2xl">
            <h3 className="text-xl font-serif font-bold text-[#1A1A1A] mb-4">Reschedule Appointment</h3>
            <div className="space-y-4 mb-8">
              <div>
                <label className="block text-[12px] font-bold text-[#6B6B6B] uppercase mb-1.5 font-heading">New Date</label>
                <input 
                  type="date" 
                  className="w-full p-3 border border-[#E8E4DF]"
                  value={rescheduleData.date}
                  onChange={(e) => setRescheduleData(prev => ({ ...prev, date: e.target.value }))}
                />
              </div>
              <div>
                 <label className="block text-[12px] font-bold text-[#6B6B6B] uppercase mb-1.5 font-heading">New Time Slot</label>
                 <select 
                    className="w-full p-3 border border-[#E8E4DF] bg-white"
                    value={rescheduleData.time}
                    onChange={(e) => setRescheduleData(prev => ({ ...prev, time: e.target.value }))}
                  >
                    <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
                    <option value="12:00 PM - 02:00 PM">12:00 PM - 02:00 PM</option>
                    <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM</option>
                    <option value="04:00 PM - 06:00 PM">04:00 PM - 06:00 PM</option>
                  </select>
              </div>
              <div>
                <label className="block text-[12px] font-bold text-[#6B6B6B] uppercase mb-1.5 font-heading">Note for Customer</label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-[#E8E4DF]"
                  placeholder="Reason for rescheduling"
                  value={rescheduleData.note}
                  onChange={(e) => setRescheduleData(prev => ({ ...prev, note: e.target.value }))}
                />
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1" onClick={() => setModalType(null)}>Cancel</Button>
              <Button 
                className="flex-1 bg-[#C8860A] hover:bg-[#A67008]" 
                disabled={!rescheduleData.date || !rescheduleData.time || updateStatusMutation.isPending}
                onClick={() => updateStatusMutation.mutate({ id: selectedApp.id, status: 'rescheduled', customerId: selectedApp.customer_id })}
              >
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      )}
      {activeCall && (
        <JitsiCallRoom
          appointmentId={activeCall.id}
          participantType="owner"
          participantName="Design Expert"
          appointmentDate={activeCall.appointment_date}
          timeSlot={activeCall.time_slot}
          productName={activeCall.product?.name}
          customerName={activeCall.customer_name}
          onLeave={() => {
            setActiveCall(null);
            queryClient.invalidateQueries({ queryKey: ["admin-appointments", visitType] });
          }}
          logoUrl={import.meta.env.VITE_STORE_LOGO_URL}
        />
      )}
    </div>
  );
}
