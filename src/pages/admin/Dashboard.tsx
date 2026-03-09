import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { Package, ShoppingCart, Users, Star } from "lucide-react";

export default function AdminDashboard() {
  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const [products, orders, reviews] = await Promise.all([
        supabase.from("products").select("id", { count: "exact", head: true }),
        supabase.from("orders").select("id", { count: "exact", head: true }),
        supabase.from("reviews").select("id", { count: "exact", head: true }),
      ]);
      return {
        products: products.count || 0,
        orders: orders.count || 0,
        reviews: reviews.count || 0,
      };
    },
  });

  const cards = [
    { label: "Products", value: stats?.products ?? "—", icon: Package, color: "text-accent" },
    { label: "Orders", value: stats?.orders ?? "—", icon: ShoppingCart, color: "text-accent" },
    { label: "Reviews", value: stats?.reviews ?? "—", icon: Star, color: "text-accent" },
  ];

  return (
    <div>
      <h2 className="font-heading text-xl font-semibold text-foreground mb-6">Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {cards.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <Icon className={`w-5 h-5 ${color}`} />
              <span className="text-sm text-muted-foreground font-body">{label}</span>
            </div>
            <p className="font-heading text-3xl font-bold text-foreground">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
