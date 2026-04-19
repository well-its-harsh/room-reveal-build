import { useRef, useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useAreas } from "@/hooks/useProducts";

const areaImages: Record<string, string> = {
  "kitchen": "https://modularkitchendsi.com/wp-content/uploads/2025/08/n-modular-kitchen-e1769224461832.webp",
  "toilet": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-2023-1678081565-AJpiy/bathroom-1681310164-CzldO/172-1687497077-9VeEx.jpg",
  "bathroom": "https://s3-blog.homelane.com/design-ideas/wp-content/uploads/2025/12/01142824/modern-bathroom-shower-designs-rustic-bathroom-shower-ideas-1024x640.png",
  "wash-basin": "https://assets-news.housing.com/news/wp-content/uploads/2022/01/12005854/13-Wash-Basin-Mirror-Design-That-Will-Never-Go-Out-Of-Style-10.jpg",
  "drains": "https://atkinsoninspection.com/wp-content/uploads/2023/07/Drainage_pipe_25.jpeg",
  "special-needs": "https://prosafeliving.com/wp-content/uploads/2025/07/hanidcap-grab-bars-for-bathroom.webp",
  "water-heater": "https://sc04.alicdn.com/kf/H7b9ebf339d31433cbf3d7f33f99b44a6f.jpg",
  "plumbing": "https://m.media-amazon.com/images/I/61yiQbvmhqL.jpg",
  "commercial": "https://t4.ftcdn.net/jpg/17/60/52/95/360_F_1760529534_I7aLpF3GW1VrQGuyM1fKpNwpoweInLQ4.jpg",
  "utility": "https://cdn.mos.cms.futurecdn.net/Kq97nhXSz58rsvJ9C2Lw8K-1295-80.jpg",
  "outdoor": "https://m.media-amazon.com/images/I/81shQCgZgbL._AC_UF1000,1000_QL80_.jpg",
  "roof-balcony": "https://assets-news.housing.com/news/wp-content/uploads/2021/12/06164021/Which-water-tank-is-best-for-home-shutterstock_1993635497.jpg",
  "tile-leveling": "https://futurestilesonline.com/wp-content/uploads/2025/03/Annotation-2025-03-03-144838-1.png",
  "hotelier": "https://www.maisonvalentina.net/blog/wp-content/uploads/2024/08/MV_01_24_DIAMOND-scaled.jpg",
  "hospitals": "https://www.hewi.com/Professional-Care/800K/3878/image-thumb__3878__full-16-9/hewi-system800k-interieur-tuer.eaf6a419.jpg",
  "schools": "https://www.greenlamsturdo.com/wp-content/uploads/2025/09/hpl-urinal-partition-design.jpg"
};

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800";

const SCROLL_AMOUNT = 280; // px per arrow click

export default function ShopByArea() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  const { data: areas = [], isLoading } = useAreas();

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    const ro = new ResizeObserver(updateScrollState);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      ro.disconnect();
    };
  }, [updateScrollState]);

  const scroll = useCallback((dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-areacard]");
    if (card) {
      const scrollWidth = card.offsetWidth + 16; // card width + gap-4
      el.scrollBy({ left: dir * scrollWidth, behavior: "smooth" });
    } else {
      el.scrollBy({ left: dir * SCROLL_AMOUNT, behavior: "smooth" });
    }
  }, []);

  return (
    <section className="py-16 md:py-20">
      <div className="container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10"
        >
          <div>
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#C8860A] font-semibold block mb-2">
              Browse
            </span>
            <h2 className="font-serif text-[#1A1A1A] text-[32px] md:text-[38px] font-bold tracking-tight leading-tight">
              Shop By Area
            </h2>
          </div>
          <Link
            to="/products"
            className="flex items-center gap-1 text-[13px] text-[#C8860A] hover:underline font-medium mt-3 md:mt-0"
          >
            View All Products <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll(-1)}
            disabled={!canScrollLeft}
            className={`absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full border border-[#E8E4DF] shadow-md hidden md:flex items-center justify-center transition-all ${
              canScrollLeft
                ? "hover:border-[#C8860A] hover:text-[#C8860A] text-[#1A1A1A] cursor-pointer"
                : "opacity-30 cursor-not-allowed text-[#1A1A1A]"
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Scrollable strip */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth pb-2"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {areas.map((area, i) => {
              const imgSrc = areaImages[area.slug] ?? area.image_url ?? FALLBACK_IMAGE;
              return (
                <motion.div
                  key={area.id}
                  data-areacard
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(i * 0.05, 0.4), duration: 0.45 }}
                  className="flex-shrink-0 w-[calc(50%-8px)] md:w-[calc(33.333%-10.66px)] lg:w-[calc(25%-12px)]"
                >
                  <Link
                    to={`/area/${area.slug}`}
                    className="group relative block aspect-[3/4] overflow-hidden rounded-2xl hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition-all duration-300"
                  >
                    {/* Fallback bg */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#2a4a5e] to-[#1a3040]" />

                    {/* Photo */}
                    <img
                      src={imgSrc}
                      alt={area.name}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover rounded-2xl group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.opacity = "0";
                      }}
                    />

                    {/* Subtle black tint overlay for label clarity */}
                    <div className="absolute inset-0 rounded-2xl bg-black/25 group-hover:bg-black/40 transition-all duration-300" />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                    {/* Label */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                      <h3 className="text-white font-serif font-bold text-[16px] md:text-[18px] leading-tight mb-0.5">
                        {area.name}
                      </h3>
                      <span className="inline-flex items-center gap-1 mt-2 text-[#C8860A] text-[12px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        Explore <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll(1)}
            disabled={!canScrollRight}
            className={`absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full border border-[#E8E4DF] shadow-md hidden md:flex items-center justify-center transition-all ${
              canScrollRight
                ? "hover:border-[#C8860A] hover:text-[#C8860A] text-[#1A1A1A] cursor-pointer"
                : "opacity-30 cursor-not-allowed text-[#1A1A1A]"
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
