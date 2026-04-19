-- Shree Radhe Tiles & Hardware Database Seed Script
-- Run this in your Supabase SQL Editor (https://ulzqcpceklkwxzceykbd.supabase.co)
-- This will insert 7 categories and 16 products with images and inventory

-- ============================================================
-- 1. CATEGORIES
-- ============================================================
INSERT INTO categories (name, slug) VALUES
  ('Basins & Sinks', 'basins-sinks'),
  ('Showers & Panels', 'showers-panels'),
  ('Faucets & Mixers', 'faucets-mixers'),
  ('Bathtubs', 'bathtubs'),
  ('Toilets & Sanitaryware', 'toilets-sanitaryware'),
  ('Accessories & Mirrors', 'accessories-mirrors'),
  ('Tiles & Flooring', 'tiles-flooring')
ON CONFLICT (slug) DO NOTHING;

-- ============================================================
-- 2. PRODUCTS
-- ============================================================
DO $$
DECLARE
  cat_basins UUID;
  cat_showers UUID;
  cat_faucets UUID;
  cat_bathtubs UUID;
  cat_toilets UUID;
  cat_accessories UUID;
  cat_tiles UUID;
  prod_id UUID;
BEGIN
  SELECT id INTO cat_basins FROM categories WHERE slug = 'basins-sinks';
  SELECT id INTO cat_showers FROM categories WHERE slug = 'showers-panels';
  SELECT id INTO cat_faucets FROM categories WHERE slug = 'faucets-mixers';
  SELECT id INTO cat_bathtubs FROM categories WHERE slug = 'bathtubs';
  SELECT id INTO cat_toilets FROM categories WHERE slug = 'toilets-sanitaryware';
  SELECT id INTO cat_accessories FROM categories WHERE slug = 'accessories-mirrors';
  SELECT id INTO cat_tiles FROM categories WHERE slug = 'tiles-flooring';

  -- Product 1: Jaquar Kubix Prime Wall-Hung Basin
  INSERT INTO products (name, brand, price, category_id, width, height, depth, description, status, is_featured, ar_enabled, rating_avg, rating_count)
  VALUES ('Jaquar Kubix Prime Wall-Hung Basin', 'Jaquar', 8500, cat_basins, 600, 450, 180,
    'Premium wall-hung basin with clean geometric lines, anti-bacterial glaze coating, and concealed fixing. Ideal for modern bathroom interiors.',
    'active', true, true, 4.5, 12)
  RETURNING id INTO prod_id;
  INSERT INTO product_media (product_id, media_url, media_type) VALUES (prod_id, 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop', 'image');
  INSERT INTO inventory (product_id, quantity) VALUES (prod_id, 50);

  -- Product 2: Kohler Reach Under-Counter Basin
  INSERT INTO products (name, brand, price, category_id, width, height, depth, description, status, is_featured, ar_enabled, rating_avg, rating_count)
  VALUES ('Kohler Reach Under-Counter Basin', 'Kohler', 12200, cat_basins, 540, 420, 210,
    'Undermount basin with smooth contours and overflow protection. Fits standard vanity cutouts. Available in white vitreous china.',
    'active', false, true, 4.3, 8)
  RETURNING id INTO prod_id;
  INSERT INTO product_media (product_id, media_url, media_type) VALUES (prod_id, 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&h=600&fit=crop', 'image');
  INSERT INTO inventory (product_id, quantity) VALUES (prod_id, 30);

  -- Product 3: Hindware Classique Pedestal Basin
  INSERT INTO products (name, brand, price, category_id, width, height, depth, description, status, is_featured, ar_enabled, rating_avg, rating_count)
  VALUES ('Hindware Classique Pedestal Basin', 'Hindware', 4800, cat_basins, 500, 380, 830,
    'Classic pedestal basin with full pedestal concealing pipework. Timeless design suited for traditional and transitional bathrooms.',
    'active', true, false, 4.0, 15)
  RETURNING id INTO prod_id;
  INSERT INTO product_media (product_id, media_url, media_type) VALUES (prod_id, 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop', 'image');
  INSERT INTO inventory (product_id, quantity) VALUES (prod_id, 25);

  -- Product 4: Grohe Rainshower Mono Overhead Shower
  INSERT INTO products (name, brand, price, category_id, width, height, depth, description, status, is_featured, ar_enabled, rating_avg, rating_count)
  VALUES ('Grohe Rainshower Mono Overhead Shower', 'Grohe', 22000, cat_showers, 310, 310, 80,
    '310mm overhead shower with DreamSpray technology for even water distribution. Features SpeedClean anti-lime nozzles. Chrome finish.',
    'active', true, false, 4.7, 20)
  RETURNING id INTO prod_id;
  INSERT INTO product_media (product_id, media_url, media_type) VALUES (prod_id, 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&h=600&fit=crop', 'image');
  INSERT INTO inventory (product_id, quantity) VALUES (prod_id, 18);

  -- Product 5: Jaquar Allied Shower Panel
  INSERT INTO products (name, brand, price, category_id, width, height, depth, description, status, is_featured, ar_enabled, rating_avg, rating_count)
  VALUES ('Jaquar Allied Shower Panel', 'Jaquar', 35500, cat_showers, 200, 1200, 100,
    'Stainless steel shower panel with overhead rain shower, hand shower, 6 body jets, and thermostatic control. Complete shower experience.',
    'active', true, true, 4.8, 6)
  RETURNING id INTO prod_id;
  INSERT INTO product_media (product_id, media_url, media_type) VALUES (prod_id, 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=800&h=600&fit=crop', 'image');
  INSERT INTO inventory (product_id, quantity) VALUES (prod_id, 10);

  -- Product 6: Grohe Eurosmart Basin Mixer
  INSERT INTO products (name, brand, price, category_id, width, height, depth, description, status, is_featured, ar_enabled, rating_avg, rating_count)
  VALUES ('Grohe Eurosmart Basin Mixer', 'Grohe', 7200, cat_faucets, 150, 170, NULL,
    'Single-lever basin mixer with ceramic cartridge, EcoJoy water-saving technology. Easy installation with flexible hoses included.',
    'active', false, false, 4.2, 25)
  RETURNING id INTO prod_id;
  INSERT INTO product_media (product_id, media_url, media_type) VALUES (prod_id, 'https://images.unsplash.com/photo-1585058178215-33108215e3c8?w=800&h=600&fit=crop', 'image');
  INSERT INTO inventory (product_id, quantity) VALUES (prod_id, 40);

  -- Product 7: Kohler Purist Wall-Mount Faucet
  INSERT INTO products (name, brand, price, category_id, width, height, depth, description, status, is_featured, ar_enabled, rating_avg, rating_count)
  VALUES ('Kohler Purist Wall-Mount Faucet', 'Kohler', 18900, cat_faucets, 200, 120, NULL,
    'Architectural wall-mount faucet with geometric form. Polished chrome with drip-free ceramic disc valve.',
    'active', true, false, 4.6, 11)
  RETURNING id INTO prod_id;
  INSERT INTO product_media (product_id, media_url, media_type) VALUES (prod_id, 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop', 'image');
  INSERT INTO inventory (product_id, quantity) VALUES (prod_id, 15);

  -- Product 8: Cera Lyric Single-Lever Sink Mixer
  INSERT INTO products (name, brand, price, category_id, width, height, depth, description, status, is_featured, ar_enabled, rating_avg, rating_count)
  VALUES ('Cera Lyric Single-Lever Sink Mixer', 'Cera', 3400, cat_faucets, 180, 160, 50,
    'Budget-friendly single-lever kitchen/bathroom sink mixer. Ceramic disc technology, 15-year warranty. Chrome finish.',
    'active', false, false, 3.9, 30)
  RETURNING id INTO prod_id;
  INSERT INTO product_media (product_id, media_url, media_type) VALUES (prod_id, 'https://images.unsplash.com/photo-1585058178215-33108215e3c8?w=800&h=600&fit=crop', 'image');
  INSERT INTO inventory (product_id, quantity) VALUES (prod_id, 60);

  -- Product 9: Kohler Serif Freestanding Bathtub
  INSERT INTO products (name, brand, price, category_id, width, height, depth, description, status, is_featured, ar_enabled, rating_avg, rating_count)
  VALUES ('Kohler Serif Freestanding Bathtub', 'Kohler', 185000, cat_bathtubs, 1700, 800, 680,
    'Cast iron freestanding bathtub with classic rolled rim and enamel finish. Exceptional heat retention. Floor-mount faucet compatible.',
    'active', true, true, 4.9, 5)
  RETURNING id INTO prod_id;
  INSERT INTO product_media (product_id, media_url, media_type) VALUES (prod_id, 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&h=600&fit=crop', 'image');
  INSERT INTO inventory (product_id, quantity) VALUES (prod_id, 3);

  -- Product 10: Parryware Acrylic Built-In Bathtub
  INSERT INTO products (name, brand, price, category_id, width, height, depth, description, status, is_featured, ar_enabled, rating_avg, rating_count)
  VALUES ('Parryware Acrylic Built-In Bathtub', 'Parryware', 38000, cat_bathtubs, 1500, 750, 550,
    'Acrylic alcove bathtub with anti-slip base, reinforced structure, and chrome overflow drain. Easy to install.',
    'active', false, false, 4.1, 9)
  RETURNING id INTO prod_id;
  INSERT INTO product_media (product_id, media_url, media_type) VALUES (prod_id, 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&h=600&fit=crop', 'image');
  INSERT INTO inventory (product_id, quantity) VALUES (prod_id, 7);

  -- Product 11: Hindware Nuvus Wall-Hung WC
  INSERT INTO products (name, brand, price, category_id, width, height, depth, description, status, is_featured, ar_enabled, rating_avg, rating_count)
  VALUES ('Hindware Nuvus Wall-Hung WC', 'Hindware', 16500, cat_toilets, 550, 360, 400,
    'Wall-hung toilet pan with rimless design for hygienic cleaning. Requires in-wall cistern frame. Soft-close seat included.',
    'active', true, true, 4.4, 18)
  RETURNING id INTO prod_id;
  INSERT INTO product_media (product_id, media_url, media_type) VALUES (prod_id, 'https://images.unsplash.com/photo-1585058178215-33108215e3c8?w=800&h=600&fit=crop', 'image');
  INSERT INTO inventory (product_id, quantity) VALUES (prod_id, 20);

  -- Product 12: Cera Calida One-Piece Toilet
  INSERT INTO products (name, brand, price, category_id, width, height, depth, description, status, is_featured, ar_enabled, rating_avg, rating_count)
  VALUES ('Cera Calida One-Piece Toilet', 'Cera', 9800, cat_toilets, 680, 390, 770,
    'One-piece S-trap floor-mounted WC with dual flush (3L/6L). Scratch-resistant vitreous china. Includes soft-close PP seat.',
    'active', false, false, 4.0, 22)
  RETURNING id INTO prod_id;
  INSERT INTO product_media (product_id, media_url, media_type) VALUES (prod_id, 'https://images.unsplash.com/photo-1564540586988-aa4e53ab3394?w=800&h=600&fit=crop', 'image');
  INSERT INTO inventory (product_id, quantity) VALUES (prod_id, 35);

  -- Product 13: Jaquar Kubix LED Bathroom Mirror
  INSERT INTO products (name, brand, price, category_id, width, height, depth, description, status, is_featured, ar_enabled, rating_avg, rating_count)
  VALUES ('Jaquar Kubix LED Bathroom Mirror', 'Jaquar', 12800, cat_accessories, 800, 600, 40,
    'Frameless LED backlit bathroom mirror with touch-sensor dimmer, anti-fog heating pad, and IP44 waterproof rating.',
    'active', true, true, 4.6, 14)
  RETURNING id INTO prod_id;
  INSERT INTO product_media (product_id, media_url, media_type) VALUES (prod_id, 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop', 'image');
  INSERT INTO inventory (product_id, quantity) VALUES (prod_id, 12);

  -- Product 14: Franke Stainless Steel Towel Rail
  INSERT INTO products (name, brand, price, category_id, width, height, depth, description, status, is_featured, ar_enabled, rating_avg, rating_count)
  VALUES ('Franke Stainless Steel Towel Rail', 'Franke', 2200, cat_accessories, 600, 25, 80,
    '304 stainless steel double towel bar with wall-mount brackets. Brushed nickel finish. Rust-proof and corrosion-resistant.',
    'active', false, false, 4.1, 10)
  RETURNING id INTO prod_id;
  INSERT INTO product_media (product_id, media_url, media_type) VALUES (prod_id, 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&h=600&fit=crop', 'image');
  INSERT INTO inventory (product_id, quantity) VALUES (prod_id, 45);

  -- Product 15: Kajaria Eternity Large Format Floor Tile
  INSERT INTO products (name, brand, price, category_id, width, height, depth, description, status, is_featured, ar_enabled, rating_avg, rating_count)
  VALUES ('Kajaria Eternity Large Format Floor Tile', 'Kajaria', 185, cat_tiles, 800, 800, 9,
    'Full-body vitrified tile with anti-skid surface finish. Suitable for wet areas. Low water absorption. Price per sq.ft.',
    'active', true, false, 4.3, 28)
  RETURNING id INTO prod_id;
  INSERT INTO product_media (product_id, media_url, media_type) VALUES (prod_id, 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=800&h=600&fit=crop', 'image');
  INSERT INTO inventory (product_id, quantity) VALUES (prod_id, 200);

  -- Product 16: Somany Duragres Wall Tile
  INSERT INTO products (name, brand, price, category_id, width, height, depth, description, status, is_featured, ar_enabled, rating_avg, rating_count)
  VALUES ('Somany Duragres Wall Tile Matte Concrete', 'Somany', 95, cat_tiles, 300, 600, 8,
    'Matte finish ceramic wall tile in concrete grey tone. Suitable for bathroom walls. Frost resistant. Easy to clean. Price per sq.ft.',
    'active', false, false, 3.8, 16)
  RETURNING id INTO prod_id;
  INSERT INTO product_media (product_id, media_url, media_type) VALUES (prod_id, 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop', 'image');
  INSERT INTO inventory (product_id, quantity) VALUES (prod_id, 300);

  RAISE NOTICE 'Successfully seeded 16 products with images and inventory!';
END $$;

-- ============================================================
-- 3. SAMPLE REVIEWS
-- ============================================================
-- (Reviews require a valid user_id, so these will be added when users exist)

SELECT 'Seed complete! ' || count(*) || ' categories, ' || (SELECT count(*) FROM products) || ' products inserted.'
FROM categories;
