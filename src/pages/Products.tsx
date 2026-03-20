import { useSearchParams } from "react-router-dom";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, X, Grid3X3, LayoutList, ChevronDown } from "lucide-react";
import { useProducts, useCategories } from "@/hooks/useProducts";
import ProductCard from "@/components/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type SortOption = "newest" | "price-asc" | "price-desc" | "name";

const quickSearches = ["Basin", "Toilet", "Shower", "Cabinet", "Tap", "Sink"];

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get("category") || "all";
  const [activeCategory, setActiveCategory] = useState(initialCat);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500000]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [arOnly, setArOnly] = useState(false);

  const { data: categories = [], isLoading: catLoading } = useCategories();
  const { data: rawProducts = [], isLoading: prodLoading } = useProducts(
    activeCategory !== "all" ? activeCategory : undefined
  );

  const selectCategory = (slug: string) => {
    setActiveCategory(slug);
    if (slug === "all") setSearchParams({});
    else setSearchParams({ category: slug });
  };

  const products = useMemo(() => {
    let filtered = [...rawProducts];
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q) ||
          p.category?.name?.toLowerCase().includes(q)
      );
    }
    filtered = filtered.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);
    if (inStockOnly) {
      filtered = filtered.filter((p) => !p.inventory?.length || p.inventory[0].quantity > 0);
    }
    if (arOnly) {
      filtered = filtered.filter((p) => p.ar_enabled);
    }
    switch (sortBy) {
      case "price-asc": filtered.sort((a, b) => a.price - b.price); break;
      case "price-desc": filtered.sort((a, b) => b.price - a.price); break;
      case "name": filtered.sort((a, b) => a.name.localeCompare(b.name)); break;
      default: filtered.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    }
    return filtered;
  }, [rawProducts, searchQuery, sortBy, priceRange, inStockOnly, arOnly]);

  const isLoading = catLoading || prodLoading;
  const activeFilterCount = [inStockOnly, arOnly, priceRange[0] > 0, priceRange[1] < 500000].filter(Boolean).length;

  const clearFilters = () => {
    setPriceRange([0, 500000]);
    setInStockOnly(false);
    setArOnly(false);
  };

  const FilterPanel = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="text-xs font-medium text-muted-foreground font-body uppercase tracking-wider mb-3">Category</h3>
        <div className="space-y-1">
          <button
            onClick={() => selectCategory("all")}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-body transition-colors ${activeCategory === "all" ? "bg-accent/10 text-accent font-medium" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}
          >
            All Products
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => selectCategory(cat.slug)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm font-body transition-colors ${activeCategory === cat.slug ? "bg-accent/10 text-accent font-medium" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs font-medium text-muted-foreground font-body uppercase tracking-wider mb-3">Price Range</h3>
        <div className="grid grid-cols-2 gap-2">
          <Input
            type="number"
            value={priceRange[0] || ""}
            onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
            placeholder="Min"
            className="font-body text-sm h-9"
            min={0}
          />
          <Input
            type="number"
            value={priceRange[1] === 500000 ? "" : priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 500000])}
            placeholder="Max"
            className="font-body text-sm h-9"
            min={0}
          />
        </div>
      </div>

      {/* Toggles */}
      <div>
        <h3 className="text-xs font-medium text-muted-foreground font-body uppercase tracking-wider mb-3">Availability</h3>
        <label className="flex items-center gap-2.5 font-body text-sm cursor-pointer py-1.5">
          <input type="checkbox" checked={inStockOnly} onChange={(e) => setInStockOnly(e.target.checked)} className="rounded border-input" />
          <span className="text-foreground">In stock only</span>
        </label>
        <label className="flex items-center gap-2.5 font-body text-sm cursor-pointer py-1.5">
          <input type="checkbox" checked={arOnly} onChange={(e) => setArOnly(e.target.checked)} className="rounded border-input" />
          <span className="text-foreground">AR preview available</span>
        </label>
      </div>

      {activeFilterCount > 0 && (
        <button onClick={clearFilters} className="text-xs text-accent font-body hover:underline">
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <div className="container py-6 md:py-12">
      {/* Header */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6">
        <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-1">Our Collection</h1>
        <p className="text-muted-foreground font-body text-sm">Premium sanitaryware curated for modern homes</p>
      </motion.div>

      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search basins, toilets, showers..."
          className="pl-10 pr-10 font-body h-11"
        />
        {searchQuery && (
          <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Quick searches */}
      {!searchQuery && (
        <div className="flex gap-2 flex-wrap mb-6">
          {quickSearches.map((q) => (
            <button
              key={q}
              onClick={() => setSearchQuery(q)}
              className="px-3 py-1.5 rounded-full text-xs font-body bg-secondary text-secondary-foreground hover:bg-muted transition-colors"
            >
              {q}
            </button>
          ))}
        </div>
      )}

      <div className="flex gap-8">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-56 flex-shrink-0">
          <div className="sticky top-24">
            <FilterPanel />
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Controls Row */}
          <div className="flex items-center justify-between gap-3 mb-5">
            <div className="flex items-center gap-2">
              {/* Mobile filter toggle */}
              <Button variant="outline" size="sm" onClick={() => setShowMobileFilters(true)} className="lg:hidden font-body">
                <SlidersHorizontal className="w-4 h-4 mr-1.5" />
                Filters
                {activeFilterCount > 0 && (
                  <span className="ml-1.5 w-5 h-5 rounded-full bg-accent text-accent-foreground text-[10px] font-bold flex items-center justify-center">{activeFilterCount}</span>
                )}
              </Button>
              {!isLoading && (
                <span className="text-xs text-muted-foreground font-body">
                  {products.length} product{products.length !== 1 ? "s" : ""}
                </span>
              )}
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="text-sm font-body border border-input rounded-lg px-3 py-2 bg-background text-foreground"
            >
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="name">Name A–Z</option>
            </select>
          </div>

          {/* Mobile category pills */}
          <div className="lg:hidden flex gap-2 overflow-x-auto pb-4 mb-4 scrollbar-hide">
            <button
              onClick={() => selectCategory("all")}
              className={`px-4 py-2 rounded-full text-xs font-medium font-body whitespace-nowrap transition-colors ${
                activeCategory === "all" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-muted"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => selectCategory(cat.slug)}
                className={`px-4 py-2 rounded-full text-xs font-medium font-body whitespace-nowrap transition-colors ${
                  activeCategory === cat.slug ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="space-y-3">
                  <Skeleton className="aspect-square rounded-xl" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))}
            </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
              {products.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground font-body mb-3">No products match your criteria.</p>
              <button
                onClick={() => { setSearchQuery(""); clearFilters(); selectCategory("all"); }}
                className="text-sm text-accent font-body hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {showMobileFilters && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMobileFilters(false)}
              className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed left-0 top-0 bottom-0 z-50 w-72 bg-background border-r border-border p-6 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading text-lg font-semibold text-foreground">Filters</h2>
                <button onClick={() => setShowMobileFilters(false)} className="p-1 text-muted-foreground hover:text-foreground">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <FilterPanel />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
