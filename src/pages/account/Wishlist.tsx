import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useWishlist } from "@/contexts/WishlistContext";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { ProductWithDetails } from "@/types/database";
import ProductCard from "@/components/ProductCard";

export default function WishlistPage() {
  const { items: wishlistIds } = useWishlist();

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["wishlist-products", wishlistIds],
    queryFn: async () => {
      if (wishlistIds.length === 0) return [];
      const { data, error } = await supabase
        .from("products")
        .select("*, category:categories(*), product_media(*), inventory(*)")
        .in("id", wishlistIds);
      if (error) throw error;
      return data as ProductWithDetails[];
    },
    enabled: wishlistIds.length > 0,
  });

  if (isLoading) return <p className="text-muted-foreground font-body">Loading...</p>;

  if (wishlistIds.length === 0) {
    return (
      <div className="text-center py-12">
        <Heart className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <h2 className="font-heading text-xl font-semibold text-foreground mb-2">No Saved Items</h2>
        <p className="text-muted-foreground font-body mb-4">Products you save will appear here.</p>
        <Link to="/products" className="text-sm text-accent font-body hover:underline">Browse products →</Link>
      </div>
    );
  }

  return (
    <div>
      <h2 className="font-heading text-xl font-semibold text-foreground mb-6">Wishlist</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>
    </div>
  );
}
