import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useState } from "react";

export default function InventoryManagement() {
  const queryClient = useQueryClient();

  const { data: inventory = [], isLoading } = useQuery({
    queryKey: ["admin-inventory"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("inventory")
        .select("*, product:products(name, price)")
        .order("last_updated", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, quantity }: { id: string; quantity: number }) => {
      const { error } = await supabase
        .from("inventory")
        .update({ quantity, last_updated: new Date().toISOString() })
        .eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-inventory"] });
      toast.success("Inventory updated");
    },
    onError: (err: any) => toast.error(err.message),
  });

  return (
    <div>
      <h2 className="font-heading text-xl font-semibold text-foreground mb-6">Inventory</h2>

      {isLoading ? (
        <p className="text-muted-foreground font-body">Loading...</p>
      ) : inventory.length === 0 ? (
        <p className="text-muted-foreground font-body text-center py-8">No inventory records found.</p>
      ) : (
        <div className="space-y-3">
          {inventory.map((item: any) => (
            <InventoryRow key={item.id} item={item} onUpdate={(qty) => updateMutation.mutate({ id: item.id, quantity: qty })} />
          ))}
        </div>
      )}
    </div>
  );
}

function InventoryRow({ item, onUpdate }: { item: any; onUpdate: (qty: number) => void }) {
  const [qty, setQty] = useState(String(item.quantity));

  return (
    <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg">
      <div className="flex-1 min-w-0">
        <h4 className="font-heading text-sm font-medium text-foreground line-clamp-1">{item.product?.name || "Unknown"}</h4>
        <p className="text-xs text-muted-foreground font-body">
          Last updated: {new Date(item.last_updated).toLocaleDateString()}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Input
          type="number"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
          className="w-20 font-body text-center"
          min="0"
        />
        <button
          onClick={() => onUpdate(parseInt(qty) || 0)}
          disabled={parseInt(qty) === item.quantity}
          className="text-xs font-medium text-accent hover:text-accent/80 font-body disabled:opacity-50"
        >
          Save
        </button>
      </div>
      <span className={`text-xs font-medium font-body px-2 py-1 rounded ${
        item.quantity > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
      }`}>
        {item.quantity > 0 ? "In Stock" : "Out"}
      </span>
    </div>
  );
}
