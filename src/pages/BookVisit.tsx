import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Store, Shield } from "lucide-react";
import AppointmentForm from "@/components/forms/AppointmentForm";

import { STORE_INFO } from "@/constants/storeInfo";

export default function BookVisit() {
  return (
    <div className="min-h-screen bg-[#F7F5F2] py-12 md:py-20 px-4">
      <div className="container max-w-2xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Header */}
        <div className="mb-10 text-center">
          <div className="w-16 h-16 bg-[#1A1A1A] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
            <Store className="w-8 h-8 text-[#C8860A]" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-[#1A1A1A] mb-4">Book Your Showroom Experience</h1>
          <p className="text-[15px] text-[#6B6B6B] font-body max-w-lg mx-auto">
            Experience luxury firsthand. Our design experts are ready to guide you through our curated collection.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white border border-[#E8E4DF] p-6 md:p-10 shadow-2xl relative">
          <AppointmentForm visitType="store-visit" />
          
          <div className="mt-8 pt-6 border-t border-[#E8E4DF] flex items-center gap-4 text-[#6B6B6B]">
            <div className="w-10 h-10 rounded-full bg-[#F7F5F2] flex items-center justify-center flex-shrink-0">
               <Shield className="w-5 h-5 text-[#2563EB]" />
            </div>
            <p className="text-[11px] leading-snug">
              Your safety and privacy are our priority. All showroom visits follow strict sanitization protocols and are by appointment only.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
            <p className="text-[13px] text-[#6B6B6B]">
                Need immediate assistance? <a href={`tel:${STORE_INFO.primaryPhone}`} className="text-[#C8860A] font-bold">{STORE_INFO.primaryPhoneDisplay}</a>
            </p>
        </div>
      </div>
    </div>
  );
}
