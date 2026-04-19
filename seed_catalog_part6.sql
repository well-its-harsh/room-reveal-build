-- Catalog Seed Part 6 - 2026-04-10T20:40:01.609Z

-- 2. INSERT PRODUCTS (PART 6)
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '75 (3”) 	75 (3”) 	SS 201 	Brushed 	50 	600 	65', '45103', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '100 (4”) 	100 (4”) 	SS 304 	Brushed 	10 	300 	105', '45105', 105, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '45110 	100 (4”) 	100 (4”) 	SS 201 	Brushed 	10 	300 	80', '45109', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '45115 	125 (5”) 	125 (5”) 	SS 201 	Brushed 	10 	110 	120', '45111', 120, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '45116 	150 (6”) 	150 (6”) 	SS 201 	Brushed 	10 	100 	180', '45112', 180, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'S4 	75 (3”) 	75 (3”) 	SS 304 	Brushed 	50 	600 	70', '45118', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'S4 	100 (4”) 	100 (4”) 	SS 304 	Brushed 	10 	160 	115', '45119', 115, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'S4 	125 (5”) 	125 (5”) 	SS 304 	Brushed 	10 	110 	164', '45120', 164, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'S4 	150 (6”) 	150 (6”) 	SS 304 	Brushed 	10 	110 	220', '45121', 220, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'S4 	200 (8”) 	200 (8”) 	SS 304 	Brushed 	1 	20 	470', '45122', 470, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '100 (4”) 	50 (2”) 	50 (2”) 	SS 201 	Brushed 	10 	120 	90', '45128', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '125 (5”) 	65 (2-1/2”) 65 (2-1/2”) 	SS 201 	Brushed 	10 	110 	120', '45130', 120, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '150 (6”) 	75 (3”) 	75 (3”) 	SS 201 	Brushed 	10 	140 	190', '45132', 190, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '150 (6”) 	50 (2”) 	100 (4”) 	SS 201 	Brushed 	14 	140 	200', '45135', 200, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '125 (5”) 	SS 201 	Polished 	1 	60 	300', '45140', 300, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '125 (5”) 	125 (5”) 	SS 201 	Polished 	1 	60 	300', '45145', 300, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '149', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '118 	83 	78 	49 	SS 304 	Brushed 	2 	28 	810', '45149', 810, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '118 	83 	78 	74 	SS 304 	Brushed 	2 	28 	810', '45150', 810, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '150 (6”) 	150 (6”) 	90 	108 	SS 304 	Brushed 	2 	28 	1040', '45151', 1040, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '280 	125 (5”) 	175 (7”) 	98 	SS 304 	Brushed 	1 	8 	2845', '45152', 2845, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '280 	125 (5”) 	175 (7”) 	152 	SS 304 	Brushed 	1 	1 	3450', '45154', 3450, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '280 	125 (5”) 	175 (7”) 	200 	SS 304 	Brushed 	1 	1 	5250', '45156', 5250, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '282 	92 	75 	PP & ABS 	Raw 	1 	1 	2190', '45160', 2190, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'LENTH' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '282 	92 	104 	PP & ABS 	Raw 	1 	1 	2290', '45162', 2290, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'LENTH' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '282 	92 	153 	PP & ABS 	Raw 	1 	1 	2580', '45164', 2580, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'LENTH' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Roof Dome Shape Drain (D)', 'DIA', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'LENTH' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '125 (5”) 	SS 304 	Brushed 	1 	60 	1050', '45205', 1050, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EIHT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '125 (5”) 	125 (5”) 	SS 304 	Brushed 	1 	60 	1050', '45215', 1050, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EIHT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '150 (6”) 	150 (6”) 	SS 304 	Brushed 	1 	45 	1260', '45218', 1260, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EIHT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '100 (4”) 	100 (4”) 	SS 304 	Brushed 	20 120 	220', '45288', 220, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EIHT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '125 (5”) 	125 (5”) 	SS 304 	Brushed 	25 150 	340', '45290', 340, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EIHT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '150 (6”) 	150 (6”) 	SS 304 	Brushed 	1 	55 	890', '45275', 890, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EIHT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '48486 	125 (5”) 	125 (5”) 	SS 304 	Polished 	1 	60 	490', '48485', 490, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EIHT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '125 (5”) 	125 (5”) 	SS 304 	Brushed 	1 	60 	910', '46315', 910, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EIHT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '47426 	125 (5”) 	SS 304 	Polished 	1 	60 	490', '47425', 490, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EIHT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.51 X 1 	Drain only (frame+Jali) of Round 5” 47405 	130', '47405', 130, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EIHT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '47422 	125 (5”) 	SS 304 	Polished 	1 	60 	490', '47420', 490, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EIHT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.51 X 1 	Drain only (Frame+Jali) of Round 5” 47415 	130	Cockroach Trap Round Stainless Steel', '47415', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EIHT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '75 (3”) 	75 (3”) 	SS 201 	Polished 	- 	- 	180', '48496', 180, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EIHT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'N 	75 (3”) 	75 (3”) 	SS 304 	Polished 	1 	120 	250', '48497', 250, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EIHT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '100 (4”) 	100 (4”) 	SS 304 	Brushed 	1 	42 	270', '48500', 270, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EIHT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '48502 	100 (4”) 	100 (4”) 	SS 201 Polished 	1 	42 	245', '48501', 245, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EIHT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '48504 	100 (4”) 	100 (4”) 	SS 304 Polished 	1 	42 	355', '48503', 355, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EIHT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.51 X 1 	Drain only (frame+Jali) of Sq 5” 48505 	160', '48505', 160, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EIHT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Siutable for', '48516', 48516, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EIHT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '48536 	150 (6”) 	150 (6”) 	SS 201 Polished 	1 	50 	370', '48526', 370, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EIHT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '48542 	150 (6”) 	150 (6”) 	SS 304 Polished 	1 	50 	510', '48540', 510, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EIHT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '48519 	125 (5”) 	125 (5”) 	SS 304 	Polished 	1 	60 	490', '48518', 490, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EIHT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '48546 	150 (6”) 	150 (6”) 	SS 304 	Polished 	1 	50 	510', '48545', 510, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EIHT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Trap Assembly- 2 Bowls for', '48520', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EIHT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '48499 	100 (4”) 	100 (4”) 	SS 304 	Brushed 	1 	42 	270', '48498', 270, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EIHT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '153', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EIHT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Brass 	Polished CP 	1 	9 	10490', '52852', 10490, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EIHT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'RG  	15 (1/2”) 	Brass 	Rose Gold 	1 	9 	13800', '52850', 13800, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Brass 	Polished CP 	1 	10 	9690', '52855', 9690, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Brass 	Polished CP 	1 	10 	9180', '52860', 9180, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Brass 	Polished CP 	1 	12 	12590', '52900', 12590, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '• Works with both  battery and electricity.', '4AA', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '100 (4”) 	270 	205 	225-275 	ABS 	White 	1 	20 	1590', '53600', 1590, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '100 (4”) 	285 	210 	300-400 	ABS 	White 	1 	10 	1480', '53608', 1480, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '100 (4”) 	285 	210 	300-400 	ABS 	Black 	1 	10 	1480', '53610', 1480, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Brass 	Polished CP 	1 	50 	2050', '52999', 2050, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '90 	238 	300 (12”) 	350-450 	SS 304 	Brushed 	1 	6 3290', '53802', 3290, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'RG  	170 (6-3/4”) 	Brass 	Rose Gold 	1 	48 	1890	Wall Hook Quadruple H2 O', '56154', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '157', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Zamak 	Polished CP 	1 	48 	790', '56333', 790, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Zamak 	Polished CP 	1 	40 	820', '56334', 820, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	150 (6”) 	600 (24”) 	SS 304 	Brushed 	2 	8 	2780', '56438', 2780, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.04 X 1 	Grab Bar Screw Set for SS Grab Bar 	-', '56420', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	300 (12”) 	SS 304 	Brushed 	- 	25 	1350', '56422', 1350, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	450 (18”) 	SS 304 	Brushed 	1 	1490', '56426', 1490, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	600 (24”) 	SS 304 	Brushed 	1 	12 	1790', '56428', 1790, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	900 (36”) 	SS 304 	Brushed 	1 	2300', '56430', 2300, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	1200 (48”) 	SS 304 	Brushed 	1 	3150', '56432', 3150, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '300 (12”) 	35 	ABS 	White 	1 	25 	1190', '56600', 1190, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '450 (18”) 	35 	ABS 	White 	1 	1390', '56602', 1390, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '600 (24”) 	35 	ABS 	White 	1 	18 	1890', '56604', 1890, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '900 (36”) 	35 	ABS 	White 	1 	18 	2390', '56606', 2390, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '450 (18”) 	150 (6”) 	32 (1-1/4”) 	SS 304 	Brushed 	1 	1 	2490', '56470', 2490, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	300 (12”) 	ABS 	White 	1 	25 	590', '56594', 590, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	450 (18”) 	ABS 	White 	1 	12 	690', '56596', 690, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	600 (24”) 	ABS 	White 	1 	12 	890', '56597', 890, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '450 (18”) 450 (18”) 32 (1-1/4”) 	Left 90° 	SS 304 Brushed 	0 	2 	3990', '56462', 3990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '450 (18”) 450 (18”) 32 (1-1/4”) 	Right 90° 	SS 304 Brushed 	0 	2 	3990', '56463', 3990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '600 (24”) 600 (24”) 32 (1-1/4”) 	Left 90° 	SS 304 Brushed 	0 	2 	4890', '56465', 4890, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '600 (24”) 600 (24”) 32 (1-1/4”) 	Right 90° 	SS 304 Brushed 	0 	2 	4890', '56466', 4890, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '159', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'SS 304 	Brushed 	1 	4 	5990', '56628', 5990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'SS 304 	Brushed 	1 	4 	6990', '56628-500', 6990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'ABS & Steel 	White 	1 	5 	5350', '56633', 5350, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.01.03 X 1 	Screw Set (for 56630) 	300', '56630', 300, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '300 (12”) 	300 (12”) 	ABS 	White 	1 	12 	1870', '56650', 1870, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '450 (18”) 	450 (18”) 	ABS 	White 	1 	12 	2190', '56652', 2190, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '300 (12”) 	300 (12”) 	ABS 	White 	1 	12 	1870', '56695', 1870, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '450 (18”) 	450 (18”) 	ABS 	White 	1 	12 	2190', '56697', 2190, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '161', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'ABS 	White 	1 	40 	370', '56762', 370, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '170 (6-3/4”) 	35 	ABS 	White 	1 	48 	320', '56740', 320, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '225 (9”) 	35 	ABS 	White 	1 	70 	360', '56744', 360, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '300 (12”) 	35 	ABS 	White 	1 	48 	520', '56747', 520, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '375 (15”) 	35 	ABS 	White 	1 	36 	650', '56752', 650, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '530 	35 	ABS 	White 	2 	32 	1040', '56755', 1040, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '835 	35 	ABS 	White 	1599', '56757', 1599, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'ABS 	White 	1 	36 	570', '56765', 570, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'ABS 	White 	1 	32 	715', '56768', 715, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'ABS 	White 	1 	32 	715', '56772', 715, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'ABS 	White 	1 	38 	935', '56775', 935, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '162', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '300 (12”) 	Brass 	Polished CP 	1 	30 	2150', '56990', 2150, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '450 (18”) 	Brass 	Polished CP 	2380', '56991', 2380, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '600 (24”) 	Brass 	Polished CP 	2780', '56992', 2780, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '140 	110 	245 	ABS 	White 	1 	12 	3800', '58024', 3800, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '• Voltage', '220V', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Air Speed: /S', '13M', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '155 	265 	200 (8”) Air speed 16 M/S 	ABS 	White 	1 	8 	6750', '58131', 6750, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Speed: /S', '16M', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '1 	24 	880', '62000', 880, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '170 	295 	325 	Air speed 60 M/S 	SS 304 	Polished 	1 	2 18200', '58135', 18200, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Speed /S', '60M', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '250 (10”) 175 (7”) 250 (10”) Air speed', '58142', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Speed /S', '40M', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '155 	186 	310 	ABS 	Polished White 	1 	8690', '58133', 8690, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '155 	186 	310 	SS 304 Brushed 	1 	12490', '58134', 12490, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '90 	250 (10”) 	HD(Plastic) 	Black 	1 	6 	650', '62240', 650, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '110 	250 (10”) 	HD(Plastic) 	Black 	1 	6 	690', '62242', 690, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '125 X 110 	150 (6”) 	Plastic 	White 	1 	36 	270', '62247', 270, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '125 X 110 300 (12”) 	Plastic 	White 	1 	15 	430', '62248', 430, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'WC  Connector- 50 Offset', 'PAN', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '125 X 110 	110 	PVC 	White 	1 	40 	245', '62249', 245, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '125 X 110 125 (5”) 	Plastic 	White 	1 	40 	270', '62250', 270, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '125 X 110 225 (9”) 	Plastic 	Black 	1 	10 	540', '62251', 540, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '125 X 110 	125 (5”) 	PVC 	White 	1 	40 	230', '62244', 230, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '125 X 110 125 (5”) 	Plastic 	White 	1 	40 	270', '62245', 270, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '90 	175 (7”) 	Plastic 	Black 	1 	8 	360', '62255', 360, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '90 	300 (12”) 	Plastic 	Black 	1 	5 	590', '62256', 590, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '110 	90 	75 (3”) 	Polypropylene (PP) 	Black 	1 	30 	290', '62395', 290, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Brass 	Brass 	25 	200 	130', '79880', 130, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '20 (3/4”) 	Brass 	Brass 	20 	400 	240', '79900', 240, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '•  - Jaquar Faucets(All Series', '79902', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '•  - Jaquar QueensSeries Only', '79904', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '•  - Jaquar Faucetsall Series', '79906', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '• -Voyage Range(37888)', '79908', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '35 Suitable 29318 29290 29280', '79968', 29280, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '22 	Suitable for 37847 	20 	400 	230', '79980', 230, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '25 (1”) Suitable for 37860, 37861,', '79985', 37861, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '1 	36 	240', '37865', 240, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '167', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'sales representative () in the email list to keep them informed.', 'FSR', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'DEALER/CUSTOMER INFORMATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Any deductions on an invoice must be inform your  so the financial statements match,', 'ISR', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'DEALER/CUSTOMER INFORMATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '168', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'DEALER/CUSTOMER INFORMATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '169', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'DEALER/CUSTOMER INFORMATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'of the returned material. After sending the goods, must obtain and Email  (Proof of', 'POD', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'DEALER/CUSTOMER INFORMATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '• Payment methods include , RTGS, Cheques, Bank drafts,or any electronic mode.', 'NEFT', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'DEALER/CUSTOMER INFORMATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '• Phone: +91  845464', '9988', 845464, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'DEALER/CUSTOMER INFORMATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '• Delivery days are approximate,  (AIMTECH) cannot held responsible for delays in delivery.', 'VIKING', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'H.P.' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '171', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'H.P.' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
