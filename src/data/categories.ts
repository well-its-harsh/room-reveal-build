// ============================================================
// categories.ts
// Single source of truth for ALL categories, subcategories,
// and brand data across the Shree Radhe Tiles & Hardware store.
// Save this file at: src/data/categories.ts
// ============================================================

export type SubCategory = {
  id: string;
  name: string;
  slug: string;
  image?: string; // path relative to /public/images/categories/
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  area: string;         // which Shop By Area group it belongs to
  areaSlug: string;
  image?: string;
  subcategories: SubCategory[];
};

export type Area = {
  id: string;
  name: string;
  slug: string;
  image?: string;       // path relative to /public/images/areas/
  heroImage?: string;
  categories: Category[];
};


export type Brand = {
  id: string;
  name: string;
  logo?: string;        // path relative to /public/images/brands/
  collections?: string[];
};

// ============================================================
// BRANDS
// ============================================================
export const BRANDS: Brand[] = [
  {
    id: "viking",
    name: "Viking",
    logo: "/images/brands/brand-viking.png",
  },
  {
    id: "watero",
    name: "Watero",
    logo: "/images/brands/brand-watero.png",
  },
  {
    id: "kerovit",
    name: "Kerovit",
    logo: "/images/brands/brand-kerovit.png",
    collections: [
      "Qua", "Matrix", "Chime", "Orion", "Hydrus Plus", "Hydrus",
      "Curve", "Curve Plus", "Nucleus", "Slope", "Edge", "Joy",
      "Urbane", "Trendy", "Infinit", "Linear", "Sphere",
    ],
  },
  {
    id: "kerovit-aurum",
    name: "Kerovit Aurum",
    logo: "/images/brands/brand-kerovit-aurum.png",
    collections: ["Amelia", "Alana", "Arius", "Aoife", "Agalia", "Chime"],
  },
  {
    id: "jaquar",
    name: "Jaquar",
    logo: "/images/brands/brand-jaquar.png",
  },
  {
    id: "hansgrohe",
    name: "Hansgrohe",
    logo: "/images/brands/brand-hansgrohe.png",
  },
  {
    id: "kohler",
    name: "Kohler",
    logo: "/images/brands/brand-kohler.png",
  },
];

