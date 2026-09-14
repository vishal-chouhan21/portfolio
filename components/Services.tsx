"use client";

import { motion, Variants } from "framer-motion";
import { Blocks, Database, Layout, ServerCog, Container, Cloud } from "lucide-react";
import { fadeUp, staggerContainer } from "../lib/utils";
import { accentAt } from "../lib/palette";

const services = [
  [
    "Full-Stack Development",
    "Building complete web applications from frontend to backend.",
    Blocks,
  ],
  ["API Development", "Designing secure and scalable REST APIs with Express and NestJS.", ServerCog],
  ["UI Development", "Creating responsive and modern interfaces.", Layout],
  [
    "Database Design & Management",
    "Modeling data in MongoDB and PostgreSQL/SQL, with query optimization and indexing.",
    Database,
  ],
  [
    "Containerization",
    "Packaging applications with Docker for consistent, portable environments.",
    Container,
  ],
  [
    "Cloud Deployment & DevOps",
    "End-to-end deployment on AWS with Docker, Nginx and CI/CD pipelines for monitoring and scaling.",
    Cloud,
  ],
] as const;

export default function Services() {
  return (
    <section id="services" className="section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp as Variants}
      >
        <span className="eyebrow">06 / Services</span>
        <h2 className="section-title">What I Offer</h2>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="mt-12 grid gap-5 sm:grid-cols-2"
      >
        {services.map(([title, description, Icon], i) => {
          const accent = accentAt(i);
          return (
            <motion.div
              key={title}
              variants={fadeUp as Variants}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[.03] p-8 transition sm:p-10 ${accent.border}`}
            >
              <div
                className={`absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100 ${accent.glow}`}
              />
              <div
                className={`relative flex h-14 w-14 items-center justify-center rounded-2xl border ${accent.chipBorder} ${accent.chipBg} ${accent.text}`}
              >
                <Icon size={24} className="transition-transform group-hover:scale-110" />
              </div>
              <h3 className="relative mt-8 text-2xl font-bold">{title}</h3>
              <p className="relative mt-3 max-w-sm text-sm leading-6 text-zinc-500">
                {description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
