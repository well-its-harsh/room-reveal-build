import { Link } from "react-router-dom";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useOrders } from "@/hooks/useOrders";

const statusColor = (status: string) => {
  const colors: Record<string, string> = {
    pending: "bg-yellow-100 text-yellow-800",
    confirmed: "bg-blue-100 text-blue-800",
    processing: "bg-purple-100 text-purple-800",
    packed: "bg-indigo-100 text-indigo-800",
    shipped: "bg-indigo-100 text-indigo-800",
    delivered: "bg-green-100 text-green-800",
    cancelled: "bg-red-100 text-red-800",
  };
  return colors[status] || "bg-secondary text-secondary-foreground";
};

export default function OrdersPage() {
  const { user } = useAuth();
  const { data: orders = [], isLoading } = useOrders(user?.id);

  if (isLoading) return <p className="text-muted-foreground font-body">Loading orders...</p>;

  if (orders.length === 0) {
    return (
      <div className="text-center py-12">
        <ShoppingBag className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <h2 className="font-heading text-xl font-semibold text-foreground mb-2">No Orders Yet</h2>
        <p className="text-muted-foreground font-body mb-4">Once you place an order, it will appear here.</p>
        <Link to="/products" className="text-sm text-accent font-body hover:underline">Start shopping →</Link>
      </div>
    );
  }

  return (
    <div>
      <h2 className="font-heading text-xl font-semibold text-foreground mb-6">My Orders</h2>
      <div className="space-y-4">
        {orders.map((order: any) => (
          <Link
            key={order.id}
            to={`/account/orders/${order.id}`}
            className="block bg-card border border-border rounded-lg p-4 hover:shadow-sm transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="font-heading text-sm font-medium text-foreground">
                  Order #{order.id.slice(0, 8)}
                </p>
                <p className="text-xs text-muted-foreground font-body">
                  {new Date(order.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-medium px-2 py-1 rounded capitalize font-body ${statusColor(order.status)}`}>
                  {order.status}
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
            <div className="flex justify-between items-end">
              <p className="text-xs text-muted-foreground font-body">
                {order.order_items?.length || 0} item{(order.order_items?.length || 0) !== 1 ? "s" : ""}
              </p>
              <p className="font-heading text-base font-bold text-accent">
                ₹{order.total_amount?.toLocaleString("en-IN")}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
