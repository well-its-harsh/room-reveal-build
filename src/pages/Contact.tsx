import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState, lazy, Suspense } from "react";

const MapLocation = lazy(() => import("@/components/MapLocation"));

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      toast.error("Please fill in your name and phone number");
      return;
    }
    toast.success("Enquiry sent! We'll get back to you shortly.");
    setName(""); setPhone(""); setMessage("");
  };

  return (
    <div className="container py-10 md:py-16">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-12">
        <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-2">Get in Touch</h1>
        <p className="text-muted-foreground font-body">We'd love to hear from you</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-6">
          {[
            { icon: MapPin, label: "Address", detail: "123 Main Street, City Center, State 400001" },
            { icon: Phone, label: "Phone", detail: "+91 00000 00000" },
            { icon: Mail, label: "Email", detail: "hello@bathhaus.com" },
            { icon: Clock, label: "Hours", detail: "Mon–Sat 9AM–8PM, Sun 10AM–6PM" },
          ].map(({ icon: Icon, label, detail }) => (
            <div key={label} className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-accent" />
              </div>
              <div>
                <h3 className="font-heading text-sm font-semibold text-foreground">{label}</h3>
                <p className="text-sm text-muted-foreground font-body">{detail}</p>
              </div>
            </div>
          ))}

          {/* Map */}
          <Suspense fallback={<div className="aspect-video rounded-lg bg-secondary animate-pulse" />}>
            <MapLocation className="aspect-video" />
          </Suspense>
        </div>

        {/* Enquiry Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div>
            <label className="text-sm font-medium text-foreground font-body block mb-1.5">Name *</label>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="font-body" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground font-body block mb-1.5">Phone *</label>
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 00000 00000" className="font-body" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground font-body block mb-1.5">Message</label>
            <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us what you're looking for..." rows={4} className="font-body" />
          </div>
          <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-body font-medium">
            Send Enquiry
          </Button>
        </motion.form>
      </div>
    </div>
  );
}
