"use client";

import { motion } from "framer-motion";
import PagePlaceholder from "@/components/PagePlaceholder";

const articles = [
  {
    tag: "Science",
    title: "Why niacinamide keeps showing up in every routine that works.",
    read: "7 min read",
  },
  {
    tag: "Ingredients",
    title: "The hyperpigmentation ladder: tranexamic, azelaic, retinoid.",
    read: "9 min read",
  },
  {
    tag: "Barrier",
    title: "If your skin stings when you cleanse, the barrier is gone.",
    read: "6 min read",
  },
  {
    tag: "Sun",
    title: "Mineral vs. chemical sunscreen: the only answer that matters.",
    read: "5 min read",
  },
  {
    tag: "Routine",
    title: "Less, better, consistent — the three-product principle.",
    read: "8 min read",
  },
  {
    tag: "Acne",
    title: "The quiet myth that adult acne means adult dirty skin.",
    read: "6 min read",
  },
];

export default function LearnPage() {
  return (
    <>
      <PagePlaceholder
        eyebrow="Learn"
        title="Skincare, deciphered."
        italic="Without the jargon."
        description="Essays and field notes from our dermatology panel. No influencer sponsorships, no trend-chasing — just the science, explained slowly enough to be useful."
      >
        <div className="grid md:grid-cols-2 gap-x-14 gap-y-2">
          {articles.map((a, i) => (
            <motion.a
              href="#"
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group block border-t border-sand-300 py-8 hover:pl-4 transition-[padding] duration-500"
            >
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.25em] text-clay-500">
                <span>{a.tag}</span>
                <span className="text-ink/40">{a.read}</span>
              </div>
              <h3 className="mt-3 font-display text-2xl md:text-3xl tracking-editorial leading-tight max-w-lg">
                {a.title}
              </h3>
              <div className="mt-4 text-sm text-ink/50 group-hover:text-ink transition-colors">
                Read →
              </div>
            </motion.a>
          ))}
        </div>
      </PagePlaceholder>
    </>
  );
}
