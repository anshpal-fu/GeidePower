import { motion } from "framer-motion";
import defaultImage from "../assets/19jpg/Diamond piston with teflon skirt.jpg";

export default function ProductCard({ product }) {
  // Use the product image if available, otherwise use default
  const imageSrc = product.image || defaultImage;
  
  return (
    <motion.div 
      whileHover={{ y: -10, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-2xl overflow-hidden border border-gray-100 card-border h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      <div className="h-48 overflow-hidden relative">
        <motion.img 
          src={imageSrc} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className="p-6">
        <motion.h3 
          className="text-xl font-bold text-[var(--color-primary)] mb-3"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          {product.name}
        </motion.h3>
        <motion.p 
          className="text-gray-600 mb-4"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {product.desc}
        </motion.p>
        <motion.a 
          href="/contact" 
          className="text-[var(--color-secondary)] font-bold hover:underline inline-flex items-center"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          whileHover={{ x: 5 }}
        >
          Inquire Now
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
}