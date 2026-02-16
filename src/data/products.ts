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

export const products: Product[] = [
  {
    id: 'basin-001',
    name: 'Aria Countertop Basin',
    category: 'basins',
    price: 12500,
    description: 'A sleek countertop basin with smooth rounded edges. Crafted from premium vitreous china for lasting durability.',
    features: ['Vitreous China', 'Countertop Mount', '500mm Width', 'Easy Clean Glaze'],
    image: '/category-basins.jpg',
    brand: 'AquaLux',
    inStock: true,
  },
  {
    id: 'basin-002',
    name: 'Nova Wall-Hung Basin',
    category: 'basins',
    price: 9800,
    description: 'Space-saving wall-hung design perfect for compact bathrooms. Clean lines and modern aesthetics.',
    features: ['Wall Mounted', 'Compact Design', '450mm Width', 'Overflow Protection'],
    image: '/category-basins.jpg',
    brand: 'CeraStyle',
    inStock: true,
  },
  {
    id: 'sink-001',
    name: 'ProChef Single Bowl Sink',
    category: 'sinks',
    price: 8500,
    description: 'Professional-grade stainless steel kitchen sink with deep single bowl for maximum workspace.',
    features: ['304 Stainless Steel', 'Sound Dampening', 'Undermount', '750mm Width'],
    image: '/category-sinks.jpg',
    brand: 'SteelCraft',
    inStock: true,
  },
  {
    id: 'sink-002',
    name: 'Granite Composite Double Sink',
    category: 'sinks',
    price: 15200,
    description: 'Elegant double-bowl granite composite sink that resists scratches, stains, and heat.',
    features: ['Granite Composite', 'Double Bowl', 'Heat Resistant', '900mm Width'],
    image: '/category-sinks.jpg',
    brand: 'StoneWorks',
    inStock: true,
  },
  {
    id: 'toilet-001',
    name: 'EcoFlush Rimless Toilet',
    category: 'toilets',
    price: 18500,
    description: 'Water-efficient rimless toilet with powerful flush technology. Hygienic design for easy cleaning.',
    features: ['Rimless Design', 'Dual Flush', '4.5/3L Water', 'Soft Close Seat'],
    image: '/category-toilets.jpg',
    brand: 'AquaLux',
    inStock: true,
  },
  {
    id: 'toilet-002',
    name: 'Concealed Cistern Wall-Hung',
    category: 'toilets',
    price: 24000,
    description: 'Sleek wall-hung toilet with concealed cistern for a minimalist bathroom look.',
    features: ['Wall Hung', 'Concealed Cistern', 'Soft Close', 'Quick Release Seat'],
    image: '/category-toilets.jpg',
    brand: 'CeraStyle',
    inStock: false,
  },
  {
    id: 'shower-001',
    name: 'Rainfall Shower Set - Brass',
    category: 'showers',
    price: 22000,
    description: 'Luxurious rainfall shower set in brushed brass finish. Includes overhead and hand shower.',
    features: ['Brushed Brass', '300mm Head', 'Hand Shower', 'Thermostatic'],
    image: '/category-showers.jpg',
    brand: 'AquaLux',
    inStock: true,
  },
  {
    id: 'shower-002',
    name: 'Minimal Basin Mixer Tap',
    category: 'showers',
    price: 6800,
    description: 'Elegant single-lever basin mixer with ceramic disc cartridge for smooth operation.',
    features: ['Ceramic Disc', 'Single Lever', 'Chrome Finish', '5yr Warranty'],
    image: '/category-showers.jpg',
    brand: 'TapMaster',
    inStock: true,
  },
  {
    id: 'cabinet-001',
    name: 'Oak Floating Vanity Unit',
    category: 'cabinets',
    price: 32000,
    description: 'Solid oak floating vanity with soft-close drawers and integrated basin top.',
    features: ['Solid Oak', 'Soft Close', '900mm Width', 'Wall Mounted'],
    image: '/category-cabinets.jpg',
    brand: 'WoodCraft',
    inStock: true,
  },
  {
    id: 'cabinet-002',
    name: 'Mirror Cabinet with LED',
    category: 'cabinets',
    price: 14500,
    description: 'Recessed mirror cabinet with integrated LED lighting and anti-fog function.',
    features: ['LED Lighting', 'Anti-Fog', 'Recessed Mount', '600mm Width'],
    image: '/category-cabinets.jpg',
    brand: 'LuxBath',
    inStock: true,
  },
  {
    id: 'acc-001',
    name: 'Brass Towel Rail Set',
    category: 'accessories',
    price: 4500,
    description: 'Complete brass bathroom accessories set including towel rail, robe hook, and toilet roll holder.',
    features: ['Brushed Brass', '3-Piece Set', 'Wall Mounted', 'Concealed Fixings'],
    image: '/category-accessories.jpg',
    brand: 'AquaLux',
    inStock: true,
  },
  {
    id: 'acc-002',
    name: 'Soap Dispenser - Gold',
    category: 'accessories',
    price: 2200,
    description: 'Freestanding soap dispenser in gold finish. Heavy base for stability.',
    features: ['Gold Finish', 'Freestanding', 'Pump Mechanism', '300ml Capacity'],
    image: '/category-accessories.jpg',
    brand: 'LuxBath',
    inStock: true,
  },
];