// ============================================================
// AREAS WITH FULL CATEGORY + SUBCATEGORY TREE
// ============================================================
export const AREAS: Area[] = [
  // ----------------------------------------------------------
  // 1. KITCHEN
  // ----------------------------------------------------------
  {
    id: "kitchen",
    name: "Kitchen",
    slug: "kitchen",
    image: "https://modularkitchendsi.com/wp-content/uploads/2025/08/n-modular-kitchen-e1769224461832.webp",
    heroImage: "https://modularkitchendsi.com/wp-content/uploads/2025/08/n-modular-kitchen-e1769224461832.webp",
    categories: [
      {
        id: "kitchen-taps",
        name: "Kitchen & Sink Taps",
        slug: "kitchen-sink-taps",
        area: "Kitchen",
        areaSlug: "kitchen",
        image: "/images/categories/kitchen-taps.png",
        subcategories: [
          { id: "sink-mixer-taps", name: "Sink Mixer Taps", slug: "sink-mixer-taps", image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=400" },
          { id: "pot-filler-tap", name: "Pot Filler Tap", slug: "pot-filler-tap", image: "https://images.unsplash.com/photo-1620626011761-9963d7b59675?auto=format&fit=crop&q=80&w=400" },
          { id: "sink-tap", name: "Sink Tap", slug: "sink-tap", image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=400" },
        ],
      },
      {
        id: "sink-fittings",
        name: "Sink Fittings & Accessories",
        slug: "sink-fittings-accessories",
        area: "Kitchen",
        areaSlug: "kitchen",
        image: "/images/categories/sink-fittings.png",
        subcategories: [
          { id: "glass-rinser", name: "Glass Rinser", slug: "glass-rinser", image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=400" },
          { id: "lotion-dispenser", name: "Lotion Dispenser", slug: "lotion-dispenser", image: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=400" },
          { id: "sink-coupling", name: "Sink Coupling / Adaptor", slug: "sink-coupling", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400" },
          { id: "bottle-trap-kitchen", name: "Bottle Trap / P-Trap", slug: "bottle-trap-kitchen", image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=400" },
          { id: "waste-pipe-kitchen", name: "Waste Pipe", slug: "waste-pipe-kitchen", image: "https://images.unsplash.com/photo-1504148455328-4972b9737b2f?auto=format&fit=crop&q=80&w=400" },
          { id: "angle-cock-kitchen", name: "Angle Cock / Connection Pipes", slug: "angle-cock-kitchen", image: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=400" },
          { id: "basin-hole-cover-kitchen", name: "Cover for Basin/Sink Hole", slug: "basin-hole-cover-kitchen", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400" },
          { id: "water-filter-valve", name: "Water Filter Valve / Tap", slug: "water-filter-valve", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400" },
        ],
      },
      {
        id: "kitchen-drains",
        name: "Kitchen Drains",
        slug: "kitchen-drains",
        area: "Kitchen",
        areaSlug: "kitchen",
        image: "/images/categories/kitchen-drains.png",
        subcategories: [
          { id: "cockroach-trap-kitchen", name: "Cockroach Trap", slug: "cockroach-trap-kitchen", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400" },
          { id: "drains-kitchen", name: "Drains", slug: "drains-kitchen", image: "/images/categories/designer-drains.png" },
        ],
      },
    ],
  },

  // ----------------------------------------------------------
  // 2. TOILET AREA
  // ----------------------------------------------------------
  {
    id: "toilet",
    name: "Toilet Area",
    slug: "toilet",
    image: "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-2023-1678081565-AJpiy/bathroom-1681310164-CzldO/172-1687497077-9VeEx.jpg",
    heroImage: "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-2023-1678081565-AJpiy/bathroom-1681310164-CzldO/172-1687497077-9VeEx.jpg",
    categories: [
      {
        id: "toilet-taps",
        name: "Toilet Taps",
        slug: "toilet-taps",
        area: "Toilet Area",
        areaSlug: "toilet",
        image: "/images/categories/toilet-taps.png",
        subcategories: [
          { id: "angle-cock-2way", name: "Angle Cock / 2-Way", slug: "angle-cock-2way", image: "/images/categories/toilet-taps.png" },
          { id: "bib-cock-2way", name: "Bib Cock 2 Way", slug: "bib-cock-2way", image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=400" },
          { id: "bib-tap-short", name: "Bib Tap Short Body", slug: "bib-tap-short", image: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=400" },
          { id: "concealed-tap-toilet", name: "Concealed Tap", slug: "concealed-tap-toilet", image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=400" },
        ],
      },
      {
        id: "toilet-seat-fittings",
        name: "Toilet Seat Fittings",
        slug: "toilet-seat-fittings",
        area: "Toilet Area",
        areaSlug: "toilet",
        image: "/images/categories/toilet-taps.png",
        subcategories: [
          { id: "rack-bolt-toilet", name: "Rack Bolt", slug: "rack-bolt-toilet", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400" },
          { id: "chair-brackets", name: "Chair Brackets", slug: "chair-brackets", image: "https://images.unsplash.com/photo-1504148455328-4972b9737b2f?auto=format&fit=crop&q=80&w=400" },
          { id: "ewc-screw", name: "EWC Screw", slug: "ewc-screw", image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=400" },
          { id: "pan-connector", name: "Pan Connector", slug: "pan-connector", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400" },
          { id: "inlet-pipe-commode", name: "Inlet Pipe for Commode", slug: "inlet-pipe-commode", image: "https://images.unsplash.com/photo-1504148455328-4972b9737b2f?auto=format&fit=crop&q=80&w=400" },
          { id: "buffer-washer", name: "Buffer Washer", slug: "buffer-washer", image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=400" },
          { id: "connection-pipe-toilet", name: "Connection Pipe", slug: "connection-pipe-toilet", image: "https://images.unsplash.com/photo-1504148455328-4972b9737b2f?auto=format&fit=crop&q=80&w=400" },
        ],
      },
      {
        id: "personal-hygiene",
        name: "Personal Hygiene",
        slug: "personal-hygiene",
        area: "Toilet Area",
        areaSlug: "toilet",
        image: "/images/categories/personal-hygiene.png",
        subcategories: [
          { id: "health-faucet", name: "Health Faucet", slug: "health-faucet", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400" },
          { id: "jet-spray-set", name: "Jet Spray Set", slug: "jet-spray-set", image: "https://images.unsplash.com/photo-1620626011761-9963d7b59675?auto=format&fit=crop&q=80&w=400" },
        ],
      },
      {
        id: "toilet-accessories",
        name: "Toilet Accessories",
        slug: "toilet-accessories",
        area: "Toilet Area",
        areaSlug: "toilet",
        image: "/images/categories/personal-hygiene.png",
        subcategories: [
          { id: "grab-bar-toilet", name: "Grab Bar (Special Needs)", slug: "grab-bar-toilet", image: "/images/categories/grab-bars.png" },
          { id: "toilet-paper-holder", name: "Toilet Paper Holder", slug: "toilet-paper-holder", image: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=400" },
          { id: "toilet-brush-holder", name: "Toilet Brush Holder", slug: "toilet-brush-holder", image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=400" },
          { id: "plunger", name: "Plunger", slug: "plunger", image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=400" },
        ],
      },
      {
        id: "sanitaryware-toilet",
        name: "Sanitaryware — Toilets",
        slug: "sanitaryware-toilets",
        area: "Toilet Area",
        areaSlug: "toilet",
        image: "/images/categories/sanitaryware-toilets.png",
        subcategories: [
          { id: "smart-toilet", name: "Smart Toilets", slug: "smart-toilet", image: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&q=80&w=400" },
          { id: "one-piece-closet", name: "One Piece Closet", slug: "one-piece-closet", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400" },
          { id: "two-piece-closet", name: "Two Piece Closet", slug: "two-piece-closet", image: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&q=80&w=400" },
          { id: "wall-hung-closet", name: "Wall Hung Closet", slug: "wall-hung-closet", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400" },
        ],
      },
    ],
  },

  // ----------------------------------------------------------
  // 3. BATHROOM / SHOWER AREA
  // ----------------------------------------------------------
  {
    id: "bathroom",
    name: "Bathroom",
    slug: "bathroom",
    image: "https://s3-blog.homelane.com/design-ideas/wp-content/uploads/2025/12/01142824/modern-bathroom-shower-designs-rustic-bathroom-shower-ideas-1024x640.png",
    heroImage: "https://s3-blog.homelane.com/design-ideas/wp-content/uploads/2025/12/01142824/modern-bathroom-shower-designs-rustic-bathroom-shower-ideas-1024x640.png",
    categories: [
      {
        id: "shower-taps",
        name: "Shower Taps & Mixers",
        slug: "shower-taps-mixers",
        area: "Bathroom",
        areaSlug: "bathroom",
        image: "/images/categories/shower-taps.png",
        subcategories: [
          { id: "diverter-spout", name: "Diverter & Spout", slug: "diverter-spout", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400" },
          { id: "bib-tap-shower", name: "Bib Tap", slug: "bib-tap-shower", image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=400" },
          { id: "concealed-shower", name: "Concealed", slug: "concealed-shower", image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=400" },
          { id: "wall-mixer", name: "Wall Mixer", slug: "wall-mixer", image: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=400" },
        ],
      },
      {
        id: "shower-systems",
        name: "Shower Systems",
        slug: "shower-systems",
        area: "Bathroom",
        areaSlug: "bathroom",
        image: "/images/categories/shower-systems.png",
        subcategories: [
          { id: "overhead-shower-arms", name: "Overhead Shower & Arms", slug: "overhead-shower-arms", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400" },
          { id: "hand-shower-tubes", name: "Hand Shower & Tubes", slug: "hand-shower-tubes", image: "https://images.unsplash.com/photo-1620626011761-9963d7b59675?auto=format&fit=crop&q=80&w=400" },
          { id: "overhead-rain-shower", name: "Overhead Rain Shower", slug: "overhead-rain-shower", image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=400" },
          { id: "overhead-single-flow", name: "Overhead Single Flow", slug: "overhead-single-flow", image: "https://images.unsplash.com/photo-1504148455328-4972b9737b2f?auto=format&fit=crop&q=80&w=400" },
          { id: "overhead-multi-flow", name: "Overhead Multi Flow", slug: "overhead-multi-flow", image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=400" },
          { id: "cascade-flow", name: "Cascade Flow", slug: "cascade-flow", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400" },
          { id: "hand-shower-single", name: "Hand Shower Single", slug: "hand-shower-single", image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=400" },
          { id: "hand-shower-multi", name: "Hand Shower Multi", slug: "hand-shower-multi", image: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=400" },
          { id: "body-shower", name: "Body Shower", slug: "body-shower", image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=400" },
          { id: "shower-arms", name: "Shower Arms", slug: "shower-arms", image: "https://images.unsplash.com/photo-1504148455328-4972b9737b2f?auto=format&fit=crop&q=80&w=400" },
          { id: "shower-set", name: "Shower Set", slug: "shower-set", image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=400" },
        ],
      },
      {
        id: "faucets",
        name: "Faucets",
        slug: "faucets",
        area: "Bathroom",
        areaSlug: "bathroom",
        image: "/images/categories/faucets.png",
        subcategories: [
          { id: "faucet-qua", name: "Qua Series", slug: "faucet-qua", image: "https://images.unsplash.com/photo-1584622112935-77ad9876a13d00?auto=format&fit=crop&q=80&w=400" },
          { id: "faucet-matrix", name: "Matrix Series", slug: "faucet-matrix", image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=400" },
          { id: "faucet-chime", name: "Chime Series", slug: "faucet-chime", image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=400" },
          { id: "faucet-orion", name: "Orion Series", slug: "faucet-orion", image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=400" },
          { id: "faucet-hydrus-plus", name: "Hydrus Plus Series", slug: "faucet-hydrus-plus", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400" },
          { id: "faucet-hydrus", name: "Hydrus Series", slug: "faucet-hydrus", image: "https://images.unsplash.com/photo-1584622112935-77ad9876a13d00?auto=format&fit=crop&q=80&w=400" },
          { id: "faucet-curve", name: "Curve Series", slug: "faucet-curve", image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=400" },
          { id: "faucet-curve-plus", name: "Curve Plus Series", slug: "faucet-curve-plus", image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=400" },
          { id: "faucet-nucleus", name: "Nucleus Series", slug: "faucet-nucleus", image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=400" },
          { id: "faucet-slope", name: "Slope Series", slug: "faucet-slope", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400" },
          { id: "faucet-edge", name: "Edge Series", slug: "faucet-edge", image: "https://images.unsplash.com/photo-1584622112935-77ad9876a13d00?auto=format&fit=crop&q=80&w=400" },
          { id: "faucet-joy", name: "Joy Series", slug: "faucet-joy", image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=400" },
          { id: "faucet-urbane", name: "Urbane Series", slug: "faucet-urbane", image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=400" },
          { id: "faucet-trendy", name: "Trendy Series", slug: "faucet-trendy", image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=400" },
          { id: "faucet-infinit", name: "Infinit Series", slug: "faucet-infinit", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400" },
          { id: "faucet-linear", name: "Linear Series", slug: "faucet-linear", image: "https://images.unsplash.com/photo-1584622112935-77ad9876a13d00?auto=format&fit=crop&q=80&w=400" },
          { id: "faucet-sphere", name: "Sphere Series", slug: "faucet-sphere", image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=400" },
          { id: "faucet-sensor", name: "Sensor Faucet", slug: "faucet-sensor", image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=400" },
          { id: "faucet-push-tap", name: "Push Tap", slug: "faucet-push-tap", image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=400" },
          { id: "faucet-medi", name: "Medi Series", slug: "faucet-medi", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400" },
        ],
      },
      {
        id: "thermostat-controls",
        name: "Thermostat & Controls",
        slug: "thermostat-controls",
        area: "Bathroom",
        areaSlug: "bathroom",
        image: "/images/categories/thermostat.png",
        subcategories: [
          { id: "thermocontrol", name: "Thermocontrol", slug: "thermocontrol", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400" },
          { id: "flow-pro", name: "Flow Pro", slug: "flow-pro", image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=400" },
          { id: "6-outlet", name: "6 Outlet", slug: "6-outlet", image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=400" },
          { id: "4-outlet", name: "4 Outlet", slug: "4-outlet", image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=400" },
          { id: "2-outlet", name: "2 Outlet", slug: "2-outlet", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400" },
          { id: "concealed-body", name: "Concealed Body", slug: "concealed-body", image: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=400" },
          { id: "flush-valve", name: "Flush Valve", slug: "flush-valve", image: "https://images.unsplash.com/photo-1504148455328-4972b9737b2f?auto=format&fit=crop&q=80&w=400" },
        ],
      },
      {
        id: "aurum-faucets",
        name: "Aurum Collection Faucets",
        slug: "aurum-faucets",
        area: "Bathroom",
        areaSlug: "bathroom",
        image: "/images/categories/aurum-faucets.png",
        subcategories: [
          { id: "aurum-amelia", name: "Amelia", slug: "aurum-amelia", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400" },
          { id: "aurum-alana", name: "Alana", slug: "aurum-alana", image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=400" },
          { id: "aurum-arius", name: "Arius", slug: "aurum-arius", image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=400" },
          { id: "aurum-aoife", name: "Aoife", slug: "aurum-aoife", image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=400" },
          { id: "aurum-agalia", name: "Agalia", slug: "aurum-agalia", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400" },
          { id: "aurum-chime", name: "Chime", slug: "aurum-chime", image: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=400" },
          { id: "aurum-sensor", name: "Sensor", slug: "aurum-sensor", image: "https://images.unsplash.com/photo-1504148455328-4972b9737b2f?auto=format&fit=crop&q=80&w=400" },
          { id: "aurum-sink-mixer", name: "Sink Mixer", slug: "aurum-sink-mixer", image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=400" },
          { id: "aurum-thermostat", name: "Thermostat", slug: "aurum-thermostat", image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=400" },
          { id: "aurum-flush-valve", name: "Flush Valve", slug: "aurum-flush-valve", image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=400" },
        ],
      },
      {
        id: "bath-accessories",
        name: "Bath Accessories",
        slug: "bath-accessories",
        area: "Bathroom",
        areaSlug: "bathroom",
        image: "/images/categories/bath-accessories.png",
        subcategories: [
          { id: "bath-acc-square", name: "Square Series", slug: "bath-acc-square", image: "https://images.unsplash.com/photo-1584622112935-77ad9876a13d00?auto=format&fit=crop&q=80&w=400" },
          { id: "bath-acc-rectangular", name: "Rectangular Series", slug: "bath-acc-rectangular", image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=400" },
          { id: "bath-acc-pawn", name: "Pawn Series", slug: "bath-acc-pawn", image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=400" },
          { id: "bath-acc-h2o", name: "H2O Series", slug: "bath-acc-h2o", image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=400" },
          { id: "bath-acc-2115", name: "2115 Series", slug: "bath-acc-2115", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400" },
          { id: "bath-acc-2200", name: "2200 Series", slug: "bath-acc-2200", image: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=400" },
          { id: "bath-acc-subtle", name: "Subtle Series", slug: "bath-acc-subtle", image: "https://images.unsplash.com/photo-1504148455328-4972b9737b2f?auto=format&fit=crop&q=80&w=400" },
          { id: "bath-acc-whole-square", name: "Whole Square Series", slug: "bath-acc-whole-square", image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=400" },
          { id: "shower-seat", name: "Shower Seat", slug: "shower-seat", image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=400" },
          { id: "baskets", name: "Baskets", slug: "baskets", image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=400" },
          { id: "robe-hook", name: "Robe Hook", slug: "robe-hook", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400" },
          { id: "soap-holder-shower", name: "Soap Holder", slug: "soap-holder-shower", image: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=400" },
          { id: "towel-rail-rack", name: "Towel Rail & Rack", slug: "towel-rail-rack", image: "https://images.unsplash.com/photo-1504148455328-4972b9737b2f?auto=format&fit=crop&q=80&w=400" },
          { id: "corner-shelf", name: "Corner Shelf", slug: "corner-shelf", image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=400" },
          { id: "electric-towel-warmer", name: "Electric Towel Warmer", slug: "electric-towel-warmer", image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=400" },
        ],
      },
      {
        id: "aurum-accessories",
        name: "Aurum Accessories Collection",
        slug: "aurum-accessories",
        area: "Bathroom",
        areaSlug: "bathroom",
        image: "/images/categories/aurum-accessories.png",
        subcategories: [
          { id: "aurum-acc-chrome-rose", name: "Chrome & Rose Gold", slug: "aurum-acc-chrome-rose", image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=400" },
          { id: "aurum-acc-chrome-gold", name: "Chrome & Gold", slug: "aurum-acc-chrome-gold", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400" },
          { id: "aurum-acc-rose-gold", name: "Rose Gold", slug: "aurum-acc-rose-gold", image: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=400" },
          { id: "aurum-acc-gunmetal", name: "Gunmetal", slug: "aurum-acc-gunmetal", image: "https://images.unsplash.com/photo-1504148455328-4972b9737b2f?auto=format&fit=crop&q=80&w=400" },
          { id: "aurum-acc-matte-black", name: "Matte Black", slug: "aurum-acc-matte-black", image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=400" },
        ],
      },
      {
        id: "bathtub",
        name: "Bath Tub",
        slug: "bathtub",
        area: "Bathroom",
        areaSlug: "bathroom",
        image: "/images/categories/bathtub.png",
        subcategories: [
          { id: "bathtub-sets", name: "Bath Tub Sets", slug: "bathtub-sets", image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=400" },
          { id: "chain-plug", name: "Chain Plug", slug: "chain-plug", image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=400" },
          { id: "imperial-bathtub", name: "Imperial Bath Tub Collection", slug: "imperial-bathtub", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400" },
        ],
      },
      {
        id: "bathroom-furniture",
        name: "Bathroom Furniture",
        slug: "bathroom-furniture",
        area: "Bathroom",
        areaSlug: "bathroom",
        image: "/images/categories/bathroom-furniture.png",
        subcategories: [
          { id: "vanity-set", name: "Vanity Set", slug: "vanity-set", image: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=400" },
          { id: "led-mirror", name: "LED Mirror", slug: "led-mirror", image: "https://images.unsplash.com/photo-1504148455328-4972b9737b2f?auto=format&fit=crop&q=80&w=400" },
          { id: "imperial-vanity", name: "Imperial Vanity Set", slug: "imperial-vanity", image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=400" },
          { id: "imperial-led-mirror", name: "Imperial LED Mirror", slug: "imperial-led-mirror", image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=400" },
          { id: "furniture-collection", name: "Furniture Collection", slug: "furniture-collection", image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=400" },
        ],
      },
    ],
  },

  // ----------------------------------------------------------
  // 4. WASH BASIN AREA
  // ----------------------------------------------------------
  {
    id: "wash-basin",
    name: "Wash Basin",
    slug: "wash-basin",
    image: "https://assets-news.housing.com/news/wp-content/uploads/2022/01/12005854/13-Wash-Basin-Mirror-Design-That-Will-Never-Go-Out-Of-Style-10.jpg",
    heroImage: "https://assets-news.housing.com/news/wp-content/uploads/2022/01/12005854/13-Wash-Basin-Mirror-Design-That-Will-Never-Go-Out-Of-Style-10.jpg",
    categories: [
      {
        id: "basin-taps",
        name: "Basin Taps",
        slug: "basin-taps",
        area: "Wash Basin",
        areaSlug: "wash-basin",
        image: "/images/categories/basin-taps.png",
        subcategories: [
          { id: "pillar-tap", name: "Pillar Tap", slug: "pillar-tap", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400" },
          { id: "angle-valve", name: "Angle Valve / Flanges", slug: "angle-valve", image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=400" },
          { id: "foot-operated-tap", name: "Foot Operated Taps", slug: "foot-operated-tap", image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=400" },
        ],
      },
      {
        id: "basin-fittings",
        name: "Basin Fittings",
        slug: "basin-fittings",
        area: "Wash Basin",
        areaSlug: "wash-basin",
        image: "/images/categories/basin-fittings.png",
        subcategories: [
          { id: "bottle-trap-basin", name: "Bottle Trap / P Trap", slug: "bottle-trap-basin", image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=400" },
          { id: "pipe-bottle-trap", name: "Pipe for Bottle Trap", slug: "pipe-bottle-trap", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400" },
          { id: "waste-pipe-basin", name: "Waste Pipe", slug: "waste-pipe-basin", image: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=400" },
          { id: "waste-coupling-basin", name: "Waste Coupling", slug: "waste-coupling-basin", image: "https://images.unsplash.com/photo-1504148455328-4972b9737b2f?auto=format&fit=crop&q=80&w=400" },
          { id: "rack-bolt-basin", name: "Rack Bolt", slug: "rack-bolt-basin", image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=400" },
          { id: "connection-pipes-basin", name: "Connection Pipes", slug: "connection-pipes-basin", image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=400" },
          { id: "basin-hole-cover", name: "Basin Hole Cover", slug: "basin-hole-cover", image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=400" },
        ],
      },
      {
        id: "basin-accessories",
        name: "Basin Accessories",
        slug: "basin-accessories",
        area: "Wash Basin",
        areaSlug: "wash-basin",
        image: "/images/categories/basin-accessories.png",
        subcategories: [
          { id: "lotion-dispenser-basin", name: "Lotion Dispenser", slug: "lotion-dispenser-basin", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400" },
          { id: "shaving-mirror", name: "Shaving Mirror", slug: "shaving-mirror", image: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=400" },
          { id: "towel-ring", name: "Towel Ring / Holder / Soap Dish", slug: "towel-ring", image: "https://images.unsplash.com/photo-1504148455328-4972b9737b2f?auto=format&fit=crop&q=80&w=400" },
          { id: "countertop-soap-dish", name: "Counter Top Soap Dish", slug: "countertop-soap-dish", image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=400" },
          { id: "hooks", name: "Hooks", slug: "hooks", image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=400" },
        ],
      },
      {
        id: "wash-basins",
        name: "Wash Basins (Sanitaryware)",
        slug: "wash-basins",
        area: "Wash Basin",
        areaSlug: "wash-basin",
        image: "/images/categories/wash-basins.png",
        subcategories: [
          { id: "basin-pedestal", name: "Wash Basin Pedestal", slug: "basin-pedestal", image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=400" },
          { id: "basin-half-pedestal", name: "Wash Basin Half Pedestal", slug: "basin-half-pedestal", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400" },
          { id: "one-piece-basin", name: "One Piece Basin", slug: "one-piece-basin", image: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=400" },
          { id: "wall-hung-basin", name: "Wall Hung Basin", slug: "wall-hung-basin", image: "https://images.unsplash.com/photo-1504148455328-4972b9737b2f?auto=format&fit=crop&q=80&w=400" },
          { id: "table-top-basin", name: "Table Top Basin", slug: "table-top-basin", image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=400" },
          { id: "counter-basin", name: "Counter Basin", slug: "counter-basin", image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=400" },
          { id: "counter-top-basin", name: "Counter Top Basin", slug: "counter-top-basin", image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=400" },
          { id: "under-counter-basin", name: "Under Counter Basin", slug: "under-counter-basin", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400" },
          { id: "over-counter-basin", name: "Over Counter Basin", slug: "over-counter-basin", image: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=400" },
          { id: "integrated-pedestal", name: "Integrated Pedestal Basin", slug: "integrated-pedestal", image: "https://images.unsplash.com/photo-1504148455328-4972b9737b2f?auto=format&fit=crop&q=80&w=400" },
          { id: "designer-basin-pedestal", name: "Designer Wash Basin Pedestal", slug: "designer-basin-pedestal", image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=400" },
          { id: "designer-one-piece-basin", name: "Designer One Piece Basin", slug: "designer-one-piece-basin", image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=400" },
          { id: "designer-table-top-basin", name: "Designer Table Top Basin", slug: "designer-table-top-basin", image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=400" },
          { id: "imperial-stand-basin", name: "Imperial Stand Basin", slug: "imperial-stand-basin", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400" },
          { id: "imperial-table-top-basin", name: "Imperial Table Top Basin", slug: "imperial-table-top-basin", image: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=400" },
          { id: "imperial-table-top-pvd", name: "Imperial Table Top Basin (PVD)", slug: "imperial-table-top-pvd", image: "https://images.unsplash.com/photo-1504148455328-4972b9737b2f?auto=format&fit=crop&q=80&w=400" },
          { id: "imperial-tiles-basin", name: "Imperial Tiles Basin", slug: "imperial-tiles-basin", image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=400" },
          { id: "sink-collection", name: "Sink Collection", slug: "sink-collection", image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=400" },
        ],
      },
    ],
  },

  // ----------------------------------------------------------
  // 5. DRAIN AREA
  // ----------------------------------------------------------
  {
    id: "drain",
    name: "Drains",
    slug: "drains",
    image: "https://atkinsoninspection.com/wp-content/uploads/2023/07/Drainage_pipe_25.jpeg",
    heroImage: "https://atkinsoninspection.com/wp-content/uploads/2023/07/Drainage_pipe_25.jpeg",
    categories: [
      {
        id: "designer-drains",
        name: "Designer Drains",
        slug: "designer-drains",
        area: "Drains",
        areaSlug: "drains",
        image: "/images/categories/designer-drains.png",
        subcategories: [
          { id: "wall-drain", name: "Wall Drain", slug: "wall-drain", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400" },
          { id: "aussie-drain", name: "Aussie Drain", slug: "aussie-drain", image: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=400" },
          { id: "tile-marble-drain", name: "Tile Marble Drain", slug: "tile-marble-drain", image: "https://images.unsplash.com/photo-1504148455328-4972b9737b2f?auto=format&fit=crop&q=80&w=400" },
          { id: "channel-linear-drain", name: "Channel Linear Drain", slug: "channel-linear-drain", image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=400" },
          { id: "linear-drains", name: "Linear Drains", slug: "linear-drains", image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=400" },
          { id: "shower-channel-drain", name: "Shower Channel Drain", slug: "shower-channel-drain", image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=400" },
        ],
      },
      {
        id: "rust-proof-drains",
        name: "Rust Proof Drains",
        slug: "rust-proof-drains",
        area: "Drains",
        areaSlug: "drains",
        image: "/images/categories/rust-proof-drains.png",
        subcategories: [
          { id: "house-drains", name: "House / Building / Pool Drains", slug: "house-drains", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400" },
          { id: "trench-drain", name: "Trench Drain", slug: "trench-drain", image: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=400" },
          { id: "balcony-drain", name: "Balcony Drain", slug: "balcony-drain", image: "https://images.unsplash.com/photo-1504148455328-4972b9737b2f?auto=format&fit=crop&q=80&w=400" },
          { id: "dome-drain", name: "Dome Drain", slug: "dome-drain", image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=400" },
          { id: "terrace-drain", name: "Terrace Drain", slug: "terrace-drain", image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=400" },
        ],
      },
      {
        id: "special-drains",
        name: "Special Drains",
        slug: "special-drains",
        area: "Drains",
        areaSlug: "drains",
        image: "/images/categories/special-drains.png",
        subcategories: [
          { id: "pop-up-drain", name: "Pop-Up Drain", slug: "pop-up-drain", image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=400" },
          { id: "customised-drains", name: "Customised Drains", slug: "customised-drains", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400" },
          { id: "drainer-bath", name: "Bath Drainer", slug: "drainer-bath", image: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=400" },
        ],
      },
      {
        id: "cockroach-traps",
        name: "Cockroach Trap Drains",
        slug: "cockroach-traps",
        area: "Drains",
        areaSlug: "drains",
        image: "/images/categories/cockroach-traps.png",
        subcategories: [
          { id: "square-round-drain", name: "Square & Round Drain", slug: "square-round-drain", image: "https://images.unsplash.com/photo-1504148455328-4972b9737b2f?auto=format&fit=crop&q=80&w=400" },
          { id: "cockroach-trap-drain", name: "Cockroach Trap Drain", slug: "cockroach-trap-drain", image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=400" },
        ],
      },
    ],
  },

  // ----------------------------------------------------------
  // 6. SPECIAL NEEDS / GRAB BARS
  // ----------------------------------------------------------
  {
    id: "special-needs",
    name: "Special Needs",
    slug: "special-needs",
    image: "https://prosafeliving.com/wp-content/uploads/2025/07/hanidcap-grab-bars-for-bathroom.webp",
    heroImage: "https://prosafeliving.com/wp-content/uploads/2025/07/hanidcap-grab-bars-for-bathroom.webp",
    categories: [
      {
        id: "grab-bars",
        name: "Grab Bars",
        slug: "grab-bars",
        area: "Special Needs",
        areaSlug: "special-needs",
        image: "/images/categories/grab-bars.png",
        subcategories: [
          { id: "grab-bar-ss", name: "SS Grab Bar", slug: "grab-bar-ss", image: "https://images.unsplash.com/photo-1519494140681-891f9302e48e?auto=format&fit=crop&q=80&w=400" },
          { id: "grab-bar-cp", name: "CP Grab Bar", slug: "grab-bar-cp", image: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=400" },
          { id: "grab-bar-abs", name: "ABS Grab Bar", slug: "grab-bar-abs", image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=400" },
          { id: "grab-bar-brass", name: "Brass Grab Bar", slug: "grab-bar-brass", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400" },
          { id: "grab-bar-handicapped", name: "Handicapped Grab Bar", slug: "grab-bar-handicapped", image: "https://images.unsplash.com/photo-1519494140681-891f9302e48e?auto=format&fit=crop&q=80&w=400" },
          { id: "foldable-stool-chair", name: "Foldable Stool Chair", slug: "foldable-stool-chair", image: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=400" },
          { id: "foot-rest", name: "Foot Rest", slug: "foot-rest", image: "https://images.unsplash.com/photo-1504148455328-4972b9737b2f?auto=format&fit=crop&q=80&w=400" },
        ],
      },
    ],
  },

  // ----------------------------------------------------------
  // 7. WATER HEATER / GEYSER AREA
  // ----------------------------------------------------------
  {
    id: "water-heater",
    name: "Water Heater / Geyser",
    slug: "water-heater",
    image: "https://sc04.alicdn.com/kf/H7b9ebf339d31433cbf3d7f33f99b44a6f.jpg",
    heroImage: "https://sc04.alicdn.com/kf/H7b9ebf339d31433cbf3d7f33f99b44a6f.jpg",
    categories: [
      {
        id: "geyser-taps",
        name: "Geyser Taps & Connections",
        slug: "geyser-taps-connections",
        area: "Water Heater / Geyser",
        areaSlug: "water-header",
        image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=600",
        subcategories: [
          { id: "angle-cock-geyser", name: "Angle Cock", slug: "angle-cock-geyser", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400" },
          { id: "flanges-geyser", name: "Flanges", slug: "flanges-geyser", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400" },
          { id: "ss-pipe-geyser", name: "SS Pipe", slug: "ss-pipe-geyser", image: "https://images.unsplash.com/photo-1504148455328-4972b9737b2f?auto=format&fit=crop&q=80&w=400" },
          { id: "copper-pvc-pipes", name: "Copper & PVC Pipes", slug: "copper-pvc-pipes", image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=400" },
          { id: "hose-connector", name: "Hose Connector", slug: "hose-connector", image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=400" },
          { id: "rack-bolt-geyser", name: "Rack Bolt", slug: "rack-bolt-geyser", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400" },
          { id: "elbow-geyser", name: "Elbow", slug: "elbow-geyser", image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=400" },
          { id: "check-valve", name: "Check Valve", slug: "check-valve", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400" },
        ],
      },
    ],
  },

  // ----------------------------------------------------------
  // 8. PLUMBING
  // ----------------------------------------------------------
  {
    id: "plumbing",
    name: "Plumbing",
    slug: "plumbing",
    image: "https://m.media-amazon.com/images/I/61yiQbvmhqL.jpg",
    heroImage: "https://m.media-amazon.com/images/I/61yiQbvmhqL.jpg",
    categories: [
      {
        id: "finished-plumbing",
        name: "Finished Plumbing",
        slug: "finished-plumbing",
        area: "Plumbing",
        areaSlug: "plumbing",
        image: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=600",
        subcategories: [
          { id: "tap-spindles-aerators", name: "Taps Spindles & Aerators", slug: "tap-spindles-aerators", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400" },
          { id: "thread-seal-tape", name: "Thread Seal Tape", slug: "thread-seal-tape", image: "https://images.unsplash.com/photo-1504148455328-4972b9737b2f?auto=format&fit=crop&q=80&w=400" },
          { id: "flange-plumbing", name: "Flange", slug: "flange-plumbing", image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=400" },
          { id: "extension-nipple", name: "Extension Nipple", slug: "extension-nipple", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400" },
          { id: "elbow-tee-nipple", name: "Elbow / Tee / Pipe Nipples / Plugs", slug: "elbow-tee-nipple", image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=400" },
          { id: "socket-bush-adapter", name: "Socket / Bush / Adapter", slug: "socket-bush-adapter", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400" },
          { id: "hose-fittings", name: "Hose / Pipe Fittings", slug: "hose-fittings", image: "https://images.unsplash.com/photo-1504148455328-4972b9737b2f?auto=format&fit=crop&q=80&w=400" },
          { id: "hose-collars", name: "Hose Collars", slug: "hose-collars", image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=400" },
          { id: "grooved-unions", name: "Grooved Unions", slug: "grooved-unions", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400" },
        ],
      },
      {
        id: "rough-plumbing-valves",
        name: "Rough Plumbing & Valves",
        slug: "rough-plumbing-valves",
        area: "Plumbing",
        areaSlug: "plumbing",
        image: "https://images.unsplash.com/photo-1504148455328-4972b9737b2f?auto=format&fit=crop&q=80&w=600",
        subcategories: [
          { id: "ball-valve", name: "Ball Valve", slug: "ball-valve", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400" },
          { id: "float-valve", name: "Float Valve", slug: "float-valve", image: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=400" },
          { id: "foot-valve", name: "Foot Valve", slug: "foot-valve", image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=400" },
        ],
      },
    ],
  },

  // ----------------------------------------------------------
  // 9. COMMERCIAL / PUBLIC BATHROOM
  // ----------------------------------------------------------
  {
    id: "commercial",
    name: "Commercial / Public Bathroom",
    slug: "commercial",
    image: "https://t4.ftcdn.net/jpg/17/60/52/95/360_F_1760529534_I7aLpF3GW1VrQGuyM1fKpNwpoweInLQ4.jpg",
    heroImage: "https://t4.ftcdn.net/jpg/17/60/52/95/360_F_1760529534_I7aLpF3GW1VrQGuyM1fKpNwpoweInLQ4.jpg",
    categories: [
      {
        id: "commercial-taps",
        name: "Commercial Taps",
        slug: "commercial-taps",
        area: "Commercial / Public Bathroom",
        areaSlug: "commercial",
        image: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=600",
        subcategories: [
          { id: "sensor-faucet-commercial", name: "Sensor Faucet", slug: "sensor-faucet-commercial", image: "https://images.unsplash.com/photo-1584622112935-77ad9876a13d00?auto=format&fit=crop&q=80&w=400" },
          { id: "pillar-tap-pressmatic", name: "Pillar Tap / Pressmatic", slug: "pillar-tap-pressmatic", image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=400" },
          { id: "spindle-commercial", name: "Spindle", slug: "spindle-commercial", image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=400" },
          { id: "aerator-commercial", name: "Aerator", slug: "aerator-commercial", image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=400" },
        ],
      },
      {
        id: "commercial-hygiene",
        name: "Commercial Hygiene Products",
        slug: "commercial-hygiene",
        area: "Commercial / Public Bathroom",
        areaSlug: "commercial",
        image: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&q=80&w=600",
        subcategories: [
          { id: "sanitary-bag-dispenser", name: "Sanitary Bag Dispenser", slug: "sanitary-bag-dispenser", image: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=400" },
          { id: "soap-dispenser-commercial", name: "Soap Dispenser", slug: "soap-dispenser-commercial", image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=400" },
          { id: "hand-dryer", name: "Hand Dryer", slug: "hand-dryer", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400" },
          { id: "tissue-dispenser", name: "Tissue Dispenser", slug: "tissue-dispenser", image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=400" },
        ],
      },
      {
        id: "urinal-fittings",
        name: "Urinal Fittings",
        slug: "urinal-fittings",
        area: "Commercial / Public Bathroom",
        areaSlug: "commercial",
        image: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&q=80&w=600",
        subcategories: [
          { id: "urinal-fitting", name: "Urinal Fitting", slug: "urinal-fitting", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400" },
          { id: "urinal-sensor", name: "Urinal Sensor", slug: "urinal-sensor", image: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&q=80&w=400" },
          { id: "waste-coupling-urinal", name: "Waste Coupling", slug: "waste-coupling-urinal", image: "https://images.unsplash.com/photo-1504148455328-4972b9737b2f?auto=format&fit=crop&q=80&w=400" },
          { id: "urinal-mat", name: "Urinal Mat", slug: "urinal-mat", image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=400" },
          { id: "urinal-spreader", name: "Urinal Spreader", slug: "urinal-spreader", image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=400" },
          { id: "urinal-valve", name: "Urinal Valve", slug: "urinal-valve", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400" },
        ],
      },
    ],
  },

  // ----------------------------------------------------------
  // 10. UTILITY / PET WASH / ENTRANCE
  // ----------------------------------------------------------
  {
    id: "utility",
    name: "Utility / Pet Wash",
    slug: "utility",
    image: "https://cdn.mos.cms.futurecdn.net/Kq97nhXSz58rsvJ9C2Lw8K-1295-80.jpg",
    heroImage: "https://cdn.mos.cms.futurecdn.net/Kq97nhXSz58rsvJ9C2Lw8K-1295-80.jpg",
    categories: [
      {
        id: "utility-taps",
        name: "Utility Taps",
        slug: "utility-taps",
        area: "Utility / Pet Wash",
        areaSlug: "utility",
        image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=600",
        subcategories: [
          { id: "washing-machine-tap", name: "Washing Machine Tap", slug: "washing-machine-tap", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400" },
          { id: "nozzle-cock", name: "Nozzle Cock", slug: "nozzle-cock", image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=400" },
          { id: "angle-cock-utility", name: "Angle Cock", slug: "angle-cock-utility", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400" },
          { id: "bib-tap-utility", name: "Bib Tap", slug: "bib-tap-utility", image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=400" },
          { id: "sink-tap-utility", name: "Sink Tap", slug: "sink-tap-utility", image: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=400" },
          { id: "sink-mixer-utility", name: "Sink Mixer", slug: "sink-mixer-utility", image: "https://images.unsplash.com/photo-1504148455328-4972b9737b2f?auto=format&fit=crop&q=80&w=400" },
        ],
      },
      {
        id: "utility-accessories",
        name: "Utility Accessories",
        slug: "utility-accessories",
        area: "Utility / Pet Wash",
        areaSlug: "utility",
        image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=600",
        subcategories: [
          { id: "basket-utility", name: "Basket", slug: "basket-utility", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400" },
          { id: "glass-shelf-utility", name: "Glass Shelf", slug: "glass-shelf-utility", image: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=400" },
          { id: "hand-shower-utility", name: "Hand Shower", slug: "hand-shower-utility", image: "https://images.unsplash.com/photo-1504148455328-4972b9737b2f?auto=format&fit=crop&q=80&w=400" },
          { id: "health-faucet-utility", name: "Health Faucet", slug: "health-faucet-utility", image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=400" },
          { id: "cloth-liner", name: "Cloth Liner", slug: "cloth-liner", image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=400" },
        ],
      },
    ],
  },

  // ----------------------------------------------------------
  // 11. OUTDOOR / GARDEN
  // ----------------------------------------------------------
  {
    id: "outdoor",
    name: "Outdoor / Garden",
    slug: "outdoor",
    image: "https://m.media-amazon.com/images/I/81shQCgZgbL._AC_UF1000,1000_QL80_.jpg",
    heroImage: "https://m.media-amazon.com/images/I/81shQCgZgbL._AC_UF1000,1000_QL80_.jpg",
    categories: [
      {
        id: "outdoor-drains",
        name: "Outdoor Drains",
        slug: "outdoor-drains",
        area: "Outdoor / Garden",
        areaSlug: "outdoor",
        image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=600",
        subcategories: [
          { id: "trench-drain-outdoor", name: "Trench Drains", slug: "trench-drain-outdoor", image: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=400" },
        ],
      },
    ],
  },

  // ----------------------------------------------------------
  // 12. ROOF / BALCONY / WATER TANK
  // ----------------------------------------------------------
  {
    id: "roof-balcony",
    name: "Roof / Balcony / Water Tank",
    slug: "roof-balcony",
    image: "https://assets-news.housing.com/news/wp-content/uploads/2021/12/06164021/Which-water-tank-is-best-for-home-shutterstock_1993635497.jpg",
    heroImage: "https://assets-news.housing.com/news/wp-content/uploads/2021/12/06164021/Which-water-tank-is-best-for-home-shutterstock_1993635497.jpg",
    categories: [
      {
        id: "roof-products",
        name: "Roof & Balcony Products",
        slug: "roof-balcony-products",
        area: "Roof / Balcony / Water Tank",
        areaSlug: "roof-balcony",
        image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=600",
        subcategories: [
          { id: "float-valve-roof", name: "Float Valve", slug: "float-valve-roof", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400" },
          { id: "line-strainer", name: "Line Strainer", slug: "line-strainer", image: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=400" },
          { id: "air-vent-filter", name: "Air Vent Filter", slug: "air-vent-filter", image: "https://images.unsplash.com/photo-1504148455328-4972b9737b2f?auto=format&fit=crop&q=80&w=400" },
          { id: "balcony-drain-roof", name: "Balcony Drain", slug: "balcony-drain-roof", image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=400" },
          { id: "dome-drain-roof", name: "Dome Drain", slug: "dome-drain-roof", image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=400" },
        ],
      },
    ],
  },

  // ----------------------------------------------------------
  // 13. TILE LEVELING
  // ----------------------------------------------------------
  {
    id: "tile-leveling",
    name: "Tile Leveling System",
    slug: "tile-leveling",
    image: "https://futurestilesonline.com/wp-content/uploads/2025/03/Annotation-2025-03-03-144838-1.png",
    heroImage: "https://futurestilesonline.com/wp-content/uploads/2025/03/Annotation-2025-03-03-144838-1.png",
    categories: [
      {
        id: "tile-leveling-products",
        name: "Tile Leveling Products",
        slug: "tile-leveling-products",
        area: "Tile Leveling System",
        areaSlug: "tile-leveling",
        image: "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=600",
        subcategories: [
          { id: "tile-spacer", name: "Tile Spacer", slug: "tile-spacer", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400" },
          { id: "levelling-clip", name: "Levelling Clip", slug: "levelling-clip", image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=400" },
          { id: "wedges-plier", name: "Wedges & Plier", slug: "wedges-plier", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400" },
        ],
      },
    ],
  },

  // ----------------------------------------------------------
  // 14. HOTELIER
  // ----------------------------------------------------------
  {
    id: "hotelier",
    name: "Hotelier",
    slug: "hotelier",
    image: "https://www.maisonvalentina.net/blog/wp-content/uploads/2024/08/MV_01_24_DIAMOND-scaled.jpg",
    heroImage: "https://www.maisonvalentina.net/blog/wp-content/uploads/2024/08/MV_01_24_DIAMOND-scaled.jpg",
    categories: [
      {
        id: "hotelier-products",
        name: "Hotelier Products",
        slug: "hotelier-products",
        area: "Hotelier",
        areaSlug: "hotelier",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
        subcategories: [
          { id: "shampoo-soap-holder", name: "Shampoo / Soap Holder", slug: "shampoo-soap-holder", image: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=400" },
          { id: "cloth-liner-hotel", name: "Cloth Liner", slug: "cloth-liner-hotel", image: "https://images.unsplash.com/photo-1504148455328-4972b9737b2f?auto=format&fit=crop&q=80&w=400" },
          { id: "towel-holder-hotel", name: "Towel Holder", slug: "towel-holder-hotel", image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=400" },
          { id: "toiletries-holder", name: "Toiletries Holder", slug: "toiletries-holder", image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=400" },
          { id: "hair-dryer", name: "Hair Dryer", slug: "hair-dryer", image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=400" },
        ],
      },
    ],
  },

  // ----------------------------------------------------------
  // 15. HOSPITALS / CLINICS
  // ----------------------------------------------------------
  {
    id: "hospitals",
    name: "Hospitals / Clinics",
    slug: "hospitals",
    image: "https://www.hewi.com/Professional-Care/800K/3878/image-thumb__3878__full-16-9/hewi-system800k-interieur-tuer.eaf6a419.jpg",
    heroImage: "https://www.hewi.com/Professional-Care/800K/3878/image-thumb__3878__full-16-9/hewi-system800k-interieur-tuer.eaf6a419.jpg",
    categories: [
      {
        id: "hospital-products",
        name: "Hospital & Clinic Products",
        slug: "hospital-clinic-products",
        area: "Hospitals / Clinics",
        areaSlug: "hospitals",
        image: "https://images.unsplash.com/photo-1516574187841-e9c5edcb7201?auto=format&fit=crop&q=80&w=600",
        subcategories: [
          { id: "sanitizer-holder", name: "Sanitizer Holder", slug: "sanitizer-holder", image: "https://images.unsplash.com/photo-1584622112935-77ad9876a13d00?auto=format&fit=crop&q=80&w=400" },
          { id: "elbow-operated-tap", name: "Elbow Operated Taps", slug: "elbow-operated-tap", image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=400" },
          { id: "foldable-chair-hospital", name: "Foldable Chair", slug: "foldable-chair-hospital", image: "https://images.unsplash.com/photo-1585129049162-71fa2b335956?auto=format&fit=crop&q=80&w=400" },
          { id: "laboratory-tap-hospital", name: "Laboratory Tap", slug: "laboratory-tap-hospital", image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=400" },
        ],
      },
    ],
  },

  // ----------------------------------------------------------
  // 16. SCHOOLS / COLLEGES
  // ----------------------------------------------------------
  {
    id: "schools",
    name: "Schools / Colleges",
    slug: "schools",
    image: "https://www.greenlamsturdo.com/wp-content/uploads/2025/09/hpl-urinal-partition-design.jpg",
    heroImage: "https://www.greenlamsturdo.com/wp-content/uploads/2025/09/hpl-urinal-partition-design.jpg",
    categories: [
      {
        id: "school-products",
        name: "School & College Products",
        slug: "school-college-products",
        area: "Schools / Colleges",
        areaSlug: "schools",
        image: "https://images.unsplash.com/photo-1584622112935-77ad9876a13d00?auto=format&fit=crop&q=80&w=600",
        subcategories: [
          { id: "drinking-water-tap", name: "Drinking Water Taps", slug: "drinking-water-tap", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400" },
          { id: "laboratory-tap-school", name: "Laboratory Tap", slug: "laboratory-tap-school", image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=400" },
        ],
      },
    ],
  },
];

// ============================================================
// HELPER FUNCTIONS — import these wherever needed
// ============================================================

/** Get a flat list of all categories across all areas */
export const getAllCategories = (): Category[] =>
  AREAS.flatMap((area) => area.categories);

/** Get a flat list of all subcategories across everything */
export const getAllSubCategories = (): SubCategory[] =>
  getAllCategories().flatMap((cat) => cat.subcategories);

/** Find an area by slug */
export const getAreaBySlug = (slug: string): Area | undefined =>
  AREAS.find((a) => a.slug === slug);

/** Find a category by slug */
export const getCategoryBySlug = (slug: string): Category | undefined =>
  getAllCategories().find((c) => c.slug === slug);

/** Get all categories for a given area slug */
export const getCategoriesByArea = (areaSlug: string): Category[] =>
  AREAS.find((a) => a.slug === areaSlug)?.categories ?? [];

/** Search categories and subcategories by keyword */
export const searchCategories = (query: string): { categories: Category[]; subcategories: SubCategory[] } => {
  const q = query.toLowerCase();
  const categories = getAllCategories().filter(
    (c) => c.name.toLowerCase().includes(q) || c.area.toLowerCase().includes(q)
  );
  const subcategories = getAllSubCategories().filter((s) =>
    s.name.toLowerCase().includes(q)
  );
  return { categories, subcategories };
};

/** Get the nav mega-menu structure: area → categories (no subcategories, for brevity) */
export const getNavMegaMenu = () =>
  AREAS.map((area) => ({
    area: area.name,
    areaSlug: area.slug,
    categories: area.categories.map((c) => ({ name: c.name, slug: c.slug })),
  }));
