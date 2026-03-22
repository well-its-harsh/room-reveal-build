import { useState } from "react";
import { Settings, ToggleLeft, ToggleRight } from "lucide-react";
import { toast } from "sonner";

interface SettingItem {
  key: string;
  label: string;
  desc: string;
  enabled: boolean;
  category: string;
}

const defaultSettings: SettingItem[] = [
  { key: "payment_gateway", label: "Payment Gateway", desc: "Enable/disable online payments (Razorpay/UPI)", enabled: false, category: "Payments" },
  { key: "cod_enabled", label: "Cash on Delivery", desc: "Allow COD orders", enabled: true, category: "Payments" },
  { key: "ar_visualization", label: "AR Visualization", desc: "Enable AR features on product pages", enabled: true, category: "Features" },
  { key: "ai_makeover", label: "AI Bathroom Makeover", desc: "Enable AI-powered room design tool", enabled: false, category: "Features" },
  { key: "guest_checkout", label: "Guest Checkout", desc: "Allow orders without account creation", enabled: false, category: "Checkout" },
  { key: "review_moderation", label: "Review Moderation", desc: "Require approval before reviews are visible", enabled: true, category: "Content" },
  { key: "gst_enabled", label: "GST Calculation", desc: "Apply 18% GST on orders", enabled: true, category: "Payments" },
  { key: "free_delivery_threshold", label: "Free Delivery (₹10,000+)", desc: "Free delivery on orders above ₹10,000", enabled: true, category: "Checkout" },
  { key: "appointment_booking", label: "Appointment Booking", desc: "Allow customers to book showroom visits", enabled: true, category: "Features" },
];

export default function SiteSettings() {
  const [settings, setSettings] = useState<SettingItem[]>(defaultSettings);

  const toggleSetting = (key: string) => {
    setSettings(prev => prev.map(s =>
      s.key === key ? { ...s, enabled: !s.enabled } : s
    ));
    toast.success("Setting updated");
  };

  const categories = [...new Set(settings.map(s => s.category))];

  return (
    <div>
      <h2 className="font-heading text-xl font-semibold text-foreground mb-6">Site Settings</h2>

      {categories.map(cat => (
        <div key={cat} className="mb-6">
          <h3 className="text-sm font-semibold text-muted-foreground font-body uppercase tracking-wider mb-3">{cat}</h3>
          <div className="space-y-2">
            {settings.filter(s => s.category === cat).map((setting) => (
              <div
                key={setting.key}
                className="flex items-center justify-between p-4 bg-card border border-border rounded-lg"
              >
                <div>
                  <p className="font-heading text-sm font-semibold text-foreground">{setting.label}</p>
                  <p className="text-xs text-muted-foreground font-body">{setting.desc}</p>
                </div>
                <button
                  onClick={() => toggleSetting(setting.key)}
                  className="flex-shrink-0"
                >
                  {setting.enabled ? (
                    <ToggleRight className="w-8 h-8 text-accent" />
                  ) : (
                    <ToggleLeft className="w-8 h-8 text-muted-foreground" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-8 bg-secondary rounded-lg p-6 text-center">
        <Settings className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
        <p className="text-sm text-muted-foreground font-body">
          Settings are currently stored locally. Full backend persistence coming in Phase 2.
        </p>
      </div>
    </div>
  );
}
