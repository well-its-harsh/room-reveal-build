import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  "Open any product page",
  "Tap 'View in My Room'",
  "Point your camera at the floor or wall",
  "Place, move & rotate the product",
];

export default function ARExplainer() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-body font-medium">Innovation</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mt-2 mb-5 leading-tight">
              View Products
              <br />
              <span className="text-accent">In Your Room</span>
            </h2>
            <p className="opacity-75 font-body leading-relaxed mb-8 max-w-md">
              Use your phone camera to see how products look in your actual space — at real-world scale. Move, rotate, and visualize before you buy.
            </p>
            <div className="space-y-4 mb-8">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span className="w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="font-body text-sm opacity-85">{step}</p>
                </motion.div>
              ))}
            </div>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-medium h-12 px-8">
              <Link to="/products">
                Try It Now <Smartphone className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-10 md:p-14 text-center border border-primary-foreground/10"
          >
            <div className="w-20 h-20 rounded-2xl bg-accent/15 flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-10 h-10 text-accent" />
            </div>
            <p className="font-heading text-xl font-semibold mb-2">AR Preview</p>
            <p className="text-sm opacity-60 font-body mb-6">Available on AR-enabled products</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 text-accent text-xs font-body font-medium">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Works on mobile
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
