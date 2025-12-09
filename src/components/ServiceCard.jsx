import { motion } from "framer-motion";
// Import images from the 19jpg folder for consistency
import bikeImage from "../assets/19jpg/Kawasaki 500 H1 - my introduction to two cycle engines.jpg";
import automotiveImage from "../assets/19jpg/High performance Siemens fuel injectors.jpg";
import prototypingImage from "../assets/19jpg/85 mm Billet throttle body.jpg";
import qualityImage from "../assets/19jpg/ECU - Engine control uniit.jpg";

const serviceImages = {
  "Bike Component Manufacturing": bikeImage,
  "Automotive Precision Parts": automotiveImage,
  "Rapid Prototyping": prototypingImage,
  "Quality Assurance": qualityImage
};

export default function ServiceCard({ service }) {
  const imageSrc = serviceImages[service.title] || bikeImage;
  
  return (
    <motion.div 
      whileHover={{ y: -10, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 card-border h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      <div className="h-48 overflow-hidden relative">
        <motion.img 
          src={imageSrc} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-500"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300"
          whileHover={{ opacity: 1 }}
        ></motion.div>
      </div>
      <div className="p-6">
        <motion.h3 
          className="text-xl font-bold text-[var(--color-primary)] mb-3"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          {service.title}
        </motion.h3>
        <motion.p 
          className="text-gray-600 mb-4"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {service.desc}
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
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
}