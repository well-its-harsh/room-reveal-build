import { useState, useRef, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useFeaturedProducts } from "@/hooks/useProducts";
import { ProductWithDetails } from "@/types/database";
import ProductCard from "@/components/ProductCard";
import EnquiryModal from "@/components/EnquiryModal";

export default function TrendingNowTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { data: products = [], isLoading } = useFeaturedProducts();
  
  const TABS = useMemo(() => {
    const uniqueCats = new Map();
    products.forEach(p => {
      const cat = p.category as any;
      if (cat && cat.slug && cat.name) {
        uniqueCats.set(cat.slug, cat.name);
      }
    });
    
    const matched = Array.from(uniqueCats.entries()).map(([slug, label]) => ({ label, slug }));
    return [{ label: "All", slug: "all" }, ...matched];
  }, [products]);
  
  const safeActiveTab = Math.min(activeTab, Math.max(0, TABS.length - 1));
  const activeTabSlug = TABS[safeActiveTab]?.slug || "all";
  const activeTabLabel = TABS[safeActiveTab]?.label || "";

  const tabProducts = products.filter(p => {
    if (activeTabSlug === "all") return true;
    return (p.category as any)?.slug === activeTabSlug;
  });

  const scrollByOne = useCallback((direction: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    if (!card) return;
    const cardWidth = card.offsetWidth + 16;
    el.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  }, []);

  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductWithDetails | null>(null);

  // FIX 5 — "View All All" fixed: if active tab is "All", just show "View All"
  const viewAllLabel = activeTabSlug === "all" ? "View All" : `View All ${activeTabLabel}`;

  return (
    <section className="py-16 md:py-20 bg-[#F7F5F2]">
      <div className="container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="text-[11px] uppercase tracking-[0.22em] text-[#C8860A] font-semibold block mb-2">
            Curated
          </span>
          <h2 className="font-serif text-[#1A1A1A] text-[32px] md:text-[38px] font-bold tracking-tight leading-tight">
            Trending Now
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-0 border-b border-[#E8E4DF] mb-8 overflow-x-auto no-scrollbar">
          {TABS.map((tab, i) => (
            <button
              key={tab.slug}
              onClick={() => setActiveTab(i)}
              className={`flex-shrink-0 px-5 py-2.5 text-[13px] font-medium transition-colors border-b-2 -mb-px whitespace-nowrap ${
                activeTab === i
                  ? "text-[#C8860A] border-[#C8860A]"
                  : "text-[#6B6B6B] border-transparent hover:text-[#1A1A1A]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Card carousel with outside arrows */}
        <div className="relative">
          {/* Prev arrow */}
          <button
            onClick={() => scrollByOne(-1)}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full border border-[#E8E4DF] shadow-md flex items-center justify-center hover:border-[#C8860A] hover:text-[#C8860A] transition-all text-[#1A1A1A] hidden md:flex"
            aria-label="Previous card"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Product cards */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth pb-2"
          >
            {isLoading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    data-card
                    className="flex-shrink-0 w-[calc(25%-12px)] min-w-[240px] h-[420px] bg-white border border-[#E8E4DF] rounded-xl animate-pulse"
                  >
                    <div className="aspect-[4/3] bg-[#F7F5F2] rounded-t-xl" />
                    <div className="p-4 space-y-3">
                      <div className="h-4 bg-[#E8E4DF] rounded w-3/4" />
                      <div className="h-3 bg-[#E8E4DF] rounded w-1/2" />
                      <div className="h-4 bg-[#E8E4DF] rounded w-2/3" />
                      <div className="h-10 bg-[#E8E4DF] rounded w-full mt-4" />
                    </div>
                  </div>
                ))
              : tabProducts.length > 0
              ? tabProducts.map((p, i) => (
                  <div
                    key={p.id}
                    data-card
                    className="flex-shrink-0 w-[calc(25%-12px)] min-w-[240px]"
                  >
                    <ProductCard product={p} index={i} />
                  </div>
                ))
              : (
                <div className="flex-1 py-16 text-center text-[#6B6B6B] text-[14px]">
                  Products coming soon for this category.
                  <Link to="/products" className="block mt-2 text-[#C8860A] hover:underline">
                    Browse all products →
                  </Link>
                </div>
              )
            }
          </div>

          {/* Next arrow */}
          <button
            onClick={() => scrollByOne(1)}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full border border-[#E8E4DF] shadow-md flex items-center justify-center hover:border-[#C8860A] hover:text-[#C8860A] transition-all text-[#1A1A1A] hidden md:flex"
            aria-label="Next card"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-8 text-center">
          <Link
            to={activeTabSlug === 'all' ? '/products' : `/category/${activeTabSlug}`}
            className="inline-flex items-center gap-1.5 text-[13px] text-[#C8860A] font-medium hover:underline"
          >
            {viewAllLabel} <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {selectedProduct && (
        <EnquiryModal
          open={enquiryOpen}
          onClose={() => setEnquiryOpen(false)}
          productId={selectedProduct.id}
          productName={selectedProduct.name}
          categoryName={(selectedProduct.category as any)?.name || "Trending"}
        />
      )}
    </section>
  );
}
