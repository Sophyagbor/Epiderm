"use client";

import { motion } from "framer-motion";
import PagePlaceholder from "@/components/PagePlaceholder";

const steps = [
  {
    n: "01",
    title: "Capture",
    copy: "Three photos — front, left, right — in natural light. No makeup, clean skin.",
  },
  {
    n: "02",
    title: "Analyze",
    copy: "52 markers scored on-device: texture, tone, inflammation, barrier, oil, sensitivity.",
  },
  {
    n: "03",
    title: "Prescribe",
    copy: "A single targeted system, ranked by what will move the needle fastest for you.",
  },
];

export default function SkinScanPage() {
  return (
    <>
      <PagePlaceholder
        eyebrow="Skin Scan"
        title="Sixty seconds."
        italic="A lifetime of clarity."
        description="The Epiderm scan reads your skin the way a dermatologist does — then keeps learning as your skin changes. Launching this fall. Reserve your place."
        ctaLabel="Join the waitlist"
        ctaHref="#"
      >
        <div className="grid md:grid-cols-3 gap-10 md:gap-14">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="border-t border-sand-300 pt-6"
            >
              <div className="text-[11px] uppercase tracking-[0.3em] text-clay-500">
                {s.n}
              </div>
              <h3 className="mt-4 font-display text-3xl tracking-editorial">
                {s.title}
              </h3>
              <p className="mt-3 text-ink/65 leading-relaxed">{s.copy}</p>
            </motion.div>
          ))}
        </div>
      </PagePlaceholder>
    </>
  );
}
