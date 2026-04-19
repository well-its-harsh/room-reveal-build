import { AREAS, Area, Category, SubCategory } from "@/data/categories";

export interface KeywordsMap {
  [key: string]: string[];
}

export function getCategoryKeywords(): KeywordsMap {
  const map: KeywordsMap = {};

  AREAS.forEach((area: Area) => {
    area.categories.forEach((cat: Category) => {
      const keywords = new Set<string>();
      
      // Add Area name
      keywords.add(area.name.toLowerCase());
      
      // Add Category name
      keywords.add(cat.name.toLowerCase());
      
      // Add Subcategory names
      cat.subcategories.forEach((sub: SubCategory) => {
        keywords.add(sub.name.toLowerCase());
      });

      const keywordArray = Array.from(keywords);
      
      // Map by slug
      map[cat.slug.toLowerCase()] = keywordArray;
      
      // Map by name (lowercased) for more robustness
      map[cat.name.toLowerCase()] = keywordArray;
    });
  });

  return map;
}

export function enrichProductWithKeywords(product: any, keywordsMap: KeywordsMap) {
  const category = product.category || product.categories;
  const categorySlug = category?.slug?.toLowerCase();
  const categoryName = category?.name?.toLowerCase();
  
  // Try matching by slug first, then by name
  const keywords = keywordsMap[categorySlug || ""] || keywordsMap[categoryName || ""] || [];
  
  return {
    ...product,
    search_keywords: keywords.join(" "),
  };
}
