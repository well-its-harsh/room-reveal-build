import { useAuth } from "@/contexts/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { 
  MessageSquare, CalendarDays, Video, Heart, Clock, 
  ArrowRight, Plus, MessageCircle, ShoppingBag 
} from "lucide-react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function AccountDashboard() {
  const { profile, user } = useAuth();

  const { data: stats } = useQuery({
    queryKey: ["account-stats"],
    queryFn: async () => {
      const [enq, appt, vc, wish] = await Promise.all([
        supabase.from("enquiries").select("id", { count: "exact", head: true }).eq("user_id", user?.id),
        supabase.from("appointments").select("id", { count: "exact", head: true }).eq("customer_id", user?.id).neq("status", "cancelled"),
        supabase.from("appointments").select("id", { count: "exact", head: true }).eq("customer_id", user?.id).eq("visit_type", "video-call").eq("status", "confirmed"),
        supabase.from("wishlists").select("id", { count: "exact", head: true }).eq("user_id", user?.id),
      ]);
      return {
        enquiries: enq.count || 0,
        appointments: appt.count || 0,
        videoCalls: vc.count || 0,
        wishlist: wish.count || 0
      };
    },
    enabled: !!user
  });

  const { data: timeline = [] } = useQuery({
    queryKey: ["account-timeline"],
    queryFn: async () => {
      const [enq, appt, chat] = await Promise.all([
        supabase.from("enquiries").select("created_at, message, product:products(name)").eq("user_id", user?.id).order("created_at", { ascending: false }).limit(5),
        supabase.from("appointments").select("created_at, appointment_date, visit_type").eq("customer_id", user?.id).order("created_at", { ascending: false }).limit(5),
        supabase.from("chat_messages").select("created_at, content").eq("sender_id", user?.id).order("created_at", { ascending: false }).limit(5),
      ]);

      const merged = [
        ...(enq.data || []).map(e => ({ type: 'enquiry', date: new Date(e.created_at), text: `Submitted enquiry for ${e.product?.name || 'general'}` })),
        ...(appt.data || []).map(a => ({ type: 'appointment', date: new Date(a.created_at), text: `Booked ${a.visit_type?.replace('-', ' ')} for ${a.appointment_date}` })),
        ...(chat.data || []).map(c => ({ type: 'chat', date: new Date(c.created_at), text: 'Sent a chat message' })),
      ].sort((a, b) => b.date.getTime() - a.date.getTime()).slice(0, 8);

      return merged;
    },
    enabled: !!user
  });

  const cards = [
    { label: "Enquiries", val: stats?.enquiries || 0, icon: MessageSquare, to: "/account/enquiries" },
    { label: "Appointments", val: stats?.appointments || 0, icon: CalendarDays, to: "/account/appointments" },
    { label: "Video Calls", val: stats?.videoCalls || 0, icon: Video, to: "/account/video-calls" },
    { label: "Wishlist Items", val: stats?.wishlist || 0, icon: Heart, to: "/account/wishlist" },
  ];

  return (
    <div className="space-y-10">
      {/* Greeting */}
      <div>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#000000] mb-2">
          Welcome back, <span className="text-[#C9A84C]">{profile?.full_name?.split(' ')[0] || "Guest"}</span>
        </h1>
        <p className="text-[#6B6B6B] text-lg font-body">Manage your luxury home design journey from one place.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {cards.map((c, i) => (
          <Link 
            key={i} 
            to={c.to}
            className="group bg-white p-6 rounded-2xl border-t-[3px] border-[#C9A84C] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-full bg-[#F8F7F4] flex items-center justify-center text-[#C9A84C] group-hover:bg-[#C9A84C] group-hover:text-white transition-colors">
                <c.icon className="w-5 h-5" />
              </div>
              <span className="text-3xl font-bold text-[#000000] tabular-nums">{c.val}</span>
            </div>
            <p className="text-[#6B6B6B] text-[13px] font-bold uppercase tracking-widest">{c.label}</p>
          </Link>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Activity Timeline */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-2xl font-bold text-[#000000]">Recent Activity</h3>
            <Clock className="w-5 h-5 text-[#C9A84C]/50" />
          </div>
          
          <div className="bg-white rounded-2xl border border-[#E8E4DF] p-8 shadow-sm">
            <div className="space-y-8 relative before:absolute before:inset-0 before:left-[11px] before:w-px before:bg-[#E8E4DF] before:my-2">
              {timeline.length > 0 ? timeline.map((item, i) => (
                <div key={i} className="relative pl-10 flex items-start justify-between group">
                  <div className={cn(
                    "absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full border-2 border-white flex items-center justify-center z-10 shadow-sm transition-transform group-hover:scale-125",
                    item.type === 'enquiry' ? "bg-amber-500" : item.type === 'appointment' ? "bg-blue-500" : "bg-emerald-500"
                  )}>
                    {item.type === 'enquiry' ? <MessageSquare className="w-2.5 h-2.5 text-white" /> : item.type === 'appointment' ? <CalendarDays className="w-2.5 h-2.5 text-white" /> : <MessageCircle className="w-2.5 h-2.5 text-white" />}
                  </div>
                  <div>
                    <p className="text-[#000000] font-medium text-[15px]">{item.text}</p>
                    <p className="text-[#6B6B6B] text-xs">{formatDistanceToNow(item.date, { addSuffix: true })}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#E8E4DF] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                </div>
              )) : (
                <div className="text-center py-10 opacity-40">
                  <p className="font-serif italic">No recent activity detected.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <h3 className="font-serif text-2xl font-bold text-[#000000]">Quick Actions</h3>
          <div className="grid gap-3">
             {[
               { label: "Browse Products", icon: ShoppingBag, to: "/products", bg: "bg-white", text: "text-[#000000]" },
               { label: "Book a Consultation", icon: Plus, to: "/book-visit", bg: "bg-[#000000]", text: "text-white" },
               { label: "Chat with Us", icon: MessageCircle, to: "/account/chats", bg: "bg-[#C9A84C]", text: "text-[#000000]" }
             ].map((a, i) => (
               <Link 
                 key={i} 
                 to={a.to}
                 className={cn(
                   "flex items-center gap-4 p-5 rounded-xl border border-[#E8E4DF] font-bold text-sm tracking-wide transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]",
                   a.bg, a.text
                 )}
               >
                 <a.icon className="w-5 h-5 shrink-0" />
                 {a.label}
               </Link>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}
