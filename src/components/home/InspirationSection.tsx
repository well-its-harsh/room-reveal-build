import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import inspirationImage from "@/assets/bathroom-inspiration.jpg";

export default function InspirationSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden"
          >
            <img
              src={inspirationImage}
              alt="Bathroom renovation transformation"
              loading="lazy"
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-body font-medium mb-4">
              <Sparkles className="w-3 h-3" />
              Coming Soon
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-5 leading-tight">
              AI Bathroom
              <br />
              <span className="text-accent">Makeover</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Upload a photo of your bathroom, tell us your style preferences, and our AI will generate stunning design concepts — complete with product recommendations from our catalogue.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Upload your room photo",
                "Choose your style and budget",
                "Get 2–3 curated design concepts",
                "Shop the complete look instantly",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground font-body">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Button variant="outline" className="font-body" disabled>
              Launching Phase 2 <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
