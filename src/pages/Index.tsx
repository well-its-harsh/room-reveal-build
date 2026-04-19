import HeroCarousel from "@/components/home/HeroCarousel";
import TrustBadgeStrip from "@/components/home/TrustBadgeStrip";
import ShopByArea from "@/components/home/ShopByArea";
import BrandMarquee from "@/components/home/BrandMarquee";
import TrendingNowTabs from "@/components/home/TrendingNowTabs";
import AIMakeoverTeaser from "@/components/home/AIMakeoverTeaser";
import VideoGalleryPreview from "@/components/home/VideoGalleryPreview";
import Categories from "@/components/home/Categories";
import InstagramFeed from "@/components/home/InstagramFeed";
import Testimonials from "@/components/home/Testimonials";
import EnquiryCTAsStrip from "@/components/home/EnquiryCTAsStrip";
import { motion } from "framer-motion";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO - High Impact Storytelling */}
      <HeroCarousel />
      
      {/* 2. TRUST - Immediate Credibility */}
      <TrustBadgeStrip />
      
      {/* 3. DISCOVERY - Shop by Area (Subtle Luxe Reveal) */}
      <ShopByArea />

      {/* 4. PARTNERS - Brand Credibility */}
      <BrandMarquee />
      
      {/* 5. TRENDING - Category Discovery Tabs */}
      <TrendingNowTabs />

      {/* 6. AI MAKEOVER - Core Tech Differentiator */}
      <AIMakeoverTeaser />

      {/* 7. VIDEOS - Product in Action */}
      <VideoGalleryPreview />

      {/* 8. CATEGORIES - Shop by Category */}
      <Categories />

      {/* 9. GALLERY - Visual Social Proof */}
      <InstagramFeed />

      {/* 9. SOCIAL PROOF - Customer Confidence (Placeholder for real data) */}
      <section className="bg-[#F7F5F2]">
        <Testimonials />
      </section>

      {/* 10. CTAs - Multi-channel Lead Hub */}
      <EnquiryCTAsStrip />

      {/* 11. SEO CONTENT SECTION - The luxury "scrolled and scrolled" content */}
      <section className="py-24 bg-white border-t border-[#E8E4DF]">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="font-serif text-[32px] md:text-[40px] font-bold text-[#1A1A1A] mb-8 tracking-tight leading-tight">
                India's Premier Digital Showroom for Architectural Hardware
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-12 text-lg">
                Shree Radhe Tiles & Hardware bridges the gap between digital discovery and physical craftsmanship. 
                Our enquiry-first platform ensures that every customer receives personalized architectural advice 
                for their bathroom, kitchen, and flooring needs. From designer mosaic tiles to premium brass hardware, 
                explore the finest global brands in one curated digital space.
              </p>
              
              <div className="flex flex-wrap justify-center gap-12 md:gap-20">
                <div className="text-center group">
                  <span className="block text-4xl font-heading font-bold text-accent italic mb-1 group-hover:scale-110 transition-transform">15+</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">Years of Legacy</span>
                </div>
                <div className="hidden md:block w-px h-12 bg-[#E8E4DF]" />
                <div className="text-center group">
                  <span className="block text-4xl font-heading font-bold text-accent italic mb-1 group-hover:scale-110 transition-transform">2500+</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">Premium Products</span>
                </div>
                <div className="hidden md:block w-px h-12 bg-[#E8E4DF]" />
                <div className="text-center group">
                  <span className="block text-4xl font-heading font-bold text-accent italic mb-1 group-hover:scale-110 transition-transform">100+</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">Luxury Brands</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
