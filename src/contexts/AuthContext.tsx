import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { User, Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import { Profile } from "@/types/database";

interface AuthContextType {
  user: User | null;
  profile: Profile | null;
  role: string | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string, fullName: string, phone: string) => Promise<{ error: any }>;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  signInWithOAuth: (provider: "google") => Promise<{ data: any; error: any }>;
  isAdmin: boolean;
  isOwner: boolean;
  isStaff: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const ROLE_CACHE_KEY = "Shree Radhe Tiles & Hardware-profile-cache";

function cacheProfile(profile: Profile | null) {
  if (profile) {
    localStorage.setItem(ROLE_CACHE_KEY, JSON.stringify(profile));
  } else {
    localStorage.removeItem(ROLE_CACHE_KEY);
  }
}

function getCachedProfile(): Profile | null {
  try {
    const stored = localStorage.getItem(ROLE_CACHE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(getCachedProfile);
  const [role, setRole] = useState<string | null>(() => localStorage.getItem("Shree Radhe Tiles & Hardware_role"));
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();

      if (error) {
        console.error("Profile fetch error:", error.message);
        setProfile(null);
        setRole(null);
        cacheProfile(null);
        localStorage.removeItem("Shree Radhe Tiles & Hardware_role");
        return;
      }

      if (data) {
        setProfile(data);
        setRole(data.role);
        cacheProfile(data);
        if (data.role) {
          localStorage.setItem("Shree Radhe Tiles & Hardware_role", data.role);
        } else {
          localStorage.removeItem("Shree Radhe Tiles & Hardware_role");
        }
      } else {
        setProfile(null);
        setRole(null);
        cacheProfile(null);
        localStorage.removeItem("Shree Radhe Tiles & Hardware_role");
      }
    } catch (err) {
      console.error("Error fetching profile:", err);
      setProfile(null);
      setRole(null);
      cacheProfile(null);
      localStorage.removeItem("Shree Radhe Tiles & Hardware_role");
    }
  };
useEffect(() => {
  let mounted = true;

  const initSession = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!mounted) return;
    setSession(session);
    setUser(session?.user ?? null);
    if (session?.user) {
      await fetchProfile(session.user.id);
    } else {
      setProfile(null);
      setRole(null);
      cacheProfile(null);
      localStorage.removeItem('Shree Radhe Tiles & Hardware_role');
    }
    setLoading(false);
  };

  initSession();

  const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
    if (!mounted) return;
    setSession(session);
    setUser(session?.user ?? null);
    
    if (session?.user) {
      if (event === 'SIGNED_IN') {
        // Upsert profile for OAuth or new sessions
        await supabase.from('profiles').upsert({
          id: session.user.id,
          full_name: session.user.user_metadata?.full_name ?? session.user.user_metadata?.name ?? '',
          avatar_url: session.user.user_metadata?.avatar_url ?? '',
          role: 'customer'
        });
      }
      await fetchProfile(session.user.id);
    } else {
      setProfile(null);
      setRole(null);
      cacheProfile(null);
      localStorage.removeItem('Shree Radhe Tiles & Hardware_role');
      setLoading(false);
    }
  });

  return () => {
    mounted = false;
    subscription.unsubscribe();
  };
}, []);

  const signUp = async (email: string, password: string, fullName: string, phone: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: window.location.origin,
        data: { full_name: fullName, phone },
      },
    });

    if (!error && data.user) {
      // Adding default role to match expectations
      await supabase.from("profiles").insert({
        id: data.user.id,
        full_name: fullName,
        phone,
        role: "customer",
      });
    }

    return { error };
  };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return { error };
  };

  const signInWithOAuth = async (provider: "google") => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    return { data, error };
  };

  const signOut = async () => {
    try {
      // Clear Supabase session with a safety timeout logic
      await Promise.race([
        supabase.auth.signOut(),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Sign out timeout")), 3000))
      ]).catch(err => console.warn("Supabase signOut error or timeout:", err));
    } catch (err) {
      console.error("Error during signing out:", err);
    } finally {
      // Forcefully clear all local auth state
      setUser(null);
      setProfile(null);
      setRole(null);
      setSession(null);
      cacheProfile(null);
      localStorage.removeItem("Shree Radhe Tiles & Hardware-profile-cache");
      localStorage.removeItem("Shree Radhe Tiles & Hardware_role");
      // Optional: Clear Supabase local storage keys too if needed
      Object.keys(localStorage).forEach(key => {
        if (key.includes('sb-') && key.includes('-auth-token')) {
          localStorage.removeItem(key);
        }
      });
    }
  };

  const isAdmin = role === "admin";
  const isOwner = role === "admin" || role === "owner" || role === "staff";
  const isStaff = role === "staff";

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-muted-foreground font-body">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, profile, role, session, loading, signUp, signIn, signOut, signInWithOAuth, isAdmin, isOwner, isStaff }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
