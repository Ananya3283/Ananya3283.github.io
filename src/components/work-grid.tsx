"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRightIcon, GithubLogoIcon, NotebookIcon } from "@phosphor-icons/react";
import { projects } from "@/content";

// 5 projects, 5 cells: two wide on top, three below.
const spans = ["lg:col-span-4", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2"];

const pill =
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-[background-color,scale,opacity] duration-[var(--duration-fast)] active:scale-[0.97]";

export function WorkGrid() {
  return (
    <section aria-labelledby="more-work" className="mx-auto max-w-6xl px-4 pt-28 sm:px-6">
      <h2 id="more-work" className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        More projects
      </h2>
      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
        {projects.map((p, i) => (
          <motion.li
            key={p.title}
            className={`${spans[i]} ${i === 0 ? "sm:col-span-2" : ""} list-none`}
            initial={{ opacity: 0, y: 12, filter: "blur(3px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.04, ease: [0.22, 1, 0.36, 1] }}
          >
            <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-[border-color] duration-[var(--duration-fast)] ease-smooth-out hover:border-accent/40">
              <div className={`relative overflow-hidden border-b border-border ${i === 0 ? "aspect-[16/8]" : "aspect-[16/10]"}`}>
                <Image
                  src={p.image}
                  alt={`${p.title} dashboard`}
                  fill
                  sizes={i === 0 ? "(min-width: 1024px) 736px, 100vw" : "(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"}
                  className="object-cover object-top transition-transform duration-[var(--duration-slow)] ease-smooth-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg leading-snug font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.result}</p>
                <p className="mt-auto pt-4 font-mono text-xs text-muted">{p.stack}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className={`${pill} group/l bg-fg text-bg hover:opacity-90`}>
                      Live dashboard
                      <ArrowUpRightIcon size={12} weight="bold" className="transition-transform duration-[var(--duration-fast)] group-hover/l:translate-x-0.5 group-hover/l:-translate-y-0.5" />
                    </a>
                  )}
                  {p.notebook && (
                    <a href={p.notebook} target="_blank" rel="noreferrer" className={`${pill} ring-1 ring-border hover:bg-bg`}>
                      <NotebookIcon size={14} weight="bold" />
                      Notebook
                    </a>
                  )}
                  <a href={p.repo} target="_blank" rel="noreferrer" className={`${pill} ring-1 ring-border hover:bg-bg`}>
                    <GithubLogoIcon size={14} weight="bold" />
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
