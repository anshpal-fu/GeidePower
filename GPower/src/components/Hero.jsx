import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

export default function Hero(){
  const { isAltTheme } = useTheme();
  
  return (
    <section className="gradient-bg py-24 md:py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className={`absolute top-20 right-20 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse ${isAltTheme ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-secondary)]'}`}></div>
      <div className={`absolute bottom-10 left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse ${isAltTheme ? 'bg-[var(--color-secondary)]' : 'bg-[var(--color-primary)]'}`}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-[var(--color-secondary)] text-[var(--color-dark)] px-4 py-2 rounded-full font-bold mb-6">
              Precision Manufacturing
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              High-Performance <span className="text-[var(--color-secondary)]">Bike & Car</span> Parts
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl">
              Specialized manufacturing of precision-engineered components for cycling enthusiasts and automotive professionals. 
              Quality, innovation, and performance in every part.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/products" className="btn-accent px-8 py-4 text-lg">Explore Products</a>
              <a href="/contact" className={`px-8 py-4 rounded-lg font-bold transition duration-300 ${isAltTheme ? 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20' : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20'}`}>
                Request Quote
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <motion.div 
        className={`absolute top-1/4 left-1/4 w-16 h-16 border-4 rounded-full opacity-30 ${isAltTheme ? 'border-[var(--color-primary)]' : 'border-[var(--color-secondary)]'}`}
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      
      <motion.div 
        className={`absolute bottom-1/3 right-1/4 w-12 h-12 rotate-45 opacity-20 ${isAltTheme ? 'bg-[var(--color-secondary)]' : 'bg-[var(--color-primary)]'}`}
        animate={{ 
          y: [0, 20, 0],
          x: [0, -15, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
    </section>
  );
}