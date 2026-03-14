import { useSearchParams } from "react-router-dom";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { useProducts, useCategories } from "@/hooks/useProducts";
import ProductCard from "@/components/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type SortOption = "newest" | "price-asc" | "price-desc" | "name";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get("category") || "all";
  const [activeCategory, setActiveCategory] = useState(initialCat);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500000]);
  const [showFilters, setShowFilters] = useState(false);
  const [inStockOnly, setInStockOnly] = useState(false);

  const { data: categories = [], isLoading: catLoading } = useCategories();
  const { data: rawProducts = [], isLoading: prodLoading } = useProducts(
    activeCategory !== "all" ? activeCategory : undefined
  );

  const selectCategory = (slug: string) => {
    setActiveCategory(slug);
    if (slug === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: slug });
    }
  };

  // Client-side search, filter, sort
  const products = useMemo(() => {
    let filtered = [...rawProducts];

    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q) ||
          p.category?.name?.toLowerCase().includes(q)
      );
    }

    // Price range
    filtered = filtered.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // In stock
    if (inStockOnly) {
      filtered = filtered.filter((p) => {
        if (!p.inventory || p.inventory.length === 0) return true;
        return p.inventory[0].quantity > 0;
      });
    }

    // Sort
    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "newest":
      default:
        filtered.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        break;
    }

    return filtered;
  }, [rawProducts, searchQuery, sortBy, priceRange, inStockOnly]);

  const isLoading = catLoading || prodLoading;

  const quickSearches = ["Basin", "Toilet", "Shower", "Cabinet", "Tap", "Sink"];

  return (
    <div className="container py-8 md:py-16">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-2">Our Products</h1>
        <p className="text-muted-foreground font-body mb-6">Browse our curated collection</p>
      </motion.div>

      {/* Search Bar */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search products..."
          className="pl-10 pr-10 font-body"
        />
        {searchQuery && (
          <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Quick Searches */}
      {!searchQuery && (
        <div className="flex gap-2 flex-wrap mb-6">
          {quickSearches.map((q) => (
            <button
              key={q}
              onClick={() => setSearchQuery(q)}
              className="px-3 py-1 rounded-full text-xs font-body bg-secondary text-secondary-foreground hover:bg-muted transition-colors"
            >
              {q}
            </button>
          ))}
        </div>
      )}

      {/* Controls Row */}
      <div className="flex items-center justify-between gap-3 mb-6">
        {/* Filter Toggle */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowFilters(!showFilters)}
          className="font-body"
        >
          <SlidersHorizontal className="w-4 h-4 mr-1.5" />
          Filters
          {(inStockOnly || priceRange[0] > 0 || priceRange[1] < 500000) && (
            <span className="ml-1.5 w-2 h-2 rounded-full bg-accent" />
          )}
        </Button>

        {/* Sort */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground font-body hidden sm:inline">Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="text-sm font-body border border-input rounded-md px-2 py-1.5 bg-background text-foreground"
          >
            <option value="newest">Newest</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
            <option value="name">Name A–Z</option>
          </select>
        </div>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-card border border-border rounded-lg p-4 mb-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="text-xs font-medium text-foreground font-body block mb-1.5">Min Price (₹)</label>
              <Input
                type="number"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                className="font-body"
                min={0}
              />
            </div>
            <div>
              <label className="text-xs font-medium text-foreground font-body block mb-1.5">Max Price (₹)</label>
              <Input
                type="number"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 500000])}
                className="font-body"
                min={0}
              />
            </div>
            <div className="flex items-end">
              <label className="flex items-center gap-2 font-body text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="rounded"
                />
                In stock only
              </label>
            </div>
          </div>
          <div className="flex justify-end mt-3">
            <button
              onClick={() => { setPriceRange([0, 500000]); setInStockOnly(false); }}
              className="text-xs text-accent font-body hover:underline"
            >
              Clear Filters
            </button>
          </div>
        </motion.div>
      )}

      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
        <button
          onClick={() => selectCategory("all")}
          className={`px-4 py-2 rounded-full text-sm font-medium font-body whitespace-nowrap transition-colors ${
            activeCategory === "all"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-muted"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => selectCategory(cat.slug)}
            className={`px-4 py-2 rounded-full text-sm font-medium font-body whitespace-nowrap transition-colors ${
              activeCategory === cat.slug
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-muted"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Results Count */}
      {!isLoading && (
        <p className="text-xs text-muted-foreground font-body mb-4">
          {products.length} product{products.length !== 1 ? "s" : ""} found
        </p>
      )}

      {/* Product Grid */}
      {isLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="aspect-square rounded-lg" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      )}

      {!isLoading && products.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground font-body mb-2">No products found.</p>
          <button onClick={() => { setSearchQuery(""); setPriceRange([0, 500000]); setInStockOnly(false); selectCategory("all"); }} className="text-sm text-accent font-body hover:underline">
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
