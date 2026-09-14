 "use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 450, damping: 30 });
  const sy = useSpring(y, { stiffness: 450, damping: 30 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    setEnabled(media.matches);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const enter = (e: Event) => {
      if ((e.target as HTMLElement)?.closest("a,button")) setHovering(true);
    };
    const leave = (e: Event) => {
      if ((e.target as HTMLElement)?.closest("a,button")) setHovering(false);
    };
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", enter);
    document.addEventListener("mouseout", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", enter);
      document.removeEventListener("mouseout", leave);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[120] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
        style={{ left: x, top: y }}
      />
      <motion.div
        className="pointer-events-none fixed z-[119] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50"
        style={{
          left: sx,
          top: sy,
          width: hovering ? 52 : 32,
          height: hovering ? 52 : 32
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}