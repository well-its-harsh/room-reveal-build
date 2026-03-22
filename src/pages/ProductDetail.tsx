import { useParams, Link } from "react-router-dom";
import { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingBag, Smartphone, Star, ChevronLeft, ChevronRight, Ruler, Package, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProduct, useRelatedProducts } from "@/hooks/useProducts";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import ProductCard from "@/components/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";

const ARViewer = lazy(() => import("@/components/ARViewer"));

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading } = useProduct(id || "");
  const { addItem } = useCart();
  const [showAR, setShowAR] = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const [activeTab, setActiveTab] = useState<"description" | "specs" | "reviews">("description");

  const { data: related = [] } = useRelatedProducts(
    product?.category_id || "",
    product?.id || ""
  );

  if (isLoading) {
    return (
      <div className="container py-6 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <Skeleton className="aspect-square rounded-xl" />
          <div className="space-y-4">
            <Skeleton className="h-5 w-1/3" />
            <Skeleton className="h-8 w-2/3" />
            <Skeleton className="h-6 w-1/4" />
            <Skeleton className="h-32 w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <p className="text-muted-foreground font-body mb-4">Product not found.</p>
        <Button asChild variant="outline" className="font-body">
          <Link to="/products">Back to Products</Link>
        </Button>
      </div>
    );
  }

  const images = product.product_media?.filter((m) => m.media_type === "image").map((m) => m.media_url) || [];
  if (images.length === 0) images.push("/placeholder.svg");
  const modelUrl = product.product_media?.find((m) => m.media_type === "3d_model")?.media_url;
  const inStock = !product.inventory?.length || product.inventory[0].quantity > 0;
  const stockQty = product.inventory?.[0]?.quantity;
  const avgRating = product.reviews?.length
    ? product.reviews.reduce((s, r) => s + r.rating, 0) / product.reviews.length
    : 0;

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: images[0],
      category: product.category?.name || "",
    });
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="container py-6 md:py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground font-body mb-6">
        <Link to="/products" className="hover:text-foreground transition-colors">Shop</Link>
        <span>/</span>
        {product.category && (
          <>
            <Link to={`/products?category=${product.category.slug}`} className="hover:text-foreground transition-colors">{product.category.name}</Link>
            <span>/</span>
          </>
        )}
        <span className="text-foreground">{product.name}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Gallery */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="relative aspect-square rounded-xl overflow-hidden bg-secondary">
            <img
              src={images[activeImg]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={() => setActiveImg((activeImg - 1 + images.length) % images.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-card/80 backdrop-blur flex items-center justify-center text-foreground hover:bg-card transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActiveImg((activeImg + 1) % images.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-card/80 backdrop-blur flex items-center justify-center text-foreground hover:bg-card transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
            {product.ar_enabled && (
              <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full font-body">
                AR Ready
              </span>
            )}
          </div>
          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex gap-2 mt-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors flex-shrink-0 ${i === activeImg ? "border-accent" : "border-transparent hover:border-border"}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Info */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
          <div className="flex items-center gap-2 mb-2">
            {product.brand && (
              <span className="text-xs font-semibold text-accent font-body uppercase tracking-wider">{product.brand}</span>
            )}
            {product.brand && product.category?.name && <span className="text-xs text-muted-foreground">·</span>}
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-body">{product.category?.name}</span>
          </div>
          <h1 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-3 leading-tight">{product.name}</h1>

          {/* Rating */}
          {avgRating > 0 && (
            <div className="flex items-center gap-1.5 mb-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.round(avgRating) ? "fill-accent text-accent" : "text-border"}`} />
                ))}
              </div>
              <span className="text-xs text-muted-foreground font-body">({product.reviews?.length} review{product.reviews?.length !== 1 ? "s" : ""})</span>
            </div>
          )}

          <p className="text-2xl font-bold text-foreground mb-1 font-body">₹{product.price.toLocaleString("en-IN")}</p>
          <p className="text-xs text-muted-foreground font-body mb-5">Inclusive of all taxes</p>

          {/* Stock */}
          {inStock ? (
            <p className="text-sm font-body text-green-700 font-medium mb-5">
              ✓ In Stock{stockQty && stockQty <= 5 ? ` — Only ${stockQty} left` : ""}
            </p>
          ) : (
            <p className="text-sm font-body text-destructive font-medium mb-5">Currently Out of Stock</p>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-medium flex-1 h-12 active:scale-[0.98] transition-transform"
              onClick={handleAddToCart}
              disabled={!inStock}
            >
              <ShoppingBag className="w-4 h-4 mr-2" /> Add to Cart
            </Button>
            {product.ar_enabled && (
              <Button
                size="lg"
                variant="outline"
                className="font-body flex-1 h-12 active:scale-[0.98] transition-transform"
                onClick={() => setShowAR(true)}
              >
                <Smartphone className="w-4 h-4 mr-2" /> View in My Room
              </Button>
            )}
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-3 py-5 border-y border-border mb-6">
            {[
              { icon: Shield, label: "Genuine Product" },
              { icon: Truck, label: "Fast Delivery" },
              { icon: Package, label: "Easy Returns" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center text-center gap-1.5">
                <Icon className="w-4 h-4 text-muted-foreground" />
                <span className="text-[11px] text-muted-foreground font-body">{label}</span>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex gap-1 border-b border-border mb-4">
            {(["description", "specs", "reviews"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2.5 text-sm font-body font-medium capitalize transition-colors border-b-2 -mb-px ${
                  activeTab === tab ? "border-accent text-accent" : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab === "reviews" ? `Reviews (${product.reviews?.length || 0})` : tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === "description" && (
            <p className="text-sm text-muted-foreground font-body leading-relaxed">{product.description || "No description available."}</p>
          )}
          {activeTab === "specs" && (
            <div className="space-y-2">
              {product.width && <div className="flex justify-between text-sm font-body py-2 border-b border-border/50"><span className="text-muted-foreground">Width</span><span className="text-foreground font-medium">{product.width} mm</span></div>}
              {product.height && <div className="flex justify-between text-sm font-body py-2 border-b border-border/50"><span className="text-muted-foreground">Height</span><span className="text-foreground font-medium">{product.height} mm</span></div>}
              {product.depth && <div className="flex justify-between text-sm font-body py-2 border-b border-border/50"><span className="text-muted-foreground">Depth</span><span className="text-foreground font-medium">{product.depth} mm</span></div>}
              {!product.width && !product.height && !product.depth && (
                <p className="text-sm text-muted-foreground font-body">Specifications not available.</p>
              )}
            </div>
          )}
          {activeTab === "reviews" && (
            <div className="space-y-4">
              {product.reviews && product.reviews.length > 0 ? (
                product.reviews.map((review) => (
                  <div key={review.id} className="p-4 bg-secondary rounded-lg">
                    <div className="flex gap-0.5 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`w-3.5 h-3.5 ${i < review.rating ? "fill-accent text-accent" : "text-border"}`} />
                      ))}
                    </div>
                    <p className="text-sm text-foreground font-body">{review.comment}</p>
                    <p className="text-xs text-muted-foreground font-body mt-2">
                      {new Date(review.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground font-body py-4">No reviews yet.</p>
              )}
            </div>
          )}
        </motion.div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      )}

      {/* AR Viewer */}
      {showAR && (
        <Suspense fallback={null}>
          <ARViewer
            productName={product.name}
            modelUrl={modelUrl}
            onClose={() => setShowAR(false)}
            dimensions={{ width: product.width, height: product.height, depth: product.depth }}
          />
        </Suspense>
      )}
    </div>
  );
}
