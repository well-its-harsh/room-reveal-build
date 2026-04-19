import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { MessageCircle, Phone, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { createNotification, OWNER_USER_ID } from "@/utils/notifications";
import { useAuth } from "@/contexts/AuthContext";
import { track } from "@/lib/analytics";

interface EnquiryFormProps {
  productId?: string;
  productName?: string;
  categoryId?: string;
  categoryName?: string;
  channel?: 'product-enquiry' | 'contact-page' | 'general';
  onSuccess?: () => void;
  showSuccessMessage?: boolean;
}

export default function EnquiryForm({
  productId,
  productName,
  categoryId,
  categoryName,
  channel = 'general',
  onSuccess,
  showSuccessMessage = true
}: EnquiryFormProps) {
  const { user } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setError("Please fill in your name and phone number.");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const enquiryMessage = productName 
        ? `[Product: ${productName}] ${form.message.trim() || ""}` 
        : categoryName 
          ? `[Category: ${categoryName}] ${form.message.trim() || ""}`
          : form.message.trim() || null;

      const { error: dbErr } = await supabase.from("enquiries").insert({
        name: form.name.trim(),
        email: form.email.trim() || null,
        phone: form.phone.trim(),
        message: enquiryMessage,
        product_id: productId || null,
        channel,
        status: "new"
      });

      if (dbErr) throw dbErr;

      // Create owner notification
      await createNotification({
        user_id: OWNER_USER_ID,
        title: 'New Enquiry',
        message: `${form.name} submitted an enquiry for ${productName || categoryName || 'general'}`,
        type: 'enquiry',
        link: '/owner/enquiries'
      });
      
      track('enquiry_submitted', { 
        product_id: productId || null, 
        category: categoryName || null,
        channel
      });

      toast.success("Your enquiry has been submitted. We'll contact you shortly.");
      setSubmitted(true);
      if (onSuccess) onSuccess();
    } catch (err: any) {
      console.error("Enquiry submission error:", err);
      toast.error(err.message || "Failed to submit enquiry. Please try again.");
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted && showSuccessMessage) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-[17px] font-semibold text-[#1A1A1A] mb-2">Enquiry Sent!</h3>
        <p className="text-[14px] text-[#6B6B6B] leading-relaxed mb-6">
          We'll contact you within 2 hours. You can also WhatsApp us directly for faster response.
        </p>
        <div className="flex flex-col gap-3">
          <a
            href={`https://wa.me/919876543210?text=${encodeURIComponent(
              `Hi! I enquired about ${productName || "your products"}. My name is ${form.name}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white text-[14px] font-medium hover:opacity-90 transition-opacity"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {productName && (
        <div className="bg-[#F7F5F2] border border-[#E8E4DF] px-3 py-2">
          <p className="text-[11px] uppercase tracking-wide text-[#6B6B6B] font-semibold mb-0.5">Product Reference</p>
          <p className="text-[13px] text-[#1A1A1A] font-medium line-clamp-1">{productName}</p>
        </div>
      )}

      <div>
        <label className="block text-[13px] font-medium text-[#1A1A1A] mb-1.5">
          Your Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          placeholder="Enter your full name"
          required
          className="w-full px-3 py-2.5 text-[14px] border border-[#E8E4DF] outline-none focus:border-[#C8860A] transition-colors placeholder:text-[#6B6B6B]/50"
        />
      </div>

      <div>
        <label className="block text-[13px] font-medium text-[#1A1A1A] mb-1.5">
          Email Address
        </label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          placeholder="Enter your email"
          className="w-full px-3 py-2.5 text-[14px] border border-[#E8E4DF] outline-none focus:border-[#C8860A] transition-colors placeholder:text-[#6B6B6B]/50"
        />
      </div>

      <div>
        <label className="block text-[13px] font-medium text-[#1A1A1A] mb-1.5">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center border border-[#E8E4DF] focus-within:border-[#C8860A] transition-colors">
          <div className="flex items-center gap-1.5 px-3 border-r border-[#E8E4DF] py-2.5 flex-shrink-0">
            <Phone className="w-3.5 h-3.5 text-[#6B6B6B]" />
            <span className="text-[13px] text-[#6B6B6B]">+91</span>
          </div>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            placeholder="98765 43210"
            maxLength={10}
            className="flex-1 px-3 py-2.5 text-[14px] outline-none placeholder:text-[#6B6B6B]/50"
          />
        </div>
      </div>

      <div>
        <label className="block text-[13px] font-medium text-[#1A1A1A] mb-1.5">
          Message <span className="text-[#6B6B6B] font-normal">(optional)</span>
        </label>
        <textarea
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          placeholder="Tell us about your project, preferred size, quantity..."
          rows={3}
          className="w-full px-3 py-2.5 text-[14px] border border-[#E8E4DF] outline-none focus:border-[#C8860A] transition-colors resize-none placeholder:text-[#6B6B6B]/50"
        />
      </div>

      {error && (
        <p className="text-red-500 text-[13px] bg-red-50 px-3 py-2 border border-red-100 italic">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 h-11 bg-[#1A1A1A] text-white text-[14px] font-medium hover:bg-[#C8860A] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" /> Send Enquiry
          </>
        )}
      </button>
    </form>
  );
}
