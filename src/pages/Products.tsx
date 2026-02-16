import { useSearchParams } from "react-router-dom";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { products, categories, Category } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get("category") as Category | null;
  const [activeCategory, setActiveCategory] = useState<Category | "all">(initialCat || "all");

  const filtered = useMemo(
    () => (activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory)),
    [activeCategory]
  );

  const selectCategory = (cat: Category | "all") => {
    setActiveCategory(cat);
    if (cat === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

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
            onClick={() => selectCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium font-body whitespace-nowrap transition-colors ${
              activeCategory === cat.id
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-muted"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filtered.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-16 font-body">No products found in this category.</p>
      )}
    </div>
  );
}
