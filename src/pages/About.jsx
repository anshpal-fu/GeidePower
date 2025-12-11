import { motion } from "framer-motion";
import teamImage from "../assets/19jpg/5 Stage dry sump oil pump (1).jpg";

export default function About() {
  const values = [
    { title: "Precision Engineering", desc: "Every component is manufactured to exacting tolerances using state-of-the-art equipment and techniques." },
    { title: "Innovation First", desc: "We continuously invest in research and development to stay at the forefront of manufacturing technology." },
    { title: "Customer Focus", desc: "Your success is our success. We work closely with clients to deliver solutions that exceed expectations." },
    { title: "Quality Assurance", desc: "Rigorous testing and inspection protocols ensure every part meets our high standards." }
  ];

  return (
    <div className="w-full mx-auto px-4 sm:px-6 py-0 relative z-10">

      {/* Story Section */}
      <div className="bg-[radial-gradient(circle_at_top_right,_#FFFFFF_0%,_#F7FBFF_40%,_#EEF6FF_100%)] py-10 sm:py-16 px-4 sm:px-6">
        
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-3xl sm:text-5xl font-bold text-[var(--color-primary)] mb-4 sm:mb-6"
          >
            About Geidel Power
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl text-gray-700 max-w-3xl mx-auto px-2"
          >
            Leading the way in precision manufacturing for the biking and automotive industries since 2010.
          </motion.p>
        </div>

        {/* Story Grid */}
        <div className="grid md:grid-cols-2 gap-10 sm:gap-16 items-center">

          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
            className="px-1 sm:px-0"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] mb-4 sm:mb-6">
              Our Story
            </h2>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-sm">
              <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                <p>Founded in 2010 by engineering veterans with decades of experience in precision manufacturing, Geidel Power began as a small workshop with big ambitions.</p>
                <p>Today, we operate a 50,000 sq ft facility equipped with the latest CNC machines, 3D printers, and quality control equipment.</p>
                <p>From custom bike frames to high-performance engine components, we deliver excellence across every project.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full flex justify-center"
          >
            <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-full h-full bg-gradient-to-br from-[#FFF5CC] to-[#FFF9E6] rounded-3xl z-0"></div>
            
            <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 border border-gray-100 z-10 w-full">
              <img 
                src={teamImage} 
                alt="Geidel Power Team" 
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </motion.div>

        </div>
      </div>


      {/* Core Values Section */}
      <div className="bg-[#ffffff] pt-10 pb-12 sm:pb-16 px-4 sm:px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] text-center mb-10 sm:mb-16"
        >
          Our Core Values
        </motion.h2>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#F5F9FD] to-[#E6F0FA] rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-lg text-center"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-br from-[#ADD8E6] to-[#B0D4EB] flex items-center justify-center mx-auto mb-5 sm:mb-6">
                {index === 0 && <IconClipboard />}
                {index === 1 && <IconBolt />}
                {index === 2 && <IconUser />}
                {index === 3 && <IconShield />}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-primary)] mb-2 sm:mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>


      {/* CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-[var(--color-primary)] to-[#002a52] rounded-3xl px-4 py-12 sm:px-6 py-12 sm:py-16 text-center text-white p-4 sm:p-6 mb-8 sm:mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-10">
          Contact our team today to discuss your bike or car parts manufacturing needs.
        </p>
        <a href="/contact" className="btn-accent inline-block text-base sm:text-lg px-6 py-3">
          Get in Touch
        </a>
      </motion.div>

    </div>
  );
}

/* Simple Icons */
function IconClipboard() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  );
}
function IconBolt() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}
function IconUser() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}
