import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";

export function useSupabaseWishlist() {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { data: wishlistItems = [] } = useQuery({
    queryKey: ["wishlist", user?.id],
    queryFn: async () => {
      if (!user) return [];
      const { data, error } = await supabase
        .from("wishlists")
        .select("product_id")
        .eq("user_id", user.id);
      if (error) throw error;
      return data.map((w: any) => w.product_id) as string[];
    },
    enabled: !!user,
  });

  const toggle = useMutation({
    mutationFn: async (productId: string) => {
      if (!user) throw new Error("Not authenticated");
      const isWished = wishlistItems.includes(productId);
      if (isWished) {
        await supabase.from("wishlists").delete().eq("user_id", user.id).eq("product_id", productId);
      } else {
        await supabase.from("wishlists").insert({ user_id: user.id, product_id: productId });
      }
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["wishlist", user?.id] }),
  });

  return {
    items: wishlistItems,
    toggle: toggle.mutate,
    isWishlisted: (id: string) => wishlistItems.includes(id),
  };
}
