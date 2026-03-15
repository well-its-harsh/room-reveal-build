import { motion } from "framer-motion";

const brands = [
  { name: "Jaquar", initial: "J" },
  { name: "Hindware", initial: "H" },
  { name: "Cera", initial: "C" },
  { name: "Parryware", initial: "P" },
  { name: "Kohler", initial: "K" },
  { name: "Grohe", initial: "G" },
  { name: "Roca", initial: "R" },
  { name: "Duravit", initial: "D" },
];

export default function BrandPartners() {
  return (
    <section className="bg-secondary">
      <div className="container py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-body font-medium">Trusted By The Best</span>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mt-2">
            Our Brand Partners
          </h2>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-card border border-border flex flex-col items-center justify-center gap-1 hover:shadow-md hover:border-accent/30 transition-all duration-300"
            >
              <span className="font-heading text-2xl font-bold text-accent">{brand.initial}</span>
              <span className="text-[10px] text-muted-foreground font-body">{brand.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
