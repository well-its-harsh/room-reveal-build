import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { Shield, Users, Activity, Settings, Search, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const roles = ["customer", "staff", "admin"];

export default function UserManagement() {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");

  const { data: users = [], isLoading } = useQuery({
    queryKey: ["admin-users"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const updateRole = useMutation({
    mutationFn: async ({ id, role }: { id: string; role: string }) => {
      const { error } = await supabase.from("profiles").update({ role }).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-users"] });
      toast.success("Role updated");
    },
    onError: (err: any) => toast.error(err.message),
  });

  const filtered = users.filter((u: any) =>
    (u.full_name || "").toLowerCase().includes(search.toLowerCase()) ||
    (u.phone || "").includes(search)
  );

  const stats = {
    total: users.length,
    admins: users.filter((u: any) => u.role === "admin").length,
    staff: users.filter((u: any) => u.role === "staff").length,
    customers: users.filter((u: any) => u.role === "customer").length,
  };

  return (
    <div>
      <h2 className="font-heading text-xl font-semibold text-foreground mb-6">User & Role Management</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {[
          { label: "Total", value: stats.total, color: "text-foreground" },
          { label: "Admins", value: stats.admins, color: "text-destructive" },
          { label: "Staff", value: stats.staff, color: "text-accent" },
          { label: "Customers", value: stats.customers, color: "text-muted-foreground" },
        ].map(s => (
          <div key={s.label} className="bg-card border border-border rounded-lg p-4 text-center">
            <p className={`font-heading text-2xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-xs text-muted-foreground font-body">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search by name or phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      {isLoading ? (
        <p className="text-muted-foreground font-body">Loading...</p>
      ) : filtered.length === 0 ? (
        <p className="text-muted-foreground font-body text-center py-8">No users found.</p>
      ) : (
        <div className="space-y-2">
          {filtered.map((user: any) => (
            <div key={user.id} className="flex items-center justify-between p-4 bg-card border border-border rounded-lg">
              <div className="flex-1 min-w-0">
                <p className="font-heading text-sm font-medium text-foreground truncate">{user.full_name || "Unnamed"}</p>
                <p className="text-xs text-muted-foreground font-body">{user.phone || "No phone"}</p>
                <p className="text-xs text-muted-foreground font-body">
                  Joined {new Date(user.created_at).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-body px-2 py-0.5 rounded-full ${
                  user.role === "admin" ? "bg-destructive/10 text-destructive" :
                  user.role === "staff" ? "bg-accent/10 text-accent" :
                  "bg-muted text-muted-foreground"
                }`}>{user.role}</span>
                <select
                  value={user.role}
                  onChange={(e) => updateRole.mutate({ id: user.id, role: e.target.value })}
                  className="text-xs font-body border border-input rounded px-2 py-1.5 bg-background"
                >
                  {roles.map((r) => (
                    <option key={r} value={r}>{r.charAt(0).toUpperCase() + r.slice(1)}</option>
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
