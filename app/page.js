"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Code2,
  Coffee,
  FileText,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Rocket,
  Send,
  User,
  MessageSquare,
  Calendar,
  Building2,
  GraduationCap,
  Heart,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FadeInChild, RevealSection, StaggerChildren,WaveBackground, WaveDecoration } from "@/lib/Animation";
import SocialLink from "@/components/SocialLink";
import ProjectCard from "@/components/ProjectCard";
import TechStack from "@/components/TeckStack";

// Enhanced ScrollingText component with stagger effect






export default function Portfolio() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    // Change from fixed to relative positioning for the main container
    <div className="relative min-h-screen bg-black">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <motion.div
            key="intro"
            className="fixed inset-0 z-50 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <IntroSequence onComplete={() => setShowIntro(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.3 } 
            }}
            // Remove absolute positioning and allow normal document flow
            className="relative bg-black"
          >
            <MainContent />
            <div id="about">
            <AboutSection />
            </div>
            <div id="skills">
            <TechStackSection />
            </div>
            <div id="projects">
            <ProjectSection />
            </div>
            <div id="contact">
            <ContactSection />
            </div>
            <Footer/>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}




const IntroSequence = ({ onComplete }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const introTexts = [
    "Hello",
    "Welcome to my Portfolio",
    "Where creativity meets code",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentTextIndex < introTexts.length - 1) {
        setCurrentTextIndex((prev) => prev + 1);
      } else {
        setTimeout(onComplete, 1000);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [currentTextIndex, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated lines background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
          style={{ top: "30%" }}
        />
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          style={{ top: "60%" }}
        />
      </div>

      {/* Central text animation */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTextIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              {introTexts[currentTextIndex]}
            </h2>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom reveal line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 4, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

const MainContent = () => {
  

  // Function to handle resume download
  const handleResumeDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/drishti_resume.pdf'; // Make sure to add your resume PDF in the public folder
    link.download = 'Drishti_Resume.pdf'; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return(
  <RevealSection className="relative min-h-screen">
    <WaveBackground />

    <motion.div
      className="relative z-10 flex flex-col items-center justify-center min-h-screen px-2 py-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {/* Professional Focus Banner */}
        <motion.div
          className="mb-4 inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <span className="px-6 py-2 rounded-full bg-purple-500/10 backdrop-blur-sm text-purple-400 font-semibold text-lg">
            Ready to Collaborate
          </span>
        </motion.div>

        {/* Name Container */}
        <motion.h1 
          className="text-3xl md:text-7xl font-bold text-white mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          Hello, I'm{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-purple-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Drishti
            </span>
            <motion.span 
              className="absolute -top-2 -right-2 w-2 h-2 bg-purple-400 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </span>
        </motion.h1>

        {/* Role and Expertise */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Full Stack Developer
            <span className="block text-2xl md:text-3xl mt-4 bg-gradient-to-r from-purple-400 to-purple-400 bg-clip-text text-transparent">
              Building Modern Web Experiences
            </span>
          </h2>

          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Passionate about building innovative web solutions that bridge
            creativity and functionality. Specializing in modern full-stack
            development to create seamless, user-centric applications.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-8 mb-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <SocialLink
            icon={Github}
            href="https://github.com/Drishti-Rawat/"
            label="Projects"
            className="bg-white/5 hover:bg-white/10 p-3 rounded-lg backdrop-blur-sm"
          />
          <SocialLink
            icon={Linkedin}
            href="https://www.linkedin.com/in/drishti-rawat-250573216/"
            label="LinkedIn"
            className="bg-white/5 hover:bg-white/10 p-3 rounded-lg backdrop-blur-sm"
          />
          <SocialLink
            icon={Mail}
            href="mailto:drishtirwt019@gmail.com"
            label="Email"
            className="bg-white/5 hover:bg-white/10 p-3 rounded-lg backdrop-blur-sm"
          />
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              onClick={handleResumeDownload}
              className="px-8 py-3 bg-white/5 text-white border-white/10 hover:bg-white/10 
                       hover:border-white/20 backdrop-blur-sm group flex cursor-pointer"
            >
              <FileText className="w-6 h-6 mr-3 group-hover:rotate-6 transition-transform" />
              <span className="text-lg">My Resume</span>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a href="#contact" >
            <Button
              size="lg"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 
                       hover:from-purple-700 hover:to-indigo-700 text-white group flex cursor-pointer"
            >
              <Mail className="w-6 h-6 mr-3 group-hover:rotate-6 transition-transform" />
              <span className="text-lg">Get in Touch</span>
            </Button>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  </RevealSection>
  )
};

const AboutSection = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Zenith Excelecia",
      period: "June 2023 - August 2023",
      description:
        "Developed responsive and dynamic web pages using HTML, CSS, and JavaScript. Collaborated closely with the design team to implement UI/UX improvements.",
      type: "internship",
    },
    {
      title: "Full Stack Developer",
      company: "Xellerate",
      period: "November 2024 - Present",
      description:
        "Currently working on a platform that involves both frontend and backend development. Utilized React, Node.js, and MongoDB to build and maintain scalable web applications, focusing on creating a seamless user experience and optimizing server-side performance.",
      type: "internship",
    },
  ];

  return (
    <RevealSection className="min-h-screen bg-black py-20 px-6  relative">
      <StaggerChildren>
        <WaveDecoration />
        <div className="max-w-7xl mx-auto mb-7">
          {/* Hero About Section */}
          <FadeInChild>
            <div className="">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                {/* Intro Text */}
                <div className="flex-1">
                  <FadeInChild>
                    <span className="px-6 py-2 rounded-full bg-purple-500/20 text-purple-400 font-medium inline-block mb-6">
                      Hello, I'm Drishti
                    </span>
                  </FadeInChild>
                  <FadeInChild>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                      Turning Ideas Into <br />
                      <span className="text-purple-400">Digital Reality</span>
                    </h2>
                  </FadeInChild>
                  <FadeInChild>
                    <p className="text-xl text-gray-300 leading-relaxed mb-6">
                      I'm a passionate developer who loves creating seamless
                      digital experiences. With a keen eye for detail and a love
                      for clean code, I transform complex challenges into
                      elegant solutions.
                    </p>
                  </FadeInChild>
                </div>
              </div>
            </div>
          </FadeInChild>

          {/* Quick Facts */}
          <FadeInChild>

            <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Code2 className="w-6 h-6 text-purple-400" />,
                  title: "Tech Stack",
                  description:
                    "Specialized in modern web technologies including React, Next.js, and Node.js",
                },
                {
                  icon: <Heart className="w-6 h-6 text-purple-400" />,
                  title: "Passion",
                  description:
                    "Dedicated to creating intuitive and user-friendly web experiences",
                },
                {
                  icon: <GraduationCap className="w-6 h-6 text-purple-400" />,
                  title: "Education",
                  description:
                    "Computer Science background with focus on web development",
                },
              ].map((fact, index) => (
                <FadeInChild key={index}>
                  <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        {fact.icon}
                        <h3 className="text-xl font-semibold text-white">
                          {fact.title}
                        </h3>
                      </div>
                      <p className="text-gray-300">{fact.description}</p>
                    </CardContent>
                  </Card>
                </FadeInChild>
              ))}
            </div>
          </FadeInChild>

          {/* Experience Section */}
          <FadeInChild>
          <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
          <Building2 className="h-6 w-6 text-purple-400" />
          My Journey
        </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="bg-white/5 border-white/10 overflow-hidden hover:bg-white/10 transition-all"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">
                          {exp.title}
                        </h4>
                        <p className="text-purple-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                    </div>
                    <p className="text-gray-300">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </FadeInChild>
        </div>
      </StaggerChildren>
    </RevealSection>
  );
};

