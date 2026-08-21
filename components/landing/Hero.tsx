"use client";

import { FadeUp, SectionLabel, GradientText, Button } from "@/components/ui/primitives";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16">
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-orange-500/[0.03] rounded-full blur-[120px]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/[0.02] rounded-full blur-[100px]" />

      <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <FadeUp delay={0.1}>
              <SectionLabel className="mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                Built for modern campuses
              </SectionLabel>
            </FadeUp>

            <FadeUp delay={0.2}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white">
                Your campus,
                <br />
                <GradientText as="span">connected</GradientText> and
                <br />
                intelligent.
              </h1>
            </FadeUp>

            <FadeUp delay={0.35}>
              <p className="mt-6 max-w-lg text-base sm:text-lg text-zinc-400 leading-relaxed">
                Venthen brings attendance, students, faculty, devices, analytics,
                and intelligent automation together in one secure platform.
              </p>
            </FadeUp>

            <FadeUp delay={0.45}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button variant="primary" arrow href="#cta" className="text-base px-7 py-3.5">
                  Get Started
                </Button>
                <Button variant="secondary" href="#features" className="text-base px-7 py-3.5">
                  Explore Venthen
                </Button>
              </div>
            </FadeUp>

            <FadeUp delay={0.55}>
              <p className="mt-8 text-sm text-zinc-600">
                Built for students • faculty • institutions
              </p>
            </FadeUp>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
