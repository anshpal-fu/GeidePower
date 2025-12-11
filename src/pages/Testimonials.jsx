import { motion } from "framer-motion";
import crankshaftImage from "../assets/Crankshaft - six cylinders seven mains.jpg";
import oilPumpImage from "../assets/Wet sump oil pump.jpg";
import turbochargerImage from "../assets/Turbocharger with waste gate.jpg";
import superchargerImage from "../assets/Whipple supercharger.jpg";
import ossaMotorcycleImage from "../assets/Ossa Trials Motorcycle 1970s.jpg";
import geidelPoweredImage from "../assets/Powered by Geidel.jpg";

const testimonials = [
  {
    id: 1,
    name: "Michael Rodriguez",
    role: "Professional Cyclist",
    company: "Team Velocity Racing",
    image: ossaMotorcycleImage,
    quote: "The carbon fiber frame from Velocity Parts gave me the competitive edge I needed. Lightweight yet incredibly strong - perfect for racing conditions."
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Automotive Engineer",
    company: "Premier Auto Works",
    image: turbochargerImage,
    quote: "Their precision-engineered brake components have become our go-to choice for high-performance vehicles. Consistent quality and timely delivery."
  },
  {
    id: 3,
    name: "David Chen",
    role: "Bike Shop Owner",
    company: "Urban Cycles",
    image: oilPumpImage,
    quote: "Our customers love the custom parts we get from Velocity Parts. The attention to detail and finish quality is unmatched in the industry."
  },
  {
    id: 4,
    name: "Jennifer Williams",
    role: "Fleet Manager",
    company: "Metro Delivery Services",
    image: geidelPoweredImage,
    quote: "Switching to Velocity Parts for our commercial vehicle components reduced our maintenance costs by 30%. Their durability is impressive."
  }
];

export default function Testimonials() {
  return (
    <div className="w-full bg-[radial-gradient(ellipse_at_top_right,#ffffff_0%,#e6f0fa_50%,#cce5ff_100%)] min-h-screen px-4 sm:px-6 md:px-16 py-12 md:py-20">
      
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <motion.h1 
          initial={{opacity:0, y:20}} 
          animate={{opacity:1, y:0}} 
          className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] mb-4 md:mb-6"
        >
          Client Testimonials
        </motion.h1>
        <motion.p 
          initial={{opacity:0, y:20}} 
          animate={{opacity:1, y:0}} 
          transition={{delay:0.2}}
          className="text-base md:text-xl text-gray-600 max-w-2xl md:max-w-3xl mx-auto"
        >
          Hear what our clients say about our precision-engineered bike and car parts.
        </motion.p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-20">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            transition={{delay: index * 0.1}}
            className="bg-gradient-to-br from-[var(--color-accent)] to-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-lg"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4 md:mb-6">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
              />
              <div className="text-center sm:text-left">
                <h3 className="text-lg md:text-xl font-bold text-[var(--color-dark)]">{testimonial.name}</h3>
                <p className="text-gray-600 text-sm md:text-base">{testimonial.role}</p>
                <p className="text-[var(--color-primary)] font-medium text-sm md:text-base">{testimonial.company}</p>
              </div>
            </div>
            <p className="text-gray-700 text-base md:text-lg italic">"{testimonial.quote}"</p>
            <div className="flex justify-center sm:justify-start text-[var(--color-secondary)] mt-3 md:mt-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-[var(--color-primary)] rounded-2xl md:rounded-3xl p-8 md:p-16 text-center text-white">
        <motion.h2 
          initial={{opacity:0, y:20}} 
          whileInView={{opacity:1, y:0}} 
          className="text-2xl md:text-4xl font-bold mb-4 md:mb-6"
        >
          Join Our Growing Community
        </motion.h2>
        <motion.p 
          initial={{opacity:0, y:20}} 
          whileInView={{opacity:1, y:0}} 
          transition={{delay:0.2}}
          className="text-base md:text-xl text-gray-300 max-w-2xl md:max-w-3xl mx-auto mb-4 md:mb-10"
        >
          Become part of our network of satisfied clients who trust us for their precision manufacturing needs.
        </motion.p>
        <motion.div
          initial={{opacity:0, y:20}} 
          whileInView={{opacity:1, y:0}} 
          transition={{delay:0.4}}
        >
          <a href="/contact" className="btn-accent inline-block px-4 md:px-6 py-2 md:py-3">
            Get Started Today
          </a>
        </motion.div>
      </div>

    </div>
  );
}
