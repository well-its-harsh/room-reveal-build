import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { BarChart3, TrendingUp, Eye, ShoppingCart, Smartphone } from "lucide-react";

export default function Analytics() {
  const { data: stats } = useQuery({
    queryKey: ["owner-analytics"],
    queryFn: async () => {
      const [orders, products] = await Promise.all([
        supabase.from("orders").select("total_amount, status"),
        supabase.from("products").select("id, category_id, ar_enabled"),
      ]);

      const orderData = orders.data || [];
      const totalRevenue = orderData.reduce((s: number, o: any) => s + (o.total_amount || 0), 0);
      const deliveredOrders = orderData.filter((o: any) => o.status === "delivered").length;
      const arProducts = (products.data || []).filter((p: any) => p.ar_enabled).length;

      return {
        totalRevenue,
        totalOrders: orderData.length,
        deliveredOrders,
        totalProducts: (products.data || []).length,
        arProducts,
      };
    },
  });

  const cards = [
    { label: "Total Revenue", value: stats ? `₹${stats.totalRevenue.toLocaleString("en-IN")}` : "—", icon: TrendingUp, color: "text-green-500", bg: "bg-green-50" },
    { label: "Total Orders", value: stats?.totalOrders ?? "—", icon: ShoppingCart, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "Delivered", value: stats?.deliveredOrders ?? "—", icon: BarChart3, color: "text-emerald-500", bg: "bg-emerald-50" },
    { label: "AR Products", value: stats?.arProducts ?? "—", icon: Smartphone, color: "text-purple-500", bg: "bg-purple-50" },
  ];

  return (
    <div>
      <h2 className="font-heading text-xl font-semibold text-foreground mb-6">Analytics</h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {cards.map(({ label, value, icon: Icon, color, bg }) => (
          <div key={label} className="bg-card border border-border rounded-xl p-5">
            <div className={`w-10 h-10 rounded-lg ${bg} flex items-center justify-center mb-3`}>
              <Icon className={`w-5 h-5 ${color}`} />
            </div>
            <p className="font-heading text-xl font-bold text-foreground">{value}</p>
            <p className="text-xs text-muted-foreground font-body mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {/* Placeholder charts */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-heading text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Sales by Category</h3>
          <div className="h-48 flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-10 h-10 text-muted-foreground mx-auto mb-2" />
              <p className="text-xs text-muted-foreground font-body">Chart visualization coming soon</p>
            </div>
          </div>
        </div>
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-heading text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Order Trends</h3>
          <div className="h-48 flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="w-10 h-10 text-muted-foreground mx-auto mb-2" />
              <p className="text-xs text-muted-foreground font-body">Chart visualization coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
