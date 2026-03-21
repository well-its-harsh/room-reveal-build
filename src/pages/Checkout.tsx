import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Lock, CheckCircle, CreditCard, Banknote, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { useCreateOrder } from "@/hooks/useOrders";
import { toast } from "sonner";

const paymentMethods = [
  { id: "cod", label: "Cash on Delivery", desc: "Pay when you receive", icon: Banknote },
  { id: "upi", label: "UPI / Online", desc: "GPay, PhonePe, etc.", icon: CreditCard },
  { id: "showroom", label: "Pay at Showroom", desc: "Visit & pay in person", icon: Store },
];

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
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const tax = Math.round(total * 0.18);
  const delivery = total > 10000 ? 0 : 499;
  const grandTotal = total + tax + delivery;

  if (!user) {
    return (
      <div className="container py-20 text-center">
        <Lock className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <h1 className="font-heading text-2xl font-semibold text-foreground mb-4">Sign In to Checkout</h1>
        <p className="text-muted-foreground font-body mb-6 max-w-sm mx-auto">Create an account or sign in to place your order and track your delivery.</p>
        <div className="flex gap-3 justify-center">
          <Button asChild variant="outline" className="font-body"><Link to="/signup">Create Account</Link></Button>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-body"><Link to="/login">Sign In</Link></Button>
        </div>
      </div>
    );
  }

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-heading text-2xl font-semibold text-foreground mb-4">Cart is Empty</h1>
        <p className="text-muted-foreground font-body mb-6">Add some products before checking out.</p>
        <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-body"><Link to="/products">Browse Products</Link></Button>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="container py-20 text-center max-w-md mx-auto">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h1 className="font-heading text-2xl font-semibold text-foreground mb-2">Order Placed Successfully!</h1>
          <p className="text-muted-foreground font-body mb-2">Thank you for choosing BathHaus.</p>
          <p className="text-sm text-muted-foreground font-body mb-8">We'll confirm your order via phone or WhatsApp shortly. You can track your order from your account.</p>
          <div className="flex gap-3 justify-center">
            <Button asChild variant="outline" className="font-body"><Link to="/account/orders">Track Order</Link></Button>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-body"><Link to="/products">Continue Shopping</Link></Button>
          </div>
        </motion.div>
      </div>
    );
  }

  const handlePlaceOrder = async () => {
    if (!name.trim() || !phone.trim()) { toast.error("Please fill in your name and phone number"); return; }
    if (paymentMethod !== "showroom" && !address.trim()) { toast.error("Please enter your delivery address"); return; }

    try {
      await createOrder.mutateAsync({
        userId: user.id,
        items: items.map((i) => ({ productId: i.id, quantity: i.quantity, price: i.price })),
        totalAmount: grandTotal,
      });
      clearCart();
      setOrderPlaced(true);
    } catch (err: any) {
      toast.error(err.message || "Failed to place order");
    }
  };

  return (
    <div className="container py-6 md:py-12 max-w-5xl">
      <Link to="/cart" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 font-body">
        <ArrowLeft className="w-4 h-4" /> Back to Cart
      </Link>
      <h1 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-8">Checkout</h1>

      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-3 space-y-8">
          {/* Contact */}
          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground mb-4">Contact Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground font-body block mb-1.5">Full Name *</label>
                <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" className="font-body" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground font-body block mb-1.5">Phone *</label>
                <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 00000 00000" className="font-body" />
              </div>
            </div>
          </section>

          {/* Address */}
          {paymentMethod !== "showroom" && (
            <section>
              <h2 className="font-heading text-lg font-semibold text-foreground mb-4">Delivery Address</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground font-body block mb-1.5">Address *</label>
                  <Textarea value={address} onChange={(e) => setAddress(e.target.value)} placeholder="House/flat, street, landmark" rows={2} className="font-body" />
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
            </section>
          )}

          {/* Payment Method */}
          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground mb-4">Payment Method</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {paymentMethods.map(({ id, label, desc, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setPaymentMethod(id)}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    paymentMethod === id
                      ? "border-accent bg-accent/5"
                      : "border-border bg-card hover:border-muted-foreground/30"
                  }`}
                >
                  <Icon className={`w-5 h-5 mb-2 ${paymentMethod === id ? "text-accent" : "text-muted-foreground"}`} />
                  <p className="font-body text-sm font-medium text-foreground">{label}</p>
                  <p className="font-body text-xs text-muted-foreground">{desc}</p>
                </button>
              ))}
            </div>
          </section>

          {/* Notes */}
          <section>
            <label className="text-sm font-medium text-foreground font-body block mb-1.5">Order Notes (optional)</label>
            <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Special instructions, preferred delivery time..." rows={2} className="font-body" />
          </section>
        </div>

        {/* Order Summary */}
        <div className="md:col-span-2">
          <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
            <h2 className="font-heading text-lg font-semibold text-foreground mb-5">Order Summary</h2>
            <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover bg-secondary flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-body text-foreground line-clamp-1">{item.name}</p>
                    <p className="text-xs text-muted-foreground font-body">Qty: {item.quantity}</p>
                  </div>
                  <p className="text-sm font-medium font-body text-foreground">₹{(item.price * item.quantity).toLocaleString("en-IN")}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-4 space-y-2">
              <div className="flex justify-between text-sm font-body">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-foreground">₹{total.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-sm font-body">
                <span className="text-muted-foreground">GST (18%)</span>
                <span className="text-foreground">₹{tax.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-sm font-body">
                <span className="text-muted-foreground">Delivery</span>
                <span className={delivery === 0 ? "text-green-600 font-medium" : "text-foreground"}>
                  {delivery === 0 ? "FREE" : `₹${delivery}`}
                </span>
              </div>
            </div>
            <div className="border-t border-border pt-4 mt-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="font-heading text-base font-semibold text-foreground">Total</span>
                <span className="font-heading text-xl font-bold text-accent">₹{grandTotal.toLocaleString("en-IN")}</span>
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
              We'll confirm via phone or WhatsApp
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
