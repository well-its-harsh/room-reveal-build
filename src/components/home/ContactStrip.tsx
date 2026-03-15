import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactItems = [
  { icon: MapPin, label: "Visit Our Showroom", detail: "123 Main Street, City Center" },
  { icon: Clock, label: "Business Hours", detail: "Mon–Sat 9AM–8PM, Sun 10AM–6PM" },
  { icon: Phone, label: "Call Us Now", detail: "+91 00000 00000" },
];

export default function ContactStrip() {
  return (
    <section className="bg-secondary">
      <div className="container py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-body font-medium">Get In Touch</span>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mt-2">
            Visit Our Showroom
          </h2>
          <p className="text-muted-foreground font-body mt-2 max-w-md mx-auto">
            Experience our products in person. Walk through curated displays and get expert advice.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {contactItems.map(({ icon: Icon, label, detail }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center gap-3 p-6 bg-card rounded-xl border border-border"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-heading text-base font-semibold text-foreground">{label}</h3>
              <p className="text-sm text-muted-foreground font-body text-center">{detail}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-medium h-12 px-8">
            <Link to="/contact">
              Contact Us <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
