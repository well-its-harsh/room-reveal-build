import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { WishlistProvider } from "@/contexts/WishlistContext";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import Layout from "@/components/Layout";
import OwnerLayout from "@/components/OwnerLayout";
import AdminLayout from "@/components/AdminLayout";
import OwnerProfile from "./pages/admin/OwnerProfile";
import AppointmentManagement from "./pages/admin/AppointmentManagement";
import OwnerChat from "./pages/admin/OwnerChat";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AllCategories from "./pages/AllCategories";
import CategoryPage from "./pages/CategoryPage";
import AreaPage from "./pages/AreaPage";
import SearchPage from "./pages/SearchPage";
import ComparePage from "./pages/ComparePage";
import MyWishlist from "./pages/MyWishlist";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AuthCallback from "./pages/auth/Callback";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import PrivacyPolicy from "./pages/policies/Privacy";
import TermsOfService from "./pages/policies/Terms";
import CookiePolicy from "./pages/policies/Cookies";
import DataDeletion from "./pages/policies/DataDeletion";
import AccountLayout from "./pages/account/AccountLayout";
import AccountDashboard from "./pages/account/AccountDashboard";
import ProfilePage from "./pages/account/Profile";
import WishlistPage from "./pages/account/Wishlist";
import AppointmentsPage from "./pages/account/Appointments";
import AccountNotifications from "./pages/account/AccountNotifications";
import AccountEnquiries from "./pages/account/AccountEnquiries";
import AccountVideoCalls from "./pages/account/AccountVideoCalls";
import AccountChats from "./pages/account/AccountChats";
import AccountReviews from "./pages/account/AccountReviews";
import OwnerDashboard from "./pages/admin/Dashboard";
import ProductManagement from "./pages/admin/ProductManagement";
import ReviewManagement from "./pages/admin/ReviewManagement";
import Analytics from "./pages/admin/Analytics";
import AdminOverview from "./pages/admin/AdminOverview";
import AuditLogs from "./pages/admin/AuditLogs";
import SiteSettings from "./pages/admin/SiteSettings";
import EnquiryManagement from "./pages/admin/EnquiryManagement";
import OwnerNotificationsPage from "./pages/admin/OwnerNotifications";
import FeaturedManagement from "./pages/admin/FeaturedManagement";
import CategoryManagement from "./pages/admin/CategoryManagement";
import InventoryManagement from "./pages/admin/InventoryManagement";
import VideoManagement from "./pages/admin/VideoManagement";
import AIMakeover from "./pages/AIMakeover";
import BookVisit from "./pages/BookVisit";
import Videos from "./pages/Videos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 30, // 30 seconds
      gcTime: 1000 * 60 * 30,    // 30 minutes
      refetchInterval: 3000,     // Polling every 3 seconds for real-time updates
      refetchOnWindowFocus: true, 
      retry: 1,
    },
  },
});

function FullScreenLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
        <p className="text-sm text-muted-foreground font-body">Loading...</p>
      </div>
    </div>
  );
}

function OwnerGuard({ children }: { children: React.ReactNode }) {
  const { profile, loading } = useAuth();
  if (loading) return <FullScreenLoader />;
  if (profile?.role !== "admin" && profile?.role !== "owner") return <Navigate to="/" replace />;
  return <>{children}</>;
}

function AdminGuard({ children }: { children: React.ReactNode }) {
  const { isAdmin, loading } = useAuth();
  if (loading) return <FullScreenLoader />;
  if (!isAdmin) return <Navigate to="/" replace />;
  return <>{children}</>;
}

