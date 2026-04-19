import { SupabaseClient } from '@supabase/supabase-js';

// Helper for generating UUIDs in both secure and non-secure (HTTP) contexts
export const generateId = () => {
  try {
    return crypto.randomUUID();
  } catch (e) {
    // Fallback for non-secure contexts
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
};

export interface ChatMessage {
  id: string;
  conversation_id: string;
  sender_type: 'customer' | 'owner' | 'bot';
  sender_id?: string;
  content: string;
  message_type: 'text' | 'image' | 'document' | 'system';
  attachment_url?: string;
  attachment_filename?: string;
  attachment_mime_type?: string;
  is_read: boolean;
  read_at?: string;
  created_at: string;
}

export interface ChatConversation {
  id: string;
  customer_id?: string;
  customer_name: string;
  customer_email?: string;
  customer_phone?: string;
  product_id?: string;
  product_name?: string;
  status: 'open' | 'closed' | 'archived';
  last_message_content?: string;
  last_message_at: string;
  last_message_sender_type?: string;
  unread_customer_count: number;
  unread_owner_count: number;
  created_at: string;
}

export const getOrCreateConversation = async (
  supabase: SupabaseClient,
  params: {
    customerId?: string | null
    customerName: string
    customerEmail?: string | null
    customerPhone?: string | null
    productId?: string | null
    productName?: string | null
  }
): Promise<{ id: string; isNew: boolean }> => {

  console.log('[Chat] getOrCreateConversation called with:', {
    customerId: params.customerId,
    customerName: params.customerName
  })

  // CASE 1: Logged-in customer — find their most recent conversation
  // Do NOT filter by status — owner may have closed it, we want to resume anyway
  if (params.customerId) {
    console.log('[Chat] Searching for existing conversation for customer:', params.customerId)

    const { data: existing, error: searchError } = await supabase
      .from('chat_conversations')
      .select('id, status, customer_name')
      .eq('customer_id', params.customerId)
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle()

    console.log('[Chat] Existing conversation search result:', existing, 'Error:', searchError)

    if (existing) {
      console.log('[Chat] REUSING existing conversation:', existing.id)
      
      // If conversation was closed, reopen it
      if (existing.status !== 'open') {
        await supabase
          .from('chat_conversations')
          .update({ status: 'open' })
          .eq('id', existing.id)
        console.log('[Chat] Reopened closed conversation:', existing.id)
      }

      return { id: existing.id, isNew: false }
    }

    console.log('[Chat] No existing conversation found — will create new one')
  }

  // CASE 2: Guest user — check localStorage
  if (!params.customerId) {
    const storedId = localStorage.getItem('srtah_guest_conversation_id')
    console.log('[Chat] Guest conversation ID from localStorage:', storedId)

    if (storedId) {
      const { data: existing } = await supabase
        .from('chat_conversations')
        .select('id, status')
        .eq('id', storedId)
        .maybeSingle()

      if (existing) {
        console.log('[Chat] REUSING existing guest conversation:', existing.id)
        if (existing.status !== 'open') {
          await supabase.from('chat_conversations').update({ status: 'open' }).eq('id', existing.id)
        }
        return { id: existing.id, isNew: false }
      } else {
        console.log('[Chat] Stored guest conversation not found in DB — removing from localStorage')
        localStorage.removeItem('srtah_guest_conversation_id')
      }
    }
  }

  // CASE 3: Create new conversation
  console.log('[Chat] Creating new conversation')

  const { data: newConv, error: createError } = await supabase
    .from('chat_conversations')
    .insert({
      customer_id: params.customerId ?? null,
      customer_name: params.customerName || 'Guest',
      customer_email: params.customerEmail ?? null,
      customer_phone: params.customerPhone ?? null,
      product_id: params.productId ?? null,
      product_name: params.productName ?? null,
      status: 'open',
      unread_customer_count: 0,
      unread_owner_count: 0,
      last_message_at: new Date().toISOString()
    })
    .select('id')
    .single()

  if (createError || !newConv) {
    console.error('[Chat] Failed to create conversation:', createError)
    throw new Error('Could not start chat. Please try again.')
  }

  console.log('[Chat] Created new conversation:', newConv.id)

  if (!params.customerId) {
    localStorage.setItem('srtah_guest_conversation_id', newConv.id)
    console.log('[Chat] Stored guest conversation ID in localStorage:', newConv.id)
  }

  return { id: newConv.id, isNew: true }
}

export const sendMessage = async (
  supabase: SupabaseClient,
  params: { 
    conversationId: string; 
    senderType: 'customer' | 'owner' | 'bot'; 
    senderId?: string | null; 
    content: string; 
    messageType?: string; 
    id?: string 
  }
) => {
  const messageId = params.id || generateId();
  const cleanContent = params.content.trim();
  
  // 1. Insert the message
  const { data: message, error: insertError } = await supabase
    .from('chat_messages')
    .insert({
      id: messageId,
      conversation_id: params.conversationId,
      sender_type: params.senderType,
      sender_id: params.senderId || null,
      content: cleanContent,
      message_type: params.messageType || 'text'
    })
    .select()
    .single();

  if (insertError) {
    console.error('[ChatService] Error in sendMessage insert:', insertError);
    throw insertError;
  }

  // 2. Update conversation metadata (non-blocking)
  const fieldName = params.senderType === 'customer' ? 'unread_owner_count' : 'unread_customer_count';
  
  // Fire and forget updates to ensure responsiveness
  supabase.from('chat_conversations').update({
    last_message_content: cleanContent.substring(0, 100),
    last_message_at: new Date().toISOString(),
    last_message_sender_type: params.senderType,
  }).eq('id', params.conversationId).then();

  supabase.rpc('increment_unread', { 
    conversation_id: params.conversationId, 
    field_name: fieldName 
  }).then();

  // 3. Optional: Notify customer if owner replied (non-blocking)
  if (params.senderType === 'owner') {
    supabase.from('chat_conversations').select('customer_id, content:last_message_content')
      .eq('id', params.conversationId).single()
      .then(({ data }) => {
        if (data?.customer_id) {
          supabase.from('notifications').insert({
            user_id: data.customer_id,
            title: 'New reply from store',
            message: cleanContent.substring(0, 80),
            type: 'general',
            link: '/account/chats',
            is_read: false
          }).then();
        }
      });
  }

  return message;
};

// Mark messages as read
export const markMessagesAsRead = async (
  supabase: SupabaseClient,
  conversationId: string,
  readerType: 'customer' | 'owner'
) => {
  await supabase
    .from('chat_messages')
    .update({ is_read: true, read_at: new Date().toISOString() })
    .eq('conversation_id', conversationId)
    .neq('sender_type', readerType)
    .eq('is_read', false);

  // Reset unread count for the reader
  const field = readerType === 'owner' ? 'unread_owner_count' : 'unread_customer_count';
  await supabase.from('chat_conversations').update({ [field]: 0 }).eq('id', conversationId);
};

// Fetch messages for a conversation
export const fetchMessages = async (supabase: SupabaseClient, conversationId: string, limit = 50) => {
  const { data } = await supabase
    .from('chat_messages')
    .select('*')
    .eq('conversation_id', conversationId)
    .order('created_at', { ascending: true })
    .limit(limit);

  return (data as ChatMessage[]) ?? [];
};
