import { useState } from "react";
import { MapPin, Plus, Pencil, Trash2, X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAddresses } from "@/hooks/useAddresses";
import { toast } from "sonner";

interface AddressFormData {
  full_address: string;
  city: string;
  state: string;
  pincode: string;
}

const emptyForm: AddressFormData = { full_address: "", city: "", state: "", pincode: "" };

export default function AddressesPage() {
  const { addresses, isLoading, addAddress, deleteAddress } = useAddresses();
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<AddressFormData>(emptyForm);

  const openAdd = () => {
    setEditingId(null);
    setForm(emptyForm);
    setShowForm(true);
  };

  const openEdit = (addr: any) => {
    setEditingId(addr.id);
    setForm({
      full_address: addr.full_address || "",
      city: addr.city || "",
      state: addr.state || "",
      pincode: addr.pincode || "",
    });
    setShowForm(true);
  };

  const handleSubmit = async () => {
    if (!form.full_address.trim() || !form.city.trim() || !form.pincode.trim()) {
      toast.error("Please fill in address, city, and pincode");
      return;
    }
    try {
      if (editingId) {
        // For edit, delete old and re-insert (simpler without update mutation)
        await deleteAddress.mutateAsync(editingId);
      }
      await addAddress.mutateAsync(form);
      toast.success(editingId ? "Address updated" : "Address added");
      setShowForm(false);
      setForm(emptyForm);
      setEditingId(null);
    } catch (err: any) {
      toast.error(err.message || "Failed to save address");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this address?")) return;
    try {
      await deleteAddress.mutateAsync(id);
      toast.success("Address deleted");
    } catch (err: any) {
      toast.error(err.message || "Failed to delete");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading text-xl font-semibold text-foreground">Saved Addresses</h2>
        <Button onClick={openAdd} variant="outline" size="sm" className="font-body">
          <Plus className="w-4 h-4 mr-1.5" /> Add Address
        </Button>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-card border border-border rounded-xl p-5 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-heading text-base font-semibold text-foreground">
              {editingId ? "Edit Address" : "New Address"}
            </h3>
            <button onClick={() => setShowForm(false)}><X className="w-5 h-5 text-muted-foreground" /></button>
          </div>
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium font-body block mb-1">Address *</label>
              <Input
                value={form.full_address}
                onChange={(e) => setForm({ ...form, full_address: e.target.value })}
                placeholder="House/flat, street, landmark"
                className="font-body"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="text-sm font-medium font-body block mb-1">City *</label>
                <Input
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className="font-body"
                />
              </div>
              <div>
                <label className="text-sm font-medium font-body block mb-1">State</label>
                <Input
                  value={form.state}
                  onChange={(e) => setForm({ ...form, state: e.target.value })}
                  className="font-body"
                />
              </div>
              <div>
                <label className="text-sm font-medium font-body block mb-1">Pincode *</label>
                <Input
                  value={form.pincode}
                  onChange={(e) => setForm({ ...form, pincode: e.target.value })}
                  className="font-body"
                />
              </div>
            </div>
            <Button
              onClick={handleSubmit}
              disabled={addAddress.isPending}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-body"
            >
              {addAddress.isPending ? "Saving..." : editingId ? "Update" : "Save Address"}
            </Button>
          </div>
        </div>
      )}

      {/* Address List */}
      {isLoading ? (
        <p className="text-muted-foreground font-body">Loading...</p>
      ) : addresses.length === 0 ? (
        <div className="text-center py-12">
          <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="font-heading text-lg font-semibold text-foreground mb-2">No Addresses Saved</h3>
          <p className="text-sm text-muted-foreground font-body max-w-sm mx-auto">
            Your saved delivery addresses will appear here.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {addresses.map((addr: any) => (
            <div key={addr.id} className="flex items-start justify-between p-4 bg-card border border-border rounded-xl">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-body text-foreground">{addr.full_address}</p>
                  <p className="text-xs text-muted-foreground font-body mt-0.5">
                    {addr.city}{addr.state ? `, ${addr.state}` : ""} – {addr.pincode}
                  </p>
                </div>
              </div>
              <div className="flex gap-1 flex-shrink-0">
                <button onClick={() => openEdit(addr)} className="p-1.5 text-muted-foreground hover:text-foreground">
                  <Pencil className="w-4 h-4" />
                </button>
                <button onClick={() => handleDelete(addr.id)} className="p-1.5 text-muted-foreground hover:text-destructive">
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
