import React from "react";

const SocialLink = ({ icon: Icon, href, label }) => (
    
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative inline-flex items-center justify-center p-4 
               bg-opacity-5 bg-white rounded-xl 
               transition-all duration-300 ease-in-out
               hover:scale-110 active:scale-95 hover:rotate-3
               shadow-lg hover:shadow-xl
               border border-white/10 hover:border-white/20"
  >
    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
    
    {/* Glow effect using pseudo-element */}
    <div className="absolute inset-0 -z-10 rounded-xl 
                    bg-gradient-to-r from-purple-500/20 to-purple-500/20 
                    opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300 ease-in-out
                    blur-xl pointer-events-none" 
    />
  </a>
);

export default SocialLink;