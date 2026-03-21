import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

const statusOptions = [
  "pending", "confirmed", "processing", "packed", "shipped",
  "out for delivery", "delivered", "cancelled",
  "ready for pickup", "appointment scheduled", "visit shop to confirm",
  "return requested", "returned",
];

const statusColor = (s: string) => {
  const c: Record<string, string> = {
    pending: "bg-yellow-100 text-yellow-800",
    confirmed: "bg-blue-100 text-blue-800",
    processing: "bg-purple-100 text-purple-800",
    packed: "bg-indigo-100 text-indigo-800",
    shipped: "bg-indigo-100 text-indigo-800",
    "out for delivery": "bg-cyan-100 text-cyan-800",
    delivered: "bg-green-100 text-green-800",
    cancelled: "bg-red-100 text-red-800",
    "ready for pickup": "bg-teal-100 text-teal-800",
    "appointment scheduled": "bg-amber-100 text-amber-800",
    "visit shop to confirm": "bg-orange-100 text-orange-800",
    "return requested": "bg-rose-100 text-rose-800",
    returned: "bg-gray-100 text-gray-800",
  };
  return c[s] || "bg-secondary text-secondary-foreground";
};

export default function OrderManagement() {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

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
      queryClient.invalidateQueries({ queryKey: ["owner-recent-orders"] });
      queryClient.invalidateQueries({ queryKey: ["owner-stats"] });
      toast.success("Order status updated");
    },
    onError: (err: any) => toast.error(err.message),
  });

  const filtered = orders.filter((o: any) => {
    const matchSearch = !search || o.profile?.full_name?.toLowerCase().includes(search.toLowerCase()) || o.id.includes(search);
    const matchStatus = filterStatus === "all" || o.status === filterStatus;
    return matchSearch && matchStatus;
  });

  return (
    <div>
      <h2 className="font-heading text-xl font-semibold text-foreground mb-6">Order Management</h2>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by name or order ID..." className="pl-9 font-body" />
        </div>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="h-10 rounded-md border border-input bg-background px-3 text-sm font-body"
        >
          <option value="all">All Statuses</option>
          {statusOptions.map((s) => (
            <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
          ))}
        </select>
      </div>

      {isLoading ? (
        <p className="text-muted-foreground font-body">Loading...</p>
      ) : filtered.length === 0 ? (
        <p className="text-muted-foreground font-body text-center py-8">No orders found.</p>
      ) : (
        <div className="space-y-4">
          {filtered.map((order: any) => (
            <div key={order.id} className="bg-card border border-border rounded-xl p-5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-heading text-sm font-semibold text-foreground">
                    {order.profile?.full_name || "Customer"}
                  </p>
                  <p className="text-xs text-muted-foreground font-body">{order.profile?.phone}</p>
                  <p className="text-xs text-muted-foreground font-body">
                    Order #{order.id.slice(0, 8)} • {new Date(order.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                  </p>
                </div>
                <div className="text-right">
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full font-body capitalize ${statusColor(order.status)}`}>
                    {order.status}
                  </span>
                  <p className="font-heading text-lg font-bold text-accent mt-1">
                    ₹{order.total_amount?.toLocaleString("en-IN")}
                  </p>
                </div>
              </div>

              <div className="border-t border-border pt-3 mb-3">
                {order.order_items?.map((item: any) => (
                  <div key={item.id} className="flex justify-between text-xs text-muted-foreground font-body py-0.5">
                    <span>{item.product?.name} × {item.quantity}</span>
                    <span>₹{(item.price * item.quantity).toLocaleString("en-IN")}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <label className="text-xs text-muted-foreground font-body">Update Status:</label>
                <select
                  value={order.status}
                  onChange={(e) => updateStatus.mutate({ id: order.id, status: e.target.value })}
                  className="text-xs font-body border border-input rounded-lg px-3 py-1.5 bg-background flex-1 max-w-xs"
                >
                  {statusOptions.map((s) => (
                    <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
