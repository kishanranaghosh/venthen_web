"use client";

import { FadeUp, GradientText, Button } from "@/components/ui/primitives";

export function FinalCTA() {
  return (
    <section id="cta" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[400px] bg-orange-500/[0.06] rounded-full blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <FadeUp>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Ready to modernize{" "}
            <GradientText as="span">your campus?</GradientText>
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Bring attendance, academic workflows, and intelligent campus tools
            together with Venthen.
          </p>
        </FadeUp>

        <FadeUp delay={0.25}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" arrow className="text-base px-8 py-4">
              Get Started
            </Button>
            <Button variant="secondary" className="text-base px-8 py-4">
              Explore the Platform
            </Button>
          </div>
        </FadeUp>

        <FadeUp delay={0.35}>
          <p className="mt-8 text-xs text-zinc-600">
            Built for modern educational institutions.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
