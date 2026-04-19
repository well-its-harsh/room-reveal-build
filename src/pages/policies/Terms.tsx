import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function TermsOfService() {
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
        <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-10">Last Updated: {today}</p>
        
        <div className="font-body text-[#4A4A4A] space-y-8 leading-relaxed">
          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p>By accessing or using the Shree Radhe Tiles & Hardware website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our website or services.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">2. Use of Website</h2>
            <p className="mb-4">You are granted a limited, non-transferable license to browse the Shree Radhe digital showroom and make enquiries. Prohibited activities include but are not limited to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Data scraping or automated extraction of product details.</li>
              <li>Submitting fraudulent or misleading enquiries.</li>
              <li>Attempting to breach the website's security or accessing accounts other than your own.</li>
              <li>Misusing the booking system for store visits or video consultations.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">3. Products and Pricing</h2>
            <p className="mb-4">We strive for accuracy in our digital catalog; however:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All prices displayed on the website are indicative and subject to change without notice.</li>
              <li>Colors and textures shown in images may vary slightly from the actual product due to screen settings and photography lighting.</li>
              <li>Final pricing and availability must be confirmed directly with our store staff.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">4. Enquiries and Appointments</h2>
            <p className="mb-4">Submitting an enquiry via our website does not constitute a binding purchase order. It is an expression of interest intended to facilitate further discussion. Appointments (Store Visits or Video Calls) are subject to confirmation based on staff availability.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>
            <p>All content on this website, including but not limited to logos, site design, text, product descriptions, custom graphics, and images, is the property of Shree Radhe Tiles & Hardware or its respective brand partners and is protected by Indian and international copyright laws.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">6. User Accounts</h2>
            <p>If you create an account, you are responsible for maintaining the confidentiality of your credentials. You agree to accept responsibility for all activities that occur under your account.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
            <p>Shree Radhe Tiles & Hardware shall not be liable for any indirect, incidental, or consequential damages arising from your use of the website or any products showcased within the digital showroom.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">8. Governing Law and Jurisdiction</h2>
            <p>These terms are governed by the laws of India. Any disputes arising from or relating to these terms shall be subject to the exclusive jurisdiction of the courts in Amravati, Maharashtra.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">9. Dispute Resolution</h2>
            <p>We believe most disagreements can be resolved amicably. If you have a concern, please reach out to us first. If an amicable resolution is not reached, the matter will be settled through appropriate legal channels in Maharashtra.</p>
          </section>

          <section className="bg-secondary/30 p-6 rounded-xl border border-border">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">10. Contact Details</h2>
            <div className="text-sm space-y-2">
              <p><strong>Store:</strong> Shree Radhe Tiles & Hardware</p>
              <p><strong>Location:</strong> Mishra Line, Behind Police Station, Paratwada, Dist. Amravati, Maharashtra 444805</p>
              <p><strong>Email:</strong> rmravi771@gmail.com</p>
              <p><strong>Phone:</strong> +91 75887 51610</p>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
