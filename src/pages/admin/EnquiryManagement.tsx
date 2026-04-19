import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { 
  MessageSquare, Search, Phone, 
  CheckCircle2, Clock, XCircle,
  User, Mail, ArrowRight, Share2, Filter
} from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import { useMarkPageAsSeen } from "@/hooks/useMarkPageAsSeen";

export default function EnquiryManagement() {
  useMarkPageAsSeen('enquiries');
  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedEnquiry, setSelectedEnquiry] = useState<any>(null);
  const [replyMessage, setReplyMessage] = useState("");

  const { data: enquiries = [], isLoading } = useQuery({
    queryKey: ["admin-enquiries"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("enquiries")
        .select(`
          *,
          product:products(name)
        `)
        .order("created_at", { ascending: false });
      
      if (error && error.code !== "42P01") throw error;
      return data || [];
    },
  });

  const updateStatus = useMutation({
    mutationFn: async ({ enq, status, reply }: { enq: any; status: string; reply?: string }) => {
      const updateData: any = { status };
      if (reply) {
        updateData.reply_message = reply;
        updateData.replied_at = new Date().toISOString();
        updateData.status = 'resolved';
      }
      
      const { error } = await supabase
        .from("enquiries")
        .update(updateData)
        .eq("id", enq.id);
      
      if (error) throw error;

      // If a reply was sent and the customer is a registered user, notify them
      if (reply && enq.user_id) {
        await supabase.from('notifications').insert({
          user_id: enq.user_id,
          title: 'Reply to Your Enquiry',
          message: `The store has replied to your enquiry${enq.product_name ? ' about ' + enq.product_name : ''}. Tap to view the reply.`,
          type: 'enquiry',
          link: '/account/enquiries'
        });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-enquiries"] });
      setSelectedEnquiry(null);
      setReplyMessage("");
      toast.success("Enquiry updated and reply sent");
    },
  });

  const filtered = enquiries.filter((e: any) => {
    const matchesSearch = 
      e.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.phone?.includes(searchTerm) ||
      e.message?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || e.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "new": return "bg-amber-100 text-amber-700 border-amber-200";
      case "in-progress": return "bg-blue-100 text-blue-700 border-blue-200";
      case "resolved": return "bg-green-100 text-green-700 border-green-200";
      case "spam": return "bg-red-100 text-red-700 border-red-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-serif text-3xl font-bold text-[#1A1A1A]">Leads & Enquiries</h2>
          <p className="text-sm text-[#6B6B6B]">Respond to product and showroom enquiries from varied channels.</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B6B6B]" />
          <Input 
            placeholder="Search by name, phone or message..." 
            className="pl-10 h-12 border-[#E8E4DF] focus:border-[#C8860A] rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 bg-[#F7F5F2] p-1 rounded-lg border border-[#E8E4DF]">
          {['all', 'new', 'in-progress', 'resolved'].map(s => (
            <button
               key={s}
               onClick={() => setStatusFilter(s)}
               className={cn(
                 "px-4 py-2 rounded-md text-[11px] font-bold uppercase tracking-wider transition-all",
                 statusFilter === s ? "bg-[#1A1A1A] text-white shadow-sm" : "text-[#6B6B6B] hover:text-[#1A1A1A]"
               )}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Grid view of enquiries */}
      <div className="grid gap-4">
        {isLoading ? (
          [1,2,3].map(i => <div key={i} className="h-40 bg-gray-50 animate-pulse rounded-xl" />)
        ) : filtered.length === 0 ? (
          <div className="bg-white border border-[#E8E4DF] border-dashed rounded-2xl py-24 text-center">
            <MessageSquare className="w-12 h-12 text-[#E8E4DF] mx-auto mb-4" />
            <p className="text-[#6B6B6B]">No enquiries found matching your filters.</p>
          </div>
        ) : filtered.map((enq: any) => (
          <div 
            key={enq.id} 
            className={cn(
              "bg-white border p-6 rounded-xl transition-all relative overflow-hidden group",
              enq.status === 'new' ? "border-[#C8860A] shadow-md ring-1 ring-[#C8860A]/20" : "border-[#E8E4DF] hover:border-[#C8860A]/50"
            )}
          >
            {enq.status === 'new' && (
              <div className="absolute top-0 right-0 px-3 py-1 bg-[#C8860A] text-[#0F172A] text-[9px] font-black uppercase tracking-tighter rounded-bl-lg">
                New Action Required
              </div>
            )}
            
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Customer Info */}
              <div className="lg:w-1/4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#F7F5F2] flex items-center justify-center border border-[#E8E4DF] text-[#1A1A1A] font-serif font-bold">
                    {enq.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#1A1A1A]">{enq.name}</h4>
                    <p className="text-[12px] text-[#6B6B6B]">{format(new Date(enq.created_at), "MMM d · h:mm a")}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <a href={`tel:${enq.phone}`} className="flex items-center gap-2 text-[13px] text-[#1A1A1A] hover:text-[#C8860A] transition-colors">
                    <Phone className="w-3.5 h-3.5" /> {enq.phone}
                  </a>
                  {enq.email && (
                    <div className="flex items-center gap-2 text-[13px] text-[#6B6B6B]">
                      <Mail className="w-3.5 h-3.5" /> {enq.email}
                    </div>
                  )}
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#F7F5F2] rounded text-[10px] font-bold text-[#6B6B6B] uppercase tracking-wider border border-[#E8E4DF]">
                     Channel: {enq.channel || 'general'}
                  </div>
                </div>
              </div>

              {/* Message content */}
              <div className="lg:w-2/4">
                <div className="flex items-center justify-between mb-2">
                   <span className={cn("px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest border", getStatusStyle(enq.status))}>
                      {enq.status}
                   </span>
                   {enq.product?.name && (
                     <span className="text-[11px] font-bold text-[#C8860A] uppercase tracking-wider">
                        Re: {enq.product.name}
                     </span>
                   )}
                </div>
                <div className="bg-[#F7F5F2]/50 p-4 border border-[#E8E4DF] rounded-lg">
                   <p className="text-[#1A1A1A] text-[15px] leading-relaxed font-body italic">
                      "{enq.message || "No message provided."}"
                   </p>
                </div>
                
                {enq.reply_message && (
                  <div className="mt-4 flex gap-3">
                    <div className="w-1 h-auto bg-[#C8860A] rounded-full" />
                    <div className="flex-1">
                      <p className="text-[11px] font-bold uppercase text-[#6B6B6B] mb-1">Your Reply ({format(new Date(enq.replied_at), "MMM d")})</p>
                      <p className="text-[14px] text-[#6B6B6B] leading-relaxed">{enq.reply_message}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="lg:w-1/4 flex flex-col justify-between border-l border-[#E8E4DF] pl-8">
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-[#1A1A1A] hover:bg-[#C8860A] text-white text-xs font-bold gap-2"
                    onClick={() => { setSelectedEnquiry(enq); setReplyMessage(enq.reply_message || ""); }}
                  >
                    <Share2 className="w-3.5 h-3.5" /> Reply / Resolve
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-[#E8E4DF] text-xs font-bold gap-2"
                    asChild
                  >
                    <a href={`https://wa.me/91${enq.phone.replace(/\D/g, '')}`} target="_blank" rel="noreferrer">
                       <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Customer
                    </a>
                  </Button>
                </div>
                <div className="flex items-center gap-2 mt-4 lg:mt-0">
                  {enq.status !== 'resolved' && (
                    <Button 
                      variant="ghost" 
                      className="text-[#6B6B6B] hover:text-green-600 text-[11px] p-0 h-auto"
                      onClick={() => updateStatus.mutate({ enq, status: 'resolved' })}
                    >
                      Mark Resolved
                    </Button>
                  )}
                  {enq.status === 'new' && (
                    <Button 
                      variant="ghost" 
                      className="text-[#6B6B6B] hover:text-blue-600 text-[11px] p-0 h-auto"
                      onClick={() => updateStatus.mutate({ enq, status: 'in-progress' })}
                    >
                      Mark in Progress
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Reply Modal */}
      {selectedEnquiry && (
        <div className="fixed inset-0 z-[600] flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white w-full max-w-2xl p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-serif font-bold text-[#1A1A1A]">Reply to {selectedEnquiry.name}</h3>
              <Button variant="ghost" size="icon" onClick={() => setSelectedEnquiry(null)}><XCircle className="w-5 h-5" /></Button>
            </div>
            
            <div className="mb-6 p-4 bg-[#F7F5F2] rounded-lg border border-[#E8E4DF]">
               <p className="text-[12px] font-bold text-[#6B6B6B] uppercase mb-1">Customer Message</p>
               <p className="text-[14px] text-[#1A1A1A]">{selectedEnquiry.message}</p>
            </div>

            <label className="block text-[13px] font-bold text-[#6B6B6B] uppercase mb-2">Your Draft Response</label>
            <textarea
              className="w-full p-6 border border-[#E8E4DF] outline-none focus:border-[#C8860A] min-h-[200px] mb-8 font-body text-[15px]"
              placeholder="Type your reply here..."
              value={replyMessage}
              onChange={(e) => setReplyMessage(e.target.value)}
            />
            
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1 h-12" onClick={() => setSelectedEnquiry(null)}>Discard Draft</Button>
              <Button 
                className="flex-1 h-12 bg-[#C8860A] hover:bg-[#A67008] text-[#0F172A] font-bold uppercase tracking-wider" 
                disabled={!replyMessage || updateStatus.isPending}
                onClick={() => updateStatus.mutate({ enq: selectedEnquiry, status: 'resolved', reply: replyMessage })}
              >
                Send Reply & Resolve
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
