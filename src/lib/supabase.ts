import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ulzqcpceklkwxzceykbd.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_-KnA9VtKNvf0uBm3LKxb8w_LGckjrZi';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    storageKey: 'Shree Radhe Tiles & Hardware-auth',
    lock: (name, acquireTimeout, fn) => fn()
  }
});
