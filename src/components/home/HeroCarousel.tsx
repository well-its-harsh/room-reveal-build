import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar, LayoutGrid } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/assets/generated/hero-slide-1.jpg",
    fallbackGradient: "linear-gradient(135deg, #2c1810 0%, #5a3620 40%, #8B6347 100%)",
    tag: "Premium Collection",
    headline: "Redefine Your Bathroom",
    subtext: "Discover 5,000+ tiles, fittings & hardware from India's finest brands — all under one roof.",
  },
  {
    id: 2,
    image: "/assets/generated/hero-slide-2.jpg",
    fallbackGradient: "linear-gradient(135deg, #1a2a1a 0%, #2d4a2d 40%, #4a7c4a 100%)",
    tag: "Kitchen Tiles",
    headline: "Floors That Inspire Every Meal",
    subtext: "Premium kitchen tiles with anti-skid finishes. Explore 500+ designs for every kitchen style.",
  },
  {
    id: 3,
    image: "/assets/generated/hero-slide-3.jpg",
    fallbackGradient: "linear-gradient(135deg, #1a1810 0%, #3d3520 40%, #7a6c45 100%)",
    tag: "Living Room",
    headline: "Large Format Tiles for Grand Spaces",
    subtext: "Seamless floors that make every room feel expansive. From marble-look to raw concrete aesthetics.",
  },
  {
    id: 4,
    image: "/assets/generated/hero-slide-4.jpg",
    fallbackGradient: "linear-gradient(135deg, #1a160a 0%, #4a3c1a 40%, #8c7040 100%)",
    tag: "Outdoor Collection",
    headline: "Outdoor Spaces, Premium Finish",
    subtext: "Anti-skid outdoor tiles built for Indian weather. Patios, garden paths, terraces — done right.",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [direction, setDirection] = useState<1 | -1>(1);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number, dir: 1 | -1 = 1) => {
    setDirection(dir);
    setCurrent((index + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(current + 1, 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, -1), [current, goTo]);

  // Autoplay
  useEffect(() => {
    if (!playing) { if (intervalRef.current) clearInterval(intervalRef.current); return; }
    intervalRef.current = setInterval(next, 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [playing, next]);

  const slide = slides[current];

  return (
    <section className="relative w-full h-[90vh] min-h-[560px] max-h-[760px] overflow-hidden bg-neutral-900">
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={slide.id}
          custom={direction}
          variants={{
            enter: (d: number) => ({ opacity: 0, x: d * 40 }),
            center: { opacity: 1, x: 0 },
            exit: (d: number) => ({ opacity: 0, x: d * -40 }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background image with fallback gradient */}
          <div
            className="absolute inset-0"
            style={{ background: slide.fallbackGradient }}
          />
          <img
            src={slide.image}
            alt={slide.headline}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }}
          />
          {/* Dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container">
          <div className="max-w-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id + "-content"}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
              >
                {/* Tag */}
                <span className="inline-block bg-[#C8860A] text-white text-[11px] font-semibold uppercase tracking-[0.2em] px-3 py-1 mb-5">
                  {slide.tag}
                </span>

                {/* Headline */}
                <h1 className="text-white font-serif font-bold leading-[1.05] mb-5"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
                  {slide.headline}
                </h1>

                {/* Subtext */}
                <p className="text-white/75 text-[15px] leading-relaxed mb-8 max-w-[440px]">
                  {slide.subtext}
                </p>

                {/* Dual CTA */}
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 bg-[#C8860A] text-white text-[14px] font-medium px-6 py-3 hover:bg-[#A36D07] transition-colors"
                  >
                    <LayoutGrid className="w-4 h-4" />
                    Browse Catalog
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 border border-white/40 text-white text-[14px] font-medium px-6 py-3 hover:bg-white/10 hover:border-white/70 transition-all"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Free Consultation
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Controls */}
      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-200 border border-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-200 border border-white/20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Bottom controls bar */}
      <div className="absolute bottom-6 left-0 right-0 z-20 container flex items-center justify-between">
        {/* Slide dots + counter */}
        <div className="flex items-center gap-6">
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? 1 : -1)}
                className={`transition-all duration-300 rounded-full ${i === current
                  ? "w-8 h-1.5 bg-[#C8860A]"
                  : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <span className="text-white/60 text-[12px] font-light">
            {current + 1} / {slides.length}
          </span>
        </div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-1.5"
      >
        <div className="w-[1px] h-10 bg-white/20 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="absolute inset-x-0 top-0 h-1/2 bg-white/60"
          />
        </div>
      </motion.div>
    </section>
  );
}
