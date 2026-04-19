import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Package, 
  MessageSquare, 
  Star, 
  BarChart3, 
  CalendarDays, 
  Settings, 
  User,
  X,
  Video,
  Bell,
  Users,
  ShoppingBag,
  FolderOpen,
  PlaySquare,
  Play,
  Layers
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useSidebarCounts } from "@/hooks/useSidebarCounts";

interface OwnerSidebarProps {
  onClose?: () => void;
  className?: string;
  collapsed?: boolean;
}

export default function OwnerSidebar({ onClose, className, collapsed = false }: OwnerSidebarProps) {
  const location = useLocation();
  const stats = useSidebarCounts();

  const ownerLinks = [
    { to: "/owner", label: "Overview", icon: LayoutDashboard },
    { to: "/owner/chats", label: "Messages", icon: MessageSquare, badge: (stats as any).unreadChats },
    { to: "/owner/enquiries", label: "Enquiries", icon: Layers, badge: stats.enquiries },
    { to: "/owner/appointments", label: "Appointments", icon: CalendarDays, badge: stats.appointments },
    { to: "/owner/video-calls", label: "Video Calls", icon: Video, badge: stats.videoCalls },
    { to: "/owner/products", label: "Products", icon: Package },
    { to: "/owner/categories", label: "Categories", icon: FolderOpen },
    { to: "/owner/inventory", label: "Inventory", icon: ShoppingBag, badge: (stats as any).inventory },
    { to: "/owner/featured", label: "Featured & Watch", icon: PlaySquare },
    { to: "/owner/videos", label: "Videos", icon: Play },
    { to: "/owner/reviews", label: "Reviews", icon: Star, badge: stats.reviews },
    { to: "/owner/notifications", label: "Notifications", icon: Bell, badge: stats.notifications },
    { to: "/owner/analytics", label: "Analytics", icon: BarChart3 },
    { to: "/owner/settings", label: "Settings", icon: Settings },
  ];

  return (
    <aside className={cn(
      "flex flex-col h-full bg-[#000000] border-r border-white/5 transition-all duration-300",
      collapsed ? "w-20" : "w-64",
      className
    )}>
      {/* Brand Header */}
      <div className="p-6 flex items-center justify-between border-b border-white/5">
        {!collapsed && (
          <div className="flex flex-col">
             <span className="text-white font-serif font-bold text-lg tracking-tight">Shree Radhe Tiles & Hardware</span>
             <span className="text-[#C8860A] text-[10px] font-bold uppercase tracking-[0.2em]">Owner Dashboard</span>
          </div>
        )}
        {collapsed && <div className="mx-auto w-8 h-8 rounded-full bg-[#C8860A] flex items-center justify-center font-serif text-white font-bold text-xs">B</div>}
        
        {onClose && (
          <button onClick={onClose} className="md:hidden p-1 hover:bg-white/5 rounded-md">
            <X className="w-5 h-5 text-gray-400" />
          </button>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1 scrollbar-hide">
        {ownerLinks.map(({ to, label, icon: Icon, badge }) => {
          const isActive = location.pathname === to || (to !== "/owner" && location.pathname.startsWith(to));
          
          return (
            <Link
              key={to}
              to={to}
              onClick={onClose}
              className={cn(
                "relative flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all group",
                isActive 
                  ? "bg-white/5 text-[#C9A84C] border-l-4 border-[#C9A84C] pl-3" 
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              )}
              title={collapsed ? label : undefined}
            >
              <Icon className={cn(
                "w-5 h-5 flex-shrink-0 transition-colors",
                isActive ? "text-[#C8860A]" : "text-gray-500 group-hover:text-white"
              )} />
              
              {!collapsed && (
                <span className="font-body font-semibold flex-1">{label}</span>
              )}

              {(badge !== undefined && badge > 0) && (
                <div className={cn(
                  "flex items-center justify-center min-w-[18px] h-[18px] px-1 bg-[#C8860A] text-[#0F172A] text-[10px] font-bold rounded-full",
                  collapsed ? "absolute top-2 right-2 border-2 border-[#0F172A]" : ""
                )}>
                  {badge > 99 ? '99+' : badge}
                </div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer / Account Section */}
      <div className="p-4 border-t border-white/5">
        <Link 
          to="/owner/profile" 
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-white transition-all"
        >
          <User className="w-5 h-5" />
          {!collapsed && <span className="font-body font-semibold">My Account</span>}
        </Link>
      </div>
    </aside>
  );
}
