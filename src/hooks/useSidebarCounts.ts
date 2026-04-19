import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";

export function useSidebarCounts() {
  const [counts, setCounts] = useState({
    enquiries: 0,
    appointments: 0,
    videoCalls: 0,
    reviews: 0,
    notifications: 0,
    unreadChats: 0
  });

  const fetchCounts = useCallback(async () => {
    try {
      const [enq, appt, vc, rev, notif, chat] = await Promise.all([
        supabase.from('enquiries').select('id', { count: 'exact', head: true }).eq('seen_by_owner', false),
        supabase.from('appointments').select('id', { count: 'exact', head: true }).eq('seen_by_owner', false).eq('status', 'pending').neq('visit_type', 'video-call'),
        supabase.from('appointments').select('id', { count: 'exact', head: true }).eq('seen_by_owner', false).eq('status', 'pending').eq('visit_type', 'video-call'),
        supabase.from('reviews').select('id', { count: 'exact', head: true }).eq('seen_by_owner', false),
        supabase.from('notifications').select('id', { count: 'exact', head: true }).or(`user_id.eq.${import.meta.env.VITE_OWNER_USER_ID},user_id.is.null`).eq('is_read', false),
        supabase.from('chat_conversations').select('unread_owner_count'),
      ]);
      
      const unreadChatCount = (chat?.data || []).reduce((acc: number, curr: any) => acc + (curr.unread_owner_count || 0), 0);

      setCounts({
        enquiries: enq.count ?? 0,
        appointments: appt.count ?? 0,
        videoCalls: vc.count ?? 0,
        reviews: rev.count ?? 0,
        notifications: notif.count ?? 0,
        unreadChats: unreadChatCount
      });
    } catch (error) {
      console.error("Error fetching sidebar counts:", error);
    }
  }, []);

  useEffect(() => {
    fetchCounts();

    const channels = [
      supabase.channel('enquiries-changes').on('postgres_changes', { event: '*', schema: 'public', table: 'enquiries' }, fetchCounts).subscribe(),
      supabase.channel('appointments-changes').on('postgres_changes', { event: '*', schema: 'public', table: 'appointments' }, fetchCounts).subscribe(),
      supabase.channel('reviews-changes').on('postgres_changes', { event: '*', schema: 'public', table: 'reviews' }, fetchCounts).subscribe(),
      supabase.channel('notifications-changes').on('postgres_changes', { event: '*', schema: 'public', table: 'notifications' }, fetchCounts).subscribe(),
      supabase.channel('chat-changes').on('postgres_changes', { event: '*', schema: 'public', table: 'chat_conversations' }, fetchCounts).subscribe(),
    ];

    return () => {
      channels.forEach(channel => supabase.removeChannel(channel));
    };
  }, [fetchCounts]);

  return counts;
}
