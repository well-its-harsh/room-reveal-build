import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Star, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { ProductWithDetails } from "@/types/database";
import { useWishlist } from "@/contexts/WishlistContext";
import { useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import EnquiryModal from "@/components/EnquiryModal";

/* ──────────────────────── helpers ──────────────────────── */

function getAllImages(product: ProductWithDetails): string[] {
  const images = (product.product_media || [])
    .filter((m) => m.media_type === "image")
    .map((m) => m.media_url);
  return images.length > 0 ? images : ["/placeholder.svg"];
}

type AvailKey = "in-stock" | "limited" | "out-of-stock";

function getAvailability(product: ProductWithDetails): AvailKey {
  if (!product.inventory || product.inventory.length === 0) return "in-stock";
  const qty = product.inventory[0].quantity;
  if (qty === 0) return "out-of-stock";
  if (qty <= 5) return "limited";
  return "in-stock";
}

const AVAIL_BADGE: Record<AvailKey, { label: string; bg: string; text: string }> = {
  "in-stock":     { label: "In Stock",     bg: "bg-emerald-500", text: "text-white" },
  "limited":      { label: "Limited",      bg: "bg-amber-500",   text: "text-white" },
  "out-of-stock": { label: "Sold Out",     bg: "bg-red-500",     text: "text-white" },
};

function getDimensions(product: ProductWithDetails): string | null {
  const parts: string[] = [];
  if (product.width) parts.push(`${product.width}`);
  if (product.height) parts.push(`${product.height}`);
  if (product.depth) parts.push(`${product.depth}`);
  if (parts.length === 0) return null;
  return parts.join(" × ") + " mm";
}

function getDiscountPercent(price: number): number {
  // Calculate a simulated MRP (15-30% above price) for display
  return Math.floor(Math.random() * 16) + 15;
}

/* ──────────────────────── Component ──────────────────────── */

export default function ProductCard({
  product,
  index = 0,
  compareMode = false,
  isCompared = false,
  onCompareToggle,
  viewAs = "grid",
}: {
  product: ProductWithDetails;
  index?: number;
  compareMode?: boolean;
  isCompared?: boolean;
  onCompareToggle?: (id: string, checked: boolean) => void;
  viewAs?: "grid" | "list";
}) {
  const images = getAllImages(product);
  const avail = getAvailability(product);
  const badge = AVAIL_BADGE[avail];
  const { toggle, isWishlisted } = useWishlist();
  const wishlisted = isWishlisted(product.id);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const queryClient = useQueryClient();
  
  const prefetchProduct = () => {
    queryClient.prefetchQuery({
      queryKey: ["product", product.id],
      queryFn: async () => {
        const { data, error } = await supabase
          .from("products")
          .select("*,categories(*),product_media(*),inventory(*),ar_assets(*),product_variants(*)")
          .eq("id", product.id)
          .maybeSingle();
        if (error) throw error;
        return { ...data, category: (data as any).categories, variants: (data as any).product_variants };
      },
      staleTime: 1000 * 60 * 5,
    });
  };

  const dimensions = getDimensions(product);
  const rating = product.rating_avg ?? 4.2;
  const reviewCount = product.rating_count ?? 0;
  const categoryName =
    (product as any).category?.name ||
    (product as any).categories?.name ||
    "";
  
  const isOnSale = (product as any).is_on_sale;
  const originalPrice = (product as any).original_price;
  const discountPct = (product as any).discount_percentage || 20;
  const finalMrp = originalPrice || Math.round(product.price / (1 - (discountPct as number) / 100));

  // Auto-cycle images on hover
  useEffect(() => {
    if (!hovering || images.length <= 1) return;
    const timer = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % images.length);
    }, 1200);
    return () => clearInterval(timer);
  }, [hovering, images.length]);

  const prevImg = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setImgIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const nextImg = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setImgIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
        className={`relative group h-full ${viewAs === 'list' ? 'w-full' : ''}`}
      >
        <div className={`bg-white border border-[#E8E4DF] rounded-xl overflow-hidden h-full flex transition-all duration-400 hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)] hover:border-[#C8860A]/25 ${viewAs === 'list' ? 'flex-row min-h-[220px]' : 'flex-col'}`}>
          {/* ── Image Area ── */}
          <div className={`relative overflow-hidden bg-[#F7F5F2] flex-shrink-0 ${viewAs === 'list' ? 'w-[40%] aspect-[16/9]' : 'aspect-[4/3] w-full'}`}>
            {compareMode && (
              <div className="absolute top-3 left-3 z-20">
                <input
                  type="checkbox"
                  checked={isCompared}
                  onChange={(e) => onCompareToggle?.(product.id, e.target.checked)}
                  className="w-5 h-5 rounded border-[#E8E4DF] text-[#C8860A] focus:ring-[#C8860A] cursor-pointer"
                />
              </div>
            )}
            
            <Link
              to={`/product/${product.id}`}
              className="block w-full h-full"
              onMouseEnter={() => { setHovering(true); prefetchProduct(); }}
              onMouseLeave={() => { setHovering(false); setImgIndex(0); }}
            >
              <img
                src={images[imgIndex]}
                alt={product.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />

              {/* Top-left: availability badge */}
              <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 items-start">
                 <span className={`${badge.bg} ${badge.text} text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm`}>
                    {badge.label}
                 </span>
                 {isOnSale && (
                   <span className="bg-[#1A1A1A] text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm">
                      -{discountPct}% OFF
                   </span>
                 )}
              </div>

            {/* Top-right: rating badge */}
            {reviewCount > 0 && (
              <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-sm">
                <Star className="w-3 h-3 fill-[#C8860A] text-[#C8860A]" />
                <span className="text-[11px] font-bold text-[#1A1A1A]">{rating.toFixed(1)}</span>
                <span className="text-[10px] text-[#6B6B6B]">({reviewCount})</span>
              </div>
            )}

            {/* Image navigation arrows (visible on hover, if multiple images) */}
            {images.length > 1 && hovering && (
              <>
                <button
                  onClick={prevImg}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-colors z-10"
                >
                  <ChevronLeft className="w-3.5 h-3.5 text-[#1A1A1A]" />
                </button>
                <button
                  onClick={nextImg}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-colors z-10"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#1A1A1A]" />
                </button>
              </>
            )}

            {/* Image dots */}
            {images.length > 1 && (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                {images.map((_, i) => (
                  <span
                    key={i}
                    className={`block rounded-full transition-all duration-300 ${
                      i === imgIndex
                        ? "w-4 h-1.5 bg-[#C8860A]"
                        : "w-1.5 h-1.5 bg-white/60"
                    }`}
                  />
                ))}
              </div>
            )}
            </Link>
          </div>

          {/* ── Card Body ── */}
          <div className={`flex flex-col flex-1 ${viewAs === 'list' ? 'p-6' : 'p-4'}`}>
            {/* Line 1: Product name */}
            <Link to={`/product/${product.id}`}>
              <h3 className="font-serif text-[15px] md:text-[16px] font-bold text-[#1A1A1A] line-clamp-2 leading-snug mb-1 hover:text-[#C8860A] transition-colors">
                {product.name}
              </h3>
            </Link>

            {/* Line 2: Dimensions */}
            {dimensions && (
              <p className="text-[12px] text-[#6B6B6B] mb-1.5">{dimensions}</p>
            )}

            {/* Line 3: Price row */}
            <div className="flex items-baseline gap-2 mb-2.5">
              <span className="text-[17px] font-bold text-[#1A1A1A]">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              {(isOnSale || originalPrice) && (
                <span className="text-[13px] text-[#999] line-through">
                  ₹{finalMrp.toLocaleString("en-IN")}
                </span>
              )}
            </div>

            {/* Line 4: Color variant swatches (placeholder - uses brand-based colors) */}
            <div className="flex items-center gap-1.5 mb-3">
              {["#C4B5A5", "#1A1A1A", "#E8E4DF", "#8B6347"].slice(0, 3).map((color, i) => (
                <button
                  key={i}
                  className={`w-5 h-5 rounded-full border-2 transition-all hover:scale-110 ${
                    i === 0 ? "border-[#C8860A] ring-1 ring-[#C8860A]/30" : "border-[#E8E4DF]"
                  }`}
                  style={{ backgroundColor: color }}
                  title={`Variant ${i + 1}`}
                />
              ))}
              <span className="text-[11px] text-[#999] ml-1">+2</span>
            </div>

            {/* Spacer to push button to bottom */}
            <div className="mt-auto" />

            {/* CTA row: Enquire + Wishlist */}
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setEnquiryOpen(true); }}
                className="flex-1 flex items-center justify-center gap-2 h-11 md:h-10 rounded-lg border-2 border-[#C8860A] text-[#C8860A] text-[12px] font-bold uppercase tracking-tight hover:bg-[#C8860A] hover:text-white transition-all duration-300"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Enquire
              </button>
              <button
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggle(product.id); }}
                className={`w-11 h-11 md:w-10 md:h-10 rounded-lg border-2 flex items-center justify-center transition-all duration-300 ${
                  wishlisted
                    ? "border-[#C8860A] bg-[#C8860A]/5 text-[#C8860A]"
                    : "border-[#E8E4DF] text-[#999] hover:border-[#C8860A] hover:text-[#C8860A]"
                }`}
              >
                <Heart className={`w-4 h-4 ${wishlisted ? "fill-[#C8860A]" : ""}`} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <EnquiryModal
        open={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        productId={product.id}
        productName={product.name}
        categoryName={categoryName}
      />
    </>
  );
}
