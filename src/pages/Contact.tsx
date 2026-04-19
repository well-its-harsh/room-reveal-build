import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Clock, Mail, MessageSquare, Calendar, Video, CheckCircle } from "lucide-react";
import { useState, lazy, Suspense } from "react";
import EnquiryForm from "@/components/forms/EnquiryForm";
import AppointmentForm from "@/components/forms/AppointmentForm";
import VideoCallBookingForm from "@/components/VideoCallBookingForm";
import { cn } from "@/lib/utils";

const MapLocation = lazy(() => import("@/components/MapLocation"));

import { STORE_INFO } from "@/constants/storeInfo";

type ContactTab = 'enquiry' | 'visit' | 'video';

export default function Contact() {
  const [activeTab, setActiveTab] = useState<ContactTab>('enquiry');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#1A1A1A] py-16 md:py-24 text-center">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-4xl md:text-5xl font-serif font-bold mb-4"
          >
            Connect with Our Experts
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto px-4"
          >
            Whether it's a specific product enquiry or a personal showroom consultation, we're here to bring your vision to life.
          </motion.p>
        </div>
      </div>

      <div className="container -mt-10 mb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column: Contact Methods selection card */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-[#E8E4DF] shadow-xl p-6 sticky top-24 rounded-xl">
              <h2 className="text-[13px] font-bold uppercase tracking-widest text-[#C8860A] mb-6">Store Details</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FBF7EF] flex items-center justify-center flex-shrink-0 border border-[#E8E4DF]">
                    <MapPin className="w-5 h-5 text-[#C8860A]" />
                  </div>
                  <div>
                    <p className="text-[14px] text-[#1A1A1A] font-medium leading-relaxed">{STORE_INFO.address.full}</p>
                    <a href={STORE_INFO.googleMapsLink} target="_blank" rel="noreferrer" className="text-[11px] font-bold text-[#C8860A] uppercase hover:underline mt-1 inline-block">View on Maps</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FBF7EF] flex items-center justify-center flex-shrink-0 border border-[#E8E4DF]">
                    <Phone className="w-5 h-5 text-[#C8860A]" />
                  </div>
                  <div>
                    {STORE_INFO.owners.map((owner, i) => (
                      <div key={i} className="mb-3 last:mb-0">
                        <p className="text-[11px] font-bold text-[#6B6B6B] uppercase tracking-tighter">{owner.name}</p>
                        <div className="flex gap-4">
                          <a href={`tel:${owner.phone}`} className="text-[14px] text-[#1A1A1A] font-bold hover:text-[#C8860A]">{owner.phone}</a>
                          <a href={`https://wa.me/${owner.whatsapp.replace(/\+/g, '')}`} target="_blank" rel="noreferrer" className="text-[14px] text-[#25D366] font-bold hover:underline">WhatsApp</a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FBF7EF] flex items-center justify-center flex-shrink-0 border border-[#E8E4DF]">
                    <Mail className="w-5 h-5 text-[#C8860A]" />
                  </div>
                  <a href={`mailto:${STORE_INFO.email}`} className="text-[14px] text-[#1A1A1A] font-bold hover:text-[#C8860A]">{STORE_INFO.email}</a>
                </div>

                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-[#FBF7EF] flex items-center justify-center flex-shrink-0 border border-[#E8E4DF]">
                    <Clock className="w-5 h-5 text-[#C8860A]" />
                  </div>
                   <span className="text-[14px] text-[#1A1A1A] font-bold">Mon – Sat: 10:00 AM – 7:00 PM</span>
                </div>

                <div className="pt-6 border-t border-[#E8E4DF] flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-bold text-[#6B6B6B] uppercase tracking-widest">GST Number</p>
                    <p className="text-[14px] text-[#1A1A1A] font-bold mt-0.5">{STORE_INFO.gst}</p>
                  </div>
                  <div className="px-2 py-1 bg-green-50 text-green-700 text-[10px] font-black uppercase rounded border border-green-200">Verified</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form Area */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white border border-[#E8E4DF] shadow-sm rounded-2xl overflow-hidden">
              {/* Option Tabs - Navbar Style */}
              <div className="flex border-b border-[#E8E4DF] bg-[#F7F5F2]/50">
                {[
                  { id: 'enquiry', label: 'General Enquiry', icon: MessageSquare },
                  { id: 'visit', label: 'Book Store Visit', icon: Calendar },
                  { id: 'video', label: 'Video Call', icon: Video }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as ContactTab)}
                    className={cn(
                      "flex-1 flex items-center justify-center gap-2 py-6 text-[12px] font-bold uppercase tracking-widest transition-all relative",
                      activeTab === tab.id 
                        ? "text-[#1A1A1A] bg-white border-x border-[#E8E4DF] first:border-l-0 last:border-r-0" 
                        : "text-[#6B6B6B] hover:text-[#1A1A1A] border-r border-[#E8E4DF] last:border-r-0"
                    )}
                  >
                    <tab.icon className={cn("w-4 h-4", activeTab === tab.id ? "text-[#C8860A]" : "text-[#6B6B6B]")} />
                    {tab.label}
                    {activeTab === tab.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C8860A]" />
                    )}
                  </button>
                ))}
              </div>

              <div className="p-8 md:p-12 min-h-[500px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-10 text-center max-w-xl mx-auto">
                      <h3 className="text-3xl font-serif font-bold text-[#1A1A1A] mb-3">
                        {activeTab === 'enquiry' && "General Enquiry"}
                        {activeTab === 'visit' && "Schedule Showroom Visit"}
                        {activeTab === 'video' && "Request Video Consultation"}
                      </h3>
                      <p className="text-[15px] text-[#6B6B6B] leading-relaxed italic">
                        {activeTab === 'enquiry' && "Fill out the form below and our team will get back to you shortly."}
                        {activeTab === 'visit' && "Our showroom offers a curated experience. Book your slot for a personal walkthrough."}
                        {activeTab === 'video' && "Can't make it to the store? Let our experts showcase our collection via video call."}
                      </p>
                    </div>

                  {activeTab === 'enquiry' && (
                    <EnquiryForm channel="contact-page" />
                  )}
                  {activeTab === 'visit' && (
                    <AppointmentForm visitType="store-visit" />
                  )}
                  {activeTab === 'video' && (
                    <VideoCallBookingForm />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-8 p-1 bg-white border border-[#E8E4DF] shadow-sm">
            <Suspense fallback={<div className="h-[400px] w-full bg-gray-50 flex items-center justify-center">Loading Map...</div>}>
              <MapLocation className="h-[400px] w-full" />
            </Suspense>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
