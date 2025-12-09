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
              <motion.div
                key={service.id}
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{delay: index * 0.1, duration: 0.5}}
              >
                <ServiceCard service={service} />
              </motion.div>
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
        className="py-20"
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
        className="py-20"
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
        className="py-20 bg-[var(--color-accent)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            viewport={{once:true}}
            className="text-4xl font-bold text-[var(--color-primary)] mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            viewport={{once:true}}
            transition={{delay:0.2}}
            className="text-xl text-gray-700 max-w-3xl mx-auto mb-10"
          >
            Contact us today for a consultation on your bike or car parts manufacturing needs.
          </motion.p>
          <motion.div
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            viewport={{once:true}}
            transition={{delay:0.4}}
          >
            <motion.a 
              href="/contact" 
              className="btn-accent inline-block px-8 py-4 text-lg"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Request a Quote
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}