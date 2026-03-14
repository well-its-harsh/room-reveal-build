import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { Users, Shield, Activity, Settings } from "lucide-react";

export default function AdminOverview() {
  const { data: stats } = useQuery({
    queryKey: ["admin-system-stats"],
    queryFn: async () => {
      const [profiles, logs] = await Promise.all([
        supabase.from("profiles").select("id", { count: "exact", head: true }),
        supabase.from("admin_logs").select("id", { count: "exact", head: true }),
      ]);
      return {
        users: profiles.count || 0,
        logs: logs.count || 0,
      };
    },
  });

  const cards = [
    { label: "Total Users", value: stats?.users ?? "—", icon: Users, color: "text-accent" },
    { label: "Admin Logs", value: stats?.logs ?? "—", icon: Activity, color: "text-accent" },
  ];

  return (
    <div>
      <h2 className="font-heading text-xl font-semibold text-foreground mb-6">System Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {cards.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <Icon className={`w-5 h-5 ${color}`} />
              <span className="text-sm text-muted-foreground font-body">{label}</span>
            </div>
            <p className="font-heading text-3xl font-bold text-foreground">{value}</p>
          </div>
        ))}
      </div>
      <div className="bg-secondary rounded-lg p-6 text-center">
        <Settings className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
        <p className="text-sm text-muted-foreground font-body">
          System admin features like user role management, audit logs, and site settings are available in the tabs above.
        </p>
      </div>
    </div>
  );
}
