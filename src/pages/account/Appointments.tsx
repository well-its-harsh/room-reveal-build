import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";
import { 
  CalendarDays, Clock, MapPin, 
  Home, CheckCircle2, 
  XCircle, RefreshCw,
  ShieldAlert, ArrowRight, Store
} from "lucide-react";
import { format, isBefore, startOfToday } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Dialog, DialogContent, DialogDescription, 
  DialogFooter, DialogHeader, DialogTitle
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function AccountAppointments() {
  const { user, profile } = useAuth();
  const queryClient = useQueryClient();
  const [activeSubTab, setActiveSubTab] = useState<'upcoming' | 'past' | 'cancelled'>('upcoming');
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [isRescheduleModalOpen, setIsRescheduleModalOpen] = useState(false);
  const [selectedAppt, setSelectedAppt] = useState<any>(null);
  
  const [rDate, setRDate] = useState("");
  const [rSlot, setRSlot] = useState("");
  const [rNote, setRNote] = useState("");

  const { data: appointments = [], isLoading } = useQuery({
    queryKey: ["my-appointments", user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("appointments")
        .select(`*, product:products(name)`)
        .eq("customer_id", user?.id)
        .neq("visit_type", "video-call")
        .order("appointment_date", { ascending: false });
      
      if (error) throw error;
      return data;
    },
    enabled: !!user,
  });

  const { upcoming, past, cancelled } = useMemo(() => {
    const today = startOfToday();
    return appointments.reduce((acc: any, appt: any) => {
      const apptDate = new Date(appt.appointment_date);
      if (appt.status === 'cancelled') {
        acc.cancelled.push(appt);
      } else if (isBefore(apptDate, today) || ['completed', 'rejected'].includes(appt.status)) {
        acc.past.push(appt);
      } else {
        acc.upcoming.push(appt);
      }
      return acc;
    }, { upcoming: [], past: [], cancelled: [] });
  }, [appointments]);

  const cancelMutation = useMutation({
    mutationFn: async (appt: any) => {
      const { error } = await supabase
        .from("appointments")
        .update({ status: 'cancelled' })
        .eq("id", appt.id)
        .eq("customer_id", user?.id);
      if (error) throw error;

      await supabase.from('notifications').insert({
        user_id: import.meta.env.VITE_OWNER_USER_ID,
        title: 'Appointment Cancelled',
        message: `${profile?.full_name} cancelled their ${appt.visit_type?.replace('-', ' ')} on ${appt.appointment_date}`,
        type: 'appointment'
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["my-appointments"] });
      setIsCancelModalOpen(false);
      toast.success("Appointment cancelled successfully.");
    }
  });

  const rescheduleMutation = useMutation({
    mutationFn: async (appt: any) => {
      const { error } = await supabase
        .from("appointments")
        .update({ 
           status: 'reschedule-requested',
           reschedule_note: JSON.stringify({ newDate: rDate, newTime: rSlot, note: rNote })
        })
        .eq("id", appt.id)
        .eq("customer_id", user?.id);
      if (error) throw error;

      await supabase.from('notifications').insert({
        user_id: import.meta.env.VITE_OWNER_USER_ID,
        title: 'Reschedule Request',
        message: `${profile?.full_name} wants to reschedule to ${rDate} at ${rSlot}`,
        type: 'appointment',
        link: '/owner/appointments'
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["my-appointments"] });
      setIsRescheduleModalOpen(false);
      toast.success("Reschedule request sent. We'll confirm shortly.");
    }
  });

  const getStatusStyle = (status: string) => {
    switch(status) {
      case 'confirmed': return "bg-green-100 text-green-700 border-green-200";
      case 'rejected': return "bg-red-100 text-red-700 border-red-200";
      case 'reschedule-requested': return "bg-blue-100 text-blue-700 border-blue-200";
      case 'cancelled': return "bg-gray-100 text-gray-500 border-gray-200";
      default: return "bg-amber-100 text-amber-700 border-amber-200";
    }
  };

  const activeList = activeSubTab === 'upcoming' ? upcoming : activeSubTab === 'past' ? past : cancelled;

  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="font-serif text-3xl font-bold text-[#000000] mb-2">My Appointments</h2>
          <p className="text-[#6B6B6B]">Manage your showroom and home visit bookings.</p>
        </div>
      </div>

      <div className="flex items-center gap-2 bg-[#F1EFEC] p-1.5 rounded-2xl w-fit border border-[#E8E4DF]">
          {['upcoming', 'past', 'cancelled'].map((tab) => (
              <button
                  key={tab}
                  onClick={() => setActiveSubTab(tab as any)}
                  className={cn(
                    "px-6 py-2.5 rounded-xl text-[12px] font-bold uppercase tracking-wider transition-all duration-300",
                    activeSubTab === tab ? "bg-white text-[#000000] shadow-md ring-1 ring-black/5" : "text-[#999] hover:text-[#000000]"
                  )}
              >
                  {tab}
              </button>
          ))}
      </div>

      <div className="grid gap-6">
        {isLoading ? (
          [1, 2].map(i => <div key={i} className="h-48 bg-white border border-[#E8E4DF] rounded-2xl animate-pulse" />)
        ) : activeList.length === 0 ? (
          <div className="bg-white border-2 border-dashed border-[#E8E4DF] rounded-3xl py-24 text-center">
            <CalendarDays className="w-16 h-16 text-[#E8E4DF] mx-auto mb-6" />
            <h3 className="font-serif text-2xl font-bold text-[#000000] mb-2">No {activeSubTab} appointments</h3>
            <p className="text-[#6B6B6B] max-w-sm mx-auto mb-8">Schedule a visit to experience our premium collections in person.</p>
            <Button asChild className="bg-[#000000] hover:bg-[#C9A84C] text-white rounded-full px-8 h-12 font-bold tracking-wide">
              <Link to="/book-visit">Schedule a Visit</Link>
            </Button>
          </div>
        ) : (
          activeList.map((appt: any) => (
            <div key={appt.id} className="bg-white rounded-2xl border border-[#E8E4DF] overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8">
                {/* Date Card */}
                <div className="flex flex-col items-center justify-center p-6 bg-[#F8F7F4] rounded-2xl border border-[#E8E4DF] min-w-[120px] h-fit">
                    <span className="text-[12px] font-bold text-[#C9A84C] uppercase tracking-widest">{format(new Date(appt.appointment_date), "MMM")}</span>
                    <span className="text-4xl font-serif font-black text-[#000000] my-1">{format(new Date(appt.appointment_date), "dd")}</span>
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-[#000000]/5 rounded-full mt-2">
                         <Clock className="w-3 h-3 text-[#000000]" />
                         <span className="text-[10px] font-black text-[#000000] uppercase tracking-tighter">{appt.time_slot}</span>
                    </div>
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                       <span className={cn("px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border", getStatusStyle(appt.status))}>
                          {appt.status.replace('-', ' ')}
                       </span>
                       <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-[#F8F7F4] text-[#000000] border border-[#E8E4DF]">
                          {appt.visit_type === 'home-visit' ? <Home className="w-3 h-3" /> : <Store className="w-3 h-3" />}
                          {appt.visit_type?.replace('-', ' ')}
                       </span>
                    </div>

                    <h4 className="text-2xl font-serif font-bold text-[#000000]">
                       {appt.product?.name ? `Inquiry for ${appt.product.name}` : "General Showroom Visit"}
                    </h4>

                    {appt.notes && <p className="text-[14px] text-[#6B6B6B] leading-relaxed font-body italic italic">"{appt.notes}"</p>}

                    {appt.status === 'reschedule-requested' && appt.reschedule_note && (
                        <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl">
                           <p className="text-[11px] font-bold text-blue-900 uppercase mb-1">Reschedule Pending</p>
                           {(() => {
                             try {
                               const noteData = typeof appt.reschedule_note === 'string' 
                                 ? JSON.parse(appt.reschedule_note) 
                                 : appt.reschedule_note;
                               return (
                                 <p className="text-[13px] text-blue-700/80">
                                   Requested for {noteData.newDate} at {noteData.newTime}
                                 </p>
                               );
                             } catch (e) {
                               return <p className="text-[13px] text-blue-700/80">Reschedule details unavailable</p>;
                             }
                           })()}
                        </div>
                    )}
                  </div>
                </div>

                {activeSubTab === 'upcoming' && ['pending', 'confirmed'].includes(appt.status) && (
                  <div className="flex flex-col gap-2 min-w-[180px] justify-center md:border-l border-[#F0F0F0] md:pl-8">
                    <Button 
                      variant="outline" 
                      className="h-11 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-white rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all"
                      onClick={() => { setSelectedAppt(appt); setIsRescheduleModalOpen(true); }}
                    >
                      <RefreshCw className="mr-2 w-3.5 h-3.5" />
                      Reschedule
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="h-11 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-xl text-[11px] font-bold uppercase tracking-widest"
                      onClick={() => { setSelectedAppt(appt); setIsCancelModalOpen(true); }}
                    >
                      <XCircle className="mr-2 w-3.5 h-3.5" />
                      Cancel Visit
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modals */}
      <Dialog open={isCancelModalOpen} onOpenChange={setIsCancelModalOpen}>
          <DialogContent className="max-w-md p-8 rounded-3xl">
              <DialogHeader className="text-center">
                  <DialogTitle className="font-serif text-2xl font-bold text-[#000000]">Cancel Appointment</DialogTitle>
                  <DialogDescription className="font-body text-[15px] pt-2">
                     Are you sure you want to cancel your visit? This action cannot be undone.
                  </DialogDescription>
              </DialogHeader>
              <div className="pt-6 flex gap-3">
                  <Button variant="outline" className="flex-1 h-12 rounded-xl" onClick={() => setIsCancelModalOpen(false)}>No, Keep it</Button>
                  <Button 
                    className="flex-1 h-12 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-xl"
                    disabled={cancelMutation.isPending}
                    onClick={() => cancelMutation.mutate(selectedAppt)}
                  >
                    Cancel Appointment
                  </Button>
              </div>
          </DialogContent>
      </Dialog>

      <Dialog open={isRescheduleModalOpen} onOpenChange={setIsRescheduleModalOpen}>
        <DialogContent className="max-w-lg p-8 rounded-3xl">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl font-bold text-[#000000]">Request Reschedule</DialogTitle>
            <DialogDescription className="font-body text-sm pt-1">
              Select your new preferred visit time and our staff will confirm.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 pt-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                 <label className="text-[10px] font-bold uppercase tracking-widest text-[#999]">Preferred Date</label>
                 <Input type="date" value={rDate} onChange={e => setRDate(e.target.value)} />
              </div>
              <div className="space-y-2">
                 <label className="text-[10px] font-bold uppercase tracking-widest text-[#999]">Preferred Time Slot</label>
                 <select className="w-full h-10 px-3 bg-white border border-[#E8E4DF] rounded-md text-sm" value={rSlot} onChange={e => setRSlot(e.target.value)}>
                    <option value="">Select a Slot</option>
                    <option value="10:00 AM - 12:00 PM">Morning (10-12)</option>
                    <option value="12:00 PM - 02:00 PM">Noon (12-2)</option>
                    <option value="02:00 PM - 04:00 PM">Afternoon (2-4)</option>
                    <option value="04:00 PM - 06:00 PM">Evening (4-6)</option>
                 </select>
              </div>
            </div>
            <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#999]">Note (Optional)</label>
                <Textarea placeholder="Explain your reason..." value={rNote} onChange={e => setRNote(e.target.value)} />
            </div>
          </div>
          <DialogFooter className="pt-8">
             <Button variant="outline" className="h-12 px-8 rounded-xl" onClick={() => setIsRescheduleModalOpen(false)}>Cancel</Button>
             <Button 
                className="h-12 bg-[#000000] text-white font-bold uppercase px-8 rounded-xl"
                disabled={!rDate || !rSlot || rescheduleMutation.isPending}
                onClick={() => rescheduleMutation.mutate(selectedAppt)}
             >
                Send Request
             </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
