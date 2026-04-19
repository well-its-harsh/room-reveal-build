import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import { 
  Warehouse, 
  AlertTriangle, 
  Save, 
  Search, 
  RefreshCw, 
  BarChart3, 
  PackageCheck, 
  PackageX,
  Image as ImageIcon,
  CheckCircle2,
  Package
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

interface InventoryItem {
  id: string;
  product_id: string;
  quantity: number;
  low_stock_threshold: number;
  sku: string | null;
  last_updated: string;
  product: {
    name: string;
    brand: string | null;
    sku: string | null;
    category: { name: string } | null;
    product_media: { media_url: string }[];
  };
}

export default function InventoryManagement() {
  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = useState("");

  const { data: inventory = [], isLoading, isRefetching, error } = useQuery({
    queryKey: ["admin-inventory"],
    queryFn: async () => {
      console.log("[InventoryDebug] Initiating product fetch...");
      // 1. Fetch products and their current inventory
      const { data: products, error: pError } = await supabase
        .from("products")
        .select(`
          id, name, brand, sku,
          category:categories(name),
          product_media(media_url),
          inventory(*)
        `);
      
      if (pError) {
        console.error("[InventoryDebug] Products fetch error:", pError);
        throw pError;
      }

      console.log("[InventoryDebug] Products found:", products?.length);

      // 2. Identify products without inventory rows
      const missingInventory = products.filter(p => !p.inventory || p.inventory.length === 0);
      console.log("[InventoryDebug] Products missing inventory:", missingInventory.length);
      
      if (missingInventory.length > 0) {
        const newRows = missingInventory.map(p => ({
          product_id: p.id,
          quantity: 0,
          low_stock_threshold: 10,
          sku: p.sku || null,
          last_updated: new Date().toISOString()
        }));

        const { error: iError } = await supabase.from("inventory").insert(newRows);
        if (iError) {
          console.error("[InventoryDebug] Error auto-inserting inventory:", iError);
          // Don't throw here, try to fetch whatever exists
        }
        
        // Re-fetch to get complete data
        const { data: updatedInventory, error: uError } = await supabase
          .from("inventory")
          .select(`
            *,
            product:products(
              name, brand, sku,
              category:categories(name),
              product_media(*)
            )
          `)
          .order("last_updated", { ascending: false });
        if (uError) {
          console.error("[InventoryDebug] Re-fetch error:", uError);
          throw uError;
        }
        return updatedInventory as InventoryItem[];
      }

      // 3. Just fetch existing if nothing missing
      const { data: existingInventory, error: eError } = await supabase
        .from("inventory")
        .select(`
          *,
          product:products(
            name, brand, sku,
            category:categories(name),
            product_media(media_url)
          )
        `)
        .order("last_updated", { ascending: false });
      if (eError) {
        console.error("[InventoryDebug] Final fetch error:", eError);
        throw eError;
      }
      return existingInventory as InventoryItem[];
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, quantity, low_stock_threshold, sku }: { id: string; quantity: number; low_stock_threshold: number; sku: string | null }) => {
      const { error } = await supabase
        .from("inventory")
        .update({ 
          quantity, 
          low_stock_threshold, 
          sku,
          last_updated: new Date().toISOString() 
        })
        .eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-inventory"] });
      toast.success("Inventory updated");
    },
    onError: (err: any) => toast.error(err.message),
  });

  const filteredInventory = inventory.filter((item: any) => 
    item.product?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.sku?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.product?.sku?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = {
    totalProducts: inventory.length,
    totalInStock: inventory.reduce((acc, i) => acc + (i.quantity > i.low_stock_threshold ? 1 : 0), 0),
    lowStock: inventory.reduce((acc, i) => acc + (i.quantity > 0 && i.quantity <= i.low_stock_threshold ? 1 : 0), 0),
    outOfStock: inventory.reduce((acc, i) => acc + (i.quantity === 0 ? 1 : 0), 0),
  };

  return (
    <div className="space-y-6 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="font-heading text-2xl font-bold text-foreground tracking-tight">Inventory Management</h2>
          <p className="text-sm text-muted-foreground font-body">Manage stock levels, SKUs, and replenishment thresholds.</p>
        </div>
        <Button variant="outline" size="sm" onClick={() => queryClient.invalidateQueries({ queryKey: ["admin-inventory"] })} className="h-9 gap-2">
          <RefreshCw className={cn("w-4 h-4", isRefetching && "animate-spin")} /> Re-sync
        </Button>
      </div>

      {/* Summary Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Products", value: stats.totalProducts, icon: Package, color: "text-blue-600", bg: "bg-blue-50" },
          { label: "In Stock", value: stats.totalInStock, icon: PackageCheck, color: "text-green-600", bg: "bg-green-50" },
          { label: "Low Stock", value: stats.lowStock, icon: AlertTriangle, color: "text-orange-600", bg: "bg-orange-50" },
          { label: "Out of Stock", value: stats.outOfStock, icon: PackageX, color: "text-red-600", bg: "bg-red-50" },
        ].map((s) => (
          <div key={s.label} className="bg-card border border-border p-4 rounded-xl shadow-sm flex items-center gap-3">
            <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center shrink-0", s.bg)}>
              <s.icon className={cn("w-5 h-5", s.color)} />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">{s.value}</p>
              <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Toolbar */}
      <div className="flex items-center bg-card border border-border p-2 rounded-xl shadow-sm">
        <Search className="w-5 h-5 text-muted-foreground ml-3 shrink-0" />
        <Input 
          className="border-none bg-transparent shadow-none focus-visible:ring-0 font-body h-10 w-full" 
          placeholder="Filter by Product Name, Brand or SKU..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {error ? (
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
          <AlertTriangle className="w-8 h-8 text-red-500 mx-auto mb-3" />
          <p className="font-heading font-bold text-red-800">Database Connection Error</p>
          <p className="text-xs text-red-600 font-body mt-1">{(error as any)?.message || "Failed to establish synchronization with the inventory matrix."}</p>
          <p className="text-[10px] text-red-500 font-body mt-4 uppercase tracking-widest font-bold">Hint: Check RLS policies or Join relationship name</p>
        </div>
      ) : isLoading ? (
         <div className="bg-card border border-border rounded-xl p-12 text-center">
            <RefreshCw className="w-8 h-8 text-accent animate-spin mx-auto mb-4" />
            <p className="font-body text-muted-foreground">Synchronizing product inventory...</p>
         </div>
      ) : (
        <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="w-[100px]">Product</TableHead>
                <TableHead>Details</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>Stock Level</TableHead>
                <TableHead>Threshold</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInventory.map((item) => (
                <InventoryTableRow 
                  key={item.id} 
                  item={item} 
                  onSave={(updates) => updateMutation.mutate({ id: item.id, ...updates })}
                />
              ))}
              {filteredInventory.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="h-32 text-center text-muted-foreground font-body">
                    No matching inventory found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}

function InventoryTableRow({ item, onSave }: { item: InventoryItem; onSave: (u: any) => void }) {
  const [sku, setSku] = useState(item.sku || "");
  const [qty, setQty] = useState(String(item.quantity));
  const [threshold, setThreshold] = useState(String(item.low_stock_threshold));
  
  const isOutOfStock = item.quantity === 0;
  const isLowStock = item.quantity > 0 && item.quantity <= item.low_stock_threshold;

  const thumbnail = item.product?.product_media?.[0]?.media_url || "/placeholder.svg";

  return (
    <TableRow className={cn(
      "transition-colors group",
      isOutOfStock ? "bg-red-50/30 hover:bg-red-50/50" : 
      isLowStock ? "bg-orange-50/30 hover:bg-orange-50/50" : "hover:bg-muted/50"
    )}>
      <TableCell>
        <div className="w-14 h-14 rounded-lg bg-secondary border border-border overflow-hidden shrink-0">
          <img src={thumbnail} className="w-full h-full object-cover" alt={item.product?.name} />
        </div>
      </TableCell>
      <TableCell className="max-w-[200px]">
        <div className="space-y-0.5">
          <p className="font-heading font-bold text-foreground text-sm line-clamp-1">{item.product?.name}</p>
          <div className="flex flex-wrap gap-2">
            <span className="text-[10px] text-muted-foreground font-body flex items-center gap-1">
              {item.product?.category?.name || "No Category"}
            </span>
            {item.product?.brand && (
              <span className="text-[10px] font-bold text-accent font-body italic underline decoration-accent/20">
                {item.product.brand}
              </span>
            )}
          </div>
        </div>
      </TableCell>
      <TableCell>
        <Input 
          value={sku} 
          onChange={e => setSku(e.target.value)}
          placeholder="Set SKU..."
          className="h-8 text-xs font-body max-w-[120px] bg-background" 
        />
      </TableCell>
      <TableCell>
        <div className="flex flex-col gap-1.5">
          <Input 
            type="number"
            value={qty} 
            onChange={e => setQty(e.target.value)}
            className={cn(
              "h-8 text-xs font-bold font-body max-w-[80px] bg-background text-center",
              isOutOfStock ? "border-red-500 text-red-600 focus-visible:ring-red-200" :
              isLowStock ? "border-orange-400 text-orange-600 focus-visible:ring-orange-200" : ""
            )} 
          />
          <div className="flex items-center gap-1.5">
            {isOutOfStock ? (
              <span className="flex items-center gap-1 text-[9px] font-bold text-red-600 uppercase tracking-widest">
                <PackageX className="w-2.5 h-2.5" /> Empty
              </span>
            ) : isLowStock ? (
              <span className="flex items-center gap-1 text-[9px] font-bold text-orange-600 uppercase tracking-widest">
                <AlertTriangle className="w-2.5 h-2.5" /> Low
              </span>
            ) : (
              <span className="flex items-center gap-1 text-[9px] font-bold text-green-600 uppercase tracking-widest">
                <CheckCircle2 className="w-2.5 h-2.5" /> Stable
              </span>
            )}
          </div>
        </div>
      </TableCell>
      <TableCell>
        <Input 
          type="number"
          value={threshold} 
          onChange={e => setThreshold(e.target.value)}
          className="h-8 text-xs font-body max-w-[60px] bg-background text-center" 
        />
      </TableCell>
      <TableCell className="text-right">
        <Button 
          size="sm" 
          variant={
            (parseInt(qty) !== item.quantity || 
             parseInt(threshold) !== item.low_stock_threshold || 
             sku !== item.sku) ? "default" : "ghost"
          }
          className="h-8 font-bold text-xs"
          disabled={
            parseInt(qty) === item.quantity && 
            parseInt(threshold) === item.low_stock_threshold && 
            sku === item.sku
          }
          onClick={() => onSave({ 
            quantity: parseInt(qty) || 0, 
            low_stock_threshold: parseInt(threshold) || 0, 
            sku: sku || null 
          })}
        >
          <Save className="w-3.5 h-3.5 mr-2" /> Save
        </Button>
      </TableCell>
    </TableRow>
  );
}
