import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../utils/constants";
import { motion } from "framer-motion";

export default function Products(){
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{opacity:0, y:20}} 
          animate={{opacity:1, y:0}} 
          className="text-5xl font-bold text-[var(--color-primary)] mb-6"
        >
          Products & Parts
        </motion.h1>
        <motion.p 
          initial={{opacity:0, y:20}} 
          animate={{opacity:1, y:0}} 
          transition={{delay:0.2}}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Precision-manufactured parts and assemblies built for performance and durability in biking and automotive applications.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {PRODUCTS.map(p => <ProductCard key={p.id} product={p} />)}
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <motion.div 
          initial={{opacity:0, x:-20}} 
          whileInView={{opacity:1, x:0}} 
          transition={{duration:0.5}}
          className="bg-gradient-to-br from-[var(--color-accent)] to-white rounded-2xl p-10 border border-gray-100"
        >
          <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">Custom Solutions</h2>
          <div className="space-y-4 text-gray-700 text-lg">
            <p>
              Don't see exactly what you need? Our engineering team specializes in custom manufacturing solutions 
              tailored to your specific requirements.
            </p>
            <p>
              From initial concept to final production, we work closely with you to ensure the perfect fit for your application.
            </p>
            <p>
              Whether it's a one-off prototype or high-volume production, we have the expertise to deliver.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{opacity:0, x:20}} 
          whileInView={{opacity:1, x:0}} 
          transition={{duration:0.5, delay:0.2}}
        >
          <img 
            src="https://images.unsplash.com/photo-1504390425510-7ffc297e8931?q=80&w=800&auto=format&fit=crop" 
            alt="Custom Manufacturing Solutions" 
            className="rounded-2xl shadow-xl"
          />
        </motion.div>
      </div>

      <motion.div 
        initial={{opacity:0, y:20}} 
        whileInView={{opacity:1, y:0}} 
        transition={{duration:0.5}}
        className="bg-gradient-to-r from-[var(--color-primary)] to-[#002a52] rounded-3xl p-16 text-center text-white"
      >
        <h2 className="text-4xl font-bold mb-6">Need a Custom Part?</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Our engineering team is ready to help you bring your vision to life with precision manufacturing.
        </p>
        <a href="/contact" className="btn-accent inline-block">Request Custom Quote</a>
      </motion.div>
    </div>
  )
}