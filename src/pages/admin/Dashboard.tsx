import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { 
  Package, MessageSquare, Star, 
  TrendingUp, Users, Video, 
  MapPin, Phone, Mail, ExternalLink 
} from "lucide-react";
import { Link } from "react-router-dom";
import { STORE_INFO } from "@/constants/storeInfo";
import { format, startOfMonth } from "date-fns";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";

export default function OwnerDashboard() {
  const { data: stats } = useQuery({
    queryKey: ["owner-dashboard-stats"],
    queryFn: async () => {
      const startOfMonthISO = startOfMonth(new Date()).toISOString();
      
      const [enqMonth, apptPending, vcPending, products, newReviews, storeSettings, chat] = await Promise.all([
        supabase.from("enquiries").select("id", { count: "exact", head: true }).gte("created_at", startOfMonthISO),
        supabase.from("appointments").select("id", { count: "exact", head: true }).eq("status", "pending").eq("visit_type", "store-visit"),
        supabase.from("appointments").select("id", { count: "exact", head: true }).eq("status", "pending").eq("visit_type", "video-call"),
        supabase.from("products").select("id", { count: "exact", head: true }),
        supabase.from("reviews").select("id", { count: "exact", head: true }).eq("seen_by_owner", false),
        supabase.from("store_settings").select("key, value"),
        supabase.from("chat_conversations").select("unread_owner_count")
      ]);
      
      const settings = (storeSettings.data || []).reduce((acc: any, curr) => {
        acc[curr.key] = curr.value;
        return acc;
      }, {});

      const unreadChatCount = (chat?.data || []).reduce((acc: number, curr: any) => acc + (curr.unread_owner_count || 0), 0);

      return {
        enquiriesMonth: enqMonth.count || 0,
        pendingAppointments: apptPending.count || 0,
        pendingVideoCalls: vcPending.count || 0,
        totalProducts: products.count || 0,
        newReviews: newReviews.count || 0,
        unreadChats: unreadChatCount,
        settings
      };
    },
  });

  const queryClient = useQueryClient();

  useEffect(() => {
    const channel = supabase
      .channel("dashboard-realtime")
      .on("postgres_changes", { event: "*", schema: "public", table: "chat_conversations" }, () => {
        queryClient.invalidateQueries({ queryKey: ["owner-dashboard-stats"] });
      })
      .on("postgres_changes", { event: "*", schema: "public", table: "enquiries" }, () => {
        queryClient.invalidateQueries({ queryKey: ["owner-dashboard-stats"] });
        queryClient.invalidateQueries({ queryKey: ["owner-recent-enquiries-dashboard"] });
      })
      .on("postgres_changes", { event: "*", schema: "public", table: "appointments" }, () => {
        queryClient.invalidateQueries({ queryKey: ["owner-dashboard-stats"] });
        queryClient.invalidateQueries({ queryKey: ["owner-recent-appointments-dashboard"] });
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [queryClient]);

  const { data: recentEnquiries = [] } = useQuery({
    queryKey: ["owner-recent-enquiries-dashboard"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("enquiries")
        .select("*, product:products(name)")
        .order("created_at", { ascending: false })
        .limit(5);
      if (error) throw error;
      return data || [];
    },
  });

  const { data: recentAppointments = [] } = useQuery({
    queryKey: ["owner-recent-appointments-dashboard"],
    queryFn: async () => {
      const today = new Date().toISOString().split('T')[0];
      const { data, error } = await supabase
        .from("appointments")
        .select("*")
        .gte("appointment_date", today)
        .order("appointment_date", { ascending: true })
        .limit(5);
      if (error) throw error;
      return data || [];
    },
  });

  const { data: recentReviews = [] } = useQuery({
    queryKey: ["owner-recent-reviews-dashboard"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("reviews")
        .select("*, profile:profiles(full_name)")
        .order("created_at", { ascending: false })
        .limit(3);
      if (error) throw error;
      return data || [];
    },
  });

  const kpiCards = [
    { label: "New Messages", value: stats?.unreadChats ?? "—", icon: MessageSquare, color: "text-emerald-600", bg: "bg-emerald-50", to: "/owner/chats" },
    { label: "Enquiries (Month)", value: stats?.enquiriesMonth ?? "—", icon: MessageSquare, color: "text-blue-600", bg: "bg-blue-50", to: "/owner/enquiries" },
    { label: "Pending Visits", value: stats?.pendingAppointments ?? "—", icon: Users, color: "text-purple-600", bg: "bg-purple-50", to: "/owner/appointments" },
    { label: "Video Calls", value: stats?.pendingVideoCalls ?? "—", icon: Video, color: "text-amber-600", bg: "bg-amber-50", to: "/owner/video-calls" },
    { label: "New Reviews", value: stats?.newReviews ?? "—", icon: Star, color: "text-[#C9A84C]", bg: "bg-black/5", to: "/owner/reviews" },
  ];

  return (
    <div className="space-y-8 pb-12">
      <div>
        <h2 className="font-serif text-3xl font-bold text-[#1A1A1A]">Dashboard Overview</h2>
        <p className="text-[#6B6B6B]">Welcome back. Here's what's happening today.</p>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {kpiCards.map(({ label, value, icon: Icon, color, bg, to }) => (
          <Link key={label} to={to || "#"} className="bg-white border border-[#E8E4DF] rounded-xl p-5 shadow-sm hover:shadow-md transition-all group">
            <div className={`w-10 h-10 rounded-lg ${bg} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
              <Icon className={`w-5 h-5 ${color}`} />
            </div>
            <p className="text-3xl font-bold text-[#000000]">{value}</p>
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#6B6B6B] mt-1">{label}</p>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Enquiries */}
        <div className="bg-white border border-[#E8E4DF] rounded-2xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-[#E8E4DF] flex items-center justify-between">
            <h3 className="font-bold text-[#1A1A1A] text-sm uppercase tracking-widest">Recent Enquiries</h3>
            <Link to="/owner/enquiries" className="text-xs font-bold text-[#C8860A] hover:underline">View All</Link>
          </div>
          <div className="divide-y divide-[#E8E4DF]">
            {recentEnquiries.length === 0 ? (
              <p className="p-8 text-center text-[#6B6B6B] text-sm">No recent enquiries.</p>
            ) : (
              recentEnquiries.map((enq) => (
                <div key={enq.id} className="p-4 flex items-center justify-between hover:bg-[#F7F5F2] transition-colors">
                  <div>
                    <p className="text-sm font-bold text-[#1A1A1A]">{enq.name}</p>
                    <p className="text-[11px] text-[#6B6B6B]">{enq.product?.name || "General Enquiry"}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2 py-0.5 rounded-full bg-[#1A1A1A] text-white text-[9px] font-black uppercase tracking-tighter mb-1">
                      {enq.status}
                    </span>
                    <p className="text-[10px] text-[#999]">{format(new Date(enq.created_at), "MMM d, h:mm a")}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Recent Appointments */}
        <div className="bg-white border border-[#E8E4DF] rounded-2xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-[#E8E4DF] flex items-center justify-between">
            <h3 className="font-bold text-[#1A1A1A] text-sm uppercase tracking-widest">Upcoming Visits</h3>
            <Link to="/owner/appointments" className="text-xs font-bold text-[#C8860A] hover:underline">View All</Link>
          </div>
          <div className="divide-y divide-[#E8E4DF]">
            {recentAppointments.length === 0 ? (
              <p className="p-8 text-center text-[#6B6B6B] text-sm">No upcoming appointments.</p>
            ) : (
              recentAppointments.map((appt) => (
                <div key={appt.id} className="p-4 flex items-center justify-between hover:bg-[#F7F5F2] transition-colors">
                  <div>
                    <p className="text-sm font-bold text-[#1A1A1A]">{appt.customer_name}</p>
                    <p className="text-[11px] text-[#6B6B6B]">{appt.appointment_date} · {appt.time_slot}</p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-tighter mb-1 ${
                      appt.visit_type === 'video-call' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {appt.visit_type === 'video-call' ? 'Video Call' : 'Store Visit'}
                    </span>
                    <p className="text-[10px] font-bold text-[#C8860A] uppercase tracking-tighter">{appt.status}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Recent Reviews */}
      <div className="bg-white border border-[#E8E4DF] rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-[#E8E4DF] flex items-center justify-between">
          <h3 className="font-bold text-[#1A1A1A] text-sm uppercase tracking-widest">Latest Feedback</h3>
          <Link to="/owner/reviews" className="text-xs font-bold text-[#C8860A] hover:underline">Manage All</Link>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentReviews.length === 0 ? (
            <p className="col-span-3 text-center text-[#6B6B6B] text-sm py-4">No reviews yet.</p>
          ) : (
            recentReviews.map((rev) => (
              <div key={rev.id} className="bg-[#F7F5F2] p-4 rounded-xl border border-[#E8E4DF]">
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-3 h-3 ${i < rev.rating ? "fill-[#C8860A] text-[#C8860A]" : "text-[#E8E4DF]"}`} />
                  ))}
                </div>
                <p className="text-sm text-[#1A1A1A] italic leading-relaxed mb-3 line-clamp-2">"{rev.comment || "No comment"}"</p>
                <p className="text-[11px] font-bold text-[#6B6B6B] uppercase tracking-wider">— {rev.profile?.full_name || "Guest"}</p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Store Info Card */}
      <div className="bg-[#0F172A] rounded-2xl p-8 text-white relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#C8860A] opacity-10 rounded-full -mr-20 -mt-20 blur-3xl transition-all duration-500 group-hover:scale-110" />
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#C8860A] flex items-center justify-center rounded">
                <span className="text-white font-bold text-lg">SR</span>
              </div>
              <h3 className="font-serif text-2xl font-bold">{stats?.settings?.store_name || STORE_INFO.name}</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-white/70">
                  <MapPin className="w-4 h-4 text-[#C8860A] mt-1 flex-shrink-0" />
                  <p className="text-[14px] leading-relaxed max-w-xs">{stats?.settings?.address || STORE_INFO.address.full}</p>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <Mail className="w-4 h-4 text-[#C8860A] flex-shrink-0" />
                  <p className="text-[14px]">{stats?.settings?.email || STORE_INFO.email}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-white/70">
                  <Phone className="w-4 h-4 text-[#C8860A] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-[14px]">{STORE_INFO.owners[0].name}: {STORE_INFO.primaryPhoneDisplay}</p>
                    <p className="text-[14px]">{STORE_INFO.owners[1].name}: {STORE_INFO.owners[1].phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <span className="text-[11px] font-bold text-[#C8860A] uppercase tracking-widest">GST:</span>
                  <p className="text-[14px]">{stats?.settings?.gst || STORE_INFO.gst}</p>
                </div>
              </div>
            </div>
          </div>
          
          <a 
            href={stats?.settings?.maps_link || STORE_INFO.googleMapsLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[#C8860A] hover:bg-[#A67008] text-[#0F172A] font-bold uppercase tracking-widest text-[11px] transition-all rounded-lg"
          >
            Get Directions <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
