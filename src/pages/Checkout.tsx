import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Lock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { useCreateOrder } from "@/hooks/useOrders";
import { toast } from "sonner";

export default function Checkout() {
  const { items, total, clearCart } = useCart();
  const { user, profile } = useAuth();
  const createOrder = useCreateOrder();
  const navigate = useNavigate();

  const [name, setName] = useState(profile?.full_name || "");
  const [phone, setPhone] = useState(profile?.phone || "");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [notes, setNotes] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!user) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-heading text-2xl font-semibold text-foreground mb-4">Please Sign In</h1>
        <p className="text-muted-foreground font-body mb-6">You need to be signed in to checkout.</p>
        <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-body">
          <Link to="/login">Sign In</Link>
        </Button>
      </div>
    );
  }

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-heading text-2xl font-semibold text-foreground mb-4">Cart is Empty</h1>
        <p className="text-muted-foreground font-body mb-6">Add some products before checking out.</p>
        <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-body">
          <Link to="/products">Browse Products</Link>
        </Button>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="container py-20 text-center max-w-md mx-auto">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
          <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
          <h1 className="font-heading text-2xl font-semibold text-foreground mb-2">Order Placed!</h1>
          <p className="text-muted-foreground font-body mb-6">
            Thank you for your order. We'll confirm your order via phone or WhatsApp shortly.
          </p>
          <div className="flex gap-3 justify-center">
            <Button asChild variant="outline" className="font-body">
              <Link to="/account/orders">View Orders</Link>
            </Button>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-body">
              <Link to="/products">Continue Shopping</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  const handlePlaceOrder = async () => {
    if (!name.trim() || !phone.trim()) {
      toast.error("Please fill in your name and phone number");
      return;
    }
    if (!address.trim()) {
      toast.error("Please enter your delivery address");
      return;
    }

    try {
      await createOrder.mutateAsync({
        userId: user.id,
        items: items.map((i) => ({ productId: i.id, quantity: i.quantity, price: i.price })),
        totalAmount: total,
      });
      clearCart();
      setOrderPlaced(true);
    } catch (err: any) {
      toast.error(err.message || "Failed to place order");
    }
  };

  return (
    <div className="container py-6 md:py-12 max-w-4xl">
      <Link to="/cart" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 font-body">
        <ArrowLeft className="w-4 h-4" /> Back to Cart
      </Link>
      <h1 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-8">Checkout</h1>

      <div className="grid md:grid-cols-5 gap-8">
        {/* Form */}
        <div className="md:col-span-3 space-y-6">
          <div>
            <h2 className="font-heading text-lg font-semibold text-foreground mb-4">Contact Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground font-body block mb-1.5">Full Name *</label>
                <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="font-body" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground font-body block mb-1.5">Phone *</label>
                <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 00000 00000" className="font-body" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-foreground mb-4">Delivery Address</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground font-body block mb-1.5">Address *</label>
                <Textarea value={address} onChange={(e) => setAddress(e.target.value)} placeholder="House/flat number, street, landmark" rows={2} className="font-body" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground font-body block mb-1.5">City</label>
                  <Input value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" className="font-body" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground font-body block mb-1.5">Pincode</label>
                  <Input value={pincode} onChange={(e) => setPincode(e.target.value)} placeholder="000000" className="font-body" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground font-body block mb-1.5">Order Notes (optional)</label>
            <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Any special instructions..." rows={2} className="font-body" />
          </div>
        </div>

        {/* Order Summary */}
        <div className="md:col-span-2">
          <div className="bg-secondary rounded-lg p-5 sticky top-24">
            <h2 className="font-heading text-lg font-semibold text-foreground mb-4">Order Summary</h2>
            <div className="space-y-3 mb-4">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm font-body">
                  <span className="text-muted-foreground line-clamp-1 flex-1 mr-2">{item.name} × {item.quantity}</span>
                  <span className="text-foreground font-medium">₹{(item.price * item.quantity).toLocaleString("en-IN")}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-3 mb-4">
              <div className="flex justify-between text-sm font-body mb-1">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-foreground">₹{total.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-sm font-body">
                <span className="text-muted-foreground">Delivery</span>
                <span className="text-foreground">To be confirmed</span>
              </div>
            </div>
            <div className="border-t border-border pt-3 mb-6">
              <div className="flex justify-between">
                <span className="font-heading text-base font-semibold text-foreground">Total</span>
                <span className="font-heading text-xl font-bold text-accent">₹{total.toLocaleString("en-IN")}</span>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-body font-medium"
              onClick={handlePlaceOrder}
              disabled={createOrder.isPending}
            >
              <Lock className="w-4 h-4 mr-2" />
              {createOrder.isPending ? "Placing Order..." : "Place Order"}
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-3 font-body">
              We'll confirm your order via phone or WhatsApp
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
