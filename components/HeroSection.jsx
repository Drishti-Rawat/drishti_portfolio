"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, Github, Linkedin, Mail, ArrowRight, Sparkles } from "lucide-react";
import { WaveBackground } from "@/lib/Animation";
import SocialLink from "@/components/SocialLink";

const MainContent = () => {

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/drishti_resume.pdf';
    link.download = 'Drishti_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 px-4 bg-[#050508]">
      <WaveBackground />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* Left Side: Professional Bio */}
        <motion.div
          className="flex-1 text-left space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-md text-indigo-400 font-medium text-sm"
          >
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>Open to Opportunities & Collaboration</span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-3">
            <h2 className="text-sm font-semibold text-gray-500 tracking-[0.2em] uppercase font-mono">
              Full Stack Web Artisan
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.05]">
              Hello, I'm{" "}
              <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent font-black">
                Drishti
              </span>
            </h1>
          </div>

          {/* Bio Description */}
          <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed font-normal">
            I craft clean, high-performance, and visually stunning web applications, bridging elegant frontend interfaces with robust, scalable backend architectures.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                onClick={handleResumeDownload}
                className="px-8 py-6 bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-md rounded-2xl flex items-center gap-2 group cursor-pointer transition-all duration-300 shadow-sm"
              >
                <FileText className="w-5 h-5 group-hover:rotate-3 transition-transform" />
                <span className="text-base font-semibold">My Resume</span>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a href="#contact">
                <Button
                  size="lg"
                  className="px-8 py-6 bg-white hover:bg-zinc-200 text-black rounded-2xl flex items-center gap-2 group cursor-pointer transition-all duration-300 shadow-sm"
                >
                  <span className="text-base font-semibold">Get in Touch</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side: Interactive Visual Dashboard / Glass Card */}
        <motion.div
          className="flex-1 w-full max-w-[500px]"
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative group w-full aspect-square md:aspect-[4/3.8] rounded-[2.5rem] p-8 glass-card border border-zinc-800 shadow-2xl flex flex-col justify-between overflow-hidden bg-black/25">

            {/* Simulated Window Control Buttons */}
            <div className="relative z-10 flex justify-between items-center">
              <div className="flex gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-rose-500/60" />
                <div className="w-3.5 h-3.5 rounded-full bg-amber-500/60" />
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/60" />
              </div>
              <span className="text-[11px] font-mono text-gray-500 uppercase tracking-widest select-none">
                DR-v2.0.26
              </span>
            </div>

            {/* Main Details */}
            <div className="relative z-10 space-y-6 my-auto pt-6">
              <div className="space-y-2">
                <p className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
                  &lt;Core Stack&gt;
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "Next.js", "Node.js", "PostgreSQL", "TailwindCSS"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1.5 rounded-xl bg-indigo-500/5 border border-indigo-500/10 text-xs font-mono text-indigo-300 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-3xl font-black text-white tracking-tight">
                  Design. Code. Deploy.
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed font-sans">
                  Transforming conceptual complexities into fluid and responsive web interactions.
                </p>
              </div>
            </div>

            {/* Bottom Row: Social links and active status */}
            <div className="relative z-10 flex justify-between items-center border-t border-zinc-850 pt-6 mt-6">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse shadow-sm shadow-indigo-400/50" />
                <span className="text-xs font-semibold text-gray-405 font-mono">
                  Ready to deploy
                </span>
              </div>

              {/* Social links */}
              <div className="flex gap-4">
                <SocialLink
                  icon={Github}
                  href="https://github.com/Drishti-Rawat/"
                  label="GitHub"
                  className="text-gray-400 hover:text-white transition-colors"
                />
                <SocialLink
                  icon={Linkedin}
                  href="https://www.linkedin.com/in/drishti-rawat-250573216/"
                  label="LinkedIn"
                  className="text-gray-400 hover:text-white transition-colors"
                />
                <SocialLink
                  icon={Mail}
                  href="mailto:drishtirwt019@gmail.com"
                  label="Email"
                  className="text-gray-400 hover:text-white transition-colors"
                />
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default MainContent;
