"use client";

import { useCallback, useRef, useState } from "react";
import SkinCloseup from "./SkinCloseup";

type Props = {
  tone: "warm" | "deep" | "fair" | "medium";
  seed: number;
};

export default function BeforeAfterSlider({ tone, seed }: Props) {
  const [percent, setPercent] = useState(45);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const set = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = clientX - rect.left;
    setPercent(Math.max(0, Math.min(100, (x / rect.width) * 100)));
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden select-none cursor-ew-resize"
      onPointerDown={(e) => {
        dragging.current = true;
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
        set(e.clientX);
      }}
      onPointerMove={(e) => {
        if (dragging.current) set(e.clientX);
      }}
      onPointerUp={(e) => {
        dragging.current = false;
        (e.target as HTMLElement).releasePointerCapture(e.pointerId);
      }}
      onPointerCancel={() => {
        dragging.current = false;
      }}
    >
      <div className="absolute inset-0">
        <SkinCloseup variant="before" tone={tone} seed={seed} className="w-full h-full" />
      </div>
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}
      >
        <SkinCloseup variant="after" tone={tone} seed={seed} className="w-full h-full" />
      </div>

      <div
        className="absolute top-0 bottom-0 pointer-events-none"
        style={{ left: `${percent}%` }}
      >
        <div className="absolute top-0 bottom-0 -translate-x-1/2 w-px bg-cream/80" />
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-cream/95 flex items-center justify-center shadow-lg">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
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

      <div className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.25em] text-cream/90 bg-black/25 backdrop-blur-sm rounded-full px-3 py-1">
        Before
      </div>
      <div className="absolute top-3 right-3 text-[10px] uppercase tracking-[0.25em] text-cream/90 bg-black/25 backdrop-blur-sm rounded-full px-3 py-1">
        After
      </div>
    </div>
  );
}
