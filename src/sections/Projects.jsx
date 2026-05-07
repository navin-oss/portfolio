import { useState, useRef } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import ScrollReveal from "../components/ScrollReveal";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Ultra-smooth spring settings
  const springX = useSpring(x, { damping: 40, stiffness: 120, restDelta: 0.001 });
  const springY = useSpring(y, { damping: 40, stiffness: 120, restDelta: 0.001 });

  const handleMouseMove = (e) => {
    // Direct set is efficient with useMotionValue
    x.set(e.clientX - 160); 
    y.set(e.clientY - 112);
  };

  const [preview, setPreview] = useState(null);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
      id="work"
    >
      <ScrollReveal>
        <h2 className="text-heading">My Selected Projects</h2>
      </ScrollReveal>
      
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      
      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}

      {/* Optimized Mouse-Following Preview */}
      <motion.div
        className="fixed top-0 left-0 z-50 pointer-events-none"
        style={{ 
          x: springX, 
          y: springY,
          willChange: "transform" 
        }}
      >
        <AnimatePresence mode="popLayout">
          {preview && (
            <motion.div
              key={preview}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ 
                type: "spring",
                damping: 25,
                stiffness: 200,
                opacity: { duration: 0.15 } 
              }}
              style={{ willChange: "transform, opacity" }}
              className="overflow-hidden h-56 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] w-80 border border-white/20 backdrop-blur-xl bg-white/5"
            >
              <img
                src={preview}
                alt="Project Preview"
                className="object-cover w-full h-full"
                loading="eager"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>


      {/* Hidden pre-loading of all images */}
      <div className="hidden">
        {myProjects.map((p) => (
          <img key={p.id} src={p.image} alt="preload" />
        ))}
      </div>
    </section>
  );
};

export default Projects;

