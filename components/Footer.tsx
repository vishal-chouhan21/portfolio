 "use client";

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex w-[min(1180px,calc(100%-28px))] flex-col gap-5 py-9 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-zinc-400">Designed & Built by Vishal Singh Chouhan</p>
          <p className="mt-1 text-xs text-zinc-700">© 2026 Vishal Singh Chouhan. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-2">
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full p-2 text-zinc-500 transition hover:text-white"><Github size={17} /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full p-2 text-zinc-500 transition hover:text-cyan-300"><Linkedin size={17} /></a>
          <a href="mailto:your-email@example.com" aria-label="Email" className="rounded-full p-2 text-zinc-500 transition hover:text-emerald-300"><Mail size={17} /></a>
          <a href="#home" aria-label="Back to top" className="ml-2 rounded-full border border-white/10 p-2 text-zinc-400 transition hover:border-indigo-400/40 hover:text-white"><ArrowUp size={17} /></a>
        </div>
      </div>
    </footer>
  );
}