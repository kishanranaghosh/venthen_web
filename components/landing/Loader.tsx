"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE, usePrefersReducedMotion } from "./editorial";

const WORD = "VENTHEN".split("");

export function Loader({ onDone }: { onDone: () => void }) {
  const reduced = usePrefersReducedMotion();
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    const total = reduced ? 400 : 2100;
    const exitAt = reduced ? 200 : 1600;
    const t1 = setTimeout(() => setPhase("out"), exitAt);
    const t2 = setTimeout(onDone, total);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onDone, reduced]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#f7faf7]"
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === "out" ? 0 : 1 }}
      transition={{
        duration: reduced ? 0.2 : 0.5,
        ease: EASE as unknown as [number, number, number, number],
      }}
      aria-hidden={phase === "out"}
    >
      {/* faint grid */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(15,163,163,0.10) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="relative flex flex-col items-center px-6">
        <div
          className="flex items-start overflow-hidden"
          role="status"
          aria-label="Loading Venthen"
        >
          {WORD.map((ch, i) => (
            <motion.span
              key={i}
              className="inline-block text-[13vw] sm:text-7xl md:text-8xl font-bold tracking-[-0.04em] leading-none text-[#1a2b2b]"
              initial={{ y: reduced ? 0 : 90, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: reduced ? 0.2 : 0.7,
                delay: reduced ? 0 : 0.15 + i * 0.07,
                ease: EASE as unknown as [number, number, number, number],
              }}
            >
              {ch}
            </motion.span>
          ))}
        </div>
        <motion.div
          className="mt-5 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduced ? 0 : 0.8, duration: 0.4 }}
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#6b7f7e]">
            Intelligent campus platform
          </span>
        </motion.div>
        {/* progress line */}
        <div className="mt-6 h-[3px] w-44 overflow-hidden rounded-full bg-[#e8f3e8]">
          <motion.div
            className="h-full rounded-full bg-[#0fa3a3]"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: reduced ? 0.2 : 1.4, ease: "easeInOut" }}
            style={{ width: "100%" }}
          />
        </div>
      </div>
      {/* curtain lift */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-1 bg-[#0fa3a3]/30"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: phase === "out" ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ transformOrigin: "left" }}
      />
    </motion.div>
  );
}

export function LandingShell({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (loaded) {
      const t = setTimeout(() => setShowContent(true), 60);
      return () => clearTimeout(t);
    }
  }, [loaded]);

  return (
    <>
      <AnimatePresence>
        {!loaded && <Loader onDone={() => setLoaded(true)} />}
      </AnimatePresence>
      {loaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showContent || loaded ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}
