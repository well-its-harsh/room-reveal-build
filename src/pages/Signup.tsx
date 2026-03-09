import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !email.trim() || !password.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    setLoading(true);
    const { error } = await signUp(email, password, fullName, phone);
    setLoading(false);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Account created! Please check your email to verify.");
      navigate("/login");
    }
  };

  return (
    <div className="container py-16 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <h1 className="font-heading text-3xl font-semibold text-foreground mb-2">Create Account</h1>
          <p className="text-muted-foreground font-body">Join BathHaus today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground font-body block mb-1.5">Full Name *</label>
            <Input value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Your full name" className="font-body" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground font-body block mb-1.5">Phone *</label>
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 00000 00000" className="font-body" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground font-body block mb-1.5">Email *</label>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="font-body" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground font-body block mb-1.5">Password *</label>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Min 6 characters" className="font-body" />
          </div>
          <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-body font-medium" disabled={loading}>
            {loading ? "Creating account..." : "Sign Up"}
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground font-body mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-accent hover:underline font-medium">Sign in</Link>
        </p>
      </motion.div>
    </div>
  );
}
