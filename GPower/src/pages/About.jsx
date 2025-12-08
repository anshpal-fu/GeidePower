import { motion } from "framer-motion";

export default function About(){
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{opacity:0, y:-10}} 
          animate={{opacity:1, y:0}} 
          className="text-5xl font-bold text-[var(--color-primary)] mb-6"
        >
          About Velocity Parts
        </motion.h1>
        <motion.p 
          initial={{opacity:0, y:-10}} 
          animate={{opacity:1, y:0}} 
          transition={{delay:0.2}}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Revolutionizing bike and car parts manufacturing with precision engineering and innovative design.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
        <motion.div 
          initial={{opacity:0, x:-20}} 
          whileInView={{opacity:1, x:0}} 
          transition={{duration:0.5}}
          className="bg-gradient-to-br from-[var(--color-accent)] to-white rounded-2xl p-10 border border-gray-100 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">Our Story</h2>
          <div className="space-y-6 text-gray-700 text-lg">
            <p>
              Founded in 2010, Velocity Parts began with a simple mission: to create the highest quality bike and car components 
              that exceed industry standards. What started as a small workshop has evolved into a state-of-the-art manufacturing facility.
            </p>
            <p>
              Our team of engineers and craftsmen combine traditional techniques with cutting-edge technology to produce parts 
              that deliver exceptional performance for both professional athletes and automotive enthusiasts.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{opacity:0, x:20}} 
          whileInView={{opacity:1, x:0}} 
          transition={{duration:0.5, delay:0.2}}
          className="grid grid-cols-2 gap-6"
        >
          <div className="bg-[var(--color-primary)] text-white p-8 rounded-2xl">
            <div className="text-4xl font-bold mb-2">2010</div>
            <div className="text-lg">Founded</div>
          </div>
          <div className="bg-[var(--color-secondary)] text-[var(--color-dark)] p-8 rounded-2xl">
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-lg">Parts Designed</div>
          </div>
          <div className="bg-white border-2 border-[var(--color-primary)] p-8 rounded-2xl">
            <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">99.9%</div>
            <div className="text-lg text-[var(--color-dark)]">Precision Rate</div>
          </div>
          <div className="bg-[var(--color-accent)] p-8 rounded-2xl border border-gray-200">
            <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">24/7</div>
            <div className="text-lg text-[var(--color-dark)]">Support</div>
          </div>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-3 gap-10 mb-20">
        <motion.div 
          initial={{opacity:0, y:20}} 
          whileInView={{opacity:1, y:0}} 
          transition={{duration:0.5}}
          className="text-center p-8 bg-white rounded-2xl border border-gray-100 shadow-md"
        >
          <div className="w-16 h-16 bg-[var(--color-secondary)] rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-8 h-8 bg-[var(--color-primary)] rounded-full"></div>
          </div>
          <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">Innovation</h3>
          <p className="text-gray-600">
            We constantly push boundaries with new materials and manufacturing techniques to deliver superior performance.
          </p>
        </motion.div>

        <motion.div 
          initial={{opacity:0, y:20}} 
          whileInView={{opacity:1, y:0}} 
          transition={{duration:0.5, delay:0.1}}
          className="text-center p-8 bg-white rounded-2xl border border-gray-100 shadow-md"
        >
          <div className="w-16 h-16 bg-[var(--color-secondary)] rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-8 h-8 bg-[var(--color-primary)] rounded-full"></div>
          </div>
          <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">Precision</h3>
          <p className="text-gray-600">
            Every part is manufactured to exacting tolerances using advanced CNC machinery and quality control processes.
          </p>
        </motion.div>

        <motion.div 
          initial={{opacity:0, y:20}} 
          whileInView={{opacity:1, y:0}} 
          transition={{duration:0.5, delay:0.2}}
          className="text-center p-8 bg-white rounded-2xl border border-gray-100 shadow-md"
        >
          <div className="w-16 h-16 bg-[var(--color-secondary)] rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-8 h-8 bg-[var(--color-primary)] rounded-full"></div>
          </div>
          <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">Performance</h3>
          <p className="text-gray-600">
            Our parts are tested under extreme conditions to ensure they deliver when it matters most.
          </p>
        </motion.div>
      </div>

      <motion.div 
        initial={{opacity:0, y:20}} 
        whileInView={{opacity:1, y:0}} 
        transition={{duration:0.5}}
        className="bg-gradient-to-r from-[var(--color-primary)] to-[#002a52] rounded-3xl p-16 text-center text-white"
      >
        <h2 className="text-4xl font-bold mb-6">Join the Velocity Revolution</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Whether you're a professional cyclist or automotive enthusiast, our parts will elevate your performance to the next level.
        </p>
        <a href="/contact" className="btn-accent inline-block">Partner With Us</a>
      </motion.div>
    </div>
  )
}