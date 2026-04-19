import { createContext, useContext, useEffect, ReactNode, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "./AuthContext";
import { toast } from "sonner";
import { track } from "@/lib/analytics";

interface WishlistContextType {
  items: string[];
  toggle: (productId: string) => Promise<void>;
  isWishlisted: (productId: string) => boolean;
  isLoading: boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [items, setItems] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch Wishlist on mount/user change
  useEffect(() => {
    const fetchWishlist = async () => {
      if (!user) {
        setItems([]);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      const { data, error } = await supabase
        .from("wishlists")
        .select("product_id")
        .eq("user_id", user.id);

      if (!error && data) {
        setItems(data.map((i) => i.product_id));
      }
      setIsLoading(false);
    };

    fetchWishlist();
  }, [user]);

  const toggle = async (productId: string) => {
    if (!user) {
      toast.error("Please login to manage your wishlist");
      window.location.href = `/login?returnTo=${encodeURIComponent(window.location.pathname)}`;
      return;
    }

    const isExisting = items.includes(productId);
    
    if (isExisting) {
      // Remove
      setItems((prev) => prev.filter((id) => id !== productId));
      const { error } = await supabase
        .from("wishlists")
        .delete()
        .eq("user_id", user.id)
        .eq("product_id", productId);
      
      if (error) {
        setItems((prev) => [...prev, productId]);
        toast.error("Failed to update wishlist");
      }
    } else {
      // Add
      setItems((prev) => [...prev, productId]);
      const { error } = await supabase
        .from("wishlists")
        .insert({ user_id: user.id, product_id: productId });
      
      if (error) {
        setItems((prev) => prev.filter((id) => id !== productId));
        toast.error("Failed to update wishlist");
      } else {
        toast.success("Added to wishlist");
        track('wishlist_add', { product_id: productId });
      }
    }
  };

  const isWishlisted = (productId: string) => items.includes(productId);

  return (
    <WishlistContext.Provider value={{ items, toggle, isWishlisted, isLoading }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
}
