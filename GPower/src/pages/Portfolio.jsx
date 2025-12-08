import { motion } from "framer-motion";

const portfolioItems = [
  {
    id: 1,
    title: "Carbon Fiber Racing Bike Frame",
    category: "Bike Parts",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Performance Brake Caliper Set",
    category: "Car Parts",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Forged Alloy Wheel Set",
    category: "Universal",
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Turbocharger Housing",
    category: "Car Parts",
    image: "https://images.unsplash.com/photo-1543082558-485707dae1f4?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Mountain Bike Suspension Fork",
    category: "Bike Parts",
    image: "https://images.unsplash.com/photo-1507151230097-015838b9cb77?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Engine Mounting System",
    category: "Car Parts",
    image: "https://images.unsplash.com/photo-1545997945-70ed5d20c6ff?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Portfolio() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{opacity:0, y:20}} 
          animate={{opacity:1, y:0}} 
          className="text-5xl font-bold text-[var(--color-primary)] mb-6"
        >
          Our Portfolio
        </motion.h1>
        <motion.p 
          initial={{opacity:0, y:20}} 
          animate={{opacity:1, y:0}} 
          transition={{delay:0.2}}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Explore our precision-engineered bike and car parts that power champions and enthusiasts worldwide.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            transition={{delay: index * 0.1}}
            className="group overflow-hidden rounded-2xl shadow-lg"
          >
            <div className="relative overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-[var(--color-secondary)] text-[var(--color-dark)] px-3 py-1 rounded-full text-sm font-bold inline-block mb-2">
                  {item.category}
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{opacity:0, y:20}} 
        whileInView={{opacity:1, y:0}} 
        transition={{duration:0.5}}
        className="bg-gradient-to-r from-[var(--color-primary)] to-[#002a52] rounded-3xl p-16 text-center text-white"
      >
        <h2 className="text-4xl font-bold mb-6">Interested in Our Work?</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Contact us today to discuss your bike or car parts manufacturing needs.
        </p>
        <a href="/contact" className="btn-accent inline-block">Get in Touch</a>
      </motion.div>
    </div>
  );
}