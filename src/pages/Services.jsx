import ServiceCard from "../components/ServiceCard";
import { SERVICES } from "../utils/constants";
import { motion } from "framer-motion";
import facilityImage from "../assets/5 Stage dry sump oil pump.jpg";

export default function Services() {
  return (
    <div className="w-full bg-[radial-gradient(ellipse_at_top_right,#ffffff_0%,#e6f0fa_50%,#cce5ff_100%)] min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] mb-4 md:mb-6"
          >
            Manufacturing Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl text-gray-600 max-w-2xl md:max-w-3xl mx-auto"
          >
            From concept to completion, our services cover the full manufacturing lifecycle with precision and innovation.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-20">
          {SERVICES.map((s) => (
            <div key={s.id} className="flex h-full w-full">
              <ServiceCard service={s} />
            </div>
          ))}
        </div>

        {/* Facility Section */}
        <div className="flex flex-col md:flex-row md:gap-12 items-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 mb-8 md:mb-0"
          >
            <img
              src={facilityImage}
              alt="Advanced Manufacturing Facility"
              className="rounded-2xl w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2 bg-gradient-to-br from-[var(--color-accent)] to-white rounded-2xl p-6 md:p-10 border border-gray-100"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-4 md:mb-6">
              State-of-the-Art Facilities
            </h2>
            <div className="space-y-3 md:space-y-4 text-gray-700 text-base md:text-lg">
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-[var(--color-primary)] to-[#002a52] rounded-2xl md:rounded-3xl p-8 md:p-16 text-center text-white"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-base md:text-xl text-gray-300 max-w-2xl md:max-w-3xl mx-auto mb-4 md:mb-10">
            Contact our team today to discuss your bike or car parts manufacturing needs.
          </p>
          <a href="/contact" className="btn-accent inline-block px-4 md:px-6 py-2 md:py-3">
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
}
