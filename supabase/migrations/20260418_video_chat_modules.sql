-- Video Call Module Migrations

ALTER TABLE public.appointments
  ADD COLUMN IF NOT EXISTS visit_type text DEFAULT 'store-visit',
  ADD COLUMN IF NOT EXISTS daily_room_url text,
  ADD COLUMN IF NOT EXISTS daily_room_name text,
  ADD COLUMN IF NOT EXISTS call_started_at timestamptz,
  ADD COLUMN IF NOT EXISTS call_ended_at timestamptz,
  ADD COLUMN IF NOT EXISTS call_duration_seconds integer,
  ADD COLUMN IF NOT EXISTS customer_joined boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS owner_joined boolean DEFAULT false;

-- Call Participants
CREATE TABLE IF NOT EXISTS public.call_participants (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  appointment_id uuid REFERENCES public.appointments(id) ON DELETE CASCADE,
  user_id uuid REFERENCES public.profiles(id) ON DELETE CASCADE,
  participant_type text NOT NULL CHECK (participant_type IN ('customer', 'owner')),
  joined_at timestamptz DEFAULT now(),
  left_at timestamptz,
  is_active boolean DEFAULT true,
  UNIQUE(appointment_id, participant_type)
);

-- Call Events
CREATE TABLE IF NOT EXISTS public.call_events (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  appointment_id uuid REFERENCES public.appointments(id) ON DELETE CASCADE,
  event_type text NOT NULL,
  participant_type text,
  metadata jsonb,
  created_at timestamptz DEFAULT now()
);

-- Chat Module Migrations

CREATE TABLE IF NOT EXISTS public.chat_conversations (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_id uuid REFERENCES public.profiles(id) ON DELETE SET NULL,
  customer_name text NOT NULL DEFAULT 'Guest',
  customer_email text,
  customer_phone text,
  product_id uuid REFERENCES public.products(id) ON DELETE SET NULL,
  product_name text,
  status text DEFAULT 'open' CHECK (status IN ('open', 'closed', 'archived')),
  last_message_content text,
  last_message_at timestamptz DEFAULT now(),
  last_message_sender_type text,
  unread_customer_count integer DEFAULT 0,
  unread_owner_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.chat_messages (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  conversation_id uuid REFERENCES public.chat_conversations(id) ON DELETE CASCADE,
  sender_type text NOT NULL CHECK (sender_type IN ('customer', 'owner', 'bot')),
  sender_id uuid REFERENCES public.profiles(id) ON DELETE SET NULL,
  content text NOT NULL CHECK (char_length(content) <= 5000),
  message_type text DEFAULT 'text' CHECK (message_type IN ('text', 'image', 'document', 'system')),
  attachment_url text,
  attachment_filename text,
  attachment_mime_type text,
  is_read boolean DEFAULT false,
  read_at timestamptz,
  created_at timestamptz DEFAULT now()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_chat_messages_conv ON public.chat_messages(conversation_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_chat_conv_status ON public.chat_conversations(status, last_message_at DESC);
CREATE INDEX IF NOT EXISTS idx_chat_conv_customer ON public.chat_conversations(customer_id);

-- RLS
ALTER TABLE public.call_participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.call_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;

-- Call Policies
CREATE POLICY "Owner reads all call participants" ON public.call_participants FOR SELECT USING (auth.jwt() ->> 'role' = 'owner');
CREATE POLICY "Users manage own participation" ON public.call_participants FOR ALL USING (auth.uid() = user_id OR auth.jwt() ->> 'role' = 'owner');
CREATE POLICY "System inserts call events" ON public.call_events FOR INSERT WITH CHECK (true);
CREATE POLICY "Owner reads call events" ON public.call_events FOR SELECT USING (auth.jwt() ->> 'role' = 'owner');

-- Chat Policies
CREATE POLICY "Customer owns conversation" ON public.chat_conversations
  FOR ALL USING (auth.uid() = customer_id OR customer_id IS NULL);

CREATE POLICY "Anyone starts conversation" ON public.chat_conversations
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Owner reads all conversations" ON public.chat_conversations
  FOR SELECT USING (auth.jwt() ->> 'role' = 'owner');

CREATE POLICY "Owner updates conversations" ON public.chat_conversations
  FOR UPDATE USING (auth.jwt() ->> 'role' = 'owner');

CREATE POLICY "Customer reads own messages" ON public.chat_messages
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM chat_conversations c
      WHERE c.id = conversation_id
      AND (c.customer_id = auth.uid() OR c.customer_id IS NULL)
    )
  );

CREATE POLICY "Anyone inserts messages" ON public.chat_messages
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Owner reads all messages" ON public.chat_messages
  FOR SELECT USING (auth.jwt() ->> 'role' = 'owner');

CREATE POLICY "Owner updates messages" ON public.chat_messages
  FOR UPDATE USING (auth.jwt() ->> 'role' = 'owner');

CREATE POLICY "System updates read status" ON public.chat_messages
  FOR UPDATE USING (true);

-- RPC for incrementing unread (using more robust version)
CREATE OR REPLACE FUNCTION increment_unread(conversation_id uuid, field_name text)
RETURNS void AS $$
BEGIN
  IF field_name = 'unread_owner_count' THEN
    UPDATE chat_conversations SET unread_owner_count = unread_owner_count + 1 WHERE id = conversation_id;
  ELSIF field_name = 'unread_customer_count' THEN
    UPDATE chat_conversations SET unread_customer_count = unread_customer_count + 1 WHERE id = conversation_id;
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
