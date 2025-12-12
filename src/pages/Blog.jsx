import { motion } from "framer-motion";
import { useState } from "react";
import crankshaftImage from "../assets/Crankshaft - six cylinders seven mains.jpg";
import oilPumpImage from "../assets/Wet sump oil pump.jpg";
import turbochargerImage from "../assets/Turbocharger with waste gate.jpg";
import superchargerImage from "../assets/Whipple supercharger.jpg";
import ossaMotorcycleImage from "../assets/Ossa Trials Motorcycle 1970s.jpg";
import geidelPoweredImage from "../assets/Powered by Geidel.jpg";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Carbon Fiber in Bicycle Manufacturing",
    excerpt: "Exploring how advances in carbon fiber technology are revolutionizing bike performance and accessibility.",
    date: "December 5, 2025",
    author: "Alex Morgan",
    image: ossaMotorcycleImage,
    category: "Industry Insights",
  },
  {
    id: 2,
    title: "5 Innovations in Automotive Brake Systems",
    excerpt: "How modern materials and design are improving stopping power, durability, and safety in vehicles.",
    date: "November 28, 2025",
    author: "Jamie Chen",
    image: turbochargerImage,
    category: "Technical",
  },
  {
    id: 3,
    title: "Sustainable Manufacturing: Our Commitment to Green Production",
    excerpt: "How Geidel Power is reducing environmental impact while maintaining precision manufacturing standards.",
    date: "November 20, 2025",
    author: "Taylor Williams",
    image: geidelPoweredImage,
    category: "Company News",
  },
  {
    id: 4,
    title: "Choosing the Right Alloy for Mountain Bike Components",
    excerpt: "A guide to understanding aluminum, titanium, and steel properties for off-road performance.",
    date: "November 12, 2025",
    author: "Jordan Smith",
    image: oilPumpImage,
    category: "Materials",
  },
  {
    id: 5,
    title: "The Rise of Electric Vehicle Custom Parts Market",
    excerpt: "How EV adoption is creating new opportunities for specialized automotive components.",
    date: "November 5, 2025",
    author: "Casey Johnson",
    image: superchargerImage,
    category: "Market Trends",
  },
  {
    id: 6,
    title: "Quality Control in Precision Manufacturing",
    excerpt: "Our approach to ensuring every part meets exacting standards before reaching customers.",
    date: "October 28, 2025",
    author: "Morgan Lee",
    image: crankshaftImage,
    category: "Process",
  },
];

const categories = ["All", "Industry Insights", "Technical", "Company News", "Materials", "Market Trends", "Process"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-5xl font-bold text-[var(--color-primary)] mb-4 sm:mb-6"
        >
          Industry Insights & News
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-md sm:text-xl text-gray-600 max-w-3xl mx-auto px-2"
        >
          Stay informed with the latest trends, innovations, and company updates in bike and car parts manufacturing.
        </motion.p>
      </div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-all ${
              selectedCategory === category
                ? "bg-[var(--color-primary)] text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
        {filteredPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="h-48 sm:h-56 overflow-hidden bg-gray-50 flex items-center justify-center">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-contain p-2 transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />
            </div>

            <div className="p-5 sm:p-6">
              <div className="flex flex-wrap justify-between items-center mb-3">
                <span className="bg-[var(--color-secondary)] text-[var(--color-dark)] px-3 py-1 rounded-full text-xs sm:text-sm font-bold mb-2 sm:mb-0">
                  {post.category}
                </span>
                <span className="text-gray-500 text-xs sm:text-sm">{post.date}</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[var(--color-dark)] mb-2">
                {post.title}
              </h3>

              <p className="text-gray-600 text-sm sm:text-md mb-4">{post.excerpt}</p>

              <div className="flex justify-between items-center">
                <span className="text-[var(--color-primary)] text-sm sm:text-md font-medium">
                  By {post.author}
                </span>
                <a href="#" className="text-[var(--color-primary)] font-bold hover:underline text-sm sm:text-md">
                  Read More →
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Newsletter CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-[var(--color-primary)] to-[#002a52] rounded-2xl p-8 sm:p-12 text-center text-white mb-8 sm:mb-12"
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">
          Subscribe to Our Newsletter
        </h3>
        <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
          Get the latest industry insights, product updates, and manufacturing tips delivered to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:bg-white/20 border border-white/20"
          />
          <button className="btn-accent px-6 py-3 whitespace-nowrap">
            Subscribe Now
          </button>
        </div>
      </motion.div>
    </div>
  );
}
