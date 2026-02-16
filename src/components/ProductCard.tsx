import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Product } from "@/data/products";

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link
        to={`/product/${product.id}`}
        className="group block bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300"
      >
        <div className="aspect-square overflow-hidden bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{product.brand}</p>
          <h3 className="font-heading text-base font-medium text-foreground mb-1 line-clamp-1">{product.name}</h3>
          <p className="text-sm font-semibold text-accent">₹{product.price.toLocaleString('en-IN')}</p>
          {!product.inStock && (
            <span className="inline-block mt-2 text-xs text-destructive font-medium">Out of Stock</span>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
