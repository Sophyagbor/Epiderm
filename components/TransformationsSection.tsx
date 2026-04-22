"use client";

import { motion } from "framer-motion";
import BeforeAfterSlider from "./BeforeAfterSlider";

type Tone = "warm" | "deep" | "fair" | "medium";

const stories: {
  name: string;
  age: number;
  tone: Tone;
  system: string;
  weeks: number;
  quote: string;
  seed: number;
}[] = [
  {
    name: "Amara",
    age: 26,
    tone: "deep",
    system: "Pigmentation System",
    weeks: 12,
    quote: "My hyperpigmentation finally faded — evenly, not in patches.",
    seed: 11,
  },
  {
    name: "Jules",
    age: 22,
    tone: "fair",
    system: "Acne System",
    weeks: 10,
    quote: "I stopped hiding under foundation. That alone is everything.",
    seed: 23,
  },
  {
    name: "Kenji",
    age: 34,
    tone: "medium",
    system: "Barrier Repair System",
    weeks: 8,
    quote: "No more stinging after cleansing. My skin just feels calm.",
    seed: 5,
  },
  {
    name: "Noa",
    age: 41,
    tone: "warm",
    system: "Sun Damage System",
    weeks: 14,
    quote: "Twenty years of sun in California — softened, not erased.",
    seed: 17,
  },
  {
    name: "Simi",
    age: 29,
    tone: "deep",
    system: "Acne System",
    weeks: 9,
    quote: "First routine that didn't make my dark marks worse.",
    seed: 31,
  },
];

export default function TransformationsSection() {
  return (
    <section className="relative bg-sand-100 py-28 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20"
        >
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-clay-500">
              Transformations
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-6xl lg:text-7xl tracking-editorial max-w-3xl leading-[1.03]">
              Real skin. <span className="italic">Real</span> time.
            </h2>
          </div>
          <p className="max-w-sm text-ink/60 md:text-right leading-relaxed">
            Drag any slider to see the full change. Unretouched results from the
            Epiderm community.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="flex gap-6 md:gap-8 px-6 md:px-10 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8">
          {stories.map((s, i) => (
            <motion.article
              key={s.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="snap-start shrink-0 w-[82vw] sm:w-[440px] md:w-[480px]"
            >
              <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden bg-ink/10">
                <BeforeAfterSlider tone={s.tone} seed={s.seed} />
              </div>
              <div className="mt-5 md:mt-6 flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-display text-2xl tracking-editorial">
                    {s.name},{" "}
                    <span className="text-ink/50 font-sans text-base tracking-normal">
                      {s.age}
                    </span>
                  </h3>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-clay-500">
                    {s.system} · {s.weeks} weeks
                  </p>
                </div>
              </div>
              <p className="mt-4 text-ink/70 text-base leading-relaxed max-w-sm">
                “{s.quote}”
              </p>
            </motion.article>
          ))}
          <div className="shrink-0 w-6 md:w-10" aria-hidden />
        </div>
      </div>
    </section>
  );
}
