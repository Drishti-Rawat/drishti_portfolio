'use client';
import React from 'react';
import {
    motion,
  
  } from "framer-motion";
const SocialLink = ({ icon: Icon, href, label }) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      className="group relative p-4 bg-white/5 rounded-xl backdrop-blur-sm 
                 hover:bg-white/10 transition-all duration-300 
                 shadow-[0_0_15px_rgba(255,255,255,0.05)]
                 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]
                 border border-white/10 hover:border-white/20"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
      <span className="sr-only">{label}</span>
  
      {/* Hover glow effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.a>
  );

export default SocialLink;