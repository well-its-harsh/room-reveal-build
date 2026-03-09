import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { useCreateOrder } from "@/hooks/useOrders";
import { toast } from "sonner";
import { useState } from "react";

export default function Cart() {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();
  const { user, profile } = useAuth();
  const createOrder = useCreateOrder();
  const navigate = useNavigate();

  const [name, setName] = useState(profile?.full_name || "");
  const [phone, setPhone] = useState(profile?.phone || "");
  const [address, setAddress] = useState("");
  const [showCheckout, setShowCheckout] = useState(false);

  if (items.length === 0) {
    return (
      <div className="container py-20 text-center">
        <ShoppingBag className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <h1 className="font-heading text-2xl font-semibold text-foreground mb-2">Your Cart is Empty</h1>
        <p className="text-muted-foreground font-body mb-6">Browse our collection to find something you love.</p>
        <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-body">
          <Link to="/products">Shop Products</Link>
        </Button>
      </div>
    );
  }

  const handleCheckout = async () => {
    if (!user) {
      toast.error("Please sign in to place an order");
      navigate("/login");
      return;
    }
    if (!name.trim() || !phone.trim()) {
      toast.error("Please fill in your name and phone number");
      return;
    }

    try {
      await createOrder.mutateAsync({
        userId: user.id,
        items: items.map((i) => ({ productId: i.id, quantity: i.quantity, price: i.price })),
        totalAmount: total,
      });
      clearCart();
      toast.success("Order placed successfully! We'll contact you shortly.");
      navigate("/");
    } catch (err: any) {
      toast.error(err.message || "Failed to place order");
    }
  };

  return (
    <div className="container py-6 md:py-12 max-w-3xl">
      <Link to="/products" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 font-body">
        <ArrowLeft className="w-4 h-4" /> Continue Shopping
      </Link>
      <h1 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-8">Shopping Cart</h1>

      <div className="space-y-4">
        {items.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex gap-4 p-4 bg-card rounded-lg border border-border"
          >
            <img src={item.image} alt={item.name} className="w-20 h-20 rounded object-cover bg-secondary" />
            <div className="flex-1 min-w-0">
              <h3 className="font-heading text-sm font-medium text-foreground line-clamp-1">{item.name}</h3>
              <p className="text-sm text-accent font-semibold font-body">₹{item.price.toLocaleString("en-IN")}</p>
              <div className="flex items-center gap-2 mt-2">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-7 h-7 rounded bg-secondary flex items-center justify-center text-foreground hover:bg-muted">
                  <Minus className="w-3 h-3" />
                </button>
                <span className="text-sm font-medium font-body w-6 text-center">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-7 h-7 rounded bg-secondary flex items-center justify-center text-foreground hover:bg-muted">
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>
            <div className="flex flex-col items-end justify-between">
              <button onClick={() => removeItem(item.id)} className="text-muted-foreground hover:text-destructive p-1">
                <Trash2 className="w-4 h-4" />
              </button>
              <p className="text-sm font-semibold font-body text-foreground">
                ₹{(item.price * item.quantity).toLocaleString("en-IN")}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary & Checkout */}
      <div className="mt-8 p-6 bg-secondary rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <span className="text-muted-foreground font-body">Subtotal</span>
          <span className="font-heading text-xl font-bold text-foreground">₹{total.toLocaleString("en-IN")}</span>
        </div>

        {!showCheckout ? (
          <Button
            size="lg"
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-body font-medium"
            onClick={() => {
              if (!user) {
                toast.error("Please sign in to checkout");
                navigate("/login");
              } else {
                setShowCheckout(true);
              }
            }}
          >
            Proceed to Checkout
          </Button>
        ) : (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="space-y-3">
            <div>
              <label className="text-sm font-medium text-foreground font-body block mb-1">Name *</label>
              <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="font-body" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground font-body block mb-1">Phone *</label>
              <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 00000 00000" className="font-body" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground font-body block mb-1">Address (optional)</label>
              <Textarea value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Delivery address" rows={2} className="font-body" />
            </div>
            <Button
              size="lg"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-body font-medium"
              onClick={handleCheckout}
              disabled={createOrder.isPending}
            >
              {createOrder.isPending ? "Placing Order..." : "Place Order"}
            </Button>
          </motion.div>
        )}

        <p className="text-xs text-muted-foreground text-center mt-3 font-body">
          We'll confirm your order via phone or WhatsApp
        </p>
      </div>
    </div>
  );
}
