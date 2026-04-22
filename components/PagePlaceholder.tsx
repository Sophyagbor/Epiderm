"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  italic?: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  children?: React.ReactNode;
};

export default function PagePlaceholder({
  eyebrow,
  title,
  italic,
  description,
  ctaLabel,
  ctaHref,
  children,
}: Props) {
  return (
    <section className="relative pt-36 md:pt-48 pb-24 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[11px] uppercase tracking-[0.3em] text-clay-500">
            {eyebrow}
          </span>
          <h1 className="mt-5 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-editorial leading-[1.02] max-w-5xl">
            {title}
            {italic && (
              <>
                {" "}
                <span className="italic text-clay-500">{italic}</span>
              </>
            )}
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-ink/65 leading-relaxed">
            {description}
          </p>
          {ctaLabel && ctaHref && (
            <Link
              href={ctaHref}
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-ink text-cream px-7 py-4 text-[12px] uppercase tracking-[0.22em] hover:bg-clay-700 transition-colors"
            >
              {ctaLabel} <span>→</span>
            </Link>
          )}
        </motion.div>

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-20"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
