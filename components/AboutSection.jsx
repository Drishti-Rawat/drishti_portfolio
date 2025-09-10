"use client";
import React from "react";
import {
  motion,

} from "framer-motion";

import {

  Rocket,

  Calendar,

} from "lucide-react";
import {  CardContent } from "@/components/ui/card";

import { FadeInChild, RevealSection, StaggerChildren,WaveBackground, WaveDecoration } from "@/lib/Animation";

import { experiences} from "@/constants/data";


const AboutSection = () => {
  return (
    <RevealSection className="min-h-screen bg-black py-20 px-6  relative">
      <StaggerChildren>
        <WaveDecoration />
        <div className="max-w-7xl mx-auto mb-7">
          {/* Hero About Section */}
      <FadeInChild>
  <div className="flex flex-col gap-6 mb-20 p-4">
    {/* Title */}
    <motion.h2
      className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-indigo-500 to-pink-500 bg-clip-text text-transparent"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      About Me
    </motion.h2>

    {/* Paragraph */}
    <motion.p
      className="text-xl text-gray-300 leading-relaxed"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      viewport={{ once: true }}
    >
      I'm a passionate developer who loves creating{' '}
      <span className="text-purple-400 font-semibold">seamless digital experiences</span>.
      With a keen eye for detail and a love for{' '}
      <span className="text-purple-400 font-semibold">clean, maintainable code</span>, I
      transform complex challenges into elegant solutions.
    </motion.p>

    {/* Fun Fact */}
   <motion.p
  className="text-gray-400 italic text-lg"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.4 }}
  viewport={{ once: true }}
>
  “Turning complex problems into elegant, user-friendly solutions.”
</motion.p>

  </div>
</FadeInChild>



        

          {/* Experience Section */}
         <FadeInChild>
  {/* Timeline Section */}

<div className="relative mt-20">
  {/* Vertical dotted line: hide on small screens or single item */}
  {experiences.length > 1 && (
    <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 border-r-2 border-dotted border-purple-400"></div>
  )}

  {/* Timeline Title above line */}
  <h3 className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-12 text-2xl font-bold text-white flex items-center gap-2">
    <Rocket className="h-6 w-6 text-purple-400" />
    Career Highlights
  </h3>

  {experiences.map((exp, index) => (
    <motion.div
      key={index}
      className={`mb-12 flex flex-col md:flex-row items-center w-full
        ${index % 2 !== 0 && experiences.length > 1 ? "md:flex-row-reverse" : ""}`}
      initial={{ opacity: 0, x: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 0, scale: 0.8 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Card */}
      <div className="md:w-1/2 p-4">
        <motion.div
          className="bg-white/15 border-white/10 hover:bg-white/10 rounded-xl transition-all relative"
          initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          exit={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">{exp.title}</h4>
                <p className="text-purple-400 font-medium">{exp.company}</p>
              </div>
              <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                <Calendar className="h-4 w-4" /> {exp.period}
              </div>
            </div>
            <p className="text-gray-300">{exp.description}</p>
          </CardContent>
        </motion.div>
      </div>

      {/* Timeline Dot */}
      <div className="w-5 h-5 rounded-full bg-purple-400 border-2 border-black z-10 relative md:mx-0 mx-auto -translate-y-2"></div>
    </motion.div>
  ))}
</div>

</FadeInChild>
        </div>
      </StaggerChildren>
    </RevealSection>
  );
};
export default AboutSection