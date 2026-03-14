import { Link, Outlet, useLocation, Navigate } from "react-router-dom";
import { User, ShoppingBag, Heart, MapPin, ArrowLeft } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const accountLinks = [
  { to: "/account", label: "Overview", icon: User, exact: true },
  { to: "/account/orders", label: "My Orders", icon: ShoppingBag },
  { to: "/account/wishlist", label: "Wishlist", icon: Heart },
  { to: "/account/profile", label: "Profile", icon: User },
];

export default function AccountLayout() {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <div className="container py-20 text-center text-muted-foreground font-body">Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;

  return (
    <div className="container py-6 md:py-10">
      <div className="flex items-center gap-4 mb-6">
        <Link to="/" className="text-sm text-muted-foreground hover:text-foreground font-body flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" /> Back to Store
        </Link>
        <h1 className="font-heading text-2xl font-semibold text-foreground">My Account</h1>
      </div>

      <div className="flex gap-1 overflow-x-auto pb-4 mb-6 scrollbar-hide">
        {accountLinks.map(({ to, label, icon: Icon, exact }) => {
          const isActive = exact ? location.pathname === to : location.pathname.startsWith(to);
          return (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium font-body whitespace-nowrap transition-colors ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-muted"
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </Link>
          );
        })}
      </div>

      <Outlet />
    </div>
  );
}
