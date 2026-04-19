import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, X } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useQuery } from "@tanstack/react-query";

// FIX 6 — Testimonials with submission modal, reads approved reviews from DB

const FALLBACK_TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Homeowner, Mumbai",
    text: "Excellent quality tiles and the staff helped us choose the perfect combination for our new home. The showroom experience was truly unlike anything else.",
    rating: 5,
    product: "Marble-Look Floor Tiles",
  },
  {
    name: "Rahul Mehta",
    role: "Interior Designer, Pune",
    text: "Best tile and hardware shop in the region. Huge range of brands, very knowledgeable staff, and they understand designer needs perfectly.",
    rating: 5,
    product: "Bathroom Fittings Collection",
  },
  {
    name: "Anita Kulkarni",
    role: "Home Renovator",
    text: "The anti-skid outdoor tiles we installed look stunning. Premium quality at a fair price. The AI makeover feature helped us visualize everything before buying.",
    rating: 5,
    product: "Outdoor Anti-Skid Tiles",
  },
];

function StarSelector({ rating, onChange }: { rating: number; onChange: (r: number) => void }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <button
          key={s}
          type="button"
          onClick={() => onChange(s)}
          onMouseEnter={() => setHovered(s)}
          onMouseLeave={() => setHovered(0)}
          className="transition-transform hover:scale-110"
        >
          <Star
            className={`w-8 h-8 transition-colors ${
              s <= (hovered || rating) ? "fill-[#C8860A] text-[#C8860A]" : "text-[#E8E4DF]"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Fetch approved store-level reviews (product_id IS NULL)
  const { data: dbReviews = [] } = useQuery({
    queryKey: ["store-reviews"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .is("product_id", null)
        .eq("is_approved", true)
        .order("created_at", { ascending: false })
        .limit(9);
      if (error) return [];
      return data || [];
    },
  });

  // Use DB reviews if available, otherwise show fallback
  const testimonials = dbReviews.length > 0
    ? dbReviews.map((r: any) => ({
        name: r.reviewer_name || "Verified Customer",
        role: r.reviewer_city ? `Customer, ${r.reviewer_city}` : "Valued Customer",
        text: r.comment,
        rating: r.rating,
        product: "Shree Radhe Store",
      }))
    : FALLBACK_TESTIMONIALS;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    setSubmitting(true);
    try {
      await supabase.from("reviews").insert({
        reviewer_name: name.trim(),
        reviewer_city: city.trim() || null,
        rating,
        comment: text.trim(),
        product_id: null,
        is_approved: false,
      });
      setSuccess(true);
      setName(""); setCity(""); setRating(5); setText("");
    } catch {
      // silent
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-14 md:py-20 bg-[#F7F5F2]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-[11px] uppercase tracking-[0.22em] text-[#C8860A] font-semibold block mb-2">
            Customer Stories
          </span>
          <h2 className="text-[#1A1A1A]" style={{ fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)", fontWeight: 500 }}>
            What Our Customers Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-[#E8E4DF] p-8 relative rounded-sm group hover:border-[#C8860A]/30 transition-all duration-500 shadow-sm hover:shadow-[0_8px_40px_rgba(0,0,0,0.05)]"
            >
              <Quote className="w-8 h-8 text-[#C8860A]/10 absolute top-6 right-8 group-hover:text-[#C8860A]/20 transition-colors" />

              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-[#C8860A] text-[#C8860A]" />
                ))}
              </div>

              <blockquote className="text-[15px] text-[#4A4A4A] leading-relaxed mb-6 font-body italic">
                "{t.text}"
              </blockquote>

              <div className="pt-6 border-t border-[#F7F5F2]">
                <p className="text-[15px] font-semibold text-[#1A1A1A] tracking-tight">{t.name}</p>
                <p className="text-[12px] text-[#8C8C8C] font-body">{t.role}</p>
                <div className="mt-3 inline-block px-2 py-0.5 bg-[#F7F5F2] rounded-sm">
                  <span className="text-[10px] text-[#C8860A] font-semibold uppercase tracking-widest">{t.product}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FIX 6 — Share Your Experience button */}
        <div className="text-center mt-12">
          <button
            onClick={() => { setModalOpen(true); setSuccess(false); }}
            className="px-8 py-3 border-2 border-[#C8860A] text-[#C8860A] text-[14px] font-semibold rounded hover:bg-[#C8860A] hover:text-white transition-all duration-300 uppercase tracking-wider"
          >
            Share Your Experience
          </button>
        </div>
      </div>

      {/* FIX 6 — Submission Modal */}
      <AnimatePresence>
        {modalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-[300]"
              onClick={() => setModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 z-[310] flex items-center justify-center p-4"
            >
              <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative">
                <button
                  onClick={() => setModalOpen(false)}
                  className="absolute top-4 right-4 text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {success ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 fill-[#C8860A] text-[#C8860A]" />
                    </div>
                    <h3 className="text-[22px] font-serif font-bold text-[#1A1A1A] mb-3">Thank You!</h3>
                    <p className="text-[#6B6B6B] leading-relaxed">
                      Thank you for your review! It will appear after approval.
                    </p>
                    <button
                      onClick={() => setModalOpen(false)}
                      className="mt-6 px-8 py-2.5 bg-[#1A1A1A] text-white rounded hover:bg-[#333] transition-colors text-[13px] font-bold"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-[22px] font-serif font-bold text-[#1A1A1A] mb-2">Share Your Experience</h3>
                    <p className="text-[#6B6B6B] text-[14px] mb-6">We'd love to hear about your experience at Shree Radhe.</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="text-[12px] font-bold uppercase tracking-wider text-[#1A1A1A] block mb-1.5">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          required
                          value={name}
                          onChange={e => setName(e.target.value)}
                          placeholder="Your full name"
                          className="w-full border border-[#E8E4DF] rounded-lg px-4 py-2.5 text-[14px] outline-none focus:border-[#C8860A] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-[12px] font-bold uppercase tracking-wider text-[#1A1A1A] block mb-1.5">
                          City <span className="text-[#999] font-normal">(optional)</span>
                        </label>
                        <input
                          value={city}
                          onChange={e => setCity(e.target.value)}
                          placeholder="e.g. Amravati"
                          className="w-full border border-[#E8E4DF] rounded-lg px-4 py-2.5 text-[14px] outline-none focus:border-[#C8860A] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-[12px] font-bold uppercase tracking-wider text-[#1A1A1A] block mb-1.5">Rating</label>
                        <StarSelector rating={rating} onChange={setRating} />
                      </div>
                      <div>
                        <label className="text-[12px] font-bold uppercase tracking-wider text-[#1A1A1A] block mb-1.5">
                          Your Review <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          required
                          maxLength={300}
                          value={text}
                          onChange={e => setText(e.target.value)}
                          placeholder="Tell us about your experience..."
                          rows={4}
                          className="w-full border border-[#E8E4DF] rounded-lg px-4 py-2.5 text-[14px] outline-none focus:border-[#C8860A] transition-colors resize-none"
                        />
                        <p className="text-[11px] text-[#999] text-right mt-1">{text.length}/300</p>
                      </div>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full bg-[#1A1A1A] text-white py-3 rounded-lg font-bold uppercase tracking-wider text-[13px] hover:bg-[#333] transition-colors disabled:opacity-50"
                      >
                        {submitting ? "Submitting..." : "Submit Review"}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
