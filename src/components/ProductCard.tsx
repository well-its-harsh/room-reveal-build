import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="relative"
    >
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
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
            {product.category?.name || "Product"}
          </p>
          <h3 className="font-heading text-base font-medium text-foreground mb-1 line-clamp-1">{product.name}</h3>
          <p className="text-sm font-semibold text-accent">₹{product.price.toLocaleString("en-IN")}</p>
          {!inStock && (
            <span className="inline-block mt-2 text-xs text-destructive font-medium">Out of Stock</span>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
