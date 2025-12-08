import { motion } from "framer-motion";

export default function ServiceCard({ title, desc, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ delay: index * 0.1 }}
      className="card card-hover h-full border-t-4 border-[var(--color-secondary)]"
    >
      <div className="p-8">
        <div className="w-12 h-12 rounded-lg bg-[var(--color-accent)] flex items-center justify-center mb-6">
          <div className="w-6 h-6 bg-[var(--color-primary)] rounded-full"></div>
        </div>
        <div className="text-2xl font-bold text-[var(--color-primary)] mb-4">{title}</div>
        <p className="text-gray-600">{desc}</p>
      </div>
    </motion.div>
  );
}