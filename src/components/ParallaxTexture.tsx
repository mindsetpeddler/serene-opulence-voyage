import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxTextureProps {
  image: string;
  speed: number;
  className?: string;
}

const ParallaxTexture = ({ image, speed, className = "" }: ParallaxTextureProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 500]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`absolute w-full h-[600px] pointer-events-none z-0 ${className}`}
    >
      <img 
        src={image} 
        alt="" 
        className="w-full h-full object-cover filter brightness-50"
      />
    </motion.div>
  );
};

export default ParallaxTexture;