import { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100));
    setPosition(pct);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updatePosition(e.clientX);
  };
  const onPointerUp = () => { dragging.current = false; };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full overflow-hidden cursor-ew-resize select-none touch-none rounded-sm"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      {/* AFTER — full width (right side) */}
      <div
        className="absolute inset-0 bg-[#2d4a5e]"
      >
        <img
          src="/assets/generated/ai-makeover-after.png"
          alt="After AI redesign"
          className="w-full h-full object-cover"
          draggable={false}
          onError={(e) => { (e.target as HTMLImageElement).src = "/assets/generated/hero-slide-1.jpg"; }}
        />
        <div className="absolute bottom-3 right-3 bg-[#C8860A] text-white text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1">
          After AI Redesign
        </div>
      </div>

      {/* BEFORE — clipped to left of slider */}
      <div
        className="absolute inset-0 overflow-hidden bg-[#3a2a1a]"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src="/assets/generated/ai-makeover-before.png"
          alt="Before room"
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute bottom-3 left-3 bg-[#1A1A1A] text-white text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1">
          Before
        </div>
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 z-10 flex items-center"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="w-0.5 h-full bg-white/80" />
        <div className="absolute w-9 h-9 rounded-full bg-white shadow-lg border-2 border-[#C8860A] flex items-center justify-center">
          <svg className="w-4 h-4 text-[#C8860A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path d="M8 9l-3 3 3 3M16 9l3 3-3 3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function AIMakeoverTeaser() {
  return (
    <section className="py-16 md:py-20 bg-[#F7F5F2]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: before/after slider */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <BeforeAfterSlider />
            <p className="text-center text-[12px] text-[#6B6B6B] mt-2">
              ← Drag to compare before & after
            </p>
          </motion.div>

          {/* Right: copy */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#1A1A1A] mb-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 500, lineHeight: 1.15 }}>
              Transform Your Space<br />
              <span className="text-[#C8860A]">with AI</span>
            </h2>

            <p className="text-[15px] text-[#6B6B6B] leading-relaxed mb-6">
              Upload a photo of your bathroom, kitchen or living room — our AI redesigns it with premium tiles and hardware from our catalog. Get instant inspiration.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Upload your room photo",
                "Choose style: Modern, Traditional, Luxe, Minimal, Industrial",
                "AI generates your redesigned room",
                "Shop every product used in the design",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-[14px] text-[#6B6B6B]">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#C8860A] text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ul>

            <Link
              to="/ai-makeover"
              className="inline-flex items-center gap-2 bg-[#C8860A] text-white text-[14px] font-medium px-6 py-3 hover:bg-[#A36D07] transition-colors"
            >
              Try AI Makeover <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
