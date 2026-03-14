import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    setLoading(false);
    if (error) {
      toast.error(error.message);
    } else {
      setSent(true);
    }
  };

  if (sent) {
    return (
      <div className="container py-16 flex justify-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md text-center">
          <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
          <h1 className="font-heading text-2xl font-semibold text-foreground mb-2">Check Your Email</h1>
          <p className="text-muted-foreground font-body mb-6">
            We've sent a password reset link to <strong className="text-foreground">{email}</strong>
          </p>
          <Link to="/login" className="text-sm text-accent font-body hover:underline">Back to Sign In</Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container py-16 flex justify-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
        <Link to="/login" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 font-body">
          <ArrowLeft className="w-4 h-4" /> Back to Sign In
        </Link>
        <div className="mb-8">
          <h1 className="font-heading text-3xl font-semibold text-foreground mb-2">Forgot Password</h1>
          <p className="text-muted-foreground font-body">Enter your email and we'll send you a reset link.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground font-body block mb-1.5">Email</label>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="font-body" />
          </div>
          <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-body font-medium" disabled={loading}>
            {loading ? "Sending..." : "Send Reset Link"}
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
