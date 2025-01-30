import Image from "next/image";
import { motion } from "framer-motion";

const TechStack = ({ tech, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="group relative flex flex-col items-center p-6 rounded-lg
                bg-white/5 hover:bg-white/10
                border border-white/10
                transition-all duration-300
                cursor-pointer
                overflow-hidden"
    >
      {/* Hover effect overlay */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100
                  bg-gradient-to-r from-purple-500/10 to-blue-500/10
                  transition-opacity duration-300"
      />
      
      {/* Border gradient on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100
                  bg-gradient-to-r from-purple-500 to-blue-500
                  transition-opacity duration-300"
        style={{
          clipPath: 'inset(0 round 8px)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative w-12 h-12 mb-3">
          <Image
            src={image}
            alt={`${tech} icon`}
            fill
            className="object-contain"
            priority
          />
        </div>
        <span className="text-sm font-medium text-white transition-colors">
          {tech}
        </span>
      </div>
    </motion.div>
  );
};

export default TechStack;