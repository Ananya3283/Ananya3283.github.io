"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { projects } from "@/content";

// 5 projects, 5 cells: two wide on top, three below.
const spans = ["lg:col-span-4", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2"];

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
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-[border-color,scale] duration-[var(--duration-fast)] ease-smooth-out hover:border-accent/40 active:scale-[0.99]"
            >
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
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg leading-snug font-semibold tracking-tight">{p.title}</h3>
                  <ArrowUpRightIcon
                    size={18}
                    weight="bold"
                    aria-hidden
                    className="mt-1 shrink-0 text-muted transition-[translate,color] duration-[var(--duration-fast)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.result}</p>
                <p className="mt-auto pt-4 font-mono text-xs text-muted">{p.stack}</p>
              </div>
            </a>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
