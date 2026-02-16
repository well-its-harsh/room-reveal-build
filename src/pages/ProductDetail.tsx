import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingBag, Smartphone, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import ProductCard from "@/components/ProductCard";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <p className="text-muted-foreground font-body">Product not found.</p>
        <Button asChild variant="outline" className="mt-4 font-body">
          <Link to="/products">Back to Products</Link>
        </Button>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="container py-6 md:py-12">
      <Link to="/products" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 font-body">
        <ArrowLeft className="w-4 h-4" /> Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="aspect-square rounded-lg overflow-hidden bg-secondary"
        >
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </motion.div>

        {/* Info */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1 font-body">{product.brand}</p>
          <h1 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-2">{product.name}</h1>
          <p className="text-2xl font-bold text-accent mb-4 font-body">₹{product.price.toLocaleString('en-IN')}</p>
          
          {!product.inStock && (
            <span className="inline-block mb-4 text-sm text-destructive font-medium font-body">Currently Out of Stock</span>
          )}

          <p className="text-muted-foreground font-body leading-relaxed mb-6">{product.description}</p>

          {/* Features */}
          <div className="mb-6">
            <h3 className="font-heading text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Features</h3>
            <ul className="space-y-2">
              {product.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" /> {f}
                </li>
              ))}
            </ul>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-medium flex-1"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <ShoppingBag className="w-4 h-4 mr-2" /> Add to Cart
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-body flex-1"
              onClick={() => toast.info("AR Preview coming soon! This feature requires 3D models.")}
            >
              <Smartphone className="w-4 h-4 mr-2" /> View in My Room
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-3 font-body">
            * "View in My Room" provides a visual preview for size & placement estimation.
          </p>
        </motion.div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="mt-16 md:mt-24">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
