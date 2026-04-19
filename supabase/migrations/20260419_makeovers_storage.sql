-- Create a public bucket for storing user's original makeover images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('makeovers', 'makeovers', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public access to view the images
CREATE POLICY "Makeovers Public Access" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'makeovers');

-- Allow authenticated users to upload their images
CREATE POLICY "Makeovers Auth Inserts" 
ON storage.objects FOR INSERT 
WITH CHECK (bucket_id = 'makeovers' AND auth.role() = 'authenticated');
