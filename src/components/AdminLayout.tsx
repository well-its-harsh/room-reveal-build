import { Link, Outlet, useLocation } from "react-router-dom";
import { Shield, Users, Activity, Settings, ArrowLeft } from "lucide-react";

const adminLinks = [
  { to: "/admin", label: "Overview", icon: Shield },
  { to: "/admin/users", label: "Users & Roles", icon: Users },
  { to: "/admin/logs", label: "Audit Logs", icon: Activity },
  { to: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminLayout() {
  const location = useLocation();

  return (
    <div className="container py-6 md:py-10">
      <div className="flex items-center gap-4 mb-6">
        <Link to="/" className="text-sm text-muted-foreground hover:text-foreground font-body flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" /> Back to Store
        </Link>
        <h1 className="font-heading text-2xl font-semibold text-foreground">System Admin</h1>
      </div>

      <div className="flex gap-1 overflow-x-auto pb-4 mb-6 scrollbar-hide">
        {adminLinks.map(({ to, label, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium font-body whitespace-nowrap transition-colors ${
              location.pathname === to
                ? "bg-primary text-primary-foreground"
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
