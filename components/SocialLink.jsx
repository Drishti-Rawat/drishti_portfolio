import React from "react";
import { motion } from "framer-motion";

const SocialLink = ({ icon: Icon, href, label, className }) => {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative ${className}`}
    >
      <motion.div
        whileHover={{ y: -5, scale: 1.2, rotate: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Icon className="w-6 h-6 text-white" />
      </motion.div>
    </a>
  );
};

export default SocialLink;
