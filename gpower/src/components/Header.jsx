import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header() {
  const loc = useLocation();
  const [open, setOpen] = useState(false);

  // Disable scroll when menu is open (mobile UX improvement)
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--color-primary)] focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>
      
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-white/80 backdrop-blur-xl border-b border-white/20 sticky top-0 z-40 shadow-sm"
      >
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 min-w-max">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[#002a52] flex items-center justify-center shadow-lg">
              <div className="w-5 h-5 bg-[#FFD447] rounded-full shadow-md"></div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-[var(--color-primary)] leading-tight">
                Geidel<span className="text-[#FFD447]">Power</span>
              </div>
              <div className="text-[10px] sm:text-xs text-gray-500">
                Precision Manufacturing
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
            <Link to="/" className={`${loc.pathname === "/" ? "text-[var(--color-primary)] font-bold" : "text-gray-700"} hover:text-[var(--color-primary)] transition-all duration-300 min-h-[44px] flex items-center`} aria-current={loc.pathname === "/" ? "page" : undefined}>
              Home
            </Link>
            <Link to="/about" className={`${loc.pathname === "/about" ? "text-[var(--color-primary)] font-bold" : "text-gray-700"} hover:text-[var(--color-primary)] transition-all duration-300 min-h-[44px] flex items-center`} aria-current={loc.pathname === "/about" ? "page" : undefined}>
              About
            </Link>
            <Link to="/services" className={`${loc.pathname === "/services" ? "text-[var(--color-primary)] font-bold" : "text-gray-700"} hover:text-[var(--color-primary)] transition-all duration-300 min-h-[44px] flex items-center`} aria-current={loc.pathname === "/services" ? "page" : undefined}>
              Services
            </Link>
            <Link to="/products" className={`${loc.pathname === "/products" ? "text-[var(--color-primary)] font-bold" : "text-gray-700"} hover:text-[var(--color-primary)] transition-all duration-300 min-h-[44px] flex items-center`} aria-current={loc.pathname === "/products" ? "page" : undefined}>
              Products
            </Link>
            <Link to="/blog" className={`${loc.pathname === "/blog" ? "text-[var(--color-primary)] font-bold" : "text-gray-700"} hover:text-[var(--color-primary)] transition-all duration-300 min-h-[44px] flex items-center`} aria-current={loc.pathname === "/blog" ? "page" : undefined}>
              Blog
            </Link>
            <Link to="/contact" className="btn-accent">Contact</Link>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-3">
            {/* Hamburger Icon */}
            <button 
              onClick={() => setOpen(!open)} 
              className="text-3xl text-[var(--color-primary)] min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded-lg"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? (
                <motion.span
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  className="block w-6 h-6 relative"
                >
                  <span className="absolute top-1/2 left-1/2 w-6 h-[2px] bg-[var(--color-primary)] transform -translate-x-1/2 -translate-y-1/2 rotate-45"></span>
                  <span className="absolute top-1/2 left-1/2 w-6 h-[2px] bg-[var(--color-primary)] transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></span>
                </motion.span>
              ) : (
                <motion.span className="block w-6 h-6 relative">
                  <span className="absolute top-[2px] left-0 w-full h-[2px] bg-[var(--color-primary)]"></span>
                  <span className="absolute top-1/2 left-0 w-full h-[2px] bg-[var(--color-primary)]"></span>
                  <span className="absolute bottom-[2px] left-0 w-full h-[2px] bg-[var(--color-primary)]"></span>
                </motion.span>
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Dropdown */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-[73px] left-0 right-0 md:hidden bg-white/98 backdrop-blur-xl border-b border-gray-200 shadow-lg z-30 max-h-[calc(100vh-73px)] overflow-y-auto"
        >
          <div className="px-6 py-5 flex flex-col gap-4">
            <Link onClick={() => setOpen(false)} to="/" className={`${loc.pathname === "/" ? "text-[var(--color-primary)] font-bold" : "text-gray-700"} py-3 text-lg hover:text-[var(--color-primary)] transition-colors min-h-[44px] flex items-center`} aria-current={loc.pathname === "/" ? "page" : undefined}>
              Home
            </Link>
            <Link onClick={() => setOpen(false)} to="/about" className={`${loc.pathname === "/about" ? "text-[var(--color-primary)] font-bold" : "text-gray-700"} py-3 text-lg hover:text-[var(--color-primary)] transition-colors min-h-[44px] flex items-center`} aria-current={loc.pathname === "/about" ? "page" : undefined}>
              About
            </Link>
            <Link onClick={() => setOpen(false)} to="/services" className={`${loc.pathname === "/services" ? "text-[var(--color-primary)] font-bold" : "text-gray-700"} py-3 text-lg hover:text-[var(--color-primary)] transition-colors min-h-[44px] flex items-center`} aria-current={loc.pathname === "/services" ? "page" : undefined}>
              Services
            </Link>
            <Link onClick={() => setOpen(false)} to="/products" className={`${loc.pathname === "/products" ? "text-[var(--color-primary)] font-bold" : "text-gray-700"} py-3 text-lg hover:text-[var(--color-primary)] transition-colors min-h-[44px] flex items-center`} aria-current={loc.pathname === "/products" ? "page" : undefined}>
              Products
            </Link>
            <Link onClick={() => setOpen(false)} to="/blog" className={`${loc.pathname === "/blog" ? "text-[var(--color-primary)] font-bold" : "text-gray-700"} py-3 text-lg hover:text-[var(--color-primary)] transition-colors min-h-[44px] flex items-center`} aria-current={loc.pathname === "/blog" ? "page" : undefined}>
              Blog
            </Link>
            <Link onClick={() => setOpen(false)} to="/contact" className={`${loc.pathname === "/contact" ? "text-[var(--color-primary)] font-bold" : "text-gray-700"} py-3 text-lg hover:text-[var(--color-primary)] transition-colors min-h-[44px] flex items-center`} aria-current={loc.pathname === "/contact" ? "page" : undefined}>
              Contact
            </Link>
          </div>
        </motion.div>
      )}
    </>
  );
}
