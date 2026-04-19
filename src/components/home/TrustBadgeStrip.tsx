import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// FIX 3 — Wide Range links to /categories, Best Brands links to /#brand-partners
const badges = [
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Wide Range",
    desc: "5,000+ tiles & hardware across every style, size and finish",
    href: "/categories",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Best Brands",
    desc: "Kajaria, Hindware, Prince Pipes, Watero & 50+ certified brands",
    href: "/#brand-partners",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Expert Advice",
    desc: "Our trained staff help you choose the perfect tiles for every space",
    href: "/contact",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="3" y1="10" x2="21" y2="10" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Free Consultation",
    desc: "Book an in-store design consultation — no charge, no obligation",
    href: "/contact",
  },
];

export default function TrustBadgeStrip() {
  return (
    <section className="bg-[#F7F5F2] border-y border-[#E8E4DF]">
      <div className="container py-10 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
            >
              <Link to={badge.href} className="group flex flex-col items-center text-center gap-3.5 p-4 rounded-sm hover:bg-white transition-all duration-200 border border-transparent hover:border-[#E8E4DF]">
                <div className="w-12 h-12 flex items-center justify-center text-[#C8860A] group-hover:scale-110 transition-transform duration-200">
                  {badge.icon}
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold text-[#1A1A1A] mb-1 group-hover:text-[#C8860A] transition-colors">
                    {badge.title}
                  </h3>
                  <p className="text-[13px] text-[#6B6B6B] leading-relaxed">
                    {badge.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
