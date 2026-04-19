import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { Review } from "@/types/database";
import { toast } from "sonner";

export function useReviews(productId: string) {
  const queryClient = useQueryClient();

  // Fetch Reviews with Profiler basic info
  const reviewsQuery = useQuery({
    queryKey: ["reviews", productId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("reviews")
        .select(`
          *,
          profile:profiles(full_name, avatar_url)
        `)
        .eq("product_id", productId)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
    enabled: !!productId,
  });

  // Submit Review
  const addReview = useMutation({
    mutationFn: async ({ 
      userId, 
      rating, 
      comment 
    }: { 
      userId: string; 
      rating: number; 
      comment: string 
    }) => {
      // 1. Insert review
      const { error: reviewError } = await supabase
        .from("reviews")
        .insert({ user_id: userId, product_id: productId, rating, comment });
      
      if (reviewError) throw reviewError;

      // 2. Fetch all ratings to update product averages
      const { data: allRatings } = await supabase
        .from("reviews")
        .select("rating")
        .eq("product_id", productId);

      if (allRatings) {
        const count = allRatings.length;
        const avg = allRatings.reduce((s, r) => s + r.rating, 0) / count;

        // 3. Update Product Stats
        const { error: productError } = await supabase
          .from("products")
          .update({ rating_avg: avg, rating_count: count })
          .eq("id", productId);
        
        if (productError) throw productError;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviews", productId] });
      queryClient.invalidateQueries({ queryKey: ["product", productId] });
      toast.success("Review submitted!");
    },
    onError: (err: any) => toast.error(err.message),
  });

  // Eligibility check - Simplified for Showroom
  const checkEligibility = useQuery({
    queryKey: ["review-eligibility", productId],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      return !!user;
    },
    enabled: !!productId,
  });

  return {
    reviews: reviewsQuery.data || [],
    isLoading: reviewsQuery.isLoading,
    addReview,
    canReview: checkEligibility.data || false
  };
}
