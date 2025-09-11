"use client";
import React from "react";
import {
  motion,

} from "framer-motion";
import { Button } from "@/components/ui/button";
import {
 
  FileText,

  Github,
  Linkedin,
  Mail,

} from "lucide-react";

import { FadeInChild, RevealSection, StaggerChildren,WaveBackground, WaveDecoration } from "@/lib/Animation";
import SocialLink from "@/components/SocialLink";


const MainContent = () => {
  

  // Function to handle resume download
  const handleResumeDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/drishti_resume.pdf'; // Make sure to add your resume PDF in the public folder
    link.download = 'Drishti_Resume.pdf'; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return(
  <RevealSection className="relative ">
    <WaveBackground />

    <motion.div
      className="relative z-10 flex flex-col items-center justify-center  px-4 py-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {/* Professional Focus Banner */}
        <motion.div
          className="mb-4 inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <span className="px-6 py-2 rounded-full bg-purple-500/10 backdrop-blur-sm text-purple-400 font-semibold text-lg">
            Ready to Collaborate
          </span>
        </motion.div>

        {/* Name Container */}
        <motion.h1 
          className="text-3xl md:text-7xl font-bold text-white mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          Hello, I'm{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-purple-500 via-purple-400 to-purple-500
 bg-clip-text text-transparent">
              Drishti
            </span>
           
          </span>
        </motion.h1>

        {/* Role and Expertise */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Full Stack Developer
            <span className="block text-2xl md:text-3xl mt-4 bg-gradient-to-r from-purple-400 to-purple-400 bg-clip-text text-transparent">
              Building Modern Web Experiences
            </span>
          </h2>

          <p className="text-xl  italic text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Passionate about building innovative web solutions that bridge
            creativity and functionality. Specializing in modern full-stack
            development to create seamless, user-centric applications.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
      className="flex justify-center gap-8 mb-7"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
    >
      <SocialLink
        icon={Github}
        href="https://github.com/Drishti-Rawat/"
        label="Projects"
        className="bg-white/20 hover:bg-white/10 p-3 rounded-lg backdrop-blur-sm"
      />
      <SocialLink
        icon={Linkedin}
        href="https://www.linkedin.com/in/drishti-rawat-250573216/"
        label="LinkedIn"
        className="bg-white/20 hover:bg-white/10 p-3 rounded-lg backdrop-blur-sm"
      />
      <SocialLink
        icon={Mail}
        href="mailto:drishtirwt019@gmail.com"
        label="Email"
        className="bg-white/20 hover:bg-white/10 p-3 rounded-lg backdrop-blur-sm"
      />
    </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              onClick={handleResumeDownload}
              className="px-8 py-3 bg-white/15 text-white hover:text-white border-white/10 hover:bg-white/10 
                       hover:border-white/20 backdrop-blur-sm rounded-xl group flex cursor-pointer"
            >
              <FileText className="w-6 h-6 mr-3 group-hover:rotate-6 transition-transform" />
              <span className="text-lg">My Resume</span>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a href="#contact" >
            <Button
              size="lg"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 
                       hover:from-purple-700 hover:to-indigo-700 rounded-xl text-white group flex cursor-pointer"
            >
              <Mail className="w-6 h-6 mr-3 group-hover:rotate-6 transition-transform" />
              <span className="text-lg">Get in Touch</span>
            </Button>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  </RevealSection>
  )
};

export default MainContent