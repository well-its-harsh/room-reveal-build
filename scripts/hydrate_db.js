import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import csv from 'csv-parser';

// FALLBACKS from src/lib/supabase.ts
const SUPABASE_URL = 'https://ulzqcpceklkwxzceykbd.supabase.co';
const SUPABASE_KEY = 'sb_publishable_-KnA9VtKNvf0uBm3LKxb8w_LGckjrZi'; // Replace with SERVICE_ROLE_KEY if RLS is enabled

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const CSV_FILE = './catalog_export.csv';

async function hydrate() {
  const products = [];
  
  // 1. Read CSV
  await new Promise((resolve) => {
    fs.createReadStream(CSV_FILE)
      .pipe(csv())
      .on('data', (data) => products.push(data))
      .on('end', resolve);
  });

  console.log(`Read ${products.length} products from CSV. Preparing to upsert...`);

  // 2. Fetch existing categories
  const { data: existingCats } = await supabase.from('categories').select('id, name');
  const catNamesMap = new Map(existingCats?.map(c => [c.name.toLowerCase(), c.id]) || []);
  
  const categoryNames = [...new Set(products.map(p => p.CATEGORY.trim()))];
  console.log(`Found ${categoryNames.length} unique categories in CSV.`);

  // 3. Ensure categories exist
  for (const name of categoryNames) {
    if (!name || name === 'General') continue;
    
    if (!catNamesMap.has(name.toLowerCase())) {
      const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const { data, error } = await supabase
        .from('categories')
        .insert({ name, slug })
        .select()
        .single();
      
      if (!error && data) {
        catNamesMap.set(name.toLowerCase(), data.id);
      } else if (error) {
        console.warn(`Warning: Could not insert category "${name}":`, error.message);
      }
    }
  }

  // 4. Final mapping
  const catMap = Object.fromEntries(Array.from(catNamesMap.entries()));

  // 5. Batch Upsert Products
  const batchSize = 100;
  for (let i = 0; i < products.length; i += batchSize) {
    const batch = products.slice(i, i + batchSize).map(p => ({
      name: p.NAME,
      sku: p.SKU,
      price: parseFloat(p.PRICE) || 0,
      category_id: catMap[p.CATEGORY],
      brand: p.BRAND,
      description: p.DESCRIPTION,
      status: 'active',
      inventory_count: 99 // Default for catalog items
    }));

    const { error } = await supabase
      .from('products')
      .upsert(batch, { onConflict: 'sku' });

    if (error) {
      console.error(`Error in batch ${i/batchSize}:`, error.message);
    } else {
      process.stdout.write(`Processed ${Math.min(i + batchSize, products.length)}/${products.length} products...\r`);
    }
  }

  console.log('\n\nHydration complete!');
}

hydrate().catch(console.error);
