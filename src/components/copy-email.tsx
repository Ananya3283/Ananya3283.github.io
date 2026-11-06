"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CheckIcon, CopyIcon } from "@phosphor-icons/react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  const swap = {
    initial: { opacity: 0, scale: 0.8, filter: "blur(2px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
    exit: { opacity: 0, scale: 0.8, filter: "blur(2px)" },
    transition: { duration: 0.25, ease: "easeInOut" as const },
  };

  return (
    <motion.button
      type="button"
      onClick={copy}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 font-medium transition-colors duration-[var(--duration-fast)] hover:bg-surface"
    >
      <span className="relative grid size-4 place-items-center">
        <AnimatePresence mode="popLayout" initial={false}>
          {copied ? (
            <motion.span key="check" {...swap} className="text-accent">
              <CheckIcon size={16} weight="bold" />
            </motion.span>
          ) : (
            <motion.span key="copy" {...swap}>
              <CopyIcon size={16} weight="bold" />
            </motion.span>
          )}
        </AnimatePresence>
      </span>
      <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
    </motion.button>
  );
}
