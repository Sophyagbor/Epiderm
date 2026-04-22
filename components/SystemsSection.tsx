"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SystemCardArt from "./SystemCardArt";

type System = {
  number: string;
  title: string;
  blurb: string;
  variant: "acne" | "pigmentation" | "barrier" | "sun";
};

const systems: System[] = [
  {
    number: "01",
    title: "Acne System",
    blurb:
      "Calm active breakouts and regulate oil with a routine built around salicylic and niacinamide.",
    variant: "acne",
  },
  {
    number: "02",
    title: "Pigmentation System",
    blurb:
      "Fade dark spots and even tone using tranexamic acid, vitamin C, and gentle exfoliation.",
    variant: "pigmentation",
  },
  {
    number: "03",
    title: "Barrier Repair System",
    blurb:
      "Rebuild a compromised skin barrier with ceramides, squalane, and panthenol — no sting, no strip.",
    variant: "barrier",
  },
  {
    number: "04",
    title: "Sun Damage System",
    blurb:
      "Undo years of UV stress with antioxidants, peptides, and everyday mineral protection.",
    variant: "sun",
  },
];

export default function SystemsSection() {
  return (
    <section className="relative bg-cream py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24"
        >
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-clay-500">
              Systems
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-6xl lg:text-7xl tracking-editorial max-w-3xl leading-[1.03]">
              Four rituals. <span className="italic">One</span> precise answer
              for your skin.
            </h2>
          </div>
          <p className="max-w-sm text-ink/60 md:text-right leading-relaxed">
            Curated by dermatologists. Tuned to your scan. Every system is a
            complete regimen — cleanser, treatment, moisturizer, protection.
          </p>
        </motion.div>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {systems.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href="/systems"
                className="group block relative overflow-hidden rounded-[28px] bg-sand-100 border border-sand-200/60 h-full"
              >
                <div className="relative aspect-[5/6] overflow-hidden">
                  <div className="absolute inset-0 transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]">
                    <SystemCardArt variant={s.variant} />
                  </div>
                  <div className="absolute top-5 left-5 text-[11px] uppercase tracking-[0.28em] text-ink/70">
                    {s.number}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                <div className="p-6 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl md:text-[26px] tracking-editorial leading-tight">
                      {s.title}
                    </h3>
                    <span className="mt-1 inline-flex w-9 h-9 items-center justify-center rounded-full border border-ink/15 transition-all duration-500 group-hover:bg-ink group-hover:text-cream group-hover:border-ink">
                      →
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-ink/60 leading-relaxed">
                    {s.blurb}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
