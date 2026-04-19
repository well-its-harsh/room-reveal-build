import { useSearchParams, useNavigate } from "react-router-dom";
import { useState, useMemo, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, SlidersHorizontal, X, Grid3X3, LayoutList, 
  ChevronDown, ArrowRight, Star, TrendingUp, Tag, Flame
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import ProductCard from "@/components/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BackButton from "@/components/BackButton";
import { getCategoryKeywords, enrichProductWithKeywords } from "@/utils/searchKeywords";

// FIX 4 — /products redesigned as "All Products" page matching search/category layout
// Fetches all is_published products with ranking (is_featured, sort_order)

type SortOption = "featured" | "newest" | "price-asc" | "price-desc" | "name" | "bestseller" | "on-sale";

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "featured", label: "Featured First" },
  { value: "bestseller", label: "Best Sellers" },
  { value: "on-sale", label: "On Sale" },
  { value: "newest", label: "Newest First" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name", label: "Name A–Z" },
];

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const initialQ = searchParams.get("q") || "";
  const initialCat = searchParams.get("category") || "all";
  const isListView = searchParams.get("viewAs") === "list";

  const [searchQuery, setSearchQuery] = useState(initialQ);
  const [queryInput, setQueryInput] = useState(initialQ);
  const [activeCategory, setActiveCategory] = useState(initialCat);
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [compareMode, setCompareMode] = useState(false);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [onSaleOnly, setOnSaleOnly] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedInstallation, setSelectedInstallation] = useState<string[]>([]);
  const keywordsMap = useMemo(() => getCategoryKeywords(), []);

  // Fetch all products with ranking
  const { data: allProducts = [], isLoading } = useQuery({
    queryKey: ["all-products-page"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*, categories(*), product_media(*), inventory(*)")
        .eq("status", "active")
        .order("is_featured", { ascending: false })
        .order("sort_order", { ascending: true, nullsFirst: false })
        .order("created_at", { ascending: false });
      if (error) throw error;
      return (data || []).map((p: any) => {
        const productWithCat = { ...p, category: p.categories };
        return enrichProductWithKeywords(productWithCat, keywordsMap);
      });
    },
  });

  // Fetch categories for filter
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await supabase.from("categories").select("*").order("name");
      return data || [];
    },
  });

  // Get distinct brands from products
  const brands = useMemo(() => {
    const b = new Set<string>();
    allProducts.forEach((p: any) => { if (p.brand) b.add(p.brand); });
    return Array.from(b).sort();
  }, [allProducts]);

  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  // Filter + sort products
  const filteredProducts = useMemo(() => {
    let result = [...allProducts];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.name?.toLowerCase().includes(q) ||
        p.brand?.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q) ||
        (p.category as any)?.name?.toLowerCase().includes(q) ||
        (p as any).search_keywords?.toLowerCase().includes(q)
      );
    }

    if (activeCategory !== "all") {
      result = result.filter(p => (p.category as any)?.slug === activeCategory);
    }

    if (selectedBrands.length > 0) {
      result = result.filter(p => selectedBrands.includes(p.brand));
    }

    if (inStockOnly) {
      result = result.filter(p => !p.inventory || p.inventory[0]?.quantity > 0);
    }

    if (onSaleOnly) {
      result = result.filter(p => p.is_on_sale);
    }

    if (priceRange[0] > 0 || priceRange[1] < 200000) {
      result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
    }

    // Mock filtering for Color, Material, Installation if not in DB
    // In real app, these would be columns in Supabase
    if (selectedColors.length > 0) {
      // result = result.filter(p => selectedColors.includes(p.color));
    }
    if (selectedMaterials.length > 0) {
      // result = result.filter(p => selectedMaterials.includes(p.material));
    }
    if (selectedInstallation.length > 0) {
      // result = result.filter(p => selectedInstallation.includes(p.installation_type));
    }

    switch (sortBy) {
      case "featured": result.sort((a, b) => (b.is_featured ? 1 : 0) - (a.is_featured ? 1 : 0)); break;
      case "bestseller": result.sort((a, b) => (b.is_bestseller ? 1 : 0) - (a.is_bestseller ? 1 : 0)); break;
      case "on-sale": result.sort((a, b) => (b.is_on_sale ? 1 : 0) - (a.is_on_sale ? 1 : 0)); break;
      case "newest": result.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()); break;
      case "price-asc": result.sort((a, b) => a.price - b.price); break;
      case "price-desc": result.sort((a, b) => b.price - a.price); break;
      case "name": result.sort((a, b) => a.name.localeCompare(b.name)); break;
    }

    return result;
  }, [allProducts, searchQuery, activeCategory, selectedBrands, inStockOnly, onSaleOnly, sortBy]);

  const handleCompareToggle = (id: string, checked: boolean) => {
    setCompareIds(prev => {
      if (checked) {
        if (prev.length >= 3) { alert("Max 3 products for comparison"); return prev; }
        return [...prev, id];
      }
      return prev.filter(x => x !== id);
    });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(queryInput.trim());
    const next = new URLSearchParams(searchParams);
    if (queryInput.trim()) next.set("q", queryInput.trim());
    else next.delete("q");
    setSearchParams(next);
  };

  const selectCategory = (slug: string) => {
    setActiveCategory(slug);
    const next = new URLSearchParams(searchParams);
    if (slug === "all") next.delete("category");
    else next.set("category", slug);
    setSearchParams(next);
  };

  const activeFilterCount = [
    activeCategory !== "all",
    selectedBrands.length > 0,
    selectedColors.length > 0,
    selectedMaterials.length > 0,
    selectedInstallation.length > 0,
    priceRange[0] > 0 || priceRange[1] < 200000,
    inStockOnly,
    onSaleOnly,
  ].filter(Boolean).length;

  const clearFilters = () => {
    setActiveCategory("all");
    setSelectedColors([]);
    setSelectedMaterials([]);
    setSelectedInstallation([]);
    setPriceRange([0, 200000]);
    setSearchQuery("");
    setQueryInput("");
    setSearchParams({});
  };

  const FilterPanel = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A] mb-3">Categories</h3>
        <div className="space-y-1 max-h-[250px] overflow-y-auto pr-1">
          <button
            onClick={() => selectCategory("all")}
            className={`w-full text-left px-3 py-2 rounded-lg text-[13px] transition-all ${
              activeCategory === "all" ? "bg-[#C8860A] text-white font-semibold" : "text-[#6B6B6B] hover:bg-[#F7F5F2] hover:text-[#1A1A1A]"
            }`}
          >
            All Products
          </button>
          {categories.slice(0, 15).map((cat: any) => (
            <button
              key={cat.id}
              onClick={() => selectCategory(cat.slug)}
              className={`w-full text-left px-3 py-2 rounded-lg text-[13px] transition-all ${
                activeCategory === cat.slug ? "bg-[#C8860A] text-white font-semibold" : "text-[#6B6B6B] hover:bg-[#F7F5F2] hover:text-[#1A1A1A]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Brands */}
      {brands.length > 0 && (
        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A] mb-3">Brands</h3>
          <div className="space-y-1 max-h-[200px] overflow-y-auto pr-1">
            {brands.map(brand => (
              <label key={brand} className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-[#F7F5F2] transition-colors cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={e => {
                    setSelectedBrands(prev => e.target.checked ? [...prev, brand] : prev.filter(b => b !== brand));
                  }}
                  className="w-4 h-4 rounded border-[#E8E4DF] text-[#C8860A] focus:ring-[#C8860A]"
                />
                <span className="text-[13px] text-[#6B6B6B]">{brand}</span>
              </label>
            ))}
          </div>
        </div>
      )}

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
        <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A] mb-3">Refine by Finish</h3>
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

      {/* Other Filters */}
      <div className="pt-4 border-t border-[#E8E4DF]">
        <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A] mb-3">Other Filters</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-[#F7F5F2] cursor-pointer">
            <input type="checkbox" checked={inStockOnly} onChange={e => setInStockOnly(e.target.checked)} className="w-4 h-4 rounded border-[#E8E4DF] text-[#C8860A]" />
            <span className="text-[13px] text-[#6B6B6B]">In stock only</span>
          </label>
          <label className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-[#F7F5F2] cursor-pointer">
            <input type="checkbox" checked={onSaleOnly} onChange={e => setOnSaleOnly(e.target.checked)} className="w-4 h-4 rounded border-[#E8E4DF] text-[#C8860A]" />
            <span className="text-[13px] text-[#6B6B6B]">On sale</span>
          </label>
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
        <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A] mb-3">Refine by Finish</h3>
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

      {activeFilterCount > 0 && (
        <button onClick={clearFilters} className="w-full text-[12px] text-[#C8860A] font-bold hover:underline py-2">
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <div className="bg-[#F7F5F2] min-h-screen">
      {/* Hero header */}
      <div className="bg-[#1A1A1A] pt-10 pb-12">
        <div className="container">
          <BackButton />
          <h1 className="font-serif text-white text-[36px] md:text-[48px] font-bold tracking-tight mb-2">All Products</h1>
          <p className="text-white/60 text-[15px] mb-8">Premium tiles, sanitaryware & hardware for modern homes</p>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="relative w-full max-w-2xl">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B6B6B]" />
            <input
              type="text"
              value={queryInput}
              onChange={e => setQueryInput(e.target.value)}
              placeholder="Search products, categories, brands..."
              className="w-full h-14 pl-14 pr-32 rounded-full bg-white text-[#1A1A1A] text-[15px] outline-none border-2 border-transparent focus:border-[#C8860A] transition-colors placeholder:text-[#999]"
            />
            <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#C8860A] text-white px-6 h-10 rounded-full font-bold text-[13px] hover:bg-[#a66f08] transition-colors">
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="container py-8">
        {/* Controls Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 bg-white p-3 rounded-xl border border-[#E8E4DF]">
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(true)}
              className="border-[#E8E4DF] text-[#1A1A1A] hover:border-[#C8860A]"
            >
              <SlidersHorizontal className="w-4 h-4 mr-1.5" />
              Filters
              {activeFilterCount > 0 && (
                <span className="ml-1.5 w-5 h-5 rounded-full bg-[#C8860A] text-white text-[10px] font-bold flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </Button>

            {!isLoading && (
              <span className="text-[13px] text-[#6B6B6B]">
                <span className="font-bold text-[#1A1A1A]">{filteredProducts.length}</span> products
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            {/* Compare toggle */}
            <button
              onClick={() => {
                setCompareMode(v => !v);
                if (compareIds.length > 0 && !compareMode) {
                  // open compare
                } else if (!compareMode === false) {
                  setCompareIds([]);
                }
              }}
              className={`px-4 py-2 text-[13px] font-medium rounded-lg border transition-all ${
                compareMode ? "bg-[#1A1A1A] text-white border-[#1A1A1A]" : "border-[#E8E4DF] text-[#6B6B6B] hover:border-[#1A1A1A]"
              }`}
            >
              Compare {compareMode && compareIds.length > 0 ? `(${compareIds.length})` : ""}
            </button>

            {compareMode && compareIds.length >= 2 && (
              <button
                onClick={() => navigate(`/compare?ids=${compareIds.join(",")}`)}
                className="px-4 py-2 text-[13px] font-bold bg-[#C8860A] text-white rounded-lg hover:bg-[#a66f08] transition-colors"
              >
                Compare Now →
              </button>
            )}

            {/* Sort */}
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as SortOption)}
              className="text-[13px] border border-[#E8E4DF] rounded-lg px-3 py-2 bg-white text-[#1A1A1A] outline-none focus:border-[#C8860A]"
            >
              {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>

            {/* View As */}
            <div className="flex border border-[#E8E4DF] rounded-lg overflow-hidden h-9">
              <button
                className={`w-10 flex items-center justify-center transition-colors ${!isListView ? "bg-[#1A1A1A] text-white" : "bg-white text-[#6B6B6B] hover:bg-gray-50"}`}
                onClick={() => { const n = new URLSearchParams(searchParams); n.delete("viewAs"); setSearchParams(n); }}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                className={`w-10 flex items-center justify-center border-l border-[#E8E4DF] transition-colors ${isListView ? "bg-[#1A1A1A] text-white" : "bg-white text-[#6B6B6B] hover:bg-gray-50"}`}
                onClick={() => { const n = new URLSearchParams(searchParams); n.set("viewAs", "list"); setSearchParams(n); }}
              >
                <LayoutList className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar — FIX 1 (scroll fix) */}
          <aside
            className="hidden lg:block w-64 flex-shrink-0"
            style={{
              position: "sticky",
              top: "80px",
              maxHeight: "calc(100vh - 80px)",
              overflowY: "auto",
            }}
          >
            <div className="bg-white rounded-xl border border-[#E8E4DF] p-5">
              <FilterPanel />
            </div>
          </aside>

          {/* Main Grid */}
          <div className="flex-1 min-w-0">
            {isLoading ? (
              <div className={`grid gap-4 ${isListView ? "grid-cols-1" : "grid-cols-2 md:grid-cols-3 xl:grid-cols-4"}`}>
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="space-y-3">
                    <Skeleton className="aspect-[4/3] rounded-xl" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                ))}
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className={`grid gap-4 md:gap-5 ${isListView ? "grid-cols-1" : "grid-cols-2 md:grid-cols-3 xl:grid-cols-4"}`}>
                {filteredProducts.map((p: any, i: number) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    index={i}
                    compareMode={compareMode}
                    isCompared={compareIds.includes(p.id)}
                    onCompareToggle={handleCompareToggle}
                    viewAs={isListView ? "list" : "grid"}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-xl border border-[#E8E4DF]">
                <Search className="w-12 h-12 text-[#C8860A] mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-serif font-bold text-[#1A1A1A] mb-2">No products found</h3>
                <p className="text-[#6B6B6B] mb-6">Try adjusting your filters or search terms.</p>
                <button onClick={clearFilters} className="px-6 py-2.5 bg-[#1A1A1A] text-white rounded hover:bg-[#333] transition text-[13px] font-bold">
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer — FIX 1 (mobile bottom sheet with internal scroll) */}
      <AnimatePresence>
        {showFilters && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowFilters(false)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl shadow-2xl flex flex-col"
              style={{ maxHeight: "85vh" }}
            >
              <div className="flex items-center justify-between p-5 border-b border-[#E8E4DF]">
                <h2 className="font-serif text-[20px] font-bold text-[#1A1A1A]">Filters</h2>
                <button onClick={() => setShowFilters(false)} className="p-1 hover:bg-gray-100 rounded-full transition">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-5">
                <FilterPanel />
              </div>
              <div className="p-5 border-t border-[#E8E4DF]">
                <button onClick={() => setShowFilters(false)} className="w-full bg-[#C8860A] text-white font-bold py-3 rounded-lg hover:bg-[#a66f08] transition text-[14px]">
                  Apply Filters ({filteredProducts.length} results)
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
