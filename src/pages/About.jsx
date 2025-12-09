import { motion } from "framer-motion";
import teamImage from "../assets/19jpg/5 Stage dry sump oil pump (1).jpg";

export default function About() {
  const values = [
    {
      title: "Precision Engineering",
      desc: "Every component is manufactured to exacting tolerances using state-of-the-art equipment and techniques."
    },
    {
      title: "Innovation First",
      desc: "We continuously invest in research and development to stay at the forefront of manufacturing technology."
    },
    {
      title: "Customer Focus",
      desc: "Your success is our success. We work closely with clients to deliver solutions that exceed expectations."
    },
    {
      title: "Quality Assurance",
      desc: "Rigorous testing and inspection protocols ensure every part meets our high standards."
    }
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-5xl font-bold text-[var(--color-primary)] mb-6"
        >
          About Geidel Power
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Leading the way in precision manufacturing for the biking and automotive industries since 2010.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-700 text-lg">
            <p>
              Founded in 2010 by engineering veterans with decades of experience in precision manufacturing, 
              Geidel Power began as a small workshop with big ambitions.
            </p>
            <p>
              Today, we operate a 50,000 square foot facility equipped with the latest CNC machining centers, 
              3D printers, and quality control equipment. Our team of over 100 skilled technicians and engineers 
              serve clients across the globe.
            </p>
            <p>
              From custom bike frames for professional racers to high-performance engine components for luxury 
              automotive manufacturers, we pride ourselves on delivering excellence in every project.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -top-6 -right-6 w-full h-full border-4 border-[var(--color-secondary)] rounded-2xl z-0"></div>
          <div className="relative bg-white rounded-2xl shadow-xl p-6 border border-gray-100 z-10">
            <img 
              src={teamImage} 
              alt="Geidel Power Team" 
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </motion.div>
      </div>

      <div className="mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          className="text-4xl font-bold text-[var(--color-primary)] text-center mb-16"
        >
          Our Core Values
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-[var(--color-accent)] to-white rounded-2xl p-8 border border-gray-100 shadow-lg text-center h-full"
            >
              <div className="w-16 h-16 rounded-lg bg-[var(--color-primary)] flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-[var(--color-secondary)] rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-[var(--color-primary)] to-[#002a52] rounded-3xl p-16 text-center text-white"
      >
        <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Contact our team today to discuss your bike or car parts manufacturing needs.
        </p>
        <a href="/contact" className="btn-accent inline-block">Get in Touch</a>
      </motion.div>
    </div>
  );
}