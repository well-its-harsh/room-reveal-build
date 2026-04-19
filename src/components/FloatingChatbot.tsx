import { useState, useRef, useEffect } from "react";
import { Sparkles, X, Send, Bot, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import { cn } from "@/lib/utils";

// Chatbot Configuration
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_MODEL = "models/gemini-flash-latest";

const SYSTEM_CONTEXT = `You are the Shree Radhe AI Assistant, a senior sales and administrative consultant for Shree Radhe Tiles & Hardware in Paratwada, Amravati.

STORE IDENTITY & TAX:
- Full Name: Shree Radhe Tiles & Hardware
- GST Number: 09ABCDE1234F1Z5 (Registered in Maharashtra)
- Owners: Ravi Mishra (Primary) & Akash Mishra (Operations)
- Address: Mishra Line, Behind Police Station, Paratwada, Dist. Amravati, Maharashtra 444805

LEGAL POLICIES:
- Privacy Policy: We value customer data. View details at: /policies/privacy
- Terms of Service: Standard retail and installation terms apply. View at: /policies/terms
- Cookie Policy: We use cookies to enhance browsing. View at: /policies/cookies
- Data Deletion: Customers can request data removal at: /data-deletion
- Return Policy: 30-day hassle-free process for unused items in original packaging.

FAQS & COMMON QUESTIONS:
- Installation: We provide professional installation services for all tiles and hardware.
- Shipping: Free delivery on orders above ₹10,000 within a 50km radius.
- Warranty: Products from brands like Kerovit and Hindware carry standard manufacturer warranties (up to 10 years on ceramic furniture).
- Customization: We help with bathroom design via our AI Makeover tool (/ai-makeover).

TOP CATEGORIES & BEST SELLERS:
- Wash Basins: Wall Hung, Table Top (Best Seller), Counter Basin. Series: Amelia, Aoife.
- Toilets: One Piece Closets (Best Seller), Wall Hung, Smart Toilets.
- Faucets: Kerovit Urbane, Aurum Premium (Luxury Gold Finish).
- Tiles: Full body vitrified, Glazed, Designer elevation tiles.

PRODUCT NAVIGATION LINKS (Use these exactly):
- All Products: /products | Categories: /categories
- Wash Basins: /category/wash-basins | Toilets: /category/closets
- Faucets: /category/faucets-taps | Showers: /category/showers

RESPONSE RULES:
1. Be warm, professional, and detailed. Use Markdown (bold, tables, lists) to organize info.
2. Use Markdown TABLES for technical comparisons or multi-category listings.
3. If asked about legal/tax info (GST, Address), provide it clearly in a bold or boxed format.
4. If asked about policies, provide the specific link.
5. ALWAYS end with 1 or 2 navigation suggestions: [NAVIGATE:{"label":"Showroom Categories","url":"/categories"}]
6. Respond in the language used by the customer (English/Hindi).`;

interface Message {
  role: 'user' | 'assistant';
  content: string;
  navButtons?: { label: string; url: string }[];
}

interface FloatingChatbotProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  shiftLeft?: boolean;
  isMobile?: boolean;
}

