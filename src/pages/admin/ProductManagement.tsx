import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { Product, Category } from "@/types/database";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Pencil, Trash2, X } from "lucide-react";
import { toast } from "sonner";

export default function ProductManagement() {
  const queryClient = useQueryClient();
  const [editing, setEditing] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);

  // Form state
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [depth, setDepth] = useState("");
  const [arEnabled, setArEnabled] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["admin-products"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*, category:categories(*), product_media(*)")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data, error } = await supabase.from("categories").select("*").order("name");
      if (error) throw error;
      return data as Category[];
    },
  });

  const resetForm = () => {
    setName(""); setDescription(""); setPrice(""); setCategoryId("");
    setWidth(""); setHeight(""); setDepth(""); setArEnabled(false); setImageUrl("");
    setEditing(null); setShowForm(false);
  };

  const openEdit = (p: any) => {
    setEditing(p);
    setName(p.name);
    setDescription(p.description || "");
    setPrice(String(p.price));
    setCategoryId(p.category_id);
    setWidth(p.width ? String(p.width) : "");
    setHeight(p.height ? String(p.height) : "");
    setDepth(p.depth ? String(p.depth) : "");
    setArEnabled(p.ar_enabled);
    setImageUrl(p.product_media?.[0]?.media_url || "");
    setShowForm(true);
  };

  const saveMutation = useMutation({
    mutationFn: async () => {
      const productData = {
        name,
        description,
        price: parseFloat(price),
        category_id: categoryId,
        width: width ? parseFloat(width) : null,
        height: height ? parseFloat(height) : null,
        depth: depth ? parseFloat(depth) : null,
        ar_enabled: arEnabled,
      };

      if (editing) {
        const { error } = await supabase.from("products").update(productData).eq("id", editing.id);
        if (error) throw error;

        // Update media
        if (imageUrl) {
          await supabase.from("product_media").upsert({
            product_id: editing.id,
            media_url: imageUrl,
            media_type: "image",
          }, { onConflict: "product_id,media_type" });
        }
      } else {
        const { data, error } = await supabase.from("products").insert(productData).select().single();
        if (error) throw error;

        if (imageUrl && data) {
          await supabase.from("product_media").insert({
            product_id: data.id,
            media_url: imageUrl,
            media_type: "image",
          });
        }
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-products"] });
      toast.success(editing ? "Product updated" : "Product added");
      resetForm();
    },
    onError: (err: any) => toast.error(err.message),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("products").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-products"] });
      toast.success("Product deleted");
    },
    onError: (err: any) => toast.error(err.message),
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading text-xl font-semibold text-foreground">Products</h2>
        <Button onClick={() => { resetForm(); setShowForm(true); }} className="bg-accent text-accent-foreground hover:bg-accent/90 font-body">
          <Plus className="w-4 h-4 mr-1" /> Add Product
        </Button>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-card border border-border rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-heading text-lg font-semibold text-foreground">{editing ? "Edit Product" : "New Product"}</h3>
            <button onClick={resetForm}><X className="w-5 h-5 text-muted-foreground" /></button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium font-body block mb-1">Name *</label>
              <Input value={name} onChange={(e) => setName(e.target.value)} className="font-body" />
            </div>
            <div>
              <label className="text-sm font-medium font-body block mb-1">Category *</label>
              <select
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-body"
              >
                <option value="">Select category</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium font-body block mb-1">Price (₹) *</label>
              <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="font-body" />
            </div>
            <div>
              <label className="text-sm font-medium font-body block mb-1">Image URL</label>
              <Input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="https://..." className="font-body" />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium font-body block mb-1">Description</label>
              <Textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} className="font-body" />
            </div>
            <div>
              <label className="text-sm font-medium font-body block mb-1">Width (mm)</label>
              <Input type="number" value={width} onChange={(e) => setWidth(e.target.value)} className="font-body" />
            </div>
            <div>
              <label className="text-sm font-medium font-body block mb-1">Height (mm)</label>
              <Input type="number" value={height} onChange={(e) => setHeight(e.target.value)} className="font-body" />
            </div>
            <div>
              <label className="text-sm font-medium font-body block mb-1">Depth (mm)</label>
              <Input type="number" value={depth} onChange={(e) => setDepth(e.target.value)} className="font-body" />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="ar" checked={arEnabled} onChange={(e) => setArEnabled(e.target.checked)} />
              <label htmlFor="ar" className="text-sm font-body">AR Enabled</label>
            </div>
          </div>
          <Button
            className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90 font-body"
            onClick={() => saveMutation.mutate()}
            disabled={saveMutation.isPending || !name || !price || !categoryId}
          >
            {saveMutation.isPending ? "Saving..." : editing ? "Update Product" : "Add Product"}
          </Button>
        </div>
      )}

      {/* Product List */}
      <div className="space-y-3">
        {isLoading ? (
          <p className="text-muted-foreground font-body">Loading products...</p>
        ) : products.length === 0 ? (
          <p className="text-muted-foreground font-body text-center py-8">No products yet. Add your first product above.</p>
        ) : (
          products.map((p: any) => (
            <div key={p.id} className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg">
              <img
                src={p.product_media?.[0]?.media_url || "/placeholder.svg"}
                alt={p.name}
                className="w-14 h-14 rounded object-cover bg-secondary flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-heading text-sm font-medium text-foreground line-clamp-1">{p.name}</h4>
                <p className="text-xs text-muted-foreground font-body">{p.category?.name} • ₹{p.price.toLocaleString("en-IN")}</p>
              </div>
              <div className="flex gap-1">
                <button onClick={() => openEdit(p)} className="p-2 text-muted-foreground hover:text-foreground">
                  <Pencil className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    if (confirm("Delete this product?")) deleteMutation.mutate(p.id);
                  }}
                  className="p-2 text-muted-foreground hover:text-destructive"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
