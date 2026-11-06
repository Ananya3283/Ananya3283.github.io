"use client";

import { MotionConfig } from "motion/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ type: "spring", visualDuration: 0.25, bounce: 0.15 }}>
      {children}
    </MotionConfig>
  );
}
