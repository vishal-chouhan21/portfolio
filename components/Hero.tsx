"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col overflow-hidden bg-[#0d0a17] pt-8"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(139,92,246,0.15),transparent)]" />

      {/* Top nav */}
      <div className="relative z-30 flex w-full items-center justify-center px-6 py-6 sm:px-10 xl:px-16">
        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 translate-y-22 sm:flex">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-xs font-medium text-zinc-300">
            Full-Stack Developer
          </span>
        </div>
      </div>

      {/* Center: name (background text) */}
      <div className="relative flex w-full flex-1 flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="pointer-events-none relative z-10 -translate-y-10 select-none text-center text-[16vw] font-black leading-none tracking-tight text-white xl:text-[10.5rem]"
        >
          VISHAL SINGH
          <span className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 text-[16vw] font-black leading-none tracking-tight text-white/5 xl:text-[10.5rem]">
            CHOUHAN
          </span>
        </motion.h1>

        {/* Left: client/stat cluster */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="absolute bottom-[18%] left-6 z-30 hidden flex-col xl:left-16 xl:flex"
        >
          <div className="mb-3 flex -space-x-3">
            <div className="h-9 w-9 rounded-full border-2 border-[#0d0a17] bg-zinc-400" />
            <div className="h-9 w-9 rounded-full border-2 border-[#0d0a17] bg-zinc-500" />
            <div className="h-9 w-9 rounded-full border-2 border-[#0d0a17] bg-zinc-600" />
          </div>
          <p className="text-sm font-medium text-zinc-300">
            <span className="font-bold text-white">2+ Years</span> building
            scalable products
          </p>
        </motion.div>

        {/* Right: CTA */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="absolute bottom-[18%] right-6 z-30 hidden flex-col text-right xl:right-16 xl:flex"
        >
          <h3 className="mb-2 text-lg font-semibold text-zinc-300">
            Have any <span className="text-white">project in mind?</span>
          </h3>
          <a
            href="#contact"
            className="group flex items-center justify-end gap-2 text-base font-semibold text-violet-400 transition-all hover:text-violet-300"
          >
            Let&apos;s Work Together
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>

      {/* Profile photo — anchored to the section's bottom, aligned with the bottom columns row */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        className="pointer-events-none absolute inset-x-0 bottom-24 z-10 flex w-full items-end justify-center md:bottom-28 xl:bottom-32"
      >
        <div className="relative w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[520px]">
          <div className="absolute left-1/2 top-1/3 -z-10 h-[90%] w-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-[90px]" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/profile3.png"
            alt="Vishal Singh Chouhan"
            className="relative h-auto w-full translate-y-32 object-contain object-bottom"
          />
        </div>
      </motion.div>

      {/* Bottom columns: skills + socials */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7 }}
        className="relative z-30 hidden w-full items-end justify-between px-10 pb-10 md:flex xl:px-16"
      >
        <ul className="flex w-[220px] flex-col gap-3 text-xs font-semibold tracking-[0.15em] text-zinc-400">
          <li className="border-b border-white/10 pb-3 transition hover:text-white">
            WEB DESIGN
          </li>
          <li className="border-b border-white/10 pb-3 transition hover:text-white">
            UI/UX DESIGN
          </li>
          <li className="border-b border-white/10 pb-3 transition hover:text-white">
            PRODUCT DESIGN
          </li>
          <li className="transition hover:text-white">BRANDING DESIGN</li>
        </ul>

        <ul className="flex w-[220px] flex-col gap-3 text-right text-xs font-semibold tracking-[0.15em] text-zinc-400">
          <li className="border-b border-white/10 pb-3 transition hover:text-white">
            <a href="https://instagram.com/">INSTAGRAM</a>
          </li>
          <li className="border-b border-white/10 pb-3 transition hover:text-white">
            <a href="https://dribbble.com/">DRIBBBLE</a>
          </li>
          <li className="border-b border-white/10 pb-3 transition hover:text-white">
            <a href="https://linkedin.com/">LINKEDIN</a>
          </li>
          <li className="transition hover:text-white">
            <a href="https://facebook.com/">FACEBOOK</a>
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
