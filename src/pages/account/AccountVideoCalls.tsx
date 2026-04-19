import { useState, useMemo, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";
import { 
  Video, Clock, CheckCircle2, 
  XCircle, RefreshCw, CalendarDays,
  ShieldAlert
} from "lucide-react";
import { format, isBefore, startOfToday, isAfter, addMinutes, differenceInMinutes } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import JitsiCallRoom from "@/components/JitsiCallRoom";
import { toast } from "sonner";
import { Link } from "react-router-dom";

export default function AccountVideoCalls() {
  const { user, profile } = useAuth();
  const queryClient = useQueryClient();
  const [activeSubTab, setActiveSubTab] = useState<'upcoming' | 'past'>('upcoming');
  const [activeCall, setActiveCall] = useState<any>(null);
  const [now, setNow] = useState(new Date());

  // Update current time every minute for join button status
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const { data: videoCalls = [], isLoading } = useQuery({
    queryKey: ["my-video-calls", user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("appointments")
        .select(`*, product:products(name)`)
        .eq("customer_id", user?.id)
        .eq("visit_type", "video-call")
        .order("appointment_date", { ascending: false });
      
      if (error) throw error;
      return data;
    },
    enabled: !!user,
  });

  const { upcoming, past } = useMemo(() => {
    const today = startOfToday();
    return videoCalls.reduce((acc: any, appt: any) => {
      const apptDate = new Date(appt.appointment_date);
      const isPast = isBefore(apptDate, today) || ['completed', 'rejected', 'cancelled'].includes(appt.status);
      if (isPast) acc.past.push(appt);
      else acc.upcoming.push(appt);
      return acc;
    }, { upcoming: [], past: [] });
  }, [videoCalls]);

  const canJoin = (date: string, timeSlot: string) => {
    try {
      // timeSlot format: "10:00 AM - 12:00 PM"
      const startTimeStr = timeSlot.split(' - ')[0];
      const startDateTime = new Date(`${date} ${startTimeStr}`);
      const joinWindowStart = addMinutes(startDateTime, -10); // 10 mins early
      const joinWindowEnd = addMinutes(startDateTime, 120); // 2 hours window
      
      return isAfter(now, joinWindowStart) && isBefore(now, joinWindowEnd);
    } catch {
      return false;
    }
  };

  const getCountdown = (date: string, timeSlot: string) => {
    try {
      const startTimeStr = timeSlot.split(' - ')[0];
      const startDateTime = new Date(`${date} ${startTimeStr}`);
      const diff = differenceInMinutes(startDateTime, now);
      if (diff <= 0) return null;
      if (diff > 1440) return `Opens in ${Math.floor(diff / 1440)}d`;
      if (diff > 60) return `Opens in ${Math.floor(diff / 60)}h ${diff % 60}m`;
      return `Opens in ${diff}m`;
    } catch {
      return null;
    }
  };

  const activeList = activeSubTab === 'upcoming' ? upcoming : past;

  return (
    <div className="space-y-8 pb-20">
      <div>
        <h2 className="font-serif text-3xl font-bold text-[#000000] mb-2">My Video Consultations</h2>
        <p className="text-[#6B6B6B]">Connect with our experts from the comfort of your home.</p>
      </div>

      <div className="flex items-center gap-2 bg-[#F1EFEC] p-1.5 rounded-2xl w-fit border border-[#E8E4DF]">
          {['upcoming', 'past'].map((tab) => (
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
            <Video className="w-16 h-16 text-[#E8E4DF] mx-auto mb-6" />
            <h3 className="font-serif text-2xl font-bold text-[#000000] mb-2">No {activeSubTab} consultations</h3>
            <p className="text-[#6B6B6B] max-w-sm mx-auto mb-8">Schedule a one-on-one video call with our luxury design consultants.</p>
            <Button asChild className="bg-[#000000] hover:bg-[#C9A84C] text-white rounded-full px-8 h-12 font-bold tracking-wide">
               <Link to="/book-visit">Book Video Call</Link>
            </Button>
          </div>
        ) : (
          activeList.map((appt: any) => {
            const joinable = appt.status === 'confirmed' && canJoin(appt.appointment_date, appt.time_slot);
            const countdown = appt.status === 'confirmed' && !joinable ? getCountdown(appt.appointment_date, appt.time_slot) : null;

            return (
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
                        <span className={cn(
                          "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border",
                          appt.status === 'confirmed' ? "bg-green-100 text-green-700 border-green-200" :
                          appt.status === 'pending' ? "bg-amber-100 text-amber-700 border-amber-200" : "bg-gray-100 text-gray-400 border-gray-200"
                        )}>
                          {appt.status}
                        </span>
                        {appt.status === 'confirmed' && joinable && (
                          <span className="flex items-center gap-1.5 px-3 py-1 bg-green-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full animate-pulse">
                            Room Ready
                          </span>
                        )}
                      </div>

                      <h4 className="text-2xl font-serif font-bold text-[#000000]">
                         {appt.product?.name ? `Consultation re: ${appt.product.name}` : "General Video Consultation"}
                      </h4>
                      
                      {appt.call_duration_seconds > 0 && (
                        <p className="text-sm font-medium text-[#6B6B6B]">Duration: {Math.floor(appt.call_duration_seconds / 60)} minutes</p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 min-w-[180px] justify-center md:border-l border-[#F0F0F0] md:pl-8">
                    {appt.status === 'confirmed' && (
                      joinable ? (
                        <Button 
                          className="h-12 bg-[#000000] hover:bg-[#C9A84C] text-white rounded-xl text-[11px] font-bold uppercase tracking-widest shadow-lg shadow-black/20"
                          onClick={() => setActiveCall(appt)}
                        >
                          <Video className="mr-2 w-4 h-4" />
                          Join Call Now
                        </Button>
                      ) : countdown ? (
                        <div className="px-4 py-3 bg-[#F8F7F4] border border-[#E8E4DF] rounded-xl text-center">
                            <p className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-widest leading-tight">
                              {countdown}
                            </p>
                        </div>
                      ) : appt.status === 'completed' ? (
                        <div className="px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-center">
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Call Ended</p>
                        </div>
                      ) : null
                    )}

                    {appt.status === 'pending' && (
                       <Button 
                        variant="ghost" 
                        className="h-11 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-xl text-[11px] font-bold uppercase tracking-widest"
                        onClick={async () => {
                          const { error } = await supabase.from('appointments').update({ status: 'cancelled' }).eq('id', appt.id);
                          if (!error) {
                            queryClient.invalidateQueries({ queryKey: ["my-video-calls"] });
                            toast.success("Request cancelled.");
                          }
                        }}
                      >
                        Cancel Request
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {activeCall && (
        <JitsiCallRoom
          appointmentId={activeCall.id}
          participantType="customer"
          participantName={profile?.full_name || "Customer"}
          appointmentDate={activeCall.appointment_date}
          timeSlot={activeCall.time_slot}
          productName={activeCall.product?.name}
          onLeave={() => {
            setActiveCall(null);
            queryClient.invalidateQueries({ queryKey: ["my-video-calls"] });
          }}
          logoUrl={import.meta.env.VITE_STORE_LOGO_URL}
        />
      )}
    </div>
  );
}
