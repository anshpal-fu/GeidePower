import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import crankshaftImage from "../assets/Crankshaft - six cylinders seven mains.jpg";

export default function Hero(){
  const { isAltTheme } = useTheme();
  
  return (
    <section className="gradient-bg py-24 md:py-10 relative overflow-hidden">
      {/* Animated decorative elements */}
      <motion.div 
        className={`absolute top-20 right-20 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-20 ${isAltTheme ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-secondary)]'}`}
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      
      <motion.div 
        className={`absolute bottom-10 left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-10 ${isAltTheme ? 'bg-[var(--color-secondary)]' : 'bg-[var(--color-primary)]'}`}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="py-5 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block bg-[var(--color-secondary)] text-[var(--color-dark)] px-4 py-2 rounded-full font-bold mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
            >
              Precision Manufacturing
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              High-Performance <span className="text-[var(--color-secondary)]">Bike & Car</span> Parts
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 mb-10 max-w-2xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Specialized manufacturing of precision-engineered components for cycling enthusiasts and automotive professionals. 
              Quality, innovation, and performance in every part.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <a href="/products" className="btn-accent px-8 py-4 text-lg">Explore Products</a>
              <a href="/contact" className={`px-8 py-4 rounded-lg font-bold transition duration-300 ${isAltTheme ? 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20' : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20'}`}>
                Request Quote
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{opacity:0, scale:0.9}} 
            animate={{opacity:1, scale:1}} 
            transition={{delay:0.3, duration:0.7, type: "spring", stiffness: 100}}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div 
                className="absolute -top-6 -right-6 w-full h-full border-4 border-[var(--color-secondary)] rounded-2xl z-0"
                animate={{ 
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <div className="relative bg-white rounded-2xl p-6 border border-gray-100 z-10 max-w-xs">
                <motion.img 
                  src={crankshaftImage}
                  alt="Precision Engineered Bike & Car Parts"
                  className="w-full h-auto object-contain rounded-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating elements with enhanced animation */}
      <motion.div 
        className={`absolute top-1/4 left-1/4 w-16 h-16 border-4 rounded-full opacity-30 ${isAltTheme ? 'border-[var(--color-primary)]' : 'border-[var(--color-secondary)]'}`}
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      
      <motion.div 
        className={`absolute bottom-1/3 right-1/4 w-12 h-12 rotate-45 opacity-20 ${isAltTheme ? 'bg-[var(--color-secondary)]' : 'bg-[var(--color-primary)]'}`}
        animate={{ 
          y: [0, 20, 0],
          x: [0, -15, 0],
          rotate: [45, 225, 405]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
    </section>
  );
}