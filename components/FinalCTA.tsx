"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 1.02]);

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-40 px-6 md:px-10 overflow-hidden"
    >
      <motion.div
        style={{ scale }}
        className="relative mx-auto max-w-7xl rounded-[32px] md:rounded-[48px] overflow-hidden bg-ink text-cream"
      >
        {/* Warm radial light */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(220,201,174,0.35),transparent_55%),radial-gradient(ellipse_at_80%_90%,rgba(195,150,110,0.3),transparent_50%)]" />
        <div className="absolute inset-0 grain" />

        <div className="relative px-6 md:px-16 py-20 md:py-32 grid md:grid-cols-12 gap-10 items-end">
          <motion.h2
            style={{ y }}
            className="md:col-span-8 font-display text-[44px] sm:text-6xl md:text-7xl lg:text-[92px] leading-[0.98] tracking-editorial"
          >
            Your journey to <span className="italic text-sand-200">better skin</span> starts with{" "}
            <span className="italic text-sand-200">one scan</span>.
          </motion.h2>

          <div className="md:col-span-4">
            <p className="text-cream/70 leading-relaxed max-w-sm">
              Sixty seconds. Your camera, a little natural light, and the most
              specific answer your skin has ever had.
            </p>
            <Link
              href="/skin-scan"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-cream text-ink px-7 py-4 text-[12px] uppercase tracking-[0.22em] hover:bg-sand-200 transition-colors"
            >
              Start your skin scan
              <span>→</span>
            </Link>
            <div className="mt-6 text-xs text-cream/50">
              Free. Private. On-device analysis.
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
