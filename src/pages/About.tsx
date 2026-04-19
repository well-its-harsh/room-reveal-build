import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Award, Users, Truck, Shield, 
  ArrowRight, Compass, Home, Gem,
  CheckCircle2, Star, Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import showroomImage from "@/assets/showroom.jpg";
import heroImage from "@/assets/hero-bathroom.jpg";

export default function About() {
  const stats = [
    { label: "Elite Brands", val: "50+", icon: Award },
    { label: "Years Excellence", val: "15+", icon: Star },
    { label: "Homes Transformed", val: "10k+", icon: Home },
    { label: "Unique Products", val: "2.5k+", icon: Gem },
  ];

  return (
    <div className="bg-[#FDFCFB]">
      {/* 1. Cinematic Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
            src={showroomImage} 
            alt="Luxury Showroom" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom" 
           />
           <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>
        
        <div className="relative z-10 container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#C9A84C]/50 text-[#C9A84C] text-[11px] font-bold uppercase tracking-[0.3em] mb-6 backdrop-blur-md">
                Established 2010
            </span>
            <h1 className="font-serif text-5xl md:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              A Legacy of <br />
              <span className="text-[#C9A84C] italic">Pure Luxury.</span>
            </h1>
            <p className="text-white/80 font-body text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Transforming the architectural landscape of India with curated tiles, hardware, and fixtures from the world's most prestigious designers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <Button asChild className="h-14 px-10 bg-[#C9A84C] hover:bg-[#A36D07] text-white rounded-full font-bold uppercase tracking-widest text-[12px] group">
                  <Link to="/products">Explore Collections <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
               </Button>
               <Button asChild variant="outline" className="h-14 px-10 border-white/30 text-white bg-transparent hover:bg-white hover:text-black rounded-full font-bold uppercase tracking-widest text-[12px] backdrop-blur-sm">
                  <Link to="/contact">Visit Showroom</Link>
               </Button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
           <div className="w-px h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
        </div>
      </section>

      {/* 2. Dark Stats Band */}
      <section className="bg-black py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-5 text-white/20">
           <Sparkles className="w-96 h-96" />
        </div>
        <div className="container">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                   <p className="text-5xl md:text-6xl font-serif font-bold text-[#C9A84C] mb-2">{s.val}</p>
                   <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">{s.label}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 3. Story Section - Typographic Led */}
      <section className="container py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
             <div className="absolute -left-10 -top-10 w-40 h-40 bg-[#C9A84C]/5 rounded-full blur-3xl" />
             <span className="text-[#C9A84C] font-bold uppercase tracking-[0.2em] text-[11px] mb-4 block">Our Story</span>
             <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-8 leading-[1.2]">
               Beyond Bricks and Mortar. <br />
               We Curate <span className="italic text-[#C9A84C]">Emotions.</span>
             </h2>
             <div className="space-y-6 text-[#6B6B6B] font-body text-lg leading-relaxed">
                <p>
                  Started over a decade ago as a local venture, Shree Radhe has evolved into a powerhouse of architectural luxury. We don't just sell hardware; we provide the finishing touches that turn a house into a sanctuary.
                </p>
                <p>
                  Our showroom is a testimony to our obsession with quality. Every tile, every faucet, and every handle is handpicked to ensure it meets the rigorous standards of India's most demanding designers and homeowners.
                </p>
             </div>
             <div className="mt-12 flex items-center gap-6 p-8 bg-white border border-[#E8E4DF] rounded-3xl shadow-xl shadow-black/5">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#C9A84C] flex items-center justify-center bg-white shadow-lg">
                   <img src="/assets/logo.jpg" alt="Founder Icon" className="w-full h-full object-cover" />
                 </div>
                <div>
                   <p className="text-black font-bold text-lg">Ravi Mulchandani</p>
                   <p className="text-[11px] font-bold uppercase tracking-widest text-[#999]">Founder & Visionary</p>
                </div>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-[3rem] overflow-hidden group shadow-2xl"
          >
             <img src={heroImage} alt="Design Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
             <div className="absolute bottom-10 left-10 right-10">
                <p className="text-white text-2xl font-serif italic mb-2">"Attention to detail is the difference between good and great."</p>
                <div className="w-20 h-1 bg-[#C9A84C]" />
             </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Why Us - Mosaic View */}
      <section className="bg-[#F8F7F4] py-24 md:py-32 border-y border-[#E8E4DF]">
         <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-20">
               <h2 className="font-serif text-4xl font-bold text-black mb-4">The Shree Radhe Standard</h2>
               <p className="text-[#6B6B6B] font-body">Four pillars that support our commitment to architectural excellence since our inception.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { title: "Direct Sourcing", desc: "Relationships with European and Indian manufacturers to bring you direct factory pricing.", icon: Compass },
                 { title: "Design Library", desc: "A collection of 2500+ SKUs carefully categorized for easy discovery and selection.", icon: Gem },
                 { title: "Showroom Immersion", desc: "Experience products in person at our multi-floor experiential design studio.", icon: Home },
                 { title: "Lifetime Support", desc: "Hassle-free after-sales service and genuine spare parts for every brand we sell.", icon: Shield },
               ].map((item, i) => (
                 <motion.div
                   key={item.title}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="p-8 bg-white border border-[#E8E4DF] rounded-[2rem] hover:shadow-2xl transition-all duration-300 group"
                 >
                   <div className="w-14 h-14 bg-black/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#C9A84C] transition-colors duration-500">
                      <item.icon className="w-6 h-6 text-black group-hover:text-white" />
                   </div>
                   <h4 className="font-serif text-xl font-bold text-black mb-4">{item.title}</h4>
                   <p className="text-[#6B6B6B] text-[15px] leading-relaxed font-body">{item.desc}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Brands Section */}
      <section className="container py-24 md:py-32 text-center">
         <span className="text-[#999] font-bold uppercase tracking-[0.3em] text-[10px] mb-8 block">Global Partnerships</span>
         <h2 className="font-serif text-3xl md:text-4xl font-bold text-black mb-12">Authorized Partners for 50+ Global Brands</h2>
         
         <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {/* These would be brand logos in production */}
            {['JAQUAR', 'KOHLER', 'GROHE', 'HINDWARE', 'KAFF', 'CARYSIL'].map(brand => (
              <span key={brand} className="text-2xl font-serif font-black tracking-tighter text-black">{brand}</span>
            ))}
         </div>

         <div className="mt-20 pt-10 border-t border-[#F0F0F0]">
            <p className="text-[#6B6B6B] font-body text-lg mb-8">Ready to bring your vision to life?</p>
            <Button asChild className="h-14 px-12 bg-black hover:bg-[#C9A84C] text-white rounded-full font-bold uppercase tracking-widest text-[11px] shadow-xl shadow-black/10 transition-all">
               <Link to="/book-visit">Schedule Your Design Consultation</Link>
            </Button>
         </div>
      </section>
    </div>
  );
}

