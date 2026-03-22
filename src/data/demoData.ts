import { ProductWithDetails, Category } from "@/types/database";

import demoBasin from "@/assets/products/demo-basin-1.jpg";
import demoShower from "@/assets/products/demo-shower-1.jpg";
import demoToilet from "@/assets/products/demo-toilet-1.jpg";
import demoCabinet from "@/assets/products/demo-cabinet-1.jpg";

export const demoCategories: Category[] = [
  { id: "cat-basins", name: "Basins", slug: "basins", created_at: "2024-01-01" },
  { id: "cat-sinks", name: "Sinks", slug: "sinks", created_at: "2024-01-01" },
  { id: "cat-toilets", name: "Toilets", slug: "toilets", created_at: "2024-01-01" },
  { id: "cat-showers", name: "Showers", slug: "showers", created_at: "2024-01-01" },
  { id: "cat-taps", name: "Taps", slug: "taps", created_at: "2024-01-01" },
  { id: "cat-cabinets", name: "Cabinets", slug: "cabinets", created_at: "2024-01-01" },
  { id: "cat-accessories", name: "Accessories", slug: "accessories", created_at: "2024-01-01" },
];

export const demoProducts: ProductWithDetails[] = [
  {
    id: "demo-1", category_id: "cat-basins", name: "Aria Countertop Basin",
    description: "Elegant round countertop wash basin in premium white ceramic. Smooth curves and a timeless silhouette designed to complement any modern bathroom.",
    price: 8500, brand: "Jaquar", width: 420, height: 155, depth: 420, ar_enabled: true,
    rating_avg: 4.5, rating_count: 2, is_featured: true, status: "active",
    created_at: "2024-06-01", updated_at: "2024-06-01",
    category: { id: "cat-basins", name: "Basins", slug: "basins", created_at: "2024-01-01" },
    product_media: [{ id: "pm-1", product_id: "demo-1", media_url: demoBasin, media_type: "image" }],
    inventory: [{ id: "inv-1", product_id: "demo-1", quantity: 24, last_updated: "2024-06-01" }],
    reviews: [
      { id: "r-1", product_id: "demo-1", user_id: "u1", rating: 5, comment: "Beautiful basin, excellent finish.", created_at: "2024-07-01" },
      { id: "r-2", product_id: "demo-1", user_id: "u2", rating: 4, comment: "Great quality for the price.", created_at: "2024-07-15" },
    ],
  },
  {
    id: "demo-2", category_id: "cat-showers", name: "Luxe Rainfall Shower System",
    description: "Complete rainfall shower system with 250mm overhead shower, adjustable hand shower, and brass thermostatic mixer.",
    price: 28500, brand: "Grohe", width: 250, height: 1100, depth: 380, ar_enabled: true,
    rating_avg: 5.0, rating_count: 1, is_featured: true, status: "active",
    created_at: "2024-05-15", updated_at: "2024-05-15",
    category: { id: "cat-showers", name: "Showers", slug: "showers", created_at: "2024-01-01" },
    product_media: [{ id: "pm-2", product_id: "demo-2", media_url: demoShower, media_type: "image" }],
    inventory: [{ id: "inv-2", product_id: "demo-2", quantity: 12, last_updated: "2024-06-01" }],
    reviews: [{ id: "r-3", product_id: "demo-2", user_id: "u3", rating: 5, comment: "The brass finish is stunning.", created_at: "2024-06-20" }],
  },
  {
    id: "demo-3", category_id: "cat-toilets", name: "Nova Wall-Hung Toilet",
    description: "Rimless wall-hung toilet with soft-close seat. Dual flush (3L/6L) for water efficiency.",
    price: 18900, brand: "Hindware", width: 360, height: 340, depth: 530, ar_enabled: true,
    rating_avg: null, rating_count: 0, is_featured: true, status: "active",
    created_at: "2024-04-20", updated_at: "2024-04-20",
    category: { id: "cat-toilets", name: "Toilets", slug: "toilets", created_at: "2024-01-01" },
    product_media: [{ id: "pm-3", product_id: "demo-3", media_url: demoToilet, media_type: "image" }],
    inventory: [{ id: "inv-3", product_id: "demo-3", quantity: 8, last_updated: "2024-06-01" }],
    reviews: [],
  },
  {
    id: "demo-4", category_id: "cat-cabinets", name: "Walnut Vanity Unit 800mm",
    description: "Wall-mounted vanity unit in rich walnut finish with integrated ceramic basin. Two soft-close drawers.",
    price: 34500, brand: "Jaquar", width: 800, height: 520, depth: 460, ar_enabled: false,
    rating_avg: 5.0, rating_count: 2, is_featured: true, status: "active",
    created_at: "2024-03-10", updated_at: "2024-03-10",
    category: { id: "cat-cabinets", name: "Cabinets", slug: "cabinets", created_at: "2024-01-01" },
    product_media: [{ id: "pm-4", product_id: "demo-4", media_url: demoCabinet, media_type: "image" }],
    inventory: [{ id: "inv-4", product_id: "demo-4", quantity: 5, last_updated: "2024-06-01" }],
    reviews: [
      { id: "r-4", product_id: "demo-4", user_id: "u4", rating: 5, comment: "Premium quality cabinet.", created_at: "2024-05-10" },
      { id: "r-5", product_id: "demo-4", user_id: "u5", rating: 5, comment: "Beautiful piece, easy to install.", created_at: "2024-05-25" },
    ],
  },
  {
    id: "demo-5", category_id: "cat-taps", name: "Cascade Single-Lever Basin Mixer",
    description: "Polished chrome single-lever basin mixer with ceramic cartridge and pop-up waste.",
    price: 4200, brand: "Cera", width: 50, height: 180, depth: 160, ar_enabled: false,
    rating_avg: 4.0, rating_count: 1, is_featured: false, status: "active",
    created_at: "2024-05-01", updated_at: "2024-05-01",
    category: { id: "cat-taps", name: "Taps", slug: "taps", created_at: "2024-01-01" },
    product_media: [{ id: "pm-5", product_id: "demo-5", media_url: demoBasin, media_type: "image" }],
    inventory: [{ id: "inv-5", product_id: "demo-5", quantity: 42, last_updated: "2024-06-01" }],
    reviews: [{ id: "r-6", product_id: "demo-5", user_id: "u6", rating: 4, comment: "Good water flow, nice finish.", created_at: "2024-06-05" }],
  },
  {
    id: "demo-6", category_id: "cat-basins", name: "Zen Rectangular Vessel Basin",
    description: "Rectangular vessel basin in matt white. Ultra-thin rim profile with generous washing area.",
    price: 12400, brand: "Parryware", width: 580, height: 120, depth: 370, ar_enabled: true,
    rating_avg: 4.5, rating_count: 2, is_featured: false, status: "active",
    created_at: "2024-04-15", updated_at: "2024-04-15",
    category: { id: "cat-basins", name: "Basins", slug: "basins", created_at: "2024-01-01" },
    product_media: [{ id: "pm-6", product_id: "demo-6", media_url: demoBasin, media_type: "image" }],
    inventory: [{ id: "inv-6", product_id: "demo-6", quantity: 15, last_updated: "2024-06-01" }],
    reviews: [
      { id: "r-7", product_id: "demo-6", user_id: "u7", rating: 5, comment: "Stunning modern basin.", created_at: "2024-05-20" },
      { id: "r-8", product_id: "demo-6", user_id: "u8", rating: 4, comment: "Excellent build quality.", created_at: "2024-06-10" },
    ],
  },
  {
    id: "demo-7", category_id: "cat-accessories", name: "Brushed Gold Towel Rail 600mm",
    description: "Double towel rail in brushed gold finish. Solid brass construction with concealed fixings.",
    price: 3800, brand: "Kohler", width: 600, height: 100, depth: 120, ar_enabled: false,
    rating_avg: null, rating_count: 0, is_featured: false, status: "active",
    created_at: "2024-02-20", updated_at: "2024-02-20",
    category: { id: "cat-accessories", name: "Accessories", slug: "accessories", created_at: "2024-01-01" },
    product_media: [{ id: "pm-7", product_id: "demo-7", media_url: demoShower, media_type: "image" }],
    inventory: [{ id: "inv-7", product_id: "demo-7", quantity: 30, last_updated: "2024-06-01" }],
    reviews: [],
  },
  {
    id: "demo-8", category_id: "cat-sinks", name: "Granite Composite Kitchen Sink",
    description: "Single-bowl undermount kitchen sink in granite composite. Scratch and heat-resistant surface.",
    price: 15800, brand: "Franke", width: 760, height: 200, depth: 460, ar_enabled: false,
    rating_avg: 5.0, rating_count: 1, is_featured: false, status: "active",
    created_at: "2024-03-25", updated_at: "2024-03-25",
    category: { id: "cat-sinks", name: "Sinks", slug: "sinks", created_at: "2024-01-01" },
    product_media: [{ id: "pm-8", product_id: "demo-8", media_url: demoCabinet, media_type: "image" }],
    inventory: [{ id: "inv-8", product_id: "demo-8", quantity: 0, last_updated: "2024-06-01" }],
    reviews: [{ id: "r-9", product_id: "demo-8", user_id: "u9", rating: 5, comment: "Rock solid sink.", created_at: "2024-04-15" }],
  },
];
