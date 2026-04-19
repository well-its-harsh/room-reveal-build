import { Link, useLocation, useNavigate } from "react-router-dom";
import { STORE_INFO } from "@/constants/storeInfo";
import { useState, useEffect, useRef, useMemo } from "react";
import { toast } from "sonner";
import {
  Menu, X, Search, Heart, User, LogOut, Phone,
  ChevronDown, MapPin, MessageCircle, ArrowUp, Send,
  Calendar, Video, Mic, Bell, Mail
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import { motion, AnimatePresence } from "framer-motion";
import { useWishlist } from "@/contexts/WishlistContext";
import { useAuth } from "@/contexts/AuthContext";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getNavMegaMenu } from "@/data/categories";
import Fuse from 'fuse.js';
import { getCategoryKeywords, enrichProductWithKeywords } from "@/utils/searchKeywords";
import { useSearchData } from "@/hooks/useSearchData";
import { useCategories, useAreas, useFeaturedProducts } from "@/hooks/useProducts";
import FloatingChatbot from "@/components/FloatingChatbot";
import ChatWidget from "@/components/ChatWidget";
import CookieBanner from "@/components/legal/CookieBanner";

/* ─────────────────────────── constants ─────────────────────────── */

const PROMO_MESSAGES = [
  "🏠 Visit our flagship showroom — Mon–Sat 10am–7pm",
  "✨ Expert design consultation for your dream home",
  "📞 Phone: +91 75887 51610 | WhatsApp: 24/7 Support",
  "🎁 Authorized partners for Viking, Aurum & more",
];

/* megaMenu data now sourced from @/data/categories via getNavMegaMenu() */

const quickLinks = [
  { to: "/products", label: "Shop" },
  { to: "/about", label: "About Us" },
  { to: "/ai-makeover", label: "AI Makeover" },
  { to: "/contact", label: "Contact" },
];

const CHAT_STARTERS = [
  "Show me floor tiles",
  "Anti-skid bathroom tiles",
  "Book a store visit",
  "Designer tiles for living room",
  "Hardware for kitchen",
];

/* ─────────────────────────── PromoBanner ─────────────────────────── */

