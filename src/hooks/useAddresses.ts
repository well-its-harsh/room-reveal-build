import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";
import { Address } from "@/types/database";

export function useAddresses() {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["addresses", user?.id],
    queryFn: async () => {
      if (!user) return [];
      const { data, error } = await supabase
        .from("addresses")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data as Address[];
    },
    enabled: !!user,
  });

  const addAddress = useMutation({
    mutationFn: async (addr: Omit<Address, "id" | "user_id" | "created_at">) => {
      if (!user) throw new Error("Not authenticated");
      const { error } = await supabase.from("addresses").insert({ ...addr, user_id: user.id });
      if (error) throw error;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["addresses", user?.id] }),
  });

  const deleteAddress = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("addresses").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["addresses", user?.id] }),
  });

  return { addresses: query.data || [], isLoading: query.isLoading, addAddress, deleteAddress };
}
