import Image from 'next/image';
import { motion } from 'framer-motion';

const TechStack = ({ tech, image }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center p-6 rounded-lg
                 bg-white/50 
                 border border-neutral-800
                 hover:border-neutral-700
                 transition-all duration-300"
    >
      <div className="relative w-12 h-12 mb-3">
        <Image
          src={image}
          alt={`${tech} icon`}
          width={48}
          height={48}
          className="object-contain"
          priority
        />
      </div>
      <span className="text-sm text-white">{tech}</span>
    </motion.div>
  );
export default TechStack;