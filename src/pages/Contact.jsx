import { motion } from "framer-motion";
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
    excerpt: "How Velocity Parts is reducing environmental impact while maintaining precision manufacturing standards.",
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

export default function Blog() {
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

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 transition"
          >
            <div className="h-40 sm:h-48 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
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
                  Read More
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center">
        <button className="btn-secondary px-6 sm:px-8 py-3 text-sm sm:text-md">
          Load More Articles
        </button>
      </div>
    </div>
  );
}
