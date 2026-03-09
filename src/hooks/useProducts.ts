import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { ProductWithDetails, Category } from "@/types/database";

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("categories")
        .select("*")
        .order("name");
      if (error) throw error;
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
        // Join with categories and filter by slug
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
      return data as ProductWithDetails[];
    },
  });
}

export function useProduct(id: string) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
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
        .single();
      if (error) throw error;
      return data as ProductWithDetails;
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
      return data as ProductWithDetails[];
    },
    enabled: !!categoryId && !!excludeId,
  });
}