function PromoBanner({ onClose }: { onClose: () => void }) {
  const repeated = [...PROMO_MESSAGES, ...PROMO_MESSAGES];
  return (
    <div className="bg-[#1A1A1A] text-white h-10 flex items-center overflow-hidden relative z-[110]">
      <div className="animate-marquee whitespace-nowrap">
        {repeated.map((msg, i) => (
          <span key={i} className="inline-block px-12 text-[13px] font-light tracking-wide">
            {msg}
          </span>
        ))}
      </div>
      <button
        onClick={onClose}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors z-10"
        aria-label="Close banner"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}

/* ─────────────────────────── MegaMenu (old panel removed — replaced by full-width dropdown) ─────────────────────────── */

/* ─────────────────────────── ChatbotFAB ─────────────────────────── */

// FloatingChatbot is now imported from its own file

/* ─────────────────────────── WhatsApp FAB ─────────────────────────── */


function WhatsAppFAB() {
  return (
    <a
      href={`https://wa.me/${STORE_INFO.primaryPhone.replace(/\+/g, '')}`}
      target="_blank"
      rel="noopener noreferrer"
      className="relative shrink-0 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-200"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.112 1.524 5.835L.057 23.215c-.09.382.238.714.62.625l5.514-1.454A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.803 9.803 0 01-5.015-1.375l-.36-.214-3.728.983.996-3.638-.235-.373A9.79 9.79 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
      </svg>
    </a>
  );
}

/* ─────────────────────────── ScrollToTop ─────────────────────────── */

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-[152px] right-5 z-[199] w-10 h-10 rounded-full bg-[#1A1A1A] text-white shadow-lg flex items-center justify-center hover:bg-[#333] transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ─────────────────────────── Footer ─────────────────────────── */

function Footer() {
  return (
    <footer className="bg-[#F7F5F2] border-t border-[#E8E4DF] mt-20">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2.5 mb-4">
              <img src="/assets/logo.jpg" alt="Shree Radhe Logo" className="w-10 h-10 rounded-full object-cover border border-[#C8860A]/30" />
              <div>
                <span className="text-[#1A1A1A] text-base font-semibold leading-tight block">
                  {STORE_INFO.name.split(' ').slice(0, 2).join(' ')}
                </span>
                <span className="text-[#C8860A] text-[11px] font-medium uppercase tracking-[0.15em]">
                  {STORE_INFO.name.split(' ').slice(2).join(' ')}
                </span>
              </div>
            </Link>
            <p className="text-[13px] text-[#6B6B6B] leading-relaxed mb-4 max-w-[220px]">
              Premium tiles, sanitaryware & hardware for beautiful Indian homes. Trusted legacy.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {["facebook", "instagram", "youtube"].map((s) => (
                <a key={s} href="#" className="w-8 h-8 rounded-full border border-[#E8E4DF] flex items-center justify-center text-[#6B6B6B] hover:border-[#C8860A] hover:text-[#C8860A] transition-colors text-[10px] font-bold uppercase">
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#1A1A1A] mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { to: "/", label: "Home" },
                { to: "/products", label: "Browse Catalog" },
                { to: "/ai-makeover", label: "AI Makeover" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="text-[13px] text-[#6B6B6B] hover:text-[#C8860A] transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Brands */}
          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#1A1A1A] mb-4">Our Brands</h4>
            <div className="flex flex-col gap-2.5">
              {STORE_INFO.brands.map((brand) => (
                <span key={brand} className="text-[13px] text-[#6B6B6B]">
                  {brand}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#1A1A1A] mb-4">Visit Us</h4>
            <div className="space-y-3">
              <div className="flex gap-2.5">
                <MapPin className="w-4 h-4 text-[#C8860A] flex-shrink-0 mt-0.5" />
                <p className="text-[13px] text-[#6B6B6B] leading-relaxed">{STORE_INFO.address.full}</p>
              </div>
              <div className="flex gap-2.5">
                <Phone className="w-4 h-4 text-[#C8860A] flex-shrink-0 mt-0.5" />
                <a href={`tel:${STORE_INFO.primaryPhone}`} className="text-[13px] text-[#6B6B6B] hover:text-[#C8860A] transition-colors">
                  {STORE_INFO.primaryPhoneDisplay}
                </a>
              </div>
              <div className="flex gap-2.5">
                <Mail className="w-4 h-4 text-[#C8860A] flex-shrink-0 mt-0.5" />
                <a href={`mailto:${STORE_INFO.email}`} className="text-[13px] text-[#6B6B6B] hover:text-[#C8860A] transition-colors">
                  {STORE_INFO.email}
                </a>
              </div>
              <div className="pt-2">
                <p className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-wider">GST No: {STORE_INFO.gst}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#E8E4DF]">
        <div className="container py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[#6B6B6B]">© 2025 {STORE_INFO.name}. All rights reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
            {[
              { to: "/policies/privacy", label: "Privacy Policy" },
              { to: "/policies/terms", label: "Terms of Service" },
              { to: "/policies/cookies", label: "Cookie Policy" },
              { to: "/data-deletion", label: "Data Deletion Request" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-[12px] text-[#6B6B6B] hover:text-[#C8860A] transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────── NavLink (Row 2 luxury link) ─────────────────────────── */

function NavLink({ to, label, active }: { to: string; label: string; active: boolean }) {
  return (
    <Link
      to={to}
      className={`group relative flex items-center px-5 h-full font-serif text-[14px] tracking-[0.08em] transition-colors ${
        active ? "text-[#C8860A]" : "text-[#1A1A1A] hover:text-[#C8860A]"
      }`}
    >
      <span className="relative">
        {label}
        <span
          className={`absolute left-0 -bottom-1 h-[2px] bg-[#C8860A] transition-all duration-300 ${
            active ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />
      </span>
    </Link>
  );
}

/* ─────────────────────────── Main Layout ─────────────────────────── */

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showPromo, setShowPromo] = useState(true);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Fuzzy search data
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [allCollections, setAllCollections] = useState<any[]>([]);
  
  // Global Data Pre-fetching for Performance
  const { data: searchData, isLoading: searchLoading } = useSearchData();
  useCategories(); 
  useAreas();
  useFeaturedProducts();

  useEffect(() => {
    if (searchData) {
      setAllProducts(searchData.products);
      setAllCollections(searchData.collections);
    }
  }, [searchData]);

  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { items: wishlistItems } = useWishlist();
  const { user, role, signOut } = useAuth();
  const queryClient = useQueryClient();
  const menuTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const navMegaMenu = useMemo(() => getNavMegaMenu(), []);

  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const notificationsRef = useRef<HTMLDivElement>(null);

  // Fetch notifications
  const { data: notifications = [], refetch: refetchNotifications } = useQuery({
    queryKey: ["notifications", user?.id],
    queryFn: async () => {
      if (!user) return [];
      const { data, error } = await supabase
        .from("notifications")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })
        .limit(10);
      if (error) throw error;
      return data;
    },
    enabled: !!user,
  });

  useEffect(() => {
    if (!user) return;

    const channel = supabase
      .channel(`notifications-${user.id}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "notifications",
          filter: `user_id=eq.${user.id}`,
        },
        () => {
          refetchNotifications();
          toast.info("New notification received!");
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user, refetchNotifications]);

  const unreadCount = notifications.filter(n => !n.is_read).length;

  const markAsRead = async (id: string) => {
    await supabase.from("notifications").update({ is_read: true }).eq("id", id);
    refetchNotifications();
  };

  const [searchFocused, setSearchFocused] = useState(false);
  const [suggestedProducts, setSuggestedProducts] = useState<any[]>([]);
  const [suggestedCategories, setSuggestedCategories] = useState<any[]>([]);
  const keywordsMap = useMemo(() => getCategoryKeywords(), []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchFocused(false);
      }
      if (categoriesRef.current && !categoriesRef.current.contains(event.target as Node)) {
        setCategoriesOpen(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setNotificationsOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSearchFocused(false);
        setCategoriesOpen(false);
        setNotificationsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Fuzzy Search Instances
  const productFuse = useMemo(() => {
    return new Fuse(allProducts, {
      keys: [
        { name: 'name', weight: 0.6 },
        { name: 'search_keywords', weight: 0.3 },
        { name: 'categories.name', weight: 0.2 },
        { name: 'category.name', weight: 0.2 },
        { name: 'brand', weight: 0.15 },
        { name: 'description', weight: 0.05 }
      ],
      threshold: 0.4,
      includeScore: true,
      minMatchCharLength: 2,
      ignoreLocation: true
    });
  }, [allProducts]);

  const collectionFuse = useMemo(() => {
    return new Fuse(allCollections, {
      keys: [{ name: 'name', weight: 1.0 }],
      threshold: 0.3,
      includeScore: true,
      minMatchCharLength: 2
    });
  }, [allCollections]);

  // Fetch suggestions when searchFocused and searchData is ready
  useEffect(() => {
    if (!searchFocused || !searchData) return;
    
    if (searchQuery.length < 2) {
      setSuggestedProducts([]);
      setSuggestedCategories([]);
      return;
    }

    const pResults = productFuse.search(searchQuery).slice(0, 5).map(r => r.item);
    const cResults = collectionFuse.search(searchQuery).slice(0, 4).map(r => r.item);

    setSuggestedProducts(pResults);
    setSuggestedCategories(cResults);
  }, [searchQuery, searchFocused, searchData, productFuse, collectionFuse]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setActiveMenu(null);
    setCategoriesOpen(false);
  }, [location.pathname]);

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("Signed out successfully");
      setSearchQuery("");
      setSearchFocused(false);
      setMenuOpen(false);
      navigate("/");
    } catch (err) {
      console.error("Logout error:", err);
      toast.error("Session cleared.");
      navigate("/login");
    }
  };

  const [placeholder, setPlaceholder] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const SEARCH_PHRASES = [
    "Search for Designer Faucets...",
    "Search for Vitrified Tiles...",
    "Search for Kitchen Sinks...",
    "Search for Door Hardware...",
    "Search for Luxury Basins...",
    "Search for Cabinet Handles..."
  ];

  // Typewriter effect
  useEffect(() => {
    const currentPhrase = SEARCH_PHRASES[placeholderIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentPhrase.length) {
        setPlaceholder(currentPhrase.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setPlaceholder(currentPhrase.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setPlaceholderIndex((prev) => (prev + 1) % SEARCH_PHRASES.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, placeholderIndex]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchFocused(false);
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate(`/search`);
    }
  };

  const startVoiceSearch = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Voice search is not supported in your browser. Please use Chrome.');
      return;
    }
    
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.lang = 'en-IN';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    
    recognition.onstart = () => {
      setIsListening(true);
    };
    
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setSearchQuery(transcript);
      setIsListening(false);
      navigate(`/search?q=${encodeURIComponent(transcript)}`);
    };
    
    recognition.onerror = (event: any) => {
      setIsListening(false);
      if (event.error === 'not-allowed') {
        alert('Microphone access denied. Please allow microphone access in your browser settings.');
      }
    };
    
    recognition.onend = () => setIsListening(false);
    recognition.start();
  };

  const handleMouseEnter = (key: string) => {
    if (menuTimerRef.current) clearTimeout(menuTimerRef.current);
    setActiveMenu(key);
  };
  const handleMouseLeave = () => {
    menuTimerRef.current = setTimeout(() => setActiveMenu(null), 120);
  };

  const wishlistCount = wishlistItems.length;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* ── Promotional Bar ── */}
      <AnimatePresence>
        {showPromo && (
          <motion.div
            key="promo"
            initial={{ height: 40, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <PromoBanner onClose={() => setShowPromo(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Sticky Header ── */}
      <header
        className={`sticky top-0 z-[150] bg-white transition-all duration-300 ${
          scrolled ? "shadow-[0_1px_12px_rgba(0,0,0,0.08)]" : "border-b border-[#E8E4DF]"
        }`}
      >
        {/* Overlay background when search is focused */}
        <AnimatePresence>
          {searchFocused && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-[-1]"
              onClick={() => setSearchFocused(false)}
            />
          )}
        </AnimatePresence>
        {/* Row 1: Logo + Search + Actions */}
        <div className="container">
          <div className="flex items-center gap-6 h-20">
            {/* Logo — Luxury Styled */}
            <Link to="/" className="flex-shrink-0 group flex items-center gap-2.5">
              <img src="/assets/logo.jpg" alt="Shree Radhe Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-[#C8860A]/30 group-hover:border-[#C8860A] transition-all" />
              <div>
                <span className="text-[#1A1A1A] text-2xl md:text-3xl font-serif font-bold tracking-tight block hover:text-[#C8860A] transition-colors">
                  Shree Radhe
                </span>
                <span className="text-[#C8860A] text-[9px] font-semibold uppercase tracking-[0.25em] block -mt-1 opacity-80">
                  Tiles & Hardware
                </span>
              </div>
            </Link>

            {/* Search bar — desktop pill-shaped */}
            <div ref={searchRef} className="hidden md:block flex-1 max-w-2xl relative">
              <form 
                onSubmit={handleSearch} 
                className={`relative flex items-center bg-[#F7F5F2] rounded-full border transition-all duration-300 ${
                  searchFocused ? "border-[#C8860A] shadow-lg ring-1 ring-[#C8860A]/20" : "border-[#E8E4DF] hover:border-[#C8860A]/50"
                }`}
              >
                <div className="pl-5 cursor-pointer" onClick={() => setSearchFocused(true)}>
                  <Search className={`w-4 h-4 ${searchFocused ? "text-[#C8860A]" : "text-[#6B6B6B]"}`} />
                </div>
                <input
                  value={searchQuery}
                  onFocus={() => { setSearchFocused(true); }}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={placeholder}
                  className="flex-1 px-3 py-3 text-[14px] outline-none bg-transparent text-[#1A1A1A] placeholder:text-[#6B6B6B]"
                />
                <div className="flex items-center pr-2">
                  {isListening && <span className="text-[10px] text-[#C8860A] font-bold animate-pulse mr-2">Listening...</span>}
                  <button 
                    type="button" 
                    onClick={startVoiceSearch}
                    className={`p-2 rounded-full transition-all duration-300 ${isListening ? "bg-[#C8860A] text-white animate-pulse" : "text-[#6B6B6B] hover:text-[#C8860A]"}`}
                  >
                    <Mic className="w-4 h-4" />
                  </button>
                </div>
              </form>

              {/* Expansion Card (Floating Card) */}
              <AnimatePresence>
                {searchFocused && (searchQuery.length > 0) && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 right-0 mt-3 p-5 bg-white rounded-2xl shadow-2xl z-[160] border border-[#E8E4DF]"
                  >
                    <div className="space-y-6">
                      {/* Products section */}
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-[#6B6B6B] mb-3">Products</p>
                        <div className="grid grid-cols-1 gap-3">
                          {suggestedProducts.length > 0 ? (
                            suggestedProducts.map(p => (
                              <button 
                                key={p.id}
                                onClick={() => { setSearchQuery(""); setSearchFocused(false); navigate(`/product/${p.id}`); }}
                                className="flex items-center gap-3 p-2 hover:bg-[#F7F5F2] rounded-xl transition-colors text-left border border-transparent hover:border-[#E8E4DF]"
                              >
                                <img 
                                  src={p.product_media?.[0]?.media_url || "/placeholder.svg"} 
                                  alt={p.name}
                                  className="w-12 h-12 object-cover rounded-lg bg-[#F7F5F2]"
                                />
                                <div className="flex-1 min-w-0">
                                  <p className="text-[14px] font-medium text-[#1A1A1A] truncate">{p.name}</p>
                                  <p className="text-[12px] text-[#C8860A] font-bold">
                                    ₹{p.price?.toLocaleString("en-IN")}
                                  </p>
                                </div>
                              </button>
                            ))
                          ) : (
                            <p className="text-[13px] text-[#6B6B6B]">No products found</p>
                          )}
                        </div>
                      </div>

                      {/* Collections section */}
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-[#6B6B6B] mb-3">Collections</p>
                        <div className="flex flex-wrap gap-2">
                          {suggestedCategories.length > 0 ? (
                            suggestedCategories.map(c => (
                              <button 
                                key={c.slug || c.id}
                                onClick={() => { 
                                  setSearchQuery(""); 
                                  setSearchFocused(false); 
                                  navigate(c.image_url ? `/category/${c.slug}` : `/area/${c.slug}`); 
                                }}
                                className="px-4 py-1.5 rounded-full bg-white hover:border-[#1A1A1A] text-[13px] text-[#1A1A1A] transition-all border border-[#E8E4DF]"
                              >
                                {c.name}
                              </button>
                            ))
                          ) : (
                            <p className="text-[13px] text-[#6B6B6B]">Explore our areas</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2 ml-auto">
              {/* Account/User */}
              {user ? (
                <>
                  <div className="relative" ref={notificationsRef}>
                    <button 
                      onClick={() => setNotificationsOpen(!notificationsOpen)}
                      className="p-3 text-[#1A1A1A] hover:text-[#C8860A] transition-colors rounded-full hover:bg-[#F7F5F2] relative"
                      title="Notifications"
                    >
                      <Bell className="w-5 h-5" />
                      {unreadCount > 0 && (
                        <span className="absolute top-2 right-2 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                          {unreadCount}
                        </span>
                      )}
                    </button>

                    <AnimatePresence>
                      {notificationsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          className="absolute right-0 mt-2 w-80 bg-white border border-[#E8E4DF] rounded-xl shadow-2xl z-[200] overflow-hidden"
                        >
                          <div className="px-4 py-3 border-b border-[#E8E4DF] bg-[#F7F5F2] flex justify-between items-center">
                            <span className="font-bold text-[14px]">Notifications</span>
                            {unreadCount > 0 && (
                              <button 
                                onClick={async () => {
                                  await supabase.from("notifications").update({ is_read: true }).eq("user_id", user.id);
                                  refetchNotifications();
                                }}
                                className="text-[11px] text-[#C8860A] hover:underline"
                              >
                                Mark all as read
                              </button>
                            )}
                          </div>
                          <div className="max-h-80 overflow-y-auto">
                            {notifications.length > 0 ? (
                              <>
                                {notifications.map((n) => (
                                  <div 
                                    key={n.id} 
                                    onClick={() => {
                                      markAsRead(n.id);
                                      if (n.link) navigate(n.link);
                                      setNotificationsOpen(false);
                                    }}
                                    className={`px-4 py-3 border-b border-[#E8E4DF] last:border-0 cursor-pointer hover:bg-gray-50 transition-colors ${!n.is_read ? "bg-blue-50/30" : ""}`}
                                  >
                                    {n.title && <p className="font-bold text-[13px] mb-0.5 text-[#1A1A1A]">{n.title}</p>}
                                    <p className="text-[12px] text-[#6B6B6B] leading-relaxed line-clamp-2">{n.message}</p>
                                    <p className="text-[10px] text-[#999] mt-1">{new Date(n.created_at).toLocaleDateString()}</p>
                                  </div>
                                ))}
                                <Link 
                                  to="/account/notifications" 
                                  onClick={() => setNotificationsOpen(false)}
                                  className="block py-3 text-center text-[12px] font-bold text-[#C8860A] hover:bg-gray-50 border-t border-[#E8E4DF]"
                                >
                                  View all notifications
                                </Link>
                              </>
                            ) : (
                              <div className="px-4 py-8 text-center text-[#6B6B6B] text-[13px]">
                                No new notifications
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <Link
                    to={role === "owner" ? "/owner/profile" : "/profile"}
                    className="p-3 text-[#1A1A1A] hover:text-[#C8860A] transition-colors rounded-full hover:bg-secondary"
                    title="My Account"
                  >
                    <User className="w-5 h-5" />
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="p-3 text-[#1A1A1A] hover:text-red-600 transition-colors rounded-full hover:bg-red-50"
                    title="Logout"
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="p-3 text-[#1A1A1A] hover:text-[#C8860A] transition-colors rounded-full hover:bg-secondary"
                  title="Login"
                >
                  <User className="w-5 h-5" />
                </Link>
              )}

              {/* Wishlist */}
              <Link
                to="/profile/wishlist"
                className="relative p-3 text-[#1A1A1A] hover:text-[#C8860A] transition-colors rounded-full hover:bg-secondary"
                title="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-2.5 right-2.5 w-4 h-4 bg-[#C8860A] text-white text-[9px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Book Visit Button — Gradient Rounded */}
              <Link
                to="/book-visit"
                className="hidden md:flex items-center gap-2 ml-4 px-6 py-2.5 bg-gradient-to-r from-[#1A1A1A] to-[#333] text-white text-[13px] font-medium rounded-full border-2 border-[#C8860A] hover:from-[#C8860A] hover:to-[#A36D07] hover:border-transparent transition-all duration-500 shadow-md group"
              >
                <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>BOOK A VISIT</span>
              </Link>
              {/* Owner link */}
              {role === "owner" && (
                <Link
                  to="/owner"
                  className="hidden md:flex px-3 py-1.5 text-[13px] text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors"
                >
                  Dashboard
                </Link>
              )}
            </div>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMenuOpen(true)}
                className="md:hidden p-2 text-[#1A1A1A]"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
          </div>
        </div>

        {/* ═══════════════ Row 2: Luxury Nav Bar ═══════════════ */}
        <div className="hidden md:block border-t border-[#E8E4DF] border-b border-b-[#C8860A]/20" ref={categoriesRef}>
          <div className="container">
            <nav className="flex items-center justify-center gap-0 h-11">
              {/* Home */}
              <NavLink to="/" label="Home" active={location.pathname === "/"} />

              {/* Categories trigger */}
              <div className="group relative flex items-center h-full">
                <Link
                  to="/categories"
                  className={`flex items-center pl-5 pr-1 h-full font-serif text-[14px] tracking-[0.08em] transition-colors ${
                    location.pathname === "/categories" ? "text-[#C8860A]" : "text-[#1A1A1A] hover:text-[#C8860A]"
                  }`}
                  onClick={() => setCategoriesOpen(false)}
                >
                  <span className="relative">
                    Categories
                    <span className={`absolute left-0 -bottom-1 h-[2px] bg-[#C8860A] transition-all duration-300 ${
                      location.pathname === "/categories" ? "w-full" : "w-0 group-hover:w-full"
                    }`} />
                  </span>
                </Link>
                <button
                  onClick={() => setCategoriesOpen((v) => !v)}
                  className="pr-5 py-2 text-[#1A1A1A] hover:text-[#C8860A]"
                >
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${categoriesOpen ? "rotate-180" : ""}`} />
                </button>
              </div>

              {/* Quick links */}
              {quickLinks.map((l) => (
                <NavLink key={l.to} to={l.to} label={l.label} active={location.pathname === l.to} />
              ))}

              {/* Videos */}
              <NavLink to="/videos" label="Videos" active={location.pathname === "/videos"} />
            </nav>
          </div>

          {/* ── Full-width Categories Mega Menu Dropdown ── */}
          <AnimatePresence>
            {categoriesOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden border-t border-[#E8E4DF]"
              >
                <div className="bg-white shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
                  <div className="container py-8 px-6">
                    <div className="grid grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-8 gap-y-8">
                      {navMegaMenu.map((areaGroup) => (
                        <div key={areaGroup.areaSlug}>
                          {/* Area heading */}
                          <Link
                            to={`/area/${areaGroup.areaSlug}`}
                            onClick={() => setCategoriesOpen(false)}
                            className="group/area inline-block mb-3"
                          >
                            <span className="font-serif text-[13px] font-bold text-[#1A1A1A] tracking-[0.06em] uppercase group-hover/area:text-[#C8860A] transition-colors">
                              {areaGroup.area}
                            </span>
                            <span className="block h-[2px] w-0 bg-[#C8860A] group-hover/area:w-full transition-all duration-300 mt-0.5" />
                          </Link>

                          {/* Category links */}
                          <ul className="space-y-1.5">
                            {areaGroup.categories.map((cat) => (
                              <li key={cat.slug}>
                                <Link
                                  to={`/category/${cat.slug}`}
                                  onClick={() => setCategoriesOpen(false)}
                                  className="text-[13px] text-[#6B6B6B] hover:text-[#C8860A] transition-colors leading-snug block"
                                >
                                  {cat.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[120] bg-black/40"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              key="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28 }}
              className="fixed top-0 right-0 h-full w-[min(320px,85vw)] z-[130] bg-white shadow-2xl flex flex-col overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#E8E4DF]">
                <span className="font-semibold text-[15px] text-[#1A1A1A]">Menu</span>
                <button onClick={() => setMenuOpen(false)} className="p-1 text-[#1A1A1A]">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile search */}
              <form onSubmit={handleSearch} className="p-4 border-b border-[#E8E4DF]">
                <div className="flex items-center border border-[#E8E4DF] rounded-sm overflow-hidden">
                  <Search className="w-4 h-4 ml-3 text-[#6B6B6B]" />
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={placeholder}
                    className="flex-1 px-3 py-2.5 text-[14px] outline-none"
                  />
                </div>
              </form>

              <nav className="flex-1 px-2 py-3">
                {/* Mega categories */}
                {navMegaMenu.map((areaGroup) => (
                  <div key={areaGroup.areaSlug} className="mb-1">
                    <button
                      onClick={() => setActiveMenu(activeMenu === areaGroup.areaSlug ? null : areaGroup.areaSlug)}
                      className="w-full flex items-center justify-between px-3 py-3 text-[15px] font-medium text-[#1A1A1A] hover:bg-[#F7F5F2] rounded-sm transition-colors"
                    >
                      {areaGroup.area}
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeMenu === areaGroup.areaSlug ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {activeMenu === areaGroup.areaSlug && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          {areaGroup.categories.map((cat) => (
                            <Link
                              key={cat.slug}
                              to={`/category/${cat.slug}`}
                              onClick={() => setMenuOpen(false)}
                              className="block pl-6 pr-3 py-2.5 text-[14px] text-[#6B6B6B] hover:text-[#C8860A] transition-colors"
                            >
                              {cat.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                {/* Quick links */}
                <div className="mt-2 border-t border-[#E8E4DF] pt-2">
                  {[...quickLinks, { to: "/videos", label: "Videos" }].map((l) => (
                    <Link
                      key={l.to + l.label}
                      to={l.to}
                      onClick={() => setMenuOpen(false)}
                      className="block px-3 py-3 text-[15px] text-[#1A1A1A] hover:text-[#C8860A] hover:bg-[#F7F5F2] rounded-sm transition-colors"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>

                {/* Auth */}
                <div className="mt-2 border-t border-[#E8E4DF] pt-2">
                  {user ? (
                    <>
                      <Link to={role === "owner" ? "/owner/profile" : "/account"} onClick={() => setMenuOpen(false)} className="flex items-center gap-3 px-3 py-3 text-[14px] text-[#1A1A1A]">
                        <User className="w-4 h-4" /> My Account
                      </Link>
                      <button onClick={() => { handleSignOut(); setMenuOpen(false); }} className="flex items-center gap-3 px-3 py-3 text-[14px] text-[#6B6B6B] w-full text-left">
                        <LogOut className="w-4 h-4" /> Sign Out
                      </button>
                    </>
                  ) : (
                    <Link to="/login" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 px-3 py-3 text-[14px] text-[#C8860A] font-medium">
                      <User className="w-4 h-4" /> Sign In
                    </Link>
                  )}
                </div>
              </nav>

              {/* Book visit CTA */}
              <div className="p-4 border-t border-[#E8E4DF]">
                <Link
                  to="/book-visit"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#C8860A] text-white text-[14px] font-medium rounded-sm hover:bg-[#A36D07] transition-colors"
                >
                  <Calendar className="w-4 h-4" /> Book Store Visit
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Main Content ── */}
      <main className="flex-1">{children}</main>

      {/* ── Footer ── */}
      <Footer />

      {/* ── Floating Actions Group ── */}
      <div className="fixed bottom-6 right-5 sm:right-8 z-[200] flex flex-col md:flex-row items-center gap-3 md:gap-4">
        <WhatsAppFAB />
        <ChatWidget 
          isOpen={isChatOpen} 
          setIsOpen={setIsChatOpen}
          shiftLeft={isAiOpen}
          isMobile={isMobile}
        />
        <FloatingChatbot 
          isOpen={isAiOpen} 
          setIsOpen={setIsAiOpen}
          shiftLeft={isChatOpen}
          isMobile={isMobile}
        />
      </div>

      <ScrollToTop />
      <CookieBanner />
    </div>
  );
}
