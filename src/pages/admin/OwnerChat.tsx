import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '@/lib/supabase';
import { 
  ChatConversation, 
  ChatMessage, 
  fetchMessages, 
  sendMessage, 
  markMessagesAsRead,
  generateId
} from '@/lib/chatService';
import { useChatRealtime, useChatTyping, useChatPresence } from '@/hooks/useChatRealtime';
import { 
  Search, 
  Send, 
  User, 
  Package, 
  Phone, 
  Mail, 
  Calendar, 
  CheckCircle2, 
  MoreVertical,
  ChevronLeft,
  Clock,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { format, formatDistanceToNow } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

const QUICK_REPLIES = [
  "Thank you for your enquiry! Our team will get back to you shortly.",
  "We have that product in stock. Would you like to book a consultation?",
  "Please call us at +91 75887 51610 for immediate assistance.",
  "Could you share your location so we can suggest the nearest option?"
];

const OwnerChat = () => {
  const [conversations, setConversations] = useState<ChatConversation[]>([]);
  const [selectedConv, setSelectedConv] = useState<ChatConversation | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'open' | 'closed' | 'all'>('open');
  const [loading, setLoading] = useState(true);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [showConversationList, setShowConversationList] = useState(true);
  const [ownerId, setOwnerId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { isOtherTyping, sendTyping, sendStopTyping } = useChatTyping(selectedConv?.id || '');
  const { isOtherOnline } = useChatPresence(selectedConv?.id || '', 'owner');

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobileView(mobile);
      if (!mobile) setShowConversationList(true);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const loadConversations = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('chat_conversations')
      .select('*')
      .order('last_message_at', { ascending: false, nullsFirst: false });

    if (error) {
      console.error('[Owner Chat] Failed to load conversations:', error);
      return;
    }

    console.log('[Owner Chat] Loaded conversations:', data?.length);
    setConversations(data ?? []);
    setLoading(false);
  };

  useEffect(() => {
    loadConversations();

    // Pre-fetch owner ID
    supabase.auth.getUser().then(({ data }) => setOwnerId(data.user?.id || null));

    const channel = supabase
      .channel('owner-all-conversations')
      .on(
        'postgres_changes',
        {
          event: '*',  // INSERT, UPDATE, DELETE
          schema: 'public',
          table: 'chat_conversations'
        },
        (payload) => {
          console.log('[Owner Chat] Conversation change:', payload.eventType, payload.new)
          loadConversations()  // re-fetch full list
        }
      )
      .subscribe((status) => {
        console.log('[Owner Chat] Conversations subscription:', status)
      })

    return () => { supabase.removeChannel(channel) }
  }, [])

  useEffect(() => {
    if (selectedConv) {
      const loadMessages = async () => {
        const msgs = await fetchMessages(supabase, selectedConv.id);
        setMessages(msgs);
        markMessagesAsRead(supabase, selectedConv.id, 'owner');
        if (isMobileView) setShowConversationList(false);
      };
      loadMessages();
    }
  }, [selectedConv, isMobileView]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOtherTyping]);

  useChatRealtime(selectedConv?.id || '', (msg) => {
    setMessages(prev => {
      if (prev.find(m => m.id === msg.id)) return prev;
      return [...prev, msg];
    });
    if (selectedConv) markMessagesAsRead(supabase, selectedConv.id, 'owner');
  });

  const handleSendMessage = async (text: string = inputText) => {
    if (!text.trim() || !selectedConv) return;
    
    const content = text.trim();
    if (text === inputText) setInputText('');
    sendStopTyping();

    // Optimistic Update: Add message immediately to the UI
    const optimisticMsg: ChatMessage = {
      id: generateId(),
      conversation_id: selectedConv.id,
      sender_type: 'owner',
      sender_id: ownerId, 
      content: content,
      message_type: 'text',
      is_read: false,
      created_at: new Date().toISOString()
    };

    setMessages(prev => [...prev, optimisticMsg]);

    try {
      await sendMessage(supabase, {
        id: optimisticMsg.id,
        conversationId: selectedConv.id,
        senderType: 'owner',
        senderId: ownerId,
        content: content
      });
    } catch (error) {
      console.error('[Owner Chat] Failed to send message:', error);
      toast.error("Failed to send message - check connection");
      // Remove optimistic message on actual failure
      setMessages(prev => prev.filter(m => m.id !== optimisticMsg.id));
    }
  };

  const closeConversation = async (id: string) => {
    const { error } = await supabase
      .from('chat_conversations')
      .update({ status: 'closed' })
      .eq('id', id);
    
    if (!error) {
      toast.success("Conversation closed");
      loadConversations();
      if (selectedConv?.id === id) setSelectedConv(null);
    }
  };

  const filteredConversations = conversations.filter(c => {
    const matchesSearch = c.customer_name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (c.product_name || '').toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' ? true : c.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden bg-[#F7F5F2]">
      {/* Left Panel: Conversation List */}
      <div className="w-[300px] md:w-[320px] lg:w-[380px] bg-white border-r border-[#E8E4DF] flex flex-col flex-shrink-0">
        <div className="p-4 border-b border-[#E8E4DF]">
          <h2 className="text-xl font-serif font-bold text-[#000000] mb-4">Customer Chats</h2>
          
          <div className="flex gap-2 p-1 bg-secondary rounded-lg mb-4">
            {(['open', 'closed', 'all'] as const).map(status => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={cn(
                  "flex-1 py-1.5 text-xs font-medium rounded-md capitalize transition-all",
                  filterStatus === status ? "bg-[#000000] text-white shadow-sm" : "hover:text-[#000000]"
                )}
              >
                {status}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search customers or products..." 
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="pl-10 h-10 border-[#E8E4DF] focus:ring-[#C9A84C]"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {loading ? (
            <div className="p-4 space-y-4">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="h-20 bg-gray-50 animate-pulse rounded-lg" />
              ))}
            </div>
          ) : filteredConversations.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">
              No conversations found.
            </div>
          ) : (
            filteredConversations.map(conv => (
              <div
                key={conv.id}
                onClick={() => setSelectedConv(conv)}
                className={cn(
                  "p-4 border-b border-[#E8E4DF] cursor-pointer transition-all hover:bg-secondary relative group",
                  selectedConv?.id === conv.id ? "bg-secondary border-l-4 border-l-[#C9A84C]" : ""
                )}
              >
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-sm text-[#000000] truncate">{conv.customer_name}</h3>
                  <span className="text-[10px] text-muted-foreground">
                    {formatDistanceToNow(new Date(conv.last_message_at), { addSuffix: true })}
                  </span>
                </div>
                
                {conv.product_name && (
                  <Badge variant="outline" className="text-[10px] h-5 mb-2 border-[#C9A84C]/30 text-[#C8860A] bg-[#C9A84C]/5">
                    <Package className="w-2.5 h-2.5 mr-1" />
                    {conv.product_name}
                  </Badge>
                )}

                <p className="text-xs text-muted-foreground truncate line-clamp-1">
                  {conv.last_message_content || 'No messages yet'}
                </p>

                {conv.unread_owner_count > 0 && (
                  <div className="absolute right-4 bottom-4 bg-[#C8860A] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    {conv.unread_owner_count}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Right Panel: Chat Interface */}
      <div className="flex-1 flex flex-col bg-[#F7F5F2] min-w-0">
        {selectedConv ? (
          <>
            {/* Header */}
            <div className="p-4 bg-white border-b border-[#E8E4DF] flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-4">
                {isMobileView && (
                  <button onClick={() => setShowConversationList(true)} className="p-1 -ml-1">
                    <ChevronLeft className="w-6 h-6 text-[#000000]" />
                  </button>
                )}
                <div className="w-10 h-10 bg-[#000000] rounded-full flex items-center justify-center">
                  <User className="text-[#C9A84C] w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-serif font-bold text-[#000000]">{selectedConv.customer_name}</h2>
                  <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
                    {selectedConv.customer_email && (
                      <span className="flex items-center gap-1"><Mail size={10} /> {selectedConv.customer_email}</span>
                    )}
                    {selectedConv.customer_phone && (
                      <span className="flex items-center gap-1"><Phone size={10} /> {selectedConv.customer_phone}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {selectedConv.status === 'open' && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-red-200 text-red-600 hover:bg-red-50 text-xs h-8"
                    onClick={() => closeConversation(selectedConv.id)}
                  >
                    Close Chat
                  </Button>
                )}
                <Button size="sm" className="bg-[#C8860A] hover:bg-[#A36D07] text-white text-xs h-8">
                  Book Video Call
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
              {messages.map((msg) => {
                const isOwner = msg.sender_type === 'owner';
                const isBot = msg.sender_type === 'bot' || msg.message_type === 'system';
                
                return (
                  <div key={msg.id} className={cn(
                    "flex flex-col",
                    isOwner ? "items-end" : "items-start"
                  )}>
                    <div className={cn(
                      "max-w-[80%] p-3 text-sm luxury-shadow",
                      isOwner 
                        ? "bg-[#000000] text-white rounded-[16px_16px_4px_16px]" 
                        : isBot
                          ? "bg-gray-200 text-gray-700 rounded-lg mx-auto italic text-xs"
                          : "bg-white text-[#000000] rounded-[16px_16px_16px_4px]"
                    )}>
                      {msg.content}
                    </div>
                    {!isBot && (
                      <span className="text-[10px] text-muted-foreground mt-1 px-1 flex items-center gap-1">
                        {format(new Date(msg.created_at), 'h:mm a')}
                        {isOwner && msg.is_read && <CheckCircle2 size={10} className="text-[#C9A84C]" />}
                      </span>
                    )}
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
            </div>

            {/* Quick Replies */}
            <div className="px-4 pb-2 flex gap-2 overflow-x-auto no-scrollbar">
              {QUICK_REPLIES.map((reply, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(reply)}
                  className="whitespace-nowrap px-3 py-1.5 bg-white border border-[#E8E4DF] rounded-full text-[10px] text-[#000000] hover:border-[#C9A84C] hover:bg-secondary transition-all"
                >
                  {reply}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-[#E8E4DF]">
              <div className="flex items-center gap-3">
                <Input 
                  placeholder="Type your reply..." 
                  value={inputText}
                  onChange={(e) => {
                    setInputText(e.target.value);
                    if (e.target.value) sendTyping();
                    else sendStopTyping();
                  }}
                  onKeyDown={e => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault(); // crucial to prevent form bubblings
                      handleSendMessage(inputText);
                    }
                  }}
                  className="flex-1 h-12 border-[#E8E4DF] focus:ring-[#C9A84C]"
                />
                <Button 
                  onClick={() => {
                    handleSendMessage(inputText);
                  }}
                  disabled={!inputText.trim()}
                  className="bg-[#000000] text-white hover:bg-black w-12 h-12 p-0 rounded-xl"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center luxury-shadow mb-6">
              <MessageCircle className="w-10 h-10 text-[#C9A84C]" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#000000] mb-2">Select a conversation</h3>
            <p className="text-muted-foreground max-w-xs">
              Choose a customer chat from the list on the left to start replying.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OwnerChat;
