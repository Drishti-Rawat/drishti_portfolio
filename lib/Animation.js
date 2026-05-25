import {
    motion,
    AnimatePresence,
    useScroll,
    useTransform,
    useSpring,
  } from "framer-motion";
 
 // RevealSection wrapper component
  export const RevealSection = ({ children, className }) => {
     return (
       <motion.div
         className={`min-h-screen ${className}`}
         initial={{ opacity: 0, y: 100 }}
         whileInView={{
           opacity: 1,
           y: 0,
           transition: {
             duration: 0.8,
             ease: [0.25, 0.1, 0.25, 1], // custom cubic bezier
           },
         }}
         viewport={{
           once: false,
           margin: "-20%", // Start animation before section is fully in view
         }}
       >
         <motion.div
           initial={{ scale: 0.95 }}
           whileInView={{
             scale: 1,
             transition: {
               duration: 0.8,
               ease: [0.25, 0.1, 0.25, 1],
             },
           }}
           viewport={{ once: false }}
         >
           {children}
         </motion.div>
       </motion.div>
     );
   };
   
   // Stagger children animation
   export const StaggerChildren = ({ children }) => {
     return (
       <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{ once: false, margin: "-20%" }}
         variants={{
           hidden: {},
           visible: {
             transition: {
               staggerChildren: 0.1,
             },
           },
         }}
       >
         {children}
       </motion.div>
     );
   };
   
   // Child animation for staggered elements
   export const FadeInChild = ({ children }) => {
     return (
       <motion.div
         variants={{
           hidden: { opacity: 0, y: 20 },
           visible: {
             opacity: 1,
             y: 0,
             transition: {
               duration: 0.5,
               ease: "easeOut",
             },
           },
         }}
       >
         {children}
       </motion.div>
     );
   };
 
 export const WaveBackground = () => {
   return (
     <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#050508]">
       {/* Slow, elegant sapphire blue background orb */}
       <motion.div
         className="absolute w-[500px] md:w-[700px] h-[500px] md:h-[700px] rounded-full bg-blue-500/[0.05] blur-[130px] md:blur-[160px]"
         animate={{
           x: [0, 60, -30, 0],
           y: [0, 80, 40, 0],
         }}
         transition={{
           duration: 25,
           repeat: Infinity,
           ease: "easeInOut",
         }}
         style={{ top: "-10%", left: "-5%" }}
       />
       {/* Slow, elegant deep indigo background orb */}
       <motion.div
         className="absolute w-[500px] md:w-[700px] h-[500px] md:h-[700px] rounded-full bg-indigo-500/[0.05] blur-[130px] md:blur-[160px]"
         animate={{
           x: [0, -60, 30, 0],
           y: [0, -80, -40, 0],
         }}
         transition={{
           duration: 30,
           repeat: Infinity,
           ease: "easeInOut",
         }}
         style={{ bottom: "10%", right: "-5%" }}
       />
       {/* Delicate grid mesh overlay */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808003_1px,transparent_1px),linear-gradient(to_bottom,#80808003_1px,transparent_1px)] bg-[size:32px_32px] opacity-50" />
     </div>
   );
 };
 
 export const WaveDecoration = () => {
   return (
     <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
       {/* Static/gentle ambient spots for sections to enrich colors */}
       <motion.div
         className="absolute w-[500px] h-[500px] rounded-full bg-purple-500/[0.03] blur-[120px]"
         animate={{
           x: [0, 40, -20, 0],
           y: [0, -45, 25, 0],
         }}
         transition={{
           duration: 22,
           repeat: Infinity,
           ease: "easeInOut",
         }}
         style={{ top: "20%", right: "5%" }}
       />
       <motion.div
         className="absolute w-[450px] h-[450px] rounded-full bg-indigo-500/[0.03] blur-[110px]"
         animate={{
           x: [0, -40, 20, 0],
           y: [0, 45, -25, 0],
         }}
         transition={{
           duration: 26,
           repeat: Infinity,
           ease: "easeInOut",
         }}
         style={{ bottom: "10%", left: "5%" }}
       />
       {/* Delicate grid mesh overlay */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808003_1px,transparent_1px),linear-gradient(to_bottom,#80808003_1px,transparent_1px)] bg-[size:32px_32px] opacity-50" />
     </div>
   );
 };