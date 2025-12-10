import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

export default function Header(){
  const loc = useLocation();
  const { isAltTheme, toggleTheme } = useTheme();
  
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.5 }} 
      className="w-full bg-white/80 backdrop-blur-xl border-b border-white/20 sticky top-0 z-40 shadow-sm"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[#002a52] flex items-center justify-center shadow-lg">
            <div className="w-6 h-6 bg-[var(--color-secondary)] rounded-full shadow-md"></div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[var(--color-primary)]">Geidel<span className="text-[var(--color-secondary)]">Power</span></div>
            <div className="text-xs text-gray-500">Precision Manufacturing</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={`hover:text-[var(--color-primary)] transition-all duration-300 ${loc.pathname === "/" ? "text-[var(--color-primary)] font-bold" : "text-gray-700"}`}>Home</Link>
          <Link to="/about" className={`hover:text-[var(--color-primary)] transition-all duration-300 ${loc.pathname === "/about" ? "text-[var(--color-primary)] font-bold" : "text-gray-700"}`}>About</Link>
          <Link to="/services" className={`hover:text-[var(--color-primary)] transition-all duration-300 ${loc.pathname === "/services" ? "text-[var(--color-primary)] font-bold" : "text-gray-700"}`}>Services</Link>
          <Link to="/products" className={`hover:text-[var(--color-primary)] transition-all duration-300 ${loc.pathname === "/products" ? "text-[var(--color-primary)] font-bold" : "text-gray-700"}`}>Products</Link>
          <Link to="/portfolio" className={`hover:text-[var(--color-primary)] transition-all duration-300 ${loc.pathname === "/portfolio" ? "text-[var(--color-primary)] font-bold" : "text-gray-700"}`}>Portfolio</Link>
          <Link to="/blog" className={`hover:text-[var(--color-primary)] transition-all duration-300 ${loc.pathname === "/blog" ? "text-[var(--color-primary)] font-bold" : "text-gray-700"}`}>Blog</Link>
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-white/50 hover:bg-white/80 transition-all duration-300 border border-gray-200 shadow-sm"
            aria-label="Toggle theme"
          >
            {isAltTheme ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          <Link to="/contact" className="btn-accent">Contact</Link>
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-white/50 hover:bg-white/80 transition-all duration-300 border border-gray-200 shadow-sm"
            aria-label="Toggle theme"
          >
            {isAltTheme ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          <Link to="/contact" className="btn-accent text-sm">Contact</Link>
        </div>
      </div>
    </motion.header>
  );
}