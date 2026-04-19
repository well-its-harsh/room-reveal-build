-- Final Fixes and Polishing Migrations

-- 1. Profiles INSERT policy (Critical for new user logic)
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'profiles' AND policyname = 'Anyone can insert their own profile'
    ) THEN
        CREATE POLICY "Anyone can insert their own profile" ON public.profiles FOR INSERT WITH CHECK (true);
    END IF;
END $$;

-- 2. Notifications Table & Policies
CREATE TABLE IF NOT EXISTS public.notifications (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id uuid REFERENCES public.profiles(id) ON DELETE CASCADE, -- NULL means broadcast/owner
    title text,
    message text NOT NULL,
    is_read boolean DEFAULT false,
    type text DEFAULT 'general',
    link text,
    created_at timestamptz DEFAULT now()
);

ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users view own notifications" ON public.notifications
    FOR SELECT USING (auth.uid() = user_id OR (user_id IS NULL AND (auth.jwt() ->> 'role' = 'owner' OR auth.jwt() ->> 'role' = 'admin')));

CREATE POLICY "System/Users insert notifications" ON public.notifications
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Users update own notifications" ON public.notifications
    FOR UPDATE USING (auth.uid() = user_id OR (user_id IS NULL AND (auth.jwt() ->> 'role' = 'owner' OR auth.jwt() ->> 'role' = 'admin')));

-- 3. Ensure seen_by_owner columns exist (Prevents 400 errors in dashboard hooks)
ALTER TABLE public.enquiries ADD COLUMN IF NOT EXISTS seen_by_owner boolean DEFAULT false;
ALTER TABLE public.reviews ADD COLUMN IF NOT EXISTS seen_by_owner boolean DEFAULT false;
ALTER TABLE public.appointments ADD COLUMN IF NOT EXISTS seen_by_owner boolean DEFAULT false;

-- 3. Ensure store_settings seeded correctly
CREATE TABLE IF NOT EXISTS public.store_settings (
    key text PRIMARY KEY,
    value text,
    updated_at timestamptz DEFAULT now()
);

INSERT INTO public.store_settings (key, value)
VALUES 
    ('store_name', 'Shree Radhe Tiles & Hardware'),
    ('email', 'contact@shreeradhe.com')
ON CONFLICT (key) DO NOTHING;

-- 4. RPC for counting unseen (Useful for optimized dashboard queries)
CREATE OR REPLACE FUNCTION get_unseen_counts()
RETURNS json AS $$
BEGIN
  RETURN (
    SELECT json_build_object(
      'enquiries', (SELECT count(*) FROM public.enquiries WHERE seen_by_owner = false),
      'appointments', (SELECT count(*) FROM public.appointments WHERE seen_by_owner = false AND status = 'pending'),
      'reviews', (SELECT count(*) FROM public.reviews WHERE seen_by_owner = false)
    )
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 6. Account Redesign & Expanded Tracking
ALTER TABLE public.profiles 
  ADD COLUMN IF NOT EXISTS preferences jsonb DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS avatar_url text;

ALTER TABLE public.notifications
  ADD COLUMN IF NOT EXISTS type text DEFAULT 'general',
  ADD COLUMN IF NOT EXISTS link text,
  ADD COLUMN IF NOT EXISTS title text;

ALTER TABLE public.appointments
  ADD COLUMN IF NOT EXISTS customer_joined boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS owner_joined boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS call_started_at timestamptz,
  ADD COLUMN IF NOT EXISTS call_ended_at timestamptz,
  ADD COLUMN IF NOT EXISTS call_duration_seconds integer;

-- Policies for notifications
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Customers read own notifications') THEN
        CREATE POLICY "Customers read own notifications" ON public.notifications
        FOR SELECT USING (auth.uid() = user_id);
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Customers update own notifications') THEN
        CREATE POLICY "Customers update own notifications" ON public.notifications
        FOR UPDATE USING (auth.uid() = user_id);
    END IF;
END $$;

-- Enable Realtime for all relevant tables
ALTER PUBLICATION supabase_realtime ADD TABLE notifications;
ALTER PUBLICATION supabase_realtime ADD TABLE chat_messages;
ALTER PUBLICATION supabase_realtime ADD TABLE chat_conversations;
ALTER PUBLICATION supabase_realtime ADD TABLE appointments;
ALTER PUBLICATION supabase_realtime ADD TABLE enquiries;
ALTER PUBLICATION supabase_realtime ADD TABLE reviews;
