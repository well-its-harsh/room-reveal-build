-- Ensure all columns used by the frontend exist in the products table
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS is_featured boolean DEFAULT false;
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS is_on_sale boolean DEFAULT false;
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS status text DEFAULT 'active';
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS sort_order integer DEFAULT 1000;
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS is_new_arrival boolean DEFAULT false;
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS ar_enabled boolean DEFAULT false;

-- Add indexes for performance
CREATE INDEX IF NOT EXISTS idx_products_featured ON public.products(is_featured) WHERE is_featured = true;
CREATE INDEX IF NOT EXISTS idx_products_status ON public.products(status);
