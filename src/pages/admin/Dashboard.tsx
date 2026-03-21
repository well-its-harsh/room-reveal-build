import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { Package, ShoppingCart, Star, AlertTriangle, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function OwnerDashboard() {
  const { data: stats } = useQuery({
    queryKey: ["owner-stats"],
    queryFn: async () => {
      const [products, orders, reviews, pendingOrders, lowStock] = await Promise.all([
        supabase.from("products").select("id", { count: "exact", head: true }),
        supabase.from("orders").select("id", { count: "exact", head: true }),
        supabase.from("reviews").select("id", { count: "exact", head: true }),
        supabase.from("orders").select("id", { count: "exact", head: true }).eq("status", "pending"),
        supabase.from("inventory").select("id", { count: "exact", head: true }).lt("quantity", 5),
      ]);
      return {
        products: products.count || 0,
        orders: orders.count || 0,
        reviews: reviews.count || 0,
        pendingOrders: pendingOrders.count || 0,
        lowStock: lowStock.count || 0,
      };
    },
  });

  const { data: recentOrders = [] } = useQuery({
    queryKey: ["owner-recent-orders"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("orders")
        .select("*, profile:profiles(full_name)")
        .order("created_at", { ascending: false })
        .limit(5);
      if (error) throw error;
      return data;
    },
  });

  const cards = [
    { label: "Total Products", value: stats?.products ?? "—", icon: Package, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "Total Orders", value: stats?.orders ?? "—", icon: ShoppingCart, color: "text-green-500", bg: "bg-green-50" },
    { label: "Pending Orders", value: stats?.pendingOrders ?? "—", icon: TrendingUp, color: "text-orange-500", bg: "bg-orange-50" },
    { label: "Low Stock Items", value: stats?.lowStock ?? "—", icon: AlertTriangle, color: "text-red-500", bg: "bg-red-50" },
    { label: "Reviews", value: stats?.reviews ?? "—", icon: Star, color: "text-yellow-500", bg: "bg-yellow-50" },
  ];

  const statusColor = (s: string) => {
    const c: Record<string, string> = { pending: "bg-yellow-100 text-yellow-800", confirmed: "bg-blue-100 text-blue-800", shipped: "bg-indigo-100 text-indigo-800", delivered: "bg-green-100 text-green-800", cancelled: "bg-red-100 text-red-800" };
    return c[s] || "bg-secondary text-secondary-foreground";
  };

  return (
    <div>
      <h2 className="font-heading text-xl font-semibold text-foreground mb-6">Dashboard Overview</h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {cards.map(({ label, value, icon: Icon, color, bg }) => (
          <div key={label} className="bg-card border border-border rounded-xl p-5">
            <div className={`w-10 h-10 rounded-lg ${bg} flex items-center justify-center mb-3`}>
              <Icon className={`w-5 h-5 ${color}`} />
            </div>
            <p className="font-heading text-2xl font-bold text-foreground">{value}</p>
            <p className="text-xs text-muted-foreground font-body mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {[
          { to: "/owner/products", label: "Add Product", icon: Package },
          { to: "/owner/orders", label: "View Orders", icon: ShoppingCart },
          { to: "/owner/inventory", label: "Check Stock", icon: AlertTriangle },
          { to: "/owner/reviews", label: "Manage Reviews", icon: Star },
        ].map(({ to, label, icon: Icon }) => (
          <Link key={to} to={to} className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:shadow-md transition-shadow">
            <Icon className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium font-body text-foreground">{label}</span>
          </Link>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-card border border-border rounded-xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider">Recent Orders</h3>
          <Link to="/owner/orders" className="text-xs text-accent font-body hover:underline">View All</Link>
        </div>
        {recentOrders.length === 0 ? (
          <p className="text-sm text-muted-foreground font-body text-center py-6">No orders yet.</p>
        ) : (
          <div className="space-y-3">
            {recentOrders.map((order: any) => (
              <div key={order.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <div>
                  <p className="text-sm font-medium text-foreground font-body">{order.profile?.full_name || "Customer"}</p>
                  <p className="text-xs text-muted-foreground font-body">{new Date(order.created_at).toLocaleDateString("en-IN")}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full font-body capitalize ${statusColor(order.status)}`}>
                    {order.status}
                  </span>
                  <span className="text-sm font-semibold text-foreground font-body">₹{order.total_amount?.toLocaleString("en-IN")}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
