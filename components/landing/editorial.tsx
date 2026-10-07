"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1] as const;

export function usePrefersReducedMotion() {
  const motionValue = useReducedMotion();
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (motionValue !== null) setReduced(motionValue);
    const q = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(q.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    q.addEventListener("change", onChange);
    return () => q.removeEventListener("change", onChange);
  }, [motionValue]);
  return reduced;
}

/* Split a string into animated letters inside masked overflow spans. */
export function SplitLetters({
  text,
  delay = 0,
  stagger = 0.035,
  className = "",
  letterClassName = "",
  as: Tag = "span",
}: {
  text: string;
  delay?: number;
  stagger?: number;
  className?: string;
  letterClassName?: string;
  as?: "span" | "div";
}) {
  const reduced = usePrefersReducedMotion();
  const letters = text.split("");
  const Cmp = Tag === "div" ? motion.div : motion.span;
  return (
    <Cmp
      className={`inline-block ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      aria-label={text}
      role="text"
    >
      {letters.map((ch, i) => (
        <span
          key={i}
          aria-hidden
          className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]"
        >
          <motion.span
            className={`inline-block will-change-transform ${letterClassName}`}
            variants={{
              hidden: { y: reduced ? 0 : "110%", rotate: 0 },
              visible: {
                y: "0%",
                transition: {
                  duration: reduced ? 0 : 0.7,
                  delay: delay + i * stagger,
                  ease: EASE as unknown as [number, number, number, number],
                },
              },
            }}
          >
            {ch === " " ? "\u00A0" : ch}
          </motion.span>
        </span>
      ))}
    </Cmp>
  );
}

/* Masked line reveal: each child slides up from a mask. */
export function MaskedLines({
  children,
  delay = 0,
  stagger = 0.12,
  className = "",
}: {
  children: ReactNode[];
  delay?: number;
  stagger?: number;
  className?: string;
}) {
  const reduced = usePrefersReducedMotion();
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const line: Variants = {
    hidden: { y: reduced ? 0 : "112%" },
    visible: {
      y: "0%",
      transition: { duration: reduced ? 0 : 0.9, ease: EASE as unknown as [number, number, number, number] },
    },
  };
  return (
    <motion.span
      className={`block ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
    >
      {children.map((child, i) => (
        <span key={i} className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
          <motion.span className="block will-change-transform" variants={line}>
            {child}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/* Scroll reveal wrapper: fade + rise, GPU friendly. */
export function Reveal({
  children,
  delay = 0,
  y = 36,
  className = "",
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  const reduced = usePrefersReducedMotion();
  return (
    <motion.div
      className={`will-change-transform ${className}`}
      initial={{ opacity: 0, y: reduced ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-12% 0px" }}
      transition={{ duration: reduced ? 0 : 0.8, delay, ease: EASE as unknown as [number, number, number, number] }}
    >
      {children}
    </motion.div>
  );
}

/* Giant background word that drifts horizontally with scroll. */
export function DriftWord({
  text,
  className = "",
  from = "6%",
  to = "-6%",
}: {
  text: string;
  className?: string;
  from?: string;
  to?: string;
}) {
  const reduced = usePrefersReducedMotion();
  if (reduced) {
    return (
      <div aria-hidden className={`pointer-events-none select-none ${className}`}>
        {text}
      </div>
    );
  }
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none select-none will-change-transform ${className}`}
      initial={{ x: from }}
      whileInView={{ x: to }}
      viewport={{ once: false, margin: "-10% 0px" }}
      transition={{ duration: 1.4, ease: EASE as unknown as [number, number, number, number] }}
    >
      {text}
    </motion.div>
  );
}

/* Animated counter for statistics. */
export function CountUp({
  to,
  suffix = "",
  duration = 1.4,
  className = "",
}: {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const reduced = usePrefersReducedMotion();
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    if (!started) return;
    if (reduced) {
      setVal(to);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, to, duration, reduced]);
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      onViewportEnter={() => setStarted(true)}
    >
      {val}
      {suffix}
    </motion.span>
  );
}
