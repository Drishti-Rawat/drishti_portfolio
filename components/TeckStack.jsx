
import React from "react";
import { motion } from "framer-motion";
const TechStack = ({ tech, image }) => (
  <motion.div
    // Changed from potentially duplicate key to guaranteed unique key
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    className="flex flex-col items-center p-4 bg-white/5 rounded-lg backdrop-blur-sm
                 hover:bg-white/10 transition-all duration-300 cursor-pointer
                 border border-white/10 hover:border-purple-500/50"
  >
    <div className="w-12 h-12 mb-3 flex items-center justify-center">
      <img src={image} alt={tech} className="w-10 h-10 object-contain" />
    </div>
    <span className="text-sm font-medium text-gray-300">{tech}</span>
  </motion.div>
);

export default TechStack;
