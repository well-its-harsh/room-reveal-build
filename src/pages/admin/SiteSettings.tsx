import { useState, useEffect } from "react";
import { Settings, ToggleLeft, ToggleRight, Save, Store, Camera } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import { STORE_INFO } from "@/constants/storeInfo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
  const [isSaving, setIsSaving] = useState(false);
  
  // Store Info State
  const [storeData, setStoreData] = useState({
    store_name: STORE_INFO.name,
    owner_1_name: STORE_INFO.owners[0].name,
    owner_1_phone: STORE_INFO.owners[0].phone,
    owner_2_name: STORE_INFO.owners[1].name,
    owner_2_phone: STORE_INFO.owners[1].phone,
    email: STORE_INFO.email,
    address: STORE_INFO.address.full,
    gst: STORE_INFO.gst,
    maps_link: STORE_INFO.googleMapsLink,
    logo_url: "",
  });

  useEffect(() => {
    const fetchStoreSettings = async () => {
      const { data, error } = await supabase.from('store_settings').select('key, value');
      if (data && !error) {
        const newData = { ...storeData };
        data.forEach((item: any) => {
          if (item.key in newData) {
            (newData as any)[item.key] = item.value;
          }
        });
        setStoreData(newData);
      }
    };
    fetchStoreSettings();
  }, []);

  const handleStoreSave = async () => {
    setIsSaving(true);
    try {
      const updates = Object.entries(storeData).map(([key, value]) => ({
        key,
        value,
        updated_at: new Date().toISOString(),
      }));

      for (const update of updates) {
        await supabase
          .from('store_settings')
          .upsert(update, { onConflict: 'key' });
      }
      
      toast.success("Store information updated successfully");
    } catch (err: any) {
      toast.error("Failed to save store settings: " + err.message);
    } finally {
      setIsSaving(false);
    }
  };

  const toggleSetting = (key: string) => {
    setSettings(prev => prev.map(s =>
      s.key === key ? { ...s, enabled: !s.enabled } : s
    ));
    toast.success("Setting updated");
  };

  const categories = [...new Set(settings.map(s => s.category))];

  return (
    <div className="space-y-12 pb-20">
      <div>
        <h2 className="font-serif text-3xl font-bold text-[#1A1A1A]">Site Settings</h2>
        <p className="text-[#6B6B6B]">Configure global platform behavior and store identity.</p>
      </div>

      {/* Store Information Section */}
      <section className="bg-white border border-[#E8E4DF] rounded-2xl shadow-sm overflow-hidden">
        <div className="px-8 py-6 border-b border-[#E8E4DF] bg-[#F7F5F2] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Store className="w-5 h-5 text-[#C8860A]" />
            <h3 className="font-bold text-[#1A1A1A] uppercase tracking-widest text-sm">Store Branding</h3>
          </div>
          <Button 
            className="bg-[#1A1A1A] hover:bg-[#C8860A] text-white font-bold text-xs gap-2"
            onClick={handleStoreSave}
            disabled={isSaving}
          >
            <Save className="w-4 h-4" /> {isSaving ? "Saving..." : "Save Changes"}
          </Button>
        </div>

        <div className="p-8 border-b border-[#E8E4DF] flex flex-col md:flex-row items-center gap-8">
           <div className="relative group">
              <div className="w-48 h-24 bg-white rounded-xl border-2 border-dashed border-[#E8E4DF] flex items-center justify-center overflow-hidden transition-all group-hover:border-[#C8860A]">
                 {storeData.logo_url ? (
                   <img src={storeData.logo_url} alt="Store Logo" className="w-full h-full object-contain p-2" />
                 ) : (
                   <div className="text-center p-4">
                      <Store className="w-8 h-8 text-[#E8E4DF] mx-auto mb-1" />
                      <p className="text-[10px] text-[#999] font-bold uppercase">No Logo</p>
                   </div>
                 )}
              </div>
              <label className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#1A1A1A] text-white rounded-xl flex items-center justify-center border-4 border-white cursor-pointer hover:bg-[#C8860A] transition-all shadow-xl">
                 <Camera className="w-4 h-4" />
                 <input type="file" className="hidden" accept=".png,.jpg,.jpeg,.svg" onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    setIsSaving(true);
                    
                    const fileExt = file.name.split('.').pop();
                    const filePath = `store-logo.${fileExt}`;

                    const { error: uploadError } = await supabase.storage
                      .from('store-assets')
                      .upload(filePath, file, { upsert: true });

                    if (uploadError) {
                      toast.error("Upload failed: " + uploadError.message);
                    } else {
                      const { data: { publicUrl } } = supabase.storage
                        .from('store-assets')
                        .getPublicUrl(filePath);
                      
                      setStoreData(prev => ({ ...prev, logo_url: publicUrl }));
                      toast.success("Logo uploaded successfully");
                    }
                    setIsSaving(false);
                 }} />
              </label>
           </div>
           <div>
              <h4 className="font-serif text-lg font-bold text-[#000000] mb-1">Official Store Logo</h4>
              <p className="text-xs text-[#6B6B6B] max-w-sm mb-4 leading-relaxed">
                This logo will appear in your video consultations, email headers, and the customer dashboard. Recommended size: 400x200px (transparent PNG or SVG).
              </p>
              {storeData.logo_url && (
                <Button variant="ghost" className="text-red-500 hover:text-red-600 p-0 h-auto text-[10px] font-bold uppercase tracking-widest" onClick={() => setStoreData(prev => ({ ...prev, logo_url: "" }))}>
                   Remove Logo
                </Button>
              )}
           </div>
        </div>
        
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <label className="block text-[11px] font-bold text-[#6B6B6B] uppercase tracking-wider mb-2">Store Name</label>
              <Input 
                value={storeData.store_name} 
                onChange={e => setStoreData(prev => ({ ...prev, store_name: e.target.value }))}
                className="h-12 border-[#E8E4DF] focus:border-[#C8860A]"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-[#6B6B6B] uppercase tracking-wider mb-2">Owner 1 Name</label>
                <Input 
                  value={storeData.owner_1_name} 
                  onChange={e => setStoreData(prev => ({ ...prev, owner_1_name: e.target.value }))}
                  className="h-12 border-[#E8E4DF] focus:border-[#C8860A]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#6B6B6B] uppercase tracking-wider mb-2">Owner 1 Phone</label>
                <Input 
                  value={storeData.owner_1_phone} 
                  onChange={e => setStoreData(prev => ({ ...prev, owner_1_phone: e.target.value }))}
                  className="h-12 border-[#E8E4DF] focus:border-[#C8860A]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-[#6B6B6B] uppercase tracking-wider mb-2">Owner 2 Name</label>
                <Input 
                  value={storeData.owner_2_name} 
                  onChange={e => setStoreData(prev => ({ ...prev, owner_2_name: e.target.value }))}
                  className="h-12 border-[#E8E4DF] focus:border-[#C8860A]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#6B6B6B] uppercase tracking-wider mb-2">Owner 2 Phone</label>
                <Input 
                  value={storeData.owner_2_phone} 
                  onChange={e => setStoreData(prev => ({ ...prev, owner_2_phone: e.target.value }))}
                  className="h-12 border-[#E8E4DF] focus:border-[#C8860A]"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-[11px] font-bold text-[#6B6B6B] uppercase tracking-wider mb-2">Primary Email</label>
              <Input 
                value={storeData.email} 
                onChange={e => setStoreData(prev => ({ ...prev, email: e.target.value }))}
                className="h-12 border-[#E8E4DF] focus:border-[#C8860A]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-[#6B6B6B] uppercase tracking-wider mb-2">Full Address</label>
              <Input 
                value={storeData.address} 
                onChange={e => setStoreData(prev => ({ ...prev, address: e.target.value }))}
                className="h-12 border-[#E8E4DF] focus:border-[#C8860A]"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-[#6B6B6B] uppercase tracking-wider mb-2">GST Number</label>
                <Input 
                  value={storeData.gst} 
                  onChange={e => setStoreData(prev => ({ ...prev, gst: e.target.value }))}
                  className="h-12 border-[#E8E4DF] focus:border-[#C8860A]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#6B6B6B] uppercase tracking-wider mb-2">Google Maps Link</label>
                <Input 
                  value={storeData.maps_link} 
                  onChange={e => setStoreData(prev => ({ ...prev, maps_link: e.target.value }))}
                  className="h-12 border-[#E8E4DF] focus:border-[#C8860A]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map(cat => (
          <div key={cat} className="space-y-4">
            <h3 className="font-bold text-[#1A1A1A] uppercase tracking-widest text-xs ml-2">{cat}</h3>
            <div className="space-y-3">
              {settings.filter(s => s.category === cat).map((setting) => (
                <div
                  key={setting.key}
                  className="flex items-center justify-between p-5 bg-white border border-[#E8E4DF] rounded-xl shadow-sm"
                >
                  <div className="max-w-[70%]">
                    <p className="font-bold text-[#1A1A1A] text-sm">{setting.label}</p>
                    <p className="text-[12px] text-[#6B6B6B] mt-0.5">{setting.desc}</p>
                  </div>
                  <button
                    onClick={() => toggleSetting(setting.key)}
                    className="flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  >
                    {setting.enabled ? (
                      <ToggleRight className="w-10 h-10 text-[#C8860A]" />
                    ) : (
                      <ToggleLeft className="w-10 h-10 text-[#E8E4DF]" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#F7F5F2] rounded-2xl p-8 border border-[#E8E4DF] flex items-center gap-6">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-[#E8E4DF] flex-shrink-0">
          <Settings className="w-6 h-6 text-[#C8860A]" />
        </div>
        <div>
          <p className="font-bold text-[#1A1A1A] text-sm">Automated Updates</p>
          <p className="text-xs text-[#6B6B6B] mt-1">Changes to store information are synchronized across the website footer, contact page, and admin dashboard in real-time.</p>
        </div>
      </div>
    </div>
  );
}
