import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Menu, Bell, LogOut, Home } from "lucide-react";
import OwnerSidebar from "./OwnerSidebar";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";

export default function OwnerLayout() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    if (!user) return;

    // Initial fetch of unread notifications
    const fetchUnread = async () => {
      const { count, error } = await supabase
        .from("notifications")
        .select("*", { count: "exact", head: true })
        .eq("user_id", user.id)
        .eq("is_read", false);
      
      if (!error) setUnreadCount(count || 0);
    };

    fetchUnread();

    // Subscribe to new notifications
    const channel = supabase
      .channel("notifications-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "notifications",
          filter: `user_id=eq.${user.id}`,
        },
        () => {
          fetchUnread();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user]);

  return (
    <div className="flex h-screen bg-secondary/30 overflow-hidden font-body">
      {/* Desktop Sidebar */}
      <OwnerSidebar className="hidden md:flex flex-shrink-0" />

      {/* Mobile Sidebar */}
      <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
        <SheetContent side="left" className="p-0 border-none w-64 bg-card">
          <OwnerSidebar onClose={() => setIsMobileOpen(false)} className="w-full h-full border-none shadow-none" />
        </SheetContent>
      </Sheet>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-16 flex-shrink-0 bg-card border-b border-border flex items-center justify-between px-4 md:px-8 shadow-sm relative z-30">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileOpen(true)}
            >
              <Menu className="w-6 h-6 text-foreground" />
            </Button>
            <h1 className="font-heading text-lg md:text-xl font-bold text-foreground tracking-tight line-clamp-1">
              Owner Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Button variant="outline" size="sm" asChild className="hidden sm:flex gap-2 mr-2 text-xs">
                <Link to="/">
                  <Home className="w-3.5 h-3.5" />
                  Back to Store
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="relative group" asChild>
                <Link to="/owner/notifications">
                  <Bell className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  {unreadCount > 0 && (
                    <span className="absolute top-2 right-2 w-4 h-4 bg-accent text-accent-foreground text-[10px] font-bold flex items-center justify-center rounded-full animate-pulse border-2 border-card">
                      {unreadCount > 9 ? "9+" : unreadCount}
                    </span>
                  )}
                </Link>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                onClick={async () => {
                  await signOut();
                  navigate("/");
                }}
                title="Logout"
              >
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="h-8 w-[1px] bg-border mx-1" />
            
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-xs ring-2 ring-accent/20">
                {user?.email?.[0].toUpperCase() || "A"}
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 scrollbar-hide">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
