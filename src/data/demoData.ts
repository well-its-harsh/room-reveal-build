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
  { id: "cat-cabinets", name: "Cabinets", slug: "cabinets", created_at: "2024-01-01" },
  { id: "cat-accessories", name: "Accessories", slug: "accessories", created_at: "2024-01-01" },
];

export const demoProducts: ProductWithDetails[] = [
  {
    id: "demo-1",
    category_id: "cat-basins",
    name: "Aria Countertop Basin",
    description: "Elegant round countertop wash basin in premium white ceramic. Smooth curves and a timeless silhouette designed to complement any modern bathroom. Features a deep bowl for comfortable use and easy-clean glaze finish.",
    price: 8500,
    width: 420,
    height: 155,
    depth: 420,
    ar_enabled: true,
    created_at: "2024-06-01",
    updated_at: "2024-06-01",
    category: demoCategories[0],
    product_media: [{ id: "pm-1", product_id: "demo-1", media_url: demoBasin, media_type: "image" }],
    inventory: [{ id: "inv-1", product_id: "demo-1", quantity: 24, last_updated: "2024-06-01" }],
    reviews: [
      { id: "r-1", product_id: "demo-1", user_id: "u1", rating: 5, comment: "Beautiful basin, exactly as shown. The finish is excellent.", created_at: "2024-07-01" },
      { id: "r-2", product_id: "demo-1", user_id: "u2", rating: 4, comment: "Great quality for the price. Looks premium in our bathroom.", created_at: "2024-07-15" },
    ],
  },
  {
    id: "demo-2",
    category_id: "cat-showers",
    name: "Luxe Rainfall Shower System",
    description: "Complete rainfall shower system with 250mm overhead shower, adjustable hand shower, and brass thermostatic mixer. Gold-brushed finish for a luxurious look. 3-function diverter with smooth ceramic disc technology.",
    price: 28500,
    width: 250,
    height: 1100,
    depth: 380,
    ar_enabled: true,
    created_at: "2024-05-15",
    updated_at: "2024-05-15",
    category: demoCategories[3],
    product_media: [{ id: "pm-2", product_id: "demo-2", media_url: demoShower, media_type: "image" }],
    inventory: [{ id: "inv-2", product_id: "demo-2", quantity: 12, last_updated: "2024-06-01" }],
    reviews: [
      { id: "r-3", product_id: "demo-2", user_id: "u3", rating: 5, comment: "The brass finish is stunning. Water pressure is excellent.", created_at: "2024-06-20" },
    ],
  },
  {
    id: "demo-3",
    category_id: "cat-toilets",
    name: "Nova Wall-Hung Toilet",
    description: "Rimless wall-hung toilet with soft-close seat. Sleek, modern design with concealed fixings. Advanced siphonic flushing with dual flush (3L/6L) for water efficiency. Easy-clean ceramic with anti-bacterial glaze.",
    price: 18900,
    width: 360,
    height: 340,
    depth: 530,
    ar_enabled: true,
    created_at: "2024-04-20",
    updated_at: "2024-04-20",
    category: demoCategories[2],
    product_media: [{ id: "pm-3", product_id: "demo-3", media_url: demoToilet, media_type: "image" }],
    inventory: [{ id: "inv-3", product_id: "demo-3", quantity: 8, last_updated: "2024-06-01" }],
    reviews: [],
  },
  {
    id: "demo-4",
    category_id: "cat-cabinets",
    name: "Walnut Vanity Unit 800mm",
    description: "Wall-mounted vanity unit in rich walnut finish with integrated ceramic basin. Two soft-close drawers with brass pull handles. Pre-drilled for single-lever mixer tap. Includes all mounting hardware.",
    price: 34500,
    width: 800,
    height: 520,
    depth: 460,
    ar_enabled: false,
    created_at: "2024-03-10",
    updated_at: "2024-03-10",
    category: demoCategories[4],
    product_media: [{ id: "pm-4", product_id: "demo-4", media_url: demoCabinet, media_type: "image" }],
    inventory: [{ id: "inv-4", product_id: "demo-4", quantity: 5, last_updated: "2024-06-01" }],
    reviews: [
      { id: "r-4", product_id: "demo-4", user_id: "u4", rating: 5, comment: "Premium quality cabinet. The walnut finish is gorgeous.", created_at: "2024-05-10" },
      { id: "r-5", product_id: "demo-4", user_id: "u5", rating: 5, comment: "Beautiful piece, easy to install. Exceeded expectations.", created_at: "2024-05-25" },
    ],
  },
];
