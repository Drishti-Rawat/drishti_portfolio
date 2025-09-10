import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className="bg-white/20 rounded-xl shadow-lg overflow-hidden hover:scale-105 hover:bg-white/10  p-5 flex flex-col justify-between"
    >
      {/* Image with fixed width & height */}
      <div className="w-full h-48 mb-4 rounded-lg overflow-hidden relative flex-shrink-0">
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={192}
          style={{ objectFit: "cover" }}
          className="rounded-lg pointer-events-none" // ✅ important!
          priority
        />
      </div>

      {/* Title, Description, Tech */}
      <div className="flex-1 flex flex-col justify-start text-center">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        <p className="text-gray-400 text-sm mb-4">
          <span className="font-semibold">Tech:</span> {project.technologies.join(", ")}
        </p>
      </div>

      {/* Button centered at bottom */}
      <a
        href={project.liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white cursor-pointer px-6 mb-2 py-2 rounded-xl hover:opacity-90 transition shadow-lg mx-auto z-10 relative"
        style={{ backgroundColor: "#6b21a8" }}
      >
        Visit Live Site
      </a>
    </motion.div>
  );
};

export default ProjectCard;
