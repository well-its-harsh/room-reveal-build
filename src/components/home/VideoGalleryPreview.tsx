import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Volume2, VolumeX, ArrowRight } from "lucide-react";
import { supabase } from "@/lib/supabase";

function VideoCard({ video, index }: { video: any; index: number }) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const p = video.products;
  const thumb = p?.product_media?.[0]?.media_url || "/assets/generated/hero-slide-1.jpg";
  const dims = p?.width ? `${p.width} × ${p.height} mm` : "Standard Size";
  const price = p?.price || 0;
  // Estimate Mrp if not available separately
  const mrp = price > 0 ? Math.round(price * 1.2) : 0;

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.45 }}
      className="group relative rounded-2xl overflow-hidden bg-black aspect-[9/16]"
    >
      {/* Video Content */}
      <video
        ref={videoRef}
        src={video.video_url}
        poster={video.thumbnail_url}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
      />

      {/* Top Controls: Sound Toggle */}
      <button
        onClick={toggleMute}
        className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors z-10"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </button>

      {/* Product Info Bar at Bottom */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pb-4">
        <Link 
          to={p ? `/product/${p.id}` : "/products"}
          className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 p-2.5 rounded-xl hover:bg-white/20 transition-colors"
        >
          {/* Thumbnail */}
          <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-black/20">
            <img src={thumb} alt={p?.name || 'Product'} className="w-full h-full object-cover" />
          </div>
          
          {/* Center Info */}
          <div className="flex-1 min-w-0">
            <h4 className="text-white text-[13px] font-semibold truncate leading-tight">
              {p?.name || 'View Collection'}
            </h4>
            <p className="text-white/70 text-[11px] truncate">
              {dims}
            </p>
          </div>

          {/* Right Price Info */}
          {price > 0 && (
            <div className="text-right flex-shrink-0 pl-2 border-l border-white/20">
              <div className="text-white font-bold text-[13px]">
                ₹{price.toLocaleString("en-IN")}
              </div>
              <div className="text-white/60 text-[10px] line-through">
                ₹{mrp.toLocaleString("en-IN")}
              </div>
            </div>
          )}
        </Link>
      </div>
    </motion.div>
  );
}

export default function VideoGalleryPreview() {
  const [dbVideos, setDbVideos] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const { data } = await supabase
        .from('featured_videos')
        .select(`
          id, video_url, thumbnail_url, sort_order, is_active,
          products ( id, name, price, width, height, product_media ( media_url ) )
        `)
        .eq('is_active', true)
        .order('sort_order', { ascending: true });
      if (data) setDbVideos(data);
      setIsLoading(false);
    }
    load();
  }, []);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10"
        >
          <div>
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#C8860A] font-semibold block mb-2">
              Watch & Shop
            </span>
            <h2 className="font-serif text-[#1A1A1A] text-[32px] md:text-[38px] font-bold tracking-tight leading-tight">
              Designs in Motion
            </h2>
          </div>
          <Link
            to="/videos"
            className="flex items-center gap-1 text-[13px] text-[#C8860A] hover:underline font-medium mt-3 md:mt-0"
          >
            View Formats <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

        {/* 4-col Grid */}
        {isLoading ? (
           <div className="flex gap-4">
             {Array.from({ length: 4 }).map((_, i) => (
               <div key={i} className="flex-1 aspect-[9/16] bg-gray-100 rounded-2xl animate-pulse" />
             ))}
           </div>
        ) : dbVideos.length === 0 ? (
           <div className="py-10 text-center text-[#6B6B6B] italic">Videos coming soon.</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {dbVideos.slice(0, 4).map((v, i) => (
              <VideoCard key={v.id} video={v} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
