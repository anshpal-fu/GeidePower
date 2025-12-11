import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../utils/constants";
import { motion } from "framer-motion";
// Import images from the 19jpg folder
import pistonImage from "../assets/19jpg/Diamond piston with teflon skirt.jpg";
import injectorImage from "../assets/19jpg/High performance Siemens fuel injectors.jpg";
import throttleBodyImage from "../assets/19jpg/85 mm Billet throttle body.jpg";
import ecuImage from "../assets/19jpg/ECU - Engine control uniit.jpg";
import rodImage from "../assets/19jpg/Scat HP connecting rod.jpg";
import exhaustImage from "../assets/19jpg/V-6 Exhaust headers.jpg";
import wheelImage from "../assets/19jpg/5 Stage dry sump oil pump (1).jpg";
import frameImage from "../assets/19jpg/Kawasaki 500 H1 - my introduction to two cycle engines.jpg";

export default function Products() {
  const productsWithImages = PRODUCTS.map(product => {
    let image = pistonImage;

    if (product.name.includes("Carbon Fiber") || product.name.includes("Frame")) {
      image = frameImage;
    } else if (product.name.includes("Brake")) {
      image = injectorImage;
    } else if (product.name.includes("Wheel")) {
      image = wheelImage;
    } else if (product.name.includes("Engine Mounting")) {
      image = ecuImage;
    } else if (product.name.includes("Exhaust")) {
      image = exhaustImage;
    } else if (product.name.includes("Suspension")) {
      image = rodImage;
    } else {
      image = pistonImage;
    }

    return { ...product, image };
  });

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
            Precision Engineered Parts
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl text-gray-600 max-w-2xl md:max-w-3xl mx-auto"
          >
            High-performance components designed and manufactured to exacting standards for both cycling and automotive applications.
          </motion.p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20 justify-items-center">
          {productsWithImages.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="w-full max-w-sm"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-[var(--color-primary)] to-[#002a52] rounded-2xl md:rounded-3xl p-8 md:p-16 text-center text-white"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Start Your Project?</h2>
          <p className="text-base md:text-xl text-gray-300 max-w-2xl md:max-w-3xl mx-auto mb-6 md:mb-10">
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
