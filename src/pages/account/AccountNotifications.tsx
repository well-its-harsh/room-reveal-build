import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";
import { formatDistanceToNow, isToday, isYesterday, isWithinInterval, subDays, startOfDay } from "date-fns";
import { 
  Bell, MessageSquare, Calendar, 
  Clock, CheckCircle2, Video,
  Inbox, ArrowRight, MessageCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useEffect } from "react";

export default function AccountNotifications() {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: notifications = [], isLoading } = useQuery({
    queryKey: ["notifications", user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("notifications")
        .select("*")
        .eq("user_id", user?.id)
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      return data || [];
    },
    enabled: !!user?.id
  });

  // Realtime subscription
  useEffect(() => {
    if (!user?.id) return;
    const channel = supabase.channel('account-notifs')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'notifications', filter: `user_id=eq.${user.id}` }, () => {
        queryClient.invalidateQueries({ queryKey: ["notifications", user.id] });
      })
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, [user?.id, queryClient]);

  const markReadMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("notifications").update({ is_read: true }).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["notifications", user?.id] })
  });

  const markAllReadMutation = useMutation({
    mutationFn: async () => {
      const { error } = await supabase.from("notifications").update({ is_read: true }).eq("user_id", user?.id).eq("is_read", false);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications", user?.id] });
      toast.success("All notifications marked as read.");
    }
  });

  const handleNotificationClick = async (notif: any) => {
    if (!notif.is_read) await markReadMutation.mutateAsync(notif.id);
    if (notif.link) navigate(notif.link);
  };

  const getGroup = (date: Date) => {
    const today = startOfDay(new Date());
    if (isToday(date)) return "Today";
    if (isYesterday(date)) return "Yesterday";
    if (isWithinInterval(date, { start: subDays(today, 7), end: subDays(today, 2) })) return "This Week";
    return "Earlier";
  };

  const grouped = notifications.reduce((acc: any, notif: any) => {
    const group = getGroup(new Date(notif.created_at));
    if (!acc[group]) acc[group] = [];
    acc[group].push(notif);
    return acc;
  }, {});

  const getIcon = (type: string) => {
    switch (type) {
      case 'enquiry': return <Inbox className="w-5 h-5" />;
      case 'appointment': return <Calendar className="w-5 h-5" />;
      case 'video-call': return <Video className="w-5 h-5" />;
      case 'chat': return <MessageCircle className="w-5 h-5" />;
      default: return <Bell className="w-5 h-5" />;
    }
  };

  const groupOrder = ["Today", "Yesterday", "This Week", "Earlier"];

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#E8E4DF] pb-8">
        <div>
          <h2 className="font-serif text-3xl font-bold text-[#000000] mb-2">Notifications</h2>
          <p className="text-[#6B6B6B]">Updates on your design consultations and enquiries.</p>
        </div>
        {notifications.some(n => !n.is_read) && (
          <Button 
            variant="ghost" 
            onClick={() => markAllReadMutation.mutate()}
            className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C9A84C] hover:text-[#000000] transition-colors"
          >
            Mark all read
          </Button>
        )}
      </div>

      {isLoading ? (
        <div className="space-y-6 pt-4">{[1, 2, 3].map(i => <div key={i} className="h-24 bg-white border border-[#E8E4DF] rounded-2xl animate-pulse" />)}</div>
      ) : notifications.length === 0 ? (
        <div className="bg-white border-2 border-dashed border-[#E8E4DF] rounded-[3rem] py-24 text-center">
            <Bell className="w-16 h-16 text-[#E8E4DF] mx-auto mb-6" />
            <h3 className="font-serif text-2xl font-bold text-[#000000] mb-2">Staying Quiet</h3>
            <p className="text-[#6B6B6B]">You're all caught up. New updates will appear here.</p>
        </div>
      ) : (
        <div className="space-y-12">
           {groupOrder.map(group => grouped[group] && (
             <div key={group} className="space-y-4">
                <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#C9A84C] ml-2">{group}</h4>
                <div className="space-y-3">
                   {grouped[group].map((notif: any) => (
                     <div 
                       key={notif.id}
                       onClick={() => handleNotificationClick(notif)}
                       className={cn(
                         "group relative bg-white border rounded-2xl p-6 transition-all duration-300 cursor-pointer overflow-hidden",
                         notif.is_read ? "border-[#E8E4DF] opacity-60 hover:opacity-100" : "border-[#C9A84C] shadow-lg shadow-blue-900/5 ring-1 ring-[#000]/5"
                       )}
                     >
                       {!notif.is_read && <div className="absolute top-4 right-6 w-2.5 h-2.5 bg-[#C9A84C] rounded-full shadow-lg shadow-[#C9A84C]/50 animate-pulse" />}
                       
                       <div className="flex gap-6 items-start">
                          <div className={cn(
                            "w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 animate-in zoom-in-50 duration-500",
                            notif.is_read ? "bg-[#F8F7F4] text-[#6B6B6B]" : "bg-[#000000] text-[#C9A84C]"
                          )}>
                             {getIcon(notif.type)}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                             <div className="flex justify-between items-start mb-1">
                                <h5 className={cn("font-serif text-lg font-bold truncate pr-4", notif.is_read ? "text-[#000000]/70" : "text-[#000000]")}>
                                  {notif.title || "Notification"}
                                </h5>
                                <span className="text-[10px] text-[#999] font-bold uppercase shrink-0 mt-1">{formatDistanceToNow(new Date(notif.created_at), { addSuffix: true })}</span>
                             </div>
                             <p className={cn("text-[14px] leading-relaxed font-body line-clamp-2", notif.is_read ? "text-[#999]" : "text-[#6B6B6B]")}>
                               {notif.message}
                             </p>
                             
                             {notif.link && (
                               <div className="mt-4 flex items-center gap-1.5 text-[9px] font-black text-[#C9A84C] uppercase tracking-widest group-hover:gap-2.5 transition-all">
                                  View Details <ArrowRight className="w-3.5 h-3.5" />
                               </div>
                             )}
                          </div>
                       </div>
                     </div>
                   ))}
                </div>
             </div>
           ))}
        </div>
      )}
    </div>
  );
}
