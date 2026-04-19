import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function CookiePolicy() {
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
        <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">Cookie Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last Updated: {today}</p>
        
        <div className="font-body text-[#4A4A4A] space-y-8 leading-relaxed">
          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">1. What are Cookies?</h2>
            <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">2. How We Use Cookies</h2>
            <p className="mb-4">Shree Radhe Tiles & Hardware uses cookies for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>Strictly Necessary Cookies:</strong> These are essential for you to browse the website and use Its features, such as accessing secure areas (My Account) or saving items to your wishlist.
              </li>
              <li>
                <strong>Performance & Analytics Cookies:</strong> We use internal analytics tools to count visits and traffic sources so we can measure and improve the performance of our site.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> These allow the website to remember choices you make (such as your preferred category views) to provide a more personalized experience.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">3. Third-Party Cookies</h2>
            <p>We may use third-party services like Google Analytics or Supabase which also set cookies on our site to enable their services. We do not control these third-party cookies directly.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">4. Managing Cookies</h2>
            <p className="mb-4">Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-accent underline">aboutcookies.org</a> or <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-accent underline">allaboutcookies.org</a>.</p>
            <p>Please note that if you disable certain cookies, some parts of our digital showroom may not function correctly.</p>
          </section>

          <section className="bg-secondary/30 p-6 rounded-xl border border-border">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">5. Contact Information</h2>
            <p className="text-sm">For any questions regarding our use of cookies, please email us at <a href="mailto:rmravi771@gmail.com" className="text-accent underline">rmravi771@gmail.com</a>.</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
