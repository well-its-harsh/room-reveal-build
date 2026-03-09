import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProducts, useCategories } from "@/hooks/useProducts";
import ProductCard from "@/components/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";

import heroImage from "@/assets/hero-bathroom.jpg";
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

const testimonials = [
  { name: "Priya S.", text: "Excellent quality products and the staff helped us choose the perfect fixtures for our new home.", rating: 5 },
  { name: "Rahul M.", text: "Best sanitaryware shop in the city. Wide range of brands and very competitive prices.", rating: 5 },
  { name: "Anita K.", text: "The brass shower set we bought is stunning. Premium quality at a fair price.", rating: 4 },
];

const brandPartners = [
  { name: "Jaquar", initial: "J" },
  { name: "Hindware", initial: "H" },
  { name: "Cera", initial: "C" },
  { name: "Parryware", initial: "P" },
  { name: "Kohler", initial: "K" },
  { name: "Grohe", initial: "G" },
];

export default function Index() {
  const { data: categories = [] } = useCategories();
  const { data: products = [], isLoading } = useProducts();
  const featured = products.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[500px] flex items-end">
        <img src={heroImage} alt="Luxury bathroom showroom" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
        <div className="relative container pb-16 md:pb-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-lg">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4">
              Elevate Your Space
            </h1>
            <p className="text-primary-foreground/80 text-lg mb-6 font-body">
              Premium sanitaryware & hardware for homes that inspire.
            </p>
            <div className="flex gap-3">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-medium">
                <Link to="/products">Explore Products <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-body">
                <Link to="/contact">Visit Store</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-16 md:py-24">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-3">Shop by Category</h2>
          <p className="text-muted-foreground font-body">Everything you need, beautifully crafted</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={`/products?category=${cat.slug}`}
                className="group relative block aspect-[4/5] rounded-lg overflow-hidden"
              >
                <img
                  src={categoryImages[cat.slug] || "/placeholder.svg"}
                  alt={cat.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="font-heading text-lg font-semibold text-primary-foreground">{cat.name}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="container">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-2">Trusted Partners</h2>
            <p className="text-muted-foreground font-body text-sm">We partner with India's top sanitaryware brands</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {brandPartners.map((brand, i) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="w-20 h-20 md:w-24 md:h-24 rounded-lg bg-card border border-border flex flex-col items-center justify-center gap-1 hover:shadow-md transition-shadow"
              >
                <span className="font-heading text-2xl font-bold text-accent">{brand.initial}</span>
                <span className="text-[10px] text-muted-foreground font-body">{brand.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">Featured</h2>
              <p className="text-muted-foreground font-body mt-1">Our most popular picks</p>
            </div>
            <Link to="/products" className="text-sm font-medium text-accent hover:underline flex items-center gap-1 font-body">
              View All <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="space-y-3">
                  <Skeleton className="aspect-square rounded-lg" />
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

      {/* About Snippet */}
      <section className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">Trusted Since 2010</h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              BathHaus has been the region's premier destination for quality sanitaryware and hardware. We partner with top global brands to bring you products that combine beauty, durability, and value.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Our expert team helps you find the perfect fit — whether you're renovating a bathroom or building your dream home.
            </p>
            <Button asChild variant="outline" className="font-body">
              <Link to="/about">Learn More</Link>
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
            {[
              { label: "Happy Customers", value: "15,000+" },
              { label: "Brands", value: "50+" },
              { label: "Years of Trust", value: "14+" },
              { label: "Products", value: "5,000+" },
            ].map((stat) => (
              <div key={stat.label} className="bg-secondary rounded-lg p-6 text-center">
                <p className="font-heading text-2xl font-bold text-accent">{stat.value}</p>
                <p className="text-xs text-muted-foreground font-body mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-primary-foreground/10 backdrop-blur rounded-lg p-6"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed opacity-90 mb-4 font-body">"{t.text}"</p>
                <p className="text-sm font-semibold font-body">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <section className="container py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            { icon: MapPin, label: "Visit Us", detail: "123 Main Street, City Center" },
            { icon: Clock, label: "Business Hours", detail: "Mon–Sat 9AM–8PM, Sun 10AM–6PM" },
            { icon: Phone, label: "Call Us", detail: "+91 00000 00000" },
          ].map(({ icon: Icon, label, detail }) => (
            <div key={label} className="flex flex-col items-center gap-3 p-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">{label}</h3>
              <p className="text-sm text-muted-foreground font-body">{detail}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
