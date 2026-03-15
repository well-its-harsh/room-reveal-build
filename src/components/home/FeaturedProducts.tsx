import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useProducts } from "@/hooks/useProducts";
import ProductCard from "@/components/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";

export default function FeaturedProducts() {
  const { data: products = [], isLoading } = useProducts();
  const featured = products.slice(0, 4);

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-body font-medium">Curated</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-2">
              Featured Products
            </h2>
            <p className="text-muted-foreground font-body mt-2">Our most popular picks, handpicked for quality</p>
          </div>
          <Link
            to="/products"
            className="text-sm font-medium text-accent hover:underline flex items-center gap-1 font-body mt-4 md:mt-0"
          >
            View All <ArrowRight className="w-3 h-3" />
          </Link>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-3">
                <Skeleton className="aspect-square rounded-xl" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {featured.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
