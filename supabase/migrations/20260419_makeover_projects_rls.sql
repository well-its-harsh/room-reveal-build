-- Enable RLS on the makeover_projects table if not already enabled
ALTER TABLE public.makeover_projects ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users to INSERT their own makeover projects
CREATE POLICY "Users can insert their own makeover projects" 
ON public.makeover_projects 
FOR INSERT 
TO authenticated 
WITH CHECK (auth.uid() = user_id);

-- Allow authenticated users to SELECT their own makeover projects
CREATE POLICY "Users can view their own makeover projects" 
ON public.makeover_projects 
FOR SELECT 
TO authenticated 
USING (auth.uid() = user_id);

-- Depending on your schema, you might also want to grant access to the owner role
-- or anonymous users if they are allowed to use the feature.
