import { useAuth } from "@/contexts/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { MessageSquare, Clock, CheckCircle2, Inbox, ArrowRight, ShoppingBag } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export default function AccountEnquiries() {
  const { user } = useAuth();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const { data: enquiries = [], isLoading } = useQuery({
    queryKey: ["customer-enquiries"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("enquiries")
        .select(`
          *,
          product:products(name, main_image)
        `)
        .eq("user_id", user?.id)
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      return data;
    },
    enabled: !!user
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'resolved': return <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider rounded-full border border-green-200">Resolved</span>;
      case 'in-progress': return <span className="px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wider rounded-full border border-blue-200">Seen by store</span>;
      default: return <span className="px-3 py-1 bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-wider rounded-full border border-amber-200">Pending</span>;
    }
  };

  if (isLoading) return <div className="space-y-4">{[1, 2, 3].map(i => <div key={i} className="h-40 bg-white animate-pulse rounded-2xl border border-[#E8E4DF]" />)}</div>;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-3xl font-bold text-[#000000] mb-2">My Enquiries</h2>
        <p className="text-[#6B6B6B]">Track your product and general enquiries.</p>
      </div>

      {enquiries.length === 0 ? (
        <div className="bg-white border-2 border-dashed border-[#E8E4DF] rounded-3xl py-24 text-center">
          <div className="w-16 h-16 bg-[#F8F7F4] rounded-full flex items-center justify-center mx-auto mb-6 text-[#E8E4DF]">
            <Inbox className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-[#000000] mb-2">No enquiries yet</h3>
          <p className="text-[#6B6B6B] max-w-sm mx-auto mb-8">Browse our luxury collections and reach out to our experts for personalized assistance.</p>
          <Link to="/products" className="inline-flex items-center gap-2 px-8 py-3 bg-[#000000] text-white rounded-full font-bold text-sm hover:bg-[#C9A84C] transition-all">
            <ShoppingBag className="w-4 h-4" /> Browse Collections
          </Link>
        </div>
      ) : (
        <div className="grid gap-6">
          {enquiries.map((enq) => (
            <div key={enq.id} className="bg-white rounded-2xl border border-[#E8E4DF] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#F8F7F4] rounded-full flex items-center justify-center text-[#C9A84C]">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#000000] text-lg">
                        {enq.product?.name || "General Enquiry"}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-[#6B6B6B] mt-0.5">
                        <Clock className="w-3 h-3 text-[#C9A84C]" />
                        {format(new Date(enq.created_at), "MMMM d, yyyy")}
                        {enq.channel && <span className="ml-2 px-2 py-0.5 bg-[#F8F7F4] rounded text-[9px] uppercase font-bold tracking-tighter border border-[#E8E4DF]">{enq.channel}</span>}
                      </div>
                    </div>
                  </div>
                  {getStatusBadge(enq.status)}
                </div>

                <div className="relative">
                  <p className={cn(
                    "text-[#000000] text-[15px] leading-relaxed font-body whitespace-pre-wrap",
                    expandedId !== enq.id && "line-clamp-2"
                  )}>
                    {enq.message}
                  </p>
                  {enq.message.length > 150 && (
                    <button 
                      onClick={() => setExpandedId(expandedId === enq.id ? null : enq.id)}
                      className="text-[#C9A84C] text-xs font-bold mt-2 hover:underline focus:outline-none"
                    >
                      {expandedId === enq.id ? "Show less" : "Read full message"}
                    </button>
                  )}
                </div>

                {enq.reply_message ? (
                  <div className="mt-8 pt-6 border-t border-[#E8E4DF]">
                    <div className="bg-[#FAF9F6] rounded-xl border border-[#C9A84C]/20 p-5 md:p-6">
                       <div className="flex items-center justify-between mb-3 border-b border-[#C9A84C]/10 pb-3">
                         <span className="text-[10px] font-bold text-[#C9A84C] uppercase tracking-widest flex items-center gap-2">
                           <CheckCircle2 className="w-3 h-3" /> Representative Reply
                         </span>
                         <span className="text-[10px] text-[#6B6B6B] font-medium italic">
                           Replied on {format(new Date(enq.replied_at), "MMM d, yyyy")}
                         </span>
                       </div>
                       <blockquote className="text-[#000000] text-[14px] leading-relaxed italic border-l-2 border-[#C9A84C] pl-4 py-1">
                         "{enq.reply_message}"
                       </blockquote>
                    </div>
                  </div>
                ) : (
                  <div className="mt-6 pt-6 border-t border-[#E8E4DF] flex items-center gap-2 text-[12px] text-[#6B6B6B] italic font-medium">
                     <Clock className="w-3.5 h-3.5 animate-pulse text-[#C9A84C]" />
                     Awaiting reply from store experts...
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
