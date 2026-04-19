-- FIX 6: Add is_approved and reviewer_city to reviews table
ALTER TABLE public.reviews ADD COLUMN IF NOT EXISTS is_approved boolean DEFAULT false;
ALTER TABLE public.reviews ADD COLUMN IF NOT EXISTS reviewer_city text;

-- FIX 10: Add ar_enabled to products table
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS ar_enabled boolean DEFAULT false;

-- Index for faster approved reviews lookup
CREATE INDEX IF NOT EXISTS idx_reviews_approved ON public.reviews (is_approved, product_id);
CREATE INDEX IF NOT EXISTS idx_products_ar_enabled ON public.products (ar_enabled);
