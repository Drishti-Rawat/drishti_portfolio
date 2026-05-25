"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Calendar, Briefcase, FileJson, Code, FileText } from "lucide-react";
import { CardContent } from "@/components/ui/card";
import { FadeInChild, RevealSection, StaggerChildren, WaveDecoration } from "@/lib/Animation";
import { experiences } from "@/constants/data";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const timelineRef = useRef(null);

  // Set up scroll-linked scroll progress for the timeline column
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end end"]
  });

  // Smooth out scroll progression using spring physics
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001
  });

  const tabs = [
    { id: "profile", name: "profile.json", icon: FileJson, color: "text-amber-400" },
    { id: "philosophy", name: "philosophy.ts", icon: Code, color: "text-cyan-400" },
    { id: "bio", name: "about_me.md", icon: FileText, color: "text-purple-400" }
  ];

  return (
    <RevealSection className="relative bg-[#050508] py-24 px-4 md:px-6 overflow-hidden">
      <WaveDecoration />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Title Block */}
        <StaggerChildren>
          <FadeInChild>
            <div className="flex flex-col gap-4 mb-20 text-center items-center">
              <span className="px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-sm tracking-wider uppercase">
                About Me
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                Turning Concepts Into <br />
                <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                  Digital Mastery
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl font-normal">
                Full-stack developer and Computer Science undergraduate with experience building{" "}
                <span className="text-indigo-400 font-semibold">scalable web applications</span>, dashboards,
                and workflow-driven systems. Skilled in developing{" "}
                <span className="text-purple-400 font-semibold">production-ready solutions</span> in startup environments.
              </p>
            </div>
          </FadeInChild>
        </StaggerChildren>

        {/* 2-Column Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12">
          
          {/* Left Column: Interactive Code Console (Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="w-full rounded-2xl glass-card border border-zinc-800 shadow-2xl overflow-hidden bg-black/45"
            >
              {/* Window Header Toolbar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0d0d14]/80 border-b border-zinc-850">
                {/* Simulated window control buttons */}
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ef4444] opacity-80" />
                  <div className="w-3 h-3 rounded-full bg-[#f59e0b] opacity-80" />
                  <div className="w-3 h-3 rounded-full bg-[#10b981] opacity-80" />
                </div>
                <div className="text-xs font-mono text-gray-500 select-none font-semibold">
                  Console-v1.0.ts
                </div>
              </div>

              {/* File Tabs Switcher */}
              <div className="flex bg-[#07070b] border-b border-zinc-850 overflow-x-auto scrollbar-none">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-4 py-3 border-r border-zinc-850 text-xs font-mono select-none cursor-pointer transition-all
                        ${isActive 
                          ? "bg-white/5 text-white border-b-2 border-b-purple-400 font-bold" 
                          : "text-gray-500 hover:text-gray-300 hover:bg-white/[0.02]"
                        }`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${tab.color}`} />
                      <span>{tab.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Terminal Screen Console */}
              <div className="p-6 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto bg-[#07070b]/60 text-gray-300 h-96 flex flex-col justify-start relative">
                
                {/* Line numbers column helper */}
                <div className="absolute left-3 top-6 bottom-6 flex flex-col text-right text-gray-600 select-none w-5 border-r border-zinc-850 pr-2 pointer-events-none">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <span key={i} className="leading-6">{i + 1}</span>
                  ))}
                </div>

                {/* Switchable content based on activeTab */}
                <div className="pl-8 leading-6 select-text">
                  <AnimatePresence mode="wait">
                    {activeTab === "profile" && (
                      <motion.div
                        key="profile"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-gray-550">// Personal profile configuration</span>
                        <br />
                        <span className="text-purple-400">const</span> <span className="text-blue-400 font-semibold">developer</span> = <span className="text-yellow-500">{"{"}</span>
                        <div className="pl-4">
                          <span className="text-cyan-400">"name"</span>: <span className="text-amber-200">"Drishti Rawat"</span>,
                          <br />
                          <span className="text-cyan-400">"role"</span>: <span className="text-amber-200">"Full-Stack Web Developer"</span>,
                          <br />
                          <span className="text-cyan-400">"degree"</span>: <span className="text-amber-200">"B.Tech in Computer Science"</span>,
                          <br />
                          <span className="text-cyan-400">"focus"</span>: <span className="text-amber-200">"Web Integrations"</span>,
                          <br />
                          <span className="text-cyan-400">"coreSkills"</span>: <span className="text-gray-500">[</span>
                          <div className="pl-4">
                            <span className="text-amber-200">"React.js / Next.js"</span>,
                            <br />
                            <span className="text-amber-200">"Node.js / Express"</span>,
                            <br />
                            <span className="text-amber-200">"PostgreSQL & Mongo"</span>
                          </div>
                          <span className="text-gray-500">]</span>
                        </div>
                        <span className="text-yellow-500">{"}"}</span>;
                      </motion.div>
                    )}

                    {activeTab === "philosophy" && (
                      <motion.div
                        key="philosophy"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-gray-550">// Design & Engineering standards</span>
                        <br />
                        <span className="text-purple-400">import</span> <span className="text-yellow-500">{"{"}</span> <span className="text-blue-300">Quality</span>, <span className="text-blue-300">Scale</span> <span className="text-yellow-500">{"}"}</span> <span className="text-purple-400">from</span> <span className="text-amber-200">"standards"</span>;
                        <br />
                        <br />
                        <span className="text-purple-400">class</span> <span className="text-cyan-400">EngineerPhilosophy</span> <span className="text-purple-400">implements</span> <span className="text-blue-300">Quality</span> <span className="text-yellow-500">{"{"}</span>
                        <div className="pl-4">
                          <span className="text-blue-300">approach</span> = <span className="text-amber-200">"frontend & backend integration"</span>;
                          <br />
                          <span className="text-blue-300">priority</span> = <span className="text-amber-200">"clean & maintainable architecture"</span>;
                          <br />
                          <br />
                          <span className="text-blue-300">compile</span>() <span className="text-yellow-555">{"{"}</span>
                          <div className="pl-4">
                            <span className="text-purple-400">return</span> <span className="text-cyan-400">`Transforming concepts into digital mastery.`</span>;
                          </div>
                          <span className="text-yellow-555">{"}"}</span>
                        </div>
                        <span className="text-yellow-500">{"}"}</span>
                      </motion.div>
                    )}

                    {activeTab === "bio" && (
                      <motion.div
                        key="bio"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-purple-400 font-semibold"># Professional Summary</span>
                        <br />
                        <br />
                        <p className="text-gray-300 leading-6 text-justify font-sans">
                          Full-stack developer and Computer Science undergraduate with experience building scalable web applications, dashboards, and workflow-driven systems. Skilled in frontend and backend integrations, developing production-ready solutions in startup environments.
                        </p>
                        <br />
                        <span className="text-purple-400 font-semibold">**Focus Fields:**</span>
                        <br />
                        <span className="text-amber-200">- Frontend & Backend Web Integrations</span>
                        <br />
                        <span className="text-amber-200">- Clean Micro-Animations & Interface Design</span>
                        <br />
                        <span className="text-amber-200">- Interactive Dashboards & Platform Engineering</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Experience Timeline Section */}
          <div ref={timelineRef} className="lg:col-span-7 relative pl-4 md:pl-8">
            
            {/* Background static timeline rail */}
            {experiences.length > 0 && (
              <div className="absolute left-4 md:left-8 top-14 bottom-0 w-0.5 bg-zinc-800/30 -translate-x-1/2" />
            )}

            {/* Scroll-Linked Active Timeline Rail */}
            {experiences.length > 0 && (
              <motion.div 
                style={{ scaleY, originY: 0 }}
                className="absolute left-4 md:left-8 top-14 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-blue-500 -translate-x-1/2 z-10" 
              />
            )}

            <div className="space-y-12">
              {/* Header aligned correctly to prevent overlap */}
              <div className="flex items-center gap-3 relative z-10 pl-10 md:pl-14 mb-12">
                <div className="absolute left-4 md:left-8 -translate-x-1/2 w-8 h-8 rounded-full bg-[#050508] border border-indigo-500/30 flex items-center justify-center text-indigo-400 shadow-md">
                  <Briefcase className="h-4 w-4" />
                </div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-widest font-mono text-glow">
                  Career Journey
                </h3>
              </div>

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative pl-10 md:pl-14"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.1 }}
                >
                  {/* Glowing Node Point that pops in when scrolled into view */}
                  <div className="absolute left-0 -translate-x-1/2 top-8 z-20 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: "spring", stiffness: 180, damping: 12, delay: 0.1 }}
                      className="w-5 h-5 rounded-full bg-[#050508] border border-indigo-500/30 flex items-center justify-center"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 shadow-lg shadow-indigo-500/35" />
                    </motion.div>
                  </div>

                  {/* Card Container */}
                  <motion.div
                    whileHover={{ scale: 1.01, y: -1 }}
                    className="glass-card glass-card-hover rounded-2xl relative overflow-hidden bg-black/25"
                  >
                    {/* Left border gradient indicator */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500/40 via-purple-500/40 to-blue-500/40" />

                    <CardContent className="p-6 md:p-8">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-white tracking-tight leading-snug">
                            {exp.title}
                          </h4>
                          <p className="text-indigo-400 font-semibold text-sm mt-0.5 font-mono">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-400 text-xs font-mono bg-white/5 px-3 py-1.5 rounded-full border border-zinc-850 mt-1 sm:mt-0 w-fit">
                          <Calendar className="h-3.5 w-3.5 text-indigo-400" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed text-justify font-sans">
                        {exp.description}
                      </p>
                    </CardContent>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
        
      </div>
    </RevealSection>
  );
};

export default AboutSection;