import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

export default function ProfilePage() {
  const { user, profile } = useAuth();
  const [name, setName] = useState(profile?.full_name || "");
  const [phone, setPhone] = useState(profile?.phone || "");
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    if (!user) return;
    if (!name.trim()) {
      toast.error("Name is required");
      return;
    }
    setSaving(true);
    const { error } = await supabase
      .from("profiles")
      .update({ full_name: name.trim(), phone: phone.trim() })
      .eq("id", user.id);
    setSaving(false);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Profile updated");
    }
  };

  return (
    <div className="max-w-lg">
      <h2 className="font-heading text-xl font-semibold text-foreground mb-6">Profile Settings</h2>
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-foreground font-body block mb-1.5">Email</label>
          <Input value={user?.email || ""} disabled className="font-body bg-muted" />
          <p className="text-xs text-muted-foreground font-body mt-1">Email cannot be changed</p>
        </div>
        <div>
          <label className="text-sm font-medium text-foreground font-body block mb-1.5">Full Name</label>
          <Input value={name} onChange={(e) => setName(e.target.value)} className="font-body" />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground font-body block mb-1.5">Phone</label>
          <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 00000 00000" className="font-body" />
        </div>
        <Button onClick={handleSave} disabled={saving} className="bg-accent text-accent-foreground hover:bg-accent/90 font-body">
          {saving ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </div>
  );
}
