import { useEffect, useState, useRef } from 'react';
import { supabase } from '@/lib/supabase';
import { ChatMessage } from '@/lib/chatService';

export const useChatRealtime = (conversationId: string, onNewMessage: (msg: ChatMessage) => void) => {
  useEffect(() => {
    if (!conversationId) return;

    const channel = supabase
      .channel(`chat-messages-${conversationId}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'chat_messages',
          filter: `conversation_id=eq.${conversationId}`
        },
        (payload) => onNewMessage(payload.new as ChatMessage)
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [conversationId, onNewMessage]);
};

export const useChatTyping = (conversationId: string) => {
  const [isOtherTyping, setIsOtherTyping] = useState(false);
  const typingTimeout = useRef<ReturnType<typeof setTimeout>>();
  const channelRef = useRef<any>();

  useEffect(() => {
    if (!conversationId) return;

    const channel = supabase.channel(`typing-${conversationId}`);
    channelRef.current = channel;

    channel
      .on('broadcast', { event: 'typing' }, () => {
        setIsOtherTyping(true);
        clearTimeout(typingTimeout.current);
        typingTimeout.current = setTimeout(() => setIsOtherTyping(false), 3000);
      })
      .on('broadcast', { event: 'stop-typing' }, () => {
        setIsOtherTyping(false);
      })
      .subscribe();

    return () => {
      clearTimeout(typingTimeout.current);
      supabase.removeChannel(channel);
    };
  }, [conversationId]);

  const sendTyping = () => channelRef.current?.send({ type: 'broadcast', event: 'typing', payload: {} });
  const sendStopTyping = () => channelRef.current?.send({ type: 'broadcast', event: 'stop-typing', payload: {} });

  return { isOtherTyping, sendTyping, sendStopTyping };
};

export const useChatPresence = (conversationId: string, userId: string) => {
  const [isOtherOnline, setIsOtherOnline] = useState(false);

  useEffect(() => {
    if (!conversationId || !userId) return;

    const channel = supabase.channel(`presence-${conversationId}`, {
      config: { presence: { key: userId } }
    });

    channel
      .on('presence', { event: 'sync' }, () => {
        const state = channel.presenceState();
        const others = Object.keys(state).filter(k => k !== userId);
        setIsOtherOnline(others.length > 0);
      })
      .subscribe(async (status) => {
        if (status === 'SUBSCRIBED') {
          await channel.track({ userId, online_at: new Date().toISOString() });
        }
      });

    return () => {
      supabase.removeChannel(channel);
    };
  }, [conversationId, userId]);

  return { isOtherOnline };
};
