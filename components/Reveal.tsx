"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export function Reveal({ children, className, delay = 0, y = 16 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 1.25, ease, delay }}
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.div>
  );
}
