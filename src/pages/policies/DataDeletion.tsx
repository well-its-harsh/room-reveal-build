import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Send, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

export default function DataDeletion() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return toast.error("Please fill in name and email");

    setLoading(true);
    try {
      const { error } = await supabase.from("enquiries").insert({
        name,
        email,
        message: message || "Data deletion request",
        channel: "data-deletion-request",
        status: "pending"
      });

      if (error) throw error;
      
      setSubmitted(true);
      toast.success("Request received");
    } catch (err: any) {
      toast.error(err.message || "Failed to send request");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-10 md:py-16 max-w-2xl">
      <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 font-body">
        <ArrowLeft className="w-4 h-4" /> Home
      </Link>
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-[#E8E4DF]"
      >
        <h1 className="font-heading text-3xl font-semibold text-foreground mb-4">Request Data Deletion</h1>
        <p className="text-sm text-muted-foreground mb-10 font-body">In accordance with your privacy rights, you can request the permanent removal of your data from our systems.</p>

        {submitted ? (
          <div className="text-center py-10">
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">Request Received</h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              Your data deletion request has been received. We will process it within 30 days and confirm via email once completed.
            </p>
            <Button asChild className="mt-8 bg-[#1A1A1A] text-white">
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest block mb-2 font-body">Full Name</label>
              <Input 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Rajesh Kumar"
                className="h-12 border-[#E8E4DF] focus:border-accent font-body"
                required
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest block mb-2 font-body">Email Address</label>
              <Input 
                type="email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                placeholder="rajesh@example.com"
                className="h-12 border-[#E8E4DF] focus:border-accent font-body"
                required
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest block mb-2 font-body">Additional Details (Optional)</label>
              <Textarea 
                value={message} 
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Mention if you want specific enquiries deleted or your entire account."
                className="min-h-[120px] border-[#E8E4DF] focus:border-accent font-body"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-12 bg-[#1A1A1A] text-white hover:bg-accent font-body font-semibold transition-all"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit Deletion Request"}
              {!loading && <Send className="w-4 h-4 ml-2" />}
            </Button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
