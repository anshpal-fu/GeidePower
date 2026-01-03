import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="card p-4 sm:p-6 md:p-8 shadow-lg rounded-xl bg-white w-full"
    >
      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label className="block text-gray-700 mb-2 font-medium text-sm sm:text-base">
            Full Name *
          </label>
          <input
            required
            name="name"
            placeholder="Enter your full name"
            className="w-full border border-gray-300 p-3 sm:p-4 rounded-lg text-sm sm:text-base focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-[var(--color-primary)] outline-none transition"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2 font-medium text-sm sm:text-base">
            Company *
          </label>
          <input
            required
            name="company"
            placeholder="Enter your company name"
            className="w-full border border-gray-300 p-3 sm:p-4 rounded-lg text-sm sm:text-base focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-[var(--color-primary)] outline-none transition"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2 font-medium text-sm sm:text-base">
            Email *
          </label>
          <input
            required
            name="email"
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 p-3 sm:p-4 rounded-lg text-sm sm:text-base focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-[var(--color-primary)] outline-none transition"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2 font-medium text-sm sm:text-base">
            Phone
          </label>
          <input
            name="phone"
            placeholder="Enter your phone number"
            className="w-full border border-gray-300 p-3 sm:p-4 rounded-lg text-sm sm:text-base focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-[var(--color-primary)] outline-none transition"
          />
        </div>
      </div>

      {/* Subject */}
      <div className="mt-4 sm:mt-6">
        <label className="block text-gray-700 mb-2 font-medium text-sm sm:text-base">
          Subject *
        </label>
        <input
          required
          name="subject"
          placeholder="What is this regarding?"
          className="w-full border border-gray-300 p-3 sm:p-4 rounded-lg text-sm sm:text-base focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-[var(--color-primary)] outline-none transition"
        />
      </div>

      {/* Message */}
      <div className="mt-4 sm:mt-6">
        <label className="block text-gray-700 mb-2 font-medium text-sm sm:text-base">
          Message *
        </label>
        <textarea
          required
          name="message"
          rows="6"
          placeholder="Describe your bike or car parts manufacturing requirements (tolerances, quantities, materials, etc.)"
          className="w-full border border-gray-300 p-3 sm:p-4 rounded-lg text-sm sm:text-base focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-[var(--color-primary)] outline-none transition"
        ></textarea>
      </div>

      {/* File Upload */}
      <div className="mt-4 sm:mt-6">
        <label className="block text-gray-700 mb-2 font-medium text-sm sm:text-base">
          Attachments
        </label>
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
          <input type="file" name="blueprint" className="text-xs sm:text-sm" />
          <span className="text-gray-600 text-xs sm:text-sm">
            Attach blueprint / drawing (optional)
          </span>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-6 sm:mt-8">
        <button
          type="submit"
          className="btn-accent w-full py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg"
        >
          Send Inquiry
        </button>

        {submitted && (
          <div className="text-sm text-green-600 mt-4 text-center">
            Inquiry sent successfully! We'll contact you within 24 hours.
          </div>
        )}
      </div>
    </motion.form>
  );
}
