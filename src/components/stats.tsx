"use client";

import { useState } from "react";
import { motion } from "motion/react";
import NumberFlow from "@number-flow/react";
import { stats } from "@/content";

// Numbers roll up from zero the first time the strip scrolls into view.
export function Stats() {
  const [seen, setSeen] = useState(false);

  return (
    <motion.section
      aria-label="Highlights"
      onViewportEnter={() => setSeen(true)}
      viewport={{ once: true, amount: 0.5 }}
      className="mx-auto max-w-6xl px-4 sm:px-6"
    >
      <dl className="grid grid-cols-2 gap-y-10 border-y border-border py-10 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.label} className={`px-4 sm:px-6 ${i % 2 ? "border-l border-border" : ""} ${i === 2 ? "lg:border-l" : ""}`}>
            <dt className="sr-only">{s.label}</dt>
            <dd className="font-display text-4xl font-semibold tracking-tight tabular-nums sm:text-5xl">
              <NumberFlow
                value={seen ? s.value : 0}
                prefix={s.prefix}
                suffix={s.suffix}
                format={{ maximumFractionDigits: 1 }}
                transformTiming={{ duration: 900, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }}
                spinTiming={{ duration: 900, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }}
              />
            </dd>
            <p aria-hidden className="mt-2 max-w-[24ch] text-sm leading-snug text-muted">
              {s.label}
            </p>
          </div>
        ))}
      </dl>
    </motion.section>
  );
}
