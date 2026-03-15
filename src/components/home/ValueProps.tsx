import { motion } from "framer-motion";
import { ShieldCheck, Eye, Award, Truck } from "lucide-react";

const valueProps = [
  { icon: ShieldCheck, title: "50+ Premium Brands", desc: "Jaquar, Kohler, Grohe & more — all certified" },
  { icon: Eye, title: "AR Visualization", desc: "See products in your actual space before buying" },
  { icon: Award, title: "Expert Guidance", desc: "Trained staff for personalized recommendations" },
  { icon: Truck, title: "Safe Delivery", desc: "Insured packaging & on-time delivery, always" },
];

export default function ValueProps() {
  return (
    <section className="bg-card border-b border-border">
      <div className="container py-10 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {valueProps.map((vp, i) => (
            <motion.div
              key={vp.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <vp.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-heading text-sm font-semibold text-foreground">{vp.title}</h3>
                <p className="text-xs text-muted-foreground font-body mt-0.5 leading-relaxed">{vp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
