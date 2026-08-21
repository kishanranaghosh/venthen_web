"use client";

import { FadeUp, Section, SectionLabel, GradientText } from "@/components/ui/primitives";
import { Cpu, Radio, Fingerprint, Shield, ArrowDown } from "lucide-react";

const deviceFlow = [
  { label: "Student", sub: "RFID / Fingerprint" },
  { label: "Venthen Device", sub: "ESP32 + Sensors" },
  { label: "Secure Network", sub: "TLS / Auth" },
  { label: "Venthen Platform", sub: "Real-time processing" },
];

export function HardwareSection() {
  return (
    <Section>
      <FadeUp>
        <SectionLabel className="mb-4">Hardware</SectionLabel>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          Hardware that connects{" "}
          <GradientText as="span">directly to the platform.</GradientText>
        </h2>
        <p className="mt-4 max-w-xl text-zinc-400 text-base">
          Purpose-built attendance devices combining ESP32 microcontrollers,
          RFID readers, and fingerprint sensors — all managed through Venthen.
        </p>
      </FadeUp>

      <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Device visualization */}
        <FadeUp>
          <div className="relative rounded-3xl border border-zinc-800/60 bg-[#0f0f0f] p-8 flex flex-col items-center">
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/[0.04] to-transparent rounded-3xl" />

            {/* Device mockup */}
            <div className="relative w-64 h-80 rounded-3xl bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] border border-zinc-700/50 p-6 flex flex-col items-center justify-between shadow-2xl shadow-black/50">
              {/* Top indicator */}
              <div className="w-2 h-2 rounded-full bg-orange-500/60 animate-pulse" />

              {/* Screen area */}
              <div className="w-full flex-1 mx-4 my-3 rounded-2xl bg-[#0a0a0a] border border-zinc-800/50 flex items-center justify-center">
                <div className="text-center">
                  <Cpu size={32} className="text-orange-400/60 mx-auto mb-2" />
                  <p className="text-[10px] text-zinc-600 font-mono">VENTHEN NODE</p>
                  <p className="text-[10px] text-orange-500/60 font-mono mt-1">READY</p>
                </div>
              </div>

              {/* Bottom sensors */}
              <div className="w-full grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-zinc-800/40 p-3 text-center">
                  <Radio size={16} className="text-zinc-500 mx-auto mb-1" />
                  <p className="text-[10px] text-zinc-600">RFID</p>
                </div>
                <div className="rounded-xl bg-zinc-800/40 p-3 text-center">
                  <Fingerprint size={16} className="text-zinc-500 mx-auto mb-1" />
                  <p className="text-[10px] text-zinc-600">Fingerprint</p>
                </div>
              </div>
            </div>

            {/* ESP32 label */}
            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-zinc-600">
              <Cpu size={12} />
              ESP32-WROOM
            </div>
          </div>
        </FadeUp>

        {/* Flow diagram */}
        <FadeUp delay={0.2}>
          <div className="space-y-3">
            {deviceFlow.map((item, i) => (
              <div key={item.label}>
                <div className="flex items-center gap-4 rounded-2xl border border-zinc-800/60 bg-[#0f0f0f] p-4 transition-all hover:border-zinc-700/80">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 border border-orange-500/20">
                    <Shield size={16} className="text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                    <p className="text-xs text-zinc-500">{item.sub}</p>
                  </div>
                </div>
                {i < deviceFlow.length - 1 && (
                  <div className="flex justify-center py-1.5">
                    <ArrowDown size={14} className="text-zinc-700" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-zinc-800/60 bg-[#0f0f0f] p-5">
            <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-3">How it works</p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Each Venthen device is provisioned through the platform with unique credentials.
              When a student taps an RFID card or scans a fingerprint, the ESP32 processes
              the input locally and sends a signed attendance record to the Venthen backend
              over a secure TLS connection.
            </p>
          </div>
        </FadeUp>
      </div>
    </Section>
  );
}
