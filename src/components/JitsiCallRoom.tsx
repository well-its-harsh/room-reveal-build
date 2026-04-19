import React, { useEffect, useRef, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { PhoneOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface JitsiCallRoomProps {
  appointmentId: string;
  participantType: 'owner' | 'customer';
  participantName: string;
  appointmentDate: string;
  timeSlot: string;
  productName?: string;
  customerName?: string;
  onLeave: () => void;
  logoUrl?: string;
}

const JitsiCallRoom: React.FC<JitsiCallRoomProps> = ({
  appointmentId,
  participantType,
  participantName,
  appointmentDate,
  timeSlot,
  productName,
  customerName,
  onLeave,
  logoUrl
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<any>(null);
  const [callDuration, setCallDuration] = useState(0);
  const [showInfoBar, setShowInfoBar] = useState(true);

  // Auto-hide info bar after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowInfoBar(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  // Timer logic
  useEffect(() => {
    const interval = window.setInterval(() => {
      setCallDuration(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatDuration = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    const parts = [
      mins.toString().padStart(2, '0'),
      secs.toString().padStart(2, '0')
    ];
    if (hrs > 0) parts.unshift(hrs.toString().padStart(2, '0'));
    return parts.join(':');
  };

  useEffect(() => {
    const initJitsi = async () => {
      if (!(window as any).JitsiMeetExternalAPI) {
        const script = document.createElement('script');
        script.src = 'https://meet.jit.si/external_api.js';
        script.async = true;
        document.head.appendChild(script);
        await new Promise(resolve => { script.onload = resolve; });
      }

      const domain = 'meet.jit.si';
      const options = {
        roomName: `SRTaH-${appointmentId.replace(/-/g, '').slice(0, 16)}`,
        width: '100%',
        height: '100%',
        parentNode: containerRef.current,
        configOverwrite: {
          startWithAudioMuted: false,
          startWithVideoMuted: false,
          disableDeepLinking: true,
          enableWelcomePage: false,
          enableClosePage: false,
          disableInviteFunctions: true,
          hideConferenceSubject: true,
          hideConferenceTimer: true,
          prejoinPageEnabled: false,
          disableThirdPartyRequests: true,
          defaultRemoteDisplayName: 'Participant',
          subject: 'Shree Radhe Tiles & Hardware',
          toolbarButtons: [
            'microphone', 'camera', 'hangup',
            'chat', 'tileview', 'settings', 'videoquality', 'fullscreen'
          ],
          doNotStoreRoom: true,
          hideConferenceSubjectText: true,
          disableRemoteMute: true,
          remoteVideoMenu: {
            disableKick: true
          }
        },
        interfaceConfigOverwrite: {
          SHOW_JITSI_WATERMARK: false,
          SHOW_WATERMARK_FOR_GUESTS: false,
          SHOW_BRAND_WATERMARK: false,
          BRAND_WATERMARK_LINK: 'https://shreeradhetiles.com',
          JITSI_WATERMARK_LINK: 'https://shreeradhetiles.com',
          SHOW_POWERED_BY: false,
          DISPLAY_WELCOME_FOOTER: false,
          SHOW_CHROME_EXTENSION_BANNER: false,
          APP_NAME: 'Shree Radhe Tiles & Hardware',
          NATIVE_APP_NAME: 'Shree Radhe Tiles & Hardware',
          PROVIDER_NAME: 'Shree Radhe Tiles & Hardware',
          DEFAULT_LOGO_URL: logoUrl,
          DEFAULT_REMOTE_DISPLAY_NAME: 'Guest',
          DEFAULT_LOCAL_DISPLAY_NAME: participantName,
          TOOLBAR_BUTTONS: [
            'microphone', 'camera', 'hangup',
            'chat', 'tileview', 'settings'
          ],
          SETTINGS_SECTIONS: ['devices', 'language', 'profile'],
          RECENT_LIST_ENABLED: false,
          VIDEO_QUALITY_LABEL_DISABLED: true,
        },
        userInfo: {
          displayName: participantName,
        }
      };

      // @ts-ignore
      const api = new window.JitsiMeetExternalAPI(domain, options);
      apiRef.current = api;

      api.addEventListener('videoConferenceJoined', () => {
        if (participantType === 'customer') {
          supabase.from('appointments').update({ 
            customer_joined: true, 
            call_started_at: new Date().toISOString() 
          }).eq('id', appointmentId);
        } else {
          supabase.from('appointments').update({ owner_joined: true }).eq('id', appointmentId);
        }
      });

      api.addEventListener('videoConferenceLeft', () => {
        if (participantType === 'owner') {
          supabase.from('appointments').update({ 
            status: 'completed', 
            call_ended_at: new Date().toISOString() 
          }).eq('id', appointmentId);
        }
        onLeave();
      });
    };

    initJitsi();

    return () => {
      if (apiRef.current) apiRef.current.dispose();
    };
  }, [appointmentId, participantName, participantType, onLeave, logoUrl]);

  const handleHangup = () => {
    if (apiRef.current) {
      apiRef.current.executeCommand('hangup');
      setTimeout(onLeave, 500);
    } else {
      onLeave();
    }
  };

  return (
    <div className="fixed inset-0 z-[10000] bg-black flex flex-col font-sans overflow-hidden">
      {/* Premium Header Overlay */}
      <header className="absolute top-0 left-0 right-0 z-10 h-[90px] bg-gradient-to-b from-black via-black/60 to-transparent px-10 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-8 pointer-events-auto">
          {logoUrl ? (
            <img src={logoUrl} alt="SRTAH" className="h-12 w-auto object-contain drop-shadow-2xl" />
          ) : (
            <div className="flex flex-col">
              <span className="font-serif font-bold text-[#C9A84C] text-2xl tracking-tighter leading-none">SHREE RADHE</span>
              <span className="font-serif text-[11px] text-white/70 tracking-[0.4em] uppercase">Tiles & Hardware</span>
            </div>
          )}
          
          <div className="w-px bg-[#C9A84C]/30 h-10 hidden md:block" />
          
          <div className="flex flex-col">
            <span className="text-white text-lg md:text-xl font-serif font-light tracking-wider flex items-center gap-3">
              Elite Architectural Consultation
              <span className="text-[#C9A84C] text-[10px] px-3 py-1 border border-[#C9A84C]/40 rounded-full font-sans uppercase font-black tracking-widest bg-black/40 backdrop-blur-md">End-to-End Encrypted</span>
            </span>
            <span className="text-[#C9A84C]/80 text-xs font-medium tracking-[0.15em] flex items-center gap-2 mt-0.5">
               {productName ? `Focusing on: ${productName}` : "Direct Design & Layout Discussion"}
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-4 ml-8 px-5 py-2.5 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]"></span>
              </span>
              <span className="text-white font-mono text-sm tracking-widest">{formatDuration(callDuration)}</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <span className="text-[10px] text-[#C9A84C] uppercase font-black tracking-[0.2em]">{participantType === 'owner' ? `Client: ${customerName || 'Connecting...'}` : 'Design Expert Presence'}</span>
          </div>
        </div>

        <div className="flex items-center gap-6 pointer-events-auto">
          <button
            onClick={handleHangup}
            className="group flex items-center gap-4 bg-[#EE4B2B] hover:bg-[#FF3131] text-white pl-6 pr-2.5 py-2.5 rounded-full transition-all duration-500 shadow-[0_10px_40px_rgba(238,75,43,0.3)] hover:scale-105 active:scale-95"
          >
            <span className="text-[11px] font-black uppercase tracking-[0.2em]">End Consultation</span>
            <div className="w-11 h-11 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
               <PhoneOff className="w-5 h-5" />
            </div>
          </button>
        </div>
      </header>

      {/* Jitsi Content */}
      <div ref={containerRef} className="flex-1 bg-black" />

      {!apiRef.current && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#050505] z-50">
           <div className="relative w-32 h-32 mb-10">
              <div className="absolute inset-0 border-2 border-[#C9A84C]/5 rounded-full scale-150 animate-pulse"></div>
              <div className="absolute inset-0 border-t-2 border-[#C9A84C] rounded-full animate-spin"></div>
              <div className="absolute inset-4 border-b-2 border-[#C9A84C]/40 rounded-full animate-spin [animation-duration:1.5s]"></div>
           </div>
           <h3 className="font-serif text-3xl text-white font-bold mb-3 tracking-tight">Shree Radhe Tiles & Hardware</h3>
           <p className="text-[#C9A84C] text-[10px] animate-pulse font-black tracking-[0.4em] uppercase">Initializing Luxury Studio Environment</p>
        </div>
      )}

      {/* Bottom Subtle Overlay */}
      <AnimatePresence>
        {showInfoBar && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-2xl px-10 py-4 rounded-full text-white/40 text-[9px] uppercase font-black tracking-[0.3em] pointer-events-none z-[10001] border border-white/5 shadow-2xl"
          >
            Session is <span className="text-[#C9A84C]">Live & Private</span> • {appointmentDate}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JitsiCallRoom;
