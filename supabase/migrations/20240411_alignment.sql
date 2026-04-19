-- Aligning system with Enquiry-First PRD and database_structure.md

-- 1. ENQUIRIES TABLE
CREATE TABLE IF NOT EXISTS public.enquiries (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    name text NOT NULL,
    phone text NOT NULL,
    email text,
    message text,
    product_id uuid REFERENCES public.products(id) ON DELETE SET NULL,
    product_name text, -- Redundant text for search/history
    category_id uuid REFERENCES public.categories(id) ON DELETE SET NULL,
    category text, -- Category name as text
    channel text DEFAULT 'general', -- 'product', 'category', 'chatbot', 'whatsapp', 'general'
    preferred_contact text, -- 'whatsapp', 'call', 'email'
    status text DEFAULT 'new', -- 'new', 'in_progress', 'resolved'
    user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- 2. VIDEO CALL REQUESTS TABLE
CREATE TABLE IF NOT EXISTS public.video_call_requests (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
    name text NOT NULL,
    phone text NOT NULL,
    product_id uuid REFERENCES public.products(id) ON DELETE SET NULL,
    preferred_date date NOT NULL,
    preferred_time text NOT NULL,
    platform text DEFAULT 'whatsapp_video', -- 'google_meet', 'whatsapp_video'
    notes text,
    status text DEFAULT 'requested', -- 'requested', 'scheduled', 'completed'
    meeting_link text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- 3. CHATBOT LEADS TABLE
CREATE TABLE IF NOT EXISTS public.chatbot_leads (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    session_id text,
    user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
    conversation_summary text,
    intent_detected text,
    product_ids_discussed uuid[],
    routed_to text, -- 'whatsapp', 'enquiry', 'appointment'
    created_at timestamp with time zone DEFAULT now()
);

-- 4. RLS POLICIES
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.video_call_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chatbot_leads ENABLE ROW LEVEL SECURITY;

-- Enquiries policies
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'enquiries' AND policyname = 'Public can submit enquiries') THEN
        CREATE POLICY "Public can submit enquiries" ON public.enquiries FOR INSERT WITH CHECK (true);
    END IF;
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'enquiries' AND policyname = 'Admins/Owners can view enquiries') THEN
        CREATE POLICY "Admins/Owners can view enquiries" ON public.enquiries FOR ALL USING (
            EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR role = 'owner'))
        );
    END IF;
END $$;

-- Video Calls policies
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'video_call_requests' AND policyname = 'Public can request video calls') THEN
        CREATE POLICY "Public can request video calls" ON public.video_call_requests FOR INSERT WITH CHECK (true);
    END IF;
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'video_call_requests' AND policyname = 'Admins/Owners can manage video calls') THEN
        CREATE POLICY "Admins/Owners can manage video calls" ON public.video_call_requests FOR ALL USING (
            EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR role = 'owner'))
        );
    END IF;
END $$;

-- Chatbot leads policies
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'chatbot_leads' AND policyname = 'Public can submit chatbot leads') THEN
        CREATE POLICY "Public can submit chatbot leads" ON public.chatbot_leads FOR INSERT WITH CHECK (true);
    END IF;
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'chatbot_leads' AND policyname = 'Admins/Owners can view chatbot leads') THEN
        CREATE POLICY "Admins/Owners can view chatbot leads" ON public.chatbot_leads FOR ALL USING (
            EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR role = 'owner'))
        );
    END IF;
END $$;
