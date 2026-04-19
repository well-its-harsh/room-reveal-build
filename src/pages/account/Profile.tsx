import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  User, Mail, Phone, Shield, 
  Camera, CheckCircle2, Save,
  Lock, Bell, Trash2, Loader2, Eye, EyeOff
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProfilePage() {
  const { user, profile } = useAuth();
  const [name, setName] = useState(profile?.full_name || "");
  const [phone, setPhone] = useState(profile?.phone || "");
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [makeovers, setMakeovers] = useState<any[]>([]);

  useEffect(() => {
    if (user?.id) {
      supabase.from("makeover_projects").select("*").eq("user_id", user.id).order("created_at", { ascending: false }).then(({ data }) => {
        if (data) setMakeovers(data);
      });
    }
  }, [user]);
  
  // Password state
  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passUpdating, setPassUpdating] = useState(false);

  // Preferences
  const [prefs, setPrefs] = useState(profile?.preferences || {
    enquiryReply: true,
    appointmentConfirm: true,
    newArrivals: false
  });

  const getPasswordStrength = () => {
    if (!newPassword) return 0;
    let strength = 0;
    if (newPassword.length >= 8) strength += 1;
    if (/[A-Z]/.test(newPassword)) strength += 1;
    if (/[0-9]/.test(newPassword)) strength += 1;
    if (/[^A-Za-z0-9]/.test(newPassword)) strength += 1;
    return strength;
  };

  const strength = getPasswordStrength();

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;

    if (file.size > 2 * 1024 * 1024) {
      toast.error("File size must be less than 2MB");
      return;
    }

    setUploading(true);
    const fileExt = file.name.split('.').pop();
    const fileName = `${user.id}-${Math.random()}.${fileExt}`;
    const filePath = `avatars/${fileName}`;

    try {
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath);

      const { error: updateError } = await supabase
        .from('profiles')
        .update({ avatar_url: publicUrl })
        .eq('id', user.id);

      if (updateError) throw updateError;
      
      toast.success("Avatar updated successfully");
      window.location.reload(); // Refresh to show new avatar
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async () => {
    if (!user) return;
    setSaving(true);
    const { error } = await supabase
      .from("profiles")
      .update({ 
        full_name: name.trim(), 
        phone: phone.trim(),
        preferences: prefs
      })
      .eq("id", user.id);
    setSaving(false);
    if (error) toast.error(error.message);
    else toast.success("Profile updated.");
  };

  const handleUpdatePassword = async () => {
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (newPassword.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    setPassUpdating(true);
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    setPassUpdating(false);

    if (error) toast.error(error.message);
    else {
      toast.success("Password updated successfully");
      setNewPassword("");
      setConfirmPassword("");
    }
  };

  const initials = profile?.full_name?.split(' ').map((n: string) => n[0]).join('').toUpperCase() || user?.email?.[0].toUpperCase();

  return (
    <div className="max-w-4xl space-y-12 pb-20">
      <div>
        <h2 className="font-serif text-3xl font-bold text-[#000000] mb-2">Account Settings</h2>
        <p className="text-[#6B6B6B]">Manage your profile, security, and preferences.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Profile Info & Avatar */}
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white p-8 rounded-3xl border border-[#E8E4DF] shadow-sm space-y-8">
            <h3 className="text-xl font-serif font-bold text-[#000000] flex items-center gap-2">
               <User className="w-5 h-5 text-[#C9A84C]" /> Personal Information
            </h3>
            
            <div className="flex flex-col md:flex-row items-center gap-8 border-b border-[#F1EFEC] pb-8">
               <div className="relative group">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-[#C9A84C] shadow-lg ring-4 ring-white">
                    {profile?.avatar_url ? (
                      <img src={profile.avatar_url} alt="Avatar" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-[#000000] flex items-center justify-center text-white text-3xl font-serif font-bold italic">
                        {initials}
                      </div>
                    )}
                  </div>
                  <label className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#000000] text-white rounded-xl flex items-center justify-center border-4 border-white cursor-pointer hover:bg-[#C9A84C] transition-all shadow-xl group-hover:scale-110 active:scale-90">
                    {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Camera className="w-4 h-4" />}
                    <input type="file" className="hidden" accept="image/*" onChange={handleAvatarUpload} disabled={uploading} />
                  </label>
               </div>
               <div className="flex-1 text-center md:text-left">
                  <h4 className="font-serif text-xl font-bold text-[#000000]">{profile?.full_name || "Guest User"}</h4>
                  <p className="text-sm text-[#6B6B6B] mb-2">{user?.email}</p>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-emerald-100">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Identity Verified
                  </div>
               </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#999]">Full Name</label>
                <div className="relative">
                   <Input value={name} onChange={e => setName(e.target.value)} className="h-12 pl-10 rounded-xl" />
                   <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C9A84C]" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#999]">Phone Number</label>
                <div className="relative">
                   <Input value={phone} onChange={e => setPhone(e.target.value)} placeholder="+91 00000 00000" className="h-12 pl-10 rounded-xl" />
                   <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C9A84C]" />
                </div>
              </div>
            </div>

            <div className="space-y-2 opacity-60">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#999]">Email Address (Store ID)</label>
                <div className="relative">
                   <Input value={user?.email || ""} disabled className="h-12 pl-10 rounded-xl bg-[#F8F7F4] border-[#E8E4DF]" />
                   <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999]" />
                   <Shield className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999]" />
                </div>
                <p className="text-[10px] italic text-[#999] px-2 leading-relaxed">System-generated ID used for secure authentication. Contact support to update.</p>
            </div>

            <Button onClick={handleSave} disabled={saving} className="bg-[#000000] hover:bg-[#C9A84C] text-white px-10 h-12 rounded-xl font-bold uppercase tracking-widest text-[11px] shadow-lg">
              {saving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Save className="w-4 h-4 mr-2" />}
              Save Changes
            </Button>
          </section>

          {/* Security */}
          <section className="bg-white p-8 rounded-3xl border border-[#E8E4DF] shadow-sm space-y-8">
            <h3 className="text-xl font-serif font-bold text-[#000000] flex items-center gap-2">
               <Lock className="w-5 h-5 text-[#C9A84C]" /> Security & Password
            </h3>
            
            <div className="space-y-6">
               <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#999]">New Password</label>
                    <div className="relative">
                       <Input 
                        type={showPassword ? "text" : "password"} 
                        value={newPassword} 
                        onChange={e => setNewPassword(e.target.value)} 
                        className="h-12 px-10 rounded-xl" 
                       />
                       <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C9A84C]" />
                       <button onClick={() => setShowPassword(!showPassword)} className="absolute right-3.5 top-1/2 -translate-y-1/2">
                          {showPassword ? <EyeOff className="w-4 h-4 text-[#999]" /> : <Eye className="w-4 h-4 text-[#999]" />}
                       </button>
                    </div>
                    {/* Strength bar */}
                    <div className="flex gap-1 pt-1">
                       {[1, 2, 3, 4].map(i => (
                         <div key={i} className={cn("h-1 flex-1 rounded-full bg-[#E8E4DF]", i <= strength && (strength <= 2 ? "bg-red-400" : strength === 3 ? "bg-amber-400" : "bg-emerald-400"))} />
                       ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#999]">Confirm Password</label>
                    <div className="relative">
                       <Input 
                        type={showPassword ? "text" : "password"} 
                        value={confirmPassword} 
                        onChange={e => setConfirmPassword(e.target.value)} 
                        className="h-12 px-10 rounded-xl" 
                       />
                       <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C9A84C]" />
                    </div>
                  </div>
               </div>
               <Button 
                onClick={handleUpdatePassword} 
                disabled={!newPassword || passUpdating} 
                variant="outline"
                className="h-12 px-8 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-white rounded-xl font-bold uppercase tracking-widest text-[11px]"
              >
                {passUpdating && <Loader2 className="w-3 h-3 animate-spin mr-2" />}
                Update Password
              </Button>
            </div>
          </section>
        </div>

        {/* Preferences & Misc */}
        <div className="space-y-8">
           <section className="bg-[#000000] p-8 rounded-3xl text-white shadow-xl shadow-blue-900/20">
              <h3 className="text-xl font-serif font-bold mb-6 flex items-center gap-2 text-[#C9A84C]">
                <Bell className="w-5 h-5" /> Preferences
              </h3>
              <div className="space-y-6">
                 {[
                   { key: "enquiryReply", label: "Enquiry replies" },
                   { key: "appointmentConfirm", label: "Appointment status" },
                   { key: "newArrivals", label: "New offers & stock" }
                 ].map(item => (
                   <label key={item.key} className="flex items-center justify-between group cursor-pointer">
                      <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">{item.label}</span>
                      <div className="relative">
                        <input 
                          type="checkbox" 
                          className="sr-only peer" 
                          checked={(prefs as any)[item.key]}
                          onChange={(e) => setPrefs(prev => ({ ...prev, [item.key]: e.target.checked }))}
                        />
                        <div className="w-10 h-5 bg-white/10 rounded-full peer peer-checked:bg-[#C9A84C] transition-all after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-5 shadow-inner"></div>
                      </div>
                   </label>
                 ))}
                 <Button onClick={handleSave} className="w-full h-11 bg-white/10 hover:bg-[#C9A84C] hover:text-[#000000] text-white border border-white/10 font-bold uppercase tracking-widest text-[10px] mt-4">
                    Save Preferences
                 </Button>
              </div>
           </section>

           <section className="bg-red-50 p-8 rounded-3xl border border-red-100">
              <h3 className="text-lg font-serif font-bold text-red-700 mb-4 flex items-center gap-2">
                <Trash2 className="w-5 h-5" /> Danger Zone
              </h3>
              <p className="text-xs text-red-600/70 leading-relaxed mb-6 font-medium">
                Once deleted, your account and all associated data cannot be recovered.
              </p>
              <Button asChild variant="ghost" className="w-full h-11 text-red-600 hover:bg-red-600 hover:text-white border border-red-200 font-bold uppercase tracking-widest text-[10px]">
                 <Link to="/data-deletion">Account Deletion Request</Link>
              </Button>
           </section>
        </div>
      </div>

      {/* Makeovers Gallery Section */}
      <section id="makeovers" className="bg-[#1A1A1A] p-8 rounded-3xl border border-[#333] shadow-2xl mt-12 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/20 flex items-center justify-center">
              <Camera className="w-5 h-5 text-[#C9A84C]" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-white">My AI Makeovers</h3>
              <p className="text-xs text-[#999] mt-1 font-body">Scroll horizontally to view your past room transformations.</p>
            </div>
          </div>
          
          <div className="flex overflow-x-auto pb-6 -mx-4 px-4 snap-x snap-mandatory gap-6 hide-scrollbar">
            {makeovers.map((m: any) => (
              <div key={m.id} className="min-w-[300px] md:min-w-[400px] snap-center group relative aspect-video bg-black rounded-2xl overflow-hidden border border-[#333] hover:border-[#C9A84C] transition-colors">
                {/* Before / After split concept using hover */}
                <div className="absolute inset-0 z-10 transition-transform duration-500 origin-left group-hover:scale-x-0">
                  <img src={m.input_image_url} alt="Original" className="w-full h-full object-cover opacity-80" />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
                    Before
                  </div>
                </div>
                <div className="absolute inset-0">
                  {m.generated_images?.[0] && (
                    <img src={m.generated_images[0]} alt="Generated" className="w-full h-full object-cover" />
                  )}
                  <div className="absolute top-3 right-3 bg-[#C9A84C]/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-[#000] uppercase tracking-widest">
                    After
                  </div>
                </div>
                {/* Instruction overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 pointer-events-none z-20">
                  <div className="bg-black/50 backdrop-blur px-4 py-2 rounded-full text-white text-xs font-bold flex items-center gap-2">
                    <Eye className="w-4 h-4" /> AI Redesign
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
    </div>
  );
}
