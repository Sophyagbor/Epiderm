"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/skin-scan", label: "Skin Scan" },
  { href: "/systems", label: "Systems" },
  { href: "/community", label: "Community" },
  { href: "/learn", label: "Learn" },
  { href: "/about", label: "About" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/80 backdrop-blur-md border-b border-sand-200/60"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex items-center justify-between px-6 md:px-10 h-16 md:h-20">
        <Link
          href="/"
          className="font-display text-2xl tracking-editorial text-ink"
        >
          Epiderm
          <span className="text-clay-400">.</span>
        </Link>

        <ul className="hidden md:flex items-center gap-9 text-[13px] uppercase tracking-[0.18em] text-ink/70">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="relative py-2 transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/skin-scan"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-ink text-cream px-5 py-2.5 text-[12px] uppercase tracking-[0.2em] hover:bg-clay-700 transition-colors"
        >
          Start scan
          <span aria-hidden>→</span>
        </Link>

        <button
          aria-label="Toggle menu"
          className="md:hidden relative w-9 h-9 flex items-center justify-center"
          onClick={() => setOpen((o) => !o)}
        >
          <span
            className={`absolute w-5 h-px bg-ink transition-transform ${
              open ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute w-5 h-px bg-ink transition-transform ${
              open ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-cream border-t border-sand-200/60"
          >
            <ul className="flex flex-col px-6 py-6 gap-5">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl tracking-editorial"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/skin-scan"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-ink text-cream px-5 py-3 text-[12px] uppercase tracking-[0.2em]"
                >
                  Start your skin scan →
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
