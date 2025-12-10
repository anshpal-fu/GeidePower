import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const loc = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header 
        initial={{ y: -20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5 }} 
        className="w-full bg-white/80 backdrop-blur-xl border-b border-white/20 sticky top-0 z-40 shadow-sm"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[#002a52] flex items-center justify-center shadow-lg">
              <div className="w-6 h-6 bg-[#FFD447] rounded-full shadow-md"></div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[var(--color-primary)]">
                Geidel<span className="text-[#FFD447]">Power</span>
              </div>
              <div className="text-xs text-gray-500">Precision Manufacturing</div>
            </div>
          </Link>

          {/* Desktop Nav (unchanged) */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={`hover:text-[var(--color-primary)] transition-all duration-300 ${loc.pathname === "/" ? "text-[var(--color-primary)] font-bold" : "text-gray-700"}`}>Home</Link>
            <Link to="/about" className={`hover:text-[var(--color-primary)] transition-all duration-300 ${loc.pathname === "/about" ? "text-[var(--color-primary)] font-bold" : "text-gray-700"}`}>About</Link>
            <Link to="/services" className={`hover:text-[var(--color-primary)] transition-all duration-300 ${loc.pathname === "/services" ? "text-[var(--color-primary)] font-bold" : "text-gray-700"}`}>Services</Link>
            <Link to="/products" className={`hover:text-[var(--color-primary)] transition-all duration-300 ${loc.pathname === "/products" ? "text-[var(--color-primary)] font-bold" : "text-gray-700"}`}>Products</Link>
            <Link to="/contact" className="btn-accent">Contact</Link>
          </nav>

          {/* Mobile Contact + Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <Link to="/contact" className="btn-accent text-sm">Contact</Link>

            <button onClick={() => setOpen(!open)} className="text-3xl text-[var(--color-primary)]">
              {open ? (
                <span className="block w-6 h-6 relative">
                  <span className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-[var(--color-primary)] transform -translate-x-1/2 -translate-y-1/2 rotate-45"></span>
                  <span className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-[var(--color-primary)] transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></span>
                </span>
              ) : (
                <span className="block w-6 h-6 relative">
                  <span className="absolute top-1/4 left-0 w-full h-0.5 bg-[var(--color-primary)]"></span>
                  <span className="absolute top-1/2 left-0 w-full h-0.5 bg-[var(--color-primary)]"></span>
                  <span className="absolute bottom-1/4 left-0 w-full h-0.5 bg-[var(--color-primary)]"></span>
                </span>
              )}
            </button>
          </div>

        </div>
      </motion.header>

      {/* Mobile Menu Dropdown */}
      {open && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-md w-full px-6 py-4 flex flex-col gap-4 overflow-hidden"
        >
          <Link onClick={() => setOpen(false)} to="/" className={`text-gray-700 py-2 ${loc.pathname === "/" ? "text-[var(--color-primary)] font-bold" : ""}`}>Home</Link>
          <Link onClick={() => setOpen(false)} to="/about" className={`text-gray-700 py-2 ${loc.pathname === "/about" ? "text-[var(--color-primary)] font-bold" : ""}`}>About</Link>
          <Link onClick={() => setOpen(false)} to="/services" className={`text-gray-700 py-2 ${loc.pathname === "/services" ? "text-[var(--color-primary)] font-bold" : ""}`}>Services</Link>
          <Link onClick={() => setOpen(false)} to="/products" className={`text-gray-700 py-2 ${loc.pathname === "/products" ? "text-[var(--color-primary)] font-bold" : ""}`}>Products</Link>
          <Link onClick={() => setOpen(false)} to="/contact" className={`text-gray-700 py-2 ${loc.pathname === "/contact" ? "text-[var(--color-primary)] font-bold" : ""}`}>Contact</Link>
        </motion.div>
      )}
    </>
  );
}