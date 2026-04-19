import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";

const SIGNUP_SLIDES = [
  {
    title: "Join the Elite",
    subtitle: "Register to access our premium architectural hardware."
  },
  {
    title: "Project Consultation",
    subtitle: "Get expert advice for your bathroom and kitchen design."
  },
  {
    title: "Exclusive Catalog",
    subtitle: "Browse 2500+ products curated for luxury living."
  }
];

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const { signUp, signInWithOAuth } = useAuth();
  const navigate = useNavigate();

  // Rotating slides
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((s) => (s + 1) % SIGNUP_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !email.trim() || !password.trim()) {
      return toast.error("Please fill in all fields");
    }
    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters");
    }
    setLoading(true);
    const { error } = await signUp(email, password, fullName, phone);
    setLoading(false);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Account created! Please check your email to verify.");
      navigate("/login");
    }
  };

  const handleGoogleSignup = async () => {
    const { error } = await signInWithOAuth("google");
    if (error) toast.error(error.message);
  };

  return (
    <div className="min-h-screen bg-[#F7F5F2] flex items-center justify-center p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col md:flex-row min-h-[600px]"
      >
        {/* Left Panel: Luxury Visual (Hidden on mobile inside card) */}
        <div className="hidden md:flex md:w-1/2 relative bg-[#1A1A1A] items-center justify-center p-12 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.4 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full h-full bg-[url('/assets/branding/auth_sidebar.jpg')] bg-cover bg-center grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>
          
          <div className="relative z-10 w-full max-w-xs">
            <div className="mb-12">
              <Link to="/" className="flex items-center gap-2.5 group">
                <img src="/assets/logo.jpg" alt="Shree Radhe Logo" className="w-11 h-11 rounded-full object-cover border-2 border-accent/40 group-hover:border-accent transition-all" />
                <div className="flex flex-col">
                  <span className="text-white text-base font-semibold leading-tight block">Shree Radhe</span>
                  <span className="text-accent text-[10px] font-medium uppercase tracking-widest">Tiles & Hardware</span>
                </div>
              </Link>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full border border-accent/30 text-accent text-[10px] font-semibold uppercase tracking-widest">
                    {activeSlide + 1} of {SIGNUP_SLIDES.length}
                  </span>
                </div>
                <h2 className="text-3xl font-heading font-semibold text-white mb-4 leading-tight">
                  {SIGNUP_SLIDES[activeSlide].title}
                </h2>
                <p className="text-white/60 font-body text-sm leading-relaxed mb-8">
                  {SIGNUP_SLIDES[activeSlide].subtitle}
                </p>
                
                <div className="flex items-center gap-12">
                  <div className="flex flex-col gap-1">
                    <span className="text-white font-heading font-bold text-xl italic">Premium</span>
                    <span className="text-[9px] uppercase tracking-widest text-white/40">Curation</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-white font-heading font-bold text-xl italic">Global</span>
                    <span className="text-[9px] uppercase tracking-widest text-white/40">Partnerships</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex gap-2 mt-12">
              {SIGNUP_SLIDES.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1 rounded-full transition-all duration-500 ${i === activeSlide ? "w-8 bg-accent" : "w-4 bg-white/20"}`} 
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel: Form */}
        <div className="flex-1 flex items-center justify-center p-8 md:p-12 bg-white">
          <div className="w-full max-w-sm">
            <div className="mb-10 md:hidden flex items-center gap-2.5">
              <img src="/assets/logo.jpg" alt="Shree Radhe Logo" className="w-9 h-9 rounded-full object-cover border-2 border-accent/40" />
              <Link to="/" className="font-heading text-xl font-semibold text-foreground tracking-tight">Shree Radhe</Link>
            </div>
            
            <div className="mb-10">
              <h1 className="font-heading text-3xl font-semibold text-foreground tracking-tight mb-2">Create Account</h1>
              <p className="text-muted-foreground font-body text-sm">Join the Shree Radhe digital showroom ecosystem.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-muted-foreground font-body block mb-2 uppercase tracking-widest">Full Name</label>
                  <Input value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" className="font-body h-12 border-[#E8E4DF] focus:border-accent rounded-sm" />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground font-body block mb-2 uppercase tracking-widest">Phone</label>
                  <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91" className="font-body h-12 border-[#E8E4DF] focus:border-accent rounded-sm" />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground font-body block mb-2 uppercase tracking-widest">Email Address</label>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="font-body h-12 border-[#E8E4DF] focus:border-accent rounded-sm" />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground font-body block mb-2 uppercase tracking-widest">Set Password</label>
                <div className="relative">
                  <Input
                    type={showPw ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Min 6 characters"
                    className="font-body h-12 border-[#E8E4DF] focus:border-accent pr-10 rounded-sm"
                  />
                  <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                    {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              
              <div className="pt-2">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#1A1A1A] text-white hover:bg-[#C9A84C] hover:text-white font-body font-medium h-12 transition-all rounded-sm"
                  disabled={loading}
                >
                  {loading ? "Registering..." : "Create Account"}
                </Button>
                
                <p className="text-[12px] text-muted-foreground text-center mt-6 font-body leading-relaxed">
                  By continuing, you agree to our{" "}
                  <Link to="/policies/terms" target="_blank" className="text-[#C9A84C] underline hover:text-[#C9A84C]/80 transition-colors">Terms of Service</Link>
                  {" "}and{" "}
                  <Link to="/policies/privacy" target="_blank" className="text-[#C9A84C] underline hover:text-[#C9A84C]/80 transition-colors">Privacy Policy</Link>
                </p>
              </div>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-[#E8E4DF]"></span></div>
                <div className="relative flex justify-center text-[10px] uppercase tracking-widest bg-white px-4 text-muted-foreground">Or Continue With</div>
              </div>

              <Button
                type="button"
                variant="outline"
                onClick={handleGoogleSignup}
                className="w-full h-12 font-body text-[13px] border-[#E8E4DF] text-[#1A1A1A] hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 rounded-sm flex items-center justify-center gap-3 group"
              >
                <svg className="w-4 h-4 transition-colors group-hover:text-white" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Sign Up with Google
              </Button>
            </form>

            <p className="text-center text-xs text-muted-foreground font-body mt-8 tracking-wide">
              Already have an account?{" "}
              <Link to="/login" className="text-accent underline font-medium underline-offset-4">Sign In</Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
