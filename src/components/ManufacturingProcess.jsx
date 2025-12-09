import { motion } from "framer-motion";

export default function ManufacturingProcess() {
  const steps = [
    {
      id: 1,
      title: "Design Consultation",
      desc: "We work with you to understand your requirements and develop detailed specifications."
    },
    {
      id: 2,
      title: "Prototyping",
      desc: "Our engineers create precision prototypes using advanced 3D printing and machining."
    },
    {
      id: 3,
      title: "Testing & Validation",
      desc: "Rigorous quality assurance testing ensures all components meet specifications."
    },
    {
      id: 4,
      title: "Production",
      desc: "Full-scale manufacturing with real-time quality monitoring throughout the process."
    }
  ];

  return (
    <div className="text-center">
      <motion.h2 
        initial={{opacity:0, y:20}} 
        whileInView={{opacity:1, y:0}} 
        viewport={{once:true}}
        className="text-4xl font-bold text-[var(--color-primary)] mb-6"
      >
        Our Manufacturing Process
      </motion.h2>
      <motion.p 
        initial={{opacity:0, y:20}} 
        whileInView={{opacity:1, y:0}} 
        viewport={{once:true}}
        transition={{delay:0.2}}
        className="text-xl text-gray-600 max-w-3xl mx-auto mb-16"
      >
        From concept to completion, we follow a rigorous process to ensure quality and precision in every component we manufacture.
      </motion.p>

      <div className="relative">
        {/* Connecting line */}
        <div className="absolute left-1/2 top-16 bottom-16 w-1 bg-[var(--color-primary)] transform -translate-x-1/2 hidden md:block"></div>
        
        <div className="grid md:grid-cols-2 gap-12 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className={`relative pl-8 md:pl-0 md:pr-8 ${index % 2 === 0 ? 'md:text-right md:pr-16 md:pl-0' : 'md:text-left md:pl-16 md:pr-0'} md:col-start-${index % 2 === 0 ? '1' : '2'}`}
              initial={{opacity:0, x: index % 2 === 0 ? -30 : 30}}
              whileInView={{opacity:1, x: 0}}
              viewport={{once:true}}
              transition={{delay: index * 0.2, duration: 0.6}}
            >
              {/* Number badge */}
              <motion.div 
                className="absolute top-0 left-0 md:left-auto w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-xl z-10 md:relative md:mx-auto"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
              >
                {step.id}
              </motion.div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 md:mt-6">
                <motion.h3 
                  className="text-2xl font-bold text-[var(--color-primary)] mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                >
                  {step.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                >
                  {step.desc}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}