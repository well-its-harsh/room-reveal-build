import { Image, Type, Star, Users, Settings } from "lucide-react";

const contentSections = [
  { label: "Hero Banner", desc: "Landing page hero image and tagline", icon: Image, status: "Active" },
  { label: "Featured Categories", desc: "Categories shown on homepage", icon: Type, status: "6 categories" },
  { label: "Featured Products", desc: "Best sellers and new arrivals", icon: Star, status: "Auto-generated" },
  { label: "Trusted Partners", desc: "Brand logos (Jaquar, Cera, etc.)", icon: Users, status: "5 brands" },
  { label: "Testimonials", desc: "Customer reviews on homepage", icon: Star, status: "3 reviews" },
];

export default function ContentManagement() {
  return (
    <div>
      <h2 className="font-heading text-xl font-semibold text-foreground mb-6">Content Management</h2>

      <div className="space-y-3 mb-8">
        {contentSections.map(({ label, desc, icon: Icon, status }) => (
          <div key={label} className="flex items-center justify-between p-4 bg-card border border-border rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <Icon className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <p className="font-heading text-sm font-semibold text-foreground">{label}</p>
                <p className="text-xs text-muted-foreground font-body">{desc}</p>
              </div>
            </div>
            <span className="text-xs font-medium text-muted-foreground font-body bg-secondary px-2 py-1 rounded">{status}</span>
          </div>
        ))}
      </div>

      <div className="bg-secondary rounded-xl p-6 text-center">
        <Settings className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
        <p className="font-heading text-sm font-semibold text-foreground mb-1">Coming Soon</p>
        <p className="text-xs text-muted-foreground font-body max-w-sm mx-auto">
          Full content management with drag-and-drop section editing, banner uploads, and testimonial management will be available in the next update.
        </p>
      </div>
    </div>
  );
}
