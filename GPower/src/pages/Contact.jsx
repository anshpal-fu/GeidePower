import ContactForm from "../components/ContactForm";
import { CONTACT } from "../utils/constants";
import { motion } from "framer-motion";

export default function Contact(){
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{opacity:0, y:20}} 
          animate={{opacity:1, y:0}} 
          className="text-5xl font-bold text-[var(--color-primary)] mb-6"
        >
          Contact Our Team
        </motion.h1>
        <motion.p 
          initial={{opacity:0, y:20}} 
          animate={{opacity:1, y:0}} 
          transition={{delay:0.2}}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Reach out to our experts for inquiries, quotes, or to discuss your manufacturing requirements.
        </motion.p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-16 mb-20">
        <motion.div 
          initial={{opacity:0, x:-20}} 
          animate={{opacity:1, x:0}} 
          transition={{duration:0.5}}
          className="bg-gradient-to-br from-[var(--color-accent)] to-white rounded-2xl p-10 border border-gray-100 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-8">Contact Information</h2>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[var(--color-secondary)] flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--color-dark)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-dark)] mb-1">Phone</h3>
                <p className="text-gray-700 text-lg">{CONTACT.phone}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[var(--color-secondary)] flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--color-dark)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-dark)] mb-1">Email</h3>
                <p className="text-gray-700 text-lg">info@{CONTACT.domainPreferred}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[var(--color-secondary)] flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--color-dark)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-dark)] mb-1">Address</h3>
                <p className="text-gray-700 text-lg">{CONTACT.address}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[var(--color-secondary)] flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--color-dark)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-dark)] mb-1">Business Hours</h3>
                <p className="text-gray-700 text-lg">Monday - Friday: 8AM - 6PM</p>
                <p className="text-gray-700 text-lg">Saturday: 9AM - 1PM</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{opacity:0, x:20}} 
          animate={{opacity:1, x:0}} 
          transition={{duration:0.5, delay:0.2}}
        >
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-2">Get in Touch</h2>
            <p className="text-gray-600 text-lg">Fill out the form below and our team will contact you within 24 hours.</p>
          </div>
          <ContactForm />
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
          Contact us today to discuss your bike or car parts manufacturing needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:{CONTACT.phone}" className="btn-accent">Call Now</a>
          <a href="mailto:info@{CONTACT.domainPreferred}" className="bg-white text-[var(--color-primary)] px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:bg-gray-100">Email Us</a>
        </div>
      </motion.div>
    </div>
  )
}