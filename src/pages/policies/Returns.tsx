import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function ReturnsPolicy() {
  return (
    <div className="container py-10 md:py-16 max-w-3xl">
      <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 font-body">
        <ArrowLeft className="w-4 h-4" /> Home
      </Link>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="font-heading text-3xl font-semibold text-foreground mb-8">Returns & Refund Policy</h1>
        <div className="prose prose-sm max-w-none font-body text-muted-foreground space-y-6">
          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">Return Window</h2>
            <p>Items can be returned within 7 days of delivery, provided they are unused, in original packaging, and in resalable condition.</p>
          </section>
          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">Non-Returnable Items</h2>
            <p>Custom-ordered items, installed products, and accessories with broken seals cannot be returned.</p>
          </section>
          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">Refund Process</h2>
            <p>Refunds are processed within 7–10 business days after the returned item is inspected. Refunds will be issued to the original payment method.</p>
          </section>
          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">Exchange</h2>
            <p>We offer exchanges for manufacturing defects or damaged goods. Contact our team with photos and your order ID.</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
