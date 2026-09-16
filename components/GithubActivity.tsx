"use client";

import { motion, Variants } from "framer-motion";
import { Github, ExternalLink, GitBranch, GitCommit, Star } from "lucide-react";
import { fadeUp, staggerContainer } from "../lib/utils";
import { accentAt } from "../lib/palette";

const stats = [
  {
    icon: GitBranch,
    value: "20+",
    label: "Repositories",
    detail: "Full-stack apps, APIs & experiments",
  },
  {
    icon: GitCommit,
    value: "500+",
    label: "Contributions",
    detail: "Consistent commits across the year",
  },
  {
    icon: Star,
    value: "8",
    label: "Core Technologies",
    detail: "React, Node.js, MongoDB, PostgreSQL & more",
  },
];

export default function GithubActivity() {
  return (
    <section id="github" className="section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp as Variants}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[.02] p-7 sm:p-10"
      >
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-30 blur-[100px]"
          style={{
            background:
              "conic-gradient(from 90deg, #818cf8, #22d3ee, #34d399, #818cf8)",
          }}
        />

        <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">06 / Developer Activity</span>
            <h2 className="section-title mb-3">Building in Public</h2>
            <p className="section-copy">
              Explore my GitHub for repositories, experiments and ongoing
              development work.
            </p>
          </div>
          <a
            href="https://github.com/vishal-chouhan21"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm transition hover:border-indigo-400/40 hover:bg-white/5"
          >
            <Github size={17} /> View GitHub <ExternalLink size={14} />
          </a>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative mt-10 grid gap-3 sm:grid-cols-3"
        >
          {stats.map((stat, i) => {
            const accent = accentAt(i);
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={fadeUp as Variants}
                className="rounded-xl border border-white/8 bg-black/20 p-5"
              >
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-lg border ${accent.chipBorder} ${accent.chipBg} ${accent.text}`}
                >
                  <Icon size={16} />
                </div>
                <p className={`mt-4 text-2xl font-bold ${accent.text}`}>
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-zinc-300">
                  {stat.label}
                </p>
                <p className="mt-1 font-mono text-[11px] text-zinc-600">
                  {stat.detail}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
