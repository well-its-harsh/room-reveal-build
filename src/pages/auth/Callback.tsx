import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // First check if Supabase already handled the session (auto-detect)
        const { data: { session: existingSession } } = await supabase.auth.getSession();
        
        if (existingSession) {
          await handleUserRedirect(existingSession.user);
          return;
        }

        const code = new URLSearchParams(window.location.search).get('code');
        if (!code) {
          navigate('/login');
          return;
        }

        const { data, error } = await supabase.auth.exchangeCodeForSession(code);
        if (error) throw error;

        if (data.user) {
          await handleUserRedirect(data.user);
        } else {
          navigate('/login');
        }
      } catch (error: any) {
        // If the code was already exchanged, we might get an error but still have a session
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
          await handleUserRedirect(session.user);
        } else {
          console.error('Error during auth callback:', error);
          toast.error("Authentication failed: " + error.message);
          navigate('/login');
        }
      }
    };

    const handleUserRedirect = async (user: any) => {
      // Check if profile exists
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single();

      if (profileError || !profile) {
        // Upsert profile for new OAuth users
        const { error: upsertError } = await supabase.from('profiles').upsert({
          id: user.id,
          full_name: user.user_metadata?.full_name ?? '',
          avatar_url: user.user_metadata?.avatar_url ?? '',
          role: 'customer'
        }, { onConflict: 'id', ignoreDuplicates: true });

        if (upsertError) console.error('Profile upsert error:', upsertError);
        navigate('/');
      } else {
        // Redirect based on role
        if (profile.role === 'owner' || profile.role === 'admin') {
          navigate('/owner');
        } else {
          navigate('/');
        }
      }
    };

    handleCallback();
  }, [navigate]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[#C9A84C] border-t-transparent rounded-full animate-spin" />
        <p className="text-[#000000] font-serif font-bold animate-pulse">Completing Authentication...</p>
      </div>
    </div>
  );
}
