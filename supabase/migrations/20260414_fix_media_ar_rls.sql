-- Enable RLS
ALTER TABLE ar_assets ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_media ENABLE ROW LEVEL SECURITY;

-- Allow public read access to ar_assets
CREATE POLICY "Public read access for ar_assets"
ON ar_assets FOR SELECT TO public
USING (true);

-- Allow authenticated users (owners) to insert/update/delete ar_assets
CREATE POLICY "Auth users can modify ar_assets"
ON ar_assets FOR ALL TO authenticated
USING (true) WITH CHECK (true);

-- Allow public read access to product_media
CREATE POLICY "Public read access for product_media"
ON product_media FOR SELECT TO public
USING (true);

-- Allow authenticated users (owners) to insert/update/delete product_media
CREATE POLICY "Auth users can modify product_media"
ON product_media FOR ALL TO authenticated
USING (true) WITH CHECK (true);

-- Also ensure storage buckets have proper policies for product-models if not already
-- Example policy for storage insertion if needed, assuming owner can upload:
-- CREATE POLICY "Give users access to own folder product-models" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'product-models');
