import { motion } from "framer-motion";

const brands = [
  { name: "Jaquar",   abbr: "JQ", color: "#1a3a5c" },
  { name: "Kohler",   abbr: "KL", color: "#1a1a1a" },
  { name: "Grohe",    abbr: "GH", color: "#0c5a8a" },
  { name: "Kajaria",  abbr: "KJ", color: "#c8860a" },
  { name: "Johnson",  abbr: "JN", color: "#2a4a2a" },
  { name: "Hindware", abbr: "HW", color: "#5a1a1a" },
  { name: "Cera",     abbr: "CR", color: "#1a4a5a" },
  { name: "Parryware",abbr: "PW", color: "#3a1a5a" },
  { name: "Roca",     abbr: "RC", color: "#1a1a4a" },
  { name: "Duravit",  abbr: "DV", color: "#2a2a2a" },
];

export default function BrandPartners() {
  return (
    <section className="py-14 md:py-16 border-t border-[#E8E4DF]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-[11px] uppercase tracking-[0.22em] text-[#C8860A] font-semibold block mb-2">
            Trusted Partners
          </span>
          <h2 className="text-[#1A1A1A]" style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)", fontWeight: 500 }}>
            50+ Premium Brands
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.35 }}
              className="w-[88px] h-[72px] md:w-[100px] md:h-[80px] border border-[#E8E4DF] bg-white flex flex-col items-center justify-center gap-1 hover:border-[#C8860A]/40 hover:shadow-md transition-all duration-250 cursor-pointer group"
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[11px] font-bold"
                style={{ backgroundColor: brand.color }}
              >
                {brand.abbr}
              </div>
              <span className="text-[11px] text-[#6B6B6B] group-hover:text-[#1A1A1A] transition-colors leading-none">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
