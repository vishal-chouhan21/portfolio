// A small, deliberate accent system inspired by code-editor syntax themes —
// each accent reads like a token color (keyword / string / type / function),
// which ties the extra color back to the "developer" subject matter instead
// of being decorative confetti. Cycle through these for cards/sections so the
// page reads as intentionally colorful rather than monochrome or random.

export type Accent = {
  name: string;
  text: string; // icon / heading accent color
  border: string; // hover border color
  chipBorder: string; // static border for badges/pills
  chipBg: string; // subtle tinted background
  glow: string; // blurred glow behind icons
  dot: string; // solid background, e.g. for bullet/legend dots
};

export const palette: Accent[] = [
  {
    name: "indigo",
    text: "text-indigo-300",
    border: "hover:border-indigo-400/35",
    chipBorder: "border-indigo-400/25",
    chipBg: "bg-indigo-400/10",
    glow: "bg-indigo-400/25",
    dot: "bg-indigo-400",
  },
  {
    name: "cyan",
    text: "text-cyan-300",
    border: "hover:border-cyan-400/35",
    chipBorder: "border-cyan-400/25",
    chipBg: "bg-cyan-400/10",
    glow: "bg-cyan-400/25",
    dot: "bg-cyan-400",
  },
  {
    name: "emerald",
    text: "text-emerald-300",
    border: "hover:border-emerald-400/35",
    chipBorder: "border-emerald-400/25",
    chipBg: "bg-emerald-400/10",
    glow: "bg-emerald-400/25",
    dot: "bg-emerald-400",
  },
  {
    name: "amber",
    text: "text-amber-300",
    border: "hover:border-amber-400/35",
    chipBorder: "border-amber-400/25",
    chipBg: "bg-amber-400/10",
    glow: "bg-amber-400/25",
    dot: "bg-amber-400",
  },
  {
    name: "rose",
    text: "text-rose-300",
    border: "hover:border-rose-400/35",
    chipBorder: "border-rose-400/25",
    chipBg: "bg-rose-400/10",
    glow: "bg-rose-400/25",
    dot: "bg-rose-400",
  },
  {
    name: "violet",
    text: "text-violet-300",
    border: "hover:border-violet-400/35",
    chipBorder: "border-violet-400/25",
    chipBg: "bg-violet-400/10",
    glow: "bg-violet-400/25",
    dot: "bg-violet-400",
  },
];

export const accentAt = (i: number) => palette[i % palette.length];
