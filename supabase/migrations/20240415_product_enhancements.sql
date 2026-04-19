-- 1. Create product_variants table if not exists with all requested columns
CREATE TABLE IF NOT EXISTS public.product_variants (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    product_id uuid REFERENCES public.products(id) ON DELETE CASCADE,
    name text NOT NULL,
    sku text,
    color text,
    finish text,
    size text,
    material text,
    original_price numeric,
    discounted_price numeric,
    stock_quantity integer DEFAULT 0,
    is_default boolean DEFAULT false,
    sort_order integer DEFAULT 0,
    created_at timestamptz DEFAULT now()
);

-- 2. Add missing columns to products table if they don't exist
ALTER TABLE public.products 
    ADD COLUMN IF NOT EXISTS original_price numeric,
    ADD COLUMN IF NOT EXISTS discounted_price numeric,
    ADD COLUMN IF NOT EXISTS discount_percentage integer DEFAULT 0,
    ADD COLUMN IF NOT EXISTS is_on_sale boolean DEFAULT false,
    ADD COLUMN IF NOT EXISTS sale_label text,
    ADD COLUMN IF NOT EXISTS sale_ends_at timestamptz,
    ADD COLUMN IF NOT EXISTS area_id uuid REFERENCES public.areas(id),
    ADD COLUMN IF NOT EXISTS subcategory_id uuid REFERENCES public.subcategories(id);

-- 3. Enable RLS for variants
ALTER TABLE public.product_variants ENABLE ROW LEVEL SECURITY;

-- 4. Create RLS Policies for variants
DROP POLICY IF EXISTS "Public can view variants" ON public.product_variants;
CREATE POLICY "Public can view variants" ON public.product_variants
    FOR SELECT USING (true);

DROP POLICY IF EXISTS "Admins and Owners manage variants" ON public.product_variants;
CREATE POLICY "Admins and Owners manage variants" ON public.product_variants
    FOR ALL TO authenticated
    USING (
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE profiles.id = auth.uid() 
            AND (profiles.role = 'owner' OR profiles.role = 'admin')
        )
    );

-- 5. Create Database Function for view count increment (referenced in ProductDetail.tsx)
CREATE OR REPLACE FUNCTION public.increment_view_count(product_id uuid)
RETURNS void AS $$
BEGIN
    UPDATE public.products
    SET view_count = COALESCE(view_count, 0) + 1
    WHERE id = product_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 6. Add view_count column to products if missing
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS view_count integer DEFAULT 0;
