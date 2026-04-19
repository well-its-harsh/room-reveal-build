import { useState } from "react";
import { Link } from "react-router-dom";
import { Play, ArrowLeft, X, ExternalLink } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface Video {
  id: string;
  title: string;
  video_url: string;
  thumbnail_url: string;
  category_id: string;
  product_id: string | null;
  duration_seconds: number | null;
  view_count: number;
  sort_order: number;
  is_active: boolean;
  category?: {
    name: string;
    slug: string;
  };
  product?: {
    name: string;
    price: number;
    product_media?: { media_url: string }[];
  };
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

export default function Videos() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const { data: categories = [] } = useQuery({
    queryKey: ["video-categories"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("video_categories")
        .select("*")
        .eq("is_active", true)
        .order("sort_order", { ascending: true });
      if (error) throw error;
      return data as Category[];
    },
  });

  const { data: videos = [], isLoading } = useQuery({
    queryKey: ["featured-videos", activeCategory],
    queryFn: async () => {
      let query = supabase
        .from("featured_videos")
        .select(`
          *,
          category:video_categories(name, slug),
          product:products(name, price, product_media(media_url))
        `)
        .eq("is_active", true)
        .order("sort_order", { ascending: true });

      if (activeCategory !== "all") {
        query = query.eq("video_categories.slug", activeCategory);
      }

      const { data, error } = await query;
      if (error) throw error;
      
      // Filter in JS if the join filter didn't work as expected
      if (activeCategory !== "all") {
        return (data as any[]).filter(v => v.category?.slug === activeCategory) as Video[];
      }
      
      return data as Video[];
    },
  });

  const formatDuration = (seconds: number | null) => {
    if (!seconds) return "";
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleVideoClick = (video: Video) => {
    setSelectedVideo(video);
    // Increment view count
    supabase
      .from("featured_videos")
      .update({ view_count: (video.view_count || 0) + 1 })
      .eq("id", video.id)
      .then();
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen pb-20 mt-[72px]">
      <div className="container py-8 md:py-16 max-w-7xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm font-medium text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

        <div className="mb-12">
          <h1 className="font-serif text-[32px] md:text-[48px] font-bold text-[#1A1A1A] mb-4">Video Gallery</h1>
          <p className="text-[16px] text-[#6B6B6B] max-w-2xl leading-relaxed">
            Experience the elegance and functionality of our premium collections through immersive videos, 
            expert guides, and customer inspirations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-6 py-2.5 rounded-full text-[13px] font-bold uppercase tracking-wider transition-all border ${
              activeCategory === "all" 
                ? "bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-md" 
                : "bg-white text-[#6B6B6B] border-[#E8E4DF] hover:border-[#1A1A1A] hover:text-[#1A1A1A]"
            }`}
          >
            All Videos
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.slug)}
              className={`px-6 py-2.5 rounded-full text-[13px] font-bold uppercase tracking-wider whitespace-nowrap transition-all border ${
                activeCategory === cat.slug 
                  ? "bg-[#C8860A] text-white border-[#C8860A] shadow-md" 
                  : "bg-white text-[#6B6B6B] border-[#E8E4DF] hover:border-[#C8860A] hover:text-[#C8860A]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="aspect-[9/16] rounded-2xl bg-white border border-[#E8E4DF] p-3">
                <Skeleton className="w-full h-full rounded-xl" />
              </div>
            ))}
          </div>
        ) : videos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map(video => (
              <div 
                key={video.id} 
                className="group relative flex flex-col bg-white rounded-2xl border border-[#E8E4DF] overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* 9:16 aspect ratio container */}
                <div 
                  className="relative aspect-[9/16] overflow-hidden cursor-pointer"
                  onClick={() => handleVideoClick(video)}
                >
                  <img 
                    src={video.thumbnail_url || "/placeholder.svg"} 
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center scale-90 group-hover:scale-100 transition-all duration-300">
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="bg-[#C8860A] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                      {video.category?.name || "Featured"}
                    </span>
                  </div>

                  {video.duration_seconds && (
                    <div className="absolute bottom-4 right-4 translate-y-0 group-hover:-translate-y-2 transition-transform duration-300">
                      <span className="bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-2 py-1 rounded">
                        {formatDuration(video.duration_seconds)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-[18px] font-serif font-bold text-[#1A1A1A] mb-4 line-clamp-2 leading-tight min-h-[54px]">
                    {video.title}
                  </h3>

                  {video.product && (
                    <Link 
                      to={`/product/${video.product_id}`}
                      className="mt-auto flex items-center gap-3 p-3 bg-[#F7F5F2] rounded-xl group/prod hover:bg-[#E8E4DF] transition-colors"
                    >
                      <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-white border border-[#E8E4DF]">
                        <img 
                          src={video.product.product_media?.[0]?.media_url || "/placeholder.svg"} 
                          alt={video.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[12px] font-bold text-[#1A1A1A] truncate">{video.product.name}</p>
                        <p className="text-[11px] text-[#C8860A] font-bold">₹{video.product.price.toLocaleString("en-IN")}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-[#6B6B6B] opacity-0 group-hover/prod:opacity-100 transition-opacity" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-32 text-center bg-white border border-dashed border-[#E8E4DF] rounded-2xl">
            <p className="text-[#6B6B6B] font-serif text-xl italic">
              No videos found in this category yet.
            </p>
          </div>
        )}
      </div>

      {/* Video Player Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={(open) => !open && setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl p-0 bg-black border-none overflow-hidden h-full max-h-[90vh] sm:h-auto">
          <DialogHeader className="sr-only">
             <DialogTitle>{selectedVideo?.title}</DialogTitle>
          </DialogHeader>
          <button 
            onClick={() => setSelectedVideo(null)}
            className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="aspect-video w-full flex items-center justify-center bg-black">
            {selectedVideo && (
              <video 
                src={selectedVideo.video_url} 
                controls 
                autoPlay 
                className="max-w-full max-h-full"
              />
            )}
          </div>
          
          <div className="p-6 bg-white">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-[11px] font-bold text-[#C8860A] uppercase tracking-widest block mb-1">
                  {selectedVideo?.category?.name}
                </span>
                <h2 className="text-xl md:text-2xl font-serif font-bold text-[#1A1A1A]">
                  {selectedVideo?.title}
                </h2>
              </div>
              {selectedVideo?.product && (
                <Button asChild className="bg-[#1A1A1A] text-white hover:bg-[#333]">
                  <Link to={`/product/${selectedVideo.product_id}`}>Shop Product</Link>
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
