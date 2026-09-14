"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { CheckCircle2, Github, Linkedin, Mail, Send } from "lucide-react";
import { fadeUp } from "../lib/utils";
import { accentAt } from "../lib/palette";

const contactFadeUp: Variants = {
  ...fadeUp,
  visible: {
    ...fadeUp.visible,
    transition: {
      ...fadeUp.visible.transition,
      ease: "easeOut" as const,
    },
  },
};

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      e.currentTarget.reset();
    }, 900);
  };

  return (
    <section id="contact" className="section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={contactFadeUp}
      >
        <span className="eyebrow">07 / Contact</span>
        <h2 className="section-title">Contact Me</h2>
        <p className="section-copy">
          Tell me about your next project — I&apos;d love to hear about it and
          get back to you soon.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_.55fr]">
        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={contactFadeUp}
          onSubmit={submit}
          className="rounded-2xl border border-white/10 bg-white/[.03] p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <div className="mt-5">
            <Field label="Message" name="message" textarea required />
          </div>
          <button
            disabled={loading}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400 px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"} <Send size={15} />
          </button>

          <AnimatePresence>
            {sent && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center gap-2 text-sm text-emerald-300"
              >
                <CheckCircle2 size={16} /> Message ready — connect this form to
                your email/API endpoint.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={contactFadeUp}
          className="space-y-3"
        >
          <ContactLink
            icon={<Mail size={18} />}
            title="Email"
            value="your-email@example.com"
            href="mailto:your-email@example.com"
            accentIndex={2}
          />
          <ContactLink
            icon={<Github size={18} />}
            title="GitHub"
            value="github.com/your-username"
            href="https://github.com/"
            accentIndex={0}
          />
          <ContactLink
            icon={<Linkedin size={18} />}
            title="LinkedIn"
            value="linkedin.com/in/your-profile"
            href="https://www.linkedin.com/"
            accentIndex={1}
          />
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea = false,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  const common = {
    name,
    required,
    placeholder: " ",
  };
  return (
    <label className="relative block">
      {textarea ? (
        <textarea
          {...common}
          rows={6}
          className="peer w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 pb-3 pt-6 text-sm outline-none transition focus:border-indigo-400/50"
        />
      ) : (
        <input
          {...common}
          type={type}
          className="peer w-full rounded-xl border border-white/10 bg-black/20 px-4 pb-3 pt-6 text-sm outline-none transition focus:border-indigo-400/50"
        />
      )}
      <span className="pointer-events-none absolute left-4 top-2 text-[10px] text-zinc-600 transition peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-indigo-300">
        {label}
      </span>
    </label>
  );
}

function ContactLink({
  icon,
  title,
  value,
  href,
  accentIndex = 0,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
  accentIndex?: number;
}) {
  const accent = accentAt(accentIndex);
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[.03] p-5 transition ${accent.border}`}
    >
      <span
        className={`rounded-xl border ${accent.chipBorder} ${accent.chipBg} p-3 ${accent.text}`}
      >
        {icon}
      </span>
      <span>
        <span className="block text-xs text-zinc-600">{title}</span>
        <span className="mt-1 block text-sm text-zinc-300">{value}</span>
      </span>
    </a>
  );
}
