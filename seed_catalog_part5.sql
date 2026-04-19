-- Catalog Seed Part 5 - 2026-04-10T20:40:01.602Z

-- 2. INSERT PRODUCTS (PART 5)
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'M 24 X 1 	Plastic (Food Grade) 	Grey 	15 	540 	45', '10740', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'M 21 	Plastic (Food Grade) 	Grey 	25 	500 	95', '10740-M21', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'F 22 X 1 	Brass 	Polished CP 	40 	800 	74', '10738', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.51 X 1 	Aerator & Washer only 	-', '10743', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.51 X 1 	Aerator & Washer Only 	-', '10743-6', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Brass 	Polished CP 	30 	360 	2380', '10750', 2380, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Brass 	Polished CP 	1 	60 	820', '10868', 820, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Brass 	Polished CP 	1 	24 	820', '10870', 820, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Brass 	Polished CP 	2 	60 	545', '10880', 545, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Brass 	Polished CP 	30 	600 	1130', '10742', 1130, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'FG  	15 (1/2”) 	Brass 	French Gold 	1 	21 	2450', '10885', 2450, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'FG  WF 	15 (1/2”) 	Outer 	Brass 	French Gold 	1 	150 	1780', '10921', 1780, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Pro 	15 (1/2”) Outer 	Brass 	Polished CP 	1 	150 415', '10925', 415, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'BL  WF 	15 (1/2”) 	Brass 	Matt Black 	1 	150 	1350', '10930', 1350, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	150 	480', '10931', 480, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	20 (3/4”) 	Outer 	Brass 	Polished CP 	2 60 830', '10944', 830, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Brass 	Polished CP 	1 	32 	860', '11001', 860, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'N 	15 (1/2”) 	Brass 	Shot Blasted Nickel 	2 	60 	550', '10980', 550, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Brass 	Shot Blasted Nickel 	2 	60 	615', '10981', 615, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '20 (3/4”) 	Brass 	Shot Blasted Nickel 	1 	54 	645', '10982', 645, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.04 X 20 	Ball Rubber Washer (Pack of 20) 	240', '11084', 240, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Brass 	Polished CP 	1 	48 	710', '11090', 710, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '20 (3/4”) 	15 (1/2”) 	Brass 	Brass 	1 	50 	555', '11105', 555, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '20 (3/4”) 	15 (1/2”) 	Brass 	CP 	1 	50 	580', '11106', 580, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Brass 	Polished CP 	1 	88 	735', '11005', 735, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Brass 	Polished CP 	- 	- 	515', '11010', 515, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Washer (Pack of 50) 	105', '11019', 105, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	12 	2250', '11615', 2250, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	13 	3095', '11616', 3095, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	56 	3970', '11617', 3970, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '-, 11651', '11650', 11651, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	15 (1/2”) 	Inner 	Brass 	Polished CP 	1 	48 	1050', '11651', 1050, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '6.35 (1/4”) 	Outer 	Brass 	Polished CP 	1 	30 	2350', '11750', 2350, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	12 	2395', '37708', 2395, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'and Viking  11794 11803 11805 & 6201 6203”', '11790', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	-', '11794', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	-', '11803', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	54 	1330', '11812', 1330, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	240 	785', '11834', 785, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '(,85,6232,6233) 80', '11851', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	60 	645', '11871', 645, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '20 (3/4”) 	Inner 	Brass 	Polished CP 	30 600 650', '11872', 650, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Replacement Kit for Push & Urinal Valve', '11855', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	-', '11805', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Brass 	Polished CP 	650', '11811', 650, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'For Jaquar Model -031, 031 L65, 037, 043, 001, 077', 'PRS-CHR', 77, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Brass 	Polished CP 	1 	30 	1950', '34510', 1950, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'M 24 X 1 	Outer 	Brass 	Polished CP 	30 	600 	130', '12105', 130, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'F 22 X 1 	Inner 	Brass 	Polished CP 	- 	- 	130', '12106', 130, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	Brass 	CP 	30 	600 	105', '12205', 105, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	M 24 X 1 	Outer 	Brass 	Polished CP 	2 	60 	120', '12207', 120, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '19 	22.5 	ABS 	Grey 	30 	600 	135', '12206', 135, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '10 Mtr 	12 	0.1 	PTFE 	Yellow 	100 	1000 	30', '12512', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '10 Mtr 	19 	0.1 	PTFE 	Yellow 	10 	500 	54', '12534', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '5 Mtr 	12 	0.1 	PTFE 	Silver 	100 	1000 	21', '12506', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'बचातौा हैंै ।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '10 Mtr 	12 	0.1 	PTFE 	Silver 	100 	1000 	30', '12507', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'बचातौा हैंै ।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '2 	White 	25 	450 	50', '12572', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HOW TO USE IT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '3 	White 	12 	216 	68', '12573', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HOW TO USE IT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '4 	White 	12 	216 	80', '12574', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HOW TO USE IT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '5 	White 	1 	85 	88', '12575', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HOW TO USE IT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '8 	White 	1 	18 	178', '12578', 178, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HOW TO USE IT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Mild Steel 	Zinc Plated - Silver 	300 	2400 	500', '12635', 500, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HOW TO USE IT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'PPCP 	Red 	100 	1900 	10', '12640', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HOW TO USE IT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '2 	PPCP 	Translucent 	100 	1900 	7', '12642', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HOW TO USE IT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '3 	PPCP 	Translucent 	100 	1900 	7', '12643', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HOW TO USE IT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '4 	PPCP 	Translucent 	100 	1400 	8', '12644', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HOW TO USE IT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	67 	Brass 	Polished CP 	70 	980 	96', '12705', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'BRASS CP FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	55 	Brass 	Polished CP 	30 600 	96', '12708', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'BRASS CP FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	70 (2-3/4”) 	Brass 	Polished CP 30 	600 105', '12712', 105, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'BRASS CP FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	60 (2-1/4”) 	Brass 	Polished CP 100 800 	120', '12730', 120, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'BRASS CP FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	55 	SS 304 	Polished 	150 900 	25', '12888', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	70 (2-3/4”) 	SS 304 	Polished 	12 	240 	32', '12902', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 70 (2-3/4”) 25 (1”) SS 304 Polished CP 12 240 85', '12905', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '20 (3/4”) 70 (2-3/4”) 25 (1”) SS 304 Polished CP 150 900 90', '12906', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	65 (2-1/2”) 	SS 304 	Polished 	100 	1400 	30', '12912', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	68 	SS 304 	Polished 	150 	900 	28', '12914', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'G  	15 (1/2”) 	60 (2-1/4”) 	60 (2-1/4”) 	SS 304 Gold PVD 	150 	900 	250', '12917', 250, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	100 (4”) 	SS 201 	Polished 	5 	150 	50', '12925', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '40 (1-1/2”) 	100 (4”) 	SS 201 	Polished 	150 	900 	65', '12928', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	73 	SS 201 	Polished 	150 	900 	26', '12930', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '25 (1”) 	73 	SS 201 	Polished 	25 	500 	42', '12932', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	70 (2-3/4”) 	SS 201 	Polished 	150 	900 	20', '12918', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'FG  	15 (1/2”) 	70 (2-3/4”) 	SS 304 	French Gold 	6 	72 	275', '12920', 275, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '20 (3/4”) 	70 (2-3/4”) 	SS 304 	Polished 	5 	150 	40', '12921', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) Outer 57 (2-1/4”) 	Brass 	CP 	30 	360 	150', '13721', 150, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '20 (3/4”) Outer 15 (1/2”) Inner 25 (1”) 	Brass 	CP 	60 540 100', '13742', 100, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '20 (3/4”) Outer 15 (1/2”) Inner 50 (2”) 	Brass 	CP 	20 400 180', '13744', 180, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '20 (3/4”) Outer 15 (1/2”) Inner 75 (3”) 	Brass 	CP 	1 	50 285', '13745', 285, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	Outer 	100 (4”) 	Brass 	CP 	4 	64 	780', '13775', 780, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	Outer 	150 (6”) 	Brass 	CP 	1 	7 	950', '13785', 950, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '20 (3/4”) 	Outer 	20 (3/4”) 	Outer 	Polypropylene (PP) 	Raw 	1 	6 	940', '14015', 940, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '25 (1”) 	Outer 	25 (1”) 	Outer 	Polypropylene (PP) 	Raw 	1 	4 	950', '14016', 950, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	Outer 	32 (1-1/4”) 	Outer 	Polypropylene (PP) 	Raw 	1 	4 	1990', '14017', 1990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '40 (1-1/2”) 	Outer 	40 (1-1/2”) 	Outer 	Polypropylene (PP) 	Raw 	- 	- 	2200', '14018', 2200, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '50 (2”) 	Outer 	50 (2”) 	Outer 	Polypropylene (PP) 	Raw 	2 	60 	2690', '14019', 2690, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '25 (1”) 	Inner 	Brass 	CP 	1 	26 	1190', '14026', 1190, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	Inner 	Brass 	CP 	1 	26 	2050', '14027', 2050, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '40 (1-1/2”) 	Inner 	Brass 	CP 	1 	12 	2390', '14028', 2390, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '50 (2”) 	Inner 	Brass 	CP 	2 	80 	4370', '14029', 4370, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.12 X 15 	Rubber Washer (Pack of 15) 	-', '14101', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.07 X 10 	Rubber Washer (Pack of 10) 	-', '14102', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Suitable for 1” ()', '14103', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	Outer 	300 (12”) 	Brass 	Brass 	1 	26 	2590', '14104', 2590, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '40 (1-1/2”) 	Outer 	375 (15”) 	Brass 	Brass 	1 	10 	2790', '14105', 2790, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '50 (2”) 	Outer 	450 (18”) 	Brass 	Brass 	1 	10 	5580', '14106', 5580, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '100 (4”) 	PVC 	White 	1 	75 	85', '14209', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '125 (5”) 	PVC 	White 	1 	12 	125', '14219', 125, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '225 (9”) 	PVC 	White 	1 	430', '14229', 430, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '200 (8”) 	Copper 	Copper 	1 	1 	2860', '14242', 2860, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '250 (10”) 	Copper 	Copper 	1 	48 	4320', '14243', 4320, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '150 (6”) 	100 (4”) 	80 	PVC 	White 	1 	125 	125', '14201', 125, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	Brass 	Brass 	1 	50 	380', '18424', 380, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '20 (3/4”) 	Inner 	Brass 	Brass 	1 	36 	815', '18425', 815, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '25 (1”) 	Inner 	Brass 	Brass 	1 	36 	860', '18426', 860, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	Inner 	Brass 	Brass 	1 	18 	1330', '18427', 1330, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '40 (1-1/2”) 	Inner 	Brass 	Brass 	1 	12 	1950', '18428', 1950, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '50 (2”) 	Inner 	Brass 	Brass 	2 	100 	2990', '18429', 2990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	Brass 	Brass 	1 	22 	800', '15101', 800, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '20 (3/4”) 	Inner 	Brass 	Brass 	1 	30 	1025', '15102', 1025, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '25 (1”) 	Inner 	Brass 	Brass 	2 	16 	1460', '15103', 1460, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	Inner 	Brass 	Brass 	2 	16 	2560', '15104', 2560, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '40 (1-1/2”) 	Inner 	Brass 	Brass 	1 	8 	3750', '15105', 3750, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '50 (2”) 	Inner 	Brass 	Brass 	1 	1 	5995', '15106', 5995, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '65 (2-1/2”) 	Inner 	Brass 	Brass 	1 	1 	19630', '15107', 19630, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '100 (4”) 	Inner 	Brass 	Brass 	1 	60 	12990	Ball Valve Full way', '15112', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	Brass 	Nickel Plated 	1 	60 	505', '15120', 505, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- B 	20 (3/4”) 	Inner 	Brass 	Brass 	1 	48 	710', '15121', 710, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '25 (1”) 	Inner 	Brass 	Nickel Plated 	1 	30 	1040', '15122', 1040, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	Inner 	Brass 	Nickel Plated 	1 	18 	1840', '15123', 1840, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '40 (1-1/2”) 	Inner 	Brass 	Nickel Plated 	2 	20 	2420', '15124', 2420, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '50 (2”) 	Inner 	Brass 	Nickel Plated 	1 	3390', '15125', 3390, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	Brass 	Brass 	1 	56 	665', '18310', 665, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '20 (3/4”) 	Inner 	Brass 	Brass 	2 	32 	1045', '18312', 1045, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '25 (1”) 	Inner 	Brass 	Brass 	1 	12 	1270', '18314', 1270, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	Inner 	Brass 	Brass 	1 	12 	1890', '18316', 1890, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '40 (1-1/2”) 	Inner 	Brass 	Brass 	1 	10 	2710', '18318', 2710, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '50 (2”) 	Inner 	Brass 	Brass 	2 	100 	4360', '18320', 4360, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	Brass 	Brass Shot Blasted 	1 	50 	590', '18510', 590, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '20 (3/4”) 	Inner 	Brass 	Brass Shot Blasted 	1 	50 	960', '18512', 960, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '25 (1”) 	Inner 	Brass 	Brass Shot Blasted 	1 	36 	1140', '18514', 1140, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	Inner 	Brass 	Brass Shot Blasted 	1 	24 	1730', '18516', 1730, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '40 (1-1/2”) 	Inner 	Brass 	Brass Shot Blasted 	1 	12 	2490', '18518', 2490, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '50 (2”) 	Inner 	Brass 	Brass Shot Blasted 	4 	144 4090', '18520', 4090, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	SS 201 	Steel 	1 	144 	75', '18580', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '20 (3/4”) 	Outer 	SS 201 	Steel 	2 	100 	85', '18582', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '25 (1”) 	Outer 	SS 201 	Steel 	1 	154 	130', '18584', 130, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	Outer 	SS 201 	Steel 	1 	80 	160', '18586', 160, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '40 (1-1/2”) 	Outer 	SS 201 	Steel 	1 	75 	220', '18588', 220, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '50 (2”) 	Outer 	SS 201 	Steel 	1 	60 	270', '18590', 270, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	2 	24 	510', '18703', 510, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '10 (3/8”) Inner 10 (3/8”) Outer 	100 (4”) 	Brass 	Polished CP 	15 150 	290', '22006', 290, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '10 (3/8”) Inner 10 (3/8”) Outer 	150 (6”) 	Brass 	Polished CP 	35 700 	480', '22007', 480, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'A 	15 (1/2”) Inner 15 (1/2”) Outer 	25 (1”) 	Brass 	Polished CP 	30 	600 	100', '22011', 100, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'FG  A 15 (1/2”) Inner 15 (1/2”) Outer 40 (1-1/2”) 	Brass 	French Gold 	25 	500 	350', '22012', 350, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'BL  15 (1/2”) Inner 15 (1/2”) Outer 40 (1-1/2”) 	Brass 	Matt Black 	4 	84 	290', '22012A', 290, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'A 	15 (1/2”) Inner 15 (1/2”) Outer 	50 (2”) 	Brass 	Polished CP 	25 	500 	180', '22013', 180, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'BL  A 15 (1/2”) Inner 15 (1/2”) Outer 65 (2-1/2”) 	Brass 	Matt Black 	5 	160 	270', '22014', 270, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product 22015', '22015', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'L 	15 (1/2”) Inner 15 (1/2”) Outer 	100 (4”) 	Brass 	Polished CP 	2 	90 	365', '22016', 365, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) Inner 15 (1/2”) Outer 	150 (6”) 	Brass 	Polished CP 	2 	96 	595', '22018', 595, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) Inner 15 (1/2”) Outer 	225 (9”) 	Brass 	Polished CP 	2 	96 	1050', '22021', 1050, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '20 (3/4”) Inner 20 (3/4”) Outer 	25 (1”) 	Brass 	Polished CP 	15 	150 	185', '22110', 185, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '20 (3/4”) Inner 20 (3/4”) Outer 65 (2-1/2”) 	Brass 	Polished CP 	15 	540 	325', '22114', 325, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product 22015L', '22015L', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '1.', '48IN', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '0.', '98IN', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '2.', '0IN', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Dark Grey 	4L/Min 	130', '22180', 130, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) Inner 15 (1/2”) Outer 40 (1-1/2”) 	Brass 	Polished CP 5 270 220', '22185', 220, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Extension Nipple with', 'NRV', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Black 	6L/Min 	15 	540 	125', '22183', 125, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Olive 	2L/Min 	15 	540 	125', '22183-2', 125, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Brown 	3L/Min 	15 	540 	125', '22183-3', 125, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Black Grey 	4L/Min 	15 	540 	125', '22183-4', 125, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Orange 	9L/Min 	30 	600 	125', '22183-9', 125, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) Outer 15 (1/2”) Outer 	50 (2”) 	Brass 	Polished CP 	4 	180 190', '22302', 190, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) Outer 15 (1/2”) Outer 	75 (3”) 	Brass 	Polished CP 	4 	224 310', '22303', 310, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) Outer 15 (1/2”) Outer 	100 (4”) 	Brass 	Polished CP 	2 	90 	380', '22304', 380, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) Outer 15 (1/2”) Outer 	150 (6”) 	Brass 	Polished CP 	2 	96 	630', '22306', 630, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) Outer 15 (1/2”) Outer 	225 (9”) 	Brass 	Polished CP 	2 	96 	850', '22309', 850, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) Outer 15 (1/2”) Outer 	300 (12”) 	Brass 	Polished CP 10 160 1225', '22312', 1225, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'RG  15 (1/2”) 	Inner 	15 (1/2”) 	Inner 	Brass 	Rose Gold 	8 	128 	750', '23105', 750, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '20 (3/4”) 	Inner 	20 (3/4”) 	Inner 	Brass 	Polished CP 	35 	315 	495', '23106', 495, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '25 (1”) 	Inner 	25 (1”) 	Inner 	Brass 	Polished CP 	1 	36 	725	Elbow', '23114', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	15 (1/2”) Outer 	Brass 	Polished CP 	10 	80 	260', '23231', 260, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '20 (3/4”) 	Inner 	15 (1/2”) Outer 	Brass 	Polished CP 	15 	300 	520', '23232', 520, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	10 	160 	375', '23242', 375, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	15 (1/2”) 	Inner 	Brass 	Polished CP 	6 	84 	385', '23802', 385, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	Outer 	Brass 	Polished CP 	30 	600 	415', '23812', 415, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	Brass 	Polished CP 	20 	400 	185', '23902', 185, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '20 (3/4”) 	Inner 	Brass 	Polished CP 	20 	400 	260', '23903', 260, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '20 (3/4”) 	15 (1/2”) 	Inner 	Brass 	Polished CP 	35 	700 	235', '23905', 235, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'FG  15 (1/2”) Outer 15 (1/2”) Outer 	35 	Brass French', '24102', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '20 (3/4”) Outer 20 (3/4”) Outer 	38 	Brass 	CP 	50 500 210', '24103', 210, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '10 (3/8”) Outer 15 (1/2”) Outer 	20 (3/4”) 	Brass 	CP 	40 400 	85', '24104', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '20 (3/4”) Outer 15 (1/2”) Outer 40 (1-1/2”) 	Brass 	CP 	12 240 200', '24105', 200, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '10 (3/8”) Outer 10 (3/8”) Outer 	25 (1”) 	Brass 	CP 	12 240 100', '24106', 100, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '25 (1”) 	Outer 	25 (1”) 	Outer 	38 	Brass 	CP 	30 	370', '24108', 370, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) Outer 15 (1/2”) Outer 	50 (2”) 	Brass 	CP 	20 	400 	190', '24132', 190, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '20 (3/4”) Outer 15 (1/2”) Outer 	53 	Brass 	CP 	15 	180 	190', '24134', 190, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) Outer 10 (3/8”) 	Inner 	25 (1”) 	Brass 	CP 	20 	400 	130', '24205', 130, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '20 (3/4”) Outer 15 (1/2”) 	Inner 	25 (1”) 	Brass 	CP 	20 	400 	170', '24207', 170, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '25 (1”) 	Outer 20 (3/4”) 	Inner 	25 (1”) 	Brass 	CP 	20 	400 	210', '24208', 210, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '25 (1”) 	Outer 15 (1/2”) 	Inner 	25 (1”) 	Brass 	CP 	1 	36 	360', '24209', 360, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '20 (3/4”) Outer 15 (1/2”) 	Inner 	40 (1-1/2”) 	Brass 	CP 	30 	360 	280	Bush', '24211', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'RG  	15 (1/2”) 	Outer 	Brass 	Rose Gold 	30 	600 	330', '24402', 330, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '20 (3/4”) 	Outer 	Brass 	Polished CP 	20 	400 	290', '24403', 290, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	Brass 	Polished CP 	40 	400 	78', '24502', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '20 (3/4”) 	Inner 	Brass 	Polished CP 	25 	500 	195', '24503', 195, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	13 	Brass 	CP 	20 	400 	150', '24902', 150, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '20 (3/4”) 	20 (3/4”) 	Brass 	CP 	30 	600 	250', '24903', 250, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	13 	Brass 	CP 	30 	600 	150', '24922', 150, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	10 (3/8”) Outer 	Brass 	CP 	20 	400 	125', '24955', 125, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '20 (3/4”) 	Inner 	15 (1/2”) Outer 	Brass 	CP 	10 	160 	230', '24957', 230, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Brass 	20 	400 	150', '25905', 150, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '20 (3/4”) 	Outer 	Brass 	Brass 	12 	240 	250', '25906', 250, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '25 (1”) 	Outer 	Brass 	Brass 	20 	400 	425', '25907', 425, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '20 (3/4”) 	Inner 	15 (1/2”) Outer 	Brass 	Brass 	1 	1 	285', '28007', 285, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ' E BACK 	RIHT IE A 	LET IE A 	OSE D AIN OE', 'ENT', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HOOSE OOU	HOOSE OOU' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'INK WITH D AIN BOA 	DIE ENT BOW IE ITCHEN INK', 'ITCHEN', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'DOUE BOW ITCHEN INK' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '460 (18”) 	405 (16”) 	230 (9”) 	16” x 14” x 9” 	33000 (33L) 	SS 304 	Brushed 	1 	1 	9600', '28810', 9600, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '535 (21”) 	460 (18”) 	230 (9”) 	19” x 16” x 9” 45000 (45L) 	SS 304 	Brushed 	1 	1 	9980', '28815', 9980, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '610 (24”) 	460 (18”) 	230 (9”) 	22” x 16” x 9” 52000 (52L) 	SS 304 	Brushed 	1 	1 	10160', '28820', 10160, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '', '460', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '', '408', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '', '353', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '', '483', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '', '558', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '765 (30”) 	460 (18”) 	230 (9”) 	28” x 16” x 9” 66000 (66L) 	SS 304 	Brushed 	1 	1 	12760', '28825', 12760, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '1150 (45”) 	510 (20”) 	230 (9”) 	21” x 18” x 9” 	112000 (56L x 2) 	SS 304 	Brushed 	1 	1 	18260', '28880', 18260, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '460 (18”) 	405 (16”) 	230 (9”) 	16” x 14” x 9” 	33000 (33L) 	SS 304 	Brushed 	1 	1 	9950', '28910', 9950, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '535 (21”) 	460 (18”) 	230 (9”) 	19” x 16” x 9” 	45000 (45L) 	SS 304 	Brushed 	1 	1 	10890', '28915', 10890, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '940 (37”) 	460 (18”) 	230 (9”) 	17” x 16.5” x 9” 	82000 (41L x 2) 	SS 304 	Brushed 	1 	1 	16690', '28875', 16690, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '', '940', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '', '510', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '', '1150', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '', '458', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '610 (24”) 	460 (18”) 	230 (9”) 	22” x 16” x 9” 	52000 (52L) 	SS 304 	Brushed 	1 	1 	11550', '28920', 11550, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '765 (30”) 	460 (18”) 	230 (9”) 	28” x 16” x 9” 	66000 (66L) 	SS 304 	Brushed 	1 	1 	13190', '28925', 13190, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '940 (37”) 	460 (18”) 	230 (9”) 	17” x 16.5” x 9” 	17” x 16.5” x 9” 	82000 (41L x 2) 	SS 304 	Brushed', '29020', 21480, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '1150 (45”) 	510 (20”) 	230 (9”) 	21” x 18” x 9” 	21” x 18” x 9” 	112000 (56L x 2) 	SS 304 	Brushed 	', '29027', 22990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '', '560', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '', '765', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '', '432', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ' 	419', '419', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '', '457', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ' 	533', '533', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '940 (37”) 	460 (18”) 	230 (9”) 	17” x 16” x 9” 	40000 (40L) 	Left or Right 	SS 304 	Brushed 	1 	1 	2', '29070', 20950, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '940 (37”) 	460 (18”) 	200 (8”) 	16” x 14” x 8” 	29000 (29L) 	Left or Right 	SS 304 	Brushed 	8490', '29072', 8490, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '6C 	17” 	380 (15”) 	125 (5”) 	14” X 10” x 5” 	11.5 L 	SS 304 	Brushed 	5630', 'C9300', 5630, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	125 (5”) 	150 (6”) 	ABS 	Matt Black 	Black 	1 	10 	1980', 'C4400-V2', 1980, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	SS 304 	Brushed 	1 	4 	7450', '29242', 7450, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'SS 304 	Brushed 	1 	4 	8190', '29280', 8190, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'SS 304 	Brushed 	1 	4 	15590', '29290', 15590, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'SS 304 	Brushed 	1 	4 	6990', '29318', 6990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '37728 29390 2 	72 	380', '29320', 380, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	SS 304 	Brushed 	1 	36 	9980', '29390', 9980, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'M 24 X 1 	Brass & ABS 	Polished CP 	10 	360 	555', '29495', 555, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'M 18 X 1 	Inner 	M 22 	Outer 	Brass 	CP 	10 	360 	90', '29496', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'M 20 	Inner 	M 22 	Outer 	Brass 	CP 	1 	1 	90', '29498', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'BL  	15 (1/2”) 	Inner 	SS 304 	Matt Black 	1 	20 	3650', '37728', 3650, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '450 (18”) 400 (16”) 200 (8”) 16” x 14” x 8” 29000 (29L) SS 304 Glossy 1 	1 5480', '30810', 5480, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '600 (24”) 450 (18”) 200 (8”) 22” x 16” x 8” 45000 (45L) SS 304 Glossy 1 18 7580', '30820', 7580, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	8 	1290', '37607', 1290, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	6 	3430', '37611', 3430, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	12 	2990', '37614', 2990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	9 	1870', '37616', 1870, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	12 	3240', '37636', 3240, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	48 	1480', '37638', 1480, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	48 	2295', '37640', 2295, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	32 	860', '37644', 860, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	48 	1495', '37647', 1495, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	12 	1240', '37650', 1240, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	48 	1130', '37642', 1130, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	4730', '37660', 4730, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	30 	535', '37694', 535, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	15 (1/2”) 	Inner 	Brass 	Polished CP 	1 	30 	1370', '37685', 1370, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '20 (3/4”) 	Inner 	20 (3/4”) 	Inner 	Brass 	Polished CP 	1620', '37686', 1620, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	30 	1335', '37696', 1335, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	60 	-', '37690', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	5785', '37736', 5785, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	48 	2490', '37738', 2490, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1830', '37742', 1830, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	2745', '37747', 2745, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1940', '37750', 1940, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	7890', '37760', 7890, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	12 	1470', '37794', 1470, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	6 	1550', '37807', 1550, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'ES 	15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	30 	2990', '37816', 2990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	2650', '37822', 2650, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'N 	15 (1/2”) 	Brass 	Polished CP 	1 	12 	4495', '37836', 4495, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	2890', '37823', 2890, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	12 	2095', '37838', 2095, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'ES 	15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	30 	2250', '37839', 2250, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	30 	2570', '37840', 2570, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	48 	2390', '37841', 2390, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'RG  	15 (1/2”) 	Outer 	Brass 	Rose Gold 	1 	48 	2680', '37842', 2680, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	30 	1170', '37844', 1170, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	30 	1660', '37847', 1660, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	30 	1420', '37850', 1420, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	4 	1420', '37852', 1420, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	4 	5750', '37860', 5750, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '20 (3/4”) 	Inner 	Brass 	Polished CP 	1 	30 	1780', '37886', 1780, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	48 	1100', '37890', 1100, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'BL  	15 (1/2”) 	Outer 	Brass 	Matt Black 	1 	30 	1295', '37894', 1295, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	4 	120 	2040', '37896', 2040, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '120(4-3/4”) 	100 (4”) 	SS 304 	Polished 	2 	40 	195', '38060', 195, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '120(4-3/4”) 	147 	58 	SS 201 Polished CP 	1 	16 	465', '38080', 465, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '260 	125 (5”) 	SS 201 	Polished CP 	1 	40 	920', '38082', 920, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '125 (5”) 100 (4”) 25 (1”) 	SS 201 	Polished 	1 	40 	380', '38088', 380, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '185 	100 (4”) 	25 (1”) 	SS 201 	Polished 	4 	120 535', '38089', 535, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '120(4-3/4”) 	82 	SS 304 	Polished 	1 	7 	195', '38090', 195, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'BL  	300 (12”) 	145 	45 	SS 304 	Matt Black 	1 	8 	2380', '38200', 2380, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'RG  225 (9”) 225 (9”) 70 (2-3/4”) SS 304 	Rose Gold 	White 	1 	12 	3450', '38222', 3450, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '210 	210 	45 	SS 304 	Polished 	1 	26 1680', '38225', 1680, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'S 	SS 304 	Brushed 	1 	30 	820', '38510', 820, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '180 	95 	75 (3”) 	SS 201 	Polished 	15 	90 	280', '38880', 280, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'B  275 (11”) 125 (5”) 70 (2-3/4”) SS 304 Polished CP 	Black 	1 	12 1650', '38205', 1650, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '39240 	125 (5”) 	SS 304 	Brushed 	10 	180 	220', '39238', 220, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '2 	 	133', '39240', 133, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '39241 H 	100 (4”) 	100 (4”) 	SS 304 	Brushed 	35 	210 	175', '39241', 175, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '4 	 	133', '39245', 133, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '39251 	150 (6”) 	150 (6”) 	SS 304 	Brushed 	1 	60 	330', '39250', 330, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '6 	 	133', '39251', 133, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '39336 	125 (5”) 	SS 304 	Brushed 	10 	180 	220', '39335', 220, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '8 	 	133', '39336', 133, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'CT 	100 (4”) 	100 (4”) 	SS 304 	Brushed 	1 	60 	355', '39337', 355, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EIHT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '10 	 	133', '39338', 133, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '39341 	125 (5”) 	125 (5”) 	SS 304 	Brushed 	10 	180 	240', '39340', 240, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '12 	 	133', '39341', 133, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '39351 	150 (6”) 	150 (6”) 	SS 304 	Brushed 	5 	55 	330', '39350', 330, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '14 	 	133', '39351', 133, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '39216 	125 (5”) 	SS 304 	Brushed 	10 	180 	220', '39215', 220, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '16 	 	134', '39216', 134, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '39221 	125 (5”) 	125 (5”) 	SS 304 	Brushed 	10 	180 	240', '39220', 240, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '18 	 	134', '39221', 134, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '125 (5”) 	125 (5”) 	SS 316 	Brushed 	15 	90 	565', '39400', 565, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'CT 	125 (5”) 125 (5”) 	SS 316 Brushed 	1 	60 	805', '39405', 805, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'CT 	150 (6”) 150 (6”) 	SS 316 Brushed 	No 	1 	60 1040', '39420', 1040, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '78 	276 	125 (5”) 	SS 304 	Brushed 	15 	150 	5490', '39530', 5490, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'IN SS 316', 'DRAIN', 316, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '125 (5”) 	SS 304 	Polished 	1 	42 	240', '39570', 240, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Polypropylene (PP) 	Grey 	1 	42 	190', '39575', 190, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '125mm Sq n Rd Drains 	SS 201 	Polished 	1 	42 	130', '40925', 130, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'F 	40906 F 	125 (5”) 	SS 430 	Polished 	10 	180 	130', '40905', 130, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '39585 	125 (5”) 	125 (5”) 	SS 304 	Brushed 	15 	90 	295', '39584', 295, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '316 	125 (5”) 	125 (5”) 	SS 316 	Brushed 	15 	90 	500', '39586', 500, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '125 (5”) 	125 (5”) 	SS 304 	Brushed 	15 	90 	295', '39591', 295, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'S-CT 39595 S-CT 125 (5”) 	125 (5”) 	SS 304 	Brushed 	1 	60 	635', '39594', 635, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Brushed 1 	20', '1790', 1790, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '44792 	900 (36”) 	100 (4”) 	SS 304 	Rose Gold Brushed 	Side Outlet 	1 	10 	12990', 'BRG', 12990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '44791 	600 (24”) 	100 (4”) 	SS 304 	French Gold Brushed 	Centre Outlet 	1 	10 	9000', 'BFG', 9000, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'D 	125 (5”) 125 (5”) SS 304 	Brushed 	15 	90 	325', '39595', 325, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '150 (6”) 150 (6”) 	SS 304 	Brushed 	1 	60 	660', '39607', 660, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'BG  	BG 39605 150 (6”) 150 (6”) 	SS 304 Gold PVD', '39604', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Brushed 1 	20', '2390', 2390, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Brushed 1 	20', '2650', 2650, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'BG  	- 	150 (6”) 150 (6”) SS 304 	Gold PVD Brushed 	1 	20 2390', '39610', 2390, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'BL  	- 	150 (6”) 150 (6”) SS 304 	Matt Black 	1 	20 	890', '39620', 890, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '150 (6”) 150 (6”) SS 304 	Brushed 	1 	60 	615', '39621', 615, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '39621 S 	150 (6”) 150 (6”) SS 304 	Brushed 	1 	60 	660', '39623', 660, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '39629 	150 (6”) 150 (6”) 	SS 304 	Brushed 	1 	60 	615', '39628', 615, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '150 (6”) 	150 (6”) 	SS 304 	Brushed 	1 	60 	615', '39640', 615, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '150 (6”) 	150 (6”) 	SS 304 	Brushed 	1 	60 	615', '39642', 615, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '39636 	150 (6”) 	150 (6”) 	SS 304 	Brushed 	1 	60 	615', '39635', 615, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.50 X 1 	Cockroach Trap & Hair Catcher Jali 	-', '39695', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'BG  	125 (5”) 	125 (5”) 	SS 304 	Gold PVD Brushed 	1 	9 	2150', '39700', 2150, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'BG  	150 (6”) 	150 (6”) 	SS 304 	Gold PVD Brushed 	1 	9 	2850', '39720', 2850, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'F 	40916 F 	125 (5”) 	125 (5”) 	SS 430 	Polished 	10 	180 	150', '40915', 150, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '40921 	150 (6”) 	150 (6”) 	SS 430 	Polished 	18 	72 	205', '40920', 205, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'A.01 x 1 	Jali (cover) itself for 40916A 40906A 	80', '40906', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '40914 	100 (4”) 	100 (4”) 	SS 430 	Polished 	35 	210 	125', '40913', 125, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.01.01 X 1 	Jali (cover) itself for 39242 & 39328 	-', '39242', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.02 X 1 	Jali (cover) itself for 40915A 40905A 	-', '40915A', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '41003 H 	75 (3”) 	SS 201 	Polished 	20 	240 	65', '41003', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '41004 H 	100 (4”) 	SS 201 	Polished 	35 	210 	75', '41004', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '41015 	125 (5”) 	SS 201 	Polished 	25 	150 	98', '41005', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'FD 	125 (5”) 	SS 304 	Polished 	25 	150 	230	Drain Flat Round', '41020', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- 	50 (2”) 	SS 201 	Polished 	30 	600 	41', '41302', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'S4 	- 	75 (3”) 	SS 304 	Polished 	30 	360 	72', '41313', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '41325 	100 (4”) 	SS 201 	Polished 	35 	210 	52', '41324', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '41336 	125 (5”) 	SS 201 	Polished 	35 	210 	63', '41335', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- 	125 (5”) 	SS 304 	Polished 	35 	210 	98	Drain Round - One Piece', '41337', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- 	100 (4”) 	SS 201 	Polished 	35 	210 	85', '41103', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '41115 	125 (5”) 	SS 201 	Polished 	25 	150 	105', '41105', 105, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '41626 	125 (5”) 	125 (5”) 	SS 304 	Polished 	30 	180 	215', '41625', 215, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- 	75 (3”) 	75 (3”) 	SS 201 	Polished 	20 	240 	84', '41580', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- 	75 (3”) 	75 (3”) 	SS 304 	Brushed 	20 	240 	130', '41583', 130, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '41587 	100 (4”) 	100 (4”) 	SS 304 	Brushed 	12 	72 	180', '41586', 180, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '41591 	125 (5”) 	125 (5”) 	SS 201 	Polished 	30 	180 	140', '41590', 140, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.02 X 1 	Cover (Jali only) for Drain 41594 48516 47420 	-', '41594', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EIHT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'D 	125 (5”) 	125 (5”) 	SS 304 	Polished 	30 	180 	260', '41595', 260, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '41601 	150 (6”) 	150 (6”) 	SS 201 	Polished 	6 	108 	190', '41600', 190, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '41606 	150 (6”) 	150 (6”) 	SS 304 	Polished 	6 	108 	260', '41605', 260, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'S4 CT 	80 	80 	SS 304 	Brushed 	1 	60 	220', '41608', 220, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EIHT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '41611 	125 (5”) 	125 (5”) 	SS 201 	Polished 	30 	180 	140', '41610', 140, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '41616 	125 (5”) 	125 (5”) 	SS 304 	Polished 	30 	180 	215', '41615', 215, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- 	150 (6”) 	150 (6”) 	SS 304 	Polished 	6 	108 	260', '41620', 260, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '41715 	125 (5”) 	125 (5”) 	SS 201 	Polished 	25 	150 	140', '41705', 140, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '41719 	100 (4”) 	100 (4”) 	SS 201 	Polished 	35 	210 	145', '41718', 145, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '41736 	150 (6”) 	150 (6”) 	SS 201 	Polished 	6 	108 	180', '41726', 180, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '41515 	125 (5”) 	125 (5”) 	SS 201 	Polished 	25 	150 	125', '41505', 125, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '41536 	150 (6”) 	150 (6”) 	SS 201 	Polished 	6 	108 	190', '41526', 190, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'D1 CT 	115 (4-1/2”) 115 (4-1/2”) 	Brass 	Polished CP 	1 	30 	2180', '41995', 2180, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '41804 	75 (3”) 	75 (3”) 	SS 304 	Polished 	30 	600 	90', '41803', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- 	100 (4”) 	100 (4”) 	SS 304 	Polished 	30 	360 	115', '41807', 115, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '41811 	125 (5”) 	125 (5”) 	SS 201 	Polished 	25 	150 	135', '41810', 135, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '41818 	150 (6”) 	150 (6”) 	SS 201 	Polished 	6 	108 	140', '41816', 140, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '45225 260', '42001', 260, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EIHT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'RG  	115 (4-1/2”) 115 (4-1/2”) 	Brass 	Rose Gold 	1 	30 	3120', '45225', 3120, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EIHT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '250 (10”) 250 (10”) 	200 (8”) 	200 (8”) 	5 T 	Off White 	1 	875', '44150', 875, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '300 (12”) 300 (12”) 	250 (10”) 	250 (10”) 	5 T 	Off White 	1 	12 	1145', '44152', 1145, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '375 (15”) 375 (15”) 	300 (12”) 	300 (12”) 	5 T 	Off White 	1 	1410', '44154', 1410, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '450 (18”) 450 (18”) 	375 (15”) 	375 (15”) 	5 T 	Off White 	1 	3 	2310', '44156', 2310, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '525 (21”) 525 (21”) 	450 (18”) 	450 (18”) 	5 T 	Off White 	1 	2850', '44158', 2850, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '600 (24”) 600 (24”) 	500 (20”) 	500 (20”) 	5 T 	Off White 	1 	2 	3565', '44160', 3565, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '700 (28”) 700 (28”) 	600 (24”) 	600 (24”) 	5 T 	Off White 	1 	6400', '44162', 6400, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '450 (18”) 300 (12”) 	400 (16”) 	250 (10”) 	5 T 	Off White 	1 	1680', '44186', 1680, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '600 (24”) 450 (18”) 	500 (20”) 	350 (14”) 	5 T 	Off White 	1 	2950	Manhole Hole Cover Square Frp', '44188', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '138', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '• Fits', '44355', 44355, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '350 (14”) 350 (14”) 40 (1-1/2”) 300 (12”) 300 (12”) 	2.5 T 	Steel 	Raw 	1 	1 	6350', '44302', 6350, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '500 (20”) 500 (20”) 40 (1-1/2”) 450 (18”) 450 (18”) 	2.5 T 	Steel 	Raw 	1 	1 	8470', '44304', 8470, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '650 (26”) 650 (26”) 40 (1-1/2”) 600 (24”) 600 (24”) 	2.5 T 	Steel 	Raw 	1 	1 10900', '44306', 10900, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '350 (14”) 350 (14”) 	100 (4”) 	300 (12”) 300 (12”) 	12 T 	Steel 	Raw 	1 	1 	8990', '44312', 8990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '500 (20”) 500 (20”) 	100 (4”) 	450 (18”) 450 (18”) 	12 T 	Steel 	Raw 	1 	1 10790', '44314', 10790, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '650 (26”) 650 (26”) 	100 (4”) 	600 (24”) 600 (24”) 	12 T 	Steel 	Raw 	1 	1 16500', '44316', 16500, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '• Fits', '44360', 44360, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '• Fits', '44380', 44380, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Polypropylene (PP) 	Black 	1 	22 	220', '44357', 220, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Polypropylene (PP) 	Black 	1 	34 	220', '44359', 220, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Polypropylene (PP) 	Black 	1 	60 	150', '44362', 150, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Polypropylene (PP) 	Black 	1 	36 	150', '44363', 150, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Polypropylene (PP) 	Black 	1 	18 	200', '44382', 200, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Polypropylene (PP) 	Black 	1 	16 	200', '44383', 200, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '300 (12”) 	75 (3”) 	SS 304 	Brushed 	Side Outlet 	1 	10 	3190', '44630', 3190, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'CO 	450 (18”) 	75 (3”) 	SS 304 	Brushed 	Centre Outlet 1 	10 	3890', '44631', 3890, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'L750 CO 750 (30”) 	75 (3”) 	SS 304 	Brushed 	Centre Outlet 1 	10 	6085', '44632', 6085, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'CO 	900 (36”) 	75 (3”) 	SS 304 	Brushed 	Centre Outlet 1 	10 	7280', '44633', 7280, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'CO 	1200 (48”) 75 (3”) 	SS 304 	Brushed 	Centre Outlet 1 	10 	7990', '44634', 7990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '300 (12”) 100 (4”) 	SS 304 	Brushed 	Side Outlet 	1 	10 	3290', '44635', 3290, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'CO 	450 (18”) 100 (4”) 	SS 304 	Brushed 	Centre Outlet 1 	10 	3990', '44636', 3990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'can work as like this design as well as tile insert', '44637', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Brushed Centre Outlet 1 	10', '7290', 7290, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Bronze Centre Outlet 1 	10', '8780', 8780, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'CO 	750 (30”) 100 (4”) 	SS 304 	Brushed 	Centre Outlet 1 	10 	5990', '44637-750', 5990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'BG  CO 	900 (36”) 100 (4”) 	SS 304 Gold PVD', '44638', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Bronze Centre Outlet 1 	10', '12990', 12990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Brushed Centre Outlet 1 	10', '10990', 10990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Brushed Centre Outlet 1 	10', '11990', 11990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'CO 	1200 (48”) 100 (4”) 	SS 304 	Brushed 	Centre Outlet 1 	10 	8390', '44639', 8390, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Tile/Marble Insert Reversible Drain 	', '598', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'CO 	600 (24”) 	75 (3”) 	SS 304 	Brushed 	Centre Outlet 	1 	10 	4990', '44645', 4990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'CO 	900 (36”) 	75 (3”) 	SS 304 	Brushed 	Centre Outlet 	1 	10 	7490', '44647', 7490, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '• 44mm लनंकैासी - स् ट	ं	 	डडड 50mm  पाइप मेंं दफैट हैं ोतौा हैं	ै', 'SWR', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '600 (24”) 	100 (4”) 	SS 304 	Brushed 	Side Outlet 	1 	10 	4990', '44652', 4990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '300 (12”) 	100 (4”) 	SS 304 	Brushed 	Side Outlet 	1 	10 	3290', '44650', 3290, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '450 (18”) 	100 (4”) 	SS 304 	Brushed 	Side Outlet 	1 	10 	3990', '44651', 3990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '600 (24”) 	100 (4”) 	SS 304 	Brushed 	Centre Outlet 	1 	10 	4990', '44653', 4990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '900 (36”) 	100 (4”) 	SS 304 	Brushed 	Side Outlet 	1 	10 	7490', '44655', 7490, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '900 (36”) 	100 (4”) 	SS 304 	Brushed 	Centre Outlet 	1 	10 	7490', '44656', 7490, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '1200 (48”) 	100 (4”) 	SS 304 	Brushed 	Side Outlet 	1 	10 	9990', '44658', 9990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '1200 (48”) 	100 (4”) 	SS 304 	Brushed 	Centre Outlet 	1 	10 	9990', '44659', 9990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '143', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'CO 600 (24”) 100 (4”) 	SS 304 	Brushed 	Centre Outlet 	1 	10 	4290', '44665', 4290, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'CO - 900 900 (36”) 	100 (4”) 	SS 304 	Brushed 	Centre Outlet 	1 	10 5990', '44666', 5990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.50', '580', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '144', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'BL  	300 (12”) 	100 (4”) 	SS 304 	Matt Black 	Centre Outlet 	1 	10 	3290', '44668', 3290, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'BG  	600 (24”) 	100 (4”) 	SS 304 	Gold PVD Brushed 	Side Outlet 	1 	10 	8000', '44673', 8000, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '600 (24”) 	100 (4”) 	SS 304 	Brushed 	Centre Outlet 	1 	10 	4290', '44675', 4290, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '900 (36”) 	100 (4”) 	SS 304 	Brushed 	Side Outlet 	1 	10 	5990', '44678', 5990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '900 (36”) 	100 (4”) 	SS 304 	Brushed 	Centre Outlet 	1 	10 	5990', '44679', 5990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.03 X 1 	Cockroach Trap-Assembly 	195', '44690', 195, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'SO 	300 (12”) 	100 (4”) 	SS 304 	Brushed 	Side Outlet 	1 	10 	2990', '44686', 2990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'BL  	450 (18”) 	100 (4”) 	SS 304 	Matt Black 	Side Outlet 	1 	10 	4490', '44688', 4490, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '450 (18”) 	100 (4”) 	SS 304 	Brushed 	Centre Outlet 	1 	10 	3990', '44689', 3990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '750 	750 (30”) 	100 (4”) 	SS 304 	Brushed 	Centre Outlet 	1 	10 	5890', '44690-CO', 5890, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'BG  	600 (24”) 	100 (4”) 	SS 304 	Gold PVD Brushed 	Centre Outlet 	1 	10 	8000', '44691', 8000, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'BL  	900 (36”) 	100 (4”) 	SS 304 	Matt Black 	Side Outlet 	1 	10 	6480', '44692', 6480, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'BG  	900 (36”) 	100 (4”) 	SS 304 	Gold PVD Brushed 	Centre Outlet 	1 	10 	12990', '44693', 12990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '1200 (48”) 	100 (4”) 	SS 304 	Brushed 	Side Outlet 	1 	10 	7990', '44694', 7990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '1200 (48”) 	100 (4”) 	SS 304 	Brushed 	Centre Outlet 	1 	10 	7990', '44695', 7990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '600 (24”) 	125 (5”) 	SS 304 	Brushed 	Side Outlet 	1 	10 	5000', '44705', 5000, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '146', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '300 (12”) 	100 (4”) 	SS 304 	Brushed 	Centre Outlet 	1 	10 	2990', '44786', 2990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '450 (18”) 	100 (4”) 	SS 304 	Brushed 	Side Outlet 	1 	10 	3990', '44788', 3990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'BL  	600 (24”) 	100 (4”) 	SS 304 	Matt Black 	Side Outlet 	1 	10 	5990', '44790', 5990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'BG  	600 (24”) 	100 (4”) 	SS 304 	Gold PVD Brushed 	Centre Outlet 	1 	10 	8000', '44791', 8000, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'BG  	900 (36”) 	100 (4”) 	SS 304 	Gold PVD Brushed 	Side Outlet 	1 	10 	12990', '44792', 12990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '900 (36”) 	100 (4”) 	SS 304 	Brushed 	Centre Outlet 	1 	10 	5990', '44793', 5990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.11 X 1 	Floor Trap - Low Height 	-', '44900', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '147', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '200 (8”) 	200 (8”) 	SS 430 	Brushed 	1 	10 	695', '44970', 695, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '150 (6”) 	150 (6”) 	CI (Cast Iron) 	Raw 	1 	1 	198', '45060', 198, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '- 	50 (2”) 	SS 201 	Brushed 	25 	300 	40', '45093', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '45096 	75 (3”) 	SS 201 	Brushed 	50 	600 	55', '45095', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '45098 	100 (4”) 	SS 201 	Brushed 	10 	30 	80', '45097', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '45101 	125 (5”) 	SS 201 	Brushed 	1 	110 	120	Rain-Roof-Drain-Grate Round', '45100', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '50 (2”) 	50 (2”) 	SS 201 	Brushed 	50 	1080 	84', '45102', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
