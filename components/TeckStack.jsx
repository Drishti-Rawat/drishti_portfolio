import Image from "next/image";
import { motion } from "framer-motion";

const TechStack = ({ id, tech, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      whileHover={{ scale: 1.05, y: -4 }}
      className={`group relative flex flex-col items-center justify-center p-6 rounded-2xl
                 glass-card glass-card-hover hover-glow-${id}
                 shadow-lg cursor-pointer overflow-hidden transition-all duration-300`}
    >
      {/* Background ambient shine */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="relative w-14 h-14 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Image
            src={image}
            alt={`${tech} icon`}
            width={52}
            height={52}
            className="object-contain filter brightness-95 group-hover:brightness-100 transition-all"
            priority
          />
        </div>
        <span className="text-xs font-mono font-bold text-gray-400 group-hover:text-white transition-colors uppercase tracking-wider">
          {tech}
        </span>
      </div>
    </motion.div>
  );
};

export default TechStack;
