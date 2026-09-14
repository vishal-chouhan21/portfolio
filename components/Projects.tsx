"use client";

import { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { ArrowUpRight, Github, X } from "lucide-react";
import { projects, type Project } from "../data/projects";
import { fadeLeft, fadeRight, fadeUp, staggerContainer } from "../lib/utils";
import { accentAt } from "../lib/palette";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp as Variants}
      >
        <span className="eyebrow">05 / Projects</span>
        <h2 className="section-title">Things I&apos;ve built.</h2>
        <p className="section-copy">
          Selected projects that show how I approach product thinking, frontend
          craft and backend engineering.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
        variants={staggerContainer as Variants}
        className="mt-12 grid gap-5"
      >
        {projects.map((project, i) => {
          const accent = accentAt(project.accentIndex);
          return (
            <motion.article
              key={project.name}
              variants={(i % 2 === 0 ? fadeLeft : fadeRight) as Variants}
              whileHover={{ y: -4 }}
              className={`group overflow-hidden rounded-2xl border border-white/10 bg-white/[.03] transition ${accent.border}`}
            >
              <div className="grid lg:grid-cols-[.95fr_1.05fr]">
                <div
                  className={`relative min-h-56 overflow-hidden border-b border-white/10 p-7 lg:border-b-0 lg:border-r ${accent.chipBg}`}
                >
                  <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:32px_32px]" />
                  <div
                    className={`absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-40 blur-3xl ${accent.glow}`}
                  />
                  <div className="relative flex h-full flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-zinc-600">
                        0{i + 1}
                      </span>
                      <span
                        className={`rounded-full border ${accent.chipBorder} px-3 py-1 text-[11px] font-medium ${accent.text}`}
                      >
                        {project.category}
                      </span>
                    </div>
                    <div>
                      <div
                        className={`mb-3 h-10 w-10 rounded-xl border ${accent.chipBorder} bg-black/30`}
                      />
                      <h3 className="text-3xl font-bold tracking-tight">
                        {project.name}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="p-7 sm:p-9">
                  <p className="max-w-2xl leading-7 text-zinc-500">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setSelected(project)}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
                    >
                      View Project <ArrowUpRight size={15} />
                    </button>
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm text-zinc-300"
                      >
                        <Github size={15} /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </motion.div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const accent = accentAt(project.accentIndex);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[85vh] w-full max-w-2xl overflow-auto rounded-2xl border border-white/10 bg-[#150f28] p-7 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full border border-white/10 p-2 text-zinc-400 hover:text-white"
          aria-label="Close"
        >
          <X size={18} />
        </button>
        <span
          className={`rounded-full border ${accent.chipBorder} ${accent.chipBg} px-3 py-1 font-mono text-xs ${accent.text}`}
        >
          {project.category}
        </span>
        <h3 className="mt-4 pr-12 text-3xl font-bold">{project.name}</h3>
        <p className="mt-5 leading-7 text-zinc-500">{project.description}</p>
        <h4 className="mt-8 font-semibold">Key features</h4>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {project.features.map((f) => (
            <li
              key={f}
              className="rounded-lg border border-white/8 bg-white/[.03] px-3 py-2 text-sm text-zinc-400"
            >
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-7 flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-zinc-400"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
