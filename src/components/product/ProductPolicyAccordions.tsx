import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Ruler, ShieldCheck, Truck, HelpCircle, Info, ChevronDown } from "lucide-react";

interface ProductPolicyAccordionsProps {
  description?: string;
  specs?: {
    width?: number;
    height?: number;
    depth?: number;
    material?: string;
    finish?: string;
  };
}

type SectionKey = "overview" | "specs" | "policies" | "faq";

export default function ProductPolicyAccordions({ description, specs }: ProductPolicyAccordionsProps) {
  const [activeSection, setActiveSection] = useState<SectionKey | null>("overview");

  const sections = [
    { id: "overview", label: "Overview", icon: Info },
    { id: "specs", label: "Specs", icon: Ruler },
    { id: "policies", label: "Shipping", icon: Truck },
    { id: "faq", label: "Insights", icon: HelpCircle },
  ] as const;

  const faqs = [
    {
      q: "How do I maintain these products?",
      a: "For brass hardware and luxury tiles, use a soft, damp microfiber cloth. Avoid acidic or abrasive cleaners as they may damage the protective lacquer or glaze."
    },
    {
      q: "Are these items in-stock?",
      a: "Our digital showroom displays live availability. Items marked 'In Stock' are ready for immediate dispatch from our central warehouse."
    },
    {
      q: "Can I get a physical sample?",
      a: "Yes! You can book a Store Visit using the button above to experience the textures and finishes in person at our flagship showroom."
    }
  ];

  return (
    <div className="w-full mt-10 border-t border-[#E8E4DF] pt-8">
      {/* Horizontal Headers */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {sections.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveSection(activeSection === id ? null : id)}
            className={`flex flex-col items-center justify-center p-4 rounded-sm transition-all border ${
              activeSection === id 
                ? "bg-[#1A1A1A] border-[#1A1A1A] text-white shadow-md" 
                : "bg-[#F7F5F2] border-[#E8E4DF] text-[#6B6B6B] hover:border-accent hover:bg-white"
            }`}
          >
            <Icon className={`w-5 h-5 mb-2 ${activeSection === id ? "text-accent" : "text-[#C8860A]"}`} />
            <span className="text-[11px] font-bold uppercase tracking-[0.15em]">{label}</span>
            <ChevronDown className={`w-3 h-3 mt-1 transition-transform duration-300 ${activeSection === id ? "rotate-180" : ""}`} />
          </button>
        ))}
      </div>

      {/* Expandable Content Area */}
      <AnimatePresence mode="wait">
        {activeSection && (
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-white/50 rounded-lg"
          >
            <div className="pb-8 pt-2">
              {activeSection === "overview" && (
                <div className="animate-in fade-in duration-700">
                  <p className="text-[14px] leading-relaxed text-[#6B6B6B] font-body max-w-2xl">
                    {description || "A premium architectural solution designed for the modern Indian home, balancing timeless aesthetics with high-performance durability."}
                  </p>
                </div>
              )}

              {activeSection === "specs" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2 animate-in slide-in-from-bottom-2 duration-500">
                  {[
                    { label: "Width", value: specs?.width ? `${specs.width} mm` : null },
                    { label: "Height", value: specs?.height ? `${specs.height} mm` : null },
                    { label: "Depth", value: specs?.depth ? `${specs.depth} mm` : null },
                    { label: "Material", value: specs?.material || "Premium Grade" },
                    { label: "Finish", value: specs?.finish || "Factory Applied" },
                  ].filter(s => s.value).map((spec, i) => (
                    <div key={i} className="flex justify-between items-center py-2.5 border-b border-[#F7F5F2]">
                      <span className="text-[12px] text-[#6B6B6B] font-body uppercase tracking-wider">{spec.label}</span>
                      <span className="text-[13px] text-[#1A1A1A] font-medium font-body">{spec.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeSection === "policies" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in zoom-in-95 duration-500">
                  <div className="flex gap-4 items-start p-4 bg-[#F7F5F2] rounded-sm border border-[#E8E4DF]/50">
                    <Truck className="w-5 h-5 text-[#C8860A] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-[12px] font-bold text-[#1A1A1A] uppercase tracking-widest mb-1.5">Elite Logistics</p>
                      <p className="text-[12px] text-[#6B6B6B] leading-relaxed font-body">White-glove delivery in multi-layer protective wood-casing for zero-damage transit.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-[#F7F5F2] rounded-sm border border-[#E8E4DF]/50">
                    <ShieldCheck className="w-5 h-5 text-[#C8860A] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-[12px] font-bold text-[#1A1A1A] uppercase tracking-widest mb-1.5">Quality Seal</p>
                      <p className="text-[12px] text-[#6B6B6B] leading-relaxed font-body">Every piece inspected by our curators. 15-year legacy of architectural excellence.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "faq" && (
                <div className="space-y-6 animate-in slide-in-from-right-4 duration-500">
                  {faqs.map((faq, i) => (
                    <div key={i} className="max-w-2xl">
                      <p className="text-[13px] font-bold text-[#1A1A1A] font-body mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {faq.q}
                      </p>
                      <p className="text-[13px] text-[#6B6B6B] font-body leading-relaxed pl-3.5 border-l border-accent/20">{faq.a}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
