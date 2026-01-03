import { motion } from "framer-motion";
import bikeImage from "../assets/19jpg/Kawasaki 500 H1 - my introduction to two cycle engines.jpg";
import automotiveImage from "../assets/19jpg/High performance Siemens fuel injectors.jpg";
import prototypingImage from "../assets/19jpg/85 mm Billet throttle body.jpg";
import qualityImage from "../assets/19jpg/ECU - Engine control uniit.jpg";

const serviceImages = {
  "Bike Component Manufacturing": bikeImage,
  "Automotive Precision Parts": automotiveImage,
  "Rapid Prototyping": prototypingImage,
  "Quality Assurance": qualityImage,
};

export default function ServiceCard({ service }) {
  const imageSrc = serviceImages[service.title] || bikeImage;

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className="bg-white rounded-2xl overflow-hidden border border-gray-100 h-full flex flex-col shadow-sm hover:shadow-xl transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 110 }}
    >
      {/* Image */}
      <div className="h-48 flex items-center justify-center overflow-hidden relative">
        <motion.img
          src={imageSrc}
          alt={service.title}
          className="w-full h-full object-contain"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <motion.h3
          className="text-xl font-bold text-[var(--color-primary)] mb-3 leading-tight"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          {service.title}
        </motion.h3>

        <motion.p
          className="text-gray-600 flex-grow mb-4"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {service.desc}
        </motion.p>

        <motion.a
          href="/contact"
          className="text-[#FFD447] font-bold inline-flex items-center mt-auto group"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Learn More
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
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
    </motion.div>
  );
}
