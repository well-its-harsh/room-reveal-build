import { useState, useMemo, useRef, useEffect } from "react";
import { useParams, Link, useSearchParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, 
  Grid, 
  List, 
  X, 
  ChevronLeft,
  Filter
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import { getAreaBySlug } from "@/data/categories";
import { useAreas } from "@/hooks/useProducts";
import ProductCard from "@/components/ProductCard";

export default function AreaPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // URL Params State
  const activeCategory = searchParams.get("category") || "";
  const sortOption = searchParams.get("sort") || "featured";
  const isCompareMode = searchParams.get("compare") === "true";
  const isListView = searchParams.get("viewAs") === "list";
  const activeColor = searchParams.get("color") || "";

  // Local State
  const [filterOpen, setFilterOpen] = useState(false);
  const [compareIds, setCompareIds] = useState<string[]>([]);

  // Lock body scroll when filter sidebar is open
  useEffect(() => {
    if (filterOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [filterOpen]);

  // Areas Query from DB
  const { data: dbAreas = [] } = useAreas();
  
  // Area Data - Merge DB data with hardcoded categories hierarchy
  const area = useMemo(() => {
    if (!slug) return undefined;
    const staticArea = getAreaBySlug(slug);
    if (!staticArea) return undefined;
    
    const dbArea = dbAreas.find(a => a.slug === slug);
    if (dbArea) {
      return {
        ...staticArea,
        image: dbArea.image_url || staticArea.image,
        heroImage: dbArea.hero_image_url || staticArea.heroImage || dbArea.image_url,
      };
    }
    return staticArea;
  }, [slug, dbAreas]);

  // Category scroll ref
  const catScrollRef = useRef<HTMLDivElement>(null);
  const scrollCats = (dir: 1 | -1) => {
    if (catScrollRef.current) {
      catScrollRef.current.scrollBy({ left: dir * 300, behavior: "smooth" });
    }
  };

  // Queries
  const { data: products = [], isLoading: productsLoading } = useQuery({
    queryKey: ["area-products", slug, activeCategory, sortOption],
    queryFn: async () => {
      if (!slug) return [];
      
      const q = supabase
        .from("products")
        .select(`
          *,
          product_media(*),
          inventory(*),
          category:categories(*)
        `)
        .eq("status", "active")
        .limit(100);
      
      const { data, error } = await q;
      if (error) {
        console.error("Products fetch error:", error);
        return [];
      }

      // Filter by area locally since DB categories might not have direct area link easily queryable via REST
      // The area provides a list of valid category slugs: area.categories.map(c => c.slug)
      const validCategorySlugs = area ? area.categories.map(c => c.slug) : [];
      let filtered = (data || []).filter((p: any) => {
        const pSlug = p.category?.slug || p.categories?.slug;
        return validCategorySlugs.includes(pSlug);
      });

      // If active category selected, filter further
      if (activeCategory) {
        filtered = filtered.filter((p: any) => {
          const pSlug = p.category?.slug || p.categories?.slug;
          return pSlug === activeCategory;
        });
      }

      return filtered;
    },
    enabled: !!slug && !!area,
  });

  const { data: filterOptions } = useQuery({
    queryKey: ["area-filters", slug],
    queryFn: async () => {
      return {
        types: ["Premium", "Standard", "Luxury"],
        colors: ["White", "Black", "Chrome", "Gold"],
        materials: ["Brass", "Ceramic", "Stainless Steel"],
      };
    },
    enabled: !!slug
  });

  const handleCatToggle = (catSlug: string) => {
    const next = new URLSearchParams(searchParams);
    if (activeCategory === catSlug) next.delete("category");
    else next.set("category", catSlug);
    setSearchParams(next);
  };

  const handleCompareToggle = (id: string, checked: boolean) => {
    setCompareIds(prev => {
      if (checked) {
        if (prev.length >= 3) {
          alert("Max 3 products allowed for comparison");
          return prev;
        }
        return [...prev, id];
      }
      return prev.filter(pId => pId !== id);
    });
  };

  if (!area) {
    return (
      <div className="container py-24 text-center">
        <h1 className="text-2xl font-serif mb-4">Area not found</h1>
        <Link to="/categories" className="text-[#C8860A] hover:underline">Browse all categories</Link>
      </div>
    );
  }

  const heroImage = area.heroImage || area.image || "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=1200";

  return (
    <div className="bg-[#F7F5F2] min-h-screen pb-20">
      {/* 1. HERO BANNER */}
      <div className="relative h-[400px] md:h-[500px] w-full bg-[#1A1A1A] flex items-center justify-center">
        <img 
          src={heroImage} 
          alt={area.name} 
          className="absolute inset-0 w-full h-full object-cover opacity-95"
          onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=1200"; }} 
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        
        <div className="relative z-10 text-center max-w-4xl px-4 mt-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-[#C8860A] text-[11px] font-bold uppercase tracking-[0.2em] mb-4 block">
              Explore {area.name}
            </span>
            <h1 className="font-serif text-[40px] md:text-[56px] font-bold text-white leading-tight">
              {area.name} Essentials Crafted for Everyday Comfort and Elegance
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="container mt-8">
        {/* 2. CATEGORY CARDS (Scrollable Row) */}
        {area.categories.length > 0 && (
          <div className="relative mb-12 group/cats">
            <button
              onClick={() => scrollCats(-1)}
              className="absolute -left-4 top-[40%] -translate-y-1/2 z-10 w-9 h-9 bg-white rounded-full border border-[#E8E4DF] shadow-sm flex items-center justify-center hover:border-[#C8860A] hover:text-[#C8860A] opacity-0 group-hover/cats:opacity-100 transition-all hidden md:flex"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div ref={catScrollRef} className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth pb-4 px-1">
              {area.categories.map(cat => (
                <div 
                  key={cat.slug}
                  onClick={() => handleCatToggle(cat.slug)}
                  className={`flex-shrink-0 w-[140px] md:w-[160px] cursor-pointer group flex flex-col items-center gap-3 transition-all ${
                    activeCategory === cat.slug ? "scale-105" : "hover:-translate-y-1"
                  }`}
                >
                  <div className={`w-full aspect-square rounded-full overflow-hidden bg-white border-2 transition-colors ${
                    activeCategory === cat.slug ? "border-[#C8860A] shadow-md" : "border-[#E8E4DF] group-hover:border-[#C8860A]/50"
                  }`}>
                    <img 
                      src={cat.image || "https://images.unsplash.com/photo-1584622112935-77ad9876a13d00?auto=format&fit=crop&q=80&w=400"} 
                      alt={cat.name}
                      onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=400"; }}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center w-full">
                    <h4 className={`text-[13px] font-medium line-clamp-2 leading-snug mb-2 ${
                      activeCategory === cat.slug ? "text-[#C8860A]" : "text-[#1A1A1A]"
                    }`}>
                      {cat.name}
                    </h4>
                    <span className="inline-block px-3 py-1 rounded border border-[#C8860A] text-[#C8860A] text-[10px] uppercase tracking-wider group-hover:bg-[#C8860A] group-hover:text-white transition-colors">
                      View
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollCats(1)}
              className="absolute -right-4 top-[40%] -translate-y-1/2 z-10 w-9 h-9 bg-white rounded-full border border-[#E8E4DF] shadow-sm flex items-center justify-center hover:border-[#C8860A] hover:text-[#C8860A] opacity-0 group-hover/cats:opacity-100 transition-all hidden md:flex"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* 3. PRODUCTS GRID CONTROLS */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 bg-white p-3 rounded-lg border border-[#E8E4DF]">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button 
              onClick={() => setFilterOpen(true)}
              className="flex items-center justify-center gap-2 px-4 h-10 bg-white border border-[#E8E4DF] rounded hover:border-[#1A1A1A] transition-colors text-[13px] font-medium"
            >
              <Filter className="w-4 h-4" /> Filters
            </button>

            <select 
              className="h-10 px-3 bg-white border border-[#E8E4DF] rounded text-[13px] font-medium focus:ring-0 focus:border-[#1A1A1A] outline-none"
              value={sortOption}
              onChange={(e) => {
                const next = new URLSearchParams(searchParams);
                next.set("sort", e.target.value);
                setSearchParams(next);
              }}
            >
              <option value="featured">Featured</option>
              <option value="bestselling">Best Selling</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="newest">Newest</option>
              <option value="az">Alphabetical (A-Z)</option>
            </select>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <label className="flex items-center gap-2 cursor-pointer">
              <span className="text-[13px] font-medium text-[#1A1A1A]">Compare</span>
              <div className="relative">
                <input 
                  type="checkbox" 
                  className="sr-only" 
                  checked={isCompareMode}
                  onChange={(e) => {
                    const next = new URLSearchParams(searchParams);
                    if (e.target.checked) next.set("compare", "true");
                    else {
                      next.delete("compare");
                      setCompareIds([]);
                    }
                    setSearchParams(next);
                  }}
                />
                <div className={`block w-10 h-6 rounded-full transition-colors ${isCompareMode ? "bg-[#C8860A]" : "bg-gray-300"}`} />
                <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${isCompareMode ? "translate-x-4" : ""}`} />
              </div>
            </label>

            <div className="flex border border-[#E8E4DF] rounded overflow-hidden h-9">
              <button 
                className={`w-10 flex items-center justify-center transition-colors ${!isListView ? "bg-[#1A1A1A] text-white" : "bg-white text-[#6B6B6B] hover:bg-gray-50"}`}
                onClick={() => {
                  const next = new URLSearchParams(searchParams);
                  next.delete("viewAs");
                  setSearchParams(next);
                }}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button 
                className={`w-10 flex items-center justify-center border-l border-[#E8E4DF] transition-colors ${isListView ? "bg-[#1A1A1A] text-white" : "bg-white text-[#6B6B6B] hover:bg-gray-50"}`}
                onClick={() => {
                  const next = new URLSearchParams(searchParams);
                  next.set("viewAs", "list");
                  setSearchParams(next);
                }}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* PRODUCTS GRID */}
        {productsLoading ? (
          <div className={`grid gap-4 md:gap-5 ${isListView ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-4"}`}>
            {[1,2,3,4].map(i => (
              <div key={i} className="bg-white border border-[#E8E4DF] rounded-xl h-[420px] animate-pulse">
                <div className="h-[240px] bg-gray-100 rounded-t-xl" />
              </div>
            ))}
          </div>
        ) : products.length > 0 ? (
          <div className={`grid gap-4 md:gap-5 ${isListView ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"}`}>
            {products.map((p: any, i: number) => (
              <div key={p.id}>
                <ProductCard 
                  product={p} 
                  index={i} 
                  compareMode={isCompareMode}
                  isCompared={compareIds.includes(p.id)}
                  onCompareToggle={handleCompareToggle}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white border border-[#E8E4DF] rounded-xl">
            <h3 className="text-lg font-serif mb-2">No products found for {activeCategory || area.name}</h3>
            <p className="text-[#6B6B6B] text-sm mb-6">Explore our curated collections by adjusting your filters.</p>
            <button 
              onClick={() => setSearchParams(new URLSearchParams())} 
              className="px-6 py-2 border border-[#C8860A] text-[#C8860A] rounded font-medium text-[13px] hover:bg-[#C8860A] hover:text-white transition"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* 4. ARTICLE TEASER / DESIGN TRENDS */}
      <div className="container mt-24 mb-10">
        <div className="bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-10 md:p-14">
              <span className="text-[#C8860A] text-[11px] font-bold uppercase tracking-widest mb-3 block">Insight Journal</span>
              <h2 className="font-serif text-[28px] md:text-[36px] font-bold text-white mb-4 leading-tight">
                7 Modern Design Trends You Should Know
              </h2>
              <p className="text-gray-400 font-body leading-relaxed mb-8 max-w-md">
                Discover how premier architects and interior designers are integrating raw textures, organic curves, and smart integrations to rethink how we experience physical space.
              </p>
              <button className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded hover:bg-white hover:text-[#1A1A1A] transition">
                Read the Editorial →
              </button>
            </div>
            <div className="h-[300px] md:h-full w-full">
              <img src="/assets/generated/hero-slide-2.jpg" className="w-full h-full object-cover grayscale opacity-80 mix-blend-luminosity hover:grayscale-0 hover:opacity-100 transition-all duration-700" alt="Design Trends" />
            </div>
          </div>
        </div>
      </div>

      {/* 5. FILTER SIDEBAR OVERLAY */}
      <AnimatePresence>
        {filterOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setFilterOpen(false)}
            />
            <motion.div 
              initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[340px] max-w-[85vw] bg-white z-50 shadow-2xl flex flex-col"
            >
              <div className="p-5 border-b border-[#E8E4DF] flex justify-between items-center bg-[#F7F5F2]">
                <h3 className="font-serif text-[20px] font-bold">Filters</h3>
                <button onClick={() => setFilterOpen(false)} className="p-1 hover:bg-gray-200 rounded-full transition"><X className="w-5 h-5" /></button>
              </div>
              <div className="flex-1 min-h-0 overflow-y-auto p-5 space-y-6 flex flex-col">
                <div>
                  <h4 className="text-[14px] font-bold mb-3 uppercase tracking-wider text-[#1A1A1A]">Material</h4>
                  <div className="space-y-2">
                    {filterOptions?.materials.map(m => (
                      <label key={m} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#C8860A] focus:ring-[#C8860A]" />
                        <span className="text-[14px] text-[#6B6B6B]">{m}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-5 border-t border-[#E8E4DF] bg-white">
                <button 
                  onClick={() => setFilterOpen(false)}
                  className="w-full bg-[#C8860A] text-white font-bold py-3 rounded hover:bg-[#a66f08] transition"
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* COMPARE PANEL */}
      <AnimatePresence>
        {isCompareMode && compareIds.length > 0 && (
          <motion.div 
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            className="fixed bottom-0 top-[auto] md:top-0 right-0 w-full md:w-[380px] bg-white shadow-[-10px_0_30px_rgba(0,0,0,0.1)] z-40 border-t md:border-l border-[#E8E4DF] flex flex-col pt-[72px]" 
          >
            <div className="p-4 bg-[#F7F5F2] border-b border-[#E8E4DF] flex justify-between items-center">
              <h3 className="font-bold text-[#1A1A1A] text-[15px]">Compare ({compareIds.length}/3)</h3>
              <button onClick={() => setCompareIds([])} className="text-[12px] text-red-600 hover:underline font-medium">Clear</button>
            </div>
            
            <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-3">
              {compareIds.map(id => {
                const p = products.find((x: any) => x.id === id);
                if (!p) return null;
                return (
                  <div key={id} className="flex gap-3 bg-white border border-[#E8E4DF] p-2 rounded relative">
                    <button 
                      onClick={() => handleCompareToggle(id, false)}
                      className="absolute -top-2 -right-2 w-5 h-5 bg-red-100 text-red-600 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition"
                    >
                      <X className="w-3 h-3" />
                    </button>
                    <img src={p.product_media?.[0]?.media_url || "/placeholder.svg"} className="w-16 h-16 object-cover rounded bg-[#F7F5F2]" />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[13px] font-medium text-[#1A1A1A] truncate">{p.name}</h4>
                      <span className="text-[14px] font-bold block mt-1">₹{p.price.toLocaleString("en-IN")}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="p-4 bg-white border-t border-[#E8E4DF]">
              <button 
                onClick={() => navigate(`/compare?ids=${compareIds.join(",")}`)}
                disabled={compareIds.length < 2}
                className="w-full bg-[#1A1A1A] disabled:bg-gray-300 text-white font-bold h-12 rounded flex items-center justify-center hover:bg-[#333] transition"
              >
                Compare Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
