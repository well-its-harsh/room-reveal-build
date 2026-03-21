import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { WishlistProvider } from "@/contexts/WishlistContext";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import Layout from "@/components/Layout";
import OwnerLayout from "@/components/OwnerLayout";
import AdminLayout from "@/components/AdminLayout";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ShippingPolicy from "./pages/policies/Shipping";
import ReturnsPolicy from "./pages/policies/Returns";
import PrivacyPolicy from "./pages/policies/Privacy";
import TermsPolicy from "./pages/policies/Terms";
import AccountLayout from "./pages/account/AccountLayout";
import AccountDashboard from "./pages/account/AccountDashboard";
import ProfilePage from "./pages/account/Profile";
import OrdersPage from "./pages/account/Orders";
import OrderDetail from "./pages/account/OrderDetail";
import WishlistPage from "./pages/account/Wishlist";
import AddressesPage from "./pages/account/Addresses";
import AppointmentsPage from "./pages/account/Appointments";
import OwnerDashboard from "./pages/admin/Dashboard";
import ProductManagement from "./pages/admin/ProductManagement";
import InventoryManagement from "./pages/admin/InventoryManagement";
import OrderManagement from "./pages/admin/OrderManagement";
import ReviewManagement from "./pages/admin/ReviewManagement";
import ContentManagement from "./pages/admin/ContentManagement";
import Analytics from "./pages/admin/Analytics";
import AdminOverview from "./pages/admin/AdminOverview";
import UserManagement from "./pages/admin/UserManagement";
import AuditLogs from "./pages/admin/AuditLogs";
import SiteSettings from "./pages/admin/SiteSettings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function OwnerGuard({ children }: { children: React.ReactNode }) {
  const { profile, loading } = useAuth();
  if (loading) return <div className="container py-20 text-center text-muted-foreground font-body">Loading...</div>;
  const role = profile?.role;
  if (role !== "admin" && role !== "staff") return <Navigate to="/" replace />;
  return <>{children}</>;
}

function AdminGuard({ children }: { children: React.ReactNode }) {
  const { isAdmin, loading } = useAuth();
  if (loading) return <div className="container py-20 text-center text-muted-foreground font-body">Loading...</div>;
  if (!isAdmin) return <Navigate to="/" replace />;
  return <>{children}</>;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                {/* Owner dashboard (admin + staff) */}
                <Route path="/owner" element={
                  <OwnerGuard><Layout><OwnerLayout /></Layout></OwnerGuard>
                }>
                  <Route index element={<OwnerDashboard />} />
                  <Route path="products" element={<ProductManagement />} />
                  <Route path="inventory" element={<InventoryManagement />} />
                  <Route path="orders" element={<OrderManagement />} />
                  <Route path="reviews" element={<ReviewManagement />} />
                  <Route path="content" element={<ContentManagement />} />
                  <Route path="analytics" element={<Analytics />} />
                </Route>

                {/* System admin dashboard (admin only) */}
                <Route path="/admin" element={
                  <AdminGuard><Layout><AdminLayout /></Layout></AdminGuard>
                }>
                  <Route index element={<AdminOverview />} />
                  <Route path="users" element={<UserManagement />} />
                  <Route path="logs" element={<AuditLogs />} />
                  <Route path="settings" element={<SiteSettings />} />
                </Route>

                {/* Customer account */}
                <Route path="/account" element={<Layout><AccountLayout /></Layout>}>
                  <Route index element={<AccountDashboard />} />
                  <Route path="profile" element={<ProfilePage />} />
                  <Route path="orders" element={<OrdersPage />} />
                  <Route path="orders/:orderId" element={<OrderDetail />} />
                  <Route path="wishlist" element={<WishlistPage />} />
                  <Route path="addresses" element={<AddressesPage />} />
                  <Route path="appointments" element={<AppointmentsPage />} />
                </Route>

                {/* Public routes */}
                <Route path="/" element={<Layout><Index /></Layout>} />
                <Route path="/products" element={<Layout><Products /></Layout>} />
                <Route path="/product/:id" element={<Layout><ProductDetail /></Layout>} />
                <Route path="/cart" element={<Layout><Cart /></Layout>} />
                <Route path="/checkout" element={<Layout><Checkout /></Layout>} />
                <Route path="/about" element={<Layout><About /></Layout>} />
                <Route path="/contact" element={<Layout><Contact /></Layout>} />
                <Route path="/login" element={<Layout><Login /></Layout>} />
                <Route path="/signup" element={<Layout><Signup /></Layout>} />
                <Route path="/forgot-password" element={<Layout><ForgotPassword /></Layout>} />
                <Route path="/reset-password" element={<Layout><ResetPassword /></Layout>} />
                <Route path="/policies/shipping" element={<Layout><ShippingPolicy /></Layout>} />
                <Route path="/policies/returns" element={<Layout><ReturnsPolicy /></Layout>} />
                <Route path="/policies/privacy" element={<Layout><PrivacyPolicy /></Layout>} />
                <Route path="/policies/terms" element={<Layout><TermsPolicy /></Layout>} />
                <Route path="*" element={<Layout><NotFound /></Layout>} />
              </Routes>
            </BrowserRouter>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
