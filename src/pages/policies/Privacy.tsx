import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  const today = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="container py-10 md:py-16 max-w-4xl">
      <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 font-body">
        <ArrowLeft className="w-4 h-4" /> Home
      </Link>
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-[#E8E4DF]"
      >
        <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last Updated: {today}</p>
        
        <div className="font-body text-[#4A4A4A] space-y-8 leading-relaxed">
          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p>Welcome to Shree Radhe Tiles & Hardware. We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website, use our digital showroom, or interact with our services.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
            <p className="mb-4">We collect several types of information from and about users of our website, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Identifiers:</strong> Name, email address, phone number, and physical address.</li>
              <li><strong>Interaction Data:</strong> Information about your enquiries, project requirements, and product interests.</li>
              <li><strong>Appointment Data:</strong> Details regarding scheduled store visits or video consultations.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, and browsing patterns collected via cookies.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To process and respond to your product enquiries.</li>
              <li>To confirm and manage your store visit or video call appointments.</li>
              <li>To provide customer support and send notification updates.</li>
              <li>To improve our website functionality and user experience.</li>
              <li>To comply with legal obligations under the Indian IT Act 2000.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">4. Data Storage and Security</h2>
            <p>Your data is stored securely using Supabase cloud infrastructure. We implement industry-standard encryption and security protocols in compliance with the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">5. Data Sharing</h2>
            <p>We do not sell, rent, or trade your personal information. We may share your data with trusted service providers (such as Supabase for database management and Google for analytics/maps) solely as necessary to provide our services. We may also disclose information when required by law enforcement or regulatory authorities.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">6. Cookies</h2>
            <p>We use session cookies to keep you logged in and analytics cookies to understand how you interact with our catalog. You can manage cookie preferences through your browser settings, though some features may be disabled as a result.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">7. Your Rights</h2>
            <p>Under Indian law, you have the right to access, correct, or request the deletion of your personal data. If you wish to exercise these rights, please visit our <Link to="/data-deletion" className="text-accent underline">Data Deletion Request</Link> page or contact us at <a href="mailto:rmravi771@gmail.com" className="text-accent underline">rmravi771@gmail.com</a>.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">8. Data Retention</h2>
            <p>Enquiry and appointment data are typically retained for 2 years unless a deletion request is made. Account data is retained as long as your account remains active.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">9. Children's Privacy</h2>
            <p>Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from minors.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">10. Changes to This Policy</h2>
            <p>We may update this policy periodically. Significant changes will be notified via a prominent notice on our website homepage.</p>
          </section>

          <section className="bg-secondary/30 p-6 rounded-xl border border-border">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">11. Contact Us</h2>
            <div className="text-sm space-y-2">
              <p><strong>Store Address:</strong> Shree Radhe Tiles & Hardware, Mishra Line, Behind Police Station, Paratwada, Dist. Amravati, Maharashtra 444805</p>
              <p><strong>Email:</strong> rmravi771@gmail.com</p>
              <p><strong>Phone:</strong> +91 75887 51610</p>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