export default function FloatingChatbot({ isOpen, setIsOpen, shiftLeft, isMobile }: FloatingChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I'm your Shree Radhe AI Assistant. Welcome to Shree Radhe Tiles & Hardware. How can I help you today?" }
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const parseNavButtons = (text: string) => {
    const navRegex = /\[NAVIGATE:(\{.*?\})\]/g;
    const buttons: { label: string; url: string }[] = [];
    let match;
    let cleanText = text;

    while ((match = navRegex.exec(text)) !== null) {
      try {
        const buttonData = JSON.parse(match[1]);
        buttons.push(buttonData);
        cleanText = cleanText.replace(match[0], '');
      } catch (e) {
        console.error("Failed to parse navigation button:", e);
      }
    }

    return { cleanText: cleanText.trim(), buttons };
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim() || isTyping) return;

    const userMessage = inputVal;
    setInputVal("");
    
    const newMessages = [...messages, { role: "user", content: userMessage } as Message];
    setMessages(newMessages);
    setIsTyping(true);

    try {
      const history = newMessages.slice(-20).map(msg => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      }));

      const url = `https://generativelanguage.googleapis.com/v1beta/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;
      
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: SYSTEM_CONTEXT }] },
          contents: history,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1024,
            topP: 0.9
          }
        })
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        console.error('Gemini API Error:', errorData);
        throw new Error(`API error ${res.status}`);
      }
      
      const data = await res.json();
      const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text ?? "I'm sorry, I'm having trouble responding right now.";
      
      const { cleanText, buttons } = parseNavButtons(rawText);

      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: cleanText,
        navButtons: buttons
      }]);
    } catch (err: any) {
      console.error("Chatbot Error:", err);
      const isRateLimit = err.message?.includes('429');
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: isRateLimit 
          ? "I'm receiving a lot of questions right now! Please wait about 30 seconds and try again, or reach us on WhatsApp."
          : "Sorry, I encountered an error. Please try again or talk to our human experts." 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleTalkToHuman = () => {
    window.open("https://wa.me/917588751610?text=Hi%2C%20I%20need%20help%20with%20a%20product", "_blank");
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: (isMobile && shiftLeft) ? '-48vh' : 0, 
              scale: 1,
              x: 0,
              right: isMobile ? 0 : 32
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={cn(
              "fixed bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#E8E4DF] flex flex-col h-full sm:h-[650px] z-[10000]",
              "inset-x-0 bottom-0 sm:inset-auto sm:bottom-[100px] sm:w-[380px]",
              (isMobile && shiftLeft) ? "h-[45vh]" : "max-sm:h-[90vh]"
            )}
            style={{ 
              right: !isMobile ? 32 : undefined 
            }}
          >
            {/* Header */}
            <div className="bg-[#C8860A] text-white px-4 py-4 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="font-bold text-[15px] block leading-tight">Shree Radhe Assistant</span>
                  <span className="text-[10px] text-white/80 uppercase tracking-widest font-medium">AI-POWERED HELP</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto bg-[#F7F5F2] flex flex-col gap-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`max-w-[100%] rounded-2xl px-4 py-2.5 text-[13.5px] leading-relaxed shadow-sm prose prose-sm ${
                    msg.role === 'user' 
                      ? 'bg-[#1A1A1A] text-white rounded-tr-sm' 
                      : 'bg-white text-[#1A1A1A] border border-[#E8E4DF] rounded-tl-sm'
                  }`}>
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  </div>
                  
                  {msg.navButtons && msg.navButtons.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 w-full">
                      {msg.navButtons.map((btn, idx) => (
                        <button
                          key={idx}
                          onClick={() => { navigate(btn.url); setIsOpen(false); }}
                          className="flex items-center justify-between gap-2 px-3 py-2.5 bg-white border border-[#C8860A]/30 text-[#1A1A1A] text-[11px] font-bold rounded-xl hover:border-[#C8860A] hover:bg-[#FBF7EF] transition-all shadow-sm active:scale-[0.98] group/btn"
                        >
                          <div className="flex items-center gap-2 overflow-hidden">
                            <div className="w-6 h-6 rounded-lg bg-[#FBF7EF] flex items-center justify-center group-hover/btn:bg-[#C8860A] transition-colors flex-shrink-0">
                               <ExternalLink className="w-2.5 h-2.5 text-[#C8860A] group-hover/btn:text-white" />
                            </div>
                            <span className="truncate">{btn.label}</span>
                          </div>
                          <Send className="w-2 h-2 text-[#C8860A] flex-shrink-0" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-[#E8E4DF] rounded-2xl rounded-tl-sm shadow-sm px-4 py-3 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-[#C8860A] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-1.5 h-1.5 bg-[#C8860A] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-1.5 h-1.5 bg-[#C8860A] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
            </div>

            {/* Footer / Input */}
            <div className="bg-white border-t border-[#E8E4DF] p-4 flex flex-col gap-3">
              <button 
                onClick={handleTalkToHuman} 
                className="flex items-center gap-2 text-[#6B6B6B] text-[12px] hover:text-[#C8860A] font-bold transition-colors w-fit"
              >
                <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full" />
                Talk to a Human Expert
              </button>
              
              <form onSubmit={handleSend} className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Ask about tiles or hardware..."
                  className="flex-1 px-4 py-2.5 bg-[#F7F5F2] text-[13px] rounded-full border border-transparent outline-none focus:border-[#C8860A] focus:bg-white transition-all"
                />
                <button 
                  type="submit" 
                  disabled={!inputVal.trim() || isTyping} 
                  className="w-10 h-10 rounded-full bg-[#C8860A] text-white flex items-center justify-center disabled:opacity-50 shadow-lg hover:bg-[#A36D07] active:scale-95 transition-all"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 rounded-full bg-[#C8860A] text-white shadow-2xl flex items-center justify-center hover:scale-110 hover:bg-[#A36D07] transition-all active:scale-95 group shrink-0"
        aria-label="Open AI Assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} className="flex flex-col items-center">
              <span className="font-serif font-black text-[18px] leading-none tracking-tighter">AI</span>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-[#C8860A] animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </>
  );
}
