import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BRANDS } from "@/data/categories";

export default function BrandMarquee() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  // Auto-scroll logic
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animId: number;
    let pos = 0;

    const step = () => {
      if (!paused && el) {
        pos += 0.5; // slow, seamless speed
        if (pos >= el.scrollWidth / 2) pos = 0;
        el.scrollLeft = pos;
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [paused]);

  // Double the brands for seamless loop
  const displayBrands = [...BRANDS, ...BRANDS];

  return (
    <section className="bg-[#F7F5F2] py-14 md:py-16 border-y border-[#E8E4DF]">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <span className="text-[11px] uppercase tracking-[0.22em] text-[#C8860A] font-semibold block mb-2">
          Our Authorized Partners
        </span>
        <h2 className="font-serif text-[#1A1A1A] text-[32px] md:text-[38px] font-bold tracking-tight">
          Brands We Trust
        </h2>
      </motion.div>

      {/* Marquee track */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-[#F7F5F2] to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-[#F7F5F2] to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          className="flex gap-6 md:gap-10 overflow-hidden px-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {displayBrands.map((brand, i) => (
            <div
              key={`${brand.id}-${i}`}
              className="flex-shrink-0 group cursor-default"
            >
              <div className="w-[140px] md:w-[170px] h-[80px] md:h-[96px] rounded-xl border border-[#E8E4DF] bg-white flex items-center justify-center px-4 transition-all duration-300 group-hover:border-[#C8860A] group-hover:bg-[#FFFDF8] group-hover:shadow-[0_4px_16px_rgba(200,134,10,0.12)]">
                {brand.logo ? (
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-[48px] md:max-h-[56px] max-w-full object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
                    onError={(e) => {
                      // Fallback to text if logo fails
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML = `<span class="font-serif text-lg md:text-xl font-bold text-[#1A1A1A]/30 group-hover:text-[#C8860A] transition-colors select-none">${brand.name}</span>`;
                      }
                    }}
                  />
                ) : (
                  <span className="font-serif text-lg md:text-xl font-bold text-[#1A1A1A]/30 group-hover:text-[#C8860A] transition-colors select-none">
                    {brand.name}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
