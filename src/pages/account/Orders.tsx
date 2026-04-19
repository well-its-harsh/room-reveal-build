import { Link } from "react-router-dom";
import { ShoppingBag, ArrowRight, PackageOpen, Calendar } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useOrders } from "@/hooks/useOrders";
import { Skeleton } from "@/components/ui/skeleton";

const statusColors: Record<string, { bg: string, text: string, iconColor: string }> = {
  pending: { bg: "bg-yellow-100", text: "text-yellow-800", iconColor: "text-yellow-500" },
  confirmed: { bg: "bg-blue-100", text: "text-blue-800", iconColor: "text-blue-500" },
  processing: { bg: "bg-purple-100", text: "text-purple-800", iconColor: "text-purple-500" },
  packed: { bg: "bg-indigo-100", text: "text-indigo-800", iconColor: "text-indigo-500" },
  shipped: { bg: "bg-orange-100", text: "text-orange-800", iconColor: "text-orange-500" },
  delivered: { bg: "bg-green-100", text: "text-green-800", iconColor: "text-green-500" },
  cancelled: { bg: "bg-red-100", text: "text-red-800", iconColor: "text-red-500" },
};

export default function OrdersPage() {
  const { user } = useAuth();
  const { data: orders = [], isLoading } = useOrders(user?.id);

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map(i => <Skeleton key={i} className="h-24 w-full rounded-xl" />)}
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="text-center py-20 bg-card border border-border rounded-2xl shadow-sm">
        <PackageOpen className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
        <h2 className="font-heading text-xl font-bold text-foreground mb-2">No Orders Yet</h2>
        <p className="text-sm text-muted-foreground font-body mb-6 max-w-xs mx-auto">
          Start building your dream bathroom today. Your orders will appear here once placed.
        </p>
        <Link 
          to="/products" 
          className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-accent text-accent-foreground text-sm font-bold shadow-lg shadow-accent/20 hover:scale-105 transition-transform"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-2xl font-bold text-foreground tracking-tight">Order History</h2>
        <span className="text-xs font-body text-muted-foreground bg-secondary px-3 py-1 rounded-full">
          {orders.length} Order{orders.length !== 1 ? 's' : ''}
        </span>
      </div>

      <div className="space-y-3">
        {orders.map((order: any) => {
          const status = statusColors[order.status] || { bg: "bg-secondary", text: "text-secondary-foreground", iconColor: "text-muted-foreground" };
          
          return (
            <Link
              key={order.id}
              to={`/account/orders/${order.id}`}
              className="block bg-card border border-border p-5 rounded-2xl shadow-sm hover:shadow-md transition-all group relative overflow-hidden"
            >
              <div className={`absolute left-0 top-0 bottom-0 w-1 ${status.iconColor.replace('text-', 'bg-')}`} />
              
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center text-muted-foreground group-hover:scale-110 transition-transform">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-heading text-base font-bold text-foreground flex items-center gap-2">
                      Order #{order.id.slice(0, 8).toUpperCase()}
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0" />
                    </p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground font-body mt-1">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" />
                        {new Date(order.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                      </span>
                      <span>•</span>
                      <span>{order.order_items?.length || 0} item{(order.order_items?.length || 0) !== 1 ? "s" : ""}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border transition-colors ${status.bg} ${status.text} ${status.bg.replace('bg-', 'border-')}`}>
                    {order.status}
                  </span>
                  <p className="font-heading text-lg font-bold text-accent">
                    ₹{order.total_amount?.toLocaleString("en-IN")}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
