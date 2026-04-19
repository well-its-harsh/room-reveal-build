import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { ProductWithDetails, Category as DBCategory } from "@/types/database";
import { demoCategories, demoProducts } from "@/data/demoData";
import { AREAS, Category as FileCategory } from "@/data/categories";

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
      return data as DBCategory[];
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

export function useAreas() {
  return useQuery({
    queryKey: ["areas"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("areas")
        .select("*")
        .eq("is_active", true)
        .order("sort_order");
      if (error) throw error;
      return data || [];
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

export interface ProductFilters {
  categorySlug?: string;
  search?: string;
  sortBy?: "newest" | "price-asc" | "price-desc" | "name";
  arOnly?: boolean;
}

export function useProducts(filters: ProductFilters = {}) {
  const { categorySlug, search, sortBy, arOnly } = filters;

  return useQuery({
    queryKey: ["products", filters],
    queryFn: async () => {
      let query = supabase
        .from("products")
        .select("*,categories!inner(*),product_media(*),inventory(*),ar_assets(*),product_variants(*)")
        .eq("status", "active");

      if (categorySlug && categorySlug !== "all") {
        query = query.eq("categories.slug", categorySlug);
      }

      if (search) {
        const lowerSearch = search.toLowerCase();
        const matchingSlugs: string[] = [];
        const matchingNames: string[] = [];

        AREAS.forEach(area => {
          const areaMatch = area.name.toLowerCase().includes(lowerSearch);
          area.categories.forEach(cat => {
            const catMatch = cat.name.toLowerCase().includes(lowerSearch);
            const subMatch = cat.subcategories.some(sub => sub.name.toLowerCase().includes(lowerSearch));
            
            if (areaMatch || catMatch || subMatch) {
              matchingSlugs.push(cat.slug);
              matchingNames.push(cat.name);
            }
          });
        });

        if (matchingSlugs.length > 0 || matchingNames.length > 0) {
          // Build OR query components
          const components = [`name.ilike.%${search}%`];
          if (matchingSlugs.length > 0) {
            components.push(`categories.slug.in.(${matchingSlugs.join(',')})`);
          }
          if (matchingNames.length > 0) {
            // Note: Names might have spaces/special chars, so we use ilike for each if needed, 
            // but for simplicity and 'in' support we'll try 'in' with quotes if possible.
            // Supabase 'in' supports simple comma separated strings.
            components.push(`categories.name.in.(${matchingNames.map(n => `"${n}"`).join(',')})`);
          }
          query = query.or(components.join(','));
        } else {
          query = query.ilike("name", `%${search}%`);
        }
      }

      if (arOnly) {
        query = query.eq("ar_enabled", true);
      }

      switch (sortBy) {
        case "price-asc": query = query.order("price", { ascending: true }); break;
        case "price-desc": query = query.order("price", { ascending: false }); break;
        case "name": query = query.order("name", { ascending: true }); break;
        default: query = query.order("created_at", { ascending: false });
      }

      const { data, error } = await query;
      if (error) throw error;

      if (!data || data.length === 0) {
        return demoProducts.filter(p => {
          if (categorySlug && categorySlug !== "all" && p.category?.slug !== categorySlug) return false;
          if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
          return true;
        }) as ProductWithDetails[];
      }

      return data.map((p: any) => ({
        ...p,
        category: p.categories || p.category,
        variants: p.product_variants
      })) as ProductWithDetails[];
    },
    staleTime: 1000 * 30, // 30 seconds
  });
}

// FIX 5 — includes product_media so ProductCard images render in Trending section
export function useFeaturedProducts() {
  return useQuery({
    queryKey: ["featured-products"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*,categories(*),product_media(*),inventory(*)")
        .eq("status", "active")
        .or("is_featured.eq.true,is_on_sale.eq.true")
        .order("created_at", { ascending: false });
      if (error) throw error;
      if (!data || data.length === 0) return demoProducts as ProductWithDetails[];
      return data.map((p: any) => ({ ...p, category: p.categories })) as ProductWithDetails[];
    },
    staleTime: 1000 * 30, // 30 seconds
  });
}

export function useProduct(id: string) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const demo = demoProducts.find(p => p.id === id);

      const { data, error } = await supabase
        .from("products")
        .select("*,categories(*),product_media(*),inventory(*),ar_assets(*),product_variants(*)")
        .eq("id", id)
        .maybeSingle();

      if (error) throw error;
      if (data) return { 
        ...data, 
        category: data.categories,
        variants: data.product_variants 
      } as unknown as ProductWithDetails;
      if (demo) return demo;
      return null;
    },
    enabled: !!id,
    staleTime: 1000 * 30, // 30 seconds
    gcTime: 1000 * 60 * 30, // Keep in memory for 30 minutes
  });
}

export function useRelatedProducts(categoryId: string, excludeId: string) {
  return useQuery({
    queryKey: ["related-products", categoryId, excludeId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*,categories(*),product_media(*),inventory(*),ar_assets(*)")
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
