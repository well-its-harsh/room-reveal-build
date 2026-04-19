import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import BackButton from "@/components/BackButton";
import { useAreas } from "@/hooks/useProducts";

export default function AllCategories() {
  const { data: areas = [], isLoading } = useAreas();

  // Mosaic puzzle span logic for visual variety
  const getSpan = (index: number) => {
    if (index % 7 === 0) return { colSpan: 2, rowSpan: 2 }; // Large square
    if (index % 5 === 0) return { colSpan: 2, rowSpan: 1 };  // Wide rectangle
    return { colSpan: 1, rowSpan: 1 };                        // Normal
  };

  return (
    <div className="bg-[#F7F5F2] min-h-screen py-16 md:py-24">
      <div className="container">
        {/* Back Button */}
        <BackButton />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#C8860A] font-semibold block mb-3">
            Explore
          </span>
          <h1 className="font-serif text-[#1A1A1A] text-[40px] md:text-[56px] font-bold tracking-tight leading-tight mb-4">
            The Collections
          </h1>
          <p className="text-[#6B6B6B] text-[15px] leading-relaxed">
            Discover our complete portfolio of premium materials and hardware, 
            curated for India's finest architectural masterpieces.
          </p>
        </motion.div>

        {/* Mosaic CSS Grid — Areas as category cards */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-8 h-8 border-2 border-[#C8860A] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridAutoRows: "200px",
              gap: "8px",
            }}
          >
            {areas.map((area: any, i: number) => {
              const { colSpan, rowSpan } = getSpan(i);
              return (
                <motion.div
                  key={area.id || area.slug}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.04, duration: 0.5 }}
                  style={{
                    gridColumn: `span ${colSpan}`,
                    gridRow: `span ${rowSpan}`,
                  }}
                  className="group relative overflow-hidden rounded-xl"
                >
                  {/* Navigate to /area/[slug] */}
                  <Link to={`/area/${area.slug}`} className="block w-full h-full">
                    {/* Full bleed image */}
                    <img
                      src={area.image_url || "/assets/generated/hero-slide-1.jpg"}
                      alt={area.name}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "/assets/generated/hero-slide-1.jpg";
                      }}
                    />
                    
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Content at bottom */}
                    <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
                      <h3 className={`font-serif font-bold text-white leading-tight ${colSpan === 2 && rowSpan === 2 ? 'text-[24px] md:text-[32px]' : colSpan === 2 ? 'text-[20px] md:text-[24px]' : 'text-[16px] md:text-[18px]'}`}>
                        {area.name}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#C8860A] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 mt-2">
                        Explore Gallery <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
