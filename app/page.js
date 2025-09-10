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
            className="fixed inset-0 z-50 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
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
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const introTexts = [
    "Hello",
    "Welcome to my Portfolio",
    "Where creativity meets code",
  ];

  useEffect(() => {
    // Set window size after component mounts (client-side only)
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentTextIndex < introTexts.length - 1) {
        setCurrentTextIndex((prev) => prev + 1);
      } else {
        setTimeout(onComplete, 1000);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [currentTextIndex, onComplete]);

  const fallingObjects = Array.from({ length: 15 }, (_, i) => i);

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated lines */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
          style={{ top: "30%" }}
        />
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          style={{ top: "60%" }}
        />

        {/* Falling purple shapes */}
        {windowSize.width > 0 &&
          fallingObjects.map((obj) => (
            <motion.div
              key={obj}
              initial={{ y: -50, x: Math.random() * windowSize.width }}
              animate={{ y: windowSize.height + 50 }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "linear",
              }}
              className="absolute w-2 h-2 rounded-full bg-purple-500 opacity-70"
            />
          ))}
      </div>

      {/* Central text */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTextIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              {introTexts[currentTextIndex]}
            </h2>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 4, ease: "easeInOut" }}
      />
    </motion.div>
  );
};















