import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag, Truck, Shield, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

export default function Cart() {
  const { items, removeItem, updateQuantity, total } = useCart();
  const itemCount = items.reduce((s, i) => s + i.quantity, 0);
  const deliveryEstimate = total > 10000 ? 0 : 499;
  const tax = Math.round(total * 0.18);
  const grandTotal = total + deliveryEstimate + tax;

  if (items.length === 0) {
    return (
      <div className="container py-20 text-center">
        <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
        <h1 className="font-heading text-2xl font-semibold text-foreground mb-2">Your Cart is Empty</h1>
        <p className="text-muted-foreground font-body mb-6 max-w-sm mx-auto">
          Explore our premium collection and find the perfect pieces for your space.
        </p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body">
          <Link to="/products">Explore Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-6 md:py-12">
      <Link to="/products" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 font-body">
        <ArrowLeft className="w-4 h-4" /> Continue Shopping
      </Link>
      <h1 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-2">Shopping Cart</h1>
      <p className="text-sm text-muted-foreground font-body mb-8">{itemCount} item{itemCount !== 1 ? "s" : ""} in your cart</p>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="flex gap-4 p-4 bg-card rounded-xl border border-border"
              >
                <Link to={`/product/${item.id}`}>
                  <img src={item.image} alt={item.name} className="w-24 h-24 rounded-lg object-cover bg-secondary flex-shrink-0" />
                </Link>
                <div className="flex-1 min-w-0">
                  <Link to={`/product/${item.id}`}>
                    <h3 className="font-heading text-sm font-medium text-foreground line-clamp-2 hover:text-accent transition-colors">{item.name}</h3>
                  </Link>
                  <p className="text-xs text-muted-foreground font-body mt-0.5">{item.category}</p>
                  <p className="text-sm text-accent font-semibold font-body mt-1">₹{item.price.toLocaleString("en-IN")}</p>
                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex items-center bg-secondary rounded-lg">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center text-foreground hover:bg-muted rounded-l-lg transition-colors">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium font-body w-8 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center text-foreground hover:bg-muted rounded-r-lg transition-colors">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-muted-foreground hover:text-destructive p-1 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold font-heading text-foreground">
                    ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Summary Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
            <h2 className="font-heading text-lg font-semibold text-foreground mb-5">Order Summary</h2>
            
            <div className="space-y-3 mb-5">
              <div className="flex justify-between text-sm font-body">
                <span className="text-muted-foreground">Subtotal ({itemCount} items)</span>
                <span className="text-foreground">₹{total.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-sm font-body">
                <span className="text-muted-foreground">GST (18%)</span>
                <span className="text-foreground">₹{tax.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-sm font-body">
                <span className="text-muted-foreground">Delivery</span>
                <span className={deliveryEstimate === 0 ? "text-green-600 font-medium" : "text-foreground"}>
                  {deliveryEstimate === 0 ? "FREE" : `₹${deliveryEstimate}`}
                </span>
              </div>
              {deliveryEstimate > 0 && (
                <p className="text-[11px] text-muted-foreground font-body">
                  Free delivery on orders above ₹10,000
                </p>
              )}
            </div>

            <div className="border-t border-border pt-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="font-heading text-base font-semibold text-foreground">Total</span>
                <span className="font-heading text-xl font-bold text-accent">₹{grandTotal.toLocaleString("en-IN")}</span>
              </div>
            </div>

            <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-body font-medium">
              <Link to="/checkout">Proceed to Checkout</Link>
            </Button>

            {/* Trust badges */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { icon: Truck, label: "Free Delivery" },
                { icon: Shield, label: "Secure Order" },
                { icon: RotateCcw, label: "Easy Returns" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="text-center">
                  <Icon className="w-4 h-4 text-muted-foreground mx-auto mb-1" />
                  <span className="text-[10px] text-muted-foreground font-body">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
