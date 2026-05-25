import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="group glass-card glass-card-hover rounded-2xl overflow-hidden p-6 flex flex-col justify-between h-full bg-black/25 border-zinc-850"
    >
      <div>
        {/* Image with zoom effect on hover */}
        <div className="w-full h-48 mb-5 rounded-xl overflow-hidden relative flex-shrink-0 bg-[#0c0c10]">
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={192}
            style={{ objectFit: "cover" }}
            className="rounded-xl pointer-events-none group-hover:scale-[1.03] transition-transform duration-500 ease-out"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-[10px] font-mono font-medium rounded-lg bg-white/5 border border-zinc-850 text-gray-400 group-hover:text-indigo-400 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white tracking-tight leading-tight transition-all">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed font-sans">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      {/* Button at bottom */}
      <div className="pt-6">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl border border-indigo-500/30 hover:border-indigo-500 hover:bg-indigo-500/10 text-indigo-400 hover:text-white font-semibold text-sm transition-all duration-300 cursor-pointer shadow-sm relative z-10 font-mono"
        >
          <span>Visit Live Site</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
