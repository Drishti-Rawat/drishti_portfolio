import React from "react";
import { motion } from "framer-motion";
const SocialLink = ({ icon: Icon, href, label }) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      className="group relative inline-flex items-center justify-center p-4 
                 bg-opacity-5 bg-white rounded-xl 
                 transition-all duration-300 
                 shadow-lg hover:shadow-xl
                 border border-white/10 hover:border-white/20"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
      
      {/* Glow effect using pseudo-element instead of extra div */}
      <div className="absolute inset-0 -z-10 rounded-xl 
                      bg-gradient-to-r from-purple-500/20 to-purple-500/20 
                      opacity-0 group-hover:opacity-100 transition-opacity
                      blur-xl pointer-events-none" 
      />
    </motion.a>
  );

export default SocialLink;