import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bathroom.jpg";

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-end overflow-hidden">
      <motion.img
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        src={heroImage}
        alt="Luxury bathroom showroom with marble countertop and brass fixtures"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-foreground/5" />

      <div className="relative container pb-16 md:pb-24 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="inline-block text-xs uppercase tracking-[0.25em] text-accent font-body font-medium mb-4"
          >
            Premium Sanitaryware & Hardware
          </motion.span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.1] mb-5">
            Elevate Every
            <br />
            <span className="text-accent">Space</span> You Touch
          </h1>
          <p className="text-primary-foreground/75 text-base md:text-lg mb-8 font-body leading-relaxed max-w-md">
            India's most trusted bathroom showroom. 50+ premium brands, expert guidance, and AR-powered visualization — all under one roof.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-medium h-12 px-8">
              <Link to="/products">
                Explore Products <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10 font-body h-12 px-8">
              <Link to="/products">
                <Smartphone className="mr-2 w-4 h-4" /> View in Your Space
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-5 h-8 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-primary-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
