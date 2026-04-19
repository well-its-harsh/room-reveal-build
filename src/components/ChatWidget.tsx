import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, User, ChevronLeft, Calendar, Info, Package } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/lib/supabase';
import { 
  getOrCreateConversation, 
  sendMessage, 
  markMessagesAsRead, 
  fetchMessages, 
  ChatMessage, 
  ChatConversation,
  generateId
} from '@/lib/chatService';
import { useChatRealtime, useChatTyping, useChatPresence } from '@/hooks/useChatRealtime';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

interface ChatWidgetProps {
  productId?: string;
  productName?: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  shiftLeft?: boolean;
  isMobile?: boolean;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ 
  productId, 
  productName,
  isOpen,
  setIsOpen,
  shiftLeft,
  isMobile
}) => {
  const [conversation, setConversation] = useState<ChatConversation | null>(null);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [isStarting, setIsStarting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [guestInfo, setGuestInfo] = useState({ name: '', email: '' });
  const [unreadCount, setUnreadCount] = useState(0);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { isOtherTyping, sendTyping, sendStopTyping } = useChatTyping(conversation?.id || '');
  const { isOtherOnline } = useChatPresence(conversation?.id || '', user?.id || 'guest-' + guestInfo.name);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOtherTyping]);

  // Handle new messages from hook
  const handleNewMessage = (msg: ChatMessage) => {
    setMessages(prev => {
      if (prev.find(m => m.id === msg.id)) return prev;
      return [...prev, msg];
    });
    
    if (!isOpen && msg.sender_type === 'owner') {
      setUnreadCount(prev => prev + 1);
    }
  };

  useChatRealtime(conversationId || '', handleNewMessage);

  useEffect(() => {
    const checkExistingConversation = async () => {
      // Always fetch fresh auth state
      const { data: { user: currentUser } } = await supabase.auth.getUser()
      setUser(currentUser || null);
      
      if (currentUser?.id) {
        // Logged-in: find their conversation
        const { data } = await supabase
          .from('chat_conversations')
          .select('id, unread_customer_count')
          .eq('customer_id', currentUser.id)
          .order('created_at', { ascending: false })
          .limit(1)
          .maybeSingle()

        if (data) {
          console.log('[ChatWidget] Found existing conversation on mount:', data.id)
          const conv = await supabase.from('chat_conversations').select('*').eq('id', data.id).single();
          if (conv.data) setConversation(conv.data);
          
          const msgs = await fetchMessages(supabase, data.id)
          setMessages(msgs)
          setConversationId(data.id)
          setHasStarted(true)
          setUnreadCount(data.unread_customer_count ?? 0)
        }
      } else {
        // Guest: check localStorage
        const storedId = localStorage.getItem('srtah_guest_conversation_id')
        if (storedId) {
          const { data } = await supabase
            .from('chat_conversations')
            .select('id, unread_customer_count')
            .eq('id', storedId)
            .maybeSingle()

          if (data) {
            console.log('[ChatWidget] Found existing guest conversation on mount:', data.id)
            const conv = await supabase.from('chat_conversations').select('*').eq('id', data.id).single();
            if (conv.data) setConversation(conv.data);
            
            const msgs = await fetchMessages(supabase, data.id)
            setMessages(msgs)
            setConversationId(data.id)
            setHasStarted(true)
            setUnreadCount(data.unread_customer_count ?? 0)
          } else {
            localStorage.removeItem('srtah_guest_conversation_id')
          }
        }
      }
    }

    checkExistingConversation()
  }, []) // Run once on mount — supabase.auth.getUser() always returns fresh state

  useEffect(() => {
    if (isOpen && conversationId) {
      markMessagesAsRead(supabase, conversationId, 'customer');
      setUnreadCount(0);
    }
  }, [isOpen, conversationId]);

  const startChat = async (customerName: string, customerEmail?: string, initialMessage?: string) => {
    setIsStarting(true);
    try {
      // Step 1: Get the CURRENT auth user from Supabase — do NOT rely on a cached user object
      const { data: { user: currentUser } } = await supabase.auth.getUser()
      setUser(currentUser || null);
      
      console.log('[ChatWidget] Current auth user:', currentUser?.id ?? 'not logged in')

      const { id: convId, isNew } = await getOrCreateConversation(supabase, {
        customerId: currentUser?.id ?? null,
        customerName: currentUser
          ? (currentUser.user_metadata?.full_name ?? currentUser.email ?? customerName)
          : customerName,
        customerEmail: currentUser?.email ?? customerEmail ?? guestInfo.email ?? null,
        productId: productId ?? null,
        productName: productName ?? null
      })

      // setConversation immediately for realtime hook
      setConversationId(convId)
      localStorage.setItem('srtah_guest_conversation_id', convId);
      
      // Update local state conversation object
      const { data: convData } = await supabase.from('chat_conversations').select('*').eq('id', convId).single();
      if (convData) setConversation(convData);

      // Delay to allow subscription to establish
      await new Promise(resolve => setTimeout(resolve, 200))
      
      const history = await fetchMessages(supabase, convId)
      setMessages(history)
      setHasStarted(true)

      if (isNew) {
        const welcome = await sendMessage(supabase, {
          conversationId: convId,
          senderType: 'bot',
          content: `Hi${currentUser ? ' ' + (currentUser.user_metadata?.full_name?.split(' ')[0] ?? '') : ''}! 👋 Welcome to Shree Radhe Tiles & Hardware. How can we help you today?${productName ? ` I see you're looking at ${productName}.` : ''}`
        })
        setMessages(prev => [...prev, welcome])

        if (initialMessage) {
          const firstMsg = await sendMessage(supabase, {
            conversationId: convId,
            senderType: 'customer',
            content: initialMessage
          })
          setMessages(prev => [...prev, firstMsg])
        }

        // Notify owner of new chat started
        await supabase.from('notifications').insert({
          user_id: import.meta.env.VITE_OWNER_USER_ID,
          title: '💬 New Chat Started',
          message: `${currentUser ? (currentUser.user_metadata?.full_name || currentUser.email) : customerName} started a chat${productName ? ' about ' + productName : ''}`,
          type: 'chat',
          link: '/owner/chat',
          is_read: false
        })
      }

      await markMessagesAsRead(supabase, convId, 'customer')
    } catch (error) {
      console.error('Error starting chat:', error);
    } finally {
      setIsStarting(false);
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim() || !conversationId) return;
    
    const text = inputText.trim();
    setInputText('');
    sendStopTyping();

    // Optimistic Update: Add message immediately to the UI
    const optimisticMsg: ChatMessage = {
      id: generateId(),
      conversation_id: conversationId,
      sender_type: 'customer',
      sender_id: user?.id,
      content: text,
      message_type: 'text',
      is_read: false,
      created_at: new Date().toISOString()
    };

    setMessages(prev => [...prev, optimisticMsg]);

    try {
      await sendMessage(supabase, {
        id: optimisticMsg.id,
        conversationId: conversationId,
        senderType: 'customer',
        senderId: user?.id,
        content: text
      });
    } catch (error) {
      console.error('Failed to send message:', error);
      // Remove optimistic message on actual failure
      setMessages(prev => prev.filter(m => m.id !== optimisticMsg.id));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    if (e.target.value.length > 0) {
      sendTyping();
    } else {
      sendStopTyping();
    }
  };

  return (
    <div className="relative shrink-0">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: (isMobile && shiftLeft) ? '50vh' : 0, 
              scale: 1,
              x: 0,
              right: isMobile ? 0 : (shiftLeft ? 430 : 32)
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={cn(
              "fixed bg-white luxury-shadow rounded-2xl flex flex-col overflow-hidden chat-panel-enter font-sans z-[9999]",
              "w-full sm:w-[380px] h-full sm:h-[650px] border border-[#E8E4DF] shadow-2xl",
              "inset-x-0 bottom-0 sm:inset-auto sm:bottom-[100px]",
              (isMobile && shiftLeft) ? "h-[45vh]" : "max-sm:h-[90vh]"
            )}
            style={{ 
              right: !isMobile ? (shiftLeft ? 430 : 32) : undefined 
            }}
          >
          {/* Header */}
          <div className="bg-[#000000] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-[#C9A84C] rounded-full flex items-center justify-center">
                  <User className="text-[#000000] w-6 h-6" />
                </div>
                {isOtherOnline && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#000000] rounded-full" />
                )}
              </div>
              <div>
                <h3 className="font-serif font-semibold text-sm">Store Support</h3>
                <p className="text-[10px] text-[#C9A84C]">
                  {isOtherOnline ? 'Online now' : 'Support Team'}
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F7F5F2]">
            {!hasStarted ? (
              /* Welcome Screen */
              <div className="h-full flex flex-col justify-center space-y-6">
                <div className="text-center space-y-2">
                  <h4 className="text-[#000000] font-serif text-lg font-bold">Hi! How can we help?</h4>
                  <p className="text-muted-foreground text-xs px-4">Our team is ready to assist you with any questions.</p>
                </div>

                {!user && (
                    <div className="space-y-3">
                      <Input 
                        placeholder="Your Name" 
                        value={guestInfo.name} 
                        onChange={e => setGuestInfo({...guestInfo, name: e.target.value})}
                        className="border-[#E8E4DF]"
                      />
                      <Input 
                        placeholder="Email (Optional)" 
                        value={guestInfo.email} 
                        onChange={e => setGuestInfo({...guestInfo, email: e.target.value})}
                        className="border-[#E8E4DF]"
                      />
                    </div>
                )}

                <div className="space-y-2">
                  <button 
                    onClick={() => startChat(guestInfo.name || 'Guest', guestInfo.email, "Ask about a product")}
                    disabled={!user && !guestInfo.name}
                    className="w-full text-left p-3 rounded-lg border border-[#C9A84C]/30 bg-white hover:border-[#C9A84C] transition-all flex items-center gap-3 group"
                  >
                    <Package className="w-4 h-4 text-[#C9A84C]" />
                    <span className="text-xs text-[#000000]">Ask about a product</span>
                  </button>
                  <button 
                    onClick={() => startChat(guestInfo.name || 'Guest', guestInfo.email, "Get pricing info")}
                    disabled={!user && !guestInfo.name}
                    className="w-full text-left p-3 rounded-lg border border-[#C9A84C]/30 bg-white hover:border-[#C9A84C] transition-all flex items-center gap-3 group"
                  >
                    <Info className="w-4 h-4 text-[#C9A84C]" />
                    <span className="text-xs text-[#000000]">Get pricing info</span>
                  </button>
                  <button 
                    onClick={() => startChat(guestInfo.name || 'Guest', guestInfo.email, "Book a consultation")}
                    disabled={!user && !guestInfo.name}
                    className="w-full text-left p-3 rounded-lg border border-[#C9A84C]/30 bg-white hover:border-[#C9A84C] transition-all flex items-center gap-3 group"
                  >
                    <Calendar className="w-4 h-4 text-[#C9A84C]" />
                    <span className="text-xs text-[#000000]">Book a consultation</span>
                  </button>
                </div>

                <Button 
                  onClick={() => startChat(guestInfo.name || 'Guest', guestInfo.email)}
                  disabled={isStarting || (!user && !guestInfo.name)}
                  className="bg-[#C9A84C] hover:bg-[#A36D07] text-[#000000] font-bold w-full h-12"
                >
                  {isStarting ? "Starting..." : "Start Chat"}
                </Button>
              </div>
            ) : (
              <>
                {/* Chat Messages */}
                {messages.map((msg, i) => {
                  const isCustomer = msg.sender_type === 'customer';
                  
                  return (
                    <div key={msg.id} className={cn(
                      "flex flex-col",
                      isCustomer ? "items-end" : "items-start"
                    )}>
                      <div className={cn(
                        "max-w-[85%] p-3 text-sm luxury-shadow",
                        isCustomer 
                          ? "bg-[#C9A84C] text-[#000000] rounded-[16px_16px_4px_16px]" 
                          : "bg-white text-[#000000] rounded-[16px_16px_16px_4px]"
                      )}>
                        {msg.content}
                      </div>
                      <span className="text-[9px] text-muted-foreground mt-1 opacity-70 px-1">
                        {format(new Date(msg.created_at), 'h:mm a')}
                      </span>
                    </div>
                  );
                })}
                {isOtherTyping && (
                  <div className="flex items-center gap-1 p-2 bg-white rounded-full w-12 luxury-shadow">
                    <div className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                )}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          {/* Input Area */}
          {hasStarted && conversationId && (
            <div className="p-4 bg-white border-t border-[#E8E4DF]">
              <div className="flex items-center gap-2">
                <Input 
                  placeholder="Type a message..." 
                  value={inputText}
                  onChange={handleInputChange}
                  onKeyDown={e => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
                  className="flex-1 h-10 border-[#E8E4DF] focus:ring-[#C9A84C]"
                />
                <button 
                  onClick={handleSendMessage}
                  disabled={!inputText.trim()}
                  className="bg-[#000000] text-white p-2 rounded-lg hover:bg-[#2c3e50] transition-colors disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Bubble */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-full flex items-center justify-center luxury-shadow transition-all duration-300 relative group shadow-2xl",
          isOpen ? "bg-[#1A1A1A] rotate-90" : "bg-[#6B6B6B] hover:scale-110",
        )}
      >
        {isOpen ? (
          <X className="text-white w-6 h-6" />
        ) : (
          <>
            <MessageCircle className="text-white w-7 h-7" />
            {unreadCount > 0 && (
              <div className="absolute -top-1 -right-1 bg-[#C9A84C] text-[#000000] text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                {unreadCount}
              </div>
            )}
            {!isOpen && isOtherOnline && (
              <div className="absolute bottom-0 right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full animate-pulse" />
            )}
          </>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;
