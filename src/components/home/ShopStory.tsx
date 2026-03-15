import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import showroomImage from "@/assets/showroom.jpg";

const stats = [
  { label: "Happy Customers", value: "15,000+" },
  { label: "Premium Brands", value: "50+" },
  { label: "Years of Trust", value: "14+" },
  { label: "Products", value: "5,000+" },
];

export default function ShopStory() {
  return (
    <section className="bg-secondary">
      <div className="container py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-body font-medium">Our Story</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-2 mb-5 leading-tight">
              Not Just Products.
              <br />
              <span className="text-accent">Complete Interior Pieces.</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Since 2010, BathHaus has been more than a shop — we're a showroom experience. Walk through our curated displays, feel the finish of every fixture, and let our experts guide you toward the perfect choices for your home.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              Whether you're renovating a powder room or building your dream home, we bring the world's finest brands to your doorstep with expert installation guidance.
            </p>
            <Button asChild variant="outline" className="font-body">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <div className="rounded-xl overflow-hidden aspect-[3/2]">
              <img
                src={showroomImage}
                alt="BathHaus premium showroom interior"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-card rounded-xl p-5 text-center border border-border">
                  <p className="font-heading text-2xl md:text-3xl font-bold text-accent">{stat.value}</p>
                  <p className="text-xs text-muted-foreground font-body mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
