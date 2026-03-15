import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, Users, Truck, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import showroomImage from "@/assets/showroom.jpg";
import heroImage from "@/assets/hero-bathroom.jpg";

const values = [
  { icon: Award, title: "Quality First", desc: "We stock only top-tier brands with proven durability and finish. Every product goes through our quality standards." },
  { icon: Users, title: "Expert Guidance", desc: "Our trained staff help you pick the right products for your space. Personalized recommendations, always." },
  { icon: Truck, title: "Reliable Delivery", desc: "On-time delivery with safe, insured packaging across the region. We treat your fixtures like our own." },
  { icon: Shield, title: "Warranty Support", desc: "Full manufacturer warranty and hassle-free after-sales service. We stand behind every product." },
];

const milestones = [
  { year: "2010", event: "Founded as a local sanitaryware shop" },
  { year: "2014", event: "Expanded to a 5,000 sq ft showroom" },
  { year: "2018", event: "Partnered with 30+ international brands" },
  { year: "2022", event: "Launched online catalogue with 5,000+ products" },
  { year: "2024", event: "Introduced AR visualization for product preview" },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[300px] flex items-end overflow-hidden">
        <img src={showroomImage} alt="BathHaus showroom" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/30 to-transparent" />
        <div className="relative container pb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-2">About BathHaus</h1>
            <p className="text-primary-foreground/75 font-body text-lg">Transforming bathrooms into designed spaces since 2010.</p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-body font-medium">Our Mission</span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mt-2 mb-5">
              More Than a Shop.
              <br />
              <span className="text-accent">A Showroom Experience.</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              We believe every home deserves products that are both beautiful and built to last. Our curated showroom lets you touch, feel, and experience premium fixtures before you buy — something no online-only store can offer.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              With over 50 partner brands and thousands of satisfied customers, we've built a reputation for trust, quality, and personalized service that sets us apart.
            </p>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-body">
              <Link to="/contact">Visit Our Showroom <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden aspect-[4/3]"
          >
            <img src={heroImage} alt="Premium bathroom interior" loading="lazy" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-body font-medium">Why Choose Us</span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mt-2">Our Values</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center p-6 bg-card rounded-xl border border-border"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container py-16 md:py-24">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-body font-medium">Our Journey</span>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mt-2">Milestones</h2>
        </motion.div>
        <div className="max-w-xl mx-auto space-y-0">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-6 pb-8 relative"
            >
              {i < milestones.length - 1 && (
                <div className="absolute left-[23px] top-8 bottom-0 w-px bg-border" />
              )}
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <span className="font-heading text-sm font-bold text-accent">{m.year.slice(2)}</span>
              </div>
              <div className="pt-2.5">
                <p className="font-heading text-sm font-semibold text-foreground">{m.year}</p>
                <p className="text-sm text-muted-foreground font-body">{m.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Brands */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-3">Our Brand Partners</h2>
          <p className="text-muted-foreground font-body mb-8 max-w-lg mx-auto">
            We partner with over 50 leading Indian and international brands including Jaquar, Hindware, Kohler, Grohe, and many more.
          </p>
          <Button asChild variant="outline" className="font-body">
            <Link to="/products">Browse All Products</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
