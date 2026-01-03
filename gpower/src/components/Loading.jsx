import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-20 h-20 mx-auto rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[#002a52] flex items-center justify-center shadow-lg">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-10 h-10 bg-[#FFD447] rounded-full shadow-md"
            ></motion.div>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-2">
            Geidel<span className="text-[#FFD447]">Power</span>
          </h2>
          <p className="text-gray-500 text-sm">Loading...</p>
        </motion.div>

        {/* Loading Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 w-48 h-1 bg-gray-200 rounded-full overflow-hidden mx-auto"
        >
          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-full w-1/3 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]"
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
}
