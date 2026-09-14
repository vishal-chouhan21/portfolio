 "use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-60" />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[.11]"
        style={{
          background:
            "conic-gradient(from 0deg, #8b6dff, #d06dff, #6d7cff, #8b6dff)",
          filter: "blur(160px)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-500/[.14] blur-[120px]"
        animate={{ x: [0, 80, 0], y: [0, 50, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-40 top-[45%] h-96 w-96 rounded-full bg-fuchsia-500/[.12] blur-[120px]"
        animate={{ x: [0, -70, 0], y: [0, -50, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-[30%] h-80 w-80 rounded-full bg-indigo-500/[.09] blur-[110px]"
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 28 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 61) % 100}%`
            }}
            animate={{ opacity: [0.15, 0.7, 0.15], y: [0, -12, 0] }}
            transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.1 }}
          />
        ))}
      </div>
    </div>
  );
}