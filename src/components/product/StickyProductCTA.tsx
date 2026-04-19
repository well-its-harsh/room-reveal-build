import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useScroll } from "framer-motion";
import { useState, useEffect } from "react";

interface StickyProductCTAProps {
  productName: string;
  onEnquire: () => void;
  brand?: string;
  price?: number;
}

export default function StickyProductCTA({ productName, onEnquire, brand, price }: StickyProductCTAProps) {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      // Show after scrolling past the initial hero/info section (roughly 600px)
      if (latest > 600) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, [scrollY]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-[#E8E4DF] shadow-[0_-5px_20px_rgba(0,0,0,0.05)] md:hidden px-4 py-3 flex items-center justify-between gap-4"
        >
          <div className="flex-1 min-w-0">
            {brand && <p className="text-[10px] text-accent font-bold uppercase tracking-wider truncate uppercase">{brand}</p>}
            <p className="text-[13px] font-semibold text-[#1A1A1A] truncate font-heading">{productName}</p>
            <p className="text-[11px] text-[#1A1A1A] font-bold">
              {price ? `₹${price.toLocaleString("en-IN")}` : "Price on Request"}
            </p>
          </div>
          <Button 
            className="bg-[#1A1A1A] text-white hover:bg-accent h-11 px-6 text-[13px] font-bold rounded-sm active:scale-95 transition-all"
            onClick={onEnquire}
          >
            Enquire
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
