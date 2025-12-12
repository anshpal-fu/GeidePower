import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-5xl font-bold text-[var(--color-primary)] mb-4 sm:mb-6"
        >
          Get in Touch
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-md sm:text-xl text-gray-600 max-w-3xl mx-auto px-2"
        >
          Have a project in mind? Contact our team today to discuss your bike or car parts manufacturing needs.
        </motion.p>
      </div>

      {/* Contact Info & Form Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 mb-12">
        
        {/* Contact Information */}
        <div className="lg:col-span-1 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-[var(--color-accent)] to-white rounded-2xl p-6 shadow-lg border border-gray-100"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-primary)] mb-4">
              Contact Information
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)] flex items-center justify-center text-white">
                  📧
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Email</p>
                  <p className="text-gray-600 text-sm">info@geidelpower.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)] flex items-center justify-center text-white">
                  📞
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Phone</p>
                  <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)] flex items-center justify-center text-white">
                  📍
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Address</p>
                  <p className="text-gray-600 text-sm">123 Manufacturing Ave, Industrial Park, CA 90210</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)] flex items-center justify-center text-white">
                  🕒
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Business Hours</p>
                  <p className="text-gray-600 text-sm">Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600 text-sm">Sat: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>

      {/* Map or Additional Info (Optional) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-[var(--color-primary)] to-[#002a52] rounded-2xl p-8 sm:p-12 text-center text-white mb-8 sm:mb-12"
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">
          Why Choose Geidel Power?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-[var(--color-secondary)] mb-2">15+</div>
            <p className="text-gray-200">Years Experience</p>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-[var(--color-secondary)] mb-2">500+</div>
            <p className="text-gray-200">Projects Completed</p>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-[var(--color-secondary)] mb-2">24/7</div>
            <p className="text-gray-200">Support Available</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
