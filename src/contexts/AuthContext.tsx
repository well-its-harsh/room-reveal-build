import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { User, Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import { Profile } from "@/types/database";

interface AuthContextType {
  user: User | null;
  profile: Profile | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string, fullName: string, phone: string) => Promise<{ error: any }>;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  isAdmin: boolean;
  isOwner: boolean;
  isStaff: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const ROLE_CACHE_KEY = "bathhaus-profile-cache";

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
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .maybeSingle();

      if (error) {
        console.warn("Profile fetch error:", error.message);
        const cached = getCachedProfile();
        if (cached && cached.id === userId) {
          setProfile(cached);
        } else {
          setProfile(null);
          cacheProfile(null);
        }
        return;
      }

      if (data) {
        setProfile(data);
        cacheProfile(data);
      } else {
        const meta = (await supabase.auth.getUser()).data.user?.user_metadata;
        const fallback: Profile = {
          id: userId,
          full_name: meta?.full_name || null,
          phone: meta?.phone || null,
          role: "customer",
          created_at: new Date().toISOString(),
        };
        setProfile(fallback);
        cacheProfile(fallback);
      }
    } catch {
      setProfile(null);
      cacheProfile(null);
    }
  };

  useEffect(() => {
    // Set up auth listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        if (session?.user) {
          // Use setTimeout to avoid Supabase deadlock
          setTimeout(() => fetchProfile(session.user.id), 0);
        } else {
          setProfile(null);
          cacheProfile(null);
          setLoading(false);
        }
      }
    );

    // Then get initial session
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        await fetchProfile(session.user.id);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
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

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setProfile(null);
    setSession(null);
    cacheProfile(null);
  };

  const isAdmin = profile?.role === "admin";
  const isOwner = profile?.role === "admin" || profile?.role === "staff";
  const isStaff = profile?.role === "staff";

  return (
    <AuthContext.Provider value={{ user, profile, session, loading, signUp, signIn, signOut, isAdmin, isOwner, isStaff }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
