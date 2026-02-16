import { motion } from "framer-motion";
import { Award, Users, Truck, Shield } from "lucide-react";

const values = [
  { icon: Award, title: "Quality First", desc: "We stock only top-tier brands with proven durability and finish." },
  { icon: Users, title: "Expert Guidance", desc: "Our trained staff help you pick the right products for your space." },
  { icon: Truck, title: "Reliable Delivery", desc: "On-time delivery with safe packaging across the region." },
  { icon: Shield, title: "Warranty Support", desc: "Full manufacturer warranty and hassle-free after-sales service." },
];

export default function About() {
  return (
    <div className="container py-10 md:py-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto text-center mb-16">
        <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">About BathHaus</h1>
        <p className="text-muted-foreground font-body leading-relaxed">
          Since 2010, BathHaus has been the trusted name for premium sanitaryware and hardware in the region. We believe that every home deserves products that are both beautiful and built to last.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {values.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center p-6 bg-secondary rounded-lg"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <Icon className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-heading text-base font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground font-body">{desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Our Brands</h2>
        <p className="text-muted-foreground font-body leading-relaxed mb-6">
          We partner with over 50 leading Indian and international brands including Jaquar, Hindware, Kohler, Grohe, and many more to offer you the widest selection under one roof.
        </p>
      </div>
    </div>
  );
}
