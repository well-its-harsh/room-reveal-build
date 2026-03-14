import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";

export default function AuditLogs() {
  const { data: logs = [], isLoading } = useQuery({
    queryKey: ["admin-audit-logs"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("admin_logs")
        .select("*, admin:profiles(full_name)")
        .order("created_at", { ascending: false })
        .limit(100);
      if (error) throw error;
      return data;
    },
  });

  return (
    <div>
      <h2 className="font-heading text-xl font-semibold text-foreground mb-6">Audit Logs</h2>

      {isLoading ? (
        <p className="text-muted-foreground font-body">Loading...</p>
      ) : logs.length === 0 ? (
        <p className="text-muted-foreground font-body text-center py-8">No logs recorded.</p>
      ) : (
        <div className="space-y-2">
          {logs.map((log: any) => (
            <div key={log.id} className="flex items-start gap-3 p-3 bg-card border border-border rounded-lg text-sm">
              <div className="flex-1">
                <p className="text-foreground font-body">
                  <span className="font-medium">{log.admin?.full_name || "Admin"}</span>
                  {" "}<span className="text-muted-foreground">{log.action}</span>
                  {" on "}<span className="font-medium">{log.target_table}</span>
                </p>
                <p className="text-xs text-muted-foreground font-body mt-0.5">
                  {new Date(log.created_at).toLocaleString()}
                  {log.target_id && ` • ID: ${log.target_id.slice(0, 8)}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
