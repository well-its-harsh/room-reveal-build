import { Link, Outlet, useLocation, Navigate, useNavigate } from "react-router-dom";
import { 
  User, Heart, CalendarDays, Bell, Settings, 
  LayoutDashboard, MessageSquare, ShoppingBag, 
  LogOut, Menu, X, ChevronRight, Video, MessageCircle, Star, Inbox
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

const accountLinks = [
  { to: "/account", label: "Overview", icon: LayoutDashboard, exact: true },
  { to: "/account/enquiries", label: "My Enquiries", icon: Inbox },
  { to: "/account/appointments", label: "My Appointments", icon: CalendarDays },
  { to: "/account/video-calls", label: "My Video Calls", icon: Video },
  { to: "/account/chats", label: "My Chats", icon: MessageCircle },
  { to: "/account/wishlist", label: "My Wishlist", icon: Heart },
  { to: "/account/reviews", label: "My Reviews", icon: Star },
  { to: "/account/notifications", label: "Notifications", icon: Bell },
  { to: "/account/profile", label: "Profile Settings", icon: Settings },
];

export default function AccountLayout() {
  const { user, profile, loading, signOut } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen py-32 bg-[#F8F7F4]">
      <div className="w-10 h-10 border-2 border-[#C9A84C] border-t-transparent rounded-full animate-spin" />
    </div>
  );
  
  if (!user) return <Navigate to="/login" replace />;

  const initials = profile?.full_name?.split(' ').map((n: string) => n[0]).join('').toUpperCase() || user.email?.[0].toUpperCase();
  const joinDate = profile?.created_at ? format(new Date(profile.created_at), "MMMM yyyy") : "N/A";

  const handleLogout = async () => {
    try {
      await signOut();
      toast.success("Logged out successfully");
      navigate("/");
    } catch (err) {
      console.error("Logout error:", err);
      toast.error("Session cleared.");
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F7F4] flex flex-col md:flex-row font-sans">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex w-[280px] flex-col bg-[#000000] text-white h-screen sticky top-0 overflow-hidden shadow-2xl">
        {/* Profile Header */}
        <div className="p-8 pb-6 border-b border-white/5 bg-black/10">
          <div className="flex flex-col items-center text-center">
            {profile?.avatar_url ? (
              <img src={profile.avatar_url} alt="Profile" className="w-20 h-20 rounded-full object-cover border-2 border-[#C9A84C] mb-4 shadow-xl" />
            ) : (
              <div className="w-20 h-20 bg-[#C9A84C] rounded-full flex items-center justify-center mb-4 shadow-xl ring-4 ring-white/5">
                <span className="text-white font-serif text-2xl font-bold tracking-tighter">
                  {initials}
                </span>
              </div>
            )}
            <h2 className="font-serif text-xl font-bold text-white mb-1 line-clamp-1 w-full px-2">
              {profile?.full_name || "Guest User"}
            </h2>
            <p className="text-[10px] text-[#C9A84C] font-bold uppercase tracking-[0.2em]">
              Member since {joinDate}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-4 space-y-1.5 overflow-y-auto scrollbar-hide">
          {accountLinks.map(({ to, label, icon: Icon, exact }) => {
            const isActive = exact ? location.pathname === to : location.pathname.startsWith(to);
            return (
              <Link
                key={to}
                to={to}
                className={cn(
                  "group relative flex items-center gap-3.5 px-5 py-3 rounded-xl transition-all duration-300 font-medium text-[13px] tracking-wide",
                  isActive 
                    ? "bg-[#C9A84C] text-[#000000] shadow-lg shadow-[#C9A84C]/20" 
                    : "text-white/60 hover:text-white hover:bg-white/5"
                )}
              >
                <Icon className={cn("w-4.5 h-4.5 transition-transform", isActive ? "text-[#000000]" : "text-[#C9A84C]/70 group-hover:text-[#C9A84C]")} />
                <span className="flex-1">{label}</span>
                {isActive && (
                  <motion.div layoutId="activeInd" className="absolute left-1 w-1 h-5 bg-[#000000] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer Actions */}
        <div className="p-6 border-t border-white/5 flex flex-col gap-2 bg-black/5">
          <Link to="/" className="flex items-center gap-3 px-5 py-3 text-white/50 hover:text-[#C9A84C] text-xs font-bold uppercase tracking-widest transition-colors">
            <ShoppingBag className="w-4 h-4" />
            Browse Store
          </Link>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-5 py-3 text-[#EE6363] hover:text-red-400 text-xs font-bold uppercase tracking-widest transition-colors group"
          >
            <LogOut className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Logout Securely
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar (Horizontal Tabs) */}
      <div className="md:hidden sticky top-0 z-[100] bg-white border-b border-[#E8E4DF] shadow-sm overflow-hidden">
        <div className="flex overflow-x-auto scrollbar-hide p-3 gap-2 bg-white">
          {accountLinks.map(({ to, icon: Icon, label }) => {
            const isActive = location.pathname === to;
            return (
              <Link 
                key={to} 
                to={to} 
                className={cn(
                  "flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all",
                  isActive ? "bg-[#000000] text-white shadow-md" : "bg-[#F7F5F2] text-[#6B6B6B]"
                )}
              >
                <Icon className={cn("w-3.5 h-3.5", isActive ? "text-[#C9A84C]" : "text-[#6B6B6B]")} />
                {label.split(' ')[1] || label}
              </Link>
            );
          })}
        </div>
      </div>
      
      {/* Main Content Area */}
      <main className="flex-1 min-w-0 bg-[#F8F7F4]">
        <div className="h-full container py-8 md:py-12 md:px-12 max-w-7xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
