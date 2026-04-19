-- Fix RLS policies for featured_videos to allow both admin and owner roles
DROP POLICY IF EXISTS "Owner manages featured videos" ON public.featured_videos;

CREATE POLICY "Admins and Owners manage featured videos" ON public.featured_videos
  FOR ALL TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE profiles.id = auth.uid() 
      AND (profiles.role = 'owner' OR profiles.role = 'admin')
    )
  );

-- Ensure public can also see inactive ones in owner dashboard but public only sees active ones
-- Actually, the owner dashboard should use the policy above.
-- The public select policy:
DROP POLICY IF EXISTS "Anyone can read active videos" ON public.featured_videos;
CREATE POLICY "Public read active videos" ON public.featured_videos
  FOR SELECT USING (is_active = true OR (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'owner' OR role = 'admin'))));

-- STORAGE POLICIES
-- Allow authenticated users to upload to product-media bucket
INSERT INTO storage.buckets (id, name, public) 
VALUES ('product-media', 'product-media', true)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Admin can upload to product-media" ON storage.objects
  FOR INSERT TO authenticated 
  WITH CHECK (bucket_id = 'product-media' AND (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'owner' OR role = 'admin'))));

CREATE POLICY "Admin can update product-media" ON storage.objects
  FOR UPDATE TO authenticated 
  USING (bucket_id = 'product-media' AND (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'owner' OR role = 'admin'))));

CREATE POLICY "Public can view product-media" ON storage.objects
  FOR SELECT TO public
  USING (bucket_id = 'product-media');
