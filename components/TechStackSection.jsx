"use client";
import React, { useState, useEffect } from "react";
import { FadeInChild, RevealSection, StaggerChildren,WaveBackground, WaveDecoration } from "@/lib/Animation";
import TechStack from "@/components/TeckStack";
import {  techStack } from "@/constants/data";

const TechStackSection = () => {
  return (
    <RevealSection className="relative min-h-screen py-20 px-4 bg-black">
      <StaggerChildren>
        <WaveDecoration />
        <div className="max-w-7xl mx-auto mb-7">
          <FadeInChild>
            <div className="text-center mb-16">
              <span className="px-6 py-2 rounded-full bg-purple-500/20 text-purple-400 font-medium inline-block mb-6">
                Tech Stack
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Technologies I Work With
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Here are the technologies, tools, and platforms I use to bring
                ideas to life
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
export default TechStackSection