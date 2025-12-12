import { CONTACT } from "../utils/constants";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-r from-[var(--color-primary)] to-[#002a52] text-white">
      
      {/* MAIN GRID */}
      <div className="container mx-auto px-6 py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* LOGO + TEXT */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-[var(--color-secondary)] flex items-center justify-center">
              <div className="w-5 h-5 bg-[var(--color-primary)] rounded-full"></div>
            </div>
            <div className="text-2xl font-bold">
              Geidel<span className="text-[#FFD447]">Power</span>
            </div>
          </div>

          <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
            Precision manufacturing of high-performance bike and car components for enthusiasts and professionals worldwide.
          </p>

          <div className="flex gap-4 flex-wrap">
            {[
              { icon: "f", label: "Facebook" },
              { icon: "in", label: "LinkedIn" },
              { icon: "tw", label: "Twitter" }
            ].map((social) => (
              <a 
                key={social.icon}
                href="#"
                aria-label={social.label}
                className="w-10 h-10 min-w-[44px] min-h-[44px] rounded-full bg-[var(--color-accent)] flex items-center justify-center cursor-pointer hover:bg-[var(--color-secondary)] transition-all hover:scale-110"
              >
                <span className="text-[var(--color-primary)] font-bold">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h4 className="text-xl font-bold text-[var(--color-secondary)] mb-6">Contact Info</h4>
          <div className="space-y-4 text-gray-300 text-sm sm:text-base">
            <div>
              <h5 className="font-semibold text-white mb-1">Address</h5>
              <p>{CONTACT.address}</p>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-1">Phone</h5>
              <p>{CONTACT.phone}</p>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-1">Email</h5>
              <p>info@{CONTACT.domainPreferred}</p>
            </div>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-xl font-bold text-[var(--color-secondary)] mb-6">Quick Links</h4>
          <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
            <li><a href="/" className="hover:text-[var(--color-secondary)] transition inline-block min-h-[44px] flex items-center">Home</a></li>
            <li><a href="/about" className="hover:text-[var(--color-secondary)] transition inline-block min-h-[44px] flex items-center">About Us</a></li>
            <li><a href="/services" className="hover:text-[var(--color-secondary)] transition inline-block min-h-[44px] flex items-center">Services</a></li>
            <li><a href="/products" className="hover:text-[var(--color-secondary)] transition inline-block min-h-[44px] flex items-center">Products</a></li>
            <li><a href="/blog" className="hover:text-[var(--color-secondary)] transition inline-block min-h-[44px] flex items-center">Blog</a></li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h4 className="text-xl font-bold text-[var(--color-secondary)] mb-6">Newsletter</h4>
          <p className="text-gray-300 text-sm sm:text-base mb-4">
            Subscribe to receive updates on new products and industry insights.
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:bg-white/20 min-h-[48px] border border-white/20"
            />
            <button 
              type="submit"
              className="btn-accent w-full px-6 py-3 min-h-[48px] hover:scale-105 transition-transform"
            >
              Subscribe
            </button>
            {subscribed && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[var(--color-secondary)] text-sm"
              >
                ✓ Subscribed successfully!
              </motion.p>
            )}
          </form>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-6 md:py-8 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          
          <div>© {CONTACT.year} Geidel Power. All rights reserved.</div>

          <div className="flex gap-6 flex-wrap justify-center">
            <a href="#" className="hover:text-[var(--color-secondary)] transition min-h-[44px] flex items-center">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--color-secondary)] transition min-h-[44px] flex items-center">Terms of Service</a>
          </div>

        </div>
      </div>
    </footer>
  );
}
