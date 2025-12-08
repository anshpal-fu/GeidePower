import { motion } from "framer-motion";

export default function ManufacturingProcess(){
  const steps = [
    {title: "Design & Engineering", desc: "Advanced CAD modeling and simulation for optimal performance."},
    {title: "Precision CNC Machining", desc: "Multi-axis machining for complex geometries and tight tolerances."},
    {title: "Quality Control", desc: "Rigorous testing and inspection to ensure perfection."},
    {title: "Assembly & Delivery", desc: "Expert assembly and secure packaging for global shipping."}
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h3 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}} 
            className="text-4xl font-bold text-[var(--color-primary)] mb-6"
          >
            Manufacturing Process
          </motion.h3>
          <motion.p 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}} 
            transition={{delay:0.2}}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our state-of-the-art process ensures every part meets the highest standards of precision and quality.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div 
              key={i} 
              whileInView={{opacity:1, y:0}} 
              initial={{opacity:0, y:20}} 
              transition={{delay: i*0.15}}
              className="card card-hover text-center p-8 border-t-4 border-[var(--color-primary)]"
            >
              <div className="text-4xl font-bold text-[var(--color-secondary)] mb-6">0{i+1}</div>
              <div className="text-2xl font-bold text-[var(--color-primary)] mb-4">{s.title}</div>
              <p className="text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}