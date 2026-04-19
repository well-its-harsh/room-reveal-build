import { useState, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { 
  Plus, 
  Trash2, 
  Pencil, 
  ToggleLeft, 
  ToggleRight, 
  Video as VideoIcon, 
  Upload, 
  Image as ImageIcon,
  Search,
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface VideoCategory {
  id: string;
  name: string;
  slug: string;
  sort_order: number;
  is_active: boolean;
}

interface Video {
  id: string;
  title: string;
  video_url: string;
  thumbnail_url: string;
  category_id: string;
  product_id: string | null;
  duration_seconds: number | null;
  view_count: number;
  is_active: boolean;
  created_at: string;
  category?: { name: string };
  product?: { name: string, product_media?: { media_url: string }[] };
}

export default function VideoManagement() {
  const queryClient = useQueryClient();
  const [activeTab, setActiveTab] = useState<"videos" | "categories">("videos");
  
  // Video Form State
  const [showVideoForm, setShowVideoForm] = useState(false);
  const [editingVideo, setEditingVideo] = useState<Video | null>(null);
  const [videoTitle, setVideoTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [isVideoActive, setIsVideoActive] = useState(true);
  
  // Category Form State
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [editingCategory, setEditingCategory] = useState<VideoCategory | null>(null);
  const [categoryName, setCategoryName] = useState("");
  const [categorySlug, setCategorySlug] = useState("");
  const [categorySortOrder, setCategorySortOrder] = useState(0);

  // Product Search State
  const [productSearch, setProductSearch] = useState("");

  // Queries
  const { data: categories = [] } = useQuery({
    queryKey: ["video-categories-admin"],
    queryFn: async () => {
      const { data, error } = await supabase.from("video_categories").select("*").order("sort_order");
      if (error) throw error;
      return data as VideoCategory[];
    }
  });

  const { data: videos = [], isLoading: videosLoading } = useQuery({
    queryKey: ["featured-videos-admin"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("featured_videos")
        .select(`
          *,
          category:video_categories(name),
          product:products(name, product_media(media_url))
        `)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data as Video[];
    }
  });

  const { data: products = [] } = useQuery({
    queryKey: ["all-products-search", productSearch],
    queryFn: async () => {
      let query = supabase.from("products").select("id, name, product_media(media_url)");
      if (productSearch) {
        query = query.ilike("name", `%${productSearch}%`);
      }
      const { data, error } = await query.limit(10).order("name");
      if (error) throw error;
      return data;
    },
    enabled: showVideoForm
  });

  // Mutations
  const videoMutation = useMutation({
    mutationFn: async () => {
      let finalVideoUrl = videoUrl;
      let finalThumbnailUrl = thumbnailUrl;

      // Handle Video Upload
      if (videoFile) {
        const fileExt = videoFile.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(7)}.${fileExt}`;
        const filePath = `video-library/${fileName}`;
        const { error: uploadError } = await supabase.storage.from('videos').upload(filePath, videoFile);
        if (uploadError) throw uploadError;
        const { data } = supabase.storage.from('videos').getPublicUrl(filePath);
        finalVideoUrl = data.publicUrl;
      }

      // Handle Thumbnail Upload
      if (thumbnailFile) {
        const fileExt = thumbnailFile.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(7)}.${fileExt}`;
        const filePath = `video-thumbnails/${fileName}`;
        const { error: uploadError } = await supabase.storage.from('thumbnails').upload(filePath, thumbnailFile);
        if (uploadError) throw uploadError;
        const { data } = supabase.storage.from('thumbnails').getPublicUrl(filePath);
        finalThumbnailUrl = data.publicUrl;
      } else if (!finalThumbnailUrl && videoUrl.includes("youtube.com")) {
        // Auto-generate YT thumbnail if needed (simplified)
        const ytId = videoUrl.match(/(?:v=|\/)([0-9A-Za-z_-]{11}).*/)?.[1];
        if (ytId) finalThumbnailUrl = `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`;
      }

      const videoData = {
        title: videoTitle,
        video_url: finalVideoUrl,
        thumbnail_url: finalThumbnailUrl,
        category_id: selectedCategoryId || null,
        product_id: selectedProductId || null,
        is_active: isVideoActive,
      };

      if (editingVideo) {
        const { error } = await supabase.from("featured_videos").update(videoData).eq("id", editingVideo.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("featured_videos").insert(videoData);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["featured-videos-admin"] });
      toast.success(editingVideo ? "Video updated" : "Video added");
      resetVideoForm();
    },
    onError: (err: any) => toast.error(err.message)
  });

  const categoryMutation = useMutation({
    mutationFn: async () => {
      const catData = {
        name: categoryName,
        slug: categorySlug || categoryName.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        sort_order: categorySortOrder,
      };

      if (editingCategory) {
        const { error } = await supabase.from("video_categories").update(catData).eq("id", editingCategory.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("video_categories").insert(catData);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["video-categories-admin"] });
      toast.success(editingCategory ? "Category updated" : "Category added");
      resetCategoryForm();
    },
    onError: (err: any) => toast.error(err.message)
  });

  const categoryToggleMutation = useMutation({
    mutationFn: async ({ id, is_active }: { id: string, is_active: boolean }) => {
      const { error } = await supabase.from("video_categories").update({ is_active }).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["video-categories-admin"] }),
    onError: (err: any) => toast.error(err.message)
  });

  const videoToggleMutation = useMutation({
    mutationFn: async ({ id, is_active }: { id: string, is_active: boolean }) => {
      const { error } = await supabase.from("featured_videos").update({ is_active }).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["featured-videos-admin"] }),
    onError: (err: any) => toast.error(err.message)
  });

  const deleteMutation = useMutation({
    mutationFn: async ({ table, id }: { table: string, id: string }) => {
      const { error } = await supabase.from(table).delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: [variables.table === "featured_videos" ? "featured-videos-admin" : "video-categories-admin"] });
      toast.success("Deleted successfully");
    },
    onError: (err: any) => toast.error(err.message)
  });

  const resetVideoForm = () => {
    setEditingVideo(null);
    setVideoTitle("");
    setVideoUrl("");
    setVideoFile(null);
    setThumbnailUrl("");
    setThumbnailFile(null);
    setSelectedCategoryId("");
    setSelectedProductId(null);
    setIsVideoActive(true);
    setShowVideoForm(false);
  };

  const resetCategoryForm = () => {
    setEditingCategory(null);
    setCategoryName("");
    setCategorySlug("");
    setCategorySortOrder(0);
    setShowCategoryForm(false);
  };

  const openEditVideo = (v: Video) => {
    setEditingVideo(v);
    setVideoTitle(v.title);
    setVideoUrl(v.video_url);
    setThumbnailUrl(v.thumbnail_url);
    setSelectedCategoryId(v.category_id || "");
    setSelectedProductId(v.product_id);
    setIsVideoActive(v.is_active);
    setShowVideoForm(true);
  };

  const openEditCategory = (c: VideoCategory) => {
    setEditingCategory(c);
    setCategoryName(c.name);
    setCategorySlug(c.slug);
    setCategorySortOrder(c.sort_order);
    setShowCategoryForm(true);
  };

  return (
    <div className="pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-serif font-bold text-[#1A1A1A]">Video Management</h1>
          <p className="text-[#6B6B6B] mt-2 text-sm max-w-2xl">
            Curate your video gallery and categories. Vertical 9:16 videos are recommended for the best experience.
          </p>
        </div>
        <div className="flex gap-2">
           <Button 
             variant="outline" 
             onClick={() => { resetCategoryForm(); setShowCategoryForm(true); }}
             className="border-[#E8E4DF] hover:bg-gray-50"
           >
             <Plus className="w-4 h-4 mr-2" /> Category
           </Button>
           <Button 
             onClick={() => { resetVideoForm(); setShowVideoForm(true); }}
             className="bg-[#C8860A] text-white hover:bg-[#a66f08]"
           >
             <Plus className="w-4 h-4 mr-2" /> Add Video
           </Button>
        </div>
      </div>

      <div className="flex border-b border-[#E8E4DF] mb-8 overflow-x-auto no-scrollbar">
        <button 
          onClick={() => setActiveTab("videos")}
          className={cn(
            "px-6 py-4 text-sm font-bold uppercase tracking-widest transition-all border-b-2 whitespace-nowrap",
            activeTab === "videos" ? "border-[#C8860A] text-[#C8860A] bg-[#C8860A]/5" : "border-transparent text-[#6B6B6B] hover:text-[#1A1A1A]"
          )}
        >
          All Videos ({videos.length})
        </button>
        <button 
          onClick={() => setActiveTab("categories")}
          className={cn(
            "px-6 py-4 text-sm font-bold uppercase tracking-widest transition-all border-b-2 whitespace-nowrap",
            activeTab === "categories" ? "border-[#C8860A] text-[#C8860A] bg-[#C8860A]/5" : "border-transparent text-[#6B6B6B] hover:text-[#1A1A1A]"
          )}
        >
          Categories ({categories.length})
        </button>
      </div>

      {activeTab === "videos" && (
        <div className="bg-white rounded-xl border border-[#E8E4DF] overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-[#FAF9F6] border-b border-[#E8E4DF]">
                <tr>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-[#6B6B6B]">Thumbnail</th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-[#6B6B6B]">Title & Meta</th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-[#6B6B6B]">Stats</th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-[#6B6B6B]">Visibility</th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-[#6B6B6B] text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E4DF]">
                {videosLoading ? (
                  Array(5).fill(0).map((_, i) => (
                    <tr key={i} className="animate-pulse">
                      <td className="px-6 py-6"><div className="w-16 h-24 bg-gray-100 rounded" /></td>
                      <td className="px-6 py-6"><div className="h-4 bg-gray-100 rounded w-3/4 mb-2" /><div className="h-3 bg-gray-100 rounded w-1/2" /></td>
                      <td className="px-6 py-6"><div className="h-4 bg-gray-100 rounded w-16" /></td>
                      <td className="px-6 py-6"><div className="w-10 h-6 bg-gray-100 rounded-full" /></td>
                      <td className="px-6 py-6"><div className="flex justify-end gap-2"><div className="w-8 h-8 bg-gray-100 rounded" /><div className="w-8 h-8 bg-gray-100 rounded" /></div></td>
                    </tr>
                  ))
                ) : videos.map((v) => (
                  <tr key={v.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="w-16 h-28 bg-[#F7F5F2] rounded-lg overflow-hidden border border-[#E8E4DF] flex items-center justify-center relative group">
                        <img src={v.thumbnail_url || "/placeholder.svg"} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Eye className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="max-w-xs">
                        <p className="font-bold text-[#1A1A1A] line-clamp-1 mb-1">{v.title}</p>
                        <div className="flex items-center gap-2">
                           <span className="text-[10px] bg-[#C8860A]/10 text-[#C8860A] px-2 py-0.5 rounded font-bold uppercase">
                             {v.category?.name || "No Category"}
                           </span>
                           <span className="text-[11px] text-[#6B6B6B]">
                             {new Date(v.created_at).toLocaleDateString()}
                           </span>
                        </div>
                        {v.product && (
                          <div className="mt-2 flex items-center gap-2 text-[11px] text-[#6B6B6B] bg-gray-100 px-2 py-1 rounded w-fit">
                             <ImageIcon className="w-3 h-3" /> {v.product.name}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1">
                        <p className="text-sm font-bold text-[#1A1A1A]">{v.view_count || 0}</p>
                        <p className="text-[10px] text-[#6B6B6B] uppercase tracking-wider">Views</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                       <button 
                         onClick={() => videoToggleMutation.mutate({ id: v.id, is_active: !v.is_active })}
                         className={cn(
                           "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                           v.is_active ? "bg-[#1A8C4A]" : "bg-gray-300"
                         )}
                       >
                         <span className={cn(
                           "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                           v.is_active ? "translate-x-6" : "translate-x-1"
                         )} />
                       </button>
                    </td>
                    <td className="px-6 py-4 text-right">
                       <div className="flex justify-end gap-2">
                         <button 
                           onClick={() => openEditVideo(v)}
                           className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 hover:text-[#C8860A] transition-colors"
                         >
                           <Pencil className="w-4 h-4" />
                         </button>
                         <button 
                           onClick={() => { if(confirm("Permanently delete this video?")) deleteMutation.mutate({ table: 'featured_videos', id: v.id }) }}
                           className="p-2 hover:bg-red-50 rounded-lg text-gray-400 hover:text-red-500 transition-colors"
                         >
                           <Trash2 className="w-4 h-4" />
                         </button>
                       </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {videos.length === 0 && !videosLoading && (
            <div className="p-20 text-center">
               <VideoIcon className="w-12 h-12 text-[#E8E4DF] mx-auto mb-4" />
               <p className="text-[#6B6B6B]">No videos established yet.</p>
            </div>
          )}
        </div>
      )}

      {activeTab === "categories" && (
        <div className="bg-white rounded-xl border border-[#E8E4DF] overflow-hidden shadow-sm">
           <table className="w-full text-left">
              <thead className="bg-[#FAF9F6] border-b border-[#E8E4DF]">
                <tr>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-[#6B6B6B]">Category Name</th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-[#6B6B6B]">Slug</th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-[#6B6B6B]">Order</th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-[#6B6B6B]">Active</th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-[#6B6B6B] text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E4DF]">
                {categories.map((c) => (
                  <tr key={c.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-bold text-[#1A1A1A]">{c.name}</td>
                    <td className="px-6 py-4 font-mono text-xs text-[#6B6B6B]">{c.slug}</td>
                    <td className="px-6 py-4 text-sm">{c.sort_order}</td>
                    <td className="px-6 py-4">
                       <button 
                         onClick={() => categoryToggleMutation.mutate({ id: c.id, is_active: !c.is_active })}
                         className={cn(
                           "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                           c.is_active ? "bg-[#1A8C4A]" : "bg-gray-300"
                         )}
                       >
                         <span className={cn(
                           "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                           c.is_active ? "translate-x-6" : "translate-x-1"
                         )} />
                       </button>
                    </td>
                    <td className="px-6 py-4 text-right">
                       <div className="flex justify-end gap-2">
                         <button 
                           onClick={() => openEditCategory(c)}
                           className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 hover:text-[#C8860A] transition-colors"
                         >
                           <Pencil className="w-4 h-4" />
                         </button>
                         <button 
                           onClick={() => { if(confirm("Delete category? This will unlink associated videos.")) deleteMutation.mutate({ table: 'video_categories', id: c.id }) }}
                           className="p-2 hover:bg-red-50 rounded-lg text-gray-400 hover:text-red-500 transition-colors"
                         >
                           <Trash2 className="w-4 h-4" />
                         </button>
                       </div>
                    </td>
                  </tr>
                ))}
              </tbody>
           </table>
        </div>
      )}

      {/* Video Form Modal */}
      <Dialog open={showVideoForm} onOpenChange={(open) => !open && resetVideoForm()}>
        <DialogContent className="max-w-2xl p-0 bg-white border-none overflow-hidden max-h-[95vh] flex flex-col">
          <DialogHeader className="p-6 bg-[#FAF9F6] border-b border-[#E8E4DF]">
            <DialogTitle className="font-serif text-2xl">
              {editingVideo ? "Edit Video Reality" : "Inject New Video Node"}
            </DialogTitle>
          </DialogHeader>

          <div className="p-6 overflow-y-auto flex-1 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-[#6B6B6B] block mb-1.5">Video Title *</label>
                  <Input 
                    value={videoTitle} 
                    onChange={e => setVideoTitle(e.target.value)} 
                    placeholder="e.g., Luxury Basin Showcase" 
                    className="h-11"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-[#6B6B6B] block mb-1.5">Category *</label>
                  <select 
                    value={selectedCategoryId} 
                    onChange={e => setSelectedCategoryId(e.target.value)}
                    className="w-full h-11 border border-[#E8E4DF] rounded-md px-3 text-sm focus:ring-[#C8860A] focus:border-[#C8860A] outline-none"
                  >
                    <option value="">Select Category</option>
                    {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                  </select>
                </div>

                <div>
                   <label className="text-xs font-bold uppercase tracking-widest text-[#6B6B6B] block mb-1.5">Video Source *</label>
                   <div className="space-y-3">
                      <Input 
                        value={videoUrl} 
                        onChange={e => { setVideoUrl(e.target.value); setVideoFile(null); }}
                        placeholder="Direct URL or YouTube link"
                        className="h-11"
                      />
                      <div className="relative">
                        <input 
                          type="file" id="video-upload" className="hidden" accept="video/*"
                          onChange={e => { if(e.target.files) { setVideoFile(e.target.files[0]); setVideoUrl(""); } }} 
                        />
                        <Button 
                          asChild variant="outline" 
                          className="w-full h-11 border-dashed border-[#E8E4DF] hover:border-[#1A1A1A] hover:bg-gray-50"
                        >
                          <label htmlFor="video-upload" className="cursor-pointer">
                            <Upload className="w-4 h-4 mr-2" /> 
                            {videoFile ? videoFile.name : "System Upload (.mp4/mov, max 100MB)"}
                          </label>
                        </Button>
                      </div>
                      <p className="text-[10px] text-[#C8860A] font-medium italic">
                        Guidance: Upload vertical videos in 9:16 ratio (1080x1920px) for best display in Watch & Shop section.
                      </p>
                   </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                   <label className="text-xs font-bold uppercase tracking-widest text-[#6B6B6B] block mb-1.5">Thumbnail Manifest</label>
                   <div className="aspect-[9/16] bg-[#FAF9F6] border border-[#E8E4DF] rounded-xl overflow-hidden relative group">
                      {(thumbnailFile || thumbnailUrl) ? (
                        <img src={thumbnailFile ? URL.createObjectURL(thumbnailFile) : thumbnailUrl} className="w-full h-full object-cover" />
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 p-8 text-center">
                           <ImageIcon className="w-8 h-8 mb-2 opacity-20" />
                           <p className="text-[10px] uppercase font-bold tracking-widest opacity-40">Aspect 9:16</p>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <input 
                          type="file" id="thumb-upload" className="hidden" accept="image/*"
                          onChange={e => { if(e.target.files) setThumbnailFile(e.target.files[0]); }} 
                        />
                        <label htmlFor="thumb-upload" className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold cursor-pointer">
                          Upload Custom
                        </label>
                      </div>
                   </div>
                   <Input 
                      value={thumbnailUrl} 
                      onChange={e => setThumbnailUrl(e.target.value)}
                      placeholder="Or enter image URL"
                      className="mt-3 text-xs"
                   />
                </div>
              </div>
            </div>

            <div className="border-t border-[#E8E4DF] pt-6">
               <label className="text-xs font-bold uppercase tracking-widest text-[#6B6B6B] block mb-3">Link to Product Focus</label>
               <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input 
                    value={productSearch} onChange={e => setProductSearch(e.target.value)}
                    placeholder="Search product matrix..." className="pl-10"
                  />
               </div>
               
               <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar h-28">
                  {products.map(p => (
                    <div 
                      key={p.id} 
                      onClick={() => setSelectedProductId(p.id)}
                      className={cn(
                        "flex-shrink-0 w-44 p-2 rounded-lg border flex items-center gap-3 cursor-pointer transition-all",
                        selectedProductId === p.id ? "bg-[#C8860A]/10 border-[#C8860A]" : "bg-white border-[#E8E4DF] hover:border-gray-400"
                      )}
                    >
                      <div className="w-12 h-12 rounded bg-gray-50 flex-shrink-0 overflow-hidden border">
                        <img src={p.product_media?.[0]?.media_url || "/placeholder.svg"} className="w-full h-full object-cover" />
                      </div>
                      <p className="text-[11px] font-bold text-[#1A1A1A] line-clamp-2">{p.name}</p>
                    </div>
                  ))}
               </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#E8E4DF]">
               <div className="flex items-center gap-2">
                 <input 
                   type="checkbox" id="active-video" checked={isVideoActive} onChange={e => setIsVideoActive(e.target.checked)}
                   className="w-4 h-4 accent-[#1A1A1A]"
                 />
                 <label htmlFor="active-video" className="text-xs font-bold text-[#1A1A1A]">Is Active Reality</label>
               </div>
            </div>
          </div>

          <div className="p-6 bg-[#FAF9F6] border-t border-[#E8E4DF] flex justify-end gap-3">
             <Button variant="ghost" onClick={resetVideoForm}>Cancel</Button>
             <Button 
               onClick={() => videoMutation.mutate()}
               disabled={videoMutation.isPending || !videoTitle || (!videoUrl && !videoFile)}
               className="bg-[#1A1A1A] text-white px-10 h-11"
             >
               {videoMutation.isPending ? "Transmitting..." : "Establish Node"}
             </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Category Form Modal */}
      <Dialog open={showCategoryForm} onOpenChange={(open) => !open && resetCategoryForm()}>
        <DialogContent className="max-w-md p-0">
           <DialogHeader className="p-6 border-b">
             <DialogTitle>{editingCategory ? "Edit Category" : "Establish New Category"}</DialogTitle>
           </DialogHeader>
           <div className="p-6 space-y-4">
              <div>
                <label className="text-xs font-bold uppercase mb-1 block text-gray-500">Name</label>
                <Input value={categoryName} onChange={e => setCategoryName(e.target.value)} placeholder="e.g., Installation Guides" />
              </div>
              <div>
                <label className="text-xs font-bold uppercase mb-1 block text-gray-500">Slug (optional)</label>
                <Input value={categorySlug} onChange={e => setCategorySlug(e.target.value)} placeholder="e.g., installation-guides" />
              </div>
              <div>
                <label className="text-xs font-bold uppercase mb-1 block text-gray-500">Sort Order</label>
                <Input type="number" value={categorySortOrder} onChange={e => setCategorySortOrder(parseInt(e.target.value))} />
              </div>
           </div>
           <div className="p-6 bg-gray-50 flex justify-end gap-2">
              <Button variant="ghost" onClick={resetCategoryForm}>Cancel</Button>
              <Button onClick={() => categoryMutation.mutate()} disabled={categoryMutation.isPending || !categoryName}>
                Save Category
              </Button>
           </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
