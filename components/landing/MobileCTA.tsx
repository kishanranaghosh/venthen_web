"use client";

import { FadeUp, Section, GradientText, Button } from "@/components/ui/primitives";
import { Smartphone } from "lucide-react";

export function MobileCTA() {
  return (
    <Section>
      <div className="rounded-[22px] border border-[#dce9e2] bg-white overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-8 items-center p-8 md:p-12 lg:p-16">
          <FadeUp>
            <p className="text-xs font-medium text-[#6b7f7e] uppercase tracking-wider mb-3">Mobile App</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1a2b2b]">
              Venthen is coming{" "}
              <GradientText as="span">to your pocket.</GradientText>
            </h2>
            <p className="mt-4 text-[#6b7f7e] text-base leading-relaxed max-w-md">
              The Venthen mobile app puts attendance, schedules, notifications,
              and academic updates right in your hand. Built for students and faculty alike.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              {/* Placeholder Play Store button */}
              <button
                disabled
                className="inline-flex items-center gap-3 rounded-full bg-[#e8f3e8] border border-[#dce9e2] px-6 py-3 text-sm font-semibold text-[#6b7f7e] cursor-not-allowed"
                title="Coming soon to Google Play"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 0 1 0 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.992l-2.302 2.302-8.634-8.636z"/>
                </svg>
                Coming soon to Google Play
              </button>
              <Button variant="secondary" href="#features">
                Explore on mobile
              </Button>
            </div>

            <p className="mt-4 text-xs text-[#9db3b1]">
              The Venthen Android app will be available on Google Play.
              Stay tuned for the official release.
            </p>
          </FadeUp>

          {/* Phone mockup */}
          <FadeUp delay={0.2}>
            <div className="flex justify-center">
              <div className="relative w-52 rounded-[32px] border border-[#dce9e2] bg-white p-3 shadow-[0_20px_60px_-20px_rgba(26,43,43,0.2)]">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full bg-[#e8f3e8] border border-[#dce9e2]" />
                <div className="rounded-[24px] bg-[#f7faf7] border border-[#dce9e2] p-4 min-h-[340px]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-2 w-8 rounded bg-[#dce9e2]" />
                    <div className="flex gap-1">
                      <div className="w-3 h-3 rounded-full border border-[#dce9e2] bg-[#f0f7f0]" />
                      <div className="w-3 h-3 rounded-full border border-[#dce9e2] bg-[#f0f7f0]" />
                    </div>
                  </div>
                  <div className="text-center pt-12 space-y-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0fa3a3] mx-auto">
                      <Smartphone size={24} className="text-white" />
                    </div>
                    <div className="h-4 w-20 rounded bg-[#1a2b2b]/70 mx-auto" />
                    <div className="h-2 w-28 rounded bg-[#dce9e2] mx-auto" />
                    <div className="h-2 w-24 rounded bg-[#dce9e2] mx-auto" />
                    <div className="space-y-2 mt-4">
                      <div className="h-8 rounded-lg bg-[#e8f3e8] border border-[#dce9e2] flex items-center px-3">
                        <div className="h-2 w-16 rounded bg-[#0fa3a3]/60" />
                      </div>
                      <div className="h-8 rounded-lg bg-[#f0f7f0] flex items-center px-3">
                        <div className="h-2 w-20 rounded bg-[#dce9e2]" />
                      </div>
                      <div className="h-8 rounded-lg bg-[#f0f7f0] flex items-center px-3">
                        <div className="h-2 w-24 rounded bg-[#dce9e2]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </Section>
  );
}
