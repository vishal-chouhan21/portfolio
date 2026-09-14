"use client";

import { motion, Variants } from "framer-motion";
import { Code2, Database, Server, Wrench, Braces, Cloud } from "lucide-react";
import { skillGroups } from "../data/skills";
import { fadeUp, staggerContainer } from "../lib/utils";
import { accentAt } from "../lib/palette";

const icons = [Code2, Server, Database, Cloud, Braces, Wrench];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp as Variants}
      >
        <span className="eyebrow">02 / Skills</span>
        <h2 className="section-title">Tools I build with.</h2>
        <p className="section-copy">
          A practical, production-tested stack — from interfaces and APIs to
          MongoDB &amp; PostgreSQL/SQL databases, containerization and cloud
          deployment.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        {skillGroups.map((group, i) => {
          const Icon = icons[i];
          const accent = accentAt(i);
          return (
            <motion.div
              key={group.title}
              variants={fadeUp as Variants}
              whileHover={{ y: -5 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[.03] p-6 transition ${accent.border} hover:bg-white/[.04]`}
            >
              <span
                className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-current to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-70 ${accent.text}`}
              />
              <div className="mb-6 flex items-center gap-3">
                <div
                  className={`relative rounded-xl border ${accent.chipBorder} ${accent.chipBg} p-2.5 ${accent.text}`}
                >
                  <Icon size={19} />
                </div>
                <h3 className="font-semibold">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/8 bg-black/20 px-3 py-2 text-xs text-zinc-400 transition group-hover:text-zinc-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
