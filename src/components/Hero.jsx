import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import crankshaftImage from "../assets/Crankshaft - six cylinders seven mains.jpg";

export default function Hero() {
  const { isAltTheme } = useTheme();

  return (
    <section className="gradient-bg py-16 md:py-24 relative overflow-hidden">
      
      {/* Decorative BG Elements – scaled down for mobile */}
      <motion.div
        className={`absolute top-10 right-10 w-40 h-40 md:w-64 md:h-64 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl opacity-20 ${isAltTheme ? "bg-[var(--color-primary)]" : "bg-[var(--color-secondary)]"}`}
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className={`absolute bottom-10 left-10 w-48 h-48 md:w-72 md:h-72 rounded-full mix-blend-multiply filter blur-xl md:blur-3xl opacity-10 ${isAltTheme ? "bg-[var(--color-secondary)]" : "bg-[var(--color-primary)]"}`}
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="py-5 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* LEFT TEXT SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block bg-[var(--color-secondary)] text-[var(--color-dark)] px-3 py-1.5 md:px-4 md:py-2 rounded-full text-sm md:text-base font-bold mb-4 md:mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
            >
              Precision Manufacturing
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 md:mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              High-Performance{" "}
              <span className="text-[var(--color-secondary)]">Bike & Car</span> Parts
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Specialized manufacturing of precision-engineered components for
              cycling enthusiasts and automotive professionals. Quality,
              innovation, and performance in every part.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 md:gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <a href="/products" className="btn-accent px-6 py-3 text-base md:text-lg">
                Explore Products
              </a>
              <a
                href="/contact"
                className={`px-6 py-3 rounded-lg font-bold transition duration-300 text-sm md:text-base ${
                  isAltTheme
                    ? "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20"
                    : "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20"
                }`}
              >
                Request Quote
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, type: "spring", stiffness: 100 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-64 md:w-80">
              <motion.div
                className="absolute -top-4 -right-4 w-full h-full border-2 md:border-4 border-[var(--color-secondary)] rounded-2xl z-0"
                animate={{ rotate: [0, 2, 0, -2, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative bg-white rounded-2xl p-4 md:p-6 border border-gray-100 z-10 shadow-none">
                <motion.img
                  src={crankshaftImage}
                  alt="Precision Engineered Bike & Car Parts"
                  className="w-full h-auto object-contain rounded-lg shadow-none"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <motion.div
        className={`absolute top-1/4 left-8 md:left-1/4 w-10 h-10 md:w-16 md:h-16 border-2 md:border-4 rounded-full opacity-30 ${
          isAltTheme ? "border-[var(--color-primary)]" : "border-[var(--color-secondary)]"
        }`}
        animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className={`absolute bottom-20 right-10 md:right-1/4 w-8 h-8 md:w-12 md:h-12 rotate-45 opacity-20 ${
          isAltTheme ? "bg-[var(--color-secondary)]" : "bg-[var(--color-primary)]"
        }`}
        animate={{ y: [0, 20, 0], x: [0, -15, 0], rotate: [45, 225, 405] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
