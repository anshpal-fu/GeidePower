import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.03 }} 
      className="card card-hover overflow-hidden h-full border-t-4 border-[var(--color-secondary)]"
    >
      <div className="bg-gray-50 h-56 flex items-center justify-center p-6">
        <img 
          src={product.image || "https://images.unsplash.com/photo-1486028c94f437ba64e617c50c0e1d79?q=80&w=800&auto=format&fit=crop"} 
          alt={product.name} 
          className="max-h-44 object-contain"
        />
      </div>
      <div className="p-8">
        <div className="text-2xl font-bold text-[var(--color-primary)] mb-3">{product.name}</div>
        <p className="text-gray-600 mb-6">{product.desc}</p>
        <a href="/contact" className="btn-secondary w-full text-center">Request Quote</a>
      </div>
    </motion.div>
  );
}