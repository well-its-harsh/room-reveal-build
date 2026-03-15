import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya S.",
    role: "Homeowner",
    text: "Excellent quality products and the staff helped us choose the perfect fixtures for our new home. The showroom experience was unlike anything else.",
    rating: 5,
  },
  {
    name: "Rahul M.",
    role: "Interior Designer",
    text: "Best sanitaryware shop in the city. Wide range of brands, very competitive prices, and they understand designer needs perfectly.",
    rating: 5,
  },
  {
    name: "Anita K.",
    role: "Renovator",
    text: "The brass shower set we bought is stunning. Premium quality at a fair price. The AR feature helped us visualize it perfectly in our space.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-body font-medium">Testimonials</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-2">
            What Our Customers Say
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card border border-border rounded-xl p-6 md:p-8 relative"
            >
              <Quote className="w-8 h-8 text-accent/15 absolute top-6 right-6" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground mb-6 font-body">"{t.text}"</p>
              <div>
                <p className="text-sm font-semibold text-foreground font-body">{t.name}</p>
                <p className="text-xs text-muted-foreground font-body">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
