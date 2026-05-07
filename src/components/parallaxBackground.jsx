import { motion, useScroll, useSpring, useTransform } from "motion/react";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        {/* Background Sky */}
        <img
          src="/assets/sky.jpg"
          alt="sky"
          className="absolute inset-0 w-full h-full object-cover -z-50"
          style={{ objectPosition: "bottom" }}
          fetchPriority="high"
        />
        {/* Mountain Layer 3 */}
        <motion.img
          src="/assets/mountain-3.png"
          alt="mountain"
          className="absolute inset-0 w-full h-full object-cover -z-40"
          style={{ objectPosition: "bottom", y: mountain3Y }}
        />
        {/* Planets */}
        <motion.img
          src="/assets/planets.png"
          alt="planets"
          className="absolute inset-0 w-full h-full object-cover -z-30"
          style={{ objectPosition: "bottom", x: planetsX }}
        />
        {/* Mountain Layer 2 */}
        <motion.img
          src="/assets/mountain-2.png"
          alt="mountain"
          className="absolute inset-0 w-full h-full object-cover -z-20"
          style={{ objectPosition: "bottom", y: mountain2Y }}
        />
        {/* Mountain Layer 1 */}
        <motion.img
          src="/assets/mountain-1.png"
          alt="mountain"
          className="absolute inset-0 w-full h-full object-cover -z-10"
          style={{ objectPosition: "bottom", y: mountain1Y }}
        />
      </div>
    </section>
  );
};


export default ParallaxBackground;
