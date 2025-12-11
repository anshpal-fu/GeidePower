import { CONTACT } from "../utils/constants";

export default function Footer() {
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
            {["f", "in", "tw"].map((i) => (
              <div 
                key={i}
                className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center cursor-pointer hover:bg-[var(--color-secondary)] transition"
              >
                <span className="text-[var(--color-primary)] font-bold">{i}</span>
              </div>
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
            <li><a href="/" className="hover:text-[var(--color-secondary)] transition">Home</a></li>
            <li><a href="/about" className="hover:text-[var(--color-secondary)] transition">About Us</a></li>
            <li><a href="/services" className="hover:text-[var(--color-secondary)] transition">Services</a></li>
            <li><a href="/products" className="hover:text-[var(--color-secondary)] transition">Products</a></li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h4 className="text-xl font-bold text-[var(--color-secondary)] mb-6">Newsletter</h4>
          <p className="text-gray-300 text-sm sm:text-base mb-4">
            Subscribe to receive updates on new products and industry insights.
          </p>

          {/* Mobile optimized input + button */}
          <div className="flex flex-col sm:flex-row w-full">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-3 w-full rounded-lg sm:rounded-l-lg sm:rounded-r-none text-gray-800 focus:outline-none"
            />
            <button className="mt-3 sm:mt-0 bg-[var(--color-secondary)] text-[var(--color-dark)] px-4 py-3 rounded-lg sm:rounded-r-lg sm:rounded-l-none font-bold hover:bg-[#e6bf3e] transition">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-6 md:py-8 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center md:items-start gap-4 text-center md:text-left">
          
          <div>© {CONTACT.year} Geidel Power. All rights reserved.</div>

          <div className="flex gap-6 flex-wrap">
            <a href="#" className="hover:text-[var(--color-secondary)] transition">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--color-secondary)] transition">Terms of Service</a>
          </div>

        </div>
      </div>
    </footer>
  );
}
