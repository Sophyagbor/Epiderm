"use client";

import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    title: "Inclusive",
    copy: "Trained and tested on every skin tone — from the fairest to the deepest — so the scan reads you correctly.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M24 4a20 20 0 000 40"
          stroke="currentColor"
          strokeWidth="1.4"
          fill="currentColor"
          fillOpacity="0.15"
        />
      </svg>
    ),
  },
  {
    title: "Intelligent",
    copy: "Computer vision, guided by board-certified dermatologists. Your scan gets smarter with every user.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
        <rect x="8" y="12" width="32" height="24" rx="4" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="18" cy="24" r="3" fill="currentColor" />
        <circle cx="30" cy="24" r="3" fill="currentColor" />
        <path d="M16 32c3 2 13 2 16 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Effective",
    copy: "Every formula is built from peer-reviewed actives at clinically meaningful concentrations. No theatre.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
        <path
          d="M24 4l4 10 10 2-7 8 2 11-9-5-9 5 2-11-7-8 10-2z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function TrustSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={ref} className="relative bg-cream py-28 md:py-40 overflow-hidden">
      {/* Parallax blob */}
      <motion.div
        style={{ y }}
        className="absolute -right-40 top-20 w-[460px] h-[460px] rounded-full bg-sand-200/60 blur-3xl pointer-events-none"
        aria-hidden
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-40, 80]) }}
        className="absolute -left-40 bottom-10 w-[380px] h-[380px] rounded-full bg-clay-100/80 blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <span className="text-[11px] uppercase tracking-[0.3em] text-clay-500">
            What we stand for
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-6xl lg:text-7xl tracking-editorial leading-[1.02]">
            Skincare that&rsquo;s <span className="italic">inclusive</span>,{" "}
            <span className="italic">intelligent</span>,{" "}
            <span className="italic">effective</span>.
          </h2>
        </motion.div>

        <div className="mt-20 grid gap-10 md:gap-14 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >
              <div className="w-14 h-14 rounded-full bg-sand-100 border border-sand-200 flex items-center justify-center text-clay-500 transition-transform duration-500 group-hover:-translate-y-1">
                {p.icon}
              </div>
              <h3 className="mt-6 font-display text-3xl md:text-[34px] tracking-editorial">
                {p.title}
              </h3>
              <p className="mt-3 text-ink/65 leading-relaxed max-w-sm">
                {p.copy}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stat strip */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 border-t border-sand-200/80 pt-12">
          {[
            { k: "94%", v: "saw visible change in 8 weeks" },
            { k: "18", v: "dermatologists on our panel" },
            { k: "52", v: "skin markers analyzed per scan" },
            { k: "0", v: "sulfates, fragrance, dyes" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-5xl md:text-6xl tracking-editorial">
                {s.k}
              </div>
              <div className="mt-2 text-sm text-ink/60 max-w-[12rem]">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
