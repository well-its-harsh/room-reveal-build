import { useAuth } from "@/contexts/AuthContext";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { Star, MessageSquare, Plus, ShoppingBag, Clock, CheckCircle2 } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";
import { 
  Dialog, DialogContent, DialogDescription, 
  DialogHeader, DialogTitle, DialogTrigger 
} from "@/components/ui/dialog";

export default function AccountReviews() {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [reviewModalOpen, setReviewModalOpen] = useState(false);

  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ["customer-reviews"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("reviews")
        .select(`
          *,
          product:products(name, slug)
        `)
        .eq("user_id", user?.id)
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      return data;
    },
    enabled: !!user
  });

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star 
            key={s} 
            className={cn("w-3.5 h-3.5", s <= rating ? "fill-[#C9A84C] text-[#C9A84C]" : "text-[#E8E4DF]")} 
          />
        ))}
      </div>
    );
  };

  if (isLoading) return <div className="space-y-4">{[1, 2, 3].map(i => <div key={i} className="h-32 bg-white animate-pulse rounded-2xl border border-[#E8E4DF]" />)}</div>;

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E8E4DF] pb-8">
        <div>
          <h2 className="font-serif text-3xl font-bold text-[#000000] mb-2">My Reviews</h2>
          <p className="text-[#6B6B6B]">Share your experience with our products and services.</p>
        </div>
        <Button 
          className="bg-[#C9A84C] hover:bg-[#A36D07] text-[#000000] font-bold rounded-full px-8 h-12 shadow-lg shadow-[#C9A84C]/20"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Mocking trigger for now or use DialogTrigger
        >
          <Plus className="w-4 h-4 mr-2" /> Write a Review
        </Button>
      </div>

      {reviews.length === 0 ? (
        <div className="bg-white border-2 border-dashed border-[#E8E4DF] rounded-[3rem] py-32 text-center">
            <div className="w-24 h-24 bg-[#F8F7F4] rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner text-[#E8E4DF]">
               <Star className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-3xl font-bold text-[#000000] mb-3">No reviews yet</h3>
            <p className="text-[#6B6B6B] mb-10 max-w-sm mx-auto font-body text-lg italic">"Your feedback helps us maintain the standard of luxury you expect."</p>
            <Link to="/products" className="inline-flex items-center gap-2 px-10 py-4 bg-[#000000] text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#C9A84C] transition-all">
               <ShoppingBag className="w-4 h-4" /> Start Exploring
            </Link>
        </div>
      ) : (
        <div className="grid gap-6">
          {reviews.map((rev) => (
            <div key={rev.id} className="bg-white rounded-2xl border border-[#E8E4DF] p-6 md:p-8 hover:shadow-lg transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-3">
                     <span className="font-bold text-[#000000] text-lg">
                        {rev.product?.name || "General Store Review"}
                     </span>
                     {rev.status === 'approved' ? (
                       <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-50 text-green-600 text-[9px] font-black uppercase tracking-tighter rounded border border-green-100">
                          <CheckCircle2 className="w-2.5 h-2.5" /> Published
                       </span>
                     ) : (
                       <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-50 text-amber-600 text-[9px] font-black uppercase tracking-tighter rounded border border-amber-100">
                          <Clock className="w-2.5 h-2.5" /> Pending Approval
                       </span>
                     )}
                  </div>
                  {renderStars(rev.rating)}
                </div>
                <span className="text-[12px] text-[#6B6B6B] font-medium italic">
                  Submitted on {format(new Date(rev.created_at), "MMM d, yyyy")}
                </span>
              </div>
              <div className="relative pl-6 border-l-2 border-[#C9A84C]">
                <p className="text-[#000000] text-[15px] leading-relaxed font-body italic">
                  "{rev.content}"
                </p>
              </div>
              {rev.product?.slug && (
                <div className="mt-4 flex justify-end">
                   <Link to={`/product/${rev.product.slug}`} className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all">
                      View Product <ShoppingBag className="w-3 h-3" />
                   </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
