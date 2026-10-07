"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { Button } from "@/components/ui/primitives";
import { EASE } from "./editorial";
import { HeroVisual } from "./HeroVisual";

function HeroLine({
  children,
  delay,
  className = "",
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <span
      className="block overflow-hidden whitespace-nowrap pb-[0.09em] -mb-[0.09em]"
      style={{ wordBreak: "normal", overflowWrap: "normal" }}
    >
      <motion.span
        className={`block will-change-transform whitespace-nowrap ${className}`}
        style={{ wordBreak: "normal", overflowWrap: "normal" }}
        initial={{ y: reduced ? 0 : "112%" }}
        animate={{ y: "0%" }}
        transition={{
          duration: reduced ? 0 : 1,
          delay,
          ease: EASE as unknown as [number, number, number, number],
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 110]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -50]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#f7faf7] pt-28 md:pt-36 pb-10 md:pb-14"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(15,163,163,0.09) 1px, transparent 0)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 20%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 20%, black 30%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[#0fa3a3]/[0.09] blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-wrap items-center gap-3"
          initial={{ opacity: 0, y: reduced ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#dce9e2] bg-[#eaf6f4] px-4 py-1.5 text-xs font-semibold text-[#0c7c7c]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0fa3a3]" />
            Venthen campus infrastructure
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#9db3b1]">
            Attendance · Students · Faculty · AI
          </span>
        </motion.div>

        <motion.h1
          style={{ y: titleY, opacity: fade }}
          className="mt-8 font-bold leading-[0.92] tracking-[-0.045em] text-[#1a2b2b] text-[15.5vw] sm:text-[11vw] lg:text-[7rem] xl:text-[8rem]"
        >
          <HeroLine delay={0.25}>YOUR CAMPUS,</HeroLine>
          <HeroLine delay={0.37} className="text-[#0fa3a3]">
            CONNECTED
          </HeroLine>
          <HeroLine delay={0.49}>AND INTELLIGENT.</HeroLine>
        </motion.h1>

        <div className="mt-8 md:mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
          <motion.p
            className="max-w-md text-base md:text-lg leading-relaxed text-[#6b7f7e] lg:col-span-4"
            initial={{ opacity: 0, y: reduced ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            Venthen brings attendance, students, faculty, devices, analytics,
            and intelligent automation together one calm platform for the
            campus.
          </motion.p>
          <motion.div
            className="flex flex-wrap items-center gap-3 lg:col-span-4"
            initial={{ opacity: 0, y: reduced ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.82 }}
          >
            <Button
              variant="primary"
              arrow
              href="#cta"
              className="px-7 py-3.5 text-base"
            >
              Get Started
            </Button>
            <Button
              variant="secondary"
              href="#story"
              className="px-7 py-3.5 text-base"
            >
              See the story
            </Button>
          </motion.div>
          <motion.div
            className="hidden lg:flex lg:col-span-4 items-center justify-end gap-6 text-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.95 }}
          >
            <div>
              <p className="text-2xl font-bold text-[#1a2b2b]">01 — 06</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#9db3b1]">
                Chapters below
              </p>
            </div>
            <div className="h-12 w-px bg-[#dce9e2]" />
            <p className="max-w-[150px] text-xs leading-relaxed text-[#6b7f7e]">
              Scroll for an editorial walkthrough
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
