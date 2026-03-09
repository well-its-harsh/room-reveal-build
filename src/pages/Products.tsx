import { useSearchParams } from "react-router-dom";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useProducts, useCategories } from "@/hooks/useProducts";
import ProductCard from "@/components/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get("category") || "all";
  const [activeCategory, setActiveCategory] = useState(initialCat);

  const { data: categories = [], isLoading: catLoading } = useCategories();
  const { data: products = [], isLoading: prodLoading } = useProducts(
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

  const isLoading = catLoading || prodLoading;

  return (
    <div className="container py-10 md:py-16">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-2">Our Products</h1>
        <p className="text-muted-foreground font-body mb-8">Browse our curated collection</p>
      </motion.div>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
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
        <p className="text-center text-muted-foreground py-16 font-body">No products found in this category.</p>
      )}
    </div>
  );
}
