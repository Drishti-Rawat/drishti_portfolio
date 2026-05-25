"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { WaveBackground } from "@/lib/Animation";
import { Mail, Github, Linkedin, Copy, Check } from "lucide-react";
import SocialLink from "@/components/SocialLink";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("drishtirwt019@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative px-4 py-24 bg-[#050508] overflow-hidden">
      <WaveBackground />
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="text-center mb-12 flex flex-col items-center gap-4"
        >
          <span className="px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-sm tracking-wider uppercase inline-block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Let's Start a <br />
            <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Conversation
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed mt-2 font-normal">
            I’m always open to discussing new opportunities, creative projects, or collaboration ideas. Drop me a line!
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
          className="w-full max-w-lg"
        >
          <Card className="glass-card glass-card-hover border border-zinc-850 rounded-3xl relative overflow-hidden bg-black/25">
            {/* Faint elegant glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl" />

            <CardContent className="p-8 md:p-12 text-center flex flex-col items-center gap-6 relative z-10">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Mail className="w-5 h-5" />
              </div>

              {/* Email Block with Copy Clipboard */}
              <div className="space-y-2 relative flex flex-col items-center w-full">
                <p className="text-sm font-mono text-gray-500 uppercase tracking-widest">
                  Direct Email Address
                </p>
                <div className="flex items-center gap-2 mt-1 relative justify-center w-full">
                  <a
                    href="mailto:drishtirwt019@gmail.com"
                    className="block text-lg sm:text-2xl font-bold bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent hover:brightness-110 transition-all font-mono truncate max-w-[280px] sm:max-w-none"
                  >
                    drishtirwt019@gmail.com
                  </a>
                  
                  <button
                    onClick={handleCopy}
                    className="p-2 rounded-xl bg-white/5 border border-zinc-800 text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer relative flex-shrink-0"
                    aria-label="Copy email address"
                  >
                    <AnimatePresence mode="wait">
                      {copied ? (
                        <motion.div
                          key="check"
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.5, opacity: 0 }}
                          transition={{ duration: 0.15 }}
                        >
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="copy"
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.5, opacity: 0 }}
                          transition={{ duration: 0.15 }}
                        >
                          <Copy className="w-3.5 h-3.5" />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Floating Toast Notification */}
                    <AnimatePresence>
                      {copied && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: -34, scale: 1 }}
                          exit={{ opacity: 0, y: -20, scale: 0.9 }}
                          className="absolute -top-7 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-emerald-400 rounded-lg whitespace-nowrap shadow-xl"
                        >
                          Copied!
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed max-w-xs font-normal">
                I generally reply within 24 hours. Let's make something amazing together!
              </p>

              {/* Centered social links */}
              <div className="flex gap-4 pt-4 border-t border-zinc-850 w-full justify-center">
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
              </div>

            </CardContent>
          </Card>
        </motion.div>

      </div>
    </div>
  );
};

export default ContactSection;
