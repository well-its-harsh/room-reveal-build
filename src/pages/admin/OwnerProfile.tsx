import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { 
  Upload, 
  User as UserIcon, 
  ShieldCheck, 
  Key, 
  LogOut, 
  Monitor, 
  Smartphone, 
  MapPin, 
  History, 
  CheckCircle2, 
  Lock,
  ChevronRight,
  UserCheck,
  Bell,
  Mail,
  Phone
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function OwnerProfile() {
  const { user, profile, signOut } = useAuth();
  const [activeTab, setActiveTab] = useState<"profile" | "security" | "sessions">("profile");
  
  // Profile Form
  const [name, setName] = useState(profile?.full_name || "");
  const [phone, setPhone] = useState(profile?.phone || "");
  const [avatarUrl, setAvatarUrl] = useState(profile?.avatar_url || "");
  const [savingProfile, setSavingProfile] = useState(false);
  const [uploadingAvatar, setUploadingAvatar] = useState(false);
  
  // Security Form
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [savingPassword, setSavingPassword] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpdateProfile = async () => {
    if (!user) return;
    if (!name.trim()) return toast.error("Full name is required");
    
    setSavingProfile(true);
    const { error } = await supabase
      .from("profiles")
      .update({ full_name: name.trim(), phone: phone.trim() })
      .eq("id", user.id);
      
    setSavingProfile(false);
    if (error) toast.error(error.message);
    else toast.success("Command details updated successfully");
  };

  const handleAvatarUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploadingAvatar(true);
      if (!event.target.files?.length) throw new Error('No file selected');

      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const filePath = `avatars/${user?.id}-${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file);
      if (uploadError) throw uploadError;

      const { data } = supabase.storage.from('avatars').getPublicUrl(filePath);
      setAvatarUrl(data.publicUrl);
      
      if (user) {
        await supabase.from("profiles").update({ avatar_url: data.publicUrl }).eq("id", user.id);
      }
      toast.success("Identity image updated");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setUploadingAvatar(false);
    }
  };

  const menuItems = [
    { id: "profile", label: "Identity & Profile", icon: UserIcon },
    { id: "security", label: "Security & 2FA", icon: ShieldCheck },
    { id: "sessions", label: "Active Sessions", icon: Monitor },
  ];

  return (
    <div className="pb-20">
      <div className="mb-10">
        <h1 className="text-[32px] font-serif font-bold text-[#1A1A1A]">Account Management</h1>
        <p className="text-[#6B6B6B] mt-1 text-sm">Control your administrative privileges and security parameters.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Navigation Sidebar */}
        <div className="w-full lg:w-72 flex-shrink-0 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={cn(
                "w-full flex items-center justify-between px-5 py-4 rounded-xl transition-all group",
                activeTab === item.id 
                  ? "bg-[#1A1A1A] text-white shadow-lg shadow-black/5" 
                  : "bg-white text-[#6B6B6B] hover:bg-gray-50 border border-transparent hover:border-[#E8E4DF]"
              )}
            >
              <div className="flex items-center gap-4">
                <item.icon className={cn("w-5 h-5", activeTab === item.id ? "text-[#C8860A]" : "text-[#999] group-hover:text-[#1A1A1A]")} />
                <span className="text-sm font-bold uppercase tracking-widest">{item.label}</span>
              </div>
              <ChevronRight className={cn("w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity", activeTab === item.id ? "text-[#C8860A]" : "")} />
            </button>
          ))}
          
          <div className="pt-6 border-t border-[#E8E4DF] mt-6">
             <button 
              onClick={signOut}
              className="w-full flex items-center gap-4 px-5 py-4 text-red-600 hover:bg-red-50 rounded-xl transition-all font-bold text-sm uppercase tracking-widest"
             >
               <LogOut className="w-5 h-5" /> Sign Out from System
             </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-white border border-[#E8E4DF] rounded-2xl shadow-sm overflow-hidden">
          {activeTab === "profile" && (
            <div className="p-8 md:p-12 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="flex flex-col md:flex-row gap-10 items-start mb-12">
                 <div className="relative group">
                    <div className="h-32 w-32 rounded-full overflow-hidden bg-[#F7F5F2] border-4 border-[#E8E4DF] flex items-center justify-center relative">
                      {avatarUrl ? (
                        <img src={avatarUrl} alt="Avatar" className="h-full w-full object-cover" />
                      ) : (
                        <UserIcon className="h-14 w-14 text-[#D1D1D1]" />
                      )}
                      {uploadingAvatar && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                           <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        </div>
                      )}
                    </div>
                    <button 
                      onClick={() => fileInputRef.current?.click()}
                      className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center shadow-lg border-2 border-white hover:bg-[#C8860A] transition-colors"
                    >
                      <Upload className="w-4 h-4" />
                    </button>
                    <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleAvatarUpload} />
                 </div>
                 
                 <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                       <h2 className="text-2xl font-serif font-bold text-[#1A1A1A]">{profile?.full_name || "Owner"}</h2>
                       <span className="bg-[#1A8C4A]/10 text-[#1A8C4A] text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border border-[#1A8C4A]/20">Verified Admin</span>
                    </div>
                    <p className="text-[#6B6B6B] text-sm">System ID: <span className="font-mono text-[11px]">{user?.id}</span></p>
                    <div className="flex items-center gap-6 pt-4">
                       <div className="flex items-center gap-2 text-xs text-[#6B6B6B]">
                          <Mail className="w-4 h-4 text-[#C8860A]" /> {user?.email}
                       </div>
                       <div className="flex items-center gap-2 text-xs text-[#6B6B6B]">
                          <Phone className="w-4 h-4 text-[#C8860A]" /> {phone || "No phone added"}
                       </div>
                    </div>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8860A] mb-4">Core Identification</h3>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-[#6B6B6B] block mb-2">Display Name</label>
                      <Input value={name} onChange={(e) => setName(e.target.value)} className="h-12 border-[#E8E4DF] focus:border-[#1A1A1A]" placeholder="Full Name" />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-[#6B6B6B] block mb-2">Public Email</label>
                      <Input value={user?.email || ""} disabled className="h-12 bg-gray-50 text-[#999] opacity-70" />
                    </div>
                 </div>

                 <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8860A] mb-4">Contact Protocol</h3>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-[#6B6B6B] block mb-2">Business Phone</label>
                      <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 00000 00000" className="h-12 border-[#E8E4DF] focus:border-[#1A1A1A]" />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-[#6B6B6B] block mb-2">Access Level</label>
                      <div className="h-12 bg-gray-50 border border-[#E8E4DF] rounded-md px-4 flex items-center gap-2 text-sm text-[#6B6B6B]">
                         <Lock className="w-4 h-4" /> Root Owner Access
                      </div>
                    </div>
                 </div>
              </div>

              <div className="mt-12 pt-8 border-t border-[#F7F5F2] flex justify-end">
                <Button 
                  onClick={handleUpdateProfile} 
                  disabled={savingProfile} 
                  className="bg-[#1A1A1A] text-white hover:bg-[#333] h-12 px-12 font-bold uppercase tracking-[0.1em]"
                >
                  {savingProfile ? "Syncing..." : "Commit Changes"}
                </Button>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="p-8 md:p-12 animate-in fade-in slide-in-from-right-4 duration-300">
               <div className="max-w-xl space-y-10">
                  <section>
                    <h3 className="text-lg font-serif font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                       <Key className="w-5 h-5 text-[#C8860A]" /> Credentials Reset
                    </h3>
                    <p className="text-sm text-[#6B6B6B] mb-6">Regularly updating your password ensures administrative integrity.</p>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="text-xs font-bold uppercase tracking-widest text-[#6B6B6B] block mb-2">New Security Hash (Password)</label>
                        <Input 
                          type="password" 
                          value={newPassword} onChange={(e) => setNewPassword(e.target.value)} 
                          className="h-12" placeholder="••••••••"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold uppercase tracking-widest text-[#6B6B6B] block mb-2">Verify Security Hash</label>
                        <Input 
                          type="password" 
                          value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} 
                          className="h-12" placeholder="••••••••"
                        />
                      </div>
                      <Button 
                        disabled={savingPassword} 
                        className="bg-[#1A1A1A] text-white hover:bg-[#333] h-11 px-8"
                      >
                        Rotate Credentials
                      </Button>
                    </div>
                  </section>

                  <section className="pt-10 border-t border-[#F7F5F2]">
                    <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-[#E8E4DF] flex flex-col md:flex-row gap-6 items-start">
                       <div className="w-12 h-12 rounded-xl bg-white border border-[#E8E4DF] flex items-center justify-center flex-shrink-0 animate-pulse">
                          <ShieldCheck className="w-6 h-6 text-[#1A8C4A]" />
                       </div>
                       <div>
                          <h4 className="font-bold text-[#1A1A1A] mb-1">Two-Factor Authentication (Coming Soon)</h4>
                          <p className="text-xs text-[#6B6B6B] leading-relaxed mb-4">Add an extra layer of security by requiring a mobile token to access the dashboard. This protocol is currently being provisioned.</p>
                          <Button variant="outline" disabled className="h-9 text-xs border-[#E8E4DF]">Request Activation</Button>
                       </div>
                    </div>
                  </section>
               </div>
            </div>
          )}

          {activeTab === "sessions" && (
            <div className="p-8 md:p-12 animate-in fade-in slide-in-from-right-4 duration-300">
               <h3 className="text-lg font-serif font-bold text-[#1A1A1A] mb-6">Active Access Nodes</h3>
               <div className="space-y-4">
                  <div className="p-5 bg-white border border-[#E8E4DF] rounded-2xl flex items-center justify-between shadow-sm">
                     <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center border border-green-100">
                           <Monitor className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                           <div className="flex items-center gap-3">
                              <p className="font-bold text-[#1A1A1A]">Windows Desktop • Chrome</p>
                              <span className="text-[9px] font-bold uppercase tracking-widest bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Current Node</span>
                           </div>
                           <p className="text-xs text-[#6B6B6B] mt-1">IP: 103.21.XX.X • Mumbai, India • Last sync: Moments ago</p>
                        </div>
                     </div>
                     <button className="text-[11px] font-bold text-red-600 hover:underline uppercase tracking-widest">Destroy</button>
                  </div>

                  <div className="p-5 bg-[#F7F5F2]/50 border border-[#E8E4DF] rounded-2xl flex items-center justify-between opacity-60">
                     <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center border border-gray-200">
                           <Smartphone className="w-6 h-6 text-gray-500" />
                        </div>
                        <div>
                           <p className="font-bold text-[#1A1A1A]">iPhone 15 Pro • Safari</p>
                           <p className="text-xs text-[#6B6B6B] mt-1">IP: 106.12.XX.X • Delhi, India • Last sync: 14 hours ago</p>
                        </div>
                     </div>
                     <button className="text-[11px] font-bold text-red-600 hover:underline uppercase tracking-widest">Revoke</button>
                  </div>
               </div>

               <div className="mt-10 p-6 bg-[#FAF9F6] border border-[#E8E4DF] rounded-2xl">
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8860A] mb-4">Strategic Protocol</h4>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed italic">"Security is not a final state but a continuous operational requirement. Revoke any unrecognized access nodes immediately to maintain core system integrity."</p>
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
