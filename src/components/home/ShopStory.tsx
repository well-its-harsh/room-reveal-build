import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import showroomImage from "@/assets/showroom.jpg";

const stats = [
  { label: "Happy Customers", value: "15,000+" },
  { label: "Premium Brands", value: "50+" },
  { label: "Years of Trust", value: "14+" },
  { label: "Products", value: "5,000+" },
];

export default function ShopStory() {
  return (
    <section className="py-16 md:py-20 border-t border-[#E8E4DF]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#C8860A] font-semibold block mb-3">
              Our Story
            </span>
            <h2
              className="text-[#1A1A1A] mb-5 leading-tight"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 500 }}
            >
              Not Just Products.{" "}
              <span className="text-[#C8860A]">Complete Interiors.</span>
            </h2>
            <p className="text-[15px] text-[#6B6B6B] leading-relaxed mb-4">
              Since 2010, Shree Radhe Tiles & Hardware has been more than a shop — we're a complete showroom experience. Walk through our curated displays, feel the finish of every tile and fitting, and let our experts guide you.
            </p>
            <p className="text-[15px] text-[#6B6B6B] leading-relaxed mb-8">
              Whether you're renovating a bathroom or building your dream home, we bring India's finest brands together with expert advice and zero-pressure consultation.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border border-[#1A1A1A] text-[#1A1A1A] text-[14px] font-medium px-6 py-2.5 hover:bg-[#1A1A1A] hover:text-white transition-all duration-200"
            >
              Learn More About Us
            </Link>
          </motion.div>

          {/* Right: Image + stats */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="overflow-hidden aspect-[4/3]">
              <img
                src={showroomImage}
                alt="Shree Radhe Tiles – Showroom Interior"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
              />
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#F7F5F2] border border-[#E8E4DF] p-5 text-center"
                >
                  <p className="text-[1.75rem] font-semibold text-[#C8860A] leading-none mb-1">
                    {stat.value}
                  </p>
                  <p className="text-[12px] text-[#6B6B6B]">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
