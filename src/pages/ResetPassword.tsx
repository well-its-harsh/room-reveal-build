import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      const params = new URLSearchParams(window.location.search);
      const tokenHash = params.get('token_hash');
      const type = params.get('type');

      if (!tokenHash || type !== 'recovery') {
        setVerifying(false);
        setError("Invalid or expired reset link. Please request a new one.");
        return;
      }

      try {
        const { error } = await supabase.auth.verifyOtp({
          token_hash: tokenHash,
          type: 'recovery'
        });

        if (error) {
          setError("This reset link has expired. Please request a new one.");
        }
      } catch (err) {
        setError("An error occurred during verification. Please try again.");
      } finally {
        setVerifying(false);
      }
    };

    verifyToken();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });
    setLoading(false);
    
    if (error) {
      toast.error(error.message);
    } else {
      setSuccess(true);
      toast.success("Password updated successfully.");
      setTimeout(() => navigate("/login"), 2000);
    }
  };

  if (verifying) {
    return (
      <div className="container py-16 flex justify-center items-center h-[50vh]">
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
        <p className="ml-3 text-muted-foreground font-body">Verifying reset token...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-16 flex justify-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md text-center">
          <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-8 rounded-2xl mb-6">
            <p className="font-body mb-6">{error}</p>
            <Button asChild className="bg-[#000000] text-white hover:bg-[#C9A84C] transition-colors">
              <Link to="/forgot-password">Request New Link</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="container py-16 flex justify-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md text-center">
          <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
          <h1 className="font-heading text-2xl font-bold text-[#1B2B5E] mb-2">Password Updated</h1>
          <p className="text-muted-foreground font-body mb-6">Your password has been reset successfully. Redirecting to login...</p>
          <Button asChild className="bg-[#1B2B5E] text-white hover:bg-[#C9A84C]">
            <Link to="/login">Sign In Now</Link>
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container py-16 flex justify-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md space-y-8 bg-white p-8 rounded-3xl border border-[#E8E4DF] shadow-sm">
        <div>
          <h1 className="font-serif text-3xl font-bold text-[#1B2B5E] mb-2">Reset Password</h1>
          <p className="text-[#6B6B6B] font-body text-sm">Enter your new password below.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-[#999] block">New Password</label>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Min 6 characters" className="h-12 rounded-xl border-[#E8E4DF] focus:border-[#C9A84C] font-body" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-[#999] block">Confirm Password</label>
            <Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm password" className="h-12 rounded-xl border-[#E8E4DF] focus:border-[#C9A84C] font-body" />
          </div>
          <Button type="submit" className="w-full h-12 bg-[#1B2B5E] hover:bg-[#C9A84C] text-white rounded-xl font-bold uppercase tracking-widest text-[11px] transition-all shadow-lg" disabled={loading}>
            {loading ? "Updating..." : "Update Password"}
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
