import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { Shipment } from "@/types/database";

export function useShipment(orderId: string) {
  return useQuery({
    queryKey: ["shipment", orderId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("shipments")
        .select("*")
        .eq("order_id", orderId)
        .maybeSingle();
      if (error) throw error;
      return data as Shipment | null;
    },
    enabled: !!orderId,
  });
}
