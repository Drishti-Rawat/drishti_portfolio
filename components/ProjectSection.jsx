"use client";
import React from "react";

import { FadeInChild, RevealSection, StaggerChildren,WaveBackground, WaveDecoration } from "@/lib/Animation";

import ProjectCard from "@/components/ProjectCard";

import {  projects} from "@/constants/data";


const ProjectSection = () => {
  
  return (
    <RevealSection className="relative min-h-screen py-20 px-4 md:px-6 bg-black ">
      <StaggerChildren>
        <WaveDecoration />
        <div className="max-w-7xl mx-auto mb-7">
          <FadeInChild>
            <div className="text-center mb-12">
              <span className="px-6 py-2 rounded-full bg-purple-500/20 text-purple-400 font-medium">
                My Work
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-4">
                Featured Projects
              </h2>
              <p className="text-xl text-purple-400 font-medium">
                Showcasing My Best Work
              </p>
            </div>
          </FadeInChild>

       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center items-stretch px-6">
  {projects.map((project, idx) => (
    <ProjectCard key={idx} project={project} />
  ))}
</div>

        </div>
      </StaggerChildren>
    </RevealSection>
  );
};

export default ProjectSection