import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "What materials do you work with?",
    answer: "We specialize in a wide range of materials including aluminum alloys, steel, titanium, carbon fiber, and specialized composites. Our expertise allows us to select the optimal material for your specific application, balancing factors like strength, weight, and cost."
  },
  {
    id: 2,
    question: "What is your typical turnaround time?",
    answer: "Turnaround times vary based on project complexity and volume. Simple prototypes can be completed in 2-3 weeks, while larger production runs typically take 4-6 weeks. We always work with clients to meet their deadlines and offer expedited services for urgent projects."
  },
  {
    id: 3,
    question: "Do you offer design assistance?",
    answer: "Absolutely! Our engineering team provides comprehensive design support, from initial concept development to final production-ready designs. We can help optimize your parts for manufacturability, performance, and cost-effectiveness."
  },
  {
    id: 4,
    question: "What quality standards do you maintain?",
    answer: "We adhere to stringent quality standards including ISO 9001 certification. Every part undergoes rigorous inspection using coordinate measuring machines (CMM) and other precision measurement tools. We maintain detailed quality documentation for all our products."
  },
  {
    id: 5,
    question: "Can you handle both small and large orders?",
    answer: "Yes, we accommodate projects ranging from single prototypes to high-volume production runs. Our flexible manufacturing capabilities allow us to scale efficiently to meet your specific quantity requirements."
  },
  {
    id: 6,
    question: "Do you ship internationally?",
    answer: "Yes, we ship worldwide with reliable logistics partners. We handle all export documentation and customs requirements, ensuring your parts arrive safely and on time, regardless of destination."
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full bg-[radial-gradient(ellipse_at_top_right,#ffffff_0%,#f7fbff_40%,#eef6ff_100%)] min-h-screen">
      <div className="container mx-auto px-6 py-20">
        <motion.h1 
          initial={{opacity:0, y:20}} 
          animate={{opacity:1, y:0}} 
          className="text-5xl font-bold text-[var(--color-primary)] mb-6"
        >
          Frequently Asked Questions
        </motion.h1>
        <motion.p 
          initial={{opacity:0, y:20}} 
          animate={{opacity:1, y:0}} 
          transition={{delay:0.2}}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Find answers to common questions about our bike and car parts manufacturing services.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto mb-20">
        {faqs.map((faq, index) => (
          <motion.div
            key={faq.id}
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            transition={{delay: index * 0.1}}
            className="mb-4 border border-gray-200 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full px-8 py-6 text-left flex justify-between items-center bg-white hover:bg-[var(--color-accent)] transition"
            >
              <h3 className="text-xl font-bold text-[var(--color-dark)]">{faq.question}</h3>
              <div className="text-[var(--color-primary)] text-2xl">
                {openId === faq.id ? '-' : '+'}
              </div>
            </button>
            {openId === faq.id && (
              <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-700 text-lg">{faq.answer}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-[var(--color-primary)] to-[#002a52] rounded-3xl p-16 text-center text-white">
        <motion.h2 
          initial={{opacity:0, y:20}} 
          whileInView={{opacity:1, y:0}} 
          className="text-4xl font-bold mb-6"
        >
          Still Have Questions?
        </motion.h2>
        <motion.p 
          initial={{opacity:0, y:20}} 
          whileInView={{opacity:1, y:0}} 
          transition={{delay:0.2}}
          className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
        >
          Our team is ready to provide detailed answers and discuss your specific manufacturing needs.
        </motion.p>
        <motion.div
          initial={{opacity:0, y:20}} 
          whileInView={{opacity:1, y:0}} 
          transition={{delay:0.4}}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="/contact" className="btn-accent">Contact Us</a>
          <a href="tel:+18883417454" className="bg-white text-[var(--color-primary)] px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:bg-gray-100">Call Now</a>
        </motion.div>
      </div>
    </div>
  );
}