const TechStackSection = () => {
  const techStack = [
    { id: "html", tech: "HTML5", image: "/html_5.png" },
    { id: "css", tech: "CSS3", image: "/css.png" },
    { id: "js", tech: "JavaScript", image: "/javascript.png" },
    { id: "ts", tech: "TypeScript", image: "/typescript.png" },
    { id: "tailwind", tech: "Tailwind CSS", image: "/tailwindcss.png" },
    { id: "reactjs", tech: "React.js", image: "/react.png" },
    { id: "nextjs", tech: "Next.js", image: "/nextjs.png" },
    { id: "nodejs", tech: "Node.js", image: "/node.png" },
    { id: "express", tech: "Express.js", image: "/express.png" },
    { id: "mongodb", tech: "MongoDB", image: "/mongodb.png" },
    { id: "mysql", tech: "MySQL", image: "/mysql.png" },
    { id: "framer", tech: "Framer Motion", image: "/FramerMotion.png" },
  ];

  return (
    <RevealSection className="relative min-h-screen py-20 px-4 bg-black ">
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

          <FadeInChild>
            <Card className="h-full bg-gradient-to-br from-white/5 to-white/10 border-white/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Technical Arsenal
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {techStack.map((item) => (
                    <FadeInChild key={item.id}>
                      <TechStack {...item} />
                    </FadeInChild>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeInChild>
        </div>
      </StaggerChildren>
    </RevealSection>
  );
};


const ProjectSection = () => {
  const projects = [
    {
      title: "Gatherly Event Platform",
      description:
        "Gatherly is an event management platform where organizers can post events, and attendees can browse, purchase tickets, and manage their bookings seamlessly.",
      technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe"],
      image: "/Gatherly.png",
      githubLink: "https://github.com/Drishti-Rawat/Gatherly",
      liveLink: "https://gatherly-six.vercel.app/",
    },
    {
      title: "HireX Job Portal",
      description:
        "HireX is a job portal where employers can post job listings, and job seekers can browse and apply for available positions easily.",
      technologies: [
        "Next.js",
        "Node.js",
        "SQL",
        "TailwindCSS",
        "Framer Motion",
      ],
      image: "hirex.png",
      githubLink: "https://github.com/Drishti-Rawat/Job-Portel",
      liveLink: "https://job-portel-bay.vercel.app/",
    },
    {
      title: "EarlyDetect",
      description:
        "Interactive dashboard for tracking investment portfolio performance with real-time data visualization and market analysis tools.",
      technologies: [
        "Next.js",
        "Python",
        "Flask API",
        "TypeScript",
        "TailwindCSS",
        "Node.js",
      ],
      image: "cancer_detection.png",
      githubLink: "https://github.com/Drishti-Rawat/EarlyDetect",
      liveLink: "https://github.com/Drishti-Rawat/EarlyDetect",
    },
  ];
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <FadeInChild key={index}>
                <ProjectCard project={project} />
              </FadeInChild>
            ))}
          </div>
        </div>
      </StaggerChildren>
    </RevealSection>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Message sent successfully! I will get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(data.message || "Something went wrong!");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <RevealSection  className="relative min-h-screen py-20 px-4 bg-black ">
      <StaggerChildren>
        <WaveDecoration />
        <div className="max-w-7xl mx-auto ">
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
                Have a project in mind or just want to chat? Feel free to reach
                out!
              </p>
            </motion.div>
          </FadeInChild>
          <FadeInChild>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto"
            >
              <Card className="bg-gradient-to-br from-white/5 to-white/10 border-white/10 backdrop-blur-sm">
                <CardContent className="p-8 md:p-10">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {status.message && (
                      <Alert
                        variant={
                          status.type === "error" ? "destructive" : "default"
                        }
                        className={`${
                          status.type === "success"
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : "bg-red-500/20 text-red-400 border-red-500/30"
                        } border`}
                      >
                        <AlertDescription>{status.message}</AlertDescription>
                      </Alert>
                    )}

                    <div className="space-y-6">
                      <div className="relative group">
                        <User className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 transition-colors group-focus-within:text-purple-400" />
                        <Input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="pl-12 h-12 rounded-lg bg-white/5 border-white/10 text-white placeholder:text-gray-400
                               focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                        />
                      </div>

                      <div className="relative group">
                        <Mail className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 transition-colors group-focus-within:text-purple-400" />
                        <Input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="pl-12 h-12 rounded-lg bg-white/5 border-white/10 text-white placeholder:text-gray-400
                               focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                        />
                      </div>

                      <div className="relative group">
                        <MessageSquare className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 transition-colors group-focus-within:text-purple-400" />
                        <Input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="pl-12 h-12 rounded-lg bg-white/5 border-white/10 text-white placeholder:text-gray-400
                               focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                        />
                      </div>

                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="bg-white/5 rounded-lg border-white/10 text-white placeholder:text-gray-400
                             focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300
                             resize-none p-4"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700
                           text-white font-semibold py-6 rounded-lg transition-all duration-300
                           disabled:opacity-50 disabled:cursor-not-allowed group shadow-lg shadow-purple-500/20"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          >
                            <Send className="h-5 w-5" />
                          </motion.div>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </FadeInChild>
        </div>
      </StaggerChildren>
    </RevealSection>
  );
};


const Footer = () => {
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/Drishti-Rawat/", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/drishti-rawat-250573216/", label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:drishtirwt019@gmail.com", label: "Email" }
  ];

  return (
    <footer className="w-full  relative">
      {/* Gradient border top */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-white">Get in Touch</h3>
            <p className="text-gray-400">
              I'm always open to new opportunities and interesting projects.
              Feel free to reach out!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg
                         border border-white/10 hover:border-blue-500/50 backdrop-blur-sm
                         text-white transition-all duration-300"
            >
            drishtirwt019@gmail.com
            </motion.button>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-white">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white
                            backdrop-blur-sm transition-all duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Drishti. All rights reserved.</p>
        </div>
      </div>

      {/* Background gradient effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-50 -z-10"
      />
    </footer>
  );
};