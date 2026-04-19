import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";

const LOGIN_SLIDES = [
  {
    title: "Premium Stone & Hardware",
    subtitle: "Curated collections from India's finest catalogs."
  },
  {
    title: "Enquiry-First Experience",
    subtitle: "Direct human assistance for your renovation needs."
  },
  {
    title: "AI & AR Powered",
    subtitle: "Visualize products in your room before you decide."
  }
];

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [lockedUntil, setLockedUntil] = useState<Date | null>(null);
  const [lockoutTimer, setLockoutTimer] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const { signIn, signInWithOAuth, profile } = useAuth();
  const navigate = useNavigate();

  // Handle lockout timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (lockedUntil) {
      const updateTimer = () => {
        const now = new Date();
        const diff = Math.max(0, Math.floor((lockedUntil.getTime() - now.getTime()) / 1000));
        setLockoutTimer(diff);
        if (diff === 0) {
          setLockedUntil(null);
          setFailedAttempts(0);
          localStorage.removeItem(`login_attempts_${email}`);
        }
      };
      updateTimer();
      interval = setInterval(updateTimer, 1000);
    }
    return () => clearInterval(interval);
  }, [lockedUntil, email]);

  // Load failed attempts on email change
  useEffect(() => {
    if (email) {
      const stored = localStorage.getItem(`login_attempts_${email}`);
      if (stored) {
        const { count, lockedUntil: storedLock } = JSON.parse(stored);
        if (storedLock && new Date(storedLock) > new Date()) {
          setLockedUntil(new Date(storedLock));
        }
        setFailedAttempts(count);
      } else {
        setFailedAttempts(0);
        setLockedUntil(null);
      }
    }
  }, [email]);

  // Rotating slides
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((s) => (s + 1) % LOGIN_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Redirect after login
  useEffect(() => {
    if (profile) {
      if (profile.role === "admin") navigate("/admin");
      else if (profile.role === "owner") navigate("/owner");
      else navigate("/");
    }
  }, [profile, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) return toast.error("Please fill in all fields");
    
    if (lockedUntil && new Date() < lockedUntil) {
      return toast.error(`Too many failed attempts. Try again in ${Math.ceil(lockoutTimer / 60)} minutes.`);
    }

    setLoading(true);
    const { error } = await signIn(email, password);
    setLoading(false);

    if (error) {
      const newCount = failedAttempts + 1;
      setFailedAttempts(newCount);
      
      let newLockedUntil = null;
      if (newCount >= 5) {
        newLockedUntil = new Date(Date.now() + 15 * 60 * 1000);
        setLockedUntil(newLockedUntil);
        toast.error("Too many failed attempts. Form locked for 15 minutes.");
      } else {
        toast.error(`${error.message} (${5 - newCount} attempts remaining)`);
      }
      
      localStorage.setItem(`login_attempts_${email}`, JSON.stringify({ 
        count: newCount, 
        lockedUntil: newLockedUntil 
      }));
    } else {
      localStorage.removeItem(`login_attempts_${email}`);
      toast.success("Welcome back!");
    }
  };

  const handleGoogleLogin = async () => {
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
              className="w-full h-full bg-[url('/assets/branding/auth_sidebar.jpg')] bg-cover bg-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>
          
          <div className="relative z-10 w-full max-w-xs">
            <div className="mb-12">
              <Link to="/" className="flex items-center gap-2.5 group">
                <img src="/assets/logo.jpg" alt="Shree Radhe Logo" className="w-11 h-11 rounded-full object-cover border-2 border-[#C9A84C]/40 group-hover:border-[#C9A84C] transition-all" />
                <div className="flex flex-col">
                  <span className="text-white text-base font-semibold leading-tight block">Shree Radhe</span>
                  <span className="text-[#C9A84C] text-[10px] font-medium uppercase tracking-widest">Tiles & Hardware</span>
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
                  <span className="inline-block px-3 py-1 rounded-full border border-[#C9A84C]/30 text-[#C9A84C] text-[10px] font-semibold uppercase tracking-widest">
                    {activeSlide + 1} of {LOGIN_SLIDES.length}
                  </span>
                </div>
                <h2 className="text-3xl font-heading font-semibold text-white mb-4 leading-tight">
                  {LOGIN_SLIDES[activeSlide].title}
                </h2>
                <p className="text-white/60 font-body text-sm leading-relaxed mb-8">
                  {LOGIN_SLIDES[activeSlide].subtitle}
                </p>
                
                <div className="flex items-center gap-12">
                  <div className="flex flex-col gap-1">
                    <span className="text-white font-heading font-bold text-xl italic">2.5k+</span>
                    <span className="text-[9px] uppercase tracking-widest text-white/40">Premium SKUs</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-white font-heading font-bold text-xl italic">15y+</span>
                    <span className="text-[9px] uppercase tracking-widest text-white/40">Trust Legacy</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex gap-2 mt-12">
              {LOGIN_SLIDES.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1 rounded-full transition-all duration-500 ${i === activeSlide ? "w-8 bg-[#C9A84C]" : "w-4 bg-white/20"}`} 
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel: Form */}
        <div className="flex-1 flex items-center justify-center p-8 md:p-12 bg-white">
          <div className="w-full max-w-sm">
            <div className="mb-10 md:hidden flex items-center gap-2.5">
              <img src="/assets/logo.jpg" alt="Shree Radhe Logo" className="w-9 h-9 rounded-full object-cover border-2 border-[#C9A84C]/40" />
              <Link to="/" className="font-heading text-xl font-semibold text-foreground tracking-tight">Shree Radhe</Link>
            </div>
            
            <div className="mb-10">
              <h1 className="font-heading text-3xl font-semibold text-foreground tracking-tight mb-2">Welcome Back</h1>
              <p className="text-muted-foreground font-body text-sm">Experience the future of architectural discovery.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-xs font-medium text-muted-foreground font-body block mb-2 uppercase tracking-widest">Email Address</label>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@luxury.com" className="font-body h-12 border-[#E8E4DF] focus:border-accent rounded-sm" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-medium text-muted-foreground font-body uppercase tracking-widest">Password</label>
                  <Link to="/forgot-password" className="text-xs text-accent hover:underline font-body">Forgot Password?</Link>
                </div>
                <div className="relative">
                  <Input
                    type={showPw ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
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
                  disabled={loading || (lockedUntil !== null && lockoutTimer > 0)}
                >
                  {loading ? "Authenticating..." : lockedUntil ? `Locked (${Math.floor(lockoutTimer / 60)}:${(lockoutTimer % 60).toString().padStart(2, '0')})` : "Sign In"}
                </Button>
                
                {lockedUntil && (
                  <p className="text-[11px] text-red-500 text-center mt-2 font-body">
                    Too many failed attempts. Please try again in {Math.ceil(lockoutTimer / 60)} minutes.
                  </p>
                )}
                
                <p className="text-[12px] text-muted-foreground text-center mt-4 font-body leading-relaxed">
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
                onClick={handleGoogleLogin}
                className="w-full h-12 font-body text-[13px] border-[#E8E4DF] text-[#1A1A1A] hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 rounded-sm flex items-center justify-center gap-3 group"
              >
                <svg className="w-4 h-4 transition-colors group-hover:text-white" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Sign In with Google
              </Button>
            </form>

            <p className="text-center text-xs text-muted-foreground font-body mt-8 tracking-wide">
              Don't have an account?{" "}
              <Link to="/signup" className="text-[#C9A84C] underline font-medium underline-offset-4">Create Account</Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
