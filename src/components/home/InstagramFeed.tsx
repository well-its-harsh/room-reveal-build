import { motion } from "framer-motion";
import { Instagram, Video } from "lucide-react";

// Mixed gallery: some have 'img', some have 'video' url
const SOCIAL_GALLERY = [
  { id: 1, type: "large", img: "/images/social/social-grid-1.png" },
  { id: 2, type: "small", video: "https://player.vimeo.com/external/494250214.sd.mp4?s=6f6e52c9a997d91e0a29910d540e53a99e8297b6&profile_id=164&oauth2_token_id=57447761" },
  { id: 3, type: "small", img: "/images/social/social-grid-3.png" },
  { id: 4, type: "small", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600" },
  { id: 5, type: "small", img: "/images/social/social-grid-5.png" },
  { id: 6, type: "large", img: "/images/social/social-grid-6.png" },
];

export default function InstagramFeed() {
  return (
    <section className="bg-[#1A1A1A]">
      <div className="container px-4 md:px-8 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-xl">
            <span className="text-[11px] font-semibold text-[#C8860A] uppercase tracking-[0.2em] mb-3 block">
              Follow our journey
            </span>
            <h2 className="font-serif text-[32px] md:text-[40px] font-bold text-white mb-4 tracking-tight leading-tight">
              Design Inspiration <br />on Instagram
            </h2>
            <p className="text-white/70 font-body leading-relaxed max-w-md text-[14px]">
              Explore how our premium tiles and hardware transform ordinary spaces into architectural masterpieces.
            </p>
          </div>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-widest text-white hover:text-[#C8860A] transition-colors border-b border-transparent hover:border-[#C8860A] pb-1"
          >
            <Instagram className="w-4 h-4" /> @shreeradhetiles
          </a>
        </div>
      </div>

      {/* Full bleed, gapless grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-none w-full">
        {SOCIAL_GALLERY.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.05, duration: 0.6 }}
            viewport={{ once: true }}
            className={`relative group bg-[#2A2A2A] overflow-hidden ${
              item.type === "large" ? "col-span-2 row-span-2 aspect-square" : "col-span-1 row-span-1 aspect-square"
            }`}
          >
            {item.video ? (
              <video
                src={item.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
            ) : (
              <img
                src={item.img}
                alt="Instagram Inspiration"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                loading="lazy"
              />
            )}
            
            {/* Hover state overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {item.video ? (
                 <Video className="text-white w-8 h-8 opacity-90" />
              ) : (
                 <Instagram className="text-white w-8 h-8 opacity-90" />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
