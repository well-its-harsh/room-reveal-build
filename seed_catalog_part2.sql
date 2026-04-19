-- Catalog Seed Part 2 - 2026-04-10T20:40:01.574Z

-- 2. INSERT PRODUCTS (PART 2)
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '', '330', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '118', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '*', 'KAJ0491', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COUNTER TOP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KAJ0489', 'KAJ0489', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KAJ0490', 'KAJ0490', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KAJ0488', 'KAJ0488', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KAJ0487', 'KAJ0487', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product 340', '340', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '', '610', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ')', 'KAJ0528-MC', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '160', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KAJ0454-MG', 'KAJ0454-MG', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KAJ0454-MB', 'KAJ0454-MB', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KAJ0454-MGR', 'KAJ0454-MGR', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KAJ0454-MC', 'KAJ0454-MC', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '*', 'KAJ0454-MW', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KAJ0454', 'KAJ0454', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KAJ0454-GR', 'KAJ0454-GR', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KGP20019-RGR', 'KGP20019-RGR', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KGP20019-GR', 'KGP20019-GR', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '121', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KAJ0455-MG', 'KAJ0455-MG', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KAJ0455-MB', 'KAJ0455-MB', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KAJ0455-MGR', 'KAJ0455-MGR', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KAJ0455-MC', 'KAJ0455-MC', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '*', 'KAJ0455-MW', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KAJ0455', 'KAJ0455', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KAJ0455-GR', 'KAJ0455-GR', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product 520', '520', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COUNTER TOP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product 385', '385', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COUNTER TOP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KAJ0456-MG', 'KAJ0456-MG', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KAJ0456-MB', 'KAJ0456-MB', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KAJ0456-MGR', 'KAJ0456-MGR', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KAJ0456-MC', 'KAJ0456-MC', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '*', 'KAJ0456-MW', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KAJ0456', 'KAJ0456', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KAJ0456-GR', 'KAJ0456-GR', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '123', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'White Per Piece `', '420', 420, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SANITARYWARE ACCESSORIES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '*', 'KAJ0457-MG', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '*', 'KAJ0457-MB', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '*', 'KAJ0457-MC', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '*', 'KAJ0457-MW', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '124', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '*', 'KAJ0517-MG', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COUNTER TOP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '*', 'KAJ0516-MW', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '*', 'KAJ0515-MB', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product 605', '605', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '', '405', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = ' I N K 	B O 	 E' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KSP276-GW', 'KSP276-GW', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product 395', '395', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KSP276-GB', 'KSP276-GB', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KAJ0364-MW', 'KAJ0364-MW', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = '(COMPATIBLE POP-UP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '130', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '126', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KGP21086-GR', 'KGP21086-GR', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WASH BASIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KGP21086-RGR', 'KGP21086-RGR', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WASH BASIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '127', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KGP20002-GR', 'KGP20002-GR', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COUNTER TOP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KGP20002-RGR', 'KGP20002-RGR', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WASH BASIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KGP20012-GR', 'KGP20012-GR', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WASH BASIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KGP20012-RGR', 'KGP20012-RGR', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WASH BASIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KGP21090-GR', 'KGP21090-GR', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COUNTER TOP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '128', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KGP21090-RGR', 'KGP21090-RGR', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COUNTER TOP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KGP20004-MNB', 'KGP20004-MNB', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WASH BASIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KGP20005-MNB', 'KGP20005-MNB', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WASH BASIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KGP21090-MNB', 'KGP21090-MNB', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WASH BASIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '129', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KGP20016-GB', 'KGP20016-GB', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COUNTER TOP' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KGP20018-GB', 'KGP20018-GB', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WASH BASIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product 435', '435', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WASH BASIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product 455', '455', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WASH BASIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '40 M/S  	Black Grey 1 	4 	12950', 'ABS', 12950, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HEAIN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '131', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'SANITARYWARE WARRANTY CHART', 'KEROVIT', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WARRANTY' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Float Ball White First Grade', 'PVC', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SS FLANGES' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '132', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '133', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '134', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ': SCO 45-46-47,', 'CHANDIGARH', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SOUTH' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Chandigarh -', '160017', 160017, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SOUTH' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ': 022 62511210/11/12', 'TEL', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WEST' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'M : +91 , +91 9779575488', '9779021250', 9779575488, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EAST' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ': MJ Business Park,', 'INDORE', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SOUTH' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ', PU-4, Sch. No. 54,', '402', 54, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SOUTH' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Indore, M.P. -', '452010', 452010, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SOUTH' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'M : +91', '7042902211', 7042902211, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SOUTH' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ': Farah Icon, 119, 3rd Floor,', 'BANGALORE', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SOUTH' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Bangalore, Karnataka -', '560027', 560027, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SOUTH' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'M : +91', '9311091417', 9311091417, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SOUTH' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ': 1 st Floor, E-2/69, Arera Colony,', 'BHOPAL', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SOUTH' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Bhopal, M.P. -', '462016', 462016, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SOUTH' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'M : +91', '9717011269', 9717011269, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SOUTH' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ': Rajah Annamalai Building,', 'CHENNAI', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SOUTH' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Egmore, Chennai-', '600008', 600008, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SOUTH' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9003000192', 9003000192, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WAYANAD' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ': Shining Tower', 'TRIVANDRUM', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SOUTH' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Kazhakoottam, Trivandrum, Kerala -', '695585', 695585, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SOUTH' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ': 3rd Floor, Prism Building', 'CALICUT', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SOUTH' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'M : +91 , +91 9746473681', '9650589830', 9746473681, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SOUTH' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ': No. 20, Venkatasamy', 'COIMBATORE', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SOUTH' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Tamil Nadu-', '641002', 641002, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SOUTH' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'M : +91', '7338899149', 7338899149, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SOUTH' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ': 2 nd Floor, Vamsiram Jyothi', 'HYDERABAD', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SOUTH' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Hyderabad -', '500033', 500033, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SOUTH' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'M : +91', '7680023383', 7680023383, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SOUTH' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ': 1st Floor, Block B1, Pujari', 'RAIPUR', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SOUTH' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Chhattisgarh -', '492001', 492001, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SOUTH' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Dehradun, Uttarakhand -', '248001', 248001, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SOUTH' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '8755067499', 8755067499, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MYSORE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ': UGF - 1, Radhey Plaza,', 'LUCKNOW', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SOUTH' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Lucknow, Uttar Pradesh -', '226016', 226016, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SOUTH' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'M : +91 , +91 7388944666', '9936412277', 7388944666, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SOUTH' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ': 301, Business Park', 'KOLKATA', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EAST' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'West Bengal -', '700107', 700107, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'EAST' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ': Ground & 1st Floor, Suraksha', 'MUMBAI', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WEST' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '(East), Mumbai, Maharashtra -', '400059', 400059, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WEST' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'M : +91', '7710007223', 7710007223, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WEST' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Maharashtra -', '411005', 411005, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WEST' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'M : +91', '7710011676', 7710011676, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WEST' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ': Plot No. 10, Sarthak Plaza,', 'NAGPUR', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WEST' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Nagpur, Maharashtra -', '440022', 440022, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WEST' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ': 48/246/E and 48/246/E1,', 'COCHIN', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WEST' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Ernakulam -', '682019', 682019, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WEST' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ': Shri Govind Tower, 44,', 'JAIPUR', 44, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'DEHRADUN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'M : +91', '9001094842', 9001094842, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'DEHRADUN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Krishna Mandir, Jaipur, Rajasthan', '302019', 302019, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'DEHRADUN' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ': , D.S.K., Gandharv Heights,', '601', 0, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'NORTH 	CENTRAL' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9730007424', 9730007424, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GUNTUR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9266347744', 9266347744, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MYSORE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'M : +91', '8448984291', 8448984291, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'NORTH 	CENTRAL' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Kozhikode, Kerala -', '673016', 673016, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SOUTH' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Kerala -', '682024', 682024, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'NORTH 	CENTRAL' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9650507322', 9650507322, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GONDIA' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9724304164', 9724304164, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GONDIA' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '8448984293', 8448984293, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GONDIA' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9779079130', 9779079130, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GONDIA' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '8448529300', 8448529300, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GONDIA' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '8595903679', 8595903679, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GONDIA' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '8968344809', 8968344809, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GONDIA' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9311401815', 9311401815, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GONDIA' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '7428495137', 7428495137, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GONDIA' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9746473681', 9746473681, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GONDIA' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '8448827992', 8448827992, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WAYANAD' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9354922686', 9354922686, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GONDIA' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91 , +91 9311145191', '9717795002', 9311145191, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GONDIA' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91 , +91 7000752475', '8789458880', 7000752475, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MYSORE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9220305544', 9220305544, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GONDIA' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9746473635', 9746473635, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GONDIA' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9311212255', 9311212255, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GONDIA' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91 9311212257', 'GORAKHPUR', 9311212257, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'HIMACHAL' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9311145191', 9311145191, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MYSORE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '8383865471', 8383865471, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MYSORE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9910221743', 9910221743, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MYSORE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '7082207647', 7082207647, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MYSORE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91 , +91 8894141288', '9915330188', 8894141288, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MYSORE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9008402609', 9008402609, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MYSORE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91 , +91 9625992199', '9625992198', 9625992199, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MYSORE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91 , +91 9599198268', '8448984294', 9599198268, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MYSORE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9878011570', 9878011570, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MYSORE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '7219200478', 7219200478, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'VARANASI' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '8077825585', 8077825585, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MYSORE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '7002247203', 7002247203, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MYSORE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9599198271', 9599198271, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MYSORE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '7388945559', 7388945559, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MYSORE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '8448528600', 8448528600, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MYSORE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9746473688', 9746473688, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MYSORE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9746473637', 9746473637, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MYSORE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91 , +91 7009965235', '9354922708', 7009965235, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MYSORE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9289655767', 9289655767, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'VARANASI' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9008576363', 9008576363, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MYSORE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '8448845579', 8448845579, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MYSORE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9008100576', 9008100576, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'MYSORE' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '8130388644', 8130388644, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WAYANAD' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9599066402', 9599066402, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'NAGPUR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9931209521', 9931209521, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GONDIA' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9158356225', 9158356225, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'NAGPUR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91 , +91 8856879745', '9011334445', 8856879745, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'NAGPUR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9970012211', 9970012211, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WAYANAD' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9667911422', 9667911422, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'NAGPUR' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9289305588', 9289305588, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'NASHIK' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91 , +91 9266347744', '9007929208', 9266347744, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'NASHIK' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '8603789100', 8603789100, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'NANDED' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '8448172525', 8448172525, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'VARANASI' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91 , +91 911010215', '9934589429', 911010215, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'VARANASI' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9579792719', 9579792719, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'VARANASI' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9003082717', 9003082717, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'VARANASI' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '8637220797', 8637220797, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'VARANASI' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9724303685', 9724303685, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'VARANASI' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9354922688', 9354922688, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'VARANASI' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '7680000849', 7680000849, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'VARANASI' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9746473039', 9746473039, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'VARANASI' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9008754737', 9008754737, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'VARANASI' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '8511153387', 8511153387, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'VARANASI' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9289655766', 9289655766, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WAYANAD' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91 , +91 8130388233', '9839928000', 8130388233, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WAYANAD' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '7680000964', 7680000964, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WAYANAD' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9821344133', 9821344133, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WAYANAD' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '8448119897', 8448119897, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WAYANAD' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '9749371330', 9749371330, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WAYANAD' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '+91', '8448118084', 8448118084, 'Aurum', 'Extracted from Aurum Price List Feb 2026- AIEK-1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'WAYANAD' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '570 7800', '1800', 7800, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'NOW AT YOUR FINGERTIPS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product 9289077800', '9289077800', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'NOW AT YOUR FINGERTIPS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '--  of 172 --', '136', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COMMING SOON' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '02/', '2026-AIEK', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'NOW AT YOUR FINGERTIPS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'drain up to 1, litres daily. Across India, household leaks', '440', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'UNMATCHED QUALITY.' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'DESIRE MEETS RESPONSIBILITY.', 'WHERE', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN INNOVATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '6.0, 8.0 & 12', 'LPM', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'AIR SHOWER' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'TRANSPARENT TO ENVIRONMENT', 'TECHNOLOGY', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GREEN INNOVATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Cartridge from  - water saving', 'KEROX', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'CERTIFICATIONS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1011011', 'KB1011011', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'KB1011036', 'KB1011023', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1011017', 'KB1011017', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Height -  mm', '297', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'with )', 'KB111022', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB111034', 'KB111034', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'THERMO CONTROL' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1011010', 'KB1011010', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1011037', 'KB1011037', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1011005', 'KB1011005', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1011038', 'KB1011038', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB111035', 'KB111035', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'THERMO CONTROL' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1011002', 'KB1011002', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Height :  mm', '280', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1011004', 'KB1011004', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1011003', 'KB1011003', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1011001', 'KB1011001', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1011014', 'KB1011014', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1011016', 'KB1011016', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1011032', 'KB1011032', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB111012', 'KB111012', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'THERMO CONTROL' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB111007', 'KB111007', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'THERMO CONTROL' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB111008', 'KB111008', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'THERMO CONTROL' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB111060', 'KB111060', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'S-Trap :  mm Rough-in', '275', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'COUPLED CLOSET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB811011', 'KB811011', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'KB811037', 'KB811023', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB811017', 'KB811017', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '', '270', 0, 'Viking_priced_catalogue_2026.1.pdf', 'Extracted from Viking_priced_catalogue_2026.1.pdf', id, 'active', 99 
      FROM categories WHERE name = 'SEARCH RESULTS' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB811010', 'KB811010', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB811014', 'KB811014', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB811005', 'KB811005', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB811047', 'KB811047', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB811002', 'KB811002', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Height :  mm', '285', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB811004', 'KB811004', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB811003', 'KB811003', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB811001', 'KB811001', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB811036', 'KB811036', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB811016', 'KB811016', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB811032', 'KB811032', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB911011', 'KB911011', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'KB911014', 'KB911023', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB911004', 'KB911004', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Height :  mm', '268', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB911010', 'KB911010', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB911055', 'KB911055', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB911016', 'KB911016', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB911002', 'KB911002', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Height :  mm', '284', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB911036', 'KB911036', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'KB911065', 'KB911056', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB3WHCB003', 'KB3WHCB003', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB911017', 'KB911017', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB911001', 'KB911001', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB911037', 'KB911037', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB911005', 'KB911005', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB911047', 'KB911047', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB911003', 'KB911003', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB911032', 'KB911032', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB611011', 'KB611011', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'KB611037', 'KB611023', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ', KB611011,', 'KB611010', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB611014', 'KB611014', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB611005', 'KB611005', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ', KB611002,', 'KB611001', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ', KB611005,', 'KB611004', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Per Piece `', '3250', 3250, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB611002', 'KB611002', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB611036', 'KB611036', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB611016', 'KB611016', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Height :  mm', '244', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB611017', 'KB611017', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB611038', 'KB611038', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB611003', 'KB611003', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB611032', 'KB611032', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB511011', 'KB511011', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB511023', 'KB511023', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB511014', 'KB511014', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ', KB511005,', 'KB511004', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB511065', 'KB511065', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Height :  mm', '261', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ', KB511011,', 'KB511010', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ', KB511019,', 'KB511018', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB511002', 'KB511002', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Height :  mm', '283', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB511019', 'KB511019', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB511036', 'KB511036', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB511005', 'KB511005', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ', KB511002,', 'KB511001', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB511021', 'KB511021', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB511037', 'KB511037', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ', KB1211028', 'KB511028', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB511043', 'KB511043', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ', KB1211024,', 'KB511024', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ', KB611038', 'KB511047', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ', KB1211025,', 'KB511025', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB511003', 'KB511003', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB511027', 'KB511027', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB511032', 'KB511032', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB111030', 'KB111030', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'THERMO CONTROL' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB511040', 'KB511040', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB411011', 'KB411011', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB411023', 'KB411023', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'KB411037', 'KB411021', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ', KB411011,', 'KB411010', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ', KB411019,', 'KB411018', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB411014', 'KB411014', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'KB411065', 'KB411058', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB111057', 'KB111057', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'THERMO CONTROL' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB411002', 'KB411002', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB411019', 'KB411019', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB411044', 'KB411044', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ', KB411002,', 'KB411001', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB411020', 'KB411020', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB411036', 'KB411036', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB411005', 'KB411005', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ', KB411005,', 'KB411004', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB411025', 'KB411025', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB411040', 'KB411040', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB411027', 'KB411027', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB411003', 'KB411003', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB411028', 'KB411028', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB411032', 'KB411032', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB411024', 'KB411024', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB411047', 'KB411047', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB411043', 'KB411043', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'KB1711025', 'KB1711004', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'KB1711017', 'KB1711016', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1711011', 'KB1711011', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1711023', 'KB1711023', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1711014', 'KB1711014', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Height :  mm', '282', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1711010', 'KB1711010', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1711042', 'KB1711042', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1711036', 'KB1711036', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1511041', 'KB1511041', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'THERMO CONTROL' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1711002', 'KB1711002', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1711044', 'KB1711044', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1711037', 'KB1711037', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1711001', 'KB1711001', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1711045', 'KB1711045', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1711005', 'KB1711005', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1711043', 'KB1711043', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'KB1711038', 'KB1711040', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1711003', 'KB1711003', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1711032', 'KB1711032', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2711011', 'KB2711011', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2711010', 'KB2711010', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2711002', 'KB2711002', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2711001', 'KB2711001', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2711023', 'KB2711023', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2711042', 'KB2711042', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2711044', 'KB2711044', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2711045', 'KB2711045', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2711014', 'KB2711014', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2711036', 'KB2711036', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2711037', 'KB2711037', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2711005', 'KB2711005', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2711004', 'KB2711004', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2711025', 'KB2711025', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2711003', 'KB2711003', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2711032', 'KB2711032', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2711043', 'KB2711043', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'KB2711038', 'KB2711040', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB111011', 'KB111011', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB111023', 'KB111023', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB111020', 'KB111020', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB111014', 'KB111014', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Height :  mm', '267', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ', KB111011,', 'KB111010', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB111042', 'KB111042', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB111021', 'KB111021', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB111002', 'KB111002', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Height :  mm', '257', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ', KB111019,', 'KB111018', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ', KB411024,', 'KB111024', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB111036', 'KB111036', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ', KB111002,', 'KB111001', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB111019', 'KB111019', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB111058', 'KB111058', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB111037', 'KB111037', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'KB111065', 'KB111005', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '6 	Bath Tub Spout , KB611016,', 'KB111016', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '5 	Central Hole , KB411028,', 'KB111028', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB111043', 'KB111043', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ', KB111005,', 'KB111004', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB111017', 'KB111017', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ', KB411047,', 'KB111047', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB111033', 'KB111033', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ', KB411025,', 'KB111025', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB111003', 'KB111003', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB111040', 'KB111040', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB111027', 'KB111027', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB111032', 'KB111032', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1311010', 'KB1311010', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1311014', 'KB1311014', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1311019', 'KB1311019', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1311033', 'KB1311033', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1311023', 'KB1311023', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1311036', 'KB1311036', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1311021', 'KB1311021', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1311016', 'KB1311016', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1311001', 'KB1311001', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1311037', 'KB1311037', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1311005', 'KB1311005', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1311017', 'KB1311017', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1311042', 'KB1311042', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1311018', 'KB1311018', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1311004', 'KB1311004', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1311024', 'KB1311024', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1311025', 'KB1311025', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1311032', 'KB1311032', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1311028', 'KB1311028', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1311043', 'KB1311043', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1311040', 'KB1311040', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1311003', 'KB1311003', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ', KB2011010', 'KB1211010', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'KB1211023', 'KB1211014', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1511012', 'KB1511012', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'THERMO CONTROL' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'KB111022', 'KB1511022', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'THERMO CONTROL' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1211026', 'KB1211026', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ', KB1211019,', 'KB1211018', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1211029', 'KB1211029', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ', KB2011001', 'KB1211001', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1211005', 'KB1211005', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2111016', 'KB2111016', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'KB1211039', 'KB1211021', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT ', KB1211005,', 'KB1211004', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'GRIHA CERTIFICATION' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1211033', 'KB1211033', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1211024', 'KB1211024', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1211047', 'KB1211047', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1211028', 'KB1211028', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1211040', 'KB1211040', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1211003', 'KB1211003', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1211032', 'KB1211032', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1211025', 'KB1211025', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1511010', 'KB1511010', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1511042', 'KB1511042', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1511001', 'KB1511001', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1511014', 'KB1511014', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1511029', 'KB1511029', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1511018', 'KB1511018', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1511023', 'KB1511023', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1511019', 'KB1511019', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1511005', 'KB1511005', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1511017', 'KB1511017', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1511004', 'KB1511004', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1511028', 'KB1511028', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1511039', 'KB1511039', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1511038', 'KB1511038', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1511016', 'KB1511016', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1511025', 'KB1511025', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1511047', 'KB1511047', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1511043', 'KB1511043', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1511040', 'KB1511040', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1511003', 'KB1511003', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB1511032', 'KB1511032', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB111031', 'KB111031', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'THERMO CONTROL' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB3111010', 'KB3111010', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'KB3111014', 'KB3111001', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'KB3111063', 'KB3111037', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2011035', 'KB2011035', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'THERMO CONTROL' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB3111023', 'KB3111023', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB3111019', 'KB3111019', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB3111005', 'KB3111005', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB3111004', 'KB3111004', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB3111047', 'KB3111047', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB3111024', 'KB3111024', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'KB3111062', 'KB3111003', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB3111025', 'KB3111025', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2111010', 'KB2111010', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2111005', 'KB2111005', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'KB2111023', 'KB2111001', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2111039', 'KB2111039', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2111014', 'KB2111014', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2111019', 'KB2111019', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2111037', 'KB2111037', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2111025', 'KB2111025', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2111004', 'KB2111004', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2111033', 'KB2111033', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2111024', 'KB2111024', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2111040', 'KB2111040', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2111003', 'KB2111003', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2111047', 'KB2111047', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2111062', 'KB2111062', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2111032', 'KB2111032', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2011048', 'KB2011048', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'THERMO CONTROL' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2011010', 'KB2011010', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT 'Product KB2011005', 'KB2011005', 0, 'Price', 'Extracted from Price List 2026.pdf', id, 'active', 99 
      FROM categories WHERE name = 'FAUCET' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;
