CREATE TABLE IF NOT EXISTS public.areas (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  image_url text,
  hero_image_url text,
  sort_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.categories (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  area_id uuid REFERENCES public.areas(id) ON DELETE CASCADE,
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  image_url text,
  sort_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.subcategories (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  category_id uuid REFERENCES public.categories(id) ON DELETE CASCADE,
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  sort_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.areas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subcategories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to active areas" ON public.areas FOR SELECT USING (is_active = true);
CREATE POLICY "Allow owner full access to areas" ON public.areas FOR ALL USING (auth.jwt() ->> 'role' = 'owner');

CREATE POLICY "Allow public read access to active categories" ON public.categories FOR SELECT USING (is_active = true);
CREATE POLICY "Allow owner full access to categories" ON public.categories FOR ALL USING (auth.jwt() ->> 'role' = 'owner');

CREATE POLICY "Allow public read access to active subcategories" ON public.subcategories FOR SELECT USING (is_active = true);
CREATE POLICY "Allow owner full access to subcategories" ON public.subcategories FOR ALL USING (auth.jwt() ->> 'role' = 'owner');

-- Add taxonomy fields to products tracking
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS area_id uuid REFERENCES public.areas(id) ON DELETE SET NULL;
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS subcategory_id uuid REFERENCES public.subcategories(id) ON DELETE SET NULL;
