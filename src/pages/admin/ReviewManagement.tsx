import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { Star, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

import { useMarkPageAsSeen } from "@/hooks/useMarkPageAsSeen";

export default function ReviewManagement() {
  useMarkPageAsSeen('reviews');
  const queryClient = useQueryClient();

  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ["admin-reviews"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("reviews")
        .select("*, product:products(name), profile:profiles(full_name)")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("reviews").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-reviews"] });
      toast.success("Review removed");
    },
    onError: (err: any) => toast.error(err.message),
  });

  return (
    <div>
      <h2 className="font-heading text-xl font-semibold text-foreground mb-6">Reviews</h2>

      {isLoading ? (
        <p className="text-muted-foreground font-body">Loading...</p>
      ) : reviews.length === 0 ? (
        <p className="text-muted-foreground font-body text-center py-8">No reviews yet.</p>
      ) : (
        <div className="space-y-3">
          {reviews.map((review: any) => (
            <div key={review.id} className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex gap-0.5 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`w-3 h-3 ${i < review.rating ? "fill-accent text-accent" : "text-muted"}`} />
                    ))}
                  </div>
                  <p className="text-sm text-foreground font-body mb-1">{review.comment || "No comment"}</p>
                  <p className="text-xs text-muted-foreground font-body">
                    {review.profile?.full_name || "Anonymous"} • {review.product?.name} • {new Date(review.created_at).toLocaleDateString()}
                  </p>
                </div>
                <button
                  onClick={() => {
                    if (confirm("Remove this review?")) deleteMutation.mutate(review.id);
                  }}
                  className="p-2 text-muted-foreground hover:text-destructive"
                  title="Remove review"
                >
                  <EyeOff className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
