-- Add sort_order and is_new_arrival to products table
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS sort_order integer DEFAULT 0;
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS is_new_arrival boolean DEFAULT false;

-- Update RLS if needed (usually already covered by generic policies, but for safety)
-- Assuming admin/owner has access as per existing patterns
