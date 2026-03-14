import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface WishlistContextType {
  items: string[];
  toggle: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("bathhaus_wishlist");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("bathhaus_wishlist", JSON.stringify(items));
  }, [items]);

  const toggle = (productId: string) => {
    setItems((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const isWishlisted = (productId: string) => items.includes(productId);

  return (
    <WishlistContext.Provider value={{ items, toggle, isWishlisted }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
}
