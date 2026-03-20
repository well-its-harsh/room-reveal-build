import { MapPin, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AddressesPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading text-xl font-semibold text-foreground">Saved Addresses</h2>
        <Button variant="outline" size="sm" className="font-body" disabled>
          <Plus className="w-4 h-4 mr-1.5" /> Add Address
        </Button>
      </div>
      <div className="text-center py-12">
        <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="font-heading text-lg font-semibold text-foreground mb-2">No Addresses Saved</h3>
        <p className="text-sm text-muted-foreground font-body max-w-sm mx-auto">
          Your saved delivery addresses will appear here. Addresses can be added during checkout.
        </p>
      </div>
    </div>
  );
}
