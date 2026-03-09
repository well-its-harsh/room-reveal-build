import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ulzqcpceklkwxzceykbd.supabase.co';
const supabaseKey = 'sb_publishable_-KnA9VtKNvf0uBm3LKxb8w_LGckjrZi';

export const supabase = createClient(supabaseUrl, supabaseKey);
