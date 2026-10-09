"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/primitives";
import { EASE } from "./editorial";

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
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className={`block whitespace-nowrap will-change-transform ${className}`}
        initial={{ y: reduced ? 0 : "112%" }}
        animate={{ y: "0%" }}
        transition={{
          duration: reduced ? 0 : 0.9,
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
  const reduced = useReducedMotion();

  return (
    <section
      data-phone-scene="hero"
      className="relative z-[2] flex min-h-[100svh] items-center bg-transparent pb-14 pt-[calc(4rem+38svh)] lg:pt-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-80"
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
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[#0fa3a3]/[0.08] blur-[130px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-4 sm:px-6 md:gap-12 lg:grid-cols-2 lg:px-8">
        <div className="max-w-[42rem]">
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
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-[#9db3b1]">
              Attendance · Students · Faculty · AI
            </span>
          </motion.div>

          <h1 className="mt-8 font-bold leading-[0.92] tracking-[-0.06em] text-[#1a2b2b] text-[clamp(2.25rem,9.3vw,3.6rem)] md:text-[clamp(3.25rem,5vw,5.65rem)]">
            <HeroLine delay={0.2}>YOUR CAMPUS,</HeroLine>
            <HeroLine delay={0.32} className="text-[#0fa3a3]">
              CONNECTED
            </HeroLine>
            <HeroLine delay={0.44}>AND INTELLIGENT.</HeroLine>
          </h1>

          <motion.p
            className="mt-6 max-w-lg text-base leading-relaxed text-[#6b7f7e] md:mt-8 md:text-lg"
            initial={{ opacity: 0, y: reduced ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.62 }}
          >
            Venthen brings attendance, students, faculty, devices, analytics,
            and intelligent automation together in one calm platform for your
            campus.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-wrap items-center gap-3 md:mt-8"
            initial={{ opacity: 0, y: reduced ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.74 }}
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
              href="#features"
              className="px-7 py-3.5 text-base"
            >
              Explore Venthen
            </Button>
          </motion.div>

          <motion.div
            className="mt-8 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.2em] text-[#9db3b1]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <span className="h-px w-10 bg-[#0fa3a3]/50" />
            Scroll to explore the platform
          </motion.div>
        </div>
      </div>
    </section>
  );
}
