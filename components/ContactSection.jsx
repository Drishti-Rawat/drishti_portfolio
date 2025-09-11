"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { WaveBackground } from "@/lib/Animation";

const ContactSection = () => {
  return (
    <div className="relative px-4 py-16 ">
      <WaveBackground />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto text-center mb-10"
      >
        <span className="px-6 py-2 rounded-full bg-purple-500/20 text-purple-400 font-medium inline-block mb-6">
          Get In Touch
        </span>
        <h2 className="text-5xl font-bold text-white mb-6">Let's Connect</h2>
        <p className="text-xl text-purple-300 font-medium max-w-2xl mx-auto">
          Feel free to reach out! I’m always happy to chat or discuss projects. Let’s make something great together!
        </p>
      </motion.div>

      {/* Contact Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-xl mx-auto"
      >
        <Card className="bg-white/10 hover:bg-white/15 border-none shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out rounded-xl transform hover:scale-105">
          <CardContent className="p-8 md:p-10 text-center">
            <p className="text-white text-lg mb-4">
              You can contact me directly at:
            </p>
            <a
              href="mailto:drishtirwt019@gmail.com"
              className="text-purple-400 font-medium text-sm md:text-xl hover:underline transition-all duration-300"
            >
              drishtirwt019@gmail.com
            </a>
            <p className="text-white/70 mt-4">
              I’ll try to respond as soon as possible!
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ContactSection;
