import ServiceCard from "../components/ServiceCard";
import { SERVICES } from "../utils/constants";
import { motion } from "framer-motion";

export default function Services(){
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{opacity:0, y:20}} 
          animate={{opacity:1, y:0}} 
          className="text-5xl font-bold text-[var(--color-primary)] mb-6"
        >
          Manufacturing Services
        </motion.h1>
        <motion.p 
          initial={{opacity:0, y:20}} 
          animate={{opacity:1, y:0}} 
          transition={{delay:0.2}}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          From concept to completion, our services cover the full manufacturing lifecycle with precision and innovation.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {SERVICES.map((s, i) => <ServiceCard key={s.id} index={i} title={s.title} desc={s.desc} />)}
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <motion.div 
          initial={{opacity:0, x:-20}} 
          whileInView={{opacity:1, x:0}} 
          transition={{duration:0.5}}
        >
          <img 
            src="https://images.unsplash.com/photo-1504390425510-7ffc297e8931?q=80&w=800&auto=format&fit=crop" 
            alt="Advanced Manufacturing Facility" 
            className="rounded-2xl shadow-xl"
          />
        </motion.div>
        
        <motion.div 
          initial={{opacity:0, x:20}} 
          whileInView={{opacity:1, x:0}} 
          transition={{duration:0.5, delay:0.2}}
          className="bg-gradient-to-br from-[var(--color-accent)] to-white rounded-2xl p-10 border border-gray-100"
        >
          <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">State-of-the-Art Facilities</h2>
          <div className="space-y-4 text-gray-700 text-lg">
            <p>
              Our 50,000 sq ft facility houses the latest CNC machining centers, 3D printers, and quality control equipment.
            </p>
            <p>
              With over 100 skilled technicians and engineers, we have the capacity to handle projects of any size.
            </p>
            <p>
              Our commitment to innovation means we're constantly investing in new technologies to stay ahead.
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{opacity:0, y:20}} 
        whileInView={{opacity:1, y:0}} 
        transition={{duration:0.5}}
        className="bg-gradient-to-r from-[var(--color-primary)] to-[#002a52] rounded-3xl p-16 text-center text-white"
      >
        <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Contact our team today to discuss your bike or car parts manufacturing needs.
        </p>
        <a href="/contact" className="btn-accent inline-block">Get in Touch</a>
      </motion.div>
    </div>
  )
}