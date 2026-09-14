"use client";

import { motion, type Variants } from "framer-motion";
import {
  ClipboardList,
  Code2,
  Database,
  ShieldCheck,
  Container,
  Rocket,
  Activity,
} from "lucide-react";
import { deploymentStrategy } from "../data/experience";
import { fadeUp, staggerContainer } from "../lib/utils";
import { accentAt } from "../lib/palette";

const icons = [
  ClipboardList,
  Code2,
  Database,
  ShieldCheck,
  Container,
  Rocket,
  Activity,
];

export default function Strategy() {
  return (
    <section id="strategy" className="section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp as Variants}
      >
        <span className="eyebrow">04 / Strategy</span>
        <h2 className="section-title">My end-to-end deployment strategy.</h2>
        <p className="section-copy">
          Every project follows the same disciplined pipeline — from planning
          the data model to shipping and monitoring it in production.
        </p>
      </motion.div>

      <div className="relative mt-14">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="absolute left-0 right-0 top-6 hidden h-px origin-left lg:block"
          style={{
            background: "none",
          }}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {deploymentStrategy.map((step, i) => {
            const Icon = icons[i % icons.length];
            const accent = accentAt(i);
            return (
              <motion.div
                key={step.phase}
                variants={fadeUp as Variants}
                whileHover={{ y: -6 }}
                className={`group relative rounded-2xl border border-white/10 bg-white/[.03] p-6 transition ${accent.border} hover:bg-white/[.04]`}
              >
                <div
                  className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border ${accent.chipBorder} ${accent.chipBg} ${accent.text}`}
                >
                  <Icon size={20} />
                  <motion.span
                    className={`absolute inset-0 -z-10 rounded-xl ${accent.glow} blur-lg`}
                    animate={{ opacity: [0.15, 0.5, 0.15] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.25,
                    }}
                  />
                </div>
                <span className="mt-5 block font-mono text-xs text-zinc-600">
                  STEP {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 text-base font-bold">{step.phase}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  {step.detail}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
