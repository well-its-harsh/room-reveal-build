import { useState, useEffect } from "react";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Image as ImageIcon, 
  Star, 
  Eye, 
  Plus, 
  Trash2, 
  GripVertical, 
  Upload, 
  Save, 
  CheckCircle2, 
  EyeOff 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import { 
  DndContext, 
  closestCenter, 
  KeyboardSensor, 
  PointerSensor, 
  useSensor, 
  useSensors, 
  DragEndEvent 
} from "@dnd-kit/core";
import { 
  arrayMove, 
  SortableContext, 
  sortableKeyboardCoordinates, 
  verticalListSortingStrategy, 
  useSortable 
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { cn } from "@/lib/utils";

// --- Types ---
interface Banner {
  id: string;
  title: string;
  image_url: string;
  cta_text: string;
  cta_link: string;
  is_active: boolean;
  display_order: number;
}

interface Testimonial {
  id: string;
  customer_name: string;
  quote: string;
  rating: number;
  avatar_url: string;
}

interface SiteSettings {
  [key: string]: boolean;
}

// --- Sortable Item Component ---
function SortableBannerItem({ banner, onDelete, onToggle }: { 
  banner: Banner, 
  onDelete: (id: string) => void, 
  onToggle: (id: string, active: boolean) => void 
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: banner.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div 
      ref={setNodeRef} 
      style={style} 
      className="flex items-center gap-4 bg-card border border-border p-4 rounded-xl shadow-sm hover:shadow-md transition-all group"
    >
      <div {...attributes} {...listeners} className="cursor-grab hover:text-accent transition-colors">
        <GripVertical className="w-5 h-5 text-muted-foreground" />
      </div>
      <div className="w-24 h-14 rounded-lg bg-secondary border border-border/50 overflow-hidden flex-shrink-0">
        <img src={banner.image_url} alt={banner.title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-heading font-semibold text-foreground truncate">{banner.title || "Untitled Banner"}</h4>
        <p className="text-xs text-muted-foreground font-body truncate">{banner.cta_link || "No CTA Link"}</p>
      </div>
      <div className="flex items-center gap-2">
        <Button 
          variant="secondary" 
          size="sm" 
          onClick={() => onToggle(banner.id, !banner.is_active)}
          className={cn("h-8 gap-1.5", !banner.is_active && "bg-orange-100 text-orange-600 hover:bg-orange-200")}
        >
          {banner.is_active ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
          <span className="hidden sm:inline">{banner.is_active ? "Active" : "Hidden"}</span>
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => onDelete(banner.id)}
          className="h-8 w-8 p-0 text-red-500 hover:bg-red-50 hover:text-red-600"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

export default function ContentManagement() {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [settings, setSettings] = useState<SiteSettings>({
    Hero: true,
    FeaturedProducts: true,
    Categories: true,
    Testimonials: true,
    AIMakeover: true
  });
  const [loading, setLoading] = useState(true);

  // DnD Sensors
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Fetch all content
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch banners
        const { data: bannersData, error: bannersError } = await supabase
          .from("banners")
          .select("*")
          .order("display_order", { ascending: true });
        if (bannersError) throw bannersError;
        setBanners(bannersData || []);

        // Fetch testimonials
        const { data: testimonialsData, error: testimonialsError } = await supabase
          .from("testimonials")
          .select("*")
          .order("created_at", { ascending: false });
        if (testimonialsError) throw testimonialsError;
        setTestimonials(testimonialsData || []);

        // Fetch site settings
        const { data: settingsData, error: settingsError } = await supabase
          .from("site_settings")
          .select("key, value");
        if (!settingsError && settingsData) {
          const formattedSettings = settingsData.reduce((acc, curr) => ({
            ...acc,
            [curr.key]: curr.value
          }), {});
          setSettings(prev => ({ ...prev, ...formattedSettings }));
        }
      } catch (err: any) {
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // --- Banner Actions ---
  const handleAddBanner = async (newBanner: any) => {
    try {
      const { data, error } = await supabase
        .from("banners")
        .insert({ 
          ...newBanner, 
          display_order: banners.length 
        })
        .select()
        .single();
      if (error) throw error;
      setBanners([...banners, data]);
      toast.success("Banner added successfully");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const handleDeleteBanner = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this banner?")) return;
    try {
      const { error } = await supabase.from("banners").delete().eq("id", id);
      if (error) throw error;
      setBanners(banners.filter(b => b.id !== id));
      toast.success("Banner deleted");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const handleToggleBanner = async (id: string, active: boolean) => {
    try {
      const { error } = await supabase.from("banners").update({ is_active: active }).eq("id", id);
      if (error) throw error;
      setBanners(banners.map(b => b.id === id ? { ...b, is_active: active } : b));
      toast.success(`Banner ${active ? "activated" : "hidden"}`);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = banners.findIndex((b) => b.id === active.id);
      const newIndex = banners.findIndex((b) => b.id === over.id);
      const newBanners = arrayMove(banners, oldIndex, newIndex);
      setBanners(newBanners);

      // Update display order in Supabase
      try {
        const updates = newBanners.map((banner, index) => ({
          id: banner.id,
          display_order: index,
          title: banner.title,
          image_url: banner.image_url,
          cta_text: banner.cta_text,
          cta_link: banner.cta_link,
          is_active: banner.is_active
        }));
        const { error } = await supabase.from("banners").upsert(updates);
        if (error) throw error;
      } catch (err: any) {
        toast.error("Failed to update banner order: " + err.message);
      }
    }
  };

  // --- Testimonial Actions ---
  const handleAddTestimonial = async (newTest: any) => {
    try {
      const { data, error } = await supabase
        .from("testimonials")
        .insert(newTest)
        .select()
        .single();
      if (error) throw error;
      setTestimonials([data, ...testimonials]);
      toast.success("Testimonial added");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const handleDeleteTestimonial = async (id: string) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      const { error } = await supabase.from("testimonials").delete().eq("id", id);
      if (error) throw error;
      setTestimonials(testimonials.filter(t => t.id !== id));
      toast.success("Testimonial deleted");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  // --- Visibility Actions ---
  const handleToggleVisibility = async (key: string, value: boolean) => {
    try {
      const { error } = await supabase
        .from("site_settings")
        .upsert({ key, value }, { onConflict: "key" });
      if (error) throw error;
      setSettings({ ...settings, [key]: value });
      toast.success(`${key} visibility updated`);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  if (loading) return (
    <div className="h-64 flex items-center justify-center">
      <RefreshCw className="w-8 h-8 text-accent animate-spin" />
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-heading text-2xl font-bold text-foreground">Content Management</h2>
          <p className="text-sm text-muted-foreground font-body">Customize the landing page look and feel.</p>
        </div>
      </div>

      <Tabs defaultValue="banners" className="w-full">
        <TabsList className="bg-card border border-border p-1 rounded-xl w-full md:w-auto h-auto min-h-12 flex-wrap md:flex-nowrap">
          <TabsTrigger value="banners" className="px-6 py-2 rounded-lg gap-2 flex-grow md:flex-grow-0">
            <ImageIcon className="w-4 h-4" /> Banners
          </TabsTrigger>
          <TabsTrigger value="testimonials" className="px-6 py-2 rounded-lg gap-2 flex-grow md:flex-grow-0">
            <Star className="w-4 h-4" /> Testimonials
          </TabsTrigger>
          <TabsTrigger value="visibility" className="px-6 py-2 rounded-lg gap-2 flex-grow md:flex-grow-0">
            <Eye className="w-4 h-4" /> Visibility
          </TabsTrigger>
        </TabsList>

        {/* --- Banners Tab --- */}
        <TabsContent value="banners" className="pt-6 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-heading text-lg font-bold text-foreground">Active Banners</h3>
            <AddBannerModal onAdd={handleAddBanner} />
          </div>

          <DndContext 
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext 
              items={banners.map(b => b.id)}
              strategy={verticalListSortingStrategy}
            >
              <div className="grid gap-3">
                {banners.map((banner) => (
                  <SortableBannerItem 
                    key={banner.id} 
                    banner={banner} 
                    onDelete={handleDeleteBanner}
                    onToggle={handleToggleBanner}
                  />
                ))}
                {banners.length === 0 && (
                  <div className="bg-card border-2 border-dashed border-border rounded-2xl py-12 text-center">
                    <p className="text-muted-foreground font-body">No banners added yet.</p>
                  </div>
                )}
              </div>
            </SortableContext>
          </DndContext>
        </TabsContent>

        {/* --- Testimonials Tab --- */}
        <TabsContent value="testimonials" className="pt-6 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-heading text-lg font-bold text-foreground">Customer Testimonials</h3>
            <AddTestimonialModal onAdd={handleAddTestimonial} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {testimonials.map((test) => (
                <div key={test.id} className="bg-card border border-border p-5 rounded-2xl flex items-start gap-4 shadow-sm">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-secondary border border-border flex-shrink-0">
                    {test.avatar_url ? (
                      <img src={test.avatar_url} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-bold text-accent">{test.customer_name[0]}</div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-heading font-bold text-foreground">{test.customer_name}</h4>
                      <Button variant="ghost" size="sm" onClick={() => handleDeleteTestimonial(test.id)} className="h-8 w-8 p-0 text-red-500 hover:bg-red-50">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="flex gap-0.5 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={cn("w-3 h-3 fill-current", i < test.rating ? "text-yellow-500" : "text-border")} />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground font-body line-clamp-3 italic">"{test.quote}"</p>
                  </div>
                </div>
             ))}
          </div>

          {testimonials.length === 0 && (
            <div className="bg-card border-2 border-dashed border-border rounded-2xl py-12 text-center col-span-2">
              <p className="text-muted-foreground font-body">No testimonials added yet.</p>
            </div>
          )}
        </TabsContent>

        {/* --- Section Visibility Tab --- */}
        <TabsContent value="visibility" className="pt-6">
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="p-6 border-b border-border bg-secondary/20">
              <h3 className="font-heading font-bold text-foreground">Landing Page Modules</h3>
              <p className="text-xs text-muted-foreground font-body">Toggle which sections are visible to your visitors.</p>
            </div>
            <div className="divide-y divide-border">
              {Object.entries(settings).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between p-6 hover:bg-secondary/10 transition-colors">
                  <div>
                    <h4 className="font-heading font-semibold text-foreground tracking-tight">{key} Section</h4>
                    <p className="text-xs text-muted-foreground font-body">Toggle the {key} block on the home page</p>
                  </div>
                  <Switch 
                    checked={value} 
                    onCheckedChange={(val) => handleToggleVisibility(key, val)}
                    className="data-[state=checked]:bg-accent"
                  />
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// --- Modals ---

function AddBannerModal({ onAdd }: { onAdd: (banner: any) => Promise<void> }) {
  const [open, setOpen] = useState(false);
  const [f, setF] = useState({ title: "", image_url: "", cta_text: "Shop Now", cta_link: "/products" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!f.image_url) return toast.error("Image URL is required");
    await onAdd(f);
    setOpen(false);
    setF({ title: "", image_url: "", cta_text: "Shop Now", cta_link: "/products" });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className="bg-accent text-accent-foreground font-semibold gap-1.5 h-9">
          <Plus className="w-4 h-4" /> Add Banner
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md bg-card border-border sm:rounded-2xl shadow-2xl">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl font-bold">New Marketing Banner</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="title" className="font-semibold text-xs uppercase tracking-wider text-muted-foreground">Banner Title (Internal)</Label>
            <Input id="title" placeholder="e.g. Summer Sale 2024" value={f.title} onChange={e => setF({...f, title: e.target.value})} className="bg-secondary/20 border-border" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="img" className="font-semibold text-xs uppercase tracking-wider text-muted-foreground">Banner Image URL</Label>
             <div className="flex gap-2">
              <Input id="img" placeholder="https://..." value={f.image_url} onChange={e => setF({...f, image_url: e.target.value})} className="bg-secondary/20 border-border" />
             </div>
             <p className="text-[10px] text-muted-foreground italic italic">Recommended: 1920x800px high quality image</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="cta" className="font-semibold text-xs uppercase tracking-wider text-muted-foreground">CTA Text</Label>
              <Input id="cta" placeholder="Shop Now" value={f.cta_text} onChange={e => setF({...f, cta_text: e.target.value})} className="bg-secondary/20 border-border" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="link" className="font-semibold text-xs uppercase tracking-wider text-muted-foreground">CTA Link</Label>
              <Input id="link" placeholder="/products" value={f.cta_link} onChange={e => setF({...f, cta_link: e.target.value})} className="bg-secondary/20 border-border" />
            </div>
          </div>
          <DialogFooter className="pt-4">
            <Button type="button" variant="ghost" onClick={() => setOpen(false)} className="font-semibold">Cancel</Button>
            <Button type="submit" className="bg-accent text-accent-foreground font-bold px-8">Create Banner</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function AddTestimonialModal({ onAdd }: { onAdd: (test: any) => Promise<void> }) {
  const [open, setOpen] = useState(false);
  const [f, setF] = useState({ customer_name: "", quote: "", rating: 5, avatar_url: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!f.customer_name || !f.quote) return toast.error("Missing required fields");
    await onAdd(f);
    setOpen(false);
    setF({ customer_name: "", quote: "", rating: 5, avatar_url: "" });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="font-semibold gap-1.5 h-9 border-accent text-accent hover:bg-accent/5">
          <Plus className="w-4 h-4" /> Add Testimonial
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md bg-card border-border sm:rounded-2xl shadow-2xl">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl font-bold">Add Customer Testimonial</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="font-semibold text-xs uppercase tracking-wider text-muted-foreground">Name</Label>
              <Input placeholder="John Doe" value={f.customer_name} onChange={e => setF({...f, customer_name: e.target.value})} className="bg-secondary/20 border-border" />
            </div>
            <div className="space-y-2">
              <Label className="font-semibold text-xs uppercase tracking-wider text-muted-foreground">Rating</Label>
              <select 
                title="Rating Selection"
                className="w-full bg-secondary/20 border border-border rounded-md px-3 h-10 text-sm font-medium focus:ring-1 focus:ring-accent outline-none"
                value={f.rating}
                onChange={e => setF({...f, rating: parseInt(e.target.value)})}
              >
                {[5,4,3,2,1].map(n => <option key={n} value={n}>{n} Stars</option>)}
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <Label className="font-semibold text-xs uppercase tracking-wider text-muted-foreground">Avatar URL (Optional)</Label>
            <Input placeholder="https://..." value={f.avatar_url} onChange={e => setF({...f, avatar_url: e.target.value})} className="bg-secondary/20 border-border" />
          </div>
          <div className="space-y-2">
            <Label className="font-semibold text-xs uppercase tracking-wider text-muted-foreground">Quote</Label>
            <textarea 
              title="Testimonial Quote"
              rows={4}
              placeholder="What did they say about the service?"
              value={f.quote}
              onChange={e => setF({...f, quote: e.target.value})}
              className="w-full bg-secondary/20 border border-border rounded-md p-3 text-sm font-body outline-none focus:ring-1 focus:ring-accent"
            />
          </div>
          <DialogFooter className="pt-4">
             <Button type="submit" className="bg-accent text-accent-foreground font-bold w-full h-11">Post Testimonial</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

const RefreshCw = (props: any) => <RefreshingCw {...props} />;
function RefreshingCw(props: any) {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M3 21v-5h5" />
    </svg>
  )
}
