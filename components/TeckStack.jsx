import Image from "next/image";
import { motion } from "framer-motion";

const TechStack = ({ tech, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group relative flex flex-col items-center justify-center p-4 rounded-xl
                 bg-white/20 hover:bg-white/10
                 
                 shadow-lg
                 transition-all duration-100
                 cursor-pointer
                 overflow-hidden"
    >
    

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="relative w-16 h-16 mb-3 flex items-center justify-center">
          <Image
            src={image}
            alt={`${tech} icon`}
            width={60}
            height={60}
            className="object-contain"
            priority
          />
        </div>
        <span className="text-sm font-semibold text-white text-center">
          {tech}
        </span>
      </div>
    </motion.div>
  );
};

export default TechStack;
