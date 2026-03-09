import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const statusOptions = ["pending", "confirmed", "processing", "shipped", "delivered", "cancelled"];

export default function OrderManagement() {
  const queryClient = useQueryClient();

  const { data: orders = [], isLoading } = useQuery({
    queryKey: ["admin-orders"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("orders")
        .select("*, order_items(*, product:products(name)), profile:profiles(full_name, phone)")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const updateStatus = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      const { error } = await supabase.from("orders").update({ status }).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-orders"] });
      toast.success("Order status updated");
    },
    onError: (err: any) => toast.error(err.message),
  });

  const statusColor = (status: string) => {
    const colors: Record<string, string> = {
      pending: "bg-yellow-100 text-yellow-800",
      confirmed: "bg-blue-100 text-blue-800",
      processing: "bg-purple-100 text-purple-800",
      shipped: "bg-indigo-100 text-indigo-800",
      delivered: "bg-green-100 text-green-800",
      cancelled: "bg-red-100 text-red-800",
    };
    return colors[status] || "bg-secondary text-secondary-foreground";
  };

  return (
    <div>
      <h2 className="font-heading text-xl font-semibold text-foreground mb-6">Orders</h2>

      {isLoading ? (
        <p className="text-muted-foreground font-body">Loading...</p>
      ) : orders.length === 0 ? (
        <p className="text-muted-foreground font-body text-center py-8">No orders yet.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order: any) => (
            <div key={order.id} className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-heading text-sm font-medium text-foreground">
                    {order.profile?.full_name || "Customer"}
                  </p>
                  <p className="text-xs text-muted-foreground font-body">{order.profile?.phone}</p>
                  <p className="text-xs text-muted-foreground font-body">
                    {new Date(order.created_at).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className={`text-xs font-medium px-2 py-1 rounded font-body ${statusColor(order.status)}`}>
                    {order.status}
                  </span>
                  <p className="font-heading text-base font-bold text-accent">
                    ₹{order.total_amount?.toLocaleString("en-IN")}
                  </p>
                </div>
              </div>

              {/* Items */}
              <div className="border-t border-border pt-2 mb-3">
                {order.order_items?.map((item: any) => (
                  <div key={item.id} className="flex justify-between text-xs text-muted-foreground font-body py-1">
                    <span>{item.product?.name} × {item.quantity}</span>
                    <span>₹{(item.price * item.quantity).toLocaleString("en-IN")}</span>
                  </div>
                ))}
              </div>

              {/* Status Update */}
              <select
                value={order.status}
                onChange={(e) => updateStatus.mutate({ id: order.id, status: e.target.value })}
                className="text-xs font-body border border-input rounded px-2 py-1 bg-background"
              >
                {statusOptions.map((s) => (
                  <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
