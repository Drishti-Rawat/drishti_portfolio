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
  
 export const WaveBackground = () => (
    <svg
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="none"
      viewBox="0 0 1200 800"
    >
      {[0, 1, 2].map((index) => (
        <motion.path
          key={index}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 0.2,
            d: [
              `M 0 ${300 + index * 100} Q 300 ${100 + index * 200} 600 ${
                300 + index * 100
              } T 1200 ${300 + index * 100} V 800 H 0 V ${300 + index * 100}`,
              `M 0 ${300 + index * 100} Q 300 ${500 + index * 200} 600 ${
                300 + index * 100
              } T 1200 ${300 + index * 100} V 800 H 0 V ${300 + index * 100}`,
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: index * 0.2,
          }}
          fill="none"
          stroke={
            index === 0
              ? "rgb(59, 130, 246)"
              : index === 1
              ? "rgb(99, 102, 241)"
              : "rgb(16, 185, 129)"
          }
          strokeWidth="2"
        />
      ))}
    </svg>
  );

// Wave decoration with fixed unique keys
export const WaveDecoration = () => {
  // Define wave configurations with unique IDs
  const waves = [
    { id: "wave-1", offset: 0, color: "rgb(59, 130, 246)" },
    { id: "wave-2", offset: 1, color: "rgb(99, 102, 241)" },
    { id: "wave-3", offset: 2, color: "rgb(16, 185, 129)" },
  ];

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="none"
      viewBox="0 0 1200 800"
      style={{ zIndex: 0 }}
    >
      {waves.map(({ id, offset, color }) => (
        <motion.path
          key={id}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 0.1,
            d: [
              `M 0 ${400 + offset * 100} Q 300 ${200 + offset * 200} 600 ${
                400 + offset * 100
              } T 1200 ${400 + offset * 100} V 800 H 0 V ${400 + offset * 100}`,
              `M 0 ${400 + offset * 100} Q 300 ${600 + offset * 200} 600 ${
                400 + offset * 100
              } T 1200 ${400 + offset * 100} V 800 H 0 V ${400 + offset * 100}`,
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: offset * 0.5,
          }}
          fill="none"
          stroke={color}
          strokeWidth="2"
        />
      ))}
    </svg>
  );
};