


// import React from "react";
// import { motion } from "framer-motion";
// const SocialLink = ({ icon: Icon, href, label }) => (
//     <motion.a
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       whileHover={{ scale: 1.1, rotate: 5 }}
//       whileTap={{ scale: 0.95 }}
//       className="group relative inline-flex items-center justify-center p-4 
//                  bg-opacity-5 bg-white rounded-xl 
//                  transition-all duration-300 
//                  shadow-lg hover:shadow-xl
//                  border border-white/10 hover:border-white/20"
//       initial={{ opacity: 0, x: -20 }}
//       animate={{ opacity: 1, x: 0 }}
//     >
//       <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
      
//       {/* Glow effect using pseudo-element instead of extra div */}
//       <div className="absolute inset-0 -z-10 rounded-xl 
//                       bg-gradient-to-r from-purple-500/20 to-purple-500/20 
//                       opacity-0 group-hover:opacity-100 transition-opacity
//                       blur-xl pointer-events-none" 
//       />
//     </motion.a>
//   );

// export default SocialLink;

import React from "react";
import { motion } from "framer-motion";

const SocialLink = ({ icon: Icon, href, label }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ 
        scale: 1.1,
        rotate: 10,
        transition: { 
          duration: 0.2,
          ease: "easeInOut"
        }
      }}
      whileTap={{ scale: 0.95 }}
      className="relative flex items-center justify-center 
                w-12 h-12 rounded-xl
                bg-white/5 hover:bg-white/10
                border border-white/10 hover:border-purple-500/50
                transition-all duration-300
                group"
      initial={{ opacity: 0, x: -20 }}
      animate={{ 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.5 }
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon className="w-5 h-5 text-gray-300 group-hover:text-purple-400 
                      transition-colors duration-300 z-10" />
      </div>
      
      {/* Subtle glow on hover */}
      <div 
        className="absolute inset-0 rounded-xl
                   bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-indigo-500/0
                   opacity-0 group-hover:opacity-100 
                   transition-all duration-300
                   blur-sm"
      />
    </motion.a>
  );
};

export default SocialLink;