CREATE TABLE IF NOT EXISTS public.featured_videos (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text,
  video_url text NOT NULL,
  thumbnail_url text,
  product_id uuid REFERENCES public.products(id) ON DELETE SET NULL,
  sort_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.featured_videos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Owner manages featured videos" ON public.featured_videos
  FOR ALL USING (auth.jwt() ->> 'role' = 'owner');

CREATE POLICY "Anyone can read active videos" ON public.featured_videos
  FOR SELECT USING (is_active = true);
