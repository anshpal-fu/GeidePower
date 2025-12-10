import { CONTACT } from "../utils/constants";

export default function Footer(){
  return (
    <footer className="bg-gradient-to-r from-[var(--color-primary)] to-[#002a52] text-white">
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-[var(--color-secondary)] flex items-center justify-center">
              <div className="w-5 h-5 bg-[var(--color-primary)] rounded-full"></div>
            </div>
            <div className="text-2xl font-bold">Geidel<span className="text-[var(--color-secondary)]">Power</span></div>
          </div>
          <p className="text-gray-300 mb-6">
            Precision manufacturing of high-performance bike and car components for enthusiasts and professionals worldwide.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center cursor-pointer hover:bg-[var(--color-secondary)] transition">
              <span className="text-[var(--color-primary)] font-bold">f</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center cursor-pointer hover:bg-[var(--color-secondary)] transition">
              <span className="text-[var(--color-primary)] font-bold">in</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center cursor-pointer hover:bg-[var(--color-secondary)] transition">
              <span className="text-[var(--color-primary)] font-bold">tw</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold text-[var(--color-secondary)] mb-6">Contact Info</h4>
          <div className="space-y-4 text-gray-300">
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

        <div>
          <h4 className="text-xl font-bold text-[var(--color-secondary)] mb-6">Quick Links</h4>
          <ul className="space-y-3 text-gray-300">
            <li><a href="/" className="hover:text-[var(--color-secondary)] transition">Home</a></li>
            <li><a href="/about" className="hover:text-[var(--color-secondary)] transition">About Us</a></li>
            <li><a href="/services" className="hover:text-[var(--color-secondary)] transition">Services</a></li>
            <li><a href="/products" className="hover:text-[var(--color-secondary)] transition">Products</a></li>
            {/* <li><a href="/portfolio" className="hover:text-[var(--color-secondary)] transition">Portfolio</a></li> */}
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-[var(--color-secondary)] mb-6">Newsletter</h4>
          <p className="text-gray-300 mb-4">Subscribe to receive updates on new products and industry insights.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="px-4 py-3 rounded-l-lg w-full text-gray-800 focus:outline-none"
            />
            <button className="bg-[var(--color-secondary)] text-[var(--color-dark)] px-4 py-3 rounded-r-lg font-bold hover:bg-[#e6bf3e] transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-8 text-gray-400 text-sm flex flex-col md:flex-row justify-between gap-4">
          <div>© {CONTACT.year} Geidel Power. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[var(--color-secondary)] transition">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--color-secondary)] transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}