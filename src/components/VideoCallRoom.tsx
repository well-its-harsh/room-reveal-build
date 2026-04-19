import React, { useEffect, useRef } from 'react';
import { supabase } from '@/lib/supabase';
import { X } from 'lucide-react';

interface VideoCallRoomProps {
  roomUrl: string;
  appointmentId: string;
  participantType: 'customer' | 'owner';
  onLeave: () => void;
}

const VideoCallRoom: React.FC<VideoCallRoomProps> = ({ roomUrl, appointmentId, participantType, onLeave }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<any>(null);

  useEffect(() => {
    if (!roomUrl || !containerRef.current) return;

    // Get room name from URL
    const roomName = roomUrl.split('/').pop() || '';

    // Initialize Jitsi API
    const domain = "meet.jit.si";
    const options = {
      roomName: roomName,
      width: '100%',
      height: '100%',
      parentNode: containerRef.current,
      configOverwrite: {
        prejoinPageEnabled: false,
        disableDeepLinking: true,
        startWithAudioMuted: false,
        startWithVideoMuted: false,
      },
      interfaceConfigOverwrite: {
        SHOW_JITSI_WATERMARK: false,
        SHOW_WATERMARK_FOR_GUESTS: false,
        DEFAULT_BACKGROUND: '#0a0a0a',
        TOOLBAR_BUTTONS: [
          'microphone', 'camera', 'closedcaptions', 'desktop', 'fullscreen',
          'fodeviceselection', 'hangup', 'profile', 'chat', 'recording',
          'livestreaming', 'etherpad', 'sharedvideo', 'settings', 'raisehand',
          'videoquality', 'filmstrip', 'invite', 'feedback', 'stats', 'shortcuts',
          'tileview', 'videobackgroundblur', 'download', 'help', 'mute-everyone',
          'security'
        ],
      },
      userInfo: {
        displayName: participantType === 'owner' ? 'SRTH Manager' : 'Guest'
      }
    };

    // @ts-ignore
    const api = new window.JitsiMeetExternalAPI(domain, options);
    apiRef.current = api;

    api.addEventListener('videoConferenceLeft', () => {
      onLeave();
    });

    // Track participation
    const logJoin = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      
      await supabase.from('call_participants').upsert({
        appointment_id: appointmentId,
        user_id: user?.id || null,
        participant_type: participantType,
        joined_at: new Date().toISOString(),
        is_active: true
      }, { onConflict: 'appointment_id,participant_type' });

      await supabase.from('call_events').insert({
        appointment_id: appointmentId,
        event_type: `${participantType}_joined`,
        participant_type: participantType
      });

      if (participantType === 'customer') {
        await supabase.from('appointments').update({ 
          customer_joined: true, 
          call_started_at: new Date().toISOString() 
        }).eq('id', appointmentId);
      } else {
        await supabase.from('appointments').update({ 
          owner_joined: true 
        }).eq('id', appointmentId);
      }
    };

    logJoin();

    return () => {
      if (apiRef.current) apiRef.current.dispose();
      
      const logLeave = async () => {
        await supabase.from('call_participants').update({ 
          left_at: new Date().toISOString(), 
          is_active: false 
        })
        .eq('appointment_id', appointmentId)
        .eq('participant_type', participantType);

        await supabase.from('call_events').insert({
          appointment_id: appointmentId,
          event_type: `${participantType}_left`,
          participant_type: participantType
        });
      };
      logLeave();
    };
  }, [roomUrl, appointmentId, participantType]);

  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100vw', 
      height: '100vh', 
      zIndex: 99999, 
      background: '#0a0a0a', 
      display: 'flex', 
      flexDirection: 'column',
      overflow: 'hidden'
    }}>
      {/* Premium Branded Header */}
      <div style={{ 
        height: '70px', 
        background: '#0F172A', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: '0 30px', 
        flexShrink: 0,
        boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
        borderBottom: '1px solid #C8860A33'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <img 
            src="/images/logo.png" 
            alt="Logo" 
            style={{ height: '45px', filter: 'brightness(1.2)' }} 
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ 
              color: 'white', 
              fontFamily: 'Playfair Display, serif', 
              fontWeight: 700, 
              fontSize: '20px',
              letterSpacing: '0.02em'
            }}>
              Shree Radhe Tiles & Hardware
            </span>
            <span style={{ 
              color: '#C8860A', 
              fontSize: '11px', 
              fontWeight: 600, 
              textTransform: 'uppercase', 
              letterSpacing: '0.2em' 
            }}>
              Luxury Video Consultation
            </span>
          </div>
          <div style={{ 
            width: '10px', 
            height: '10px', 
            background: '#2ecc71', 
            borderRadius: '50%', 
            boxShadow: '0 0 10px #2ecc71',
            marginLeft: '10px'
          }} />
        </div>
        
        <button
          onClick={onLeave}
          style={{ 
            background: 'transparent', 
            color: '#ff4d4d', 
            border: '1px solid #ff4d4d', 
            borderRadius: '8px', 
            padding: '10px 24px', 
            cursor: 'pointer', 
            fontSize: '14px', 
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = '#ff4d4d';
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 77, 77, 0.3)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#ff4d4d';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <X size={18} />
          End Session
        </button>
      </div>
      
      {/* Jitsi Container */}
      <div 
        ref={containerRef} 
        style={{ flex: 1, background: '#0a0a0a' }} 
      />
    </div>
  );
};

export default VideoCallRoom;
