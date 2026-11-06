"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRightIcon, GithubLogoIcon } from "@phosphor-icons/react";
import { featured } from "@/content";
import { Reveal } from "./reveal";

export function Featured() {
  const [view, setView] = useState(featured.views[0]);

  return (
    <section id="work" className="mx-auto max-w-6xl px-4 pt-28 sm:px-6">
      <Reveal>
        <p className="text-sm font-medium text-accent">Featured case study</p>
        <h2 className="mt-3 max-w-[22ch] font-display text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl">
          {featured.title}
        </h2>
        <p className="mt-5 max-w-[62ch] text-lg leading-relaxed text-muted">{featured.summary}</p>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href={featured.live}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-[scale,opacity] duration-[var(--duration-fast)] hover:opacity-90 active:scale-[0.97]"
          >
            Live dashboard
            <ArrowUpRightIcon size={14} weight="bold" className="transition-transform duration-[var(--duration-fast)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={featured.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-[background-color,scale] duration-[var(--duration-fast)] hover:bg-surface active:scale-[0.97]"
          >
            <GithubLogoIcon size={16} weight="bold" />
            Source
          </a>
          <span className="font-mono text-xs text-muted sm:ml-2">{featured.stack.join(", ")}</span>
        </div>
      </Reveal>

      <Reveal delay={0.05} className="mt-12">
        <div role="tablist" aria-label="Dashboard pages" className="inline-flex max-w-full gap-1 overflow-x-auto rounded-full border border-border bg-surface p-1 [scrollbar-width:none]">
          {featured.views.map((v) => {
            const active = v.id === view.id;
            return (
              <button
                key={v.id}
                role="tab"
                type="button"
                aria-selected={active}
                aria-controls="featured-panel"
                onClick={() => setView(v)}
                className={`relative shrink-0 rounded-full px-3 py-1.5 sm:px-4 text-sm font-medium transition-colors duration-[var(--duration-fast)] ${active ? "text-fg" : "text-muted hover:text-fg"}`}
              >
                {active && (
                  <motion.span
                    layoutId="featured-pill"
                    className="absolute inset-0 rounded-full bg-bg shadow-sm ring-1 ring-border"
                    transition={{ type: "spring", visualDuration: 0.25, bounce: 0.15 }}
                  />
                )}
                <span className="relative">{v.label}</span>
              </button>
            );
          })}
        </div>

        <div
          id="featured-panel"
          role="tabpanel"
          className="relative mt-4 aspect-[1166/643] overflow-hidden rounded-xl border border-border bg-surface"
        >
          <AnimatePresence initial={false}>
            <motion.div
              key={view.id}
              className="absolute inset-0"
              initial={{ opacity: 0, filter: "blur(2px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(2px)" }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <Image
                src={view.src}
                alt={`HR attrition story report in Power BI, "${view.label}" page`}
                fill
                sizes="(min-width: 1152px) 1104px, 100vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </Reveal>

      <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
        {featured.findings.map((f, i) => (
          <Reveal as="li" key={f.value} delay={i * 0.04} className="border-l-2 border-accent pl-5">
              <p className="font-display text-4xl font-semibold tracking-tight text-accent tabular-nums">{f.value}</p>
              <p className="mt-2 leading-relaxed text-muted">{f.text}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
