
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
const ProjectCard = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    className="group relative"
  >
    <Card
      className="h-full overflow-hidden bg-gradient-to-br from-white/5 to-white/10  border-2 border-white/10 
                     hover:border-blue-500/30 hover:border-4 transition-all duration-500 backdrop-blur-sm"
    >
      <CardContent className="p-0">
        {/* Project Image */}
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          {/* Hover Overlay with shimmer effect */}
          <div
            className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity 
                         flex items-center justify-center gap-4 overflow-hidden"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 opacity-30">
              <div
                className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform 
                            -skew-x-12 bg-gradient-to-r from-transparent to-white/40
                            group-hover:animate-[shimmer_2s_infinite] "
              />
            </div>

            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm
                         shadow-lg hover:shadow-white/20 transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm
                         shadow-lg hover:shadow-white/20 transition-all duration-300"
            >
              <ExternalLink className="w-6 h-6" />
            </motion.a>
          </div>
        </div>

        {/* Project Info */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-4 line-clamp-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-blue-500/20 text-blue-400 border-none p-2 backdrop-blur-sm
                           group-hover:bg-blue-700/20 transition-all duration-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Enhanced glow effect */}
    <div
      className="absolute -inset-0.5 bg-gradient-to-r from-white/20 via-blue-500/10 to-blue-500/30 rounded-lg blur opacity-0 
                    group-hover:opacity-30 transition-opacity -z-10 animate-gradient"
    />
  </motion.div>
);

export default ProjectCard;
