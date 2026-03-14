import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function TermsPolicy() {
  return (
    <div className="container py-10 md:py-16 max-w-3xl">
      <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 font-body">
        <ArrowLeft className="w-4 h-4" /> Home
      </Link>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="font-heading text-3xl font-semibold text-foreground mb-8">Terms & Conditions</h1>
        <div className="prose prose-sm max-w-none font-body text-muted-foreground space-y-6">
          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">General</h2>
            <p>By using BathHaus, you agree to these terms. We reserve the right to update these terms at any time.</p>
          </section>
          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">Orders & Pricing</h2>
            <p>All prices are in INR and inclusive of applicable taxes unless stated otherwise. Prices are subject to change without notice. Orders are confirmed only after verification by our team.</p>
          </section>
          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">Product Images</h2>
            <p>Product images are for illustration purposes. Actual colours and finishes may vary slightly due to display settings and manufacturing variations.</p>
          </section>
          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">AR Visualization</h2>
            <p>The "View in My Room" feature provides approximate visual previews for size and placement estimation only. It is not a guarantee of exact appearance or fit.</p>
          </section>
          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">Limitation of Liability</h2>
            <p>BathHaus is not liable for damages arising from the use of our website or products beyond the purchase price of the item.</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
