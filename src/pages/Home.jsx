import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import ProductCard from "../components/ProductCard";
import ManufacturingProcess from "../components/ManufacturingProcess";
import { SERVICES } from "../utils/constants";
import { PRODUCTS } from "../utils/constants";
import { motion } from "framer-motion";
import crankshaftImage from "../assets/Crankshaft - six cylinders seven mains.jpg";
import oilPumpImage from "../assets/19jpg/5 Stage dry sump oil pump (1).jpg";
import turbochargerImage from "../assets/19jpg/High performance Siemens fuel injectors.jpg";

export default function Home() {
  // Use local images for featured products
  const featuredProducts = [...PRODUCTS].slice(0, 3);
  featuredProducts[0] = {...featuredProducts[0], image: crankshaftImage};
  featuredProducts[1] = {...featuredProducts[1], image: oilPumpImage};
  featuredProducts[2] = {...featuredProducts[2], image: turbochargerImage};

  return (
    <div>
      <Hero />
      
      {/* Services Section */}
      <motion.section 
        className="py-20 bg-[var(--color-accent)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{opacity:0, y:20}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}}
              className="text-4xl font-bold text-[var(--color-primary)] mb-4"
            >
              Our Services
            </motion.h2>
            <motion.p 
              initial={{opacity:0, y:20}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}}
              transition={{delay:0.2}}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Comprehensive manufacturing solutions tailored to your specific bike and car parts requirements.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service, index) => (
              <div key={service.id} className="flex">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <motion.a 
              href="/services" 
              className="btn-secondary px-8 py-3 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Services
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* Featured Products */}
      <motion.section 
        className="py-20 bg-[var(--color-light)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{opacity:0, y:20}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}}
              className="text-4xl font-bold text-[var(--color-primary)] mb-4"
            >
              Featured Products
            </motion.h2>
            <motion.p 
              initial={{opacity:0, y:20}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}}
              transition={{delay:0.2}}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Precision-engineered components designed for peak performance and durability.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{delay: index * 0.1, duration: 0.5}}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <motion.a 
              href="/products" 
              className="btn-secondary px-8 py-3 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Products
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-[var(--color-primary)] to-[#002a52] text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <motion.div 
              initial={{opacity:0, y:20}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}}
              className="p-6"
            >
              <motion.div 
                className="text-5xl font-bold text-[var(--color-secondary)] mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                500+
              </motion.div>
              <div className="text-xl">Projects Completed</div>
            </motion.div>
            
            <motion.div 
              initial={{opacity:0, y:20}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}}
              transition={{delay:0.1}}
              className="p-6"
            >
              <motion.div 
                className="text-5xl font-bold text-[var(--color-secondary)] mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              >
                98%
              </motion.div>
              <div className="text-xl">Client Satisfaction</div>
            </motion.div>
            
            <motion.div 
              initial={{opacity:0, y:20}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}}
              transition={{delay:0.2}}
              className="p-6"
            >
              <motion.div 
                className="text-5xl font-bold text-[var(--color-secondary)] mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
              >
                24/7
              </motion.div>
              <div className="text-xl">Support Available</div>
            </motion.div>
            
            <motion.div 
              initial={{opacity:0, y:20}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}}
              transition={{delay:0.3}}
              className="p-6"
            >
              <motion.div 
                className="text-5xl font-bold text-[var(--color-secondary)] mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              >
                15+
              </motion.div>
              <div className="text-xl">Years Experience</div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Manufacturing Process */}
      <motion.section 
        className="py-20 bg-[var(--color-secondary)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <ManufacturingProcess />
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            viewport={{once:true}}
            className="bg-gradient-to-r from-[var(--color-primary)] to-[#002a52] rounded-3xl p-16 text-center text-white"
          >
            <motion.h2 
              initial={{opacity:0, y:20}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}}
              className="text-4xl font-bold mb-6"
            >
              Ready to Start Your Project?
            </motion.h2>
            <motion.p 
              initial={{opacity:0, y:20}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}}
              transition={{delay:0.2}}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
            >
              Contact our team today to discuss your bike or car parts manufacturing needs.
            </motion.p>
            <motion.div
              initial={{opacity:0, y:20}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}}
              transition={{delay:0.4}}
            >
              <motion.a 
                href="/contact" 
                className="btn-accent inline-block"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        className="py-20 bg-[var(--color-light)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{opacity:0, y:20}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}}
              className="text-4xl font-bold text-[var(--color-primary)] mb-4"
            >
              Client Testimonials
            </motion.h2>
            <motion.p 
              initial={{opacity:0, y:20}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}}
              transition={{delay:0.2}}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Hear what our clients say about our precision-engineered bike and car parts.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {[
              {
                id: 1,
                name: "Michael Rodriguez",
                role: "Professional Cyclist",
                company: "Team Velocity Racing",
                image: crankshaftImage,
                quote: "The carbon fiber frame from Velocity Parts gave me the competitive edge I needed. Lightweight yet incredibly strong - perfect for racing conditions."
              },
              {
                id: 2,
                name: "Sarah Johnson",
                role: "Automotive Engineer",
                company: "Premier Auto Works",
                image: "../assets/Wet sump oil pump.jpg",
                quote: "Their precision-engineered brake components have become our go-to choice for high-performance vehicles. Consistent quality and timely delivery."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                transition={{delay: index * 0.1}}
                className="bg-gradient-to-br from-[var(--color-accent)] to-white rounded-2xl p-8 border border-gray-100 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">👤</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-dark)]">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <p className="text-[var(--color-primary)] font-medium">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-lg italic">"{testimonial.quote}"</p>
                <div className="flex text-[var(--color-secondary)] mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.a 
              href="/testimonials" 
              className="btn-secondary px-8 py-3 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Testimonials
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        className="py-20 bg-[var(--color-secondary)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{opacity:0, y:20}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}}
              className="text-4xl font-bold text-[var(--color-primary)] mb-4"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p 
              initial={{opacity:0, y:20}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}}
              transition={{delay:0.2}}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Find answers to common questions about our bike and car parts manufacturing services.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-12">
            {[
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
              }
            ].map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                transition={{delay: index * 0.1}}
                className="border border-gray-200 rounded-xl overflow-hidden h-full"
              >
                <div className={`px-6 py-4 text-left flex justify-between items-center transition ${index % 2 === 0 ? 'bg-white hover:bg-[var(--color-accent)]' : 'bg-gray-50 hover:bg-[var(--color-secondary)]'}`}>
                  <h3 className="text-lg font-bold text-[var(--color-dark)]">{faq.question}</h3>
                  <div className="text-[var(--color-primary)] text-xl">
                    +
                  </div>
                </div>
                <div className={`px-6 py-4 border-t border-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.a 
              href="/faq" 
              className="btn-secondary px-8 py-3 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All FAQs
            </motion.a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}