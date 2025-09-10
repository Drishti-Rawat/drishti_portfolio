"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
 
} from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";

import { FadeInChild, RevealSection, StaggerChildren, WaveDecoration } from "@/lib/Animation";

const ContactSection = () => {
  return (
    <RevealSection className="relative  py-10 px-4 ">
      <StaggerChildren>
        <WaveDecoration />
        <div className="max-w-7xl mx-auto">
          <FadeInChild>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-10"
            >
              <span className="px-6 py-2 rounded-full bg-purple-500/20 text-purple-400 font-medium inline-block mb-6">
                Get In Touch
              </span>
              <h2 className="text-5xl font-bold text-white mb-6">
                Let's Connect
              </h2>
              <p className="text-xl text-purple-400 font-medium max-w-2xl mx-auto">
                Feel free to reach out! I’m always happy to chat or discuss
                projects.
              </p>
            </motion.div>
          </FadeInChild>

          <FadeInChild>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="max-w-xl mx-auto"
            >
              <Card className="bg-white/10 hover:bg-white/15 border-none ">
                <CardContent className="p-8 md:p-10 text-center">
                  <p className="text-white text-lg mb-4">
                    You can contact me directly at:
                  </p>
                  <a
                    href="mailto:drishtirwt019@gmail.com"
                    className="text-purple-400 font-medium text-sm md:text-xl hover:underline"
                  >
                    drishtirwt019@gmail.com
                  </a>
                  <p className="text-white/70 mt-4">
                    I’ll try to respond as soon as possible!
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </FadeInChild>
        </div>
      </StaggerChildren>
    </RevealSection>
  );
};

export default ContactSection