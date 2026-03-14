import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Circle, Package, Truck, Home } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";

const trackingSteps = [
  { key: "pending", label: "Order Placed", icon: Circle },
  { key: "confirmed", label: "Confirmed", icon: CheckCircle },
  { key: "packed", label: "Packed", icon: Package },
  { key: "shipped", label: "Shipped", icon: Truck },
  { key: "delivered", label: "Delivered", icon: Home },
];

const statusIndex: Record<string, number> = {
  pending: 0,
  confirmed: 1,
  processing: 1,
  packed: 2,
  shipped: 3,
  "out for delivery": 3,
  delivered: 4,
  cancelled: -1,
};

export default function OrderDetail() {
  const { orderId } = useParams<{ orderId: string }>();
  const { user } = useAuth();

  const { data: order, isLoading } = useQuery({
    queryKey: ["order-detail", orderId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("orders")
        .select("*, order_items(*, product:products(name, price, product_media(*)))")
        .eq("id", orderId!)
        .single();
      if (error) throw error;
      return data;
    },
    enabled: !!orderId,
  });

  if (isLoading) return <div className="py-8 text-center text-muted-foreground font-body">Loading...</div>;
  if (!order) return <div className="py-8 text-center text-muted-foreground font-body">Order not found.</div>;

  const currentStep = statusIndex[order.status] ?? 0;
  const isCancelled = order.status === "cancelled";

  return (
    <div>
      <Link to="/account/orders" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 font-body">
        <ArrowLeft className="w-4 h-4" /> All Orders
      </Link>

      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="font-heading text-xl font-semibold text-foreground">Order #{order.id.slice(0, 8)}</h2>
          <p className="text-xs text-muted-foreground font-body">
            Placed {new Date(order.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
        <p className="font-heading text-xl font-bold text-accent">₹{order.total_amount?.toLocaleString("en-IN")}</p>
      </div>

      {/* Tracking Timeline */}
      {!isCancelled ? (
        <div className="bg-card border border-border rounded-lg p-6 mb-6">
          <h3 className="font-heading text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Track Package</h3>
          <div className="flex items-center justify-between relative">
            {/* Progress Line */}
            <div className="absolute top-4 left-0 right-0 h-0.5 bg-border" />
            <div
              className="absolute top-4 left-0 h-0.5 bg-accent transition-all duration-500"
              style={{ width: `${(currentStep / (trackingSteps.length - 1)) * 100}%` }}
            />
            {trackingSteps.map((step, i) => {
              const isComplete = i <= currentStep;
              const isCurrent = i === currentStep;
              return (
                <div key={step.key} className="relative flex flex-col items-center z-10">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    isComplete ? "bg-accent text-accent-foreground" : "bg-secondary text-muted-foreground"
                  } ${isCurrent ? "ring-2 ring-accent ring-offset-2 ring-offset-background" : ""}`}>
                    <step.icon className="w-4 h-4" />
                  </div>
                  <span className={`text-[10px] font-body mt-2 whitespace-nowrap ${isComplete ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-center">
          <p className="text-sm text-red-800 font-body font-medium">This order has been cancelled.</p>
        </div>
      )}

      {/* Items */}
      <div className="bg-card border border-border rounded-lg p-4">
        <h3 className="font-heading text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Items</h3>
        <div className="space-y-3">
          {order.order_items?.map((item: any) => {
            const img = item.product?.product_media?.find((m: any) => m.media_type === "image")?.media_url || "/placeholder.svg";
            return (
              <div key={item.id} className="flex gap-3">
                <img src={img} alt={item.product?.name} className="w-14 h-14 rounded object-cover bg-secondary flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground font-body line-clamp-1">{item.product?.name}</p>
                  <p className="text-xs text-muted-foreground font-body">Qty: {item.quantity}</p>
                </div>
                <p className="text-sm font-semibold text-foreground font-body">
                  ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
