import { Link, Outlet, useLocation } from "react-router-dom";
import { LayoutDashboard, Package, Warehouse, ShoppingCart, Star, ArrowLeft, FileText, BarChart3 } from "lucide-react";

const ownerLinks = [
  { to: "/owner", label: "Dashboard", icon: LayoutDashboard },
  { to: "/owner/products", label: "Products", icon: Package },
  { to: "/owner/inventory", label: "Inventory", icon: Warehouse },
  { to: "/owner/orders", label: "Orders", icon: ShoppingCart },
  { to: "/owner/reviews", label: "Reviews", icon: Star },
  { to: "/owner/content", label: "Content", icon: FileText },
  { to: "/owner/analytics", label: "Analytics", icon: BarChart3 },
];

export default function OwnerLayout() {
  const location = useLocation();

  return (
    <div className="container py-6 md:py-10">
      <div className="flex items-center gap-4 mb-6">
        <Link to="/" className="text-sm text-muted-foreground hover:text-foreground font-body flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" /> Back to Store
        </Link>
        <h1 className="font-heading text-2xl font-semibold text-foreground">Owner Dashboard</h1>
      </div>

      <div className="flex gap-1 overflow-x-auto pb-4 mb-6 scrollbar-hide">
        {ownerLinks.map(({ to, label, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium font-body whitespace-nowrap transition-colors ${
              location.pathname === to
                ? "bg-accent text-accent-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-muted"
            }`}
          >
            <Icon className="w-4 h-4" />
            {label}
          </Link>
        ))}
      </div>

      <Outlet />
    </div>
  );
}
