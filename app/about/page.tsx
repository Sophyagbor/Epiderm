"use client";

import { motion } from "framer-motion";
import PagePlaceholder from "@/components/PagePlaceholder";
import TrustSection from "@/components/TrustSection";

export default function AboutPage() {
  return (
    <>
      <PagePlaceholder
        eyebrow="About"
        title="We started Epiderm because"
        italic="skin deserved better advice."
        description="Founded by a dermatologist and a computer-vision researcher, Epiderm exists for everyone who's been told to &lsquo;just drink more water&rsquo;. We build tools that actually read your skin — and routines that actually move it."
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 md:gap-20 mt-10"
        >
          <div>
            <h3 className="font-display text-3xl tracking-editorial">
              Our principles
            </h3>
            <ul className="mt-6 space-y-4 text-ink/70 leading-relaxed">
              <li>— Evidence over marketing.</li>
              <li>— Inclusion as a prerequisite, not a feature.</li>
              <li>— Fewer products, higher quality, every time.</li>
              <li>— Privacy by default — your scan never leaves your device.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-3xl tracking-editorial">
              Our panel
            </h3>
            <p className="mt-6 text-ink/70 leading-relaxed">
              Eighteen board-certified dermatologists across four continents
              review every formulation and validate every scan model. We
              publish our methodology; we publish when we&rsquo;re wrong.
            </p>
          </div>
        </motion.div>
      </PagePlaceholder>
      <TrustSection />
    </>
  );
}
