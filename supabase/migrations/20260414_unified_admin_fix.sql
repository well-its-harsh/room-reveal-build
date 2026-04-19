-- Comprehensive Fix for Admin/Owner Permissions across all core tables

-- 1. AR_ASSETS
DROP POLICY IF EXISTS "Auth users can modify ar_assets" ON public.ar_assets;
DROP POLICY IF EXISTS "Admins can do everything on ar_assets" ON public.ar_assets;

CREATE POLICY "Admins and Owners manage ar_assets" ON public.ar_assets
  FOR ALL TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE profiles.id = auth.uid() 
      AND (profiles.role = 'owner' OR profiles.role = 'admin')
    )
  );

-- 2. PRODUCT_MEDIA
DROP POLICY IF EXISTS "Auth users can modify product_media" ON public.product_media;
DROP POLICY IF EXISTS "Admins can do everything on product_media" ON public.product_media;

CREATE POLICY "Admins and Owners manage product_media" ON public.product_media
  FOR ALL TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE profiles.id = auth.uid() 
      AND (profiles.role = 'owner' OR profiles.role = 'admin')
    )
  );

-- 3. PRODUCTS (Ensuring write access)
DROP POLICY IF EXISTS "Admins can do everything on products" ON public.products;
CREATE POLICY "Admins and Owners manage products" ON public.products
  FOR ALL TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE profiles.id = auth.uid() 
      AND (profiles.role = 'owner' OR profiles.role = 'admin')
    )
  );

-- 4. STORAGE (product-models bucket for AR files)
INSERT INTO storage.buckets (id, name, public) 
VALUES ('product-models', 'product-models', true)
ON CONFLICT (id) DO NOTHING;

DROP POLICY IF EXISTS "Admin can upload to product-models" ON storage.objects;
CREATE POLICY "Admin can upload to product-models" ON storage.objects
  FOR INSERT TO authenticated 
  WITH CHECK (bucket_id = 'product-models' AND (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'owner' OR role = 'admin'))));

DROP POLICY IF EXISTS "Public can view product-models" ON storage.objects;
CREATE POLICY "Public can view product-models" ON storage.objects
  FOR SELECT TO public
  USING (bucket_id = 'product-models');
