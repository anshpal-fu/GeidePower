import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function QuoteRequestModal({ isOpen, onClose, productName }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    quantity: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        quantity: "",
        message: "",
      });
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-[var(--color-primary)] to-[#002a52] text-white p-6 rounded-t-2xl flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">Request a Quote</h2>
                  {productName && (
                    <p className="text-gray-200 text-sm mt-1">For: {productName}</p>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="text-white hover:text-gray-200 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Close modal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6">
                {!submitted ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] outline-none min-h-[44px]"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] outline-none min-h-[44px]"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] outline-none min-h-[44px]"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] outline-none min-h-[44px]"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2 font-medium">
                        Quantity *
                      </label>
                      <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        required
                        min="1"
                        className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] outline-none min-h-[44px]"
                        placeholder="Number of units needed"
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block text-gray-700 mb-2 font-medium">
                        Additional Requirements
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] outline-none"
                        placeholder="Specify tolerances, materials, delivery timeline, or any other requirements..."
                      ></textarea>
                    </div>

                    <div className="flex gap-3 justify-end">
                      <button
                        type="button"
                        onClick={onClose}
                        className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors min-h-[44px] font-medium"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn-accent"
                      >
                        Submit Request
                      </button>
                    </div>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Quote Request Submitted!
                    </h3>
                    <p className="text-gray-600">
                      We'll get back to you within 24 hours with a detailed quote.
                    </p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
