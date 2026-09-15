"use client";

import { motion, type Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { experience } from "../data/experience";
import { fadeLeft, fadeUp, staggerContainer } from "../lib/utils";
import { accentAt } from "../lib/palette";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp as Variants}
      >
        <span className="eyebrow">03 / Experience</span>
        <h2 className="section-title">Where I&apos;ve been building.</h2>
        <p className="section-copy">
          1+ years of hands-on experience designing, developing and deploying
          full-stack applications end-to-end — code, databases and cloud
          infrastructure.
        </p>
      </motion.div>

      <div className="relative mt-12 pl-7 sm:pl-12">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute bottom-0 left-1 top-0 w-px origin-top bg-gradient-to-b from-indigo-400 to-transparent"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="flex flex-col gap-10"
        >
          {experience.map((entry) => (
            <motion.div
              key={entry.role}
              variants={fadeLeft as Variants}
              className="relative rounded-2xl border border-white/10 bg-white/[.03] p-6 sm:p-8"
            >
              <span className="absolute -left-[31px] top-8 h-3 w-3 rounded-full border-2 border-indigo-300 bg-[#0a0714] sm:-left-[55px]" />

              <div className="flex flex-col justify-between gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-center">
                <div>
                  <p className="font-mono text-xs text-indigo-300">
                    {entry.company.toUpperCase()}
                  </p>
                  <h3 className="mt-2 text-xl font-bold">{entry.role}</h3>
                </div>
                <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:gap-1">
                  <span className="text-sm font-semibold text-zinc-300">
                    {entry.duration}
                  </span>
                  <span className="rounded-full border border-indigo-400/30 bg-indigo-400/10 px-3 py-1 text-xs font-semibold text-indigo-300">
                    {entry.type}
                  </span>
                </div>
              </div>

              <p className="mt-5 max-w-2xl text-sm leading-6 text-zinc-500">
                {entry.summary}
              </p>

              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {entry.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-sm leading-6 text-zinc-400"
                  >
                    <CheckCircle2
                      size={16}
                      className="mt-1 shrink-0 text-indigo-400"
                    />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-2">
                {entry.technologies.map((t, ti) => {
                  const accent = accentAt(ti);
                  return (
                    <span
                      key={t}
                      className={`rounded-full border ${accent.chipBorder} ${accent.chipBg} px-3 py-1 text-xs ${accent.text}`}
                    >
                      {t}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
