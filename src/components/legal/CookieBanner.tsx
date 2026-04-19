import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("shree_radhe_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("shree_radhe_cookie_consent", "accepted");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-[400px] z-[250]"
        >
          <div className="bg-white border border-[#E8E4DF] rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] p-5 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Cookie className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1">
                <h4 className="font-heading font-semibold text-foreground text-sm mb-1">We value your privacy</h4>
                <p className="text-[12px] text-muted-foreground leading-relaxed font-body">
                  We use cookies to improve your experience and analyze website traffic. By using our site, you agree to our <Link to="/policies/cookies" className="text-accent underline hover:text-accent/80 transition-colors">Cookie Policy</Link>.
                </p>
              </div>
              <button 
                onClick={() => setShow(false)}
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                onClick={handleAccept}
                className="flex-1 bg-[#1A1A1A] text-white text-[13px] h-10 rounded-xl hover:bg-accent transition-all font-body font-medium"
              >
                Accept Cookies
              </Button>
              <Button 
                variant="outline"
                asChild
                className="flex-1 text-[13px] h-10 rounded-xl border-[#E8E4DF] hover:bg-secondary transition-all font-body font-medium"
              >
                <Link to="/policies/cookies">Learn More</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
