-- Catalog Seed Part 3 - 2026-04-10T20:40:01.581Z

-- 2. INSERT PRODUCTS (PART 3)
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'KB2011003', 'KB2011040', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'KB2011023', 'KB2011001', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ', KB2011005', 'KB2011004', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'KB2011033 	KB2011016', 'KB2011039', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2011014', 'KB2011014', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2011025', 'KB2011025', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2011019', 'KB2011019', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2011024', 'KB2011024', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2011037', 'KB2011037', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2011032', 'KB2011032', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2011062', 'KB2011062', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB3311010', 'KB3311010', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB3311001', 'KB3311001', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB3311019', 'KB3311019', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB3311005', 'KB3311005', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB3311024', 'KB3311024', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB3311025', 'KB3311025', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB3311014', 'KB3311014', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB3311033', 'KB3311033', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB3311004', 'KB3311004', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB3311029', 'KB3311029', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'LINEAR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB3211010', 'KB3211010', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB3211005', 'KB3211005', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB3211001', 'KB3211001', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB3211024', 'KB3211024', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB3211014', 'KB3211014', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB3211019', 'KB3211019', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB3211025', 'KB3211025', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB3211033', 'KB3211033', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB3211004', 'KB3211004', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB3211029', 'KB3211029', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SPHERE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '57 	 	Sensor Tap, AC/DC', 'KBST001', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA860002', 'KA860002', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1411001', 'KB1411001', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '58 	 	Sensor Tap For Wash Basin, AC/DC', 'KBST002', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'KA860003 	KB1811046', 'KA860001', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1411010', 'KB1411010', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1411004', 'KB1411004', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '93 	 	Exposed Urinal Sensotronic Sensor', 'KA630001', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Flow  offers complete design flexibility on the outside, backed by dependable thermostatic', 'PRO', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'BEST OF 6 WORLDS 	WITH 1', 'THE', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FLOW PRO' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'KBTHS004', 'KBTHR003', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'THERMO CONTROL' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'CONTROL - 2 Outlet', 'THERMO', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'THERMO CONTROL' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'KBTHS003', 'KBTHR002', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'THERMO CONTROL' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KBTHR001', 'KBTHR001', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'THERMO CONTROL' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KBTHS002', 'KBTHS002', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'THERMO CONTROL' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2011049', 'KB2011049', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'THERMO CONTROL' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB320003R', 'KB320003R', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB320003S', 'KB320003S', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB320004R', 'KB320004R', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB320004S', 'KB320004S', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB400003R', 'KB400003R', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB400003S', 'KB400003S', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB400004R', 'KB400004R', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB400004S', 'KB400004S', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB400001R', 'KB400001R', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1811059', 'KB1811059', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB400001S', 'KB400001S', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB320001R', 'KB320001R', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB320001S', 'KB320001S', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB400002R', 'KB400002R', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FLUSH VALVE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB400002S', 'KB400002S', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FLUSH VALVE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ', KB400002R', 'KB320002R', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB320002S', 'KB320002S', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FLUSH VALVE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA570005', 'KA570005', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA570016', 'KA570016', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA570003', 'KA570003', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA570006', 'KA570006', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA570017', 'KA570017', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA570004', 'KA570004', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA570007', 'KA570007', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA570001', 'KA570001', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA570008', 'KA570008', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA570002', 'KA570002', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA570011', 'KA570011', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA570013', 'KA570013', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA570030', 'KA570030', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '80 	 	Single Function Wall Mounted Overhead Shower', 'KA550006', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA550008', 'KA550008', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA550009', 'KA550009', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA550011', 'KA550011', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA550025', 'KA550025', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'KA550032', 'KA550028', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'OVERHEAD SHOWER- SINGLE FLOW' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA570039', 'KA570039', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'OVERHEAD SHOWER- SINGLE FLOW' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA550029', 'KA550029', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'OVERHEAD SHOWER- SINGLE FLOW' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA570038', 'KA570038', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'OVERHEAD SHOWER- SINGLE FLOW' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA550030', 'KA550030', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'OVERHEAD SHOWER- SINGLE FLOW' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA550016', 'KA550016', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'OVERHEAD SHOWER- SINGLE FLOW' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA550017', 'KA550017', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'OVERHEAD SHOWER- SINGLE FLOW' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA550014', 'KA550014', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'OVERHEAD SHOWER- SINGLE FLOW' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA550015', 'KA550015', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'OVERHEAD SHOWER- SINGLE FLOW' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA550018', 'KA550018', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'OVERHEAD SHOWER- SINGLE FLOW' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA560002', 'KA560002', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '81 	 	Single Function Hand Shower', 'KA510001', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '82 	 	Single Function Hand Shower', 'KA510002', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '83 	 	Single Function Hand Shower', 'KA510006', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '84 	 	Single Function Hand Shower', 'KA510007', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA570018', 'KA570018', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'OVERHEAD SHOWER- CASCADE FLOW' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA550026', 'KA550026', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'OVERHEAD SHOWER- CASCADE FLOW' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '78 	 	Single Function Wall Mounted Overhead Shower', 'KA550001', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA550027', 'KA550027', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'OVERHEAD SHOWER- CASCADE FLOW' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA530001', 'KA530001', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA530002', 'KA530002', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA530005', 'KA530005', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA520006', 'KA520006', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA510008', 'KA510008', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA510017', 'KA510017', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA510016', 'KA510016', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'KA620006', 'KA620003', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HAND SHOWER- MULTI FLOW' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'KA940005', 'KA940001', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA960004', 'KA960004', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA940002', 'KA940002', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB111006', 'KB111006', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA960002', 'KA960002', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA960003', 'KA960003', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA940003', 'KA940003', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '91 	 	Health Faucet', 'KA580008', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA580009', 'KA580009', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEALTH FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '90 	 	Health Faucet', 'KA580007', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'KA580028-HP', 'KA580015', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEALTH FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Health Faucet () with', 'POM', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEALTH FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ', KA580017', 'KA580016', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA580017', 'KA580017', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEALTH FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA870002', 'KA870002', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA910004', 'KA910004', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA870001', 'KA870001', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'KA910006	KA870003 / KA870004', 'KA910001', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA870008', 'KA870008', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '/ KA870006', 'KA870005', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '/ KA870010', 'KA870009', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '/06/02/03/04', 'KA970005', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA910009', 'KA910009', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'KA910010', 'KA910005', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA910011', 'KA910011', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '92 	 	Self Closing Urinal Angle Valve', 'KA860004', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA970001', 'KA970001', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'ALLIED PRODUCTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA910007', 'KA910007', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA910008', 'KA910008', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA540002', 'KA540002', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'ALLIED PRODUCTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA650001', 'KA650001', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA650002', 'KA650002', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'KA660005', 'KA660001', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'KEY HIGHLIGHTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA920004', 'KA920004', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'KEY HIGHLIGHTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'KA920001', 'KA660007', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'KEY HIGHLIGHTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA660003', 'KA660003', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'KEY HIGHLIGHTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA660008', 'KA660008', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'KEY HIGHLIGHTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA920002', 'KA920002', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'KEY HIGHLIGHTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA920006', 'KA920006', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'KEY HIGHLIGHTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA660004', 'KA660004', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'KEY HIGHLIGHTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA660010', 'KA660010', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'KEY HIGHLIGHTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA920003', 'KA920003', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'KEY HIGHLIGHTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA920008', 'KA920008', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'BATH ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA920009', 'KA920009', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'BATH ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA930001', 'KA930001', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'BATH ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA930002', 'KA930002', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA930006', 'KA930006', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA930003', 'KA930003', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'KA980001', 'KA930007', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA930004', 'KA930004', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA930008', 'KA930008', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA930005', 'KA930005', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA930009', 'KA930009', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA980003', 'KA980003', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA980004', 'KA980004', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA980009', 'KA980009', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA980005', 'KA980005', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA980010', 'KA980010', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA980007', 'KA980007', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA990003', 'KA990003', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA990001', 'KA990001', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA990004', 'KA990004', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA990005', 'KA990005', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA990007', 'KA990007', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA990009', 'KA990009', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA990010', 'KA990010', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA990015', 'KA990015', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA670001', 'KA670001', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA670003', 'KA670003', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA670005', 'KA670005', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA670007', 'KA670007', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA670004', 'KA670004', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA680001', 'KA680001', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA680005', 'KA680005', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA680007', 'KA680007', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA680003', 'KA680003', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA680004', 'KA680004', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA690001', 'KA690001', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'BATH ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA690007', 'KA690007', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'BATH ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA690003', 'KA690003', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'BATH ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA690004', 'KA690004', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'BATH ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA690005', 'KA690005', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'BATH ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '• Pro Code -', 'SS304', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA640001', 'KA640001', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'DRAINER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA640002', 'KA640002', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'DRAINER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA640003', 'KA640003', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'DRAINER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KA640004', 'KA640004', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'DRAINER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '/22/23', 'KA640021', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'DRAINER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '/08/09', 'KA640007', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'DRAINER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '/14/15	KA640010/11/12', 'KA640013', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'DRAINER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'KA640019 	KA640020', 'KA640005', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'DRAINER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Cleaner', 'EWC', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Glaze of kerovit is  WHITE', 'MILKY', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FLUSHING TYPE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'All sanitary products are fired at  degrees celsius.', '1200', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FLUSHING TYPE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP10002W-UF', 'RIVIERA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FLUSHING TYPE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP10001W-UF', 'OPULA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FLUSHING TYPE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP10006W', 'LUXE', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FLUSHING TYPE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP10004W', 'AURORA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FLUSHING TYPE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP10007W', 'BIANCA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FLUSHING TYPE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP10003W-UF', 'ASTRID', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FLUSHING TYPE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KB054E', 'FELIPE', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '', '210', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EIHT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP10005W', 'REJUVE', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS109', 'CENTAURI', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP10118W', 'VERIDIAN', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS134', 'MONTANA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS123 *', 'STEFAN', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '', '215', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP10008W	ETERNIA - KGP10008WP', 'ETERNIA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP10136W', 'TRIVIA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP10009W-UF', 'NAVIO', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KGP10009W-PP', 'KGP10009W-PP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS118-PP *', 'TONIA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS128', 'DEW', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KS007E', 'KS007E', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'CODE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS107 	CONNOR - KS107', 'CONNOR', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'PP Soft Close Seat Cover :', 'KS49D', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KSPKP049W', 'KSPKP049W', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'CODE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'White	 (J) - KS102J', 'KRISTEN', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP10011W-PP', 'QUANTUM', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP10012W-PP	ARCUS - KGP10013W-PP', 'VISTA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS140', 'CLEO', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS101', 'CYGNUS', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KS056', 'KS056', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'CODE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'White 	 - KS103 *', 'BROOKLYN', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS106 	AXEL - KS129', 'ALEXIS', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WALL HUNG' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Cistern :', '401', 401, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WALL HUNG' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Twin Flush Fitting :', '901', 901, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WALL HUNG' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KS038', 'KS038', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'CODE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Cistern :', '406', 406, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WALL HUNG' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Twin Flush Fitting :', '907', 907, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WALL HUNG' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KSMV2400', 'KSMV2400', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'CODE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'White 	White 	 - KO139W', 'LUCAS', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WALL HUNG' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KB3026', 'VERA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KB3027', 'VITA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KB3007', 'LEELA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KB3018', 'FLUE', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KB3019', 'ELEGANT', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KO1709', 'KUPA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KO1717', 'OKENA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS722SYW-UF', 'CURVANO', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS715SY', 'LEORA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '’S - KO1712', 'ROBB', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS714', 'CONTOUR', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KO1723', 'NOVA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS1705', 'OLIVE', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS720', 'EDGE', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS728', 'RAFE', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KO1703', 'RAY', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS721', 'SERENO', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS726', 'KARTANA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS725', 'KIARA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KB6111', 'PABLO', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS112 	TARA - KS117 	ELARA - KO126', 'JAYDEN', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KS2100', 'KS2100', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'CODE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Seat Cover :', 'KS2101', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EWC' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KS2200', 'KS2200', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'CODE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KSPKP038W', 'KSPKP038W', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'CODE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS113', 'KAROI', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EWC' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Set with KS2200', 'EWCS', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EWC' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'White	 - KS110', 'OBERON', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EWC' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'S-Trap :  mm Rough-in', '190', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EWC' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS114', 'JUPITER', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EWC' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KO137W', 'CHRISTABEL', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COUPLED CLOSET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS122', 'PLUTO', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COUPLED CLOSET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KS2500', 'KS2500', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'CODE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'White 	 - KS115', 'STAR', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COUPLED CLOSET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '21” - KS601	MUSHROOM - KS606 	KALVIN-CITY PAN 20” - KS603', 'LOGAN', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SQUATTING PAN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Single Flush Tank  470 mm', 'ISI', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EXPOSED CISTERN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '(ISI) - KSP507W', 'RASSO', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'URINAL' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KSP510W', 'JACEY', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'URINAL' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Fitting', 'KS906', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'URINAL' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KSP508W', 'DORIS', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'URINAL' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KSP511W', 'COSIMA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'URINAL' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KO512W', 'ARUSA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'URINAL' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP50003W', 'EURI', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'URINAL' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP50001W-SR', 'WALTER', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'URINAL' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '’S FITTING - KSP906 	CAZZO - KSP6001W	DIVISION PLATE - KSP506W', 'KIMURA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP50002W', 'CREST', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KSPOT509W', 'VERTEX', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'URINAL' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'P-Trap Fitting For Kimura ()', '508', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'SET - FSW-007 	RAG BOLT - RBW-001	FISCHER SET - FSW-001', 'FISCHER', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KSP505W', 'PHILIP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'KSPPC-002 	KSPPC-003', 'KSPPC-001', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KAJP474', 'NUVIA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KS2111D', 'KS2111D', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'CODE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KS115D', 'KS115D', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'CODE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KS2112D', 'KS2112D', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'CODE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KS522', 'KS522', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'CODE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KS054', 'KS054', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'CODE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KS049D', 'KS049D', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'CODE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KS2300', 'KS2300', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'CODE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KS2301', 'KS2301', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'CODE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KS057', 'KS057', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'CODE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KS212', 'KS212', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'CODE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KS063', 'KS063', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'CODE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'PP Soft Close Square Seat Cover, Suitable for , 117, 110, 109, 134, 123, Size : 450X355 mm', '712', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'DESCRIPTION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'PP Soft Close Elongated Seat Cover, Suitable for , 704, 710, 711, 107, Size : 470X360 mm', '709', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'DESCRIPTION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'PP Soft Close Elongated Seat Cover, Suitable for , Size : 420X340 mm', '706', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'DESCRIPTION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.02 X 1 	Spare replacement Kit (Fasteners Cover) 	550', '701', 550, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KAJ0467', 'ABRIN', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'CONCEALED CISTERN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '& KAJ0535', 'KAJ0534', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KAJ0466 	HALO - KAJ0558', 'RYOMA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'CONCEALED CISTERN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Compatible with ,', 'KAJ0533', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KAJ0535 	LUME - KAJ0555', 'EVORA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'CONCEALED CISTERN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Also available', 'KAJ0467-FM', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'CONCEALED CISTERN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KAJ0468 	CRIMSON - KAJ0469 	MULLER - KAJ0471	LUMIERE - KAJ0470', 'AERON', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Compatible with  &', 'KAJ0466', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ', KAJ0467-FM', 'KAJ0467', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Also available', 'KAJ0468-PN', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Also available', 'KAJ0469-PN', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Also available', 'KAJ0471-PN', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Also available', 'KAJ0470-PN', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KAJ0472 	PEBBLE - KAJ0473 	HAVEN - KAJ0556', 'OGAAN', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Also available', 'KAJ0472-PN', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Compatible with', 'KAJ0555', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '&', 'KAJ0558', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KAJ0557', 'ELYON', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'KAJ0557-CG	KAJ0556-RG 	KAJ0557-RG	KAJ0556-MB 	KAJ0557-MB', 'KAJ0556-CG', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KO1005', 'ZEUS', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EXPOSED CISTERN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'SLIM FRESH - KO1004', 'CISTERN', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EXPOSED CISTERN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KO1003', 'KALONI', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EXPOSED CISTERN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KO1002', 'KAMEA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EXPOSED CISTERN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KO1001', 'KARLA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EXPOSED CISTERN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'FLUSH SLIM TANK - KO1006', 'DUAL', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EXPOSED CISTERN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS1007', 'VELLUM', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Size :  mm', '380X90X450', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP20263', 'LAXURA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'KEY HIGHLIGHTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP20003W', 'MARINA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'KEY HIGHLIGHTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP20005W	LIRAEL - KGP20004W', 'SEREN', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'KEY HIGHLIGHTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS277', 'KADIN', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP20001W', 'RHEYA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = '* 	*' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP20011W', 'AMARA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = '* 	*' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP20012W', 'SINORA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = '* 	*' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP20019W', 'ASTRA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = '* 	*' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP20013W', 'ARTIO', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = '* 	*' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS292W', 'NESTER', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = '* 	*' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS208SMGR', 'YORKSHIRE', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP20278W', 'MASON', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KSP294W', 'AQUA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS250', 'SARA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KSP280MYELLOW', 'EVERETT', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS219', 'BENTON', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP20002W', 'VINCE', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP20008W', 'MIMIR', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP21090W', 'FLORA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP21086W', 'MAZER', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP22190W', 'ALMA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS251', 'MARK', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS267', 'ELLIPS', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS296W', 'CADHLA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS246', 'MAX', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS221', 'ARC', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP20017W', 'IRIS', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KSP291MGREY', 'MYRA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP20007W', 'ELLIPSO', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS290', 'NEOR', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP20016W', 'ALPHA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP20022W', 'CURVE', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS228', 'SOLACE', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS289', 'FINN', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP20010W', 'ASHER', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS224', 'ZEST', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS249', 'VODA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS217', 'KIMBRA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS207', 'KAIA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS206', 'KNOX', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS286W', 'ANNE', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS205', 'RITZ', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'OVER COUNTER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS245', 'JAZZ', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'OVER COUNTER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS268', 'ROMANO', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'OVER COUNTER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS269', 'SLEEM', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'OVER COUNTER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS233', 'BOLT', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'OVER COUNTER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS236', 'SVELTE', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'OVER COUNTER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS215', 'CROCK', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS270', 'NOVEL', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'OVER COUNTER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS244', 'BEAM', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'OVER COUNTER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS288W', 'ZEN', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS275 *', 'BILLY', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '(ISI) - KS241', 'SIPRA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS279', 'COOPER', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS272 *', 'TRIO', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'S - KS282', 'EMILY', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS258', 'DRAKE', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP20272W', 'SYNERGY', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP20014W', 'ATELIER', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS202', 'KERRI', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS252', 'JASPER', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Cockroach Trap(SS )', '304', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EIHT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ': Half Pedestal', '313', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS256', 'DAISY', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS214', 'REX', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WITH PEDESTAL' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'White 	 - KS257 *', 'JUNO', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WITH PEDESTAL' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS283', 'CASINO', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WITH PEDESTAL' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Basins with  Pedestal Set', '301', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS203', 'CHARLOTTE', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS201', 'KENRICK', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'White	 - KGP20021W', 'ORBELLE', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ': Pedestal', 'KGP30004', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS234', 'RUBIX', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS238', 'RAPHEL', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ': Pedestal', '308', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '(ISI) - KS240', 'SELVO', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP20009W', 'PRESPA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ': Full Pedestal', 'KGP30002W', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ': Pedestal', 'KO314W', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KO285W', 'LEON', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS273', 'EAVAAN', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KS237', 'AZELIA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ': Pedestal', '306', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ': Half Pedestal', '303', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP20020W', 'ORBIX', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Suitable for Basin ,', 'KS201', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KS211', 'KS211', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ': Half Pedestal', 'KGP30001W', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- KGP30003W', 'ARTISAN', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ', KB2111016', 'KB2011016', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '45', 'PSI', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '2.0 / 4.0', 'GBD', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '3.0 / 6.0', 'GCF', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '1 	 	Sanitaryware 	Wall Hung 	Dew- Rim Free Wall Hung White', 'KS128RL', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '2 	 	Sanitaryware 	Wall Hung 	Montana- Wall Hung White', 'KS134', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '3 	 	Sanitaryware 	Wall Hung 	Orchid- Rim Free Wall Hung White', 'KS136RL', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '4 	 	Sanitaryware 	Wall Hung 	Lucas- EWC Extended Wall Hung With', 'KO139W', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '5 	 Sanitaryware 	Wall Hung 	REJUVE -WALL HUNG', 'KGP10005W-UF', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '6 	 Sanitaryware 	Wall Hung 	ASTRID -WALL HUNG', 'KGP10003W-UF', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '7 	 Sanitaryware 	Wall Hung 	NAVIO -WALL HUNG', 'KGP10009W-UF', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '8 	 	Sanitaryware 	Wall Hung 	Tonia-Rimless Wall Hung White', 'KS118-PP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '9 	 	Sanitaryware 	EWC 	Jayden- EWC Open S Trap', 'KS112W', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '10 	 	Sanitaryware 	EWC 	Christabel- Floor Mounted White', 'KO137', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '11 	 	Sanitaryware 	Urinal 	Doris- White Sensor Urinal With Fitting', 'KS508', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '12 	 Sanitaryware 	Urinal 	Walter- Urinal with Sensor', 'KGP50001W-SR', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '13 	 	Sanitaryware 	Urinal 	Kimura- Sleek Design Back Inlet', 'KS501', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '14 	 	Sanitaryware 	Urinal 	Rasso (ISI)- Large ISI White Urinal', 'KS507', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Sr. No. Categories Existing ''s', 'SKU', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '1 	 	Pillar Tap', 'KB111001-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '2 	 	Tall Pillar Tap', 'KB111002-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '3 	 	Bib Tap', 'KB111004-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '4 	 	Two Way Bib Tap', 'KB111005-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '5 	-CP 	Single Lever Basin Mixer', 'KB111010-ND', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '6 	-CP 	Single Lever Tall Basin Mixer', 'KB111011-ND', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '7 	 	Bath Tub Spout', 'KB111016-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '8 	 	Bath Tub Spout With Diverter', 'KB111017-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '9 	 	Wall Mixer 3 In 1', 'KB111018-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '10 	 	Wall Mixer 2 In 1', 'KB111019-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '11 	 	Concealed Wall Mounted Basin Mixer - Single Lever', 'KB111023-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '12 	 	Deck Mounted Center Hole Basin', 'KB111027-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '13 	 	Long Body Bib Tap', 'KB111033-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '14 	 	Concealed Wall Mounted Basin Tap - Cold Only', 'KB111042-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 	 	Pillar Tap', 'KB411001-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '16 	 	Tall Pillar Tap', 'KB411002-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '17 	 	Bib Tap', 'KB411004-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '18 	 	Two Way Bib Tap', 'KB411005-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '19 	-CP 	Single Lever Basin Mixer', 'KB411010-ND', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '20 	-CP 	Single Lever Tall Basin Mixer', 'KB411011-ND', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '21 	 	Bath Tub Spout', 'KB611016-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '22 	 	Bath Tub Spout With Diverter', 'KB611017-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '23 	 	Wall Mixer 3 In 1', 'KB411018-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '24 	 	Wall Mixer 2 In 1', 'KB411019-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '25 	 	Concealed Wall Mounted Basin Mixer - Single Lever', 'KB411023-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '26 	 	Deck Mounted Center Hole Basin', 'KB411027-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '27 	 	Wall Mounted Exposed Bath & Shower Mixer With Hand', 'KB411044-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '28 	 	Pillar Tap', 'KB1211001-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '29 	 	Bib Tap', 'KB1211004-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '30 	 	Two Way Bib Tap', 'KB1211005-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '31 	-CP 	Single Lever Basin Mixer', 'KB1211010-ND', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 	 	Bath Tub Spout', 'KB2111016-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '33 	 	Wall Mixer 3 In 1', 'KB1211018-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '34 	 	Wall Mixer 2 In 1', 'KB1211019-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '35 	 	Deck Mounted Swan Neck Tap', 'KB1211029-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '36 	 	Long Body Bib Tap', 'KB1211033-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '37 	 	Pillar Tap', 'KB1311001-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '38 	 	Bib Tap', 'KB1311004-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '39 	 	Two Way Bib Tap', 'KB1311005-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '40 	-CP 	Single Lever Single Lever Basin Mixer', 'KB1311010-ND', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '41 	 	Bath Tub Spout', 'KB1311016-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '42 	 	Bath Tub Spout With Diverter', 'KB1311017-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '43 	 	Wall Mixer 3 In 1', 'KB1311018-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '44 	 	Wall Mixer 2 In 1', 'KB1311019-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '45 	 	Single Lever Concealed Wall Mounted Basin', 'KB1311023-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '46 	 	Long Body Bib Tap', 'KB1311033-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '47 	 	Concealed Wall Mounted Basin Tap - Cold Only', 'KB1311042-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '48 	 	Pillar Tap', 'KB911001-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '49 	 	Tall Pillar Tap', 'KB911002-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '50 	 	Bib Tap', 'KB911004-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '51 	 	Two Way Bib Tap', 'KB911005-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '54 	 	Bath Tub Spout', 'KB911016-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '55 	 	Bath Tub Spout With Diverter', 'KB911017-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '56 	 	Single Lever Wall Mounted Basin Mixer', 'KB911023-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '59 	 	Self Closing Pillar Tap', 'KA860001-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '60 	 	Self Closing Bib Tap', 'KA860002-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
