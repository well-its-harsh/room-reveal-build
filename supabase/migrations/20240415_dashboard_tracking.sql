-- Add seen_by_owner to reviews and enquiries for dashboard notification tracking
ALTER TABLE public.reviews ADD COLUMN IF NOT EXISTS seen_by_owner boolean DEFAULT false;
ALTER TABLE public.enquiries ADD COLUMN IF NOT EXISTS seen_by_owner boolean DEFAULT false;
ALTER TABLE public.appointments ADD COLUMN IF NOT EXISTS seen_by_owner boolean DEFAULT false;

-- Create store_settings table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.store_settings (
    key text PRIMARY KEY,
    value text,
    updated_at timestamptz DEFAULT now()
);

-- Seed initial store settings if table was just created
INSERT INTO public.store_settings (key, value)
VALUES 
    ('store_name', 'Shree Radhe Tiles & Hardware'),
    ('email', 'contact@shreeradhe.com'),
    ('address', 'Near Main Market, Road No. 4, City Center'),
    ('gst', '09ABCDE1234F1Z5')
ON CONFLICT (key) DO NOTHING;
