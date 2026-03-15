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
      // Return demo data if DB is empty
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
          category:categories(*),
          product_media(*),
          inventory(*)
        `)
        .order("created_at", { ascending: false });

      if (categorySlug && categorySlug !== "all") {
        query = supabase
          .from("products")
          .select(`
            *,
            category:categories!inner(*),
            product_media(*),
            inventory(*)
          `)
          .eq("category.slug", categorySlug)
          .order("created_at", { ascending: false });
      }

      const { data, error } = await query;
      if (error) throw error;

      // Return demo data if DB is empty
      if (!data || data.length === 0) {
        if (categorySlug && categorySlug !== "all") {
          return demoProducts.filter(p => p.category?.slug === categorySlug);
        }
        return demoProducts;
      }
      return data as ProductWithDetails[];
    },
  });
}

export function useProduct(id: string) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      // Check demo products first
      const demo = demoProducts.find(p => p.id === id);
      
      const { data, error } = await supabase
        .from("products")
        .select(`
          *,
          category:categories(*),
          product_media(*),
          inventory(*),
          reviews(*)
        `)
        .eq("id", id)
        .maybeSingle();

      if (error) throw error;
      if (data) return data as ProductWithDetails;
      
      // Return demo product if not found in DB
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
          category:categories(*),
          product_media(*),
          inventory(*)
        `)
        .eq("category_id", categoryId)
        .neq("id", excludeId)
        .limit(4);
      if (error) throw error;

      // Fallback to demo data
      if (!data || data.length === 0) {
        return demoProducts
          .filter(p => p.category_id === categoryId && p.id !== excludeId)
          .slice(0, 4);
      }
      return data as ProductWithDetails[];
    },
    enabled: !!categoryId && !!excludeId,
  });
}
