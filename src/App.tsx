import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import Layout from "@/components/Layout";
import AdminLayout from "@/components/AdminLayout";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/admin/Dashboard";
import ProductManagement from "./pages/admin/ProductManagement";
import InventoryManagement from "./pages/admin/InventoryManagement";
import OrderManagement from "./pages/admin/OrderManagement";
import ReviewManagement from "./pages/admin/ReviewManagement";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

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
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Admin routes */}
              <Route path="/admin" element={
                <AdminGuard>
                  <Layout><AdminLayout /></Layout>
                </AdminGuard>
              }>
                <Route index element={<AdminDashboard />} />
                <Route path="products" element={<ProductManagement />} />
                <Route path="inventory" element={<InventoryManagement />} />
                <Route path="orders" element={<OrderManagement />} />
                <Route path="reviews" element={<ReviewManagement />} />
              </Route>

              {/* Public routes */}
              <Route path="/" element={<Layout><Index /></Layout>} />
              <Route path="/products" element={<Layout><Products /></Layout>} />
              <Route path="/product/:id" element={<Layout><ProductDetail /></Layout>} />
              <Route path="/cart" element={<Layout><Cart /></Layout>} />
              <Route path="/about" element={<Layout><About /></Layout>} />
              <Route path="/contact" element={<Layout><Contact /></Layout>} />
              <Route path="/login" element={<Layout><Login /></Layout>} />
              <Route path="/signup" element={<Layout><Signup /></Layout>} />
              <Route path="*" element={<Layout><NotFound /></Layout>} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
