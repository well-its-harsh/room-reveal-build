import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";
import { formatDistanceToNow } from "date-fns";
import { 
  Bell, 
  MessageSquare, 
  Calendar, 
  Video, 
  Star, 
  Check, 
  CheckCheck,
  Circle,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

import { useMarkPageAsSeen } from "@/hooks/useMarkPageAsSeen";

export default function OwnerNotifications() {
  useMarkPageAsSeen('notifications');
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: notifications = [], isLoading } = useQuery({
    queryKey: ["owner-notifications"],
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

  const markReadMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from("notifications")
        .update({ is_read: true })
        .eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["owner-notifications"] });
    }
  });

  const markAllReadMutation = useMutation({
    mutationFn: async () => {
      const { error } = await supabase
        .from("notifications")
        .update({ is_read: true })
        .eq("user_id", user?.id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["owner-notifications"] });
      toast.success("All notifications marked as read");
    }
  });

  const handleNotificationClick = async (notif: any) => {
    if (!notif.is_read) {
      await markReadMutation.mutateAsync(notif.id);
    }
    if (notif.link) {
      navigate(notif.link);
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'enquiry': return <MessageSquare className="w-5 h-5 text-blue-500" />;
      case 'appointment': return <Calendar className="w-5 h-5 text-amber-500" />;
      case 'video-call': return <Video className="w-5 h-5 text-purple-500" />;
      case 'review': return <Star className="w-5 h-5 text-[#C8860A]" />;
      default: return <Bell className="w-5 h-5 text-gray-400" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-serif font-bold text-[#1A1A1A]">Notifications</h2>
          <p className="text-[#6B6B6B] mt-1">Stay updated with latest activity across your showroom.</p>
        </div>
        <Button 
          variant="outline" 
          className="border-[#E8E4DF] text-xs font-bold gap-2"
          onClick={() => markAllReadMutation.mutate()}
          disabled={notifications.every((n: any) => n.is_read) || isLoading}
        >
          <CheckCheck className="w-4 h-4" /> Mark All Read
        </Button>
      </div>

      <div className="bg-white border border-[#E8E4DF] rounded-2xl shadow-sm overflow-hidden">
        {isLoading ? (
          <div className="p-12 text-center text-[#6B6B6B] animate-pulse">
             Loading notifications...
          </div>
        ) : notifications.length === 0 ? (
          <div className="p-20 text-center">
            <div className="w-16 h-16 rounded-full bg-[#F7F5F2] flex items-center justify-center mx-auto mb-4">
              <Bell className="w-8 h-8 text-[#E8E4DF]" />
            </div>
            <p className="font-bold text-[#1A1A1A]">No notifications yet</p>
            <p className="text-sm text-[#6B6B6B]">You're all caught up!</p>
          </div>
        ) : (
          <div className="divide-y divide-[#E8E4DF]">
            {notifications.map((notif: any) => (
              <div 
                key={notif.id}
                onClick={() => handleNotificationClick(notif)}
                className={cn(
                  "p-6 flex gap-6 cursor-pointer hover:bg-[#F7F5F2] transition-colors relative",
                  !notif.is_read && "bg-white border-l-4 border-l-[#C8860A]"
                )}
              >
                <div className="w-12 h-12 rounded-full bg-[#F7F5F2] flex items-center justify-center flex-shrink-0 border border-[#E8E4DF]">
                  {getIcon(notif.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className={cn("text-[15px] font-bold", !notif.is_read ? "text-[#1A1A1A]" : "text-[#6B6B6B]")}>
                      {notif.title}
                    </h4>
                    <span className="text-[11px] text-[#6B6B6B] flex items-center gap-1">
                       <Clock className="w-3 h-3" /> {formatDistanceToNow(new Date(notif.created_at), { addSuffix: true })}
                    </span>
                  </div>
                  <p className={cn("text-[14px] leading-relaxed", !notif.is_read ? "text-[#1A1A1A]" : "text-[#6B6B6B]")}>
                    {notif.message}
                  </p>
                  
                  {notif.link && (
                    <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold text-[#C8860A] uppercase tracking-wider">
                       View Details <Check className="w-3 h-3" />
                    </div>
                  )}
                </div>
                {!notif.is_read && (
                  <div className="absolute top-6 right-6">
                     <Circle className="w-2 h-2 fill-[#C8860A] text-[#C8860A]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
