import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm(){
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e){
    e.preventDefault();
    // TODO: integrate backend / API
    setSubmitted(true);
    setTimeout(()=> setSubmitted(false), 3000);
  }

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      initial={{opacity:0, y:20}} 
      whileInView={{opacity:1, y:0}} 
      className="card p-8 shadow-lg"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 mb-2 font-medium">Full Name *</label>
          <input required name="name" placeholder="Enter your full name" className="w-full border border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-[var(--color-primary)] outline-none transition" />
        </div>
        <div>
          <label className="block text-gray-700 mb-2 font-medium">Company *</label>
          <input required name="company" placeholder="Enter your company name" className="w-full border border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-[var(--color-primary)] outline-none transition" />
        </div>
        <div>
          <label className="block text-gray-700 mb-2 font-medium">Email *</label>
          <input required name="email" type="email" placeholder="Enter your email" className="w-full border border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-[var(--color-primary)] outline-none transition" />
        </div>
        <div>
          <label className="block text-gray-700 mb-2 font-medium">Phone</label>
          <input name="phone" placeholder="Enter your phone number" className="w-full border border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-[var(--color-primary)] outline-none transition" />
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-gray-700 mb-2 font-medium">Subject *</label>
        <input required name="subject" placeholder="What is this regarding?" className="w-full border border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-[var(--color-primary)] outline-none transition" />
      </div>

      <div className="mt-6">
        <label className="block text-gray-700 mb-2 font-medium">Message *</label>
        <textarea 
          required 
          name="message" 
          rows="6" 
          placeholder="Describe your bike or car parts manufacturing requirements (tolerances, quantities, materials, etc.)" 
          className="w-full border border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-[var(--color-primary)] outline-none transition"
        ></textarea>
      </div>

      <div className="mt-6">
        <label className="block text-gray-700 mb-2 font-medium">Attachments</label>
        <div className="flex items-center gap-4">
          <input type="file" name="blueprint" className="text-sm" />
          <span className="text-gray-600 text-sm">Attach blueprint / drawing (optional)</span>
        </div>
      </div>

      <div className="mt-8">
        <button type="submit" className="btn-accent w-full py-4 text-lg">Send Inquiry</button>
        {submitted && <div className="text-sm text-green-600 mt-4 text-center">Inquiry sent successfully! We'll contact you within 24 hours.</div>}
      </div>
    </motion.form>
  );
}