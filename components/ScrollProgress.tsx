 "use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed left-0 top-0 z-[100] h-[2px] origin-left bg-gradient-to-r from-indigo-400 to-violet-400"
      style={{ scaleX: scrollYProgress, width: "100%" }}
    />
  );
}