"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SplitLetters, MaskedLines, Reveal, DriftWord, CountUp, EASE } from "./editorial";
import { Button } from "@/components/ui/primitives";

/* Full-viewport transitional word */
export function GiantWord({
  word,
  caption,
  teal = false,
}: {
  word: string;
  caption: string;
  teal?: boolean;
}) {
  return (
    <section className="relative z-0 overflow-hidden bg-transparent py-16 md:py-24">
      <div className="overflow-hidden px-2">
        <DriftWord
          text={word}
          className={`whitespace-nowrap text-center font-bold leading-none tracking-[-0.05em] text-[clamp(2.5rem,12vw,11rem)] ${
            teal ? "text-[#0fa3a3]/[0.10]" : "text-[#1a2b2b]/[0.06]"
          }`}
        />
      </div>
      <div className="relative mx-auto -mt-[6vw] md:-mt-[4vw] max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0c7c7c]">{caption}</p>
        </Reveal>
      </div>
    </section>
  );
}

/* Chapter layout: number + giant word + asymmetric copy + visual */
export function Chapter({
  index,
  word,
  tagline,
  copy,
  points,
  visual,
  phoneScene,
  flip = false,
  id,
}: {
  index: string;
  word: string;
  tagline: string;
  copy: string;
  points: string[];
  visual: React.ReactNode;
  phoneScene: string;
  flip?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      data-phone-scene={phoneScene}
      className="relative z-[2] flex min-h-[100svh] items-center bg-transparent pb-16 pt-[calc(4rem+60svh)] md:pb-24 md:pt-[calc(4rem+44svh)] lg:py-20"
    >
      <div className="relative z-[2] mx-auto grid w-full max-w-7xl grid-cols-1 px-4 sm:px-6 lg:grid-cols-2 lg:gap-x-12 lg:px-8">
        <div
          className={`max-w-[42rem] ${
            flip ? "lg:col-start-2 lg:ml-auto" : ""
          } lg:row-start-1 lg:w-[88%]`}
        >
          <Reveal>
            <div className="flex items-baseline gap-4">
              <span className="text-sm font-bold tracking-[0.2em] text-[#0fa3a3]">
                {index}
              </span>
              <span className="h-px flex-1 bg-[#dce9e2]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#9db3b1]">
                {tagline}
              </span>
            </div>
          </Reveal>
          <h2 className="mt-6 max-w-full break-keep font-bold leading-[0.92] tracking-[-0.045em] text-[#1a2b2b] text-[clamp(2.5rem,9vw,4.3rem)] md:text-[clamp(3.5rem,5vw,4.7rem)]">
            <SplitLetters text={word} stagger={0.04} />
          </h2>
          <MaskedLines
            className="mt-6 max-w-md text-lg font-medium leading-snug text-[#1a2b2b] md:text-xl"
            stagger={0.14}
          >
            {[copy]}
          </MaskedLines>
          <Reveal delay={0.2} className="mt-8">
            <ul className="space-y-3">
              {points.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 text-[0.95rem] text-[#4a5f5e]"
                >
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0fa3a3]" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15} y={32} className="mt-10">
            {visual}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* Marquee strip */
export function Marquee({ items }: { items: string[] }) {
  const reduced = useReducedMotion();
  const row = [...items, ...items, ...items];
  return (
    <div className="relative z-0 overflow-hidden border-y border-[#dce9e2] bg-[#eef6ef] py-4">
      <motion.div
        className="flex w-max items-center gap-8 whitespace-nowrap"
        animate={reduced ? {} : { x: ["0%", "-33.333%"] }}
        transition={reduced ? {} : { duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8 text-[13px] font-semibold uppercase tracking-[0.26em] text-[#0c7c7c]">
            {t}
            <span className="h-1.5 w-1.5 rounded-full bg-[#0fa3a3]/50" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* Big statistics */
export function Stats() {
  const stats = [
    { value: 92, suffix: "%", label: "Attendance", note: "Live overview" },
    { value: 4, suffix: "", label: "Classes today", note: "Per student" },
    { value: 1, suffix: "", label: "Connected campus", note: "One platform" },
  ];
  return (
    <section
      data-phone-scene="stats"
      className="relative z-0 bg-transparent pb-16 pt-[calc(4rem+34svh)] md:pb-24 md:pt-[calc(4rem+34svh)] lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:px-8">
        <div className="lg:col-start-1 lg:row-start-1 lg:w-full">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0c7c7c]">
              In numbers
            </p>
          </Reveal>
          <div className="mt-8 grid gap-px overflow-hidden rounded-[22px] border border-[#dce9e2] bg-[#dce9e2] sm:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white px-4 py-8 md:px-6 md:py-12 lg:px-4"
              >
                <CountUp
                  to={s.value}
                  suffix={s.suffix}
                  className="block text-5xl font-bold tracking-tight text-[#1a2b2b] md:text-6xl"
                />
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#0c7c7c]">
                  {s.label}
                </p>
                <p className="mt-1 text-sm text-[#6b7f7e]">{s.note}</p>
              </div>
            ))}
          </div>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button variant="primary" arrow href="#cta">
                Get Started
              </Button>
              <Button variant="secondary" href="#features">
                Explore the platform
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
