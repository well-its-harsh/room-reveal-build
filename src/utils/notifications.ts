import { supabase } from "@/lib/supabase";

export type NotificationType = 'enquiry' | 'appointment' | 'video-call' | 'general' | 'review' | 'chat';

interface CreateNotificationParams {
  user_id?: string | null;
  title: string;
  message: string;
  type?: NotificationType;
  link?: string;
}

export const OWNER_USER_ID = import.meta.env.VITE_OWNER_USER_ID;

export async function createNotification({
  user_id = null,
  title,
  message,
  type = 'general',
  link
}: CreateNotificationParams) {

  const { data, error } = await supabase
    .from('notifications')
    .insert({
      user_id,
      title,
      message,
      type,
      link,
      is_read: false
    })
    .select()
    .single();

  if (error) {
    console.error("Error creating notification:", error);
  }

  return { data, error };
}
