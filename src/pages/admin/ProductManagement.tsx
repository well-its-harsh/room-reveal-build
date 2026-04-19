import { useState, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { Product, Category } from "@/types/database";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Pencil, Trash2, X, Upload, Link as LinkIcon, Image as ImageIcon, Ruler, Box, PackageOpen } from "lucide-react";
import { toast } from "sonner";

type ImageState = {
  id: string;
  method: 'upload' | 'url';
  url: string;
  file: File | null;
};

export default function ProductManagement() {
  const queryClient = useQueryClient();
  const [editing, setEditing] = useState<any>(null);
  const [showForm, setShowForm] = useState(false);

  // Form State - Basic Info
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [areaId, setAreaId] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [subcategoryId, setSubcategoryId] = useState("");
  const [price, setPrice] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [isOnSale, setIsOnSale] = useState(false);
  const [saleLabel, setSaleLabel] = useState("");
  const [saleEndsAt, setSaleEndsAt] = useState("");
  const [status, setStatus] = useState("active");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState("");
  const [specifications, setSpecifications] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [careMaintenance, setCareMaintenance] = useState("");
  const [bulkDiscountInfo, setBulkDiscountInfo] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);
  
  // Dimensions Constraints
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [depth, setDepth] = useState("");
  
  // Dynamic Images Array
  const [images, setImages] = useState<ImageState[]>([]);
  
  // Strict AR Settings
  const [arEnabled, setArEnabled] = useState(false);
  const [arMethod, setArMethod] = useState<'upload' | 'url'>('url');
  const [arUrl, setArUrl] = useState("");
  const [arFile, setArFile] = useState<File | null>(null);

  // Product Variants
  const [variants, setVariants] = useState<any[]>([]);

  const fileInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});
  const arFileInputRef = useRef<HTMLInputElement>(null);

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["admin-products"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*, category:categories(*), product_media(*), ar_assets(*)")
        .order("created_at", { ascending: false })
        .limit(50);
      if (error) throw error;
      return data;
    },
  });

  const { data: areas = [] } = useQuery({
    queryKey: ["admin-areas"],
    queryFn: async () => {
      const { data, error } = await supabase.from("areas").select("*").eq("is_active", true).order("sort_order");
      if (error) throw error;
      return data;
    },
  });

  const { data: categories = [] } = useQuery({
    queryKey: ["admin-categories", areaId],
    queryFn: async () => {
      if (!areaId) return [];
      const { data, error } = await supabase.from("categories").select("*").eq("area_id", areaId).eq("is_active", true).order("sort_order");
      if (error) throw error;
      return data;
    },
    enabled: !!areaId
  });

  const { data: subcategories = [] } = useQuery({
    queryKey: ["admin-subcategories", categoryId],
    queryFn: async () => {
      if (!categoryId) return [];
      const { data, error } = await supabase.from("subcategories").select("*").eq("category_id", categoryId).eq("is_active", true).order("sort_order");
      if (error) throw error;
      return data;
    },
    enabled: !!categoryId
  });

  const resetForm = () => {
    setName(""); setBrand(""); setAreaId(""); setCategoryId(""); setSubcategoryId(""); setPrice(""); 
    setOriginalPrice(""); setIsOnSale(false); setSaleLabel(""); setSaleEndsAt("");
    setStatus("active"); setDescription("");
    setFeatures(""); setSpecifications(""); setAdditionalInfo(""); setCareMaintenance("");
    setBulkDiscountInfo("Extra 5% off on bulk orders");
    setWidth(""); setHeight(""); setDepth(""); setIsFeatured(false);
    setImages([]); setArEnabled(false); setArMethod('url'); setArUrl(""); setArFile(null);
    setVariants([]);
    setEditing(null); setShowForm(false);
    fileInputRefs.current = {};
  };

  const openEdit = (p: any) => {
    setEditing(p);
    setName(p.name);
    setBrand(p.brand || "");
    setAreaId(p.area_id || "");
    setCategoryId(p.category_id || "");
    setSubcategoryId(p.subcategory_id || "");
    setPrice(String(p.price));
    setOriginalPrice(p.original_price ? String(p.original_price) : "");
    setIsOnSale(p.is_on_sale || false);
    setSaleLabel(p.sale_label || "");
    setSaleEndsAt(p.sale_ends_at ? new Date(p.sale_ends_at).toISOString().slice(0, 16) : "");
    setStatus(p.status || "active");
    setDescription(p.description || "");
    setFeatures(p.features || "");
    setSpecifications(p.specifications || "");
    setAdditionalInfo(p.additional_info || "");
    setCareMaintenance(p.care_maintenance || "");
    setBulkDiscountInfo(p.bulk_discount_info || "Extra 5% off on bulk orders");
    
    setWidth(p.width ? String(p.width) : "");
    setHeight(p.height ? String(p.height) : "");
    setDepth(p.depth ? String(p.depth) : "");
    setIsFeatured(p.is_featured || false);
    setArEnabled(p.ar_enabled || false);
    
    // Fetch variants
    supabase.from("product_variants").select("*").eq("product_id", p.id).order("sort_order")
      .then(({ data }) => {
        if (data) setVariants(data);
      });

    const existingMedia = p.product_media?.filter((m: any) => m.media_type === 'image') || [];
    setImages(existingMedia.map((m: any) => ({
      id: Math.random().toString(), method: 'url', url: m.media_url, file: null
    })));

    const arAsset = p.ar_assets?.[0];
    if (arAsset) {
      setArMethod('url');
      setArUrl(arAsset.asset_url || "");
    } else {
      setArMethod('url');
      setArUrl("");
    }
    
    setShowForm(true);
  };

  const addImageField = () => setImages([...images, { id: Math.random().toString(), method: 'url', url: '', file: null }]);
  const removeImageField = (id: string) => setImages(images.filter(i => i.id !== id));
  const updateImageField = (id: string, updates: Partial<ImageState>) => {
    setImages(images.map(i => i.id === id ? { ...i, ...updates } : i));
  };

  const saveMutation = useMutation({
    mutationFn: async () => {
      // 1. Validation Pre-flight Check (Strict)
      if (!name.trim() || !price || !categoryId) throw new Error("Missing required basic info (Name, Price, Category).");
      if (!width || !height || !depth) throw new Error("All dimensions (Width, Height, Depth) are strictly required for placement accuracy.");
      
      const validImages = images.filter(i => (i.method === 'url' && i.url) || (i.method === 'upload' && i.file));
      if (validImages.length === 0) throw new Error("At least one product image is absolutely required.");
      
      // AR Model is now optional - image-based fallback supported
      // if (arEnabled && !arUrl && !arFile) throw new Error("AR is toggle ON, but no 3D asset URL or Upload was provided.");
      
      const productData = {
        name: name.trim(),
        brand: brand.trim() || null,
        area_id: areaId || null,
        category_id: categoryId || null,
        subcategory_id: subcategoryId || null,
        price: parseFloat(price),
        original_price: originalPrice ? parseFloat(originalPrice) : null,
        discounted_price: parseFloat(price),
        discount_percentage: originalPrice ? Math.round(((parseFloat(originalPrice) - parseFloat(price)) / parseFloat(originalPrice)) * 100) : 0,
        is_on_sale: isOnSale,
        sale_label: saleLabel || null,
        sale_ends_at: saleEndsAt || null,
        status,
        description: description.trim() || null,
        features: features.trim() || null,
        specifications: specifications.trim() || null,
        additional_info: additionalInfo.trim() || null,
        care_maintenance: careMaintenance.trim() || null,
        bulk_discount_info: bulkDiscountInfo.trim() || "Extra 5% off on bulk orders",
        width: parseFloat(width),
        height: parseFloat(height),
        depth: parseFloat(depth),
        ar_enabled: arEnabled,
        is_featured: isFeatured,
      };

      let productId = editing?.id;

      // 2. Core Insert/Update (Products Table)
      if (editing) {
        const { error } = await supabase.from("products").update(productData).eq("id", editing.id);
        if (error) throw new Error(`Product Save Failed: ${error.message}`);
        
        // Clean out existing relations to flawlessly re-sync the array mappings
        await supabase.from("product_media").delete().eq("product_id", editing.id).eq("media_type", "image");
        await supabase.from("ar_assets").delete().eq("product_id", editing.id);
      } else {
        const { data, error } = await supabase.from("products").insert(productData).select().single();
        if (error) throw new Error(`Product Save Failed: ${error.message}`);
        productId = data.id;
      }

      if (!productId) throw new Error("Failed to resolve stable Product ID boundary.");

      // 3. Process Variants
      // First, clean up old variants if editing
      if (editing) {
        await supabase.from("product_variants").delete().eq("product_id", editing.id);
      }
      
      if (variants.length > 0) {
        const variantsToInsert = variants.map((v, idx) => ({
          product_id: productId,
          name: v.name,
          sku: v.sku || null,
          color: v.color || null,
          finish: v.finish || null,
          size: v.size || null,
          material: v.material || null,
          original_price: v.original_price ? parseFloat(v.original_price) : null,
          discounted_price: v.discounted_price ? parseFloat(v.discounted_price) : null,
          stock_quantity: parseInt(v.stock_quantity) || 0,
          is_default: v.is_default || false,
          sort_order: idx
        }));
        
        const { error: variantError } = await supabase.from("product_variants").insert(variantsToInsert);
        if (variantError) throw new Error(`Variant Save Failed: ${variantError.message}`);
      }

      // 3. Process Dynamic Multi-Images -> product_media ('product-images' bucket)
      for (const img of validImages) {
        let finalUrl = img.url;
        if (img.method === 'upload' && img.file) {
          const fileExt = img.file.name.split('.').pop();
          const filePath = `${productId}/${Math.random().toString(36).substring(7)}.${fileExt}`;
          const { error: uploadError } = await supabase.storage.from('product-images').upload(filePath, img.file);
          if (uploadError) throw new Error(`Image Storage Upload Failed: ${uploadError.message}`);
          
          const { data } = supabase.storage.from('product-images').getPublicUrl(filePath);
          finalUrl = data.publicUrl;
        }
        
        const { error: mediaError } = await supabase.from("product_media").insert({
          product_id: productId,
          media_url: finalUrl,
          media_type: 'image'
        });
        if (mediaError) throw new Error(`Image Relation Assignment Failed: ${mediaError.message}`);
      }

      // 4. Process AR Asset -> ar_assets ('product-models' bucket)
      // Only runs if a model URL or File is actually provided
      if (arEnabled && (arUrl || arFile)) {
        let finalArUrl = arUrl;
        let ext = 'glb'; // default type
        
        if (arMethod === 'upload' && arFile) {
          ext = arFile.name.split('.').pop() || 'glb';
          const filePath = `${productId}/${Math.random().toString(36).substring(7)}.${ext}`;
          const { error: uploadError } = await supabase.storage.from('product-models').upload(filePath, arFile);
          if (uploadError) throw new Error(`AR 3D Object Upload Failed: ${uploadError.message}`);
          
          const { data } = supabase.storage.from('product-models').getPublicUrl(filePath);
          finalArUrl = data.publicUrl;
        }

        const { error: arError } = await supabase.from("ar_assets").insert({
          product_id: productId,
          asset_url: finalArUrl,
          asset_type: ext,
          status: 'ready'
        });
        if (arError) throw new Error(`AR Database Injection Failed: ${arError.message}`);
      }
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["admin-products"] });
      toast.success(editing ? "Product updated successfully" : "Product securely processed and launched!");
      resetForm();
    },
    onError: (err: any) => {
      console.error("Critical Product Flow Error:", err);
      toast.error(err.message || "Failed to finalize flow");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("products").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-products"] });
      toast.success("Product deleted safely");
    },
    onError: (err: any) => toast.error(err.message),
  });

  const statusBadge = (s: string) => {
    const colors: Record<string, string> = {
      active: "bg-green-100 text-green-800 border-green-200",
      draft: "bg-yellow-100 text-yellow-800 border-yellow-200",
      archived: "bg-red-100 text-red-800 border-red-200",
    };
    return `border ${colors[s] || "bg-secondary text-secondary-foreground"}`;
  };

  return (
    <div className="pb-20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-heading text-2xl font-semibold text-foreground tracking-tight">Product Pipeline</h2>
        <Button onClick={() => { resetForm(); setShowForm(true); }} className="bg-accent text-accent-foreground hover:bg-accent/90 font-body shadow-sm">
          <Plus className="w-4 h-4 mr-2" /> Inject New Product
        </Button>
      </div>

      {showForm && (
        <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-8 max-w-5xl mx-auto shadow-sm ring-1 ring-border/50">
          <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
            <h3 className="font-heading text-2xl font-semibold text-foreground tracking-tight">
              {editing ? "Modify Entity Parameters" : "Establish New Product Matrix"}
            </h3>
            <button onClick={resetForm} className="hover:bg-muted p-2 rounded-full transition-colors"><X className="w-5 h-5 text-muted-foreground" /></button>
          </div>

          <div className="grid gap-10">
            {/* Section 1: Basic Information */}
            <section>
              <div className="flex items-center gap-2 mb-5">
                <Box className="w-5 h-5 text-accent" />
                <h4 className="font-heading text-lg font-medium tracking-tight">Foundational Data</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 bg-muted/20 p-5 rounded-xl border border-border/60">
                <div>
                  <label className="text-sm font-semibold font-body block mb-1.5">Entity Name <span className="text-destructive">*</span></label>
                  <Input value={name} onChange={(e) => setName(e.target.value)} className="font-body bg-background" placeholder="e.g., Ceramic Basin" />
                </div>
                <div>
                  <label className="text-sm font-semibold font-body block mb-1.5">Brand <span className="text-destructive">*</span></label>
                  <Input 
                    value={brand} 
                    onChange={(e) => setBrand(e.target.value)} 
                    list="brand-options"
                    placeholder="Type or select brand..." 
                    className="font-body bg-background" 
                  />
                  <datalist id="brand-options">
                    <option value="Kerovit by Kajaria" />
                    <option value="Kajaria Tiles" />
                    <option value="Hindware" />
                    <option value="Prince Pipes" />
                    <option value="Watero Bathwares" />
                    <option value="Vikings Bath Accessories" />
                  </datalist>
                </div>
                <div>
                  <label className="text-sm font-semibold font-body block mb-1.5">Area</label>
                  <select
                    value={areaId}
                    onChange={(e) => { setAreaId(e.target.value); setCategoryId(""); setSubcategoryId(""); }}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-body focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <option value="">Select Area</option>
                    {areas.map((a: any) => <option key={a.id} value={a.id}>{a.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold font-body block mb-1.5">Category <span className="text-destructive">*</span></label>
                  <select
                    value={categoryId}
                    onChange={(e) => { setCategoryId(e.target.value); setSubcategoryId(""); }}
                    disabled={!areaId}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-body focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50"
                  >
                    <option value="" disabled>Select category taxonomy</option>
                    {categories.map((c: any) => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold font-body block mb-1.5">Subcategory</label>
                  <select
                    value={subcategoryId}
                    onChange={(e) => setSubcategoryId(e.target.value)}
                    disabled={!categoryId}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-body focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50"
                  >
                    <option value="">Select Subcategory (optional)</option>
                    {subcategories.map((s: any) => (
                      <option key={s.id} value={s.id}>{s.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold font-body block mb-1.5">Effective Price (₹) <span className="text-destructive">*</span></label>
                  <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="font-body bg-background" placeholder="0.00" />
                  <p className="text-[10px] text-muted-foreground mt-1 italic">This is the price customers pay.</p>
                </div>
                <div>
                  <label className="text-sm font-semibold font-body block mb-1.5">Original Price (₹)</label>
                  <Input type="number" value={originalPrice} onChange={(e) => setOriginalPrice(e.target.value)} className="font-body bg-background" placeholder="0.00" />
                  <p className="text-[10px] text-muted-foreground mt-1 italic">To show a strike-through discount.</p>
                </div>
                <div>
                  <label className="text-sm font-medium font-body block mb-1.5 text-muted-foreground">Lifecycle Status</label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-body focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <option value="active">Active (Live in Store)</option>
                    <option value="draft">Draft (Hidden)</option>
                    <option value="archived">Archived (Depreciated)</option>
                  </select>
                </div>
                <div className="flex flex-col gap-4 bg-accent/5 p-4 rounded-lg border border-accent/20">
                   <div className="flex items-center gap-2">
                    <input type="checkbox" id="on-sale" checked={isOnSale} onChange={(e) => setIsOnSale(e.target.checked)} className="rounded border-input text-accent focus:ring-accent" />
                    <label htmlFor="on-sale" className="text-sm font-bold font-body cursor-pointer text-accent">Enable Sale Mode</label>
                  </div>
                  {isOnSale && (
                    <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1 block">Sale Label</label>
                        <Input value={saleLabel} onChange={e => setSaleLabel(e.target.value)} placeholder="e.g., Festival Offer" className="h-8 text-xs font-body" />
                      </div>
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1 block">Ends At</label>
                        <Input type="datetime-local" value={saleEndsAt} onChange={e => setSaleEndsAt(e.target.value)} className="h-8 text-xs font-body" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-3">
                   <div className="flex items-center gap-2">
                    <input type="checkbox" id="featured" checked={isFeatured} onChange={(e) => setIsFeatured(e.target.checked)} className="rounded border-input text-accent focus:ring-accent" />
                    <label htmlFor="featured" className="text-sm font-medium font-body cursor-pointer">Flag as Featured Focus</label>
                  </div>
                </div>
                <div className="md:col-span-2 lg:col-span-3">
                  <label className="text-sm font-medium font-body block mb-1.5 text-muted-foreground">Product Description</label>
                  <Textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} className="font-body bg-background" placeholder="General marketing description..." />
                </div>
                <div>
                  <label className="text-sm font-semibold font-body block mb-1.5">Bulk Discount Info</label>
                  <Input value={bulkDiscountInfo} onChange={(e) => setBulkDiscountInfo(e.target.value)} className="font-body bg-background" placeholder="e.g. Extra 5% off on bulk orders" />
                </div>
              </div>
            </section>

            {/* Section 1.5: Detailed Specifications */}
            <section>
              <div className="flex items-center gap-2 mb-5">
                <Plus className="w-5 h-5 text-accent" />
                <h4 className="font-heading text-lg font-medium tracking-tight">Enhanced Details</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-muted/20 p-5 rounded-xl border border-border/60">
                <div className="md:col-span-2">
                  <label className="text-sm font-medium font-body block mb-1.5 text-muted-foreground">Key Features</label>
                  <Textarea value={features} onChange={(e) => setFeatures(e.target.value)} rows={3} className="font-body bg-background" placeholder="Enter key features (one per line)..." />
                </div>
                <div>
                  <label className="text-sm font-medium font-body block mb-1.5 text-muted-foreground">Technical Specifications</label>
                  <Textarea value={specifications} onChange={(e) => setSpecifications(e.target.value)} rows={4} className="font-body bg-background" placeholder="Dimensions, Material, Installation..." />
                </div>
                <div>
                  <label className="text-sm font-medium font-body block mb-1.5 text-muted-foreground">Additional Information</label>
                  <Textarea value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)} rows={4} className="font-body bg-background" placeholder="Package contents, warranty..." />
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium font-body block mb-1.5 text-muted-foreground">Care & Maintenance</label>
                  <Textarea value={careMaintenance} onChange={(e) => setCareMaintenance(e.target.value)} rows={2} className="font-body bg-background" placeholder="Cleaning instructions..." />
                </div>
              </div>
            </section>

            {/* Section 2: Dimensions */}
            <section>
              <div className="flex items-center gap-2 mb-5">
                <Ruler className="w-5 h-5 text-accent" />
                <h4 className="font-heading text-lg font-medium tracking-tight">Physical Volumetrics <span className="text-destructive text-sm font-normal ml-2 font-body tracking-normal">*Required</span></h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 bg-muted/20 p-5 rounded-xl border border-border/60">
                <div>
                  <label className="text-sm font-semibold font-body block mb-1.5 text-muted-foreground">Width (mm)</label>
                  <Input type="number" value={width} onChange={(e) => setWidth(e.target.value)} className="font-body bg-background" placeholder="X axis..." />
                </div>
                <div>
                  <label className="text-sm font-semibold font-body block mb-1.5 text-muted-foreground">Height (mm)</label>
                  <Input type="number" value={height} onChange={(e) => setHeight(e.target.value)} className="font-body bg-background" placeholder="Y axis..." />
                </div>
                <div>
                  <label className="text-sm font-semibold font-body block mb-1.5 text-muted-foreground">Depth (mm)</label>
                  <Input type="number" value={depth} onChange={(e) => setDepth(e.target.value)} className="font-body bg-background" placeholder="Z axis..." />
                </div>
              </div>
            </section>

            {/* Section 2.5: Variants */}
            <section>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <PackageOpen className="w-5 h-5 text-accent" />
                  <h4 className="font-heading text-lg font-medium tracking-tight">Product Variants</h4>
                </div>
                <Button 
                  onClick={(e) => {
                    e.preventDefault();
                    setVariants([...variants, { name: "", sku: "", color: "", finish: "", size: "", material: "", discounted_price: "", original_price: "", stock_quantity: "0", is_default: false }]);
                  }} 
                  size="sm" variant="outline" className="font-body h-8"
                >
                  <Plus className="w-3.5 h-3.5 mr-1" /> Add Variant
                </Button>
              </div>
              
              <div className="space-y-4">
                {variants.map((v, idx) => (
                  <div key={idx} className="bg-muted/10 p-4 rounded-xl border border-border/60 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 relative pt-10 md:pt-4">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        setVariants(variants.filter((_, i) => i !== idx));
                      }}
                      className="absolute top-2 right-2 p-1.5 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    
                    <div className="col-span-2">
                      <label className="text-[10px] font-bold uppercase text-muted-foreground mb-1 block">Variant Name</label>
                      <Input value={v.name} onChange={e => {
                        const newVariants = [...variants];
                        newVariants[idx].name = e.target.value;
                        setVariants(newVariants);
                      }} placeholder="e.g. Matte Black" className="h-9 text-xs" />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase text-muted-foreground mb-1 block">SKU</label>
                      <Input value={v.sku} onChange={e => {
                        const newVariants = [...variants];
                        newVariants[idx].sku = e.target.value;
                        setVariants(newVariants);
                      }} placeholder="SKU" className="h-9 text-xs" />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase text-muted-foreground mb-1 block">Price</label>
                      <Input type="number" value={v.discounted_price} onChange={e => {
                        const newVariants = [...variants];
                        newVariants[idx].discounted_price = e.target.value;
                        setVariants(newVariants);
                      }} placeholder="₹" className="h-9 text-xs" />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase text-muted-foreground mb-1 block">Color/Finish</label>
                      <Input value={v.color || v.finish} onChange={e => {
                        const newVariants = [...variants];
                        newVariants[idx].color = e.target.value;
                        setVariants(newVariants);
                      }} placeholder="e.g. Gold" className="h-9 text-xs" />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase text-muted-foreground mb-1 block">Stock</label>
                      <Input type="number" value={v.stock_quantity} onChange={e => {
                        const newVariants = [...variants];
                        newVariants[idx].stock_quantity = e.target.value;
                        setVariants(newVariants);
                      }} placeholder="Qty" className="h-9 text-xs" />
                    </div>
                    <div className="col-span-full flex items-center gap-2 pt-2 border-t border-border/30">
                       <input 
                         type="checkbox" 
                         id={`default-${idx}`} 
                         checked={v.is_default} 
                         onChange={e => {
                           const newVariants = variants.map((varItem, i) => ({
                             ...varItem,
                             is_default: i === idx ? e.target.checked : false
                           }));
                           setVariants(newVariants);
                         }} 
                       />
                       <label htmlFor={`default-${idx}`} className="text-xs font-medium cursor-pointer">Set as Default Variant</label>
                    </div>
                  </div>
                ))}
                {variants.length === 0 && (
                  <div className="py-8 text-center border border-dashed border-border/60 rounded-xl">
                    <p className="text-sm text-muted-foreground">No variants added. Base product pricing will be used.</p>
                  </div>
                )}
              </div>
            </section>

            {/* Section 3: Imagery Core */}
            <section>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <ImageIcon className="w-5 h-5 text-accent" />
                  <h4 className="font-heading text-lg font-medium tracking-tight">Visual Manifest <span className="text-destructive text-sm font-normal ml-2 font-body tracking-normal">*Required</span></h4>
                </div>
                <Button onClick={addImageField} size="sm" variant="outline" className="font-body h-8"><Plus className="w-3.5 h-3.5 mr-1" /> Bound Image</Button>
              </div>
              
              <div className="space-y-4">
                {images.length === 0 ? (
                  <div className="bg-muted/30 border border-dashed border-border/60 rounded-xl p-8 text-center">
                    <p className="text-sm text-muted-foreground font-body">No visual nodes attached. Action required to proceed.</p>
                  </div>
                ) : (
                  images.map((img, index) => (
                    <div key={img.id} className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-muted/10 p-4 rounded-lg border border-border/50">
                      <div className="flex items-center gap-2 w-full md:w-auto">
                         <span className="text-xs font-bold font-body text-muted-foreground w-6">{(index + 1).toString().padStart(2, '0')}</span>
                         <select
                           value={img.method}
                           onChange={(e) => updateImageField(img.id, { method: e.target.value as 'url' | 'upload', url: '', file: null })}
                           className="h-9 rounded-md border border-input bg-background px-3 py-1 font-body text-sm min-w-32"
                         >
                           <option value="url">External Link</option>
                           <option value="upload">System Upload</option>
                         </select>
                      </div>
                      
                      <div className="flex-1 w-full">
                        {img.method === 'url' ? (
                          <div className="relative">
                            <LinkIcon className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input 
                              value={img.url} 
                              onChange={(e) => updateImageField(img.id, { url: e.target.value })} 
                              placeholder="https://..." 
                              className="pl-9 font-body bg-background" 
                            />
                          </div>
                        ) : (
                          <div className="flex items-center gap-3 flex-1 overflow-hidden">
                             <Button 
                               onClick={() => fileInputRefs.current[img.id]?.click()} 
                               variant="outline" 
                               className="font-body font-normal text-muted-foreground bg-background whitespace-nowrap"
                             >
                               <Upload className="w-4 h-4 mr-2" /> Retrieve Source
                             </Button>
                             <span className="text-xs text-muted-foreground font-body truncate flex-1">
                               {img.file ? img.file.name : "Awaiting payload..."}
                             </span>
                             <input
                               type="file"
                               ref={el => fileInputRefs.current[img.id] = el}
                               className="hidden"
                               accept="image/*"
                               onChange={(e) => {
                                 if (e.target.files && e.target.files[0]) {
                                   updateImageField(img.id, { file: e.target.files[0] });
                                 }
                               }}
                             />
                          </div>
                        )}
                      </div>
                      
                      <button onClick={() => removeImageField(img.id)} className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded transition-colors self-end md:self-auto"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  ))
                )}
              </div>
            </section>

            {/* Section 4: AR Asset Configurations */}
            <section>
              <div className="flex items-center justify-between mb-5 pb-2 border-b border-border/40">
                <div className="flex items-center gap-2">
                  <PackageOpen className={`w-5 h-5 ${arEnabled ? "text-accent" : "text-muted-foreground"}`} />
                  <h4 className="font-heading text-lg font-medium tracking-tight">Dimensional AR Lattice</h4>
                </div>
                <div className="flex items-center gap-3 bg-muted/40 px-3 py-1.5 rounded-full border border-border/50">
                  <span className="text-xs font-semibold font-body text-muted-foreground uppercase tracking-wide">Module</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked={arEnabled} onChange={(e) => setArEnabled(e.target.checked)} />
                    <div className="w-9 h-5 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-accent ring-1 ring-border"></div>
                  </label>
                </div>
              </div>

              {arEnabled && (
                <div className="bg-accent/5 p-6 rounded-xl border border-accent/20 animate-in fade-in slide-in-from-top-4 duration-300">
                  <p className="text-sm text-foreground/80 font-body mb-2">Engage the 3D model processing sequence. GLB matrices are highly recommended for web-native execution.</p>
                  <p className="text-xs text-muted-foreground font-body mb-5 italic">
                    No 3D model? No problem — For best AR results, upload images from at least 3 angles: Front, Side (45°), and Top-down. PNG with transparent background works best.
                  </p>
                  
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                     <select
                       value={arMethod}
                       onChange={(e) => { setArMethod(e.target.value as 'url' | 'upload'); setArUrl(""); setArFile(null); }}
                       className="h-10 rounded-md border border-accent/30 bg-background px-4 py-2 font-body text-sm min-w-36 font-semibold"
                     >
                       <option value="url">External Link</option>
                       <option value="upload">System Upload</option>
                     </select>
                     
                     <div className="flex-1 w-full">
                        {arMethod === 'url' ? (
                          <div className="relative">
                            <LinkIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input 
                              value={arUrl} 
                              onChange={(e) => setArUrl(e.target.value)} 
                              placeholder="https://.../model.glb" 
                              className="pl-9 h-10 font-body bg-background border-accent/30" 
                            />
                          </div>
                        ) : (
                          <div className="flex items-center gap-4 flex-1">
                             <Button 
                               onClick={() => arFileInputRef.current?.click()} 
                               className="font-body h-10 w-full md:w-auto bg-background text-foreground hover:bg-accent hover:text-accent-foreground border border-accent/40"
                             >
                               <Upload className="w-4 h-4 mr-2" /> Retrieve Package
                             </Button>
                             <span className="text-sm font-semibold text-muted-foreground font-body truncate flex-1 block">
                               {arFile ? arFile.name : "Awaiting payload..."}
                             </span>
                             <input
                               type="file"
                               ref={arFileInputRef}
                               className="hidden"
                               accept=".glb,.gltf,.obj"
                               onChange={(e) => {
                                 if (e.target.files && e.target.files[0]) setArFile(e.target.files[0]);
                               }}
                             />
                          </div>
                        )}
                     </div>
                  </div>
                </div>
              )}
            </section>
          </div>

          <div className="mt-10 pt-6 border-t border-border flex justify-end gap-3">
             <Button variant="ghost" onClick={resetForm} className="font-body font-medium">Abort</Button>
             <Button
               onClick={() => saveMutation.mutate()}
               disabled={saveMutation.isPending || !name || !price || !categoryId || !width || !height || !depth || images.length === 0}
               className="bg-accent text-accent-foreground hover:bg-accent/90 font-body shadow-md min-w-[160px]"
             >
               {saveMutation.isPending ? "Transmitting..." : editing ? "Update Matrix" : "Initialize Matrix"}
             </Button>
          </div>
        </div>
      )}

      {/* Render Product List */}
      <div className="space-y-4">
        {isLoading ? (
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl animate-pulse">
                <div className="w-16 h-16 rounded-md bg-muted flex-shrink-0" />
                <div className="flex-1 space-y-3">
                  <div className="h-5 bg-muted rounded w-1/3" />
                  <div className="h-4 bg-muted rounded w-1/4" />
                </div>
              </div>
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20 bg-card border border-border rounded-xl border-dashed">
             <PackageOpen className="w-10 h-10 text-muted-foreground mx-auto mb-4 opacity-50" />
             <p className="text-muted-foreground font-body text-lg">No product arrays established.</p>
          </div>
        ) : (
          products.map((p: any) => {
            const displayImage = p.product_media?.find((m: any) => m.media_type === 'image')?.media_url || "/placeholder.svg";
            return (
              <div key={p.id} className="flex items-center gap-5 p-4 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-16 h-16 rounded-md overflow-hidden bg-secondary flex-shrink-0 border border-border relative">
                  <img src={displayImage} alt={p.name} className="w-full h-full object-cover" />
                  {p.ar_enabled && (
                    <div className="absolute inset-0 bg-accent/20 flex items-center justify-center backdrop-blur-[1px]">
                      <PackageOpen className="w-6 h-6 text-accent drop-shadow-md" />
                    </div>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1.5">
                    <h4 className="font-heading text-base font-semibold text-foreground line-clamp-1 group-hover:text-accent transition-colors">{p.name}</h4>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider font-body ${statusBadge(p.status)}`}>{p.status}</span>
                    {p.is_featured && <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-accent text-accent-foreground font-body uppercase tracking-wider">Featured</span>}
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground font-body">
                    <span className="font-semibold text-foreground/70">{p.category?.name || "–"}</span>
                    {p.brand && <span>Brand: {p.brand}</span>}
                    <span className="font-semibold text-accent">₹{p.price.toLocaleString("en-IN")}</span>
                    <span>W: {p.width || '?'} / H: {p.height || '?'} / D: {p.depth || '?'}</span>
                  </div>
                </div>
                
                <div className="flex gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => openEdit(p)} className="p-2.5 bg-muted/50 rounded-md text-foreground hover:bg-muted transition-colors">
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => { if (confirm("Sanitize array? This action is permanent.")) deleteMutation.mutate(p.id); }}
                    className="p-2.5 bg-destructive/10 rounded-md text-destructive hover:bg-destructive hover:text-destructive-foreground transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
