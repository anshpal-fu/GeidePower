import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header(){
  const loc = useLocation();
  
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
            <div className="w-6 h-6 bg-[#FFD447] rounded-full shadow-md"></div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[var(--color-primary)]">Geidel<span className="text-[#FFD447]">Power</span></div>
            <div className="text-xs text-gray-500">Precision Manufacturing</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={`hover:text-[var(--color-primary)] transition-all duration-300 ${loc.pathname === "/" ? "text-[var(--color-primary)] font-bold" : "text-gray-700"}`}>Home</Link>
          <Link to="/about" className={`hover:text-[var(--color-primary)] transition-all duration-300 ${loc.pathname === "/about" ? "text-[var(--color-primary)] font-bold" : "text-gray-700"}`}>About</Link>
          <Link to="/services" className={`hover:text-[var(--color-primary)] transition-all duration-300 ${loc.pathname === "/services" ? "text-[var(--color-primary)] font-bold" : "text-gray-700"}`}>Services</Link>
          <Link to="/products" className={`hover:text-[var(--color-primary)] transition-all duration-300 ${loc.pathname === "/products" ? "text-[var(--color-primary)] font-bold" : "text-gray-700"}`}>Products</Link>
          <Link to="/portfolio" className={`hover:text-[var(--color-primary)] transition-all duration-300 ${loc.pathname === "/portfolio" ? "text-[var(--color-primary)] font-bold" : "text-gray-700"}`}>Portfolio</Link>
          <Link to="/contact" className="btn-accent">Contact</Link>
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <Link to="/contact" className="btn-accent text-sm">Contact</Link>
        </div>
      </div>
    </motion.header>
  );
}