import { SupabaseClient } from '@supabase/supabase-js';

export const TIME_SLOTS = [
  '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM',  '2:00 PM',  '3:00 PM',
  '4:00 PM',  '5:00 PM',  '6:00 PM',
  '7:00 PM',  '8:00 PM',  '9:00 PM'
];

export const getAvailableSlots = async (supabase: SupabaseClient, date: string) => {
  const { data } = await supabase
    .from('appointments')
    .select('time_slot')
    .eq('appointment_date', date)
    .eq('visit_type', 'video-call')
    .in('status', ['confirmed', 'pending', 'rescheduled']);

  const booked = new Set(data?.map(r => r.time_slot) ?? []);
  
  const now = new Date();
  const todayStr = now.toISOString().split('T')[0];

  return TIME_SLOTS.map(slot => {
    let available = !booked.has(slot);
    
    // If it's today, check if the slot is in the future
    if (date === todayStr) {
      const slotTime = slotToDateTime(date, slot);
      if (slotTime < now) {
        available = false;
      }
    }
    
    return { slot, available };
  });
};

export const isSlotAvailable = async (supabase: SupabaseClient, date: string, timeSlot: string) => {
  const { data } = await supabase
    .from('appointments')
    .select('id')
    .eq('appointment_date', date)
    .eq('time_slot', timeSlot)
    .eq('visit_type', 'video-call')
    .in('status', ['confirmed', 'pending'])
    .limit(1);
  return !data || data.length === 0;
};

// Convert slot string to a Date object for comparison
export const slotToDateTime = (date: string, timeSlot: string): Date => {
  const [time, period] = timeSlot.split(' ');
  const [h, m] = time.split(':').map(Number);
  let hour = h;
  if (period === 'PM' && h !== 12) hour += 12;
  if (period === 'AM' && h === 12) hour = 0;
  return new Date(`${date}T${String(hour).padStart(2,'0')}:${String(m).padStart(2,'0')}:00`);
};

export const canJoinCall = (date: string, timeSlot: string): boolean => {
  const slotTime = slotToDateTime(date, timeSlot);
  const now = new Date();
  const fiveMinsBefore = new Date(slotTime.getTime() - 5 * 60 * 1000);
  const ninetyMinsAfter = new Date(slotTime.getTime() + 90 * 60 * 1000);
  return now >= fiveMinsBefore && now <= ninetyMinsAfter;
};

export const getCountdownMinutes = (date: string, timeSlot: string): number => {
  const slotTime = slotToDateTime(date, timeSlot);
  const fiveMinsBefore = new Date(slotTime.getTime() - 5 * 60 * 1000);
  const diff = fiveMinsBefore.getTime() - Date.now();
  return Math.max(0, Math.ceil(diff / 60000));
};
