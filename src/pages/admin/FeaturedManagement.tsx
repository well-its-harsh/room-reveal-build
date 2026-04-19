import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Search, GripVertical, X, Video as VideoIcon, Trash2, Plus, PlaySquare, Link as LinkIcon } from "lucide-react";
import { toast } from "sonner";

function FeaturedProductsTab() {
  const [featuredProducts, setFeaturedProducts] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchFeatured = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*,categories(*),product_media(*)")
      .eq("is_featured", true)
      .order("created_at", { ascending: false });
    
    if (data) setFeaturedProducts(data);
    setIsLoading(false);
  };

  useEffect(() => { fetchFeatured(); }, []);

  useEffect(() => {
    const search = async () => {
      let q = supabase
        .from("products")
        .select("*,categories(*),product_media(*)")
        .eq("is_featured", false)
        .limit(20);
      
      if (searchQuery.trim()) {
        q = q.ilike("name", `%${searchQuery}%`);
      }
      
      const { data } = await q;
      if (data) setSearchResults(data);
    };
    const to = setTimeout(search, 300);
    return () => clearTimeout(to);
  }, [searchQuery, featuredProducts]);

  const [draggedIdx, setDraggedIdx] = useState<number | null>(null);

  const handleDrop = async (dropIdx: number) => {
    if (draggedIdx === null || draggedIdx === dropIdx) return;
    const newItems = [...featuredProducts];
    const item = newItems.splice(draggedIdx, 1)[0];
    newItems.splice(dropIdx, 0, item);
    
    const updated = newItems.map((p, i) => ({ ...p, sort_order: i }));
    setFeaturedProducts(updated);

    const updates = updated.map(p => supabase.from("products").update({ sort_order: p.sort_order }).eq("id", p.id));
    await Promise.all(updates);
    toast.success("Display order saved");
  };

  const toggleField = async (product: any, field: string, value: boolean) => {
    const newItems = featuredProducts.map(p => p.id === product.id ? { ...p, [field]: value } : p);
    if (field === 'is_featured' && !value) {
      setFeaturedProducts(newItems.filter(p => p.id !== product.id));
    } else {
      setFeaturedProducts(newItems);
    }
    const { error } = await supabase.from("products").update({ [field]: value }).eq("id", product.id);
    if (!error) toast.success(`Updated ${product.name}`);
    else toast.error("Failed to update");
  };

  const addToFeatured = async (product: any) => {
    const newSort = featuredProducts.length > 0 ? Math.max(...featuredProducts.map(p => p.sort_order || 0)) + 1 : 0;
    const { error } = await supabase.from("products").update({ is_featured: true, sort_order: newSort }).eq("id", product.id);
    if (!error) {
      toast.success(`${product.name} added to featured`);
      setSearchQuery("");
      fetchFeatured();
    }
  };

  const updateSortOrder = async (product: any, evt: any) => {
    const newSort = parseInt(evt.target.value);
    if (isNaN(newSort)) return;
    const newItems = featuredProducts.map(p => p.id === product.id ? { ...p, sort_order: newSort } : p).sort((a,b) => (a.sort_order || 0) - (b.sort_order || 0));
    setFeaturedProducts(newItems);
    await supabase.from("products").update({ sort_order: newSort }).eq("id", product.id);
    toast.success("Sort order updated");
  };

  return (
    <div className="space-y-8 animate-in fade-in">
      <div className="bg-white p-6 rounded-xl border border-[#E8E4DF] shadow-sm overflow-hidden">
        <h2 className="text-lg font-serif font-bold mb-2">Add to Featured</h2>
        <div className="relative mt-2 mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B6B6B]" />
          <input 
            type="text" 
            placeholder="Search all products..." 
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-[#E8E4DF] rounded-lg focus:outline-none focus:border-[#C8860A] text-sm"
          />
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
          {searchResults.length === 0 ? (
            <div className="text-sm text-[#6B6B6B]">No products found to add.</div>
          ) : searchResults.map(p => (
            <div key={p.id} className="min-w-[160px] w-[160px] border border-[#E8E4DF] rounded-lg p-3 bg-white flex flex-col shrink-0 relative hover:border-[#C8860A] transition-colors">
              <button onClick={() => addToFeatured(p)} className="absolute top-2 right-2 w-7 h-7 bg-green-500 hover:bg-green-600 text-white rounded flex items-center justify-center shadow z-10 transition-colors" title="Add to Featured">
                <Plus className="w-5 h-5" />
              </button>
              <img src={p.product_media?.[0]?.media_url || "/placeholder.svg"} className="w-full h-24 object-cover rounded bg-[#F7F5F2] mb-3" />
              <h3 className="font-bold text-xs truncate" title={p.name}>{p.name}</h3>
              <p className="text-[10px] text-[#6B6B6B] mt-1 truncate">{(p.categories as any)?.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-[#E8E4DF] shadow-sm overflow-hidden flex flex-col">
        {isLoading ? (
          <div className="p-8 text-center text-[#6B6B6B]">Loading...</div>
        ) : featuredProducts.length === 0 ? (
          <div className="p-8 text-center text-[#6B6B6B]">No featured products. Search and add some above.</div>
        ) : (
          featuredProducts.map((p, idx) => (
            <div 
              key={p.id} 
              draggable 
              onDragStart={(e) => { setDraggedIdx(idx); e.dataTransfer.effectAllowed = 'move'; }}
              onDragOver={(e) => { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; }}
              onDrop={(e) => { e.preventDefault(); handleDrop(idx); }}
              className="flex flex-wrap items-center gap-4 p-4 border-b border-[#E8E4DF] hover:bg-[#F7F5F2] bg-white transition-colors"
            >
              <div className="cursor-grab hover:text-[#C8860A] opacity-50 hover:opacity-100 p-1"><GripVertical className="w-5 h-5" /></div>
              <img src={p.product_media?.[0]?.media_url || "/placeholder.svg"} className="w-12 h-12 object-cover rounded bg-[#F7F5F2] shrink-0" />
              <div className="flex-1 min-w-[200px]">
                <div className="font-bold text-[14px]">{p.name}</div>
                <div className="text-[11px] text-[#6B6B6B] uppercase tracking-wider">{(p.categories as any)?.name} • ₹{p.price.toLocaleString("en-IN")}</div>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-[#1A1A1A]">
                  <input type="checkbox" checked={p.is_featured} onChange={e => toggleField(p, "is_featured", e.target.checked)} className="w-4 h-4 accent-[#C8860A]" />
                  Best Seller
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-[#1A1A1A]">
                  <input type="checkbox" checked={!!p.is_new_arrival} onChange={e => toggleField(p, "is_new_arrival", e.target.checked)} className="w-4 h-4 accent-[#C8860A]" />
                  New Arrival
                </label>
                
                <div className="flex items-center gap-2 text-xs font-bold text-[#6B6B6B]">
                  Sort: <input type="number" value={p.sort_order || 0} onChange={(e) => updateSortOrder(p, e)} onKeyDown={e => e.stopPropagation()} className="w-16 px-1 py-0.5 border border-[#E8E4DF] rounded text-center" />
                </div>

                <button onClick={() => toggleField(p, "is_featured", false)} className="p-2 text-red-500 hover:bg-red-50 rounded" title="Remove from featured">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function FeaturedVideosTab() {
  const [videos, setVideos] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Custom Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingVideo, setEditingVideo] = useState<any>(null);
  
  const [vUrl, setVUrl] = useState("");
  const [vTitle, setVTitle] = useState("");
  const [vThumb, setVThumb] = useState("");
  const [vProductId, setVProductId] = useState<string | null>(null);
  const [vIsActive, setVIsActive] = useState(true);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [selectedProductInfo, setSelectedProductInfo] = useState<any>(null);

  const fetchVideos = async () => {
    const { data, error } = await supabase
      .from("featured_videos")
      .select("*,products(*)")
      .order("sort_order", { ascending: true });
    
    if (data) setVideos(data);
    setIsLoading(false);
  };

  useEffect(() => { fetchVideos(); }, []);

  // Use a debounced effect for product search in modal
  useEffect(() => {
    const search = async () => {
      let q = supabase
        .from("products")
        .select("id,name,categories(*),product_media(*)")
        .limit(20);
        
      if (searchQuery.trim()) {
        q = q.ilike("name", `%${searchQuery}%`);
      }
      
      const { data } = await q;
      if (data) setSearchResults(data);
    };
    const to = setTimeout(search, 300);
    return () => clearTimeout(to);
  }, [searchQuery, isModalOpen]);

  const [draggedIdx, setDraggedIdx] = useState<number | null>(null);

  const handleDrop = async (dropIdx: number) => {
    if (draggedIdx === null || draggedIdx === dropIdx) return;
    const newItems = [...videos];
    const item = newItems.splice(draggedIdx, 1)[0];
    newItems.splice(dropIdx, 0, item);
    
    const updated = newItems.map((v, i) => ({ ...v, sort_order: i }));
    setVideos(updated);

    const updates = updated.map(v => supabase.from("featured_videos").update({ sort_order: v.sort_order }).eq("id", v.id));
    await Promise.all(updates);
    toast.success("Display order saved");
  };

  const getYoutubeThumb = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&]{11})/);
    return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : "";
  };

  const openNewModal = () => {
    setEditingVideo(null);
    setVUrl(""); setVTitle(""); setVThumb(""); setVProductId(null); setVIsActive(true);
    setSearchQuery(""); setSelectedProductInfo(null);
    setIsModalOpen(true);
  };

  const saveVideo = async () => {
    if (!vUrl) return toast.error("Video URL is required");
    
    const actualThumb = vThumb || getYoutubeThumb(vUrl);
    
    // Extract title if youtube URL and empty title -- practically hard without API, so leave it empty or default
    const actualTitle = vTitle || "Featured Video";

    const payload = {
      video_url: vUrl,
      title: actualTitle,
      thumbnail_url: actualThumb,
      product_id: vProductId,
      is_active: vIsActive,
      sort_order: editingVideo ? editingVideo.sort_order : videos.length
    };

    if (editingVideo) {
      const { error } = await supabase.from("featured_videos").update(payload).eq("id", editingVideo.id);
      if (!error) toast.success("Video updated");
    } else {
      const { error } = await supabase.from("featured_videos").insert(payload);
      if (!error) toast.success("Video added");
      else toast.error("Database error. Did you run the SQL migration for featured_videos?");
    }
    
    setIsModalOpen(false);
    fetchVideos();
  };

  const toggleActive = async (v: any, val: boolean) => {
    const newItems = videos.map(item => item.id === v.id ? { ...item, is_active: val } : item);
    setVideos(newItems);
    await supabase.from("featured_videos").update({ is_active: val }).eq("id", v.id);
    toast.success("Status updated");
  };

  const deleteVideo = async (v: any) => {
    if (!confirm("Are you sure you want to delete this video?")) return;
    setVideos(videos.filter(item => item.id !== v.id));
    await supabase.from("featured_videos").delete().eq("id", v.id);
    toast.success("Video deleted");
  };

  const handleUrlBlur = () => {
    if (!vThumb && vUrl) {
      const thumb = getYoutubeThumb(vUrl);
      if (thumb) setVThumb(thumb);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-lg font-serif font-bold text-[#1A1A1A]">These are the videos shown in the Watch & Shop section on the homepage.</h2>
          <p className="text-sm text-[#6B6B6B] mt-1">Add video URLs and link them to a product.</p>
        </div>
        <button onClick={openNewModal} className="flex items-center gap-2 px-4 py-2 bg-[#1A1A1A] hover:bg-[#C8860A] text-white rounded-lg font-bold uppercase tracking-wider text-xs transition-colors">
          <Plus className="w-4 h-4" /> Add Video
        </button>
      </div>

      <div className="bg-white rounded-xl border border-[#E8E4DF] shadow-sm overflow-hidden mix-blend-multiply">
        {isLoading ? (
           <div className="p-8 text-center text-[#6B6B6B]">Loading...</div>
        ) : videos.length === 0 ? (
           <div className="p-8 text-center text-[#6B6B6B]">No videos yet. Add one above.</div>
        ) : (
          videos.map((v, idx) => (
            <div 
              key={v.id} 
              draggable 
              onDragStart={(e) => { setDraggedIdx(idx); e.dataTransfer.effectAllowed = 'move'; }}
              onDragOver={(e) => { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; }}
              onDrop={(e) => { e.preventDefault(); handleDrop(idx); }}
              className="flex flex-wrap items-center gap-4 p-4 border-b border-[#E8E4DF] hover:bg-[#F7F5F2] bg-white transition-colors"
            >
              <div className="cursor-grab hover:text-[#C8860A] opacity-50 hover:opacity-100 p-1"><GripVertical className="w-5 h-5" /></div>
              
              {v.thumbnail_url ? (
                <img src={v.thumbnail_url} className="w-16 h-12 object-cover rounded shadow-sm bg-black" alt="Thumb" />
              ) : (
                <div className="w-16 h-12 bg-gray-100 rounded flex items-center justify-center"><VideoIcon className="w-6 h-6 text-gray-300" /></div>
              )}

              <div className="flex-1 min-w-[200px]">
                <div className="font-bold text-[14px]">{(v.title || "Untitled")}</div>
                <div className="text-[11px] text-[#C8860A] uppercase tracking-wider mt-0.5 truncate max-w-sm">
                  {v.products ? <span className="flex items-center gap-1"><LinkIcon className="w-3 h-3"/> {v.products.name}</span> : <span className="text-[#6B6B6B] opacity-70">No product linked</span>}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-[#1A1A1A]">
                  <input type="checkbox" checked={v.is_active} onChange={e => toggleActive(v, e.target.checked)} className="w-4 h-4 accent-[#C8860A]" />
                  Active
                </label>
                
                <div className="text-xs font-bold text-[#6B6B6B] w-12 text-center">
                  #{v.sort_order}
                </div>

                <div className="flex items-center gap-1">
                  <button onClick={() => {
                    setEditingVideo(v);
                    setVUrl(v.video_url); setVTitle(v.title || ""); setVThumb(v.thumbnail_url || "");
                    setVProductId(v.product_id); setVIsActive(v.is_active);
                    setSelectedProductInfo(v.products ? { name: v.products.name } : null);
                    setIsModalOpen(true);
                  }} className="p-2 text-blue-600 hover:bg-blue-50 rounded" title="Edit">
                    Edit
                  </button>
                  <button onClick={() => deleteVideo(v)} className="p-2 text-red-500 hover:bg-red-50 rounded" title="Delete">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl p-6 md:p-8 max-w-xl w-full shadow-2xl relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-black">
              <X className="w-6 h-6" />
            </button>
            <h3 className="font-serif text-2xl font-bold mb-6">{editingVideo ? "Edit Video" : "Add New Video"}</h3>
            
            <div className="space-y-5 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-1">Video URL / Upload *</label>
                  <div className="flex gap-2">
                    <input type="text" value={vUrl} onChange={e => setVUrl(e.target.value)} onBlur={handleUrlBlur} placeholder="URL or upload" className="flex-1 w-full px-3 py-2 border border-[#E8E4DF] rounded-lg focus:border-[#C8860A] outline-none text-sm" />
                    <label className="bg-[#F7F5F2] border border-[#E8E4DF] px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100 flex items-center justify-center text-xs font-bold whitespace-nowrap">
                      <input type="file" accept="video/*" className="hidden" onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if(!file) return;
                        toast.loading("Uploading...", { id: "upload" });
                        const path = `videos/${Math.random().toString(36).substring(7)}_${file.name.replace(/[^a-zA-Z0-9.\-_]/g, '')}`;
                        const { error } = await supabase.storage.from("product-media").upload(path, file);
                        if (error) { toast.dismiss("upload"); return toast.error("Upload failed: " + error.message); }
                        const { data } = supabase.storage.from("product-media").getPublicUrl(path);
                        setVUrl(data.publicUrl);
                        toast.success("Uploaded!", { id: "upload" });
                      }}/>
                      Upload File
                    </label>
                  </div>
                  <p className="text-[10px] text-[#6B6B6B] mt-1">Direct system upload specified ratio: <span className="font-bold text-[#1A1A1A]">16:9</span> (landscape) or <span className="font-bold text-[#1A1A1A]">9:16</span> (vertical)</p>
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-1">Title (Optional)</label>
                  <input type="text" value={vTitle} onChange={e => setVTitle(e.target.value)} placeholder="Title" className="w-full px-3 py-2 border border-[#E8E4DF] rounded-lg focus:border-[#C8860A] outline-none text-sm" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold tracking-widest uppercase mb-1">Thumbnail URL</label>
                  <input type="text" value={vThumb} onChange={e => setVThumb(e.target.value)} placeholder="Auto-fetched if YouTube" className="w-full px-3 py-2 border border-[#E8E4DF] rounded-lg focus:border-[#C8860A] outline-none text-sm" />
                </div>
              </div>

              <div className="bg-[#F7F5F2] p-4 rounded-xl border border-[#E8E4DF] space-y-3">
                <label className="block text-xs font-bold tracking-widest uppercase">Link to Product</label>
                
                {selectedProductInfo ? (
                  <div className="flex items-center gap-3 bg-white px-3 py-2 border border-[#E8E4DF] rounded-lg">
                    <img src={selectedProductInfo.media_url || "/placeholder.svg"} className="w-10 h-10 object-cover rounded bg-[#F7F5F2]" />
                    <span className="font-bold text-[#1A1A1A] flex-1">{selectedProductInfo.name}</span>
                    <button onClick={() => { setVProductId(null); setSelectedProductInfo(null); }} className="text-red-500 text-xs hover:underline uppercase font-bold tracking-wider">Remove Link</button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B6B6B]" />
                      <input 
                        type="text" 
                        placeholder="Search to link product..." 
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 border border-[#E8E4DF] rounded-lg focus:border-[#C8860A] outline-none text-sm" 
                      />
                    </div>
                    
                    <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                      {searchResults.map(p => (
                        <div key={p.id} className="min-w-[120px] w-[120px] border border-[#E8E4DF] rounded-lg p-2 bg-white flex flex-col shrink-0 relative hover:border-[#C8860A] transition-colors">
                          <button onClick={() => {
                            setVProductId(p.id);
                            setSelectedProductInfo({ name: p.name, media_url: p.product_media?.[0]?.media_url });
                            setSearchQuery("");
                          }} className="absolute top-1 right-1 w-6 h-6 bg-[#1A1A1A] hover:bg-[#C8860A] text-white rounded flex items-center justify-center shadow z-10 transition-colors" title="Select">
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                          <img src={p.product_media?.[0]?.media_url || "/placeholder.svg"} className="w-full h-16 object-cover rounded bg-[#F7F5F2] mb-2" />
                          <h3 className="font-bold text-[10px] truncate leading-tight" title={p.name}>{p.name}</h3>
                          <p className="text-[9px] text-[#6B6B6B] mt-0.5 truncate">{(p.categories as any)?.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <label className="flex items-center gap-2 cursor-pointer text-sm font-bold mt-2">
                <input type="checkbox" checked={vIsActive} onChange={e => setVIsActive(e.target.checked)} className="w-4 h-4 accent-[#C8860A]" />
                Show on homepage (Active)
              </label>

              <div className="pt-4 flex justify-end gap-3 border-t border-[#E8E4DF] mt-6">
                <button onClick={() => setIsModalOpen(false)} className="px-5 py-2 hover:bg-gray-100 rounded-lg font-bold text-sm">Cancel</button>
                <button onClick={saveVideo} className="px-5 py-2 bg-[#1A1A1A] hover:bg-[#C8860A] text-white rounded-lg font-bold text-sm tracking-wider uppercase transition-colors">
                  Save Video
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function FeaturedManagement() {
  const [activeTab, setActiveTab] = useState<'products' | 'videos'>('products');
  return (
    <div className="p-6 md:p-10 mx-auto max-w-5xl space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-[#1A1A1A]">Featured & Watch Management</h1>
        <p className="text-[#6B6B6B] mt-2 text-sm leading-relaxed max-w-2xl">
          Control exactly what appears in the Best Sellers section and the Watch & Shop gallery on the homepage.
        </p>
      </div>

      <div className="flex space-x-1 border-b border-[#E8E4DF]">
        <button 
          onClick={() => setActiveTab('products')}
          className={`pb-3 px-6 text-sm font-bold uppercase tracking-widest border-b-2 transition-colors flex items-center gap-2 ${activeTab === 'products' ? 'border-[#C8860A] text-[#C8860A]' : 'border-transparent text-[#6B6B6B] hover:text-[#1A1A1A]'}`}
        >
          <PlaySquare className="w-4 h-4" />
          Best Sellers / Trending
        </button>
        <button 
          onClick={() => setActiveTab('videos')}
          className={`pb-3 px-6 text-sm font-bold uppercase tracking-widest border-b-2 transition-colors flex items-center gap-2 ${activeTab === 'videos' ? 'border-[#C8860A] text-[#C8860A]' : 'border-transparent text-[#6B6B6B] hover:text-[#1A1A1A]'}`}
        >
          <VideoIcon className="w-4 h-4" />
          Watch & Shop Videos
        </button>
      </div>

      <div className="pt-2">
        {activeTab === 'products' && <FeaturedProductsTab />}
        {activeTab === 'videos' && <FeaturedVideosTab />}
      </div>
    </div>
  );
}
