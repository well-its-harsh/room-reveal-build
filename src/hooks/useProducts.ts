import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { ProductWithDetails, Category } from "@/types/database";
import { demoCategories, demoProducts } from "@/data/demoData";

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("categories")
        .select("*")
        .order("name");
      if (error) throw error;
      if (!data || data.length === 0) return demoCategories;
      return data as Category[];
    },
  });
}

export function useProducts(categorySlug?: string) {
  return useQuery({
    queryKey: ["products", categorySlug],
    queryFn: async () => {
      let query = supabase
        .from("products")
        .select(`
          *,
          categories(name, slug),
          product_media(id, media_url, media_type),
          inventory(id, quantity)
        `)
        .eq("status", "active")
        .order("created_at", { ascending: false });

      if (categorySlug && categorySlug !== "all") {
        query = supabase
          .from("products")
          .select(`
            *,
            categories!inner(name, slug),
            product_media(id, media_url, media_type),
            inventory(id, quantity)
          `)
          .eq("status", "active")
          .eq("categories.slug", categorySlug)
          .order("created_at", { ascending: false });
      }

      const { data, error } = await query;
      if (error) throw error;

      if (!data || data.length === 0) {
        if (categorySlug && categorySlug !== "all") {
          return demoProducts.filter(p => p.category?.slug === categorySlug);
        }
        return demoProducts;
      }

      // Map categories join to category for compatibility
      return data.map((p: any) => ({
        ...p,
        category: p.categories || p.category,
      })) as ProductWithDetails[];
    },
  });
}

export function useFeaturedProducts() {
  return useQuery({
    queryKey: ["featured-products"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select(`
          *,
          categories(name, slug),
          product_media(id, media_url, media_type),
          inventory(id, quantity)
        `)
        .eq("status", "active")
        .eq("is_featured", true)
        .order("created_at", { ascending: false })
        .limit(8);
      if (error) throw error;
      if (!data || data.length === 0) return demoProducts.filter(p => p.is_featured);
      return data.map((p: any) => ({ ...p, category: p.categories })) as ProductWithDetails[];
    },
  });
}

export function useProduct(id: string) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const demo = demoProducts.find(p => p.id === id);

      const { data, error } = await supabase
        .from("products")
        .select(`
          *,
          categories(name, slug),
          product_media(id, media_url, media_type),
          inventory(id, quantity),
          reviews(id, rating, comment, user_id, created_at)
        `)
        .eq("id", id)
        .maybeSingle();

      if (error) throw error;
      if (data) return { ...data, category: data.categories } as unknown as ProductWithDetails;
      if (demo) return demo;
      return null;
    },
    enabled: !!id,
  });
}

export function useRelatedProducts(categoryId: string, excludeId: string) {
  return useQuery({
    queryKey: ["related-products", categoryId, excludeId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select(`
          *,
          categories(name, slug),
          product_media(id, media_url, media_type),
          inventory(id, quantity)
        `)
        .eq("category_id", categoryId)
        .eq("status", "active")
        .neq("id", excludeId)
        .limit(4);
      if (error) throw error;

      if (!data || data.length === 0) {
        return demoProducts
          .filter(p => p.category_id === categoryId && p.id !== excludeId)
          .slice(0, 4);
      }
      return data.map((p: any) => ({ ...p, category: p.categories })) as ProductWithDetails[];
    },
    enabled: !!categoryId && !!excludeId,
  });
}
