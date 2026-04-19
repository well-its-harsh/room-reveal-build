import { Phone, Calendar, Video } from "lucide-react";
import { Link } from "react-router-dom";
import { STORE_INFO } from "@/constants/storeInfo";

// FIX 7 — Phone number sourced from STORE_INFO.primaryPhoneDisplay
export default function EnquiryCTAStrip() {
  return (
    <section className="bg-[#1A1A1A] py-16 text-white border-b border-black">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          {/* Call Us */}
          <div className="flex flex-col items-center text-center px-4 pt-6 md:pt-0">
            <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-6">
              <Phone className="w-6 h-6 text-[#C8860A]" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3">Call Us</h3>
            <p className="text-[14px] text-white/60 font-body mb-6 max-w-[240px]">
              Speak directly with our showroom specialists for immediate inquiries.
            </p>
            <a 
              href={`tel:${STORE_INFO.primaryPhone}`}
              className="px-8 py-3 bg-white/10 hover:bg-white/20 transition-colors text-[14px] font-medium rounded-sm"
            >
              {STORE_INFO.primaryPhoneDisplay}
            </a>
          </div>

          {/* Book Store Visit */}
          <div className="flex flex-col items-center text-center px-4 pt-8 md:pt-0">
            <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-6">
              <Calendar className="w-6 h-6 text-[#C8860A]" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3">Book Store Visit</h3>
            <p className="text-[14px] text-white/60 font-body mb-6 max-w-[240px]">
              Experience our premium tiles and hardware in person with expert guidance.
            </p>
            <Link 
              to="/book-visit" 
              className="px-8 py-3 bg-[#C8860A] hover:bg-[#A36D07] transition-colors text-[14px] font-medium rounded-sm w-full max-w-[200px] text-center block"
            >
              Schedule Visit
            </Link>
          </div>

          {/* Request Video Call */}
          <div className="flex flex-col items-center text-center px-4 pt-8 md:pt-0">
            <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-6">
              <Video className="w-6 h-6 text-[#C8860A]" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3">Video Consultation</h3>
            <p className="text-[14px] text-white/60 font-body mb-6 max-w-[240px]">
              Get a virtual walkthrough of our catalog from the comfort of your home.
            </p>
            <a 
              href={`https://wa.me/${STORE_INFO.primaryPhone.replace(/\+/g, '')}?text=Hi!%20I'd%20like%20to%20request%20a%20Video%20Consultation.`}
              target="_blank" rel="noopener noreferrer"
              className="px-8 py-3 bg-white/10 hover:bg-white/20 transition-colors text-[14px] font-medium rounded-sm"
            >
              Request Video Call
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
