import { useState, useEffect, useRef } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";
import { 
  Send, MessageCircle, Clock, 
  Search, ArrowLeft, MoreVertical,
  Plus, Check, CheckCheck, Loader2
} from "lucide-react";
import { format, formatDistanceToNow } from "date-fns";
import { cn } from "@/lib/utils";
import { ChatMessage, ChatConversation, sendMessage, markMessagesAsRead, generateId } from "@/lib/chatService";

export default function AccountChats() {
  const { user, profile } = useAuth();
  const [conversations, setConversations] = useState<ChatConversation[]>([]);
  const [selectedConv, setSelectedConv] = useState<ChatConversation | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [showConvList, setShowConvList] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const channelRef = useRef<any>(null);

  // Fetch conversations
  useEffect(() => {
    if (!user) return;

    const fetchConversations = async () => {
      const { data, error } = await supabase
        .from('chat_conversations')
        .select(`
          *,
          product:products(name, product_media(media_url))
        `)
        .eq('customer_id', user.id)
        .order('last_message_at', { ascending: false });

      if (!error && data) {
        setConversations(data);
        setIsLoading(false);
      }
    };

    fetchConversations();

    // Subscribe to conversation updates
    const channel = supabase
      .channel('customer-conversations')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'chat_conversations', filter: `customer_id=eq.${user.id}` },
        () => fetchConversations()
      )
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [user]);

  // Fetch messages when conversation selected
  useEffect(() => {
    if (!selectedConv) return;

    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from('chat_messages')
        .select('*')
        .eq('conversation_id', selectedConv.id)
        .order('created_at', { ascending: true })
        .limit(50);

      if (!error && data) {
        setMessages(data);
        scrollToBottom();
      }
    };

    fetchMessages();
    markMessagesAsRead(supabase, selectedConv.id, 'customer');

    // Setup Realtime Chat
    if (channelRef.current) supabase.removeChannel(channelRef.current);

    const channel = supabase
      .channel(`chat-${selectedConv.id}`)
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'chat_messages', filter: `conversation_id=eq.${selectedConv.id}` },
        (payload) => {
          const newMsg = payload.new as ChatMessage;
          setMessages(prev => {
            if (prev.some(m => m.id === newMsg.id)) return prev;
            return [...prev, newMsg];
          });
          if (newMsg.sender_type === 'owner') {
             markMessagesAsRead(supabase, selectedConv.id, 'customer');
          }
          scrollToBottom();
        }
      )
      .on('broadcast', { event: 'owner-typing' }, ({ payload }) => {
        if (payload.conversationId === selectedConv.id) {
          setIsTyping(true);
          setTimeout(() => setIsTyping(false), 3000);
        }
      })
      .subscribe();

    channelRef.current = channel;

    return () => { supabase.removeChannel(channel); };
  }, [selectedConv]);

  const scrollToBottom = () => {
    setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    }, 100);
  };

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim() || !selectedConv || !user) return;

    const content = inputText.trim();
    setInputText("");

    // Optimistic Update
    const optimisticMsg: ChatMessage = {
      id: generateId(),
      conversation_id: selectedConv.id,
      sender_type: 'customer',
      sender_id: user.id,
      content,
      message_type: 'text',
      is_read: false,
      created_at: new Date().toISOString()
    };
    setMessages(prev => [...prev, optimisticMsg]);
    scrollToBottom();

    try {
      const savedMsg = await sendMessage(supabase, {
        id: optimisticMsg.id,
        conversationId: selectedConv.id,
        senderType: 'customer',
        senderId: user.id,
        content
      });
      
      // Update local state with real ID
      setMessages(prev => prev.map(m => m.id === optimisticMsg.id ? savedMsg : m));
    } catch (err) {
      console.error(err);
      setMessages(prev => prev.filter(m => m.id !== optimisticMsg.id));
    }
  };

  const handleTyping = () => {
    if (channelRef.current && selectedConv) {
      channelRef.current.send({
        type: 'broadcast',
        event: 'customer-typing',
        payload: { conversationId: selectedConv.id }
      });
    }
  };

  if (isLoading) return <div className="flex items-center justify-center h-[60vh]"><Loader2 className="w-8 h-8 animate-spin text-[#C9A84C]" /></div>;

  return (
    <div className="h-[calc(100vh-140px)] md:h-[calc(100vh-200px)] flex bg-white rounded-3xl border border-[#E8E4DF] overflow-hidden shadow-xl shadow-black/5">
      {/* Sidebar - Conversations */}
      <div className={cn(
        "w-full md:w-[350px] border-r border-[#E8E4DF] flex flex-col bg-[#FAF9F6] transition-all duration-300",
        !showConvList && "hidden md:flex"
      )}>
        <div className="p-6 border-b border-[#E8E4DF] bg-white">
          <h2 className="font-serif text-2xl font-bold text-[#000000] mb-4">My Chats</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B6B6B]" />
            <input 
              type="text" 
              placeholder="Search conversations..." 
              className="w-full pl-10 pr-4 py-2.5 bg-[#F8F7F4] border border-[#E8E4DF] rounded-xl text-sm outline-none focus:border-[#C9A84C] transition-all"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-hide">
          {conversations.length > 0 ? conversations.map((conv) => (
            <button
              key={conv.id}
              onClick={() => { setSelectedConv(conv); setShowConvList(false); }}
              className={cn(
                "w-full p-4 flex gap-4 transition-all border-b border-[#E8E4DF]/60 relative group",
                selectedConv?.id === conv.id ? "bg-[#000000] text-white" : "hover:bg-[#F3F2EE] bg-white/50"
              )}
            >
              <div className="w-12 h-12 rounded-full bg-[#E8E4DF] flex items-center justify-center shrink-0 border-2 border-white shadow-sm overflow-hidden">
                {conv.product?.product_media?.[0]?.media_url ? (
                   <img src={conv.product.product_media[0].media_url} alt={conv.product.name} className="w-full h-full object-cover" />
                ) : (
                   <MessageCircle className={cn("w-6 h-6", selectedConv?.id === conv.id ? "text-[#C9A84C]" : "text-[#000000]")} />
                )}
              </div>
              <div className="flex-1 text-left min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <h4 className={cn("font-bold text-sm truncate", selectedConv?.id === conv.id ? "text-white" : "text-[#000000]")}>
                    {conv.product_name || "General Chat"}
                  </h4>
                  <span className={cn("text-[10px]", selectedConv?.id === conv.id ? "text-white/60" : "text-[#6B6B6B]")}>
                    {conv.last_message_at ? formatDistanceToNow(new Date(conv.last_message_at), { addSuffix: false }).replace('about ', '') : ''}
                  </span>
                </div>
                <p className={cn("text-xs truncate", selectedConv?.id === conv.id ? "text-white/70" : "text-[#6B6B6B]")}>
                  {conv.last_message_sender_type === 'owner' ? 'Store: ' : 'You: '}
                  {conv.last_message_content || "No messages yet"}
                </p>
              </div>
              {conv.unread_customer_count > 0 && (
                <div className="absolute right-4 bottom-4 w-5 h-5 bg-[#C9A84C] text-[#000000] rounded-full flex items-center justify-center text-[10px] font-black shadow-lg">
                  {conv.unread_customer_count}
                </div>
              )}
            </button>
          )) : (
            <div className="p-12 text-center opacity-40">
              <MessageCircle className="w-12 h-12 mx-auto mb-4" />
              <p className="font-serif italic text-sm">No conversations found.</p>
            </div>
          )}
        </div>
      </div>

      {/* Chat Window */}
      <div className={cn(
        "flex-1 flex flex-col bg-[#F8F7F4] transition-all duration-300",
        showConvList && "hidden md:flex"
      )}>
        {selectedConv ? (
          <>
            {/* Header */}
            <header className="p-4 md:p-6 bg-white border-b border-[#E8E4DF] flex items-center justify-between shadow-sm z-10 shrink-0">
              <div className="flex items-center gap-4">
                <button onClick={() => setShowConvList(true)} className="md:hidden p-2 hover:bg-[#F8F7F4] rounded-full transition-colors">
                  <ArrowLeft className="w-5 h-5 text-[#000000]" />
                </button>
                <div className="w-10 h-10 rounded-full bg-[#000000] flex items-center justify-center text-[#C9A84C] relative ring-2 ring-[#C9A84C]/20">
                   <Store className="w-5 h-5" />
                   <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
                <div>
                   <h3 className="font-bold text-[#000000] leading-none mb-1">Store Expert</h3>
                   <div className="flex items-center gap-2">
                     <p className="text-[10px] text-green-600 font-bold uppercase tracking-widest">Always Online</p>
                     {isTyping && <span className="text-[10px] text-[#C9A84C] font-bold animate-pulse">Typing...</span>}
                   </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                 {selectedConv.product_name && (
                   <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-full">
                      <span className="text-[9px] font-black text-[#C9A84C] uppercase tracking-tighter">Re: {selectedConv.product_name}</span>
                   </div>
                 )}
                 <button className="p-2 hover:bg-[#F8F7F4] rounded-full transition-colors"><MoreVertical className="w-5 h-5 text-[#6B6B6B]" /></button>
              </div>
            </header>

            {/* Messages Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 scroll-smooth">
              {messages.map((msg, i) => {
                const isCustomer = msg.sender_type === 'customer';
                return (
                  <div key={msg.id} className={cn("flex", isCustomer ? "justify-end" : "justify-start")}>
                    <div className={cn(
                      "max-w-[85%] md:max-w-[70%] rounded-2xl p-4 shadow-sm relative",
                      isCustomer 
                        ? "bg-[#000000] text-white rounded-tr-none" 
                        : "bg-white text-[#000000] rounded-tl-none border border-[#E8E4DF]"
                    )}>
                      <p className="text-[14px] leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                      <div className={cn(
                        "flex items-center gap-1 mt-1 text-[9px] font-medium",
                        isCustomer ? "text-white/50 justify-end" : "text-[#6B6B6B] justify-start"
                      )}>
                        {format(new Date(msg.created_at), "h:mm a")}
                        {isCustomer && (
                           msg.id.startsWith('opt-') ? <Clock className="w-2.5 h-2.5" /> : 
                           msg.is_read ? <CheckCheck className="w-2.5 h-2.5 text-[#C9A84C]" /> : <Check className="w-2.5 h-2.5" />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="h-4" />
            </div>

            {/* Input Area */}
            <div className="p-4 md:p-6 bg-white border-t border-[#E8E4DF]">
               <form onSubmit={handleSend} className="flex items-center gap-3">
                  <div className="flex-1 relative">
                    <textarea 
                      value={inputText}
                      onChange={(e) => { setInputText(e.target.value); handleTyping(); }}
                      onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
                      placeholder="Type your message here..."
                      className="w-full bg-[#F8F7F4] border border-[#E8E4DF] rounded-2xl py-3 px-5 pr-12 text-[14px] outline-none focus:border-[#C9A84C] transition-all resize-none max-h-32 min-h-[50px] font-body"
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={!inputText.trim()}
                    className="w-[50px] h-[50px] rounded-2xl bg-[#000000] text-white flex items-center justify-center hover:bg-[#C9A84C] transition-all disabled:opacity-30 flex-shrink-0 shadow-lg active:scale-95"
                  >
                    <Send className="w-5 h-5" />
                  </button>
               </form>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
             <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-[#E8E4DF] mb-8 shadow-xl border-4 border-[#F8F7F4] relative">
                <MessageCircle className="w-12 h-12" />
                <div className="absolute inset-0 border-2 border-[#C9A84C]/10 rounded-full animate-ping"></div>
             </div>
             <h3 className="font-serif text-3xl font-bold text-[#000000] mb-3">Your Conversation Inbox</h3>
             <p className="text-[#6B6B6B] max-w-sm font-body text-lg italic opacity-80">"Luxury is in each detail, and our experts are here to help you refine yours."</p>
             <div className="mt-10 grid gap-4 max-w-xs w-full">
                <div className="p-4 bg-white border border-[#E8E4DF] rounded-xl text-left flex items-start gap-4">
                   <Clock className="w-5 h-5 text-[#C9A84C] shrink-0" />
                   <div>
                      <p className="text-xs font-bold text-[#000000] uppercase tracking-wider mb-1">Fast Response</p>
                      <p className="text-[12px] text-[#6B6B6B]">Our experts typically respond within 15 minutes during store hours.</p>
                   </div>
                </div>
                <div className="p-4 bg-white border border-[#E8E4DF] rounded-xl text-left flex items-start gap-4">
                   <CheckCheck className="w-5 h-5 text-green-500 shrink-0" />
                   <div>
                      <p className="text-xs font-bold text-[#000000] uppercase tracking-wider mb-1">Direct Access</p>
                      <p className="text-[12px] text-[#6B6B6B]">Get instant updates on your enquiries and bookings here.</p>
                   </div>
                </div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Missing Store icon helper
const Store = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
