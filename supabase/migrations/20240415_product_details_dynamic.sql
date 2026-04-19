-- Add enhanced detail columns to products table
ALTER TABLE public.products 
    ADD COLUMN IF NOT EXISTS features text,
    ADD COLUMN IF NOT EXISTS specifications text,
    ADD COLUMN IF NOT EXISTS additional_info text,
    ADD COLUMN IF NOT EXISTS care_maintenance text,
    ADD COLUMN IF NOT EXISTS bulk_discount_info text DEFAULT 'Extra 5% off on bulk orders';

-- Update existing products with default values if they are null (optional, but good for UX)
UPDATE public.products 
SET features = 'Expertly crafted with corrosion-resistant materials. Engineered for optimal ergonomics and lasting brilliance in high-moisture environments.'
WHERE features IS NULL;

UPDATE public.products 
SET specifications = 'Material: Premium Brass\nInstallation: Deck Mounted\nOrigin: Sourced Globally'
WHERE specifications IS NULL;

UPDATE public.products 
SET additional_info = 'Package includes installation manual, core components, and a 5-year trusted warranty certificate.'
WHERE additional_info IS NULL;

UPDATE public.products 
SET care_maintenance = 'Clean with a soft microfiber cloth and mild soap. Avoid abrasive cleaners or acidic solutions to protect the lacquer finish.'
WHERE care_maintenance IS NULL;
