import { useParams, Link } from "react-router-dom";
import { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingBag, Smartphone, Check, Star } from "lucide-react";
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

  const { data: related = [] } = useRelatedProducts(
    product?.category_id || "",
    product?.id || ""
  );

  if (isLoading) {
    return (
      <div className="container py-6 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <Skeleton className="aspect-square rounded-lg" />
          <div className="space-y-4">
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-8 w-2/3" />
            <Skeleton className="h-6 w-1/4" />
            <Skeleton className="h-24 w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <p className="text-muted-foreground font-body">Product not found.</p>
        <Button asChild variant="outline" className="mt-4 font-body">
          <Link to="/products">Back to Products</Link>
        </Button>
      </div>
    );
  }

  const productImage = product.product_media?.find((m) => m.media_type === "image")?.media_url || "/placeholder.svg";
  const modelUrl = product.product_media?.find((m) => m.media_type === "3d_model")?.media_url;
  const inStock = !product.inventory?.length || product.inventory[0].quantity > 0;
  const avgRating = product.reviews?.length
    ? product.reviews.reduce((s, r) => s + r.rating, 0) / product.reviews.length
    : 0;

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: productImage,
      category: product.category?.name || "",
    });
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="container py-6 md:py-12">
      <Link to="/products" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 font-body">
        <ArrowLeft className="w-4 h-4" /> Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Image */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="aspect-square rounded-lg overflow-hidden bg-secondary">
          <img src={productImage} alt={product.name} className="w-full h-full object-cover" />
        </motion.div>

        {/* Info */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1 font-body">{product.category?.name}</p>
          <h1 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-2">{product.name}</h1>
          <p className="text-2xl font-bold text-accent mb-2 font-body">₹{product.price.toLocaleString("en-IN")}</p>

          {/* Rating */}
          {avgRating > 0 && (
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < Math.round(avgRating) ? "fill-accent text-accent" : "text-muted"}`} />
              ))}
              <span className="text-xs text-muted-foreground font-body ml-1">({product.reviews?.length})</span>
            </div>
          )}

          {!inStock && (
            <span className="inline-block mb-4 text-sm text-destructive font-medium font-body">Currently Out of Stock</span>
          )}

          <p className="text-muted-foreground font-body leading-relaxed mb-6">{product.description}</p>

          {/* Dimensions */}
          {(product.width || product.height || product.depth) && (
            <div className="mb-6">
              <h3 className="font-heading text-sm font-semibold text-foreground mb-2 uppercase tracking-wider">Dimensions</h3>
              <div className="flex gap-4 text-sm text-muted-foreground font-body">
                {product.width && <span>W: {product.width}mm</span>}
                {product.height && <span>H: {product.height}mm</span>}
                {product.depth && <span>D: {product.depth}mm</span>}
              </div>
            </div>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-medium flex-1"
              onClick={handleAddToCart}
              disabled={!inStock}
            >
              <ShoppingBag className="w-4 h-4 mr-2" /> Add to Cart
            </Button>
            {product.ar_enabled && (
              <Button
                size="lg"
                variant="outline"
                className="font-body flex-1"
                onClick={() => setShowAR(true)}
              >
                <Smartphone className="w-4 h-4 mr-2" /> View in My Room
              </Button>
            )}
          </div>

          <p className="text-xs text-muted-foreground mt-3 font-body">
            * "View in My Room" provides a visual preview for size & placement estimation.
          </p>
        </motion.div>
      </div>

      {/* Reviews */}
      {product.reviews && product.reviews.length > 0 && (
        <div className="mt-16">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">Customer Reviews</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {product.reviews.map((review) => (
              <div key={review.id} className="p-4 bg-secondary rounded-lg">
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-3 h-3 ${i < review.rating ? "fill-accent text-accent" : "text-muted"}`} />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground font-body">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Related Products */}
      {related.length > 0 && (
        <div className="mt-16 md:mt-24">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
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
