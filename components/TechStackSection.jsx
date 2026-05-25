"use client";
import React from "react";
import { FadeInChild, RevealSection, StaggerChildren, WaveDecoration } from "@/lib/Animation";
import TechStack from "@/components/TeckStack";
import { techStack } from "@/constants/data";

const TechStackSection = () => {
  return (
    <RevealSection className="relative py-24 px-4 bg-[#050508]">
      <StaggerChildren>
        <WaveDecoration />
        <div className="max-w-7xl mx-auto mb-7 relative z-10">
          <FadeInChild>
            <div className="text-center mb-16 flex flex-col items-center">
              <span className="px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-sm tracking-wider uppercase inline-block mb-6">
                Tech Stack
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-none">
                Technologies I Work With
              </h2>
              <p className="text-xl text-indigo-400/90 max-w-2xl mx-auto font-normal">
                Here are the technologies, tools, and platforms I use to bring ideas to life.
              </p>
            </div>
          </FadeInChild>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 px-6">
            {techStack.map((item) => (
              <TechStack {...item} key={item.id} />
            ))}
          </div>
        </div>
      </StaggerChildren>
    </RevealSection>
  );
};

export default TechStackSection;