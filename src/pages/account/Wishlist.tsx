import { Heart, ArrowRight, ShoppingBag, Inbox } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useSupabaseWishlist } from "@/hooks/useWishlist";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { ProductWithDetails } from "@/types/database";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

export default function WishlistPage() {
  const { user } = useAuth();
  const supabaseWishlist = useSupabaseWishlist();
  const wishlistIds = supabaseWishlist.items;

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["wishlist-products", wishlistIds],
    queryFn: async () => {
      if (wishlistIds.length === 0) return [];

      const { data, error } = await supabase
        .from("products")
        .select("*, categories(name, slug), product_media(id, media_url, media_type), inventory(id, quantity)")
        .in("id", wishlistIds);

      if (error) throw error;
      return (data || []).map((p: any) => ({ ...p, category: p.categories })) as ProductWithDetails[];
    },
    enabled: wishlistIds.length > 0,
  });

  if (isLoading) return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1,2,3].map(i => <div key={i} className="aspect-[4/5] bg-white rounded-2xl animate-pulse border border-[#E8E4DF]" />)}
    </div>
  );

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E8E4DF] pb-8">
        <div>
          <h2 className="font-serif text-3xl font-bold text-[#000000] mb-2">My Wishlist</h2>
          <p className="text-[#6B6B6B]">Jewels for your space, curated by you.</p>
        </div>
        <div className="px-5 py-2 bg-[#000000] text-[#C9A84C] text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg">
          {products.length} Items Saved
        </div>
      </div>

      {products.length === 0 ? (
        <div className="bg-white border-2 border-dashed border-[#E8E4DF] rounded-[3rem] py-32 text-center">
            <div className="w-24 h-24 bg-[#F8F7F4] rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner text-[#E8E4DF]">
               <Heart className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-3xl font-bold text-[#000000] mb-3">Your wishlist is empty</h3>
            <p className="text-[#6B6B6B] mb-10 max-w-sm mx-auto font-body text-lg italic">"Luxury begins with a single selection. Heart a product to save it here."</p>
            <Button asChild className="bg-[#000000] hover:bg-[#C9A84C] text-white rounded-full px-12 h-14 font-bold uppercase tracking-widest text-[11px] shadow-xl shadow-blue-900/10 transition-all active:scale-95">
               <Link to="/products">Browse Collections <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-10 md:gap-y-12">
          {products.map((p, i) => (
            <div key={p.id} className="relative group perspective-1000">
               <ProductCard product={p} index={i} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