function ProfileRedirect() {
  const { role } = useAuth();
  if (role === "owner") return <Navigate to="/owner/profile" replace />;
  return <Navigate to="/account/profile" replace />;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <WishlistProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Owner dashboard */}
              <Route path="/owner" element={<OwnerGuard><OwnerLayout /></OwnerGuard>}>
                <Route index element={<OwnerDashboard />} />
                <Route path="overview" element={<OwnerDashboard />} />
                <Route path="profile" element={<OwnerProfile />} />
                <Route path="products" element={<ProductManagement />} />
                <Route path="categories" element={<CategoryManagement />} />
                <Route path="inventory" element={<InventoryManagement />} />
                <Route path="featured" element={<FeaturedManagement />} />
                <Route path="videos" element={<VideoManagement />} />
                <Route path="appointments" element={<AppointmentManagement visitType="store-visit" />} />
                <Route path="video-calls" element={<AppointmentManagement visitType="video-call" />} />
                <Route path="chats" element={<OwnerChat />} />
                <Route path="enquiries" element={<EnquiryManagement />} />
                <Route path="reviews" element={<ReviewManagement />} />
                <Route path="notifications" element={<OwnerNotificationsPage />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="settings" element={<SiteSettings />} />
              </Route>

              {/* Admin dashboard */}
              <Route path="/admin" element={<AdminGuard><AdminLayout /></AdminGuard>}>
                <Route index element={<AdminOverview />} />
                <Route path="logs" element={<AuditLogs />} />
                <Route path="settings" element={<SiteSettings />} />
              </Route>

              {/* Customer account */}
              <Route path="/account" element={<Layout><AccountLayout /></Layout>}>
                <Route index element={<AccountDashboard />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="wishlist" element={<WishlistPage />} />
                <Route path="appointments" element={<AppointmentsPage />} />
                <Route path="video-calls" element={<AccountVideoCalls />} />
                <Route path="chats" element={<AccountChats />} />
                <Route path="reviews" element={<AccountReviews />} />
                <Route path="notifications" element={<AccountNotifications />} />
                <Route path="enquiries" element={<AccountEnquiries />} />
              </Route>

              {/* Public routes */}
              <Route path="/" element={<Layout><Index /></Layout>} />
              <Route path="/profile" element={<ProfileRedirect />} />
              <Route path="/profile/wishlist" element={<Layout><MyWishlist /></Layout>} />
              <Route path="/products" element={<Layout><Products /></Layout>} />
              <Route path="/product/:id" element={<Layout><ProductDetail /></Layout>} />
              <Route path="/categories" element={<Layout><AllCategories /></Layout>} />
              <Route path="/category/:slug" element={<Layout><CategoryPage /></Layout>} />
              <Route path="/area/:slug" element={<Layout><AreaPage /></Layout>} />
              <Route path="/search" element={<Layout><SearchPage /></Layout>} />
              <Route path="/compare" element={<Layout><ComparePage /></Layout>} />
              <Route path="/about" element={<Layout><About /></Layout>} />
              <Route path="/contact" element={<Layout><Contact /></Layout>} />
              <Route path="/book-visit" element={<Layout><BookVisit /></Layout>} />
              <Route path="/videos" element={<Layout><Videos /></Layout>} />
              <Route path="/ai-makeover" element={<Layout><AIMakeover /></Layout>} />
              <Route path="/login" element={<Layout><Login /></Layout>} />
              <Route path="/signup" element={<Layout><Signup /></Layout>} />
              <Route path="/auth/callback" element={<AuthCallback />} />
              <Route path="/forgot-password" element={<Layout><ForgotPassword /></Layout>} />
              <Route path="/reset-password" element={<Layout><ResetPassword /></Layout>} />
              <Route path="/policies/privacy" element={<Layout><PrivacyPolicy /></Layout>} />
              <Route path="/policies/terms" element={<Layout><TermsOfService /></Layout>} />
              <Route path="/policies/cookies" element={<Layout><CookiePolicy /></Layout>} />
              <Route path="/data-deletion" element={<Layout><DataDeletion /></Layout>} />
              <Route path="*" element={<Layout><NotFound /></Layout>} />
            </Routes>
          </BrowserRouter>
        </WishlistProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
