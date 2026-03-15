import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCategories } from "@/hooks/useProducts";
import { ArrowRight } from "lucide-react";

import categoryBasins from "@/assets/category-basins.jpg";
import categorySinks from "@/assets/category-sinks.jpg";
import categoryToilets from "@/assets/category-toilets.jpg";
import categoryShowers from "@/assets/category-showers.jpg";
import categoryCabinets from "@/assets/category-cabinets.jpg";
import categoryAccessories from "@/assets/category-accessories.jpg";

const categoryImages: Record<string, string> = {
  basins: categoryBasins,
  sinks: categorySinks,
  toilets: categoryToilets,
  showers: categoryShowers,
  cabinets: categoryCabinets,
  accessories: categoryAccessories,
};

export default function Categories() {
  const { data: categories = [] } = useCategories();

  return (
    <section className="container py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-12"
      >
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-body font-medium">Collections</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-2">
            Shop by Category
          </h2>
        </div>
        <Link
          to="/products"
          className="text-sm font-medium text-accent hover:underline flex items-center gap-1 font-body mt-4 md:mt-0"
        >
          View All Products <ArrowRight className="w-3 h-3" />
        </Link>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
          >
            <Link
              to={`/products?category=${cat.slug}`}
              className="group relative block aspect-[4/5] rounded-xl overflow-hidden"
            >
              <img
                src={categoryImages[cat.slug] || "/placeholder.svg"}
                alt={cat.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="font-heading text-lg md:text-xl font-semibold text-primary-foreground">{cat.name}</h3>
                <span className="inline-flex items-center gap-1 text-xs text-primary-foreground/70 font-body mt-1 group-hover:text-accent transition-colors">
                  Explore <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
