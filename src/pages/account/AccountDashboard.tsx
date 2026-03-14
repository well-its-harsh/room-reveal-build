import { Link } from "react-router-dom";
import { ShoppingBag, Heart, User, ArrowRight } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useOrders } from "@/hooks/useOrders";

export default function AccountDashboard() {
  const { user, profile } = useAuth();
  const { data: orders = [] } = useOrders(user?.id);
  const recentOrders = orders.slice(0, 3);

  return (
    <div>
      {/* Welcome */}
      <div className="bg-secondary rounded-lg p-6 mb-6">
        <h2 className="font-heading text-xl font-semibold text-foreground">
          Welcome back, {profile?.full_name || "there"}!
        </h2>
        <p className="text-sm text-muted-foreground font-body mt-1">
          Manage your orders, wishlist, and account settings.
        </p>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {[
          { to: "/account/orders", label: "My Orders", count: orders.length, icon: ShoppingBag },
          { to: "/account/wishlist", label: "Wishlist", count: null, icon: Heart },
          { to: "/account/profile", label: "Edit Profile", count: null, icon: User },
        ].map(({ to, label, count, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <Icon className="w-5 h-5 text-accent" />
            </div>
            <div className="flex-1">
              <p className="font-heading text-sm font-semibold text-foreground">{label}</p>
              {count !== null && <p className="text-xs text-muted-foreground font-body">{count} order{count !== 1 ? "s" : ""}</p>}
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
          </Link>
        ))}
      </div>

      {/* Recent Orders */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-heading text-lg font-semibold text-foreground">Recent Orders</h3>
          {orders.length > 3 && (
            <Link to="/account/orders" className="text-sm text-accent font-body hover:underline">View all</Link>
          )}
        </div>
        {recentOrders.length === 0 ? (
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <p className="text-muted-foreground font-body mb-4">No orders yet.</p>
            <Link to="/products" className="text-sm text-accent font-body hover:underline">Start shopping →</Link>
          </div>
        ) : (
          <div className="space-y-3">
            {recentOrders.map((order: any) => (
              <Link
                key={order.id}
                to={`/account/orders/${order.id}`}
                className="flex items-center justify-between p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-shadow"
              >
                <div>
                  <p className="text-sm font-medium text-foreground font-body">
                    Order #{order.id.slice(0, 8)}
                  </p>
                  <p className="text-xs text-muted-foreground font-body">
                    {new Date(order.created_at).toLocaleDateString("en-IN")}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-accent font-body">
                    ₹{order.total_amount?.toLocaleString("en-IN")}
                  </p>
                  <span className="text-xs capitalize text-muted-foreground font-body">{order.status}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
