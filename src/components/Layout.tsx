import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ShoppingBag, Phone, User, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { items } = useCart();
  const { user, isAdmin, signOut } = useAuth();
  const cartCount = items.reduce((s, i) => s + i.quantity, 0);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="font-heading text-xl font-semibold tracking-tight text-foreground">
            BathHaus
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname === l.to ? "text-accent" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            {isAdmin && (
              <Link
                to="/admin"
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname.startsWith("/admin") ? "text-accent" : "text-muted-foreground"
                }`}
              >
                Admin
              </Link>
            )}
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/cart" className="relative p-2 text-foreground hover:text-accent transition-colors">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent text-accent-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            {user ? (
              <button onClick={handleSignOut} className="hidden md:flex p-2 text-foreground hover:text-accent transition-colors" title="Sign out">
                <LogOut className="w-5 h-5" />
              </button>
            ) : (
              <Link to="/login" className="hidden md:flex p-2 text-foreground hover:text-accent transition-colors" title="Sign in">
                <User className="w-5 h-5" />
              </Link>
            )}
            <a href="tel:+910000000000" className="hidden md:flex p-2 text-foreground hover:text-accent transition-colors">
              <Phone className="w-5 h-5" />
            </a>
            <button onClick={() => setMenuOpen(true)} className="md:hidden p-2 text-foreground">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background"
          >
            <div className="container flex items-center justify-between h-16">
              <span className="font-heading text-xl font-semibold text-foreground">BathHaus</span>
              <button onClick={() => setMenuOpen(false)} className="p-2 text-foreground">
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="container flex flex-col gap-6 pt-8">
              {navLinks.map((l) => (
                <Link key={l.to} to={l.to} onClick={() => setMenuOpen(false)} className="font-heading text-3xl text-foreground hover:text-accent transition-colors">
                  {l.label}
                </Link>
              ))}
              {isAdmin && (
                <Link to="/admin" onClick={() => setMenuOpen(false)} className="font-heading text-3xl text-foreground hover:text-accent transition-colors">
                  Admin
                </Link>
              )}
              <div className="pt-4 border-t border-border">
                {user ? (
                  <button onClick={() => { handleSignOut(); setMenuOpen(false); }} className="font-body text-lg text-muted-foreground">
                    Sign Out
                  </button>
                ) : (
                  <Link to="/login" onClick={() => setMenuOpen(false)} className="font-body text-lg text-accent">
                    Sign In
                  </Link>
                )}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 mt-16">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-lg font-semibold mb-3">BathHaus</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Premium hardware & sanitaryware for modern homes. Trusted by thousands of homeowners since 2010.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold mb-3 uppercase tracking-wider opacity-70">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <Link key={l.to} to={l.to} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold mb-3 uppercase tracking-wider opacity-70">Visit Us</h4>
            <p className="text-sm opacity-80 leading-relaxed">
              123 Main Street, City Center<br />
              Mon–Sat: 9:00 AM – 8:00 PM<br />
              Sun: 10:00 AM – 6:00 PM
            </p>
          </div>
        </div>
        <div className="container mt-8 pt-6 border-t border-primary-foreground/20 text-center text-xs opacity-60">
          © 2025 BathHaus. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
