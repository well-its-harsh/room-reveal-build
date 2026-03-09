// Legacy static data types - now fetching from Supabase
// This file is kept for backward compatibility but data comes from the database

export type Category = 'basins' | 'sinks' | 'toilets' | 'showers' | 'cabinets' | 'accessories';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  features: string[];
  image: string;
  brand: string;
  inStock: boolean;
}

export const categories: { id: Category; name: string; description: string }[] = [
  { id: 'basins', name: 'Basins', description: 'Elegant wash basins for every style' },
  { id: 'sinks', name: 'Sinks', description: 'Durable kitchen & utility sinks' },
  { id: 'toilets', name: 'Toilets', description: 'Modern comfort & efficiency' },
  { id: 'showers', name: 'Taps & Showers', description: 'Premium water fixtures' },
  { id: 'cabinets', name: 'Cabinets', description: 'Storage with style' },
  { id: 'accessories', name: 'Accessories', description: 'Finishing touches' },
];

export const products: Product[] = [];
