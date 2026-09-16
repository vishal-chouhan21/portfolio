"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Menu, X, Download } from "lucide-react";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Strategy", "strategy"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const current = links
        .map(([, id]) => ({
          id,
          top:
            document.getElementById(id)?.getBoundingClientRect().top ??
            Infinity,
        }))
        .filter((x) => x.top < 180)
        .at(-1);
      if (current) setActive(current.id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#0d0a1b]/75 backdrop-blur-xl"
          : ""
      }`}
    >
      <nav className="mx-auto flex h-20 w-[min(1180px,calc(100%-28px))] items-center justify-between">
        <button
          onClick={() => go("home")}
          className="font-mono text-lg font-bold tracking-tight"
        >
          VISHAL<span className="text-indigo-400">.</span>
        </button>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, id]) => (
            <button
              key={id}
              onClick={() => go(id)}
              className={`relative py-2 text-sm transition ${
                active === id ? "text-white" : "text-zinc-500 hover:text-white"
              }`}
            >
              {label}
              {active === id && (
                <motion.span
                  layoutId="nav-dot"
                  className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-indigo-400"
                />
              )}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            aria-label="GitHub"
            href="https://github.com/vishal-chouhan21"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 text-zinc-400 hover:bg-white/5 hover:text-white"
          >
            <Github size={18} />
          </a>
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/vishal-singh-chouhan-028463299"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 text-zinc-400 hover:bg-white/5 hover:text-white"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="/resume.pdf"
            className="ml-2 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm hover:border-indigo-400/50 hover:bg-white/5"
          >
            <Download size={15} /> Resume
          </a>
        </div>

        <button
          className="rounded-lg p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-white/10 bg-[#0d0a1b]/95 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto flex w-[min(100%-28px,1180px)] flex-col py-5">
              {links.map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => go(id)}
                  className="border-b border-white/5 py-4 text-left text-zinc-300"
                >
                  {label}
                </button>
              ))}
              <a
                href="/resume.pdf"
                className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm"
              >
                <Download size={15} /> Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
