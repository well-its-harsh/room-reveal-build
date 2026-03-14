import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const roles = ["customer", "staff", "admin"];

export default function UserManagement() {
  const queryClient = useQueryClient();

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

  return (
    <div>
      <h2 className="font-heading text-xl font-semibold text-foreground mb-6">User Management</h2>

      {isLoading ? (
        <p className="text-muted-foreground font-body">Loading...</p>
      ) : users.length === 0 ? (
        <p className="text-muted-foreground font-body text-center py-8">No users found.</p>
      ) : (
        <div className="space-y-3">
          {users.map((user: any) => (
            <div key={user.id} className="flex items-center justify-between p-4 bg-card border border-border rounded-lg">
              <div>
                <p className="font-heading text-sm font-medium text-foreground">{user.full_name || "Unnamed"}</p>
                <p className="text-xs text-muted-foreground font-body">{user.phone || "No phone"}</p>
                <p className="text-xs text-muted-foreground font-body">
                  Joined {new Date(user.created_at).toLocaleDateString()}
                </p>
              </div>
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
          ))}
        </div>
      )}
    </div>
  );
}
