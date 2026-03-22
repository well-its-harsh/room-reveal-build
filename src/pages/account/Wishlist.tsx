import { useState } from "react";
import { Heart, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useWishlist } from "@/contexts/WishlistContext";
import { useAuth } from "@/contexts/AuthContext";
import { useSupabaseWishlist } from "@/hooks/useWishlist";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { ProductWithDetails } from "@/types/database";
import { demoProducts } from "@/data/demoData";
import ProductCard from "@/components/ProductCard";

export default function WishlistPage() {
  const { user } = useAuth();
  const localWishlist = useWishlist();
  const supabaseWishlist = useSupabaseWishlist();

  // Use Supabase wishlist if logged in, otherwise local
  const wishlistIds = user ? supabaseWishlist.items : localWishlist.items;

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["wishlist-products", wishlistIds],
    queryFn: async () => {
      if (wishlistIds.length === 0) return [];

      // Try Supabase first
      const { data, error } = await supabase
        .from("products")
        .select("*, categories(name, slug), product_media(id, media_url, media_type), inventory(id, quantity)")
        .in("id", wishlistIds);

      if (error) throw error;
      if (data && data.length > 0) {
        return data.map((p: any) => ({ ...p, category: p.categories })) as ProductWithDetails[];
      }

      // Fallback to demo products
      return demoProducts.filter(p => wishlistIds.includes(p.id));
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
      <h2 className="font-heading text-xl font-semibold text-foreground mb-6">
        Wishlist ({wishlistIds.length} items)
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>
    </div>
  );
}
