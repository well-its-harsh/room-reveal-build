-- Catalog Seed Part 4 - 2026-04-10T20:40:01.593Z

-- 2. INSERT PRODUCTS (PART 4)
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '61 	 	Self Closing Concealed Wall Mounted Basin Tap - Cold Only', 'KB1811046-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '62 	 	Wall Mounted Sink Mixer', 'KB111024-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '63 	 	Wall Mounted Sink Cock', 'KB111025-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '64 	 	Deck Mounted Sink Cock', 'KB111028-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '65 	 	Deck Mounted Sink Mixer - Single Lever', 'KB111047-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '66 	 	Wall Mounted Sink Mixer', 'KB411024-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '67 	 	Wall Mounted Sink Cock', 'KB411025-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '68 	 	Deck Mounted Sink Cock', 'KB411028-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '69 	 	Deck Mounted Sink Mixer - Single Lever', 'KB411047-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '70 	 	Wall Mounted Sink Mixer', 'KB1211024-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '71 	 	Wall Mounted Sink Cock', 'KB1211025-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '72 	 	Deck Mounted Sink Cock', 'KB1211028-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '77 	 	Deck Mounted Sink Mixer - Single Lever', 'KB1211047-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '74 	 	Kerovit - Slope Wall Mounted Sink Mixer', 'KB1311024-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '75 	 	Wall Mounted Sink Cock', 'KB1311025-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '76 	 	Deck Mounted Sink Cock', 'KB1311028-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '79 	 	Single Function Wall Mounted Overhead Shower', 'KA550003', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '85 	 	Concealed Dual Flush Valve 32 mm & Round Flange', 'KB320002R-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '86 	 	Concealed Dual Flush Valve 32 mm & Square Flange', 'KB320002S-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '87 	 	Concealed Dual Flush Valve 40 mm & Round Flange', 'KB400002R-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '88 	 	Concealed Dual Flush Valve 40 mm & Square Flange', 'KB400002S-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '89 	 	Health Faucet White Body', 'KA580004', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '94 	 	Self Closing Concealed Flush Valve', 'KB1811059-CP', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN PRO CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'M : +91 , +91 8448984291', '8448984292', 8448984291, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SOUTH' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ': 201, D.S.K., Gandharv Heights,', 'PUNE', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WEST' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'M : +91 , +91 9995824564', '9746473680', 9995824564, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WEST' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '8617052151', 8617052151, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GONDIA' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91 , +91 9765395051', '7028005380', 9765395051, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GONDIA' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9311212257', 9311212257, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MYSORE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91 , +91 8617052151', '8383859585', 8617052151, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MYSORE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9003133307', 9003133307, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'VARANASI' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9724340894', 9724340894, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'VARANASI' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '7000752475', 7000752475, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'VARANASI' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '8383864603', 8383864603, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'VARANASI' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9311546595', 9311546595, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WAYANAD' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '172', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'H.P.' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'the modern living. Established in  in city of Jalandhar (INDIA), Viking has become a name to', '1966', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FEEL WATER AT ITS BEST' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'are supplied to over  cities across India, Nepal, Bhutan, Bangladesh, Sri Lanka and Seychelles.', '255', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FEEL WATER AT ITS BEST' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Black Matt ()', 'BLM', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'JAQUAR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Rose Gold ()', 'RGD', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'KOHLER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '158', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '164', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Angle Valve -', 'H2O', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Polished CP 	1 	60 	470', '2115', 470, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Polished CP 	1 Set 	4 	3350', '2200', 3350, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '( BARS) 	Special Need Area', 'GRAB', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'NEED AREA' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '142', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '141', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Drain Flat Square SS', '316', 316, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '139', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '151', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EIHT' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '166', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '154', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '163', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Tile Accessories 	Tile Spacer/ Tile Levelling Clip /Wedges & Plier 	91, 92', 'SYSTEM', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'LEVELING' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Shower Area', 'HOTELIER', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'AREA' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Contact Us +91--2604100', '181', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'NEW PRODUCTS ABOUT US RESOURCES FAQ’S NEWS CONTACT US', 'PRODUCTS', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	15 (1/2”) 	Inner 	450 (18”) 	Steel 	40 	200 245', '3018', 245, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'RG  120(4-3/4”) 500 (20”) 	780 	SS 304 Rose Gold 1 	1 24600', '2721', 24600, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'SS 304 	Polished 	1 	1 	14700', '2716', 14700, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'SS 304 	Brushed 	1 	1150', '29238', 1150, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '245 	600 (24”) 215 (8-1/2”) 	SS 	Polished CP 1 	1760', '2234', 1760, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'mm', '324', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'mm', '320', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'White 	1 	5 	6490', '704', 6490, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '270 	100 (4”) 	120 	ABS 	White 	1 	25 	1330', '708', 1330, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Ivory 	1 	50 	525', '751', 525, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'White 	1 	50 	525', '752', 525, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '900 	White 	1 	30 	1790', '1120', 1790, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '200 	Transparent 	1 	60 	999', '1125', 999, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '500 	Transparent 	1 	30 	1480', '1127', 1480, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'B  	128 	110 	132(5-1/4”) 	700 	ABS 	Transparent 	1 	12 	3150', '1106', 3150, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Features of , 1134 & 1142', '1133', 1142, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '72 	202 	122 	1100 	SS 304 	Brushed 	1 20 2990', '1134', 2990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'BL  	95 	75 (3”) 	100 (4”) 	250 	Brass 	Matt Black 	- 	- 	4480', '1128', 4480, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'BL  	95 	75 (3”) 	100 (4”) 	250 	Brass 	Matt Black 	- 	- 	4990', '1129', 4990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'SS 304 	Brushed 	1 	20 	480', '1147', 480, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '250 	Polished CP 	1 	50 	1650', '1138', 1650, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.01.07 X 1 	Pump for Lotion Dispenser 	200', '1142', 200, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '200 (8”) 	Brass 	Polished CP 	1 	10 	3380', '1152', 3380, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '200 (8”) 	Brass 	Polished CP 	1 	7 	10500', '1157', 10500, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '200 (8”) 	200 (8”) 	Brass 	Polished CP 	1 	5 	11500', '1155', 11500, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '225 (9”) 	Brass 	Polished CP 	1 	30 	1530', '1159', 1530, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'RG  	300 (12”) 	Brass 	Rose Gold 	1 	30 	2690', '1160', 2690, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '375 (15”) 	Brass 	Polished CP 	1 	16 	1810', '1161', 1810, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'RG  	450 (18”) 	Brass 	Rose Gold 	1 	16 	3980', '1162', 3980, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '600 (24”) 	Brass 	Polished CP 	1 	16 	2590', '1163', 2590, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'BL  	300 (12”) 	SS 304 	Matt Black 	1 	25 	2190', '1168', 2190, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.02.02 X1 	Brush only (No Rod) 	-', '1182', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '2.5 mtr(98”) 	SS 304 	Polished 	1 	50 	1090', '1226', 1090, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Brass 	Polished CP 	1 	38 	990', '1335', 990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '450 (18”) 	Brass 	Polished CP 	1 	16 	1050', '1343', 1050, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '600 (24”) 	Brass 	Polished CP 	1 	16 	1090', '1345', 1090, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Brass 	Polished CP 	1 	26 	820', '1355', 820, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '600 (24”) 	Brass 	Polished CP 	1 	4 	4050', '1360', 4050, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '600 (24”) 	Brass 	Polished CP 	1 	14 	1670', '1370', 1670, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Polished CP 	1 	- 	1090', '1622', 1090, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Brass 	Polished CP 	1 Set 	4 	5945', '1701', 5945, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'RECTANGULAR  ACCESSORIES Set of 5 Pcs', 'BATH', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'FG  H 	French Gold 	1 	14 	1890', '1730', 1890, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'FG  	French Gold 	1 	35 	1890', '1734', 1890, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.50 X 1 	Spare Screw Dowel Set (2 each) 	-', '1735', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'FG  	French Gold 	1 	26 	1890', '1740', 1890, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'FG  	450 (18”) 	French Gold 	1 	16 	3190', '1743', 3190, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'FG  	600 (24”) 	French Gold 	1 	16 	3390', '1745', 3390, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'FG  	French Gold 	1 	60 	1190', '1750', 1190, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'FG  	French Gold 	1 	26 	1500', '1755', 1500, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'FG  	French Gold 	1 	26 	3150', '1756', 3150, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.50 X 1 	Pump for Lotion Dispenser 	-', '1758', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'FG  	600 (24”) 	85 	French Gold 	1 	6 	8590', '1760', 8590, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'FG  	600 (24”) 	85 	French Gold 	1 	6 	8790', '1761', 8790, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '250 (10”) 	250 (10”) 	Transparent 	1 	10 	1260', '1763', 1260, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'FG  	450 (18”) 	120(4-3/4”) 	8 	French Gold 	1 	12 	2190', '1787', 2190, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'FG  	600 (24”) 	120(4-3/4”) 	8 	French Gold 	1 	12 	2290	Glass Shelf with Rail', '1789', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'L 	Polished CP 	1 |Set 	4 	-', '1920', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'BATH ACCESSORIES Set of 5 Pcs', 'PAWN', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'H 	Polished CP 	1 	30 	1080', '1921', 1080, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'L 	Polished CP 	1 	38 	900', '1922', 900, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Polished CP 	1 	26 	1080', '1923', 1080, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Polished CP 	1 	75 	530', '1925', 530, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.01.02 X 1 	Bracket of Pawn Series 	56', '1927', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Polished CP 	26 	1480', '1932', 1480, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'H 	Polished CP 	1 Set 	4 	5495', '1940', 5495, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.08 X 10 	Grub Screw 	-', '1941', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '44691 	600 (24”) 	100 (4”) 	SS 304 	Brushed Bronze 	Centre Outlet 	1 	10 	8950', 'BBZ', 8950, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'BL  F 	Matt Black 	1 	35 	1350', '1942', 1350, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.05 X 1 	Tumbler 	290', '1943', 290, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'FG  	French Gold 	1 	12 	2290', '1944', 2290, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'FG  	French Gold 	1 	36 	1090', '1945', 1090, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'FG  	French Gold 	1 	60 	500', '1946', 500, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'FG  	450 (18”) 	Brass 	French Gold 	1 	16 	2550', '1947', 2550, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'FG  	600 (24”) 	Brass 	French Gold 	1 	16 	3390', '1948', 3390, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'FG  	French Gold 	1 	14 	1890', '1951', 1890, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Polished CP 	1 	35 	1090', '1953', 1090, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Polished CP 	1 	26 	1350', '1954', 1350, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'FG  	French Gold 	1 	14 	2740', '1952', 2740, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'FG  H 	600 (24”) 	French Gold 	1 	4 	9490', '1955', 9490, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.07 X 1 	Bottle for Lotion Dispenser 	-', '1960', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'RG  H 	450 (18”) 	Rose Gold 	1 	4 	7250', '1956', 7250, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Polished CP 	1 	16 	2190', '1968', 2190, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '300 (12”) 120(4-3/4”) 	8 	Transparent 	1 	12 	1160', '1975', 1160, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'FG  450 (18”) 120(4-3/4”) 	8 	Transparent 	1 	12 	1930', '1976', 1930, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'FG  600 (24”) 120(4-3/4”) 	8 	Transparent 	1 	12 	1975', '1977', 1975, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'FG  450 (18”) 120(4-3/4”) 	8 	Transparent 	1 	6 	2250', '1979', 2250, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'FG  600 (24”) 120(4-3/4”) 	8 	Transparent 	1 	6 	2350', '1980', 2350, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'FG  	200 (8”) 	200 (8”) 	8 	Transparent 	1 	10 	1790', '1983', 1790, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'FG  	250 (10”) 	250 (10”) 	8 	Transparent 	1 	10 	1850', '1985', 1850, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Polished CP 	1 	10 	660', '2118', 660, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Polished CP 	1 	26 	575', '2120', 575, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Polished CP 	1 	75 	415', '2122', 415, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '600 (24”) 	Polished CP 	1 	16 	950', '2124', 950, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Polished CP 	1 	26 	715', '2128', 715, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '600 (24”) 	Polished CP 	1 	4 	2480', '2132', 2480, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Polished CP 	1 	18 	730', '2158', 730, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Polished CP 	1 	26 	910', '2162', 910, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Polished CP 	1 	36 	520', '2166', 520, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '600 (24”) 	Polished CP 	1 	16 	1299', '2172', 1299, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Polished CP 	1 	30 	620', '2155', 620, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Set of  2218 2220 2222 2224', '2215', 2224, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Polished CP 	1 	18 	765', '2218', 765, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Polished CP 	1 	26 	690', '2220', 690, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Polished CP 	1 	75 	430', '2222', 430, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '600 (24”) 	Polished CP 	1 	16 	935', '2224', 935, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Polished CP 	1 	26 	800', '2228', 800, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '600 (24”) 	Polished CP 	1 	4 	2880', '2232', 2880, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '450 (18”) 	Transparent 	1 	9 	2350', '2240', 2350, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.03 X 1 	Soap Dish only 	-', '2255', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'H 	Polished CP 	1 	4 	3690', '2251', 3690, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'RG  	Rose Gold 	1 	10 	2180', '2258', 2180, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'RG  	Rose Gold 	1 	38 	2180', '2260', 2180, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.01 X 1 	Tumbler Glass for Subtle Series 	-', '2262', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'RG  	Rose Gold 	1 	60 	520', '2265', 520, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'RG  	Rose Gold 	1 	50 	850', '2266', 850, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'RG  	600 (24”) 	Rose Gold 	1 	16 	2550', '2272', 2550, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'RG  	600 (24”) 	Rose Gold 	1 	14 	2780', '2274', 2780, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'RG  	Rose Gold 	1 	14 	1680', '2278', 1680, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'RG  	Rose Gold 	1 	14 	2650', '2280', 2650, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'RG  	600 (24”) 	Rose Gold 	1 	4 	7850', '2285', 7850, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'RG  	450 (18”) 	Transparent 	1 	12 	2280', '2294', 2280, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'RG  	600 (24”) 	Transparent 	1 	12 	2350', '2295', 2350, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Polished CP 	1 	4 	6020', '2301', 6020, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.02 X 1 	Soap Dish- Glass only 	250', '2305', 250, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.01 X 1 	Tumbler for Accessories 	270', '2312', 270, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Polished CP 	1 	60 	260', '2315', 260, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Polished CP 	1 	12 	1950', '2308', 1950, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Polished CP 	1 	35 	1060', '2309', 1060, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Polished CP 	1 	75 	815', '2316', 815, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Polished CP 	1 	38 	1150', '2328', 1150, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Polished CP 	1 	30 	1690', '2330', 1690, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '600 (24”) 	Polished CP 	1 	16 	2090', '2323', 2090, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '600 (24”) 	Polished CP 	1 	16 	2050', '2322', 2050, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '600 (24”) 	Polished CP 	1 	4 	5090', '2334', 5090, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Polished CP 	1 	6 	2080', '2338', 2080, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '250 (10”) 	250 (10”) 	8 	Transparent 	1 	10 	1590', '2352', 1590, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '185 	Polished CP 	1 	36 	265', '2477', 265, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '295 	Polished CP 	2 	30 	410', '2477-6', 410, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '185 	Polished CP 	1 	48 	250', '2476', 250, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '295 	Polished CP 	1 	40 	330', '2476-6', 330, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '185 	Polished CP 	1 	48 	250', '2473', 250, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '295 	Polished CP 	1 	40 	330', '2473-6', 330, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'L 	120(4-3/4”) 	500 (20”) 	780 	Polished 	1 	1 	27900', '2722', 27900, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'L 	120(4-3/4”) 	520 	750 (30”) 	Polished 	1 	1 	22220', '2715', 22220, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'UPDATED TO A NEW MODEL-2716', 'NOW', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'PAGE NO. 10', 'SEE', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	M 8 	Outer 	600 (24”) 	Steel 	1 	80 	350', '3215', 350, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	M 10 	Outer 	450 (18”) 	Steel 	15 	150 350', '3218', 350, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	M 10 	Outer 	600 (24”) 	Steel 	10 	80 	405', '3224', 405, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	M 10 	Outer 	900 (36”) 	Steel 	10 	80 	470', '3225', 470, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	M 12 	Outer 	450 (18”) 	Steel 	15 	150 390', '3238', 390, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	M 12 	Outer 	600 (24”) 	Steel 	10 	80 	490', '3244', 490, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	15 (1/2”) 	Inner 	150 (6”) 	Steel 	25 	200 205', '3010', 205, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	15 (1/2”) 	Inner 	300 (12”) 	Steel 	30 	180 215', '3012', 215, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	15 (1/2”) 	Inner 	600 (24”) 	Steel 	40 	160 270', '3024', 270, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	15 (1/2”) 	Inner 	750 (30”) 	Steel 	20 	160 325', '3030', 325, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	15 (1/2”) 	Inner 	900 (36”) 	Steel 	15 	120 340', '3036', 340, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	15 (1/2”) 	Inner 	1500 (60”/1.5m ) 	Steel 	10 	80 	460', '3042', 460, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	15 (1/2”) 	Inner 	1200 (48”) 	Steel 	10 	80 	430', '3048', 430, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '10 (3/8”) 	Inner 	10 (3/8”) 	Outer 	300 (12”) 	Steel 	30 	180 200', '3049', 200, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '10 (3/8”) 	Inner 	10 (3/8”) 	Inner 	450 (18”) 	Steel 	20 	200 215', '3051', 215, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '10 (3/8”) 	Inner 	10 (3/8”) 	Inner 	600 (24”) 	Steel 	20 	160 305', '3052', 305, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '10 (3/8”) 	Inner 	10 (3/8”) 	Inner 	300 (12”) 	Steel 	30 	180 210', '3053', 210, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	15 (1/2”) 	Outer 	450 (18”) 	Steel 	20 	200 265', '3055', 265, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	15 (1/2”) 	Outer 	200 (8”) 	Steel 	30 	180 205', '3055-8', 205, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '20 (3/4”) 	Inner 	20 (3/4”) 	Inner 	1000 (40”/ 1m) 	Steel 	20 	160 380', '3067', 380, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '20 (3/4”) 	Inner 	20 (3/4”) 	Inner 	1500 (60”/1.5m ) 	Steel 	- 	- 	460', '3069', 460, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '20 (3/4”) 	Inner 	20 (3/4”) 	Inner 	2000 (80”/2m) 	Steel 	- 	- 	560', '3071', 560, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	15 (1/2”) 	Outer 	450 (18”) 	Steel 	20 	200 465', '3118', 465, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	15 (1/2”) 	Outer 	600 (24”) 	Steel 	20 	160 495', '3124', 495, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	15 (1/2”) 	Inner 	300 (12”) 	White 	30 	180 195', '3712', 195, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	15 (1/2”) 	Inner 	450 (18”) 	White 	20 	200 220', '3718', 220, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	15 (1/2”) 	Inner 	600 (24”) 	White 	20 	160 235', '3724', 235, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	15 (1/2”) 	Inner 	900 (36”) 	White 	15 	120 265', '3736', 265, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	15 (1/2”) 	Inner 	1200 (48”) 	White 	10 	80 	305', '3748', 305, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	15 (1/2”) 	Inner 	450 (18”) 	White 	20 	200 	95', '3790', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	15 (1/2”) 	Inner 	600 (24”) 	White 	20 	160 112', '3792', 112, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	15 (1/2”) 	Inner 	900 (36”) 	White 	15 	120 120', '3794', 120, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Connection supply Hose -', 'PTMT', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	15 (1/2”) 	Inner 	300 (12”) 	White 	30 	180 195', '3612', 195, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	15 (1/2”) 	Inner 	450 (18”) 	White 	20 	200 220', '3618', 220, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	15 (1/2”) 	Inner 	600 (24”) 	White 	20 	160 235', '3624', 235, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	15 (1/2”) 	Inner 	900 (36”) 	White 	15 	120 265', '3636', 265, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	15 (1/2”) 	Inner 	1200 (48”) 	White 	10 	80 	305', '3648', 305, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	15 (1/2”) 	Inner 	1500 (60”/1.5m ) White 	10 	80 	370', '3660', 370, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	15 (1/2”) 	Inner 	1800 (72”) 	White 	5 	40 	415', '3672', 415, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Rubber washer (Pack of 50) 	180', '3610', 180, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	15 (1/2”) 	Inner 	450 (18”) 	Black 	20 	200 295', '3786', 295, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	15 (1/2”) 	Inner 	600 (24”) 	Black 	20 	160 320', '3788', 320, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	Inner 	750 (30”) 	White 	1 	100 120', '4921', 120, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	Inner 	900 (36”) 	White 	1 	100 130', '4922', 130, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	Inner 	750 (30”) 	White 	1 	70 	240', '4930', 240, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	Inner 	900 (36”) 	White 	1 	50 	270', '4936', 270, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '95 (3-3/4”) 	Inner 	750 (30”) 	White 	1 	65 	130', '4965', 130, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '95 (3-3/4”) 	Inner 	900 (36”) 	White 	1 	50 	145', '4967', 145, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	15 (1/2”) 	Inner 	300 (12”) 	Polished CP 	6 	108 	475', '4412', 475, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	15 (1/2”) 	Inner 	450 (18”) 	Polished CP 	6 	108 	660', '4418', 660, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	15 (1/2”) 	Inner 	600 (24”) 	Polished CP 	6 	84 	790', '4424', 790, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Nut n Washer (1each) 	74', '4512', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	Inner 	White 	1 	125 	78', '4972', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '40 (1-1/2”) 	40 (1-1/2”) 	Polypropylene (PP) 	Ivory 	1 	25 	430', '4985', 430, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	Outer 	40 (1-1/2”) 	Inner 	Grey 	6 	108 	32', '4999', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '40 (1-1/2”) Outer 32 (1-1/4”) 	Inner 	Polypropylene (PP) White 	6 	108 32', '5002', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	115 (4-1/2”) 	115 (4-1/2”) 	SS 304 	Brushed 	1 	32 	465', '5104', 465, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '40 (1-1/2”) 	Outer 	100 (4”) 	SS 304 	Brushed 	1 	33 	450', '5106', 450, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	Outer 	75 (3”) 	SS 304 	Brushed 	1 	40 	435', '5108', 435, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	Outer 	75 (3”) 	SS 201 	Polished 	1 	40 	255', '5110', 255, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	Outer 	100 (4”) 	SS 201 	Polished 	1 	32 	285', '5112', 285, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'HT 	32 (1-1/4”) 	Outer 	75 (3”) 	Brass 	Ceramic White 	1 	75 	1170', '5210', 1170, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'HT 	32 (1-1/4”) 	Outer 	125 (5”) 	Brass 	Ceramic White 	1 	54 	1390', '5212', 1390, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) Outer 	125 (5”) 	Brass 	Polished CP 	1 	54 1330', '5219', 1330, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.03 X 1 	Full Cap for Pop Up 	350', '5220', 350, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) Outer 	75 (3”) 	Brass 	Polished CP 	1 	75 1070', '5221', 1070, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'FG  	32 (1-1/4”) Outer 	125 (5”) 	Brass 	French Gold 	1 	12 2290', '5222', 2290, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Bronze 1 	12', '2490', 2490, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'RG  32 (1-1/4”) Outer 	215 (8-1/2”) 	Brass 	Rose Gold 	1 	8 	2790', '5222-215', 2790, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	Outer 	75 (3”) 	Brass 	Polished CP 	1 	100 	990', '5223', 990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.04 X1 	Washer for Cap 	15', '5224', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '40 (1-1/2”) 	Outer 	50 (2”) 	Brass 	Polished CP 	1 	40 	1060', '5226', 1060, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'G  	32 (1-1/4”) 	Outer 	125 (5”) 	Brass 	Gold PVD 	1 	12 	1890', '5227', 1890, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	Outer 	125 (5”) 	Brass 	Polished CP 	1 	54 	1195', '5228', 1195, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'BL  	32 (1-1/4”) 	Outer 215 (8-1/2”) 	Brass 	Matt Black 	1 	8 	2580', '5230', 2580, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	130 	Brass & ABS 	Polished CP 	1 	54 	335', '5242', 335, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	Outer 	75 (3”) 	Brass 	Polished CP 	1 	100 605', '5283', 605, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	Outer 	75 (3”) 	Brass 	Polished CP 	1 	54 605', '5284', 605, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'HT 	32 (1-1/4”) 	125 (5”) 	Brass 	Polished CP 	1 	54 850', '5285', 850, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'BL  	32 (1-1/4”) 	Outer 	130 	Brass & ABS 	Matt Black 	1 	12 400', '5248', 400, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'BL  	32 (1-1/4”) 	Outer 	75 (3”) 	Brass 	Matt Black 	1 	24 	790', '5303', 790, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.05 X 1 	Check Nut 	128', '5313', 128, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '40 (1-1/2”) 	Outer 	75 (3”) 	Brass 	Polished CP 	1 	40 	845', '5323', 845, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '40 (1-1/2”) 	Outer 	75 (3”) 	Brass 	Polished CP 	1 	40 	845', '5333', 845, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '50 (2”) 	Outer 	75 (3”) 	Brass 	Polished CP 	1 	40 	1390', '5343', 1390, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'FG  	32 (1-1/4”) 	Outer 	125 (5”) 	Brass 	French Gold 	1 	12 	1650', '5345', 1650, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	Outer 	125 (5”) 	Brass 	Polished CP 	1 	114 	835', '5346', 835, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	Outer 215 (8-1/2”) 	Brass 	Polished CP 	1 	30 	1280', '5348', 1280, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	Outer 215 (8-1/2”) 	Brass 	Polished CP 	1 	49 	1280', '5349', 1280, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '40 (1-1/2”) 	Outer 	125 (5”) 	Brass 	Polished CP 	1 	26 	1120', '5355', 1120, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '40 (1-1/2”) 	Outer 215 (8-1/2”) 	Brass 	Polished CP 	1 	30 	2250', '5358', 2250, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '50 (2”) 	Outer 	125 (5”) 	Brass 	Polished CP 	1 	26 	1590', '5365', 1590, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	Brass 	Polished CP 	50 	450 	260', '5380', 260, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '40 (1-1/2”) 	Brass 	Polished CP 	40 	360 	270', '5385', 270, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '40 (1-1/2”) 	600 (24”) 	Brass 	Polished CP 	1 	10 	2790', '5551', 2790, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.02.03.02 X 1 	Washer for Cap 	-', '5575', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '40 (1-1/2”) 	Brass 	Polished CP 	1 	25 	1990', '5585', 1990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	750 (30”) 	SS 304 	Polished CP 	1 	18 	1090', '5765', 1090, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'A 	32 (1-1/4”) 	225 (9”) 	Brass 	Polished CP 	48 	595', '5795', 595, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'A 	32 (1-1/4”) 	300 (12”) 	Brass 	Polished CP 	48 	745', '5796', 745, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'A 	32 (1-1/4”) 	450 (18”) 	Brass 	Polished CP 	18 	1100', '5798', 1100, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'A 	32 (1-1/4”) 	600 (24”) 	Brass 	Polished CP 	28 	1480', '5799', 1480, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '• Fits with Jaquar , Grohe, Kohler.', '769', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) Inner 300 (12”) 150 (6”) 	Brass 	Polished CP 1 	30 1900', '5800', 1900, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	225 (9”) 	150 (6”) 	Brass 	Polished CP 	1 	30 	2200', '5809', 2200, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.04 X 25 	Rubber Bush (pack of 25) 	450', '5812', 450, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	450 (18”) 	150 (6”) 	Brass 	Polished CP 	1 	12 	2560', '5818', 2560, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'V6 H15 	32 (1-1/4”) 375 (15”) 	150 (6”) 	Brass 	Polished CP 	1 	25 	2050', '5846', 2050, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	300 (12”) 	225 (9”) 	ABS 	Polished CP 	1 	25 	1140', '5848', 1140, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '30 	225 (9”) 	Brass 	Polished CP 	1 	48 	405', '5859', 405, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '30 	300 (12”) 	Brass 	Polished CP 	1 	48 	510', '5862', 510, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '30 	450 (18”) 	Brass 	Polished CP 	1 	18 	835', '5868', 835, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '30 	600 (24”) 	Brass 	Polished CP 	2 	28 	1350', '5874', 1350, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	Inner 300 (12”) 	175 (7”) 	ABS 	Polished CP 	1 	48 1090', '5884', 1090, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 300 (12”) 300 (12”) 	Polypropylene (PP) Semi', '5885', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	300 (12”) 	220 	ABS 	Polished 	1 	20 	690', '5887', 690, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	Inner 	300 (12”) 150 (6”) 	ABS 	Polished CP 	1 	30 1580', '5890', 1580, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	300 (12”) 	250 	ABS 	White 	- 	- 	840', '5886', 840, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'V12 H18 	32 (1-1/4”) 	450 (18”) 300 (12”) 	Brass 	Polished CP 	1 	12 2890', '5896', 2890, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'V18 H18 	32 (1-1/4”) 	450 (18”) 450 (18”) 	Brass 	Polished CP 	1 	12 3150', '5897', 3150, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	300 (12”) 225 (9”) 	ABS 	Polished CP 	- 	- 	1240', '5910', 1240, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.12 X 25 	Bottle and P trap Flat Washer (25pcs) Nut size 32mm 	-', '5790', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'V18 H9 	32 (1-1/4”) 	225 (9”) 450 (18”) 	Brass 	Polished CP 	1 	25 2700', '5892', 2700, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'V12 H12 	40 (1-1/2”) 	300 (12”) 300 (12”) 	Brass 	Polished CP 	1 	25 3750', '5898', 3750, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) Inner 300 (12”) 300 (12”) Polypropylene (PP) 	White 	1 35 398', '5915', 398, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	Inner 	300 (12”) 	ABS 	Polished 	1 	25 	675', '5920', 675, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '40 (1-1/2”) 	Rubber 	Black 	1 	25 	35', '5955', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) Outer 	15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	40 	1495', '6183', 1495, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'PS 	15 (1/2”) Outer 15 (1/2”) Outer 	Brass 	Polished CP 	1 	38 2890', '6185', 2890, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '110 	Rubber 	Black 	1 	60 	70', '5957', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	15 (1/2”) 	Outer 	Brass 	Polished CP 	-', '6201', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	120 	1105', '6212', 1105, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '32 (1-1/4”) 	Outer 	75 (3”) 	Brass 	Polished CP 	1 	240 720', '6242', 720, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	30 	-', '6203', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'M 15 (1/2”) 	Outer 	15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	60 	650', '6232', 650, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	90 	640', '6320', 640, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	64 	690', '6340', 690, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	50 	395', '6332', 395, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	80 	640', '6330', 640, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ', लजससे जल्�ी सूखतौा हैं	ै' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '5  PER', 'LITER', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = '• WATER FLOW-' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Brass 	Nickel Plated 	1 	56 	725', '6350', 725, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MINTUE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Mild Steel 	Zinc Plated - Silver 	1 	154 	125', '6353', 125, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MINTUE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'G  	15 (1/2”) 	600 (24”) 	Brass 	Gold PVD 	1 	40 	-', '7004', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MINTUE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	900 (36”) 	Brass 	Polished CP 	1 	40 	770', '7006', 770, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MINTUE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	1200 (48”) 	Brass 	Polished CP 	1 	40 	770', '7008', 770, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MINTUE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'White 	12 	60 	460', '6355', 460, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MINTUE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	600 (24”) 	Brass 	Polished CP 	1 	65 	615', '7014', 615, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MINTUE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	900 (36”) 	Brass 	Polished CP 	1 	65 	635', '7016', 635, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MINTUE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	1200 (48”) 	Brass 	Polished CP 	1 	65 	620', '7018', 620, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MINTUE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'SS 304 	Brushed 	1 	6 	7950', '6450', 7950, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MINTUE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'ABS 	Polished CP 	1 	154 	110', '7182', 110, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MINTUE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'RG  	ABS 	Rose Gold 	1 	36 	460', '7185', 460, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MINTUE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'ABS 	White 	1 	36 	65', '7190', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MINTUE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Brass 	Polished CP 	40 	360 	270', '7202', 270, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MINTUE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	65 (2-1/2”) 	Brass 	Polished CP 	1 	36 	840', '7203', 840, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MINTUE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	ABS 	Polished CP 	1 	48 	960', '7280', 960, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MINTUE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	TPV 	Grey 	- 	- 	760', '7207', 760, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MINTUE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.01 X 1 	Health Faucet without Hook 	1002', '7388', 1002, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MINTUE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Health Faucet 	1640', '7383', 1640, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MINTUE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	1000 (40”/ 1m) 	ABS 	Polished CP 	1 	18 	1360', '7390', 1360, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MINTUE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'RG  15 (1/2”) 	1000 (40”/ 1m) 	ABS 	Rose Gold 	1 	40 2980', '7395', 2980, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	ABS 	Polished CP 	1 	40 	1220', '7495', 1220, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.01 X 1 	Health Faucet Sleek without Hook 	620', '7480', 620, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) Outer 1000 (40”/ 1m) 	ABS 	Polished CP 1 30 1390', '7392', 1390, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	1000 (40”/ 1m) 	ABS 	White 	1 	40 	740', '7605', 740, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.01 X1 	Health Faucet - without Hose, Without Hook 	485', '7600', 485, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) Inner 15 (1/2”) Inner 	1000 (40”/ 1m) 	SS 304 	CP 	20 80 	560', '8014', 560, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'BL  15 (1/2”) Inner 15 (1/2”) Inner 1250 (50”/1.25 m) SS 304 	Matt Black 15 60 1490', '8015', 1490, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) Inner 15 (1/2”) Inner 	1500 (60”/1.5m ) 	SS 304 	CP 	15 60 	610', '8016', 610, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'RG  15 (1/2”) Inner 15 (1/2”) Inner 	2000 (80”) 	SS 304 	Rose Gold 10 40 2390', '8018', 2390, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) Inner 15 (1/2”) Inner 	1000 (40”/ 1m) 	PVC 	Silver 	1 	65 	430', '8024', 430, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) Inner 15 (1/2”) Inner 1250 (50”/1.25 m) 	PVC 	White 	1 	65 132', '8050', 132, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	1000 (40”/ 1m) 	ABS 	Polished CP 	1 	30 	1070', '7542', 1070, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Lever & Hook Only 	450', '7540', 450, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Brass 	Polished CP 	1 	36 	530', '8078', 530, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'RG  	15 (1/2”) 	2000 (80”) 	ABS 	Rose Gold 	1 	38 	3790', '8142', 3790, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	2000 (80”) 	ABS 	Polished CP 	1 	38 	1850', '8136', 1850, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Handshower n Hook Only 	1120', '8137', 1120, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	2000 (80”) 	ABS 	Polished CP 	1 	38 	1330', '8203', 1330, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Hand Shower - Milano with hook 	670', '8201', 670, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	150 (6”) 	ABS 	Polished CP 	1 	45 	1290', '8276', 1290, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) Inner 	225 (9”) 	150 (6”) 	SS 304 	Polished 	1 	11 	2240', '8412', 2240, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) Inner 300 (12”) 	200 (8”) 	SS 304 	Polished 	1 	13 	3930', '8413', 3930, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	150 (6”) 	SS 304 	Polished 	1 	16 	1390', '8418', 1390, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	200 (8”) 	SS 304 	Polished 	1 	14 	1980', '8420', 1980, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	250 (10”) 	SS 304 	Polished 	1 	7 	3190', '8421', 3190, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	300 (12”) 	SS 304 	Polished 	1 	8 	3830', '8422', 3830, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	150 (6”) 	150 (6”) 	SS 304 	Polished 	1 	16 	1450', '8425', 1450, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	200 (8”) 	200 (8”) 	SS 304 	Polished 	1 	14 	1980', '8426', 1980, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	250 (10”) 250 (10”) 	SS 304 	Polished 	1 	7 	3190', '8428', 3190, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	300 (12”) 300 (12”) 	SS 304 	Polished 	1 	8 	3830', '8430', 3830, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	150 (6”) 	SS 304 	Polished 	1 	16 	1390', '8432', 1390, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'RG  	15 (1/2”) 	200 (8”) 	SS 304 	Rose Gold 	1 	14 	3950', '8433', 3950, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	250 (10”) 	SS 304 	Polished 	1 	7 	3190', '8434', 3190, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	300 (12”) 	SS 304 	Polished 	1 	8 	3830', '8435', 3830, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	150 (6”) 	150 (6”) 	SS 304 	Polished 	1 	16 	1390', '8438', 1390, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'FG  	15 (1/2”) 	200 (8”) 	200 (8”) 	SS 304 	French Gold 	1 	14 	3950', '8441', 3950, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 250 (10”) 250 (10”) 	SS 304 	Polished 	1 	7 	3190', '8442', 3190, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'FG  	15 (1/2”) 300 (12”) 300 (12”) 	SS 304 	French Gold 	1 	8 	6080', '8444', 6080, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'RG  	15 (1/2”) 400 (16”) 400 (16”) 	SS 304 	Rose Gold 	1 	5 	15500', '8445', 15500, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) Inner 	150 (6”) 	150 (6”) 	ABS 	Polished CP 	1 	100 2590', '8601', 2590, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) Inner 	100 (4”) 	100 (4”) 	ABS 	Polished CP 	1 	10 	1350', '8601A', 1350, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	175 (7”) 	175 (7”) 	ABS 	Polished CP 	1 	100 2290', '8602', 2290, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 250 (10”) 250 (10”) 	ABS 	Polished CP 	1 	36 	3180', '8604', 3180, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	100 (4”) 	100 (4”) 	ABS 	Polished CP 	1 	16 	580', '8603', 580, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	150 (6”) 	150 (6”) 	ABS 	Polished CP 	1 	14 	850', '8605', 850, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 100 (4”) 	ABS 	Polished CP 	1 	40 	1620', '8542', 1620, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	ABS 	Polished CP 	1 	100 	630', '8520', 630, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Inner 	200 (8”) 	ABS 	Polished CP 	1 	7 	1890', '8616', 1890, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	300 (12”) 	Brass 	Polished CP 	1 	40 	1300', '8702', 1300, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	375 (15”) 	Brass 	Polished CP 	1 	18 	1590', '8703', 1590, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'FG  	15 (1/2”) 	Outer 	450 (18”) 	Brass 	French Gold 	1 	16 	3650', '8704', 3650, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	600 (24”) 	Brass 	Polished CP 	2380', '8706', 2380, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	175 (7”) 	45 	SS 201 	Polished CP 	220', '8707', 220, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	225 (9”) 	45 	SS 201 	Polished CP 	295', '8708', 295, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 300 (12”) 	90 	SS 201 	Polished CP 	455', '8710', 455, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 375 (15”) 	90 	SS 201 	Polished CP 	520', '8711', 520, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 450 (18”) 	90 	SS 201 	Polished CP 	580', '8712', 580, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 600 (24”) 	90 	SS 201 	Polished CP 	1 	40 	740', '8713', 740, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) Outer 	225 (9”) 	90 	SS 201 	Polished CP 	1 	40 	335', '8730', 335, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) Outer 300 (12”) 	90 	SS 201 	Polished CP 	1 	18 	440', '8731', 440, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) Outer 375 (15”) 	90 	SS 201 	Polished CP 	1 	18 	560', '8732', 560, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) Outer 450 (18”) 	90 	SS 201 	Polished CP 	2 	32 	695', '8733', 695, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) Outer 600 (24”) 	90 	SS 201 	Polished CP 	1 	40 	870', '8734', 870, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	300 (12”) 	90 	SS 304 	Polished CP 	1 	40 	990', '8714', 990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	375 (15”) 	90 	SS 304 	Polished CP 	1 	40 	1130', '8715', 1130, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'FG  	15 (1/2”) 	Outer 	450 (18”) 	90 	SS 304 	French Gold 	1 	16 	2990', '8716', 2990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Bronze 1 	24', '2990', 2990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	600 (24”) 	90 	SS 304 	Polished CP 	1 	40 	1480', '8717', 1480, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) Outer 	225 (9”) 	45 	SS 201 	Polished CP 	375', '8718', 375, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) Outer 300 (12”) 	45 	SS 201 	Polished CP 	1 	18 	475', '8719', 475, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) Outer 375 (15”) 	90 	SS 201 	Polished CP 	1 	18 	650', '8720', 650, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'S4 	15 (1/2”) Outer 450 (18”) 	90 	SS 304 	Polished CP 	2 	28 	960', '8722', 960, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) Outer 600 (24”) 	90 	SS 201 	Polished CP 	1 	40 	895', '8724', 895, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'BL  	15 (1/2”) 	Outer 	450 (18”) 	Brass 	Matt Black 	1 	16 3290', '8784', 3290, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	600 (24”) 	Brass 	Polished CP 	10 60 3250', '8785', 3250, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) Outer 	225 (9”) 	90 	SS 201 	Polished CP 	1 	40 	335', '8740', 335, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) Outer 300 (12”) 	90 	SS 201 	Polished CP 	1 	18 	440', '8741', 440, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) Outer 375 (15”) 	90 	SS 201 	Polished CP 	1 	18 	560', '8742', 560, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) Outer 450 (18”) 	90 	SS 201 	Polished CP 	2 	32 	695', '8743', 695, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) Outer 600 (24”) 	90 	SS 201 	Polished CP 	1 	15 	870', '8744', 870, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	170 (6-3/4”) 	Brass 	Polished CP 	5 	90 	655', '8805', 655, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	120(4-3/4”) 	SS 304 	Polished CP 	5 	190 370', '8813', 370, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	180 	SS 304 	Polished CP 	1 	45 	490', '8814', 490, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	200 (8”) 	Brass 	Polished CP 	1 	40 	770', '8815', 770, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	Brass 	Polished CP 	1 	40 	2295', '8875', 2295, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	300 (12”) 	Brass 	Polished CP 	1 	32 	1390', '8890', 1390, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'G  	15 (1/2”) 	Outer 	450 (18”) 	Brass 	Gold PVD 	1 	16 	3780', '8892', 3780, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Outer 	600 (24”) 	Brass 	Polished CP 	1 	30 	3510', '8894', 3510, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'M 12 	Outer 	160 (6-1/4”) 	Multiple Material 	Multiple Finishes 	1 	35 	820', '9480', 820, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'M 12 	Outer 	225 (9”) 	Multiple Material 	Multiple Finishes 	1 	30 	790', '9481', 790, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'M 12 	Outer 	Multiple Material 	Multiple Finishes 	1 	48 	680', '9486', 680, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'M 12 	Outer 	160 (6-1/4”) 	SS 201 	Steel 	1 	48 	405', '9495', 405, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'M 12 	Outer 	180 	SS 201 	Steel 	1 	48 	420', '9495-180', 420, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'M 12 	Outer 	225 (9”) 	SS 201 	Steel 	1 	35 	470', '9496', 470, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'M 12 	Outer 	260 	SS 201 	Steel 	1 	48 	540', '9496-260', 540, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'M 12 	Outer 	160 (6-1/4”) 	Mild Steel 	CP 	1 	44 	235', '9498', 235, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.10 X 6 	Flanged Bush (Pack of 6) 	95', '9490', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'M 12 	Outer 	225 (9”) 	SS 201 	Steel 	1 	40 	595', '9491', 595, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'M 12 	Outer 	300 (12”) 	SS 201 	Steel 	1 	40 	670', '9492', 670, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '16 (5/8”) 	160 (6-1/4”) 	SS 201 	Steel 	1 	35 	730', '9501', 730, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '16 (5/8”) 	225 (9”) 	SS 201 	Steel 	1 	48 	820', '9502', 820, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'CI 	Painted 	15 	180 	1290', '9546', 1290, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '16 (5/8”) 	160 (6-1/4”) 	Mild Steel 	CP 	1 	35 	480', '9505', 480, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '16 (5/8”) 	225 (9”) 	Mild Steel 	CP 	5 	580', '9506', 580, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '16 (5/8”) 	300 (12”) 	Mild Steel 	CP 	1 	40 	680', '9506-300', 680, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '16 (5/8”) 	160 (6-1/4”) 	Mild Steel 	CP 	5 	40 	310', '9507', 310, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '16 (5/8”) 	225 (9”) 	Mild Steel 	CP 	1 	42 	370', '9508', 370, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '16 (5/8”) 	160 (6-1/4”) 	SS 201 	Steel 	1 	35 	920', '9521', 920, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '16 (5/8”) 	225 (9”) 	SS 304 	Steel 	1 	2 	990', '9523', 990, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '10 (3/8”) 	115 (4-1/2”) 	SS 201 	Steel 	20 	200 	265', '9601', 265, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '40 (1-1/2”) 	Brass 	Polished CP 	15 	165 	235', '9590', 235, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '75 (3”) 	SS 304 	Raw 	10 	120 	75', '9598', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '10 (3/8”) 	115 (4-1/2”) 	Mild Steel 	CP 	20 	200 	132', '9609', 132, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Rack Bolt Screw-Pair 	140', '9609-140', 140, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '10 (3/8”) 	115 (4-1/2”) 	Mild Steel 	CP 	10 	150 	75', '9615', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '10 (3/8”) 	140 	Mild Steel 	CP 	25 	225 	90', '9618', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '10 (3/8”) 	100 (4”) 25 (1”) 	Mild Steel 	Zinc Plated - Silver 	70 	980 	68', '9624', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '75 (3”) 	Brass 	Brass 	25 	500 	76', '9951', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '100 (4”) 	Brass 	Brass 	1 	54 	94', '9961', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '8 	SS 304 	Polished CP 	1 	40 	360', '9991', 360, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '45 	175 (7”) 	Polypropylene (PP) 	Black 	1 	35 	90', '10308', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '45 	300 (12”) 	Polypropylene (PP) 	Black 	2 	60 	155', '10310', 155, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Brass 	Polished CP 	1 	30 	1180', '10715', 1180, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Brass 	Polished CP 	2 	60 	1290', '10724', 1290, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '15 (1/2”) 	Brass 	Polished CP 	2 	60 	1130', '10730', 1130, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Fits 10738 & 10739 or', '10736', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Taps (, M24)', 'F22', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.51 X 1 	Aerator (Without Metal Body) & Washer Only 	135', '10737', 135, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Continental Prime 	/10734 	10733/10734 	10733 	10733 	10733', '10733', 10733, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'M 18 X 1 	1.8L/Min 	Brass 	Polished CP 	40 	800 	290', '10734', 290, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'शल�शालॉी।' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'M 24 X 1 	Brass 	Polished CP 	50 	600 	64', '10739', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '.51 X 1 	Aerator without Housing 	75', '10741', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'M 20 	Brass 	Polished CP 	40 	800 	140', '10735', 140, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SUITABLE FOR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
