"use client";

import { motion, type Variants } from "framer-motion";
import { fadeUp, staggerContainer } from "../lib/utils";
import { accentAt } from "../lib/palette";

const stats = [
  ["2+", "Years of Experience"],
  ["5+", "Production Apps Deployed"],
  ["3", "Databases (MongoDB, PostgreSQL, SQL)"],
  ["15+", "Technologies"],
];

export default function About() {
  return (
    <section id="about" className="section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp as Variants}
      >
        <span className="eyebrow">01 / About</span>

        {/* FIX 1: Used Tailwind utility classes directly to force the gradient text to work */}
        <h2 className="section-title bg-gradient-to-r from-white via-[#c3b0ff] to-[#d99aff] bg-clip-text text-transparent">
          About Me
        </h2>

        <p className="section-copy">
          I&apos;m a Full-Stack Developer with 2+ years of experience building
          and shipping scalable, production-ready web applications end-to-end.
          Beyond writing frontend and backend code, I design database schemas in
          both MongoDB and PostgreSQL/SQL, build secure REST APIs, and take
          applications all the way through containerization, CI/CD and cloud
          deployment — not just building software, but delivering it.
        </p>

        <div className="mt-5 flex flex-wrap gap-2 text-xs">
          {[
            "MERN Stack",
            "REST APIs",
            "Authentication",
            "MongoDB",
            "PostgreSQL",
            "SQL",
            "React",
            "Node.js",
            "NestJS",
            "Next.js",
            "Docker",
            "CI/CD",
            "AWS",
            "Git",
            "DSA",
          ].map((x, i) => {
            const accent = accentAt(i);
            return (
              <span
                key={x}
                className={`rounded-full border ${accent.chipBorder} px-3 py-1.5 text-[var(--muted)] transition-colors hover:bg-[var(--border)] hover:text-[var(--text)]`}
              >
                {x}
              </span>
            );
          })}
        </div>
      </motion.div>

      {/* FIX 2: Restored bg-[var(--border)] (or bg-white/10) so the gap-px shows up as a visible line */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] md:grid-cols-4"
      >
        {stats.map(([number, label], i) => {
          const accent = accentAt(i);
          return (
            <motion.div
              key={label}
              variants={fadeUp as Variants}
              className="relative bg-[var(--surface)] p-6 transition-colors hover:bg-[var(--surface-2)] sm:p-8"
            >
              <div
                className={`absolute left-0 top-0 h-full w-[3px] ${accent.dot} opacity-70`}
              />
              <div
                className={`text-3xl font-bold tracking-tight sm:text-4xl ${accent.text}`}
              >
                {number}
              </div>
              <div className="mt-2 text-xs text-[var(--muted)] sm:text-sm">
                {label}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
