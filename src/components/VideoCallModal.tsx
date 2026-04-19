import { AnimatePresence, motion } from "framer-motion";
import { X, Video } from "lucide-react";
import VideoCallBookingForm from "@/components/VideoCallBookingForm";

export interface VideoCallModalProps {
  open: boolean;
  onClose: () => void;
  productName?: string;
  productId?: string;
}

export default function VideoCallModal({ open, onClose, productName, productId }: VideoCallModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-[#1A1A1A]/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 24, scale: 0.97 }}
            className="fixed inset-0 z-[301] flex items-end sm:items-center justify-center p-4 sm:p-0 pointer-events-none"
          >
            <div className="pointer-events-auto w-full sm:w-[540px] bg-white shadow-2xl relative max-h-[95vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between px-8 py-6 border-b border-[#E8E4DF] sticky top-0 bg-white z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F7F5F2] flex items-center justify-center border border-[#E8E4DF]">
                    <Video className="w-6 h-6 text-[#C8860A]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-[#1A1A1A]">Consultation via Video</h3>
                    {productName && <p className="text-[12px] text-[#6B6B6B] uppercase tracking-wider font-bold">Inquiry: {productName}</p>}
                  </div>
                </div>
                <button onClick={onClose} className="p-2 text-[#6B6B6B] hover:bg-[#F7F5F2] hover:text-[#1A1A1A] transition-colors rounded-full border border-transparent hover:border-[#E8E4DF]">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-8">
                <VideoCallBookingForm 
                  productId={productId} 
                  productName={productName}
                  onSuccess={() => {
                    setTimeout(onClose, 2000);
                  }}
                />
              </div>

              <div className="px-8 pb-8 flex items-center gap-3 text-[#6B6B6B]">
                 <div className="w-8 h-8 rounded-full bg-[#C8860A]/10 flex items-center justify-center flex-shrink-0">
                    <Video className="w-4 h-4 text-[#C8860A]" />
                 </div>
                 <p className="text-[11px] leading-snug">
                   You will receive a WhatsApp link and calendar invitation once our expert confirms the slot.
                 </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
