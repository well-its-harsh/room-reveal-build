import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function ShippingPolicy() {
  return (
    <div className="container py-10 md:py-16 max-w-3xl">
      <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 font-body">
        <ArrowLeft className="w-4 h-4" /> Home
      </Link>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="font-heading text-3xl font-semibold text-foreground mb-8">Shipping Policy</h1>
        <div className="prose prose-sm max-w-none font-body text-muted-foreground space-y-6">
          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">Delivery Areas</h2>
            <p>We deliver across the city and surrounding areas. For deliveries outside our standard zone, additional charges may apply.</p>
          </section>
          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">Delivery Timeline</h2>
            <p>Standard delivery takes 3–7 business days. Large items like cabinets and toilets may require 5–10 business days due to special handling.</p>
          </section>
          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">Shipping Charges</h2>
            <p>Delivery charges depend on order size, weight, and distance. Final charges will be confirmed at the time of order confirmation via phone or WhatsApp.</p>
          </section>
          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">Order Tracking</h2>
            <p>Once your order is shipped, you can track it from your account dashboard under "My Orders."</p>
          </section>
          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">Damaged Goods</h2>
            <p>Please inspect your delivery upon arrival. If any item is damaged during transit, contact us within 24 hours with photos for a prompt replacement.</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
