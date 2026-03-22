import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Star, Eye } from "lucide-react";
import { ProductWithDetails } from "@/types/database";
import { useWishlist } from "@/contexts/WishlistContext";

function getProductImage(product: ProductWithDetails): string {
  const imageMedia = product.product_media?.find((m) => m.media_type === "image");
  return imageMedia?.media_url || "/placeholder.svg";
}

function isInStock(product: ProductWithDetails): boolean {
  if (!product.inventory || product.inventory.length === 0) return true;
  return product.inventory[0].quantity > 0;
}

export default function ProductCard({ product, index = 0 }: { product: ProductWithDetails; index?: number }) {
  const image = getProductImage(product);
  const inStock = isInStock(product);
  const { toggle, isWishlisted } = useWishlist();
  const wishlisted = isWishlisted(product.id);
  const rating = product.rating_avg ?? (product.reviews?.length
    ? product.reviews.reduce((s, r) => s + r.rating, 0) / product.reviews.length
    : null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="relative"
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
        {product.ar_enabled && (
          <span className="flex items-center gap-1 text-[10px] font-body font-medium bg-accent text-accent-foreground px-2 py-0.5 rounded-full">
            <Eye className="w-3 h-3" /> AR
          </span>
        )}
        {!inStock && (
          <span className="text-[10px] font-body font-medium bg-destructive text-destructive-foreground px-2 py-0.5 rounded-full">
            Sold Out
          </span>
        )}
      </div>

      {/* Wishlist button */}
      <button
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggle(product.id); }}
        className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-card/80 backdrop-blur flex items-center justify-center hover:bg-card transition-colors"
        title={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
      >
        <Heart className={`w-4 h-4 ${wishlisted ? "fill-accent text-accent" : "text-muted-foreground"}`} />
      </button>

      <Link
        to={`/product/${product.id}`}
        className="group block bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 hover:border-accent/20"
      >
        <div className="aspect-square overflow-hidden bg-secondary">
          <img
            src={image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-4">
          {product.brand && (
            <p className="text-[10px] text-accent font-body font-semibold uppercase tracking-wider mb-0.5">
              {product.brand}
            </p>
          )}
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
            {product.category?.name || product.categories?.name || "Product"}
          </p>
          <h3 className="font-heading text-base font-medium text-foreground mb-1 line-clamp-1">{product.name}</h3>
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-accent">₹{product.price.toLocaleString("en-IN")}</p>
            {rating && (
              <span className="flex items-center gap-0.5 text-xs text-muted-foreground">
                <Star className="w-3 h-3 fill-accent text-accent" />
                {rating.toFixed(1)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
