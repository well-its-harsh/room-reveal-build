import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { Category } from "@/types/database";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Pencil, Trash2, X, FolderOpen } from "lucide-react";
import { toast } from "sonner";

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function CategoryManagement() {
  const queryClient = useQueryClient();
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [name, setName] = useState("");

  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data, error } = await supabase.from("categories").select("*").order("name");
      if (error) throw error;
      return data as Category[];
    },
  });

  // Count products per category
  const { data: productCounts = {} } = useQuery({
    queryKey: ["category-product-counts"],
    queryFn: async () => {
      const { data, error } = await supabase.from("products").select("category_id");
      if (error) return {};
      const counts: Record<string, number> = {};
      data.forEach((p: any) => { counts[p.category_id] = (counts[p.category_id] || 0) + 1; });
      return counts;
    },
  });

  const saveMutation = useMutation({
    mutationFn: async () => {
      const slug = slugify(name);
      if (editingId) {
        const { error } = await supabase.from("categories").update({ name, slug }).eq("id", editingId);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("categories").insert({ name, slug });
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      toast.success(editingId ? "Category updated" : "Category added");
      setShowForm(false);
      setName("");
      setEditingId(null);
    },
    onError: (err: any) => toast.error(err.message),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("categories").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      toast.success("Category deleted");
    },
    onError: (err: any) => toast.error(err.message),
  });

  const openEdit = (cat: Category) => {
    setEditingId(cat.id);
    setName(cat.name);
    setShowForm(true);
  };

  const handleDelete = (cat: Category) => {
    const count = productCounts[cat.id] || 0;
    const msg = count > 0
      ? `"${cat.name}" has ${count} product(s). Delete anyway?`
      : `Delete category "${cat.name}"?`;
    if (confirm(msg)) deleteMutation.mutate(cat.id);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading text-xl font-semibold text-foreground">Categories</h2>
        <Button onClick={() => { setEditingId(null); setName(""); setShowForm(true); }} className="bg-accent text-accent-foreground hover:bg-accent/90 font-body">
          <Plus className="w-4 h-4 mr-1" /> Add Category
        </Button>
      </div>

      {showForm && (
        <div className="bg-card border border-border rounded-lg p-5 mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-heading text-base font-semibold text-foreground">{editingId ? "Edit" : "New"} Category</h3>
            <button onClick={() => setShowForm(false)}><X className="w-5 h-5 text-muted-foreground" /></button>
          </div>
          <div className="flex gap-3">
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Category name" className="font-body flex-1" />
            <Button
              onClick={() => saveMutation.mutate()}
              disabled={saveMutation.isPending || !name.trim()}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-body"
            >
              {saveMutation.isPending ? "Saving..." : "Save"}
            </Button>
          </div>
          {name && (
            <p className="text-xs text-muted-foreground font-body mt-2">Slug: {slugify(name)}</p>
          )}
        </div>
      )}

      {isLoading ? (
        <p className="text-muted-foreground font-body">Loading...</p>
      ) : categories.length === 0 ? (
        <div className="text-center py-12">
          <FolderOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground font-body">No categories yet.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {categories.map((cat) => (
            <div key={cat.id} className="flex items-center justify-between p-4 bg-card border border-border rounded-lg">
              <div>
                <p className="font-heading text-sm font-semibold text-foreground">{cat.name}</p>
                <p className="text-xs text-muted-foreground font-body">
                  /{cat.slug} • {productCounts[cat.id] || 0} product{(productCounts[cat.id] || 0) !== 1 ? "s" : ""}
                </p>
              </div>
              <div className="flex gap-1">
                <button onClick={() => openEdit(cat)} className="p-2 text-muted-foreground hover:text-foreground">
                  <Pencil className="w-4 h-4" />
                </button>
                <button onClick={() => handleDelete(cat)} className="p-2 text-muted-foreground hover:text-destructive">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
