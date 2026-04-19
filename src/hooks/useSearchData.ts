import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { getCategoryKeywords, enrichProductWithKeywords } from "@/utils/searchKeywords";

export function useSearchData() {
  const keywordsMap = getCategoryKeywords();

  return useQuery({
    queryKey: ["global-search-data"],
    queryFn: async () => {
      console.log("Fetching global search data...");
      const [productsRes, categoriesRes, areasRes] = await Promise.all([
        supabase
          .from("products")
          .select("id, name, price, category_id, brand, description, categories(*), product_media(*)")
          .eq("status", "active"),
        supabase.from("categories").select("id, name, slug, image_url"),
        supabase.from("areas").select("id, name, slug"),
      ]);

      if (productsRes.error) throw productsRes.error;
      if (categoriesRes.error) throw categoriesRes.error;
      if (areasRes.error) throw areasRes.error;

      const enrichedProducts = (productsRes.data || []).map((p: any) => 
        enrichProductWithKeywords(p, keywordsMap)
      );

      return {
        products: enrichedProducts,
        collections: [...(categoriesRes.data || []), ...(areasRes.data || [])],
      };
    },
    staleTime: 1000 * 60 * 30, // Cache for 30 minutes
    gcTime: 1000 * 60 * 60, // Keep in GC for 1 hour
    refetchOnWindowFocus: false,
  });
}
