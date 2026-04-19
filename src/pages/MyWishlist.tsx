import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";
import ProductCard from "@/components/ProductCard";

export default function MyWishlist() {
  const { user } = useAuth();
  
  const { data: wishlistProducts = [], isLoading } = useQuery({
    queryKey: ["my-wishlist", user?.id],
    queryFn: async () => {
      if (!user) return [];
      const { data, error } = await supabase
        .from("wishlists")
        .select(`
          product_id,
          products (
            *,
            product_media (*),
            category:categories (*)
          )
        `)
        .eq("user_id", user.id);
        
      if (error) {
        console.error("Wishlist fetch error:", error);
        return [];
      }
      return data.map(item => item.products).filter(Boolean);
    },
    enabled: !!user
  });

  if (isLoading) {
    return (
      <div className="container py-24 mt-[72px]">
        <div className="animate-pulse flex flex-col gap-8">
          <div className="h-10 bg-gray-200 w-1/4 rounded"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map(i => <div key={i} className="h-80 bg-gray-100 rounded-xl"></div>)}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F5F2] pt-8 pb-20 mt-[72px]">
      <div className="container max-w-[1400px]">
        
        <div className="flex items-center gap-3 mb-10">
          <Heart className="w-8 h-8 fill-red-500 text-red-500" />
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1A1A1A]">My Wishlist</h1>
        </div>

        {wishlistProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlistProducts.map((p: any, i: number) => (
              <div key={p.id}>
                <ProductCard product={p} index={i} />
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-[#E8E4DF] max-w-2xl mx-auto mt-20">
            <Heart className="w-16 h-16 text-[#E8E4DF] mx-auto mb-6" />
            <h2 className="text-2xl font-serif font-bold text-[#1A1A1A] mb-4">Your Wishlist is Empty</h2>
            <p className="text-[#6B6B6B] mb-8 leading-relaxed">
              Discover and save your favorite architectural masterpieces to access them later.
            </p>
            <Link 
              to="/categories" 
              className="inline-flex items-center justify-center h-12 px-8 bg-[#1A1A1A] text-white font-bold tracking-widest text-[13px] uppercase hover:bg-[#333] transition-colors rounded-sm"
            >
              Explore Collections
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
