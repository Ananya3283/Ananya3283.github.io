"use client";

import { motion } from "motion/react";
import { ArrowRightIcon, ArrowUpRightIcon, GithubLogoIcon } from "@phosphor-icons/react";
import { pipeline } from "@/content";
import { Reveal } from "./reveal";

const ease = [0.22, 1, 0.36, 1] as const;

// Stages light up left to right, in the order the data actually moves.
export function Pipeline() {
  return (
    <section aria-labelledby="pipeline" className="mx-auto max-w-6xl px-4 pt-28 sm:px-6">
      <Reveal>
        <h2 id="pipeline" className="max-w-[24ch] font-display text-3xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-4xl">
          {pipeline.title}
        </h2>
        <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-muted">{pipeline.summary}</p>
      </Reveal>

      <div className="mt-10 rounded-xl bg-surface p-4 ring-1 ring-border sm:p-6">
        <motion.ol
          className="grid gap-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-stretch"
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true, amount: 0.4 }}
        >
          {pipeline.stages.map((s, i) => (
            <li key={s.name} className="contents">
              {i > 0 && (
                <motion.span
                  aria-hidden
                  variants={{ hidden: { opacity: 0 }, shown: { opacity: 1 } }}
                  transition={{ duration: 0.25, delay: i * 0.08 }}
                  className="grid place-items-center py-1 text-muted lg:px-1 lg:py-0"
                >
                  <ArrowRightIcon size={16} weight="bold" className="rotate-90 lg:rotate-0" />
                </motion.span>
              )}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 8, filter: "blur(2px)" },
                  shown: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                transition={{ duration: 0.4, delay: i * 0.08, ease }}
                className="flex flex-col rounded-xl bg-bg p-4 ring-1 ring-border"
              >
                <p className="font-display text-lg font-semibold">{s.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{s.text}</p>
                <p className="mt-auto pt-3 font-mono text-xs text-accent">{s.tool}</p>
              </motion.div>
            </li>
          ))}
        </motion.ol>
        <p className="mt-3 rounded-xl bg-accent-soft px-4 py-3 text-sm leading-relaxed">
          <span className="font-semibold">Airflow</span> runs every step monthly with retries, all inside Docker.
          <span className="text-muted"> {pipeline.note}</span>
        </p>
      </div>

      <dl className="mt-10 grid gap-8 sm:grid-cols-3">
        {pipeline.results.map((r, i) => (
          <Reveal key={r.value} delay={i * 0.04}>
            <dt className="font-display text-3xl font-semibold tracking-tight tabular-nums">{r.value}</dt>
            <dd className="mt-1 text-muted">{r.text}</dd>
          </Reveal>
        ))}
      </dl>

      <Reveal className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={pipeline.repo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-[background-color,scale] duration-[var(--duration-fast)] hover:bg-surface active:scale-[0.97]"
        >
          <GithubLogoIcon size={16} weight="bold" />
          Source
        </a>
        <a
          href={pipeline.walkthrough}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-full px-3 py-2.5 text-sm font-medium text-muted transition-colors duration-[var(--duration-fast)] hover:text-fg"
        >
          Design walkthrough
          <ArrowUpRightIcon size={14} weight="bold" className="transition-transform duration-[var(--duration-fast)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <span className="font-mono text-xs text-muted sm:ml-2">{pipeline.stack.join(", ")}</span>
      </Reveal>
    </section>
  );
}
