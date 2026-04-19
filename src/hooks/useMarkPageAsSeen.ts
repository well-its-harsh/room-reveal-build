import { useEffect } from 'react';
import { supabase } from '@/lib/supabase';

type PageKey = 'enquiries' | 'appointments' | 'video-calls' | 'reviews' | 'notifications';

export const useMarkPageAsSeen = (pageKey: PageKey) => {

  useEffect(() => {
    const mark = async () => {
      switch (pageKey) {
        case 'enquiries':
          await supabase
            .from('enquiries')
            .update({ seen_by_owner: true })
            .eq('seen_by_owner', false);
          break;
        case 'appointments':
          await supabase
            .from('appointments')
            .update({ seen_by_owner: true })
            .eq('seen_by_owner', false)
            .neq('visit_type', 'video-call');
          break;
        case 'video-calls':
          await supabase
            .from('appointments')
            .update({ seen_by_owner: true })
            .eq('seen_by_owner', false)
            .eq('visit_type', 'video-call');
          break;
        case 'reviews':
          await supabase
            .from('reviews')
            .update({ seen_by_owner: true })
            .eq('seen_by_owner', false);
          break;
        case 'notifications':
          await supabase
            .from('notifications')
            .update({ is_read: true })
            .eq('user_id', import.meta.env.VITE_OWNER_USER_ID)
            .eq('is_read', false);
          break;
      }
    };
    mark();
  }, [pageKey]);
};
