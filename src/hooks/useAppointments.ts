import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { Appointment } from "@/types/database";
import { toast } from "sonner";

const WORKING_HOURS = [
  "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"
];

export function useAppointments(userId?: string) {
  const queryClient = useQueryClient();

  // Fetch all appointments for a user
  const appointmentsQuery = useQuery({
    queryKey: ["appointments", userId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("appointments")
        .select(`*, product:products(name)`)
        .eq("owner_id", userId)
        .order("date", { ascending: false });
      if (error) throw error;
      return data;
    },
    enabled: !!userId,
  });

  // Check slot availability
  const checkAvailability = (date: string) => {
    return useQuery({
      queryKey: ["availability", date],
      queryFn: async () => {
        const { data, error } = await supabase
          .from("appointments")
          .select("time")
          .eq("date", date)
          .neq("status", "cancelled");
        if (error) throw error;
        
        const booked = data.map(a => a.time);
        return WORKING_HOURS.filter(h => !booked.includes(h));
      },
      enabled: !!date,
    });
  };

  // Book Appointment
  const bookAppointment = useMutation({
    mutationFn: async ({ 
      date, 
      time, 
      notes, 
      productId 
    }: { 
      date: string; 
      time: string; 
      notes?: string; 
      productId?: string 
    }) => {
      if (!userId) throw new Error("Login required");

      const { data: appointment, error } = await supabase
        .from("appointments")
        .insert({
          owner_id: userId,
          date,
          time,
          notes,
          product_id: productId,
          status: "pending"
        })
        .select()
        .single();

      if (error) throw error;

      // Notify Owner
      await supabase.from("notifications").insert({
        user_id: "owner-id-placeholder", // Owner ID should be fetched or dynamic
        message: `New appointment booked for ${date} at ${time}`,
        is_read: false
      });

      return appointment;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appointments", userId] });
      toast.success("Appointment booked!");
    },
    onError: (err: any) => toast.error(err.message),
  });

  // Cancel Appointment
  const cancelAppointment = useMutation({
    mutationFn: async (id: string) => {
      return supabase
        .from("appointments")
        .update({ status: "cancelled" })
        .eq("id", id);
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["appointments", userId] }),
  });

  return {
    appointments: appointmentsQuery.data || [],
    isLoading: appointmentsQuery.isLoading,
    checkAvailability,
    bookAppointment,
    cancelAppointment
  };
}
