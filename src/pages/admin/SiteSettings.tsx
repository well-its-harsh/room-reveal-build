import { Settings } from "lucide-react";

export default function SiteSettings() {
  return (
    <div>
      <h2 className="font-heading text-xl font-semibold text-foreground mb-6">Site Settings</h2>

      <div className="space-y-4">
        {[
          { label: "Payment Gateway", desc: "Enable/disable online payments", enabled: false },
          { label: "AR Visualization", desc: "Enable AR features on product pages", enabled: true },
          { label: "Guest Checkout", desc: "Allow orders without sign-in", enabled: false },
          { label: "Review Moderation", desc: "Require approval before reviews are visible", enabled: true },
        ].map((setting) => (
          <div key={setting.label} className="flex items-center justify-between p-4 bg-card border border-border rounded-lg">
            <div>
              <p className="font-heading text-sm font-semibold text-foreground">{setting.label}</p>
              <p className="text-xs text-muted-foreground font-body">{setting.desc}</p>
            </div>
            <div className={`w-10 h-6 rounded-full flex items-center px-0.5 cursor-pointer transition-colors ${
              setting.enabled ? "bg-accent justify-end" : "bg-muted justify-start"
            }`}>
              <div className="w-5 h-5 rounded-full bg-card shadow-sm" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-secondary rounded-lg p-6 text-center">
        <Settings className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
        <p className="text-sm text-muted-foreground font-body">
          These settings are display-only for now. Full backend integration coming soon.
        </p>
      </div>
    </div>
  );
}
