import fs from 'fs';
import csv from 'csv-parser';

const CSV_FILE = './catalog_export.csv';
const SQL_FILE = './seed_catalog.sql';

async function generateSQL() {
  const products = [];
  
  await new Promise((resolve) => {
    fs.createReadStream(CSV_FILE)
      .pipe(csv())
      .on('data', (data) => products.push(data))
      .on('end', resolve);
  });

  const categoryNames = [...new Set(products.map(p => p.CATEGORY.trim()))].filter(n => n && n !== 'General');
  
  const CHUNK_SIZE = 500;
  for (let i = 0; i < products.length; i += CHUNK_SIZE) {
    const chunk = products.slice(i, i + CHUNK_SIZE);
    const partNum = Math.floor(i / CHUNK_SIZE) + 1;
    const partFile = `./seed_catalog_part${partNum}.sql`;
    
    let sql = `-- Catalog Seed Part ${partNum} - ${new Date().toISOString()}\n\n`;
    
    if (i === 0) {
      sql += `-- 1. UPSERT CATEGORIES\n`;
      for (const name of categoryNames) {
        const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        sql += `INSERT INTO categories (name, slug) VALUES ('${name.replace(/'/g, "''")}', '${slug}') ON CONFLICT (name) DO NOTHING;\n`;
      }
      sql += `\n`;
    }

    sql += `-- 2. INSERT PRODUCTS (PART ${partNum})\n`;
    for (const p of chunk) {
      const name = p.NAME.replace(/'/g, "''");
      const sku = p.SKU.replace(/'/g, "''");
      const cat = p.CATEGORY.trim().replace(/'/g, "''");
      const price = parseFloat(p.PRICE) || 0;
      const brand = p.BRAND.replace(/'/g, "''");
      const desc = p.DESCRIPTION.replace(/'/g, "''");
      
      if (!sku) continue;

      sql += `INSERT INTO products (name, sku, price, brand, description, category_id, status, inventory_count) 
      SELECT '${name}', '${sku}', ${price}, '${brand}', '${desc}', id, 'active', 99 
      FROM categories WHERE name = '${cat}' 
      ON CONFLICT (sku) DO UPDATE SET 
        name = EXCLUDED.name, 
        price = EXCLUDED.price, 
        brand = EXCLUDED.brand, 
        description = EXCLUDED.description;\n`;
    }

    fs.writeFileSync(partFile, sql);
    console.log(`Generated: ${partFile}`);
  }
}

generateSQL().catch(console.error);
