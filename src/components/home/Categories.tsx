import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useCategories } from "@/hooks/useProducts";
import { Category as DBCategory } from "@/types/database";

// Mock categories with multiple images for hover cycle
const MOCK_CATEGORIES = [
  {
    id: "cat_1",
    name: "Kitchen Taps",
    slug: "kitchen-sink-taps",
    images: ["/images/categories/kitchen-taps.png", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600"],
  },
  {
    id: "cat_2",
    name: "Sanitaryware",
    slug: "sanitaryware-toilets",
    images: ["/images/categories/sanitaryware-toilets.png", "/images/categories/personal-hygiene.png"],
  },
];

const CATEGORY_FALLBACKS: Record<string, string[]> = {
  "taps": ["/images/categories/kitchen-taps.png", "/images/categories/faucets.png"],
  "faucets": ["/images/categories/faucets.png", "/images/categories/aurum-faucets.png"],
  "sinks": ["/images/categories/kitchen-drains.png", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600"],
  "toilets": ["/images/categories/sanitaryware-toilets.png", "/images/categories/personal-hygiene.png"],
  "basins": ["https://images.unsplash.com/photo-1620626011761-9963d7521576?auto=format&fit=crop&q=80&w=600", "/images/categories/basin-taps.png"],
  "showers": ["/images/categories/shower-systems.png", "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=600"],
  "bathtub": ["/images/categories/bathtub.png", "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=600"],
};

function getCategoryImages(cat: DBCategory & { image_url?: string }): string[] {
  // 1. Try MOCK_CATEGORIES match by slug
  const mockMatch = MOCK_CATEGORIES.find(m => m.slug === cat.slug);
  if (mockMatch) return mockMatch.images;

  // 2. Try DATABASE image_url
  if (cat.image_url) return [cat.image_url];

  // 3. Try Keyword Match for fallbacks
  const name = cat.name.toLowerCase();
  for (const [key, imgs] of Object.entries(CATEGORY_FALLBACKS)) {
    if (name.includes(key)) return imgs;
  }

  // 4. Ultimate Fallback
  return ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600"];
}

function CategoryCard({ cat, index }: { cat: DBCategory & { images?: string[]; image_url?: string }, index: number }) {
  const displayImages = cat.images || [(cat as any).image_url || "/placeholder.svg"];
  const [imgIndex, setImgIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!hovering || cat.images.length <= 1) return;
    const timer = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % cat.images.length);
    }, 1200);
    return () => clearInterval(timer);
  }, [hovering, cat.images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="flex-shrink-0 w-[calc(100%-12px)] sm:w-[calc(50%-12px)] md:w-[calc(25%-16px)] min-w-[260px] group flex flex-col items-center cursor-pointer"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => { setHovering(false); setImgIndex(0); }}
      onClick={() => navigate(`/products?category=${cat.slug}`)}
    >
      {/* Image Area - Rounded Corers, cycled on hover */}
      <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#F7F5F2] mb-5 shadow-sm border border-[#E8E4DF] hover:shadow-lg transition-all duration-300">
        <img
          src={displayImages[imgIndex]}
          alt={cat.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>

      {/* Center Aligned Content */}
      <h3 className="font-serif text-[20px] font-bold text-[#1A1A1A] mb-3 text-center transition-colors group-hover:text-[#C8860A]">
        {cat.name}
      </h3>
      
      <div className="flex justify-center w-full">
        <button className="px-6 py-2 rounded-full border border-[#C8860A] text-[#C8860A] text-[13px] font-semibold uppercase tracking-wider group-hover:bg-[#C8860A] group-hover:text-white transition-all duration-300">
          View Collection
        </button>
      </div>
    </motion.div>
  );
}

export default function Categories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { data: dbCategories = [] } = useCategories();

  const scrollByOne = useCallback((direction: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 260 + 16;
    el.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  }, []);

  // Combine real categories with intelligent image resolution
  const categories = useMemo(() => {
    return dbCategories.map(db => ({
      ...db,
      images: getCategoryImages(db)
    }));
  }, [dbCategories]);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container overflow-visible relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10"
        >
          <div>
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#C8860A] font-semibold block mb-2">
              Discover
            </span>
            <h2 className="font-serif text-[#1A1A1A] text-[32px] md:text-[38px] font-bold tracking-tight leading-tight">
              Shop by Category
            </h2>
          </div>
          <Link
            to="/categories"
            className="flex items-center gap-1 text-[13px] text-[#C8860A] hover:underline font-medium mt-3 md:mt-0"
          >
            All Categories <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative group/carousel">
          {/* Left Arrow */}
          <button
            onClick={() => scrollByOne(-1)}
            className="absolute -left-5 top-[40%] -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full border border-[#E8E4DF] shadow-md flex items-center justify-center hover:border-[#C8860A] hover:text-[#C8860A] transition-all text-[#1A1A1A] md:opacity-0 md:group-hover/carousel:opacity-100 hidden md:flex"
            aria-label="Previous categories"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-5 overflow-x-auto no-scrollbar scroll-smooth pb-6"
          >
            {categories.map((cat, i) => (
              <CategoryCard key={cat.id} cat={cat} index={i} />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scrollByOne(1)}
            className="absolute -right-5 top-[40%] -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full border border-[#E8E4DF] shadow-md flex items-center justify-center hover:border-[#C8860A] hover:text-[#C8860A] transition-all text-[#1A1A1A] md:opacity-0 md:group-hover/carousel:opacity-100 hidden md:flex"
            aria-label="Next categories"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
