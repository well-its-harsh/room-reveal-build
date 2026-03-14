import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="container py-10 md:py-16 max-w-3xl">
      <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 font-body">
        <ArrowLeft className="w-4 h-4" /> Home
      </Link>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="font-heading text-3xl font-semibold text-foreground mb-8">Privacy Policy</h1>
        <div className="prose prose-sm max-w-none font-body text-muted-foreground space-y-6">
          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">Information We Collect</h2>
            <p>We collect personal information you provide when creating an account, placing an order, or contacting us — including your name, phone number, email, and delivery address.</p>
          </section>
          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">How We Use Your Information</h2>
            <p>Your information is used to process orders, provide customer support, send order updates, and improve our services. We do not sell your data to third parties.</p>
          </section>
          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">Data Security</h2>
            <p>We use industry-standard security measures to protect your personal information. All data is encrypted in transit and at rest.</p>
          </section>
          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal data by contacting us at hello@bathhaus.com.</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
