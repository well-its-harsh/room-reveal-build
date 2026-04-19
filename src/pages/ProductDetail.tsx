import { useParams, Link, useSearchParams } from "react-router-dom";
import { useState, lazy, Suspense, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShoppingBag, Smartphone, Star, ChevronLeft, ChevronRight, X, Heart, MessageSquare, Video, 
  ChevronDown, HelpCircle, ArrowRight, ShieldCheck, Tag, Copy, Plus, Minus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProduct, useRelatedProducts } from "@/hooks/useProducts";
import { ProductVariant } from "@/types/database";
import { useWishlist } from "@/contexts/WishlistContext";
import { useReviews } from "@/hooks/useReviews";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import ProductCard from "@/components/ProductCard";
import EnquiryModal from "@/components/EnquiryModal";
import VideoCallModal from "@/components/VideoCallModal";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import BackButton from "@/components/BackButton";
import { track } from "@/lib/analytics";
import { supabase } from "@/lib/supabase";
import { cn } from "@/lib/utils";

// Lazy Components
const ARViewer = lazy(() => import("@/components/ARViewer"));
const ModelViewer = lazy(() => import("@/components/ModelViewer"));

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const { user } = useAuth();
  const { data: product, isLoading } = useProduct(id || "");
  const { toggle: toggleWishlist, isWishlisted } = useWishlist();
  const { reviews, addReview } = useReviews(id || "");
  
  const [showAR, setShowAR] = useState(searchParams.get("showAR") === "true");
  const [showModelViewer, setShowModelViewer] = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [videoCallOpen, setVideoCallOpen] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
  
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState("");
  const [reviewSort, setReviewSort] = useState("Highest Rating");

  const [openSection, setOpenSection] = useState<string | null>("features");
  const [showPolicyModal, setShowPolicyModal] = useState<"returns" | "help" | null>(null);

  const { data: related = [] } = useRelatedProducts(
    product?.category_id || "",
    product?.id || ""
  );

  // Reset states and scroll to top when product ID changes
  useEffect(() => {
    setActiveImg(0);
    setSelectedVariant(null);
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (product?.variants && product.variants.length > 0 && !selectedVariant) {
      setSelectedVariant(product.variants[0].id);
    }
    
    if (product) {
      // Track view
      track('product_view', { 
        product_id: product.id, 
        product_name: product.name, 
        category: product.category?.name 
      });
      
      // Increment view count in Supabase
      supabase.rpc('increment_view_count', { product_id: product.id })
        .then(({ error }) => {
          if (error) console.error("Error incrementing view count:", error);
        });
    }
  }, [product, selectedVariant]);

  if (isLoading) {
    return (
      <div className="container max-w-7xl py-12 md:py-20 mt-[72px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <Skeleton className="aspect-square rounded-lg" />
          <div className="space-y-6">
            <Skeleton className="h-6 w-1/4" />
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-20 w-full" />
            <div className="grid grid-cols-2 gap-4">
              <Skeleton className="h-14 w-full" />
              <Skeleton className="h-14 w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container py-24 text-center mt-[72px]">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-4 text-[#1A1A1A]">Product Not Found</h2>
          <p className="text-[#6B6B6B] mb-8">The item you're looking for might have been moved or is currently unavailable.</p>
          <Button asChild className="bg-[#1A1A1A] hover:bg-[#333] text-white">
            <Link to="/categories">Explore Collections</Link>
          </Button>
        </div>
      </div>
    );
  }

  const images = product.product_media?.filter((m) => m.media_type === "image").map((m) => m.media_url) || [];
  if (images.length === 0) images.push("/placeholder.svg");
  
  const arAsset = product.ar_assets?.find(a => a.asset_type === 'model' || a.asset_url?.endsWith('.glb'));
  const modelUrl = arAsset?.asset_url || product.product_media?.find((m) => m.media_type === "3d_model")?.media_url;
  const avgRating = product.rating_avg || 4.2;
  const wishlisted = isWishlisted(product.id);
  const reviewCount = product.rating_count || reviews.length || 128;
  
  // Calculate pricing based on selection
  const currentVariant = (product.variants as any)?.find((v: any) => v.id === selectedVariant);
  const effectivePrice = currentVariant?.discounted_price || product.price;
  const effectiveOriginalPrice = currentVariant?.original_price || (product as any).original_price;
  const isOnSale = currentVariant ? (currentVariant.discounted_price < (currentVariant.original_price || currentVariant.discounted_price)) : (product as any).is_on_sale;
  const saleLabel = (product as any).sale_label;
  
  const discountPercentage = effectiveOriginalPrice 
    ? Math.round(((effectiveOriginalPrice - effectivePrice) / effectiveOriginalPrice) * 100) 
    : 0;

  // FIX 10 — ar_enabled flag controls AR/3D button visibility
  const arEnabled = (product as any).ar_enabled === true;

  const handleSubmitReview = async () => {
    if (!user) return toast.error("Please login to write a review");
    if (!newComment.trim()) return toast.error("Please enter a comment");
    try {
      await addReview.mutateAsync({ userId: user.id, rating: newRating, comment: newComment });
      setNewComment("");
      setNewRating(5);
      setShowReviewForm(false);
      toast.success("Review posted successfully!");
    } catch (err: any) {
      toast.error(err.message || "Failed to submit review");
    }
  };

  const sortedReviews = [...reviews].sort((a, b) => {
    if (reviewSort === "Highest Rating") return b.rating - a.rating;
    if (reviewSort === "Lowest Rating") return a.rating - b.rating;
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });

  return (
    <div className="bg-white min-h-screen pb-20 mt-[72px]">
      <div className="container max-w-[1400px] pt-6 md:pt-10">
        
        {/* FIX 8 — BackButton */}
        <BackButton />

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[12px] text-[#6B6B6B] mb-6 md:mb-10">
          <Link to="/" className="hover:text-[#C8860A] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/categories" className="hover:text-[#C8860A] transition-colors">Categories</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#1A1A1A] font-medium truncate max-w-[200px]">{product.name}</span>
        </nav>

        {/* TOP LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start mb-24">
          
          {/* LEFT SIDE (Sticky Gallery) */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-[120px] space-y-4">
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square bg-[#F7F5F2] rounded-xl overflow-hidden group">
              <img
                src={images[activeImg]}
                alt={product.name}
                className="w-full h-full object-cover mix-blend-multiply"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/placeholder.svg"; }}
              />

              {isOnSale && (
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                  <div className="bg-red-600 text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                    {saleLabel || "Special Offer"}
                  </div>
                  {discountPercentage > 0 && (
                    <div className="bg-[#1A1A1A] text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg w-fit">
                      -{discountPercentage}%
                    </div>
                  )}
                </div>
              )}
              
              {images.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); setActiveImg((activeImg - 1 + images.length) % images.length); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow flex items-center justify-center hover:bg-[#1A1A1A] hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); setActiveImg((activeImg + 1) % images.length); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow flex items-center justify-center hover:bg-[#1A1A1A] hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto no-scrollbar py-1">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all bg-[#F7F5F2] ${
                      i === activeImg ? "border-[#C8860A] scale-100" : "border-transparent opacity-60 hover:opacity-100 scale-95"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover mix-blend-multiply" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-1/2">
            <div className="flex justify-between items-start mb-2">
              <h1 className="text-[32px] md:text-[40px] font-serif font-bold text-[#1A1A1A] leading-tight pr-6">
                {product.name}
              </h1>
              <button 
                onClick={() => toggleWishlist(product.id)}
                className={`flex-shrink-0 w-12 h-12 rounded-full border border-[#E8E4DF] flex items-center justify-center transition-colors ${wishlisted ? "bg-[#FFF5F5] border-red-200" : "hover:bg-[#F7F5F2]"}`}
              >
                <Heart className={`w-5 h-5 ${wishlisted ? "fill-red-500 text-red-500" : "text-[#6B6B6B]"}`} />
              </button>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1.5 cursor-pointer hover:opacity-80" onClick={() => document.getElementById("reviews-section")?.scrollIntoView({behavior: "smooth"})}>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className={`w-4 h-4 ${i <= Math.round(avgRating) ? "fill-[#C8860A] text-[#C8860A]" : "text-[#E8E4DF]"}`} />
                  ))}
                </div>
                <span className="text-[13px] font-medium text-[#1A1A1A] ml-1">{avgRating.toFixed(1)} <span className="text-[#6B6B6B] underline ml-1">({reviewCount} reviews)</span></span>
              </div>
              <span className="text-[#E8E4DF]">|</span>
              <span className="text-[12px] text-[#6B6B6B] uppercase tracking-wider">SKU: PD-{product.id.slice(0, 6).toUpperCase()}</span>
            </div>

            <p className="text-[15px] text-[#6B6B6B] leading-relaxed mb-8 max-w-xl">
              {product.description || "An exemplar of functional luxury. Designed to elevate daily routines with peerless material integrity and refined aesthetics."}
            </p>

            <div className="mb-8 p-6 bg-[#FAF9F6] rounded-2xl border border-[#E8E4DF] shadow-sm">
              <div className="flex items-baseline gap-4 mb-1">
                <span className="text-[40px] font-bold text-[#1A1A1A] leading-none tracking-tight">₹{effectivePrice.toLocaleString("en-IN")}</span>
                {effectiveOriginalPrice && effectiveOriginalPrice > effectivePrice && (
                  <span className="text-[20px] text-[#999] line-through font-medium">₹{effectiveOriginalPrice.toLocaleString("en-IN")}</span>
                )}
                {discountPercentage > 0 && (
                  <span className="text-[14px] font-bold text-red-600 uppercase tracking-wider">{discountPercentage}% OFF</span>
                )}
              </div>
              <p className="text-[12px] text-[#6B6B6B] font-medium">Inclusive of all taxes & priority handling</p>
            </div>

            {/* PRODUCT VARIANTS */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-10">
                <p className="text-[14px] font-bold text-[#1A1A1A] mb-4 uppercase tracking-[0.1em]">
                  Available Selections: <span className="text-[#C8860A] ml-1">{currentVariant?.name}</span>
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {product.variants.map((v: ProductVariant) => (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVariant(v.id)}
                      className={cn(
                        "text-left p-3 rounded-xl border-2 transition-all group",
                        selectedVariant === v.id 
                          ? "border-[#C8860A] bg-[#C8860A]/5 shadow-sm" 
                          : "border-[#E8E4DF] hover:border-[#1A1A1A]"
                      )}
                    >
                      <p className={cn(
                        "text-[13px] font-bold line-clamp-1 mb-1",
                        selectedVariant === v.id ? "text-[#C8860A]" : "text-[#1A1A1A]"
                      )}>{v.name}</p>
                      <p className="text-[12px] text-[#6B6B6B]">₹{(v as any).discounted_price?.toLocaleString("en-IN")}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ACTION BUTTONS — FIX 10: Book Enquiry always full width */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Button 
                size="lg" 
                className="flex-1 h-14 bg-[#1A1A1A] text-white hover:bg-[#333] text-[14px] font-bold tracking-widest uppercase transition-all"
                onClick={() => setEnquiryOpen(true)}
              >
                Book Enquiry
              </Button>
            </div>

            {/* FIX 10 — AR/3D buttons only shown when ar_enabled = true */}
            <div className={`grid gap-3 mb-8 ${arEnabled ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-1"}`}>
              {arEnabled && (
                <Button variant="outline" className="h-12 border-[#E8E4DF] text-[#1A1A1A] hover:border-[#1A1A1A] hover:bg-transparent" onClick={() => setShowAR(true)}>
                  <Smartphone className="w-4 h-4 mr-2" /> View in Space
                </Button>
              )}
              {arEnabled && (
                <Button variant="outline" className="h-12 border-[#E8E4DF] text-[#1A1A1A] hover:border-[#1A1A1A] hover:bg-transparent" onClick={() => setShowModelViewer(true)}>
                  <Star className="w-4 h-4 mr-2" /> 3D View
                </Button>
              )}
              {/* Video Call always shown, expands to full width when AR is hidden */}
              <Button 
                variant="outline" 
                className={`h-12 border-[#E8E4DF] text-[#1A1A1A] hover:border-[#1A1A1A] hover:bg-transparent ${!arEnabled ? "sm:col-span-1 w-full" : ""}`} 
                onClick={() => setVideoCallOpen(true)}
              >
                <Video className="w-4 h-4 mr-2" /> Shop on Video Call
              </Button>
            </div>

            <div className="border-t border-[#E8E4DF] mb-10">
              {[
                { 
                  id: "features", 
                  label: "Features", 
                  content: (product as any).features || "Expertly crafted with corrosion-resistant materials. Engineered for optimal ergonomics and lasting brilliance in high-moisture environments." 
                },
                { 
                  id: "specs", 
                  label: "Specifications", 
                  content: (product as any).specifications || `Dimensions: ${product.width || 120}W x ${product.height || 200}H mm\nMaterial: Premium Brass\nInstallation: Deck Mounted\nOrigin: Sourced Globally` 
                },
                { 
                  id: "info", 
                  label: "Additional Information", 
                  content: (product as any).additional_info || "Package includes installation manual, core components, and a 5-year trusted warranty certificate." 
                },
                { 
                  id: "care", 
                  label: "Care & Maintenance", 
                  content: (product as any).care_maintenance || "Clean with a soft microfiber cloth and mild soap. Avoid abrasive cleaners or acidic solutions to protect the lacquer finish." 
                },
              ].map(sec => (
                <div key={sec.id} className="border-b border-[#E8E4DF]">
                  <button 
                    onClick={() => setOpenSection(openSection === sec.id ? null : sec.id)}
                    className="w-full flex items-center justify-between py-5 text-left"
                  >
                    <span className="text-[14px] font-bold text-[#1A1A1A] uppercase tracking-widest">{sec.label}</span>
                    {openSection === sec.id ? <Minus className="w-4 h-4 text-[#6B6B6B]" /> : <Plus className="w-4 h-4 text-[#6B6B6B]" />}
                  </button>
                  <AnimatePresence>
                    {openSection === sec.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 text-[14px] text-[#6B6B6B] leading-relaxed whitespace-pre-line">
                          {sec.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* INFO BOXES */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-[#F7F5F2] p-4 rounded-xl text-center flex flex-col items-center">
                <Tag className="w-5 h-5 text-[#C8860A] mb-2" />
                <span className="text-[11px] font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">Spend & Save</span>
                <span className="text-[11px] text-[#6B6B6B] leading-tight">{(product as any).bulk_discount_info || "Extra 5% off on bulk orders"}</span>
              </div>
              <div 
                className="bg-[#F7F5F2] p-4 rounded-xl text-center flex flex-col items-center cursor-pointer hover:bg-[#E8E4DF] transition-colors"
                onClick={() => {
                  const chatBtn = document.querySelector('[aria-label="Toggle chat"]') as HTMLButtonElement;
                  if (chatBtn) chatBtn.click();
                  else toast.info("Our AI expert is ready to help! Look for the chat icon at the bottom right.");
                }}
              >
                <HelpCircle className="w-5 h-5 text-[#C8860A] mb-2" />
                <span className="text-[11px] font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">Need Help?</span>
                <span className="text-[11px] text-[#6B6B6B] leading-tight">Chat with an expert</span>
              </div>
              <div 
                className="bg-[#F7F5F2] p-4 rounded-xl text-center flex flex-col items-center cursor-pointer hover:bg-[#E8E4DF] transition-colors"
                onClick={() => setShowPolicyModal("returns")}
              >
                <ShieldCheck className="w-5 h-5 text-[#C8860A] mb-2" />
                <span className="text-[11px] font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">Easy Returns</span>
                <span className="text-[11px] text-[#6B6B6B] leading-tight">30-day hassle-free process</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Complete the Look */}
      {related.length > 0 && (
        <section className="border-t border-[#E8E4DF] bg-[#F7F5F2] py-20">
          <div className="container max-w-[1400px]">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1A1A] mb-10">Complete the Look / Installation Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.slice(0, 4).map((p, i) => (
                <div key={p.id} className="bg-white p-4 rounded-xl shadow-sm border border-[#E8E4DF] flex items-center gap-4 group">
                   <Link to={`/product/${p.id}`} className="w-20 h-20 flex-shrink-0 bg-[#F7F5F2] rounded-lg p-1">
                      <img src={p.product_media?.[0]?.media_url || "/placeholder.svg"} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform" />
                   </Link>
                   <div>
                     <Link to={`/product/${p.id}`} className="text-[14px] font-serif font-bold text-[#1A1A1A] line-clamp-1 group-hover:text-[#C8860A] transition-colors">{p.name}</Link>
                     <p className="text-[14px] font-bold text-[#1A1A1A] mt-1">₹{p.price.toLocaleString("en-IN")}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Customer Reviews */}
      <section id="reviews-section" className="py-20 bg-white">
        <div className="container max-w-[1000px]">
          <h2 className="text-3xl font-serif font-bold text-[#1A1A1A] mb-10 text-center">Customer Reviews</h2>
          
          <div className="grid md:grid-cols-3 gap-10 items-start mb-16 p-8 border border-[#E8E4DF] rounded-2xl bg-[#F7F5F2]">
            <div className="text-center md:text-left border-b md:border-b-0 md:border-r border-[#E8E4DF] pb-6 md:pb-0 md:pr-6">
               <div className="text-[56px] font-bold text-[#1A1A1A] leading-none mb-2">{avgRating.toFixed(1)}</div>
               <div className="flex justify-center md:justify-start gap-1 mb-2">
                 {[1,2,3,4,5].map((i) => (
                   <Star key={i} className={`w-5 h-5 ${i <= Math.round(avgRating) ? "fill-[#C8860A] text-[#C8860A]" : "text-[#D1D1D1]"}`} />
                 ))}
               </div>
               <p className="text-[13px] text-[#6B6B6B]">Based on {reviewCount} reviews</p>
            </div>
            <div className="col-span-2 flex flex-col sm:flex-row items-center gap-6 justify-between">
              <div className="space-y-2 flex-1 w-full">
                {[5, 4, 3, 2, 1].map(star => (
                   <div key={star} className="flex items-center gap-3 text-[12px] font-medium text-[#6B6B6B]">
                     <span>{star} Stars</span>
                     <div className="flex-1 h-2 bg-[#E8E4DF] rounded-full overflow-hidden">
                       <div className="h-full bg-[#C8860A]" style={{ width: star === 5 ? '75%' : star === 4 ? '15%' : '2%' }} />
                     </div>
                   </div>
                ))}
              </div>
              <div className="flex flex-col gap-3 w-full sm:w-auto">
                 <Button className="w-full bg-[#1A1A1A] text-white hover:bg-[#333] uppercase tracking-widest text-[12px] font-bold" onClick={() => setShowReviewForm(!showReviewForm)}>
                   Write a Review
                 </Button>
                 <Button variant="outline" className="w-full border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#F7F5F2] uppercase tracking-widest text-[12px] font-bold">
                   Ask a Question
                 </Button>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {showReviewForm && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden mb-12">
                 <div className="p-6 border border-[#E8E4DF] rounded-xl bg-white">
                   <h3 className="font-bold mb-4">Submit Your Review</h3>
                   <div className="flex gap-2 mb-6">
                     {[1, 2, 3, 4, 5].map((star) => (
                       <Star key={star} onClick={() => setNewRating(star)} className={`w-8 h-8 cursor-pointer ${star <= newRating ? "fill-[#C8860A] text-[#C8860A]" : "text-[#E8E4DF]"}`} />
                     ))}
                   </div>
                   <Textarea 
                     placeholder="Share your experience with this product..." 
                     value={newComment} onChange={(e) => setNewComment(e.target.value)}
                     className="mb-4 min-h-[100px]"
                   />
                   <Button onClick={handleSubmitReview} className="bg-[#1A1A1A] text-white px-8">Submit</Button>
                 </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-end mb-8">
            <select 
              className="text-[13px] border-none font-medium text-[#1A1A1A] bg-transparent outline-none cursor-pointer"
              value={reviewSort}
              onChange={(e) => setReviewSort(e.target.value)}
            >
              <option>Highest Rating</option>
              <option>Most Recent</option>
              <option>Lowest Rating</option>
              <option>Most Helpful</option>
            </select>
          </div>

          <div className="space-y-8">
            {sortedReviews.length > 0 ? sortedReviews.map((review: any) => (
              <div key={review.id} className="border-b border-[#E8E4DF] pb-8">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="flex gap-0.5">
                        {[1,2,3,4,5].map((i) => (
                          <Star key={i} className={`w-3.5 h-3.5 ${i <= review.rating ? "fill-[#C8860A] text-[#C8860A]" : "text-[#E8E4DF]"}`} />
                        ))}
                      </div>
                      <span className="text-[12px] font-bold text-[#1A1A1A]">{review.profile?.full_name || "Verified Buyer"}</span>
                    </div>
                    <span className="text-[11px] text-[#999] uppercase tracking-wider">{new Date(review.created_at).toLocaleDateString()}</span>
                  </div>
                </div>
                <p className="text-[14px] text-[#1A1A1A] leading-relaxed">{review.comment}</p>
              </div>
            )) : (
              <p className="text-center text-[#6B6B6B] italic py-10">No reviews yet for this product.</p>
            )}
          </div>
        </div>
      </section>

      {/* You May Also Like */}
      {related.length > 0 && (
        <section className="py-20 border-t border-[#E8E4DF]">
          <div className="container max-w-[1400px]">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1A1A] mb-10 text-center">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {related.slice(0, 4).map((p, i) => (
                 <div key={p.id}>
                   <ProductCard product={p} index={i} />
                 </div>
               ))}
            </div>
          </div>
        </section>
      )}

      {/* Modals */}
      {/* FIX 10 — AR/3D modals only render when ar_enabled */}
      {showAR && arEnabled && (
        <Suspense fallback={null}>
          <ARViewer productId={product.id} productName={product.name} modelUrl={modelUrl} productImages={images} onClose={() => setShowAR(false)} />
        </Suspense>
      )}
      {showModelViewer && modelUrl && arEnabled && (
        <Suspense fallback={null}>
          <ModelViewer productName={product.name} modelUrl={modelUrl} onClose={() => setShowModelViewer(false)} />
        </Suspense>
      )}
      <EnquiryModal open={enquiryOpen} onClose={() => setEnquiryOpen(false)} productId={product.id} productName={product.name} />
      <VideoCallModal open={videoCallOpen} onClose={() => setVideoCallOpen(false)} productId={product.id} productName={product.name} />

      {/* Policy Modal Overlay */}
      <AnimatePresence>
        {showPolicyModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPolicyModal(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="p-6 md:p-8 flex justify-between items-start border-b border-[#E8E4DF]">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-[#1A1A1A]">
                    {showPolicyModal === 'returns' ? 'Return & Refund Policy' : 'Customer Support'}
                  </h3>
                  <p className="text-[#6B6B6B] text-sm mt-1">Shree Radhe Tiles & Hardware • Luxury Assurance</p>
                </div>
                <button onClick={() => setShowPolicyModal(null)} className="p-2 hover:bg-[#F7F5F2] rounded-full transition-colors">
                  <X className="w-6 h-6 text-[#1A1A1A]" />
                </button>
              </div>
              
              <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto font-body">
                {showPolicyModal === 'returns' ? (
                  <div className="space-y-6">
                    <section>
                      <h4 className="font-bold text-[#1A1A1A] mb-2 uppercase tracking-wider text-sm">30-Day Hassle-Free Returns</h4>
                      <p className="text-[#6B6B6B] leading-relaxed">We take immense pride in the quality of our luxury bathware and hardware. If you are not completely satisfied with your purchase, you may return the item within 30 days of delivery.</p>
                    </section>
                    <section>
                      <h4 className="font-bold text-[#1A1A1A] mb-2 uppercase tracking-wider text-sm">Eligibility Criteria</h4>
                      <ul className="list-disc list-inside text-[#6B6B6B] space-y-2">
                        <li>Items must be in original, unused condition.</li>
                        <li>Original packaging and all components must be intact.</li>
                        <li>Proof of purchase (invoice) is required.</li>
                        <li>Custom-ordered or installed items cannot be returned.</li>
                      </ul>
                    </section>
                    <section>
                      <h4 className="font-bold text-[#1A1A1A] mb-2 uppercase tracking-wider text-sm">Refund Process</h4>
                      <p className="text-[#6B6B6B] leading-relaxed">Once the returned item passes our quality inspection, the refund will be initiated to your original payment method within 7-10 business days.</p>
                    </section>
                    <div className="bg-[#FAF9F6] p-4 rounded-xl border border-[#E8E4DF]">
                      <p className="text-[13px] text-[#C8860A] font-bold italic">Note: Return shipping costs are covered by the customer unless the item arrived damaged or defective.</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <p className="text-[#6B6B6B] leading-relaxed">Our experts are available to assist you with technical specifications, installation guidance, or order tracking.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-[#F7F5F2] rounded-xl border border-[#E8E4DF]">
                        <h5 className="font-bold text-[#1A1A1A] mb-1">Instant Chat</h5>
                        <p className="text-xs text-[#6B6B6B] mb-3">Speak with our AI assistant or a live representative.</p>
                        <Button className="w-full bg-[#1A1A1A] text-white text-xs h-9 uppercase tracking-widest font-bold" onClick={() => {
                          setShowPolicyModal(null);
                          (document.querySelector('[aria-label="Toggle chat"]') as HTMLButtonElement)?.click();
                        }}>Start Chat</Button>
                      </div>
                      <div className="p-4 bg-[#F7F5F2] rounded-xl border border-[#E8E4DF]">
                        <h5 className="font-bold text-[#1A1A1A] mb-1">WhatsApp Support</h5>
                        <p className="text-xs text-[#6B6B6B] mb-3">Fast response for product queries.</p>
                        <Button variant="outline" className="w-full border-[#1A1A1A] text-[#1A1A1A] text-xs h-9 uppercase tracking-widest font-bold" asChild>
                          <a href="https://wa.me/919997843467" target="_blank" rel="noopener noreferrer">Message Us</a>
                        </Button>
                      </div>
                    </div>
                    <div className="p-4 border-t border-[#E8E4DF] text-center">
                      <p className="text-sm text-[#6B6B6B]">Available Mon-Sat: 10:00 AM - 8:00 PM IST</p>
                      <p className="text-sm font-bold text-[#1A1A1A] mt-1">support@shreeradhe.com</p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6 bg-[#FAF9F6] flex justify-end border-t border-[#E8E4DF]">
                <Button onClick={() => setShowPolicyModal(null)} className="bg-[#1A1A1A] text-white px-8">Close</Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
