import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { Link } from "react-router-dom";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  MessageSquare, 
  Package, 
  ArrowUpRight,
  TrendingDown,
  Clock,
  ChevronRight,
  CalendarDays,
  Video,
  Eye,
  ShoppingBag,
  MousePointerClick
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  Cell,
  PieChart,
  Pie,
} from "recharts";
import { cn } from "@/lib/utils";
import { format, subDays, startOfDay, isAfter } from "date-fns";

export default function Analytics() {
  const { data: stats, isLoading } = useQuery({
    queryKey: ["owner-analytics-detailed"],
    queryFn: async () => {
      // 1. Fetch Data
      const [
        { data: enquiries = [] },
        { data: appointments = [] },
        { data: products = [] },
        { data: customers = [] }
      ] = await Promise.all([
        supabase.from("enquiries").select("*").order("created_at", { ascending: false }),
        supabase.from("appointments").select("*").order("created_at", { ascending: false }),
        supabase.from("products").select("id, name, view_count, price").order("view_count", { ascending: false }).limit(10),
        supabase.from("profiles").select("*").eq("role", "customer")
      ]);

      // --- Calculations ---
      
      // 2. Enquiry Trends (Last 7 Days)
      const last7Days = [...Array(7)].map((_, i) => {
        const d = subDays(new Date(), i);
        return {
          date: format(d, "MMM dd"),
          fullDate: startOfDay(d),
          count: 0
        };
      }).reverse();

      enquiries.forEach((e: any) => {
        const enqDate = startOfDay(new Date(e.created_at));
        const day = last7Days.find(d => d.fullDate.getTime() === enqDate.getTime());
        if (day) day.count++;
      });

      // 3. Appointment Type Distribution
      const typeCounts = appointments.reduce((acc: any, a: any) => {
        const type = a.visit_type === 'store-visit' ? 'In-Store' : (a.visit_type === 'video-call' ? 'Video Call' : 'Home Visit');
        acc[type] = (acc[type] || 0) + 1;
        return acc;
      }, {});
      const appointmentTypeData = Object.entries(typeCounts).map(([name, value]) => ({ name, value }));

      // 4. Conversion Stats (Mocked where data missing)
      const totalViews = products.reduce((sum: number, p: any) => sum + (p.view_count || 0), 0); 
      const totalEnquiries = enquiries.length;
      const conversionRate = totalViews > 0 ? ((totalEnquiries / totalViews) * 100).toFixed(1) : 0;

      // 5. Product Performance
      const topProducts = products.map(p => ({
        name: p.name.length > 20 ? p.name.substring(0, 20) + '...' : p.name,
        views: p.view_count || 0,
        price: p.price
      }));

      return {
        totalEnquiries,
        totalAppointments: appointments.length,
        totalProducts: products.length,
        totalCustomers: customers.length,
        totalViews,
        conversionRate,
        enquiryTrending: last7Days,
        appointmentTypeData,
        topProducts,
        recentEnquiries: enquiries.slice(0, 8),
        counts: {
          store: appointments.filter((a: any) => a.visit_type === 'store-visit').length,
          video: appointments.filter((a: any) => a.visit_type === 'video-call').length,
          home: appointments.filter((a: any) => a.visit_type === 'home-visit').length
        }
      };
    },
  });

  const cards = [
    { label: "Total Reach", value: stats?.totalViews.toLocaleString() ?? "0", icon: Eye, color: "text-blue-600", bg: "bg-blue-50", suffix: "Views" },
    { label: "Lead Pipeline", value: stats?.totalEnquiries ?? "0", icon: MousePointerClick, color: "text-[#C8860A]", bg: "bg-[#C8860A]/10", suffix: "Enquiries" },
    { label: "Conversion", value: stats ? `${stats.conversionRate}%` : "0%", icon: TrendingUp, color: "text-green-600", bg: "bg-green-50", suffix: "Views to Lead" },
    { label: "Bookings", value: stats?.totalAppointments ?? "0", icon: CalendarDays, color: "text-purple-600", bg: "bg-purple-50", suffix: "Consultations" },
  ];

  if (isLoading) return (
    <div className="flex h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[#C8860A] border-t-transparent rounded-full animate-spin" />
        <p className="text-sm font-bold uppercase tracking-widest text-[#6B6B6B] animate-pulse">Syncing Intel...</p>
      </div>
    </div>
  );

  const PIE_COLORS = ['#C8860A', '#1A1A1A', '#6B6B6B', '#E8E4DF'];

  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-[32px] font-bold text-[#1A1A1A]">Platform Analytics</h1>
          <p className="text-sm text-[#6B6B6B] font-body">Deep dive into customer engagement, product interest, and lead generation velocity.</p>
        </div>
        <div className="flex gap-2">
           <div className="px-4 py-2 bg-white border border-[#E8E4DF] rounded-lg text-[12px] font-bold text-[#1A1A1A] flex items-center gap-2">
             <Clock className="w-4 h-4 text-[#C8860A]" /> Last 30 Days
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map(({ label, value, icon: Icon, color, bg, suffix }) => (
          <div key={label} className="bg-white border border-[#E8E4DF] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group">
            <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110", bg)}>
              <Icon className={cn("w-6 h-6", color)} />
            </div>
            <div className="flex items-baseline gap-2">
              <p className="font-serif text-[28px] font-bold text-[#1A1A1A]">{value}</p>
            </div>
            <p className="text-[11px] font-bold text-[#6B6B6B] font-body mt-1 uppercase tracking-widest">{label}</p>
            <div className="mt-4 pt-4 border-t border-[#F7F5F2] flex items-center justify-between">
               <span className="text-[10px] font-medium text-[#6B6B6B]">{suffix} across matrix</span>
               <TrendingUp className="w-3.5 h-3.5 text-green-500" />
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Enquiry Velocity */}
        <div className="lg:col-span-2 bg-white border border-[#E8E4DF] rounded-2xl p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-serif text-lg font-bold text-[#1A1A1A]">Enquiry Velocity</h3>
              <p className="text-[12px] text-[#6B6B6B] font-body">New lead generation rate over the last 7 days</p>
            </div>
            <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
               <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Live Feed
            </div>
          </div>
          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={stats?.enquiryTrending}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 11, fontWeight: 600, fill: '#6B6B6B' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fontWeight: 600, fill: '#6B6B6B' }} allowDecimals={false} />
                <Tooltip 
                   contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', fontSize: '12px', fontWeight: 'bold' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="count" 
                  stroke="#C8860A" 
                  strokeWidth={4} 
                  dot={{ r: 5, fill: '#C8860A', strokeWidth: 2, stroke: '#fff' }} 
                  activeDot={{ r: 8, strokeWidth: 0 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Appointment Mix */}
        <div className="bg-white border border-[#E8E4DF] rounded-2xl p-8 shadow-sm">
           <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-serif text-lg font-bold text-[#1A1A1A]">Consultation Mix</h3>
              <p className="text-[12px] text-[#6B6B6B] font-body">Distribution of booking types</p>
            </div>
          </div>
          <div className="h-[260px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={stats?.appointmentTypeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {stats?.appointmentTypeData.map((entry: any, index: number) => (
                    <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
               <span className="text-[24px] font-serif font-bold text-[#1A1A1A]">{stats?.totalAppointments}</span>
               <span className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-widest">Total</span>
            </div>
          </div>
          <div className="mt-8 space-y-3">
             {stats?.appointmentTypeData.map((item: any, idx: number) => (
               <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                     <div className="w-3 h-3 rounded-full" style={{ backgroundColor: PIE_COLORS[idx % PIE_COLORS.length] }} />
                     <span className="text-xs font-bold text-[#1A1A1A]">{item.name}</span>
                  </div>
                  <span className="text-xs font-bold text-[#6B6B6B]">{item.value}</span>
               </div>
             ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Top Products */}
        <div className="bg-white border border-[#E8E4DF] rounded-2xl p-8 shadow-sm">
           <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-serif text-lg font-bold text-[#1A1A1A]">High Interest Products</h3>
              <p className="text-[12px] text-[#6B6B6B] font-body">Most viewed items in the collection</p>
            </div>
            <ShoppingBag className="w-5 h-5 text-[#C8860A] opacity-50" />
          </div>
          <div className="h-[340px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stats?.topProducts} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f0f0f0" />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 11, fontWeight: 700, fill: '#1A1A1A' }} width={140} />
                <Tooltip cursor={{fill: '#F7F5F2'}} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: '12px' }} />
                <Bar dataKey="views" radius={[0, 4, 4, 0]} barSize={20} fill="#C8860A">
                  {stats?.topProducts.map((entry: any, index: number) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#C8860A' : '#1A1A1A'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

         {/* Recent Lead Summary */}
        <div className="bg-white border border-[#E8E4DF] rounded-2xl overflow-hidden shadow-sm flex flex-col">
          <div className="p-8 border-b border-[#F7F5F2] bg-white flex items-center justify-between">
            <h3 className="font-serif text-lg font-bold text-[#1A1A1A] flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#C8860A]" /> Recent Leads
            </h3>
            <Link to="/owner/enquiries" className="text-[11px] font-bold text-[#C8860A] uppercase tracking-widest flex items-center hover:underline">
              View CRM <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="divide-y divide-[#F7F5F2] flex-1 overflow-y-auto max-h-[340px] no-scrollbar">
            {stats?.recentEnquiries.map((enq: any) => (
              <div key={enq.id} className="p-5 flex items-center justify-between hover:bg-[#F7F5F2] transition-colors cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1A1A1A] text-[#C8860A] flex items-center justify-center font-bold text-xs ring-2 ring-transparent group-hover:ring-[#C8860A] transition-all">
                    {enq.name?.[0] || "?"}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1A1A1A] group-hover:text-[#C8860A] transition-colors">{enq.name || "Guest Customer"}</p>
                    <p className="text-[11px] text-[#6B6B6B] font-medium">{format(new Date(enq.created_at), "MMM dd, hh:mm a")} via {enq.channel || 'Direct'}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={cn(
                    "text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border shadow-sm",
                    enq.status === 'new' ? 'bg-blue-50 text-blue-700 border-blue-200' : 
                    enq.status === 'accepted' ? 'bg-green-50 text-green-700 border-green-200' :
                    'bg-gray-50 text-gray-700 border-gray-200'
                  )}>
                    {enq.status}
                  </span>
                </div>
              </div>
            ))}
            {stats?.recentEnquiries.length === 0 && (
               <div className="flex flex-col items-center justify-center h-full py-20 opacity-30">
                 <MessageSquare className="w-12 h-12 mb-4" />
                 <p className="text-sm font-bold uppercase tracking-widest">No leads yet</p>
               </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
