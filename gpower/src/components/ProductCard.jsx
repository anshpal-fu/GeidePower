import { motion } from "framer-motion";
import { useState } from "react";
import defaultImage from "../assets/19jpg/Diamond piston with teflon skirt.jpg";
import QuoteRequestModal from "./QuoteRequestModal";

export default function ProductCard({ product }) {
  const imageSrc = product.image || defaultImage;
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -8, scale: 1.015 }}
        whileTap={{ scale: 0.97 }}
        className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg
                   transition-all h-full max-w-full sm:max-w-sm mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
      >
      {/* Image */}
      <div className="h-40 sm:h-48 flex items-center justify-center overflow-hidden relative bg-white">
        <motion.div whileHover={{ scale: 1.1 }} className="w-full h-full flex items-center justify-center">
          <img
            src={imageSrc}
            alt={product.name}
            className="object-contain p-3 sm:p-2 w-full h-full"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        <motion.h3
          className="text-lg sm:text-xl font-bold text-[var(--color-primary)] mb-2 leading-tight"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          {product.name}
        </motion.h3>

        <motion.p
          className="text-gray-600 text-sm sm:text-base mb-4"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {product.desc}
        </motion.p>

        {/* Buttons */}
        <div className="flex gap-3 items-center">
          <motion.button
            onClick={() => setIsQuoteModalOpen(true)}
            className="btn-accent flex-1 text-sm sm:text-base"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request Quote
          </motion.button>
          
          <motion.a
            href="/contact"
            className="text-[var(--color-primary)] font-bold inline-flex items-center group text-sm sm:text-base min-h-[44px] min-w-[44px] justify-center"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            aria-label="Inquire about product"
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              whileHover={{ x: 4 }}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </motion.svg>
          </motion.a>
        </div>
      </div>
    </motion.div>

    <QuoteRequestModal
      isOpen={isQuoteModalOpen}
      onClose={() => setIsQuoteModalOpen(false)}
      productName={product.name}
    />
  </>
  );
}
