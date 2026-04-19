import { AnimatePresence, motion } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import EnquiryForm from "./forms/EnquiryForm";

export interface EnquiryModalProps {
  open: boolean;
  onClose: () => void;
  productId?: string;
  productName?: string;
  categoryName?: string;
}

export default function EnquiryModal({
  open,
  onClose,
  productId,
  productName,
  categoryName,
}: EnquiryModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[300] bg-black/50"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[301] flex items-end sm:items-center justify-center pointer-events-none"
          >
            <div
              className="pointer-events-auto w-full sm:w-auto sm:min-w-[400px] sm:max-w-lg bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E4DF]">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-[#F7F5F2] flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-[#C8860A]" />
                  </div>
                  <div>
                    <p className="text-[15px] font-bold text-[#1A1A1A] leading-tight">Enquire Now</p>
                    <p className="text-[12px] text-[#6B6B6B]">We'll respond within 2 hours</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center text-[#6B6B6B] hover:text-[#1A1A1A] hover:bg-[#F7F5F2] transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Body */}
              <div className="px-6 py-5">
                <EnquiryForm 
                  productId={productId} 
                  productName={productName} 
                  categoryName={categoryName}
                  channel="product-enquiry"
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
