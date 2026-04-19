import fs from 'fs';
import path from 'path';
import { createObjectCsvWriter } from 'csv-writer';
import { PDFParse } from 'pdf-parse';

const CATALOG_DIR = './catalog';
const OUTPUT_FILE = './catalog_export.csv';

const csvWriter = createObjectCsvWriter({
  path: OUTPUT_FILE,
  header: [
    { id: 'name', title: 'NAME' },
    { id: 'sku', title: 'SKU' },
    { id: 'category', title: 'CATEGORY' },
    { id: 'price', title: 'PRICE' },
    { id: 'brand', title: 'BRAND' },
    { id: 'description', title: 'DESCRIPTION' },
  ]
});

async function parseCatalog() {
  const files = fs.readdirSync(CATALOG_DIR).filter(f => f.endsWith('.pdf'));
  let allProducts = [];

  console.log(`Found ${files.length} catalog PDFs. Starting extraction...`);

  for (const file of files) {
    const filePath = path.join(CATALOG_DIR, file);
    const dataBuffer = fs.readFileSync(filePath);
    const brandName = file.split(' ')[0] || 'Unknown';

    try {
      // Correct instantiation for the class-based pdf-parse
      const parser = new PDFParse({ data: dataBuffer });
      const textResult = await parser.getText();
      const text = textResult.text;
      const numPages = textResult.pages.length;
      
      console.log(`Processing ${file} (${numPages} pages)...`);

      const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 2);
      let currentCategory = 'General';
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line.length < 30 && line === line.toUpperCase() && !line.match(/\d/)) {
          currentCategory = line;
          continue;
        }

        const skuMatch = line.match(/\b([A-Z0-9]{3,10}(?:-[A-Z0-9]{1,5})?)\b/);
        
        if (skuMatch) {
          const sku = skuMatch[1];
          const namePart = line.replace(sku, '').trim();
          const name = namePart || `Product ${sku}`;
          
          let price = '0';
          const priceMatch = line.match(/(?:₹|Rs\.?|INR)\s*([\d,]{3,})/i) || line.match(/\s+([\d,]{3,})$/);
          if (priceMatch) {
            price = priceMatch[1].replace(/,/g, '');
          }

          allProducts.push({
            name: name.substring(0, 100),
            sku,
            category: currentCategory,
            price: isNaN(parseFloat(price)) ? '0' : price,
            brand: brandName,
            description: `Extracted from ${file}`
          });
        }
      }
    } catch (err) {
      console.error(`Error parsing ${file}:`, err.message);
    }
  }

  const uniqueProducts = Array.from(new Map(allProducts.map(p => [p.sku, p])).values());

  if (uniqueProducts.length > 0) {
    await csvWriter.writeRecords(uniqueProducts);
    console.log(`\nSUCCESS: Extracted ${uniqueProducts.length} unique items.`);
  } else {
    console.log('No products detected.');
  }
}

parseCatalog().catch(console.error);
