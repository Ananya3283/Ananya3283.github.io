"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDownIcon, FileTextIcon } from "@phosphor-icons/react";
import { person } from "@/content";

const ease = [0.22, 1, 0.36, 1] as const;

// The page's one hero moment: two real dashboards settle into a stack.
export function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-12 pb-20 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-10 lg:pt-24 lg:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 12, filter: "blur(3px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.5, ease }}
      >
        <p className="text-sm font-medium text-accent">
          {person.name} · {person.role}
        </p>
        <h1 className="mt-5 font-display text-5xl leading-[1.02] font-semibold tracking-tight text-balance sm:text-6xl">
          I find the number that changes the decision.
        </h1>
        <p className="mt-6 max-w-[42ch] text-lg leading-relaxed text-muted">
          SQL, Python and Power BI. I clean messy data, find what moves the metric and explain it plainly.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-on-accent transition-[scale,filter] duration-[var(--duration-fast)] hover:brightness-110 active:scale-[0.97]"
          >
            View work
            <ArrowDownIcon size={16} weight="bold" className="transition-transform duration-[var(--duration-fast)] group-hover:translate-y-0.5" />
          </a>
          <a
            href={person.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium transition-[background-color,scale] duration-[var(--duration-fast)] hover:bg-surface active:scale-[0.97]"
          >
            <FileTextIcon size={16} weight="bold" />
            Resume
          </a>
        </div>
      </motion.div>

      <div className="relative mx-auto w-full max-w-xl pb-10 lg:max-w-none lg:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 24, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: -3 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="absolute -right-2 -bottom-2 w-[78%] overflow-hidden rounded-xl border border-border bg-surface shadow-[0_20px_50px_-20px_oklch(0.3_0.02_260/0.35)] sm:-right-6"
          aria-hidden
        >
          <Image src="/work/ride.png" alt="" width={1312} height={737} className="h-auto w-full" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease }}
          className="relative w-[88%] overflow-hidden rounded-xl border border-border bg-surface shadow-[0_30px_70px_-25px_oklch(0.3_0.02_260/0.45)]"
        >
          <Image
            src="/work/story-who.png"
            alt="Power BI story report: 237 of 1,470 people left, shown as one dot per employee by department, beside attrition by job role, age and tenure"
            width={1166}
            height={643}
            priority
            className="h-auto w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
