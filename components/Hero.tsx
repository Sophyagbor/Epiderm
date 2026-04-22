"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { motion, useMotionValue, animate } from "framer-motion";
import PortraitSVG from "./PortraitSVG";

export default function Hero() {
  // 0 = full "before" visible, 100 = full "after" visible.
  const reveal = useMotionValue(0);
  const [percent, setPercent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const userInteracted = useRef(false);
  const draggingRef = useRef(false);

  // Sync motion value to local state for the clip-path and handle position.
  useEffect(() => {
    const unsub = reveal.on("change", (v) => setPercent(v));
    return () => unsub();
  }, [reveal]);

  // Auto transition: after a short beat, sweep from before -> after.
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (userInteracted.current) return;
      animate(reveal, 100, {
        duration: 2.2,
        ease: [0.6, 0.01, 0.05, 0.95],
      });
    }, 3000);
    return () => clearTimeout(timeout);
  }, [reveal]);

  const setFromClientX = useCallback(
    (clientX: number) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = clientX - rect.left;
      const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
      reveal.set(pct);
    },
    [reveal]
  );

  const onPointerDown = (e: React.PointerEvent) => {
    userInteracted.current = true;
    draggingRef.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    setFromClientX(e.clientX);
  };
  const onPointerUp = (e: React.PointerEvent) => {
    draggingRef.current = false;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  // Hover reveals progressively on desktop, feels like the slider follows you.
  const onMouseMove = (e: React.MouseEvent) => {
    if (draggingRef.current) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    userInteracted.current = true;
    setFromClientX(e.clientX);
  };

  return (
    <section
      className="relative w-full h-[100svh] min-h-[640px] overflow-hidden bg-ink"
      aria-label="Hero"
    >
      <div
        ref={containerRef}
        className="absolute inset-0 select-none cursor-ew-resize grain vignette"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onMouseMove={onMouseMove}
      >
        {/* BEFORE image — base layer */}
        <div className="absolute inset-0">
          <PortraitSVG variant="before" className="w-full h-full" />
        </div>

        {/* AFTER image — clipped by reveal percent */}
        <motion.div
          className="absolute inset-0 will-change-[clip-path]"
          style={{
            clipPath: `inset(0 ${100 - percent}% 0 0)`,
          }}
        >
          <PortraitSVG variant="after" className="w-full h-full" />
        </motion.div>

        {/* Divider + handle */}
        <div
          className="absolute top-0 bottom-0 pointer-events-none"
          style={{ left: `${percent}%` }}
        >
          <div className="absolute top-0 bottom-0 -translate-x-1/2 w-px bg-cream/80 shadow-[0_0_30px_rgba(255,240,220,0.35)]" />
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cream/95 backdrop-blur-sm flex items-center justify-center shadow-xl">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M8 7l-5 5 5 5M16 7l5 5-5 5"
                stroke="#1C1613"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Overlay text — left aligned, editorial */}
      <div className="relative z-10 h-full flex items-end md:items-center pointer-events-none">
        <div className="w-full px-6 md:px-12 lg:px-20 pb-20 md:pb-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <span className="inline-block text-[11px] md:text-xs uppercase tracking-[0.3em] text-cream/70 mb-6">
              Introducing Epiderm
            </span>
            <h1 className="font-display text-cream text-[40px] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[88px] tracking-editorial">
              Your skin,
              <br />
              <span className="italic text-sand-200">understood.</span>
              <br />
              Your solution,
              <br />
              <span className="italic text-sand-200">simplified.</span>
            </h1>
            <p className="mt-6 md:mt-8 text-cream/80 text-base md:text-lg max-w-lg leading-relaxed">
              Personalized skin insights. Targeted systems. Real
              transformation.
            </p>
            <div className="mt-8 md:mt-10 pointer-events-auto">
              <Link
                href="/skin-scan"
                className="group inline-flex items-center gap-3 rounded-full bg-cream text-ink px-7 py-4 text-[12px] uppercase tracking-[0.22em] hover:bg-sand-200 transition-colors"
              >
                Start your skin scan
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Small label helpers */}
      <div className="absolute top-24 left-6 md:left-12 z-10 text-[10px] md:text-xs uppercase tracking-[0.3em] text-cream/70">
        Before
      </div>
      <div className="absolute top-24 right-6 md:right-12 z-10 text-[10px] md:text-xs uppercase tracking-[0.3em] text-cream/70">
        After
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
        className="absolute bottom-6 right-6 md:right-12 z-10 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-cream/60"
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-6 bg-cream/60"
        />
      </motion.div>
    </section>
  );
}
