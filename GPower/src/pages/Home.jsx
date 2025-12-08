import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import ProductCard from "../components/ProductCard";
import ManufacturingProcess from "../components/ManufacturingProcess";
import { SERVICES } from "../utils/constants";
import { PRODUCTS } from "../utils/constants";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 bg-[var(--color-light)]">
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
                transition={{delay: index * 0.1}}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="/services" className="btn-secondary px-8 py-3 inline-block">View All Services</a>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
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
            {PRODUCTS.slice(0, 3).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{delay: index * 0.1}}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="/products" className="btn-secondary px-8 py-3 inline-block">View All Products</a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[var(--color-primary)] to-[#002a52] text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <motion.div 
              initial={{opacity:0, y:20}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}}
              className="p-6"
            >
              <div className="text-5xl font-bold text-[var(--color-secondary)] mb-2">500+</div>
              <div className="text-xl">Projects Completed</div>
            </motion.div>
            
            <motion.div 
              initial={{opacity:0, y:20}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}}
              transition={{delay:0.1}}
              className="p-6"
            >
              <div className="text-5xl font-bold text-[var(--color-secondary)] mb-2">98%</div>
              <div className="text-xl">Client Satisfaction</div>
            </motion.div>
            
            <motion.div 
              initial={{opacity:0, y:20}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}}
              transition={{delay:0.2}}
              className="p-6"
            >
              <div className="text-5xl font-bold text-[var(--color-secondary)] mb-2">24/7</div>
              <div className="text-xl">Support Available</div>
            </motion.div>
            
            <motion.div 
              initial={{opacity:0, y:20}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}}
              transition={{delay:0.3}}
              className="p-6"
            >
              <div className="text-5xl font-bold text-[var(--color-secondary)] mb-2">15+</div>
              <div className="text-xl">Years Experience</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ManufacturingProcess />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--color-accent)]">
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
            <a href="/contact" className="btn-accent inline-block px-8 py-4 text-lg">Request a Quote</a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}