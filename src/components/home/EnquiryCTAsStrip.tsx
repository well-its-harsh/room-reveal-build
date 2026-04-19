import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Calendar, Video } from "lucide-react";

const items = [
  {
    icon: Phone,
    label: "Call Us",
    detail: "+91 98765 43210",
    sub: "Mon–Sat, 9am–7pm",
    href: "tel:+919876543210",
    cta: "Call Now",
    isLink: true,
  },
  {
    icon: Calendar,
    label: "Book Store Visit",
    detail: "Schedule a free in-store consultation",
    sub: "Open Mon–Sat, 10am–7pm",
    href: "/contact",
    cta: "Book a Slot",
    isLink: false,
  },
  {
    icon: Video,
    label: "Request Video Call",
    detail: "Google Meet or WhatsApp Video",
    sub: "Expert guidance, from your home",
    href: "/contact",
    cta: "Request Now",
    isLink: false,
  },
];

export default function EnquiryCTAsStrip() {
  return (
    <section className="bg-[#1A1A1A] py-14 md:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-[11px] uppercase tracking-[0.22em] text-[#C8860A] font-semibold block mb-3">
            Get In Touch
          </span>
          <h2 className="text-white" style={{ fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)", fontWeight: 500 }}>
            We're Here to Help
          </h2>
          <p className="text-white/55 text-[14px] mt-2 max-w-md mx-auto leading-relaxed">
            Talk to our experts. Zero obligation — just genuine guidance on the best products for your space.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-white/10">
          {items.map(({ icon: Icon, label, detail, sub, href, cta, isLink }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="bg-[#1A1A1A] px-8 py-10 flex flex-col items-center text-center group hover:bg-[#232323] transition-colors"
            >
              <div className="w-14 h-14 rounded-full border border-[#C8860A]/30 flex items-center justify-center mb-5 group-hover:border-[#C8860A] group-hover:bg-[#C8860A]/10 transition-all duration-200">
                <Icon className="w-6 h-6 text-[#C8860A]" />
              </div>
              <h3 className="text-white text-[15px] font-semibold mb-2">{label}</h3>
              <p className="text-white/60 text-[13px] leading-relaxed mb-1">{detail}</p>
              <p className="text-white/35 text-[12px] mb-6">{sub}</p>
              {isLink ? (
                <a
                  href={href}
                  className="btn-enquire"
                >
                  {cta}
                </a>
              ) : (
                <Link to={href} className="btn-enquire">
                  {cta}
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
