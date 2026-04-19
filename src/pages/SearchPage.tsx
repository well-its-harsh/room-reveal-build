import { useState, useCallback, useEffect, useMemo } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search,
  Grid, 
  List, 
  X, 
  Filter,
  PackageSearch,
  ArrowRight
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import ProductCard from "@/components/ProductCard";
import Fuse from "fuse.js";
import { getCategoryKeywords, enrichProductWithKeywords } from "@/utils/searchKeywords";
import { useSearchData } from "@/hooks/useSearchData";
import { track } from "@/lib/analytics";

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Search Param State
  const initialQuery = searchParams.get("q") || "";
  const sortOption = searchParams.get("sort") || "featured";
  const isCompareMode = searchParams.get("compare") === "true";
  const isListView = searchParams.get("viewAs") === "list";

  // Local State
  const [queryInput, setQueryInput] = useState(initialQuery);
  const [filterOpen, setFilterOpen] = useState(false);
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedInstallation, setSelectedInstallation] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);
  
  // Fuzzy Search Data State
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [allCollections, setAllCollections] = useState<any[]>([]);
  const { data: searchData, isLoading: isLoadingData } = useSearchData();

  useEffect(() => {
    if (searchData) {
      setAllProducts(searchData.products);
      setAllCollections(searchData.collections);
    }
  }, [searchData]);

  // Fuse instances
  const productFuse = useMemo(() => new Fuse(allProducts, {
    keys: [
      { name: 'name', weight: 0.6 },
      { name: 'search_keywords', weight: 0.3 },
      { name: 'categories.name', weight: 0.2 },
      { name: 'category.name', weight: 0.2 },
      { name: 'brand', weight: 0.15 },
      { name: 'description', weight: 0.05 }
    ],
    threshold: 0.4,
    includeScore: true,
    minMatchCharLength: 2,
    ignoreLocation: true
  }), [allProducts]);

  const collectionFuse = useMemo(() => new Fuse(allCollections, {
    keys: [{ name: 'name', weight: 1.0 }],
    threshold: 0.3,
    includeScore: true,
    minMatchCharLength: 2
  }), [allCollections]);

  // Search Results & Filtering
  const { results: filteredResults, closest } = useMemo(() => {
    if (!initialQuery) return { results: [], closest: null };
    
    // 1. Initial fuzzy search
    const fuzzyRes = productFuse.search(initialQuery).map(r => r.item);
    
    // 2. Apply explicit filters on top of search results
    let result = [...fuzzyRes];

    if (activeCategory !== "all") {
      result = result.filter(p => (p.categories?.slug || p.category?.slug) === activeCategory);
    }

    if (selectedBrands.length > 0) {
      result = result.filter(p => selectedBrands.includes(p.brand));
    }

    if (priceRange[0] > 0 || priceRange[1] < 200000) {
      result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
    }

    // In-stock filtering
    if (inStockOnly) {
       // result = result.filter(p => p.inventory && p.inventory[0]?.quantity > 0);
    }

    if (result.length === 0 && fuzzyRes.length > 0) {
       // All search results were filtered out
       return { results: [], closest: null };
    }

    if (result.length === 0 && fuzzyRes.length === 0) {
      // Find closest match for "Did you mean?"
      const suggestions = productFuse.search(initialQuery, { limit: 1 });
      return { results: [], closest: suggestions[0]?.item || null };
    }

    return { results: result, closest: null };
  }, [initialQuery, productFuse, activeCategory, selectedBrands, priceRange, inStockOnly]);

  const categoryResults = useMemo(() => {
    if (!initialQuery) return [];
    return collectionFuse.search(initialQuery).map(r => r.item);
  }, [initialQuery, collectionFuse]);

  // Update input text if URL changes
  useEffect(() => {
    setQueryInput(initialQuery);
  }, [initialQuery]);

  // Handle Search Submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!queryInput.trim()) return;
    const next = new URLSearchParams(searchParams);
    next.set("q", queryInput.trim());
    setSearchParams(next);
    
    track('search', { 
      query: queryInput.trim(), 
      results_count: filteredResults.length 
    });
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

  return (
    <div className="bg-[#F7F5F2] min-h-screen pb-20 pt-8 mt-[72px]">
      <div className="container">
        
        {/* 1. LARGE SEARCH BAR & TITLE */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h1 className="font-serif text-[32px] md:text-[40px] font-bold text-[#1A1A1A] mb-8">
            {initialQuery ? `Search Results for "${initialQuery}"` : "Search Our Collection"}
          </h1>
          
          <form onSubmit={handleSearch} className="relative w-full shadow-lg rounded-full overflow-hidden border border-[#E8E4DF] bg-white transition-all focus-within:ring-2 focus-within:ring-[#C8860A]">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-[#999]" />
            <input
              type="text"
              className="w-full h-16 pl-16 pr-6 text-lg bg-transparent border-none outline-none text-[#1A1A1A] placeholder:text-[#999]"
              placeholder="Search by product, category, or brand..."
              value={queryInput}
              onChange={(e) => setQueryInput(e.target.value)}
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#C8860A] text-white px-6 h-10 rounded-full font-bold text-[13px] hover:bg-[#a66f08] transition-colors">
              Search
            </button>
          </form>
        </div>

        {initialQuery && (
          <>
            {/* 2. RESULTS SUMMARY & CONTROLS */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 bg-white p-3 rounded-lg border border-[#E8E4DF]">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <p className="text-[14px] text-[#6B6B6B] px-2 font-medium">
                  Found <span className="text-[#1A1A1A] font-bold">{filteredResults.length}</span> products
                </p>
                <button 
                  onClick={() => setFilterOpen(true)}
                  className="flex items-center justify-center gap-2 px-4 h-10 bg-white border border-[#E8E4DF] rounded hover:border-[#1A1A1A] transition-colors text-[13px] font-medium"
                >
                  <Filter className="w-4 h-4" /> Filters
                </button>
              </div>

              <div className="flex items-center gap-4 ml-auto">
                {/* Compare Button */}
                <button
                  onClick={() => {
                    const next = new URLSearchParams(searchParams);
                    if (isCompareMode) next.delete("compare");
                    else next.set("compare", "true");
                    setSearchParams(next);
                  }}
                  className={`px-4 h-10 text-[13px] font-medium rounded border transition-all ${
                    isCompareMode ? "bg-[#1A1A1A] text-white border-[#1A1A1A]" : "bg-white border-[#E8E4DF] text-[#6B6B6B] hover:border-[#1A1A1A]"
                  }`}
                >
                  Compare {isCompareMode && compareIds.length > 0 ? `(${compareIds.length})` : ""}
                </button>

                {isCompareMode && compareIds.length >= 2 && (
                  <button
                    onClick={() => navigate(`/compare?ids=${compareIds.join(",")}`)}
                    className="px-4 h-10 text-[13px] font-bold bg-[#C8860A] text-white rounded hover:bg-[#a66f08] transition-colors"
                  >
                    Compare Now →
                  </button>
                )}

                {/* View As */}
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

            {/* Collections matching results (if any) */}
            {categoryResults.length > 0 && (
              <div className="mb-8">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#6B6B6B] mb-4">Related Collections</p>
                <div className="flex flex-wrap gap-3">
                  {categoryResults.map(c => (
                    <Link 
                      key={c.slug} 
                      to={c.image_url ? `/category/${c.slug}` : `/area/${c.slug}`}
                      className="group flex items-center gap-3 bg-white border border-[#E8E4DF] px-4 py-2 rounded-full hover:border-[#C8860A] transition-all"
                    >
                      <span className="text-[14px] font-medium text-[#1A1A1A] group-hover:text-[#C8860A]">{c.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#6B6B6B] group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* 3. PRODUCTS GRID */}
            {isLoadingData ? (
              <div className={`grid gap-4 md:gap-5 ${isListView ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"}`}>
                {[1,2,3,4,5,6,7,8].map(i => (
                  <div key={i} className="bg-white border border-[#E8E4DF] rounded-xl h-[420px] animate-pulse">
                    <div className="h-[240px] bg-gray-100 rounded-t-xl" />
                  </div>
                ))}
              </div>
            ) : filteredResults.length > 0 ? (
              <div className={`grid gap-4 md:gap-5 ${isListView ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"}`}>
                {filteredResults.map((p: any, i: number) => (
                  <ProductCard 
                    key={p.id}
                    product={p} 
                    index={i} 
                    compareMode={isCompareMode}
                    isCompared={compareIds.includes(p.id)}
                    onCompareToggle={handleCompareToggle}
                    viewAs={isListView ? "list" : "grid"}
                  />
                ))}
              </div>
            ) : (
              /* NO RESULTS EMPTY STATE WITH "DID YOU MEAN?" */
              <div className="text-center py-20 bg-white border border-[#E8E4DF] rounded-xl max-w-4xl mx-auto px-4 mt-8 shadow-sm">
                <div className="w-24 h-24 bg-[#F7F5F2] rounded-full flex items-center justify-center mx-auto mb-6">
                  <PackageSearch className="w-10 h-10 text-[#C8860A]" />
                </div>
                <h3 className="text-2xl font-serif text-[#1A1A1A] font-bold mb-3">No direct results for "{initialQuery}"</h3>
                
                {closest ? (
                  <div className="mb-8">
                    <p className="text-[#6B6B6B] text-[15px] mb-4">Did you mean <button onClick={() => { setQueryInput(closest.name); navigate(`/search?q=${encodeURIComponent(closest.name)}`); }} className="text-[#C8860A] font-bold hover:underline">"{closest.name}"</button>?</p>
                    <div className="mt-8 border-t border-[#E8E4DF] pt-8">
                      <p className="text-[13px] font-bold uppercase tracking-wider text-[#1A1A1A] mb-6 text-left">Products you might like</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                         {allProducts.filter(p => p.category_id === closest.category_id).slice(0, 3).map((p, i) => (
                           <ProductCard key={p.id} product={p} index={i} />
                         ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-[#6B6B6B] text-[15px] mb-8 max-w-md mx-auto">
                    We couldn't find any products matching your search. Try checking for typos or searching for a broader term.
                  </p>
                )}
                
                <div className="border-t border-[#E8E4DF] pt-8 mt-6">
                  <p className="text-[13px] font-bold uppercase tracking-wider text-[#1A1A1A] mb-4">Explore our main categories</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {allCollections.slice(0, 6).map(cat => (
                      <Link 
                        key={cat.slug} 
                        to={cat.image_url ? `/category/${cat.slug}` : `/area/${cat.slug}`}
                        className="px-5 py-2.5 bg-[#F7F5F2] text-[#1A1A1A] text-[14px] font-medium rounded-full hover:bg-[#E8E4DF] hover:text-[#C8860A] transition-colors"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
        
        {!initialQuery && (
          <div className="text-center py-20 max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-white shadow-xl rounded-2xl flex items-center justify-center mx-auto mb-8 animate-bounce">
              <Search className="w-10 h-10 text-[#C8860A]" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-[#1A1A1A] mb-4">Discover Luxury for Your Home</h2>
            <p className="text-[16px] text-[#6B6B6B]">Start typing above to search our curated collections of premium tiles and hardware.</p>
          </div>
        )}

      </div>

      {/* FILTER SIDEBAR OVERLAY */}
      <AnimatePresence>
        {filterOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[200]"
              onClick={() => setFilterOpen(false)}
            />
            <motion.div 
              initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[340px] max-w-[85vw] bg-white z-[210] shadow-2xl flex flex-col"
            >
              <div className="p-5 border-b border-[#E8E4DF] flex justify-between items-center bg-[#F7F5F2]">
                <h3 className="font-serif text-[20px] font-bold">Filters</h3>
                <button onClick={() => setFilterOpen(false)} className="p-1 hover:bg-gray-200 rounded-full transition"><X className="w-5 h-5" /></button>
              </div>
              <div className="flex-1 min-h-0 overflow-y-auto p-5 space-y-6 flex flex-col">
                 {/* Categories */}
                 <div>
                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A] mb-3">Categories</h3>
                  <div className="space-y-1">
                    <button
                      onClick={() => setActiveCategory("all")}
                      className={`w-full text-left px-3 py-2 rounded text-[13px] transition-all ${
                        activeCategory === "all" ? "bg-[#C8860A] text-white" : "text-[#6B6B6B] hover:bg-[#F7F5F2]"
                      }`}
                    >
                      All Categories
                    </button>
                    {allCollections.filter(c => c.slug).slice(0, 10).map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.slug)}
                        className={`w-full text-left px-3 py-2 rounded text-[13px] transition-all ${
                          activeCategory === cat.slug ? "bg-[#C8860A] text-white" : "text-[#6B6B6B] hover:bg-[#F7F5F2]"
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="pt-4 border-t border-[#E8E4DF]">
                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A] mb-3">Price Range</h3>
                  <div className="px-2 space-y-4">
                    <input 
                      type="range" min="0" max="200000" step="5000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-1.5 bg-[#E8E4DF] rounded-lg appearance-none cursor-pointer accent-[#C8860A]"
                    />
                    <div className="flex justify-between text-[11px] font-medium text-[#6B6B6B]">
                      <span>₹0</span>
                      <span>Up to ₹{priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Colors */}
                <div className="pt-4 border-t border-[#E8E4DF]">
                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A] mb-3">Finish / Color</h3>
                  <div className="flex flex-wrap gap-2 px-1">
                    {["Chrome", "Gold", "Black", "Rose Gold", "White"].map(color => (
                      <button
                        key={color}
                        onClick={() => setSelectedColors(prev => prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color])}
                        className={`px-3 py-1.5 rounded-full text-[11px] border transition-all ${
                          selectedColors.includes(color) ? "bg-[#1A1A1A] text-white border-[#1A1A1A]" : "border-[#E8E4DF] text-[#6B6B6B] hover:border-[#C8860A]"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Material */}
                <div className="pt-4 border-t border-[#E8E4DF]">
                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A] mb-3">Material</h3>
                  <div className="space-y-1">
                    {["Brass", "Ceramic", "Stainless Steel", "Solid Wood"].map(mat => (
                      <label key={mat} className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-[#F7F5F2] cursor-pointer">
                        <input 
                          type="checkbox" 
                          checked={selectedMaterials.includes(mat)}
                          onChange={e => setSelectedMaterials(prev => e.target.checked ? [...prev, mat] : prev.filter(m => m !== mat))}
                          className="w-4 h-4 rounded border-[#E8E4DF] text-[#C8860A]"
                        />
                        <span className="text-[13px] text-[#6B6B6B]">{mat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Installation */}
                <div className="pt-4 border-t border-[#E8E4DF]">
                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A] mb-3">Installation</h3>
                  <div className="space-y-1">
                    {["Wall Mounted", "Deck Mounted", "Floor Standing"].map(inst => (
                      <label key={inst} className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-[#F7F5F2] cursor-pointer">
                        <input 
                          type="checkbox" 
                          checked={selectedInstallation.includes(inst)}
                          onChange={e => setSelectedInstallation(prev => e.target.checked ? [...prev, inst] : prev.filter(i => i !== inst))}
                          className="w-4 h-4 rounded border-[#E8E4DF] text-[#C8860A]"
                        />
                        <span className="text-[13px] text-[#6B6B6B]">{inst}</span>
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
                  Close
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
