import React from "react";
const Footer = () => {
  
  return (
    <footer className="w-full  relative">
      {/* Gradient border top */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 ">
       

        {/* Copyright */}
        <div className=" p-5 border-t border-white/20 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Drishti. All rights reserved.</p>
        </div>
      </div>

      {/* Background gradient effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-50 -z-10"
      />
    </footer>
  );
};
export default Footer