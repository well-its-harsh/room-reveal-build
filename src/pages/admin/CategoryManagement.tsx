import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Plus, Edit2, Trash2, Check, X } from "lucide-react";
import { toast } from "sonner";

export default function CategoryManagement() {
  const [areas, setAreas] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [subcategories, setSubcategories] = useState<any[]>([]);

  const [selectedAreaId, setSelectedAreaId] = useState<string | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  const [addingType, setAddingType] = useState<"area" | "category" | "subcategory" | null>(null);
  const [newName, setNewName] = useState("");
  const [newSlug, setNewSlug] = useState("");

  useEffect(() => {
    fetchAreas();
  }, []);

  useEffect(() => {
    if (selectedAreaId) fetchCategories(selectedAreaId);
    else setCategories([]);
    setSelectedCategoryId(null);
  }, [selectedAreaId]);

  useEffect(() => {
    if (selectedCategoryId) fetchSubcategories(selectedCategoryId);
    else setSubcategories([]);
  }, [selectedCategoryId]);

  const fetchAreas = async () => {
    const { data } = await supabase.from("areas").select("*").order("sort_order", { ascending: true });
    if (data) setAreas(data);
  };

  const fetchCategories = async (areaId: string) => {
    const { data } = await supabase.from("categories").select("*").eq("area_id", areaId).order("sort_order", { ascending: true });
    if (data) setCategories(data);
  };

  const fetchSubcategories = async (catId: string) => {
    const { data } = await supabase.from("subcategories").select("*").eq("category_id", catId).order("sort_order", { ascending: true });
    if (data) setSubcategories(data);
  };

  const generateSlug = (name: string) => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
    setNewSlug(generateSlug(e.target.value));
  };

  const openAdd = (type: "area" | "category" | "subcategory") => {
    setAddingType(type);
    setNewName("");
    setNewSlug("");
  };

  const saveItem = async () => {
    if (!newName || !newSlug) return toast.error("Name and slug required");
    
    if (addingType === "area") {
      const { error } = await supabase.from("areas").insert({ name: newName, slug: newSlug });
      if (!error) { toast.success("Area added"); fetchAreas(); } else toast.error("Failed to add");
    } 
    else if (addingType === "category" && selectedAreaId) {
      const { error } = await supabase.from("categories").insert({ name: newName, slug: newSlug, area_id: selectedAreaId });
      if (!error) { toast.success("Category added"); fetchCategories(selectedAreaId); } else toast.error("Failed to add");
    }
    else if (addingType === "subcategory" && selectedCategoryId) {
      const { error } = await supabase.from("subcategories").insert({ name: newName, slug: newSlug, category_id: selectedCategoryId });
      if (!error) { toast.success("Subcategory added"); fetchSubcategories(selectedCategoryId); } else toast.error("Failed to add");
    }
    setAddingType(null);
  };

  const toggleActive = async (table: string, id: string, val: boolean) => {
    await supabase.from(table).update({ is_active: val }).eq("id", id);
    if (table === "areas") fetchAreas();
    if (table === "categories" && selectedAreaId) fetchCategories(selectedAreaId);
    if (table === "subcategories" && selectedCategoryId) fetchSubcategories(selectedCategoryId);
    toast.success("Status updated");
  };

  const deleteItem = async (table: string, id: string) => {
    if (!confirm("Are you sure? Resolving products will automatically be unlinked from this entity.")) return;
    const { error } = await supabase.from(table).delete().eq("id", id);
    if (!error) {
      toast.success("Deleted successfully");
      if (table === "areas") { fetchAreas(); if (selectedAreaId === id) setSelectedAreaId(null); }
      if (table === "categories" && selectedAreaId) { fetchCategories(selectedAreaId); if (selectedCategoryId === id) setSelectedCategoryId(null); }
      if (table === "subcategories" && selectedCategoryId) fetchSubcategories(selectedCategoryId);
    } else {
      toast.error("Delete failed");
    }
  };

  const renderAddForm = (type: string) => {
    if (addingType !== type) return null;
    return (
      <div className="bg-[#F7F5F2] border border-[#E8E4DF] rounded-lg p-4 mt-4 mb-4">
        <h4 className="text-sm font-bold mb-3 uppercase tracking-wider text-[#C8860A]">Add {type}</h4>
        <div className="space-y-3 text-sm">
          <div>
            <label className="block text-xs font-semibold mb-1">Name</label>
            <input type="text" value={newName} onChange={handleNameChange} className="w-full px-3 py-2 border rounded" placeholder="E.g. Wall Tiles" />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1">Slug</label>
            <input type="text" value={newSlug} onChange={e => setNewSlug(e.target.value)} className="w-full px-3 py-2 border rounded bg-gray-50" />
          </div>
          <div className="flex gap-2 pt-2">
            <button onClick={saveItem} className="px-4 py-2 bg-[#1A1A1A] text-white rounded text-xs font-bold uppercase tracking-wider">Save</button>
            <button onClick={() => setAddingType(null)} className="px-4 py-2 border rounded text-xs font-bold uppercase tracking-wider">Cancel</button>
          </div>
        </div>
      </div>
    );
  };

  const ItemRow = ({ item, table, isActive, onClick }: { item: any; table: string; isActive?: boolean; onClick?: () => void }) => (
    <div 
      onClick={onClick}
      className={`flex items-center justify-between p-3 border-b border-[#E8E4DF] cursor-pointer transition-colors ${isActive ? "bg-[#C8860A]/10 border-l-4 border-l-[#C8860A]" : "hover:bg-gray-50"}`}
    >
      <div className="font-semibold text-sm flex-1">{item.name}</div>
      <div className="flex items-center gap-3">
        <label className="flex items-center" onClick={e => e.stopPropagation()}>
          <input type="checkbox" checked={item.is_active} onChange={e => toggleActive(table, item.id, e.target.checked)} className="w-4 h-4 accent-[#C8860A]" />
        </label>
        <button onClick={(e) => { e.stopPropagation(); deleteItem(table, item.id); }} className="text-red-500 hover:text-red-700">
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)]">
      <div className="mb-6">
        <h1 className="text-3xl font-serif font-bold text-[#1A1A1A]">Category Management</h1>
        <p className="text-[#6B6B6B] mt-2 text-sm max-w-2xl">
          Manage product hierarchy: Areas → Categories → Subcategories.
        </p>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
        {/* Panel 1: Areas */}
        <div className="bg-white rounded-xl border border-[#E8E4DF] shadow-sm flex flex-col h-full overflow-hidden">
          <div className="p-4 border-b border-[#E8E4DF] bg-gray-50 flex justify-between items-center">
            <h3 className="font-bold text-gray-800">Areas</h3>
            <button onClick={() => openAdd("area")} className="text-xs flex items-center gap-1 font-bold bg-[#C8860A] text-white px-2 py-1 rounded">
              <Plus className="w-3 h-3" /> Add
            </button>
          </div>
          <div className="p-4 flex-1 overflow-y-auto">
            {renderAddForm("area")}
            {areas.length === 0 && <div className="text-sm text-gray-400 p-4 text-center">No areas found.</div>}
            {areas.map(a => (
              <ItemRow key={a.id} item={a} table="areas" isActive={selectedAreaId === a.id} onClick={() => setSelectedAreaId(a.id)} />
            ))}
          </div>
        </div>

        {/* Panel 2: Categories */}
        <div className="bg-white rounded-xl border border-[#E8E4DF] shadow-sm flex flex-col h-full overflow-hidden">
          <div className="p-4 border-b border-[#E8E4DF] bg-gray-50 flex justify-between items-center">
            <h3 className="font-bold text-gray-800">Categories</h3>
            <button 
              onClick={() => openAdd("category")} 
              disabled={!selectedAreaId}
              className={`text-xs flex items-center gap-1 font-bold px-2 py-1 rounded ${selectedAreaId ? "bg-[#C8860A] text-white" : "bg-gray-200 text-gray-500 cursor-not-allowed"}`}
            >
              <Plus className="w-3 h-3" /> Add
            </button>
          </div>
          <div className="p-4 flex-1 overflow-y-auto">
             {!selectedAreaId ? (
                <div className="text-sm text-gray-400 h-full flex items-center justify-center">Select an Area first</div>
             ) : (
                <>
                  {renderAddForm("category")}
                  {categories.length === 0 && <div className="text-sm text-gray-400 p-4 text-center">No categories for this area.</div>}
                  {categories.map(c => (
                    <ItemRow key={c.id} item={c} table="categories" isActive={selectedCategoryId === c.id} onClick={() => setSelectedCategoryId(c.id)} />
                  ))}
                </>
             )}
          </div>
        </div>

        {/* Panel 3: Subcategories */}
        <div className="bg-white rounded-xl border border-[#E8E4DF] shadow-sm flex flex-col h-full overflow-hidden">
          <div className="p-4 border-b border-[#E8E4DF] bg-gray-50 flex justify-between items-center">
            <h3 className="font-bold text-gray-800">Subcategories</h3>
            <button 
              onClick={() => openAdd("subcategory")} 
              disabled={!selectedCategoryId}
              className={`text-xs flex items-center gap-1 font-bold px-2 py-1 rounded ${selectedCategoryId ? "bg-[#C8860A] text-white" : "bg-gray-200 text-gray-500 cursor-not-allowed"}`}
            >
              <Plus className="w-3 h-3" /> Add
            </button>
          </div>
          <div className="p-4 flex-1 overflow-y-auto">
             {!selectedCategoryId ? (
                <div className="text-sm text-gray-400 h-full flex items-center justify-center">Select a Category first</div>
             ) : (
                <>
                  {renderAddForm("subcategory")}
                  {subcategories.length === 0 && <div className="text-sm text-gray-400 p-4 text-center">No subcategories.</div>}
                  {subcategories.map(s => (
                    <ItemRow key={s.id} item={s} table="subcategories" />
                  ))}
                </>
             )}
          </div>
        </div>
      </div>
    </div>
  );
}
