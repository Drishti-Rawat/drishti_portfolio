"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import MainContent from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectSection from "@/components/ProjectSection";

// Enhanced ScrollingText component with stagger effect






export default function Portfolio() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    // Change from fixed to relative positioning for the main container
    <div className="relative min-h-screen bg-black">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <motion.div
            key="intro"
            className="fixed inset-0 z-50 bg-[#07070a] flex flex-col items-center justify-center overflow-hidden"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
          >
            <IntroSequence onComplete={() => setShowIntro(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.3 } 
            }}
            // Remove absolute positioning and allow normal document flow
            className="relative bg-black"
          >
            <MainContent />
            <div id="about">
            <AboutSection />
            </div>
            <div id="skills">
            <TechStackSection />
            </div>
            <div id="projects">
            <ProjectSection />
            </div>
            <div id="contact">
            <ContactSection />
            </div>
            <Footer/>
          </motion.div>
        )}
        
      </AnimatePresence>
    </div>
  );
}






const IntroSequence = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 1800); // Wait 1.8s for reveal animations to finish before sliding curtain

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center gap-4 text-center select-none relative z-10">
      {/* Ambient background light */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-zinc-800/10 blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Title container with hidden overflow for slide-up reveal */}
      <div className="overflow-hidden py-2 relative z-10">
        <motion.h1
          className="text-white font-extrabold text-5xl sm:text-7xl md:text-9xl tracking-[0.2em] uppercase font-sans"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
            delay: 0.2
          }}
        >
          DRISHTI
        </motion.h1>
      </div>

      {/* Subtitle container with hidden overflow for slide-up reveal */}
      <div className="overflow-hidden py-1 relative z-10">
        <motion.span
          className="block text-zinc-400 text-sm sm:text-base md:text-lg uppercase tracking-[0.5em] font-mono"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.215, 0.61, 0.355, 1],
            delay: 0.5
          }}
        >
          Full Stack Developer
        </motion.span>
      </div>
    </div>
  );
};















