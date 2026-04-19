-- Chat Realtime and Security Alignment Fixes

-- 1. Optimize Replica Identity for Realtime tracking on all columns
ALTER TABLE public.chat_messages REPLICA IDENTITY FULL;
ALTER TABLE public.chat_conversations REPLICA IDENTITY FULL;

-- 2. Drop existing restrictive policies and rebuild
DROP POLICY IF EXISTS "Customer owns conversation" ON public.chat_conversations;
DROP POLICY IF EXISTS "Anyone starts conversation" ON public.chat_conversations;
DROP POLICY IF EXISTS "Owner reads all conversations" ON public.chat_conversations;
DROP POLICY IF EXISTS "Owner updates conversations" ON public.chat_conversations;
DROP POLICY IF EXISTS "Customer reads own messages" ON public.chat_messages;
DROP POLICY IF EXISTS "Anyone inserts messages" ON public.chat_messages;
DROP POLICY IF EXISTS "Owner reads all messages" ON public.chat_messages;
DROP POLICY IF EXISTS "Owner updates messages" ON public.chat_messages;

-- 3. Conversation Policies
-- Customers or Guests can read their own conversations
CREATE POLICY "Conversations_Select" ON public.chat_conversations
    FOR SELECT USING (
        auth.uid() = customer_id 
        OR auth.jwt() ->> 'role' = 'owner' 
        OR auth.jwt() ->> 'role' = 'admin'
        OR customer_id IS NULL -- Guest access
    );

-- Anyone can start a conversation
CREATE POLICY "Conversations_Insert" ON public.chat_conversations
    FOR INSERT WITH CHECK (true);

-- Owners can update any conversation (mark read, etc)
CREATE POLICY "Conversations_Update" ON public.chat_conversations
    FOR UPDATE USING (
        auth.uid() = customer_id 
        OR auth.jwt() ->> 'role' = 'owner' 
        OR auth.jwt() ->> 'role' = 'admin'
        OR customer_id IS NULL 
    );

-- 4. Message Policies
-- Users can read messages in their conversations
CREATE POLICY "Messages_Select" ON public.chat_messages
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.chat_conversations c
            WHERE c.id = conversation_id
            AND (c.customer_id = auth.uid() OR c.customer_id IS NULL OR auth.jwt() ->> 'role' = 'owner' OR auth.jwt() ->> 'role' = 'admin')
        )
    );

-- Anyone can insert a message
CREATE POLICY "Messages_Insert" ON public.chat_messages
    FOR INSERT WITH CHECK (true);

-- Anyone can update is_read (Required for marking messages as read from both sides)
CREATE POLICY "Messages_Update" ON public.chat_messages
    FOR UPDATE USING (true);

-- 5. Ensure Realtime is enabled in publication
-- (Already done but ensuring it's comprehensive)
ALTER PUBLICATION supabase_realtime ADD TABLE chat_messages;
ALTER PUBLICATION supabase_realtime ADD TABLE chat_conversations;

-- 6. RPC for handling read states more reliably
CREATE OR REPLACE FUNCTION mark_chat_read(conv_id uuid, for_owner boolean)
RETURNS void AS $$
BEGIN
  IF for_owner THEN
    UPDATE chat_conversations SET unread_owner_count = 0 WHERE id = conv_id;
    UPDATE chat_messages SET is_read = true WHERE conversation_id = conv_id AND sender_type = 'customer';
  ELSE
    UPDATE chat_conversations SET unread_customer_count = 0 WHERE id = conv_id;
    UPDATE chat_messages SET is_read = true WHERE conversation_id = conv_id AND sender_type = 'owner';
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
