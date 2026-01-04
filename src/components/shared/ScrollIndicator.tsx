import { useScroll, useSpring } from 'framer-motion';
import { motion } from 'framer-motion';

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      id="scroll-indicator"
      style={{ scaleX }}
      className="fixed left-0 top-0 z-50 h-0.5 w-full origin-left bg-primary"
    />
  );
}

