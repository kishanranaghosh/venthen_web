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
        <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-[#1a2b2b]">
          Hardware that connects{" "}
          <GradientText as="span">directly to the platform.</GradientText>
        </h2>
        <p className="mt-4 max-w-xl text-[#6b7f7e] text-base">
          Purpose-built attendance devices combining ESP32 microcontrollers,
          RFID readers, and fingerprint sensors — all managed through Venthen.
        </p>
      </FadeUp>

      <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Device visualization */}
        <FadeUp>
          <div className="relative rounded-[22px] border border-[#dce9e2] bg-white p-8 flex flex-col items-center shadow-[0_8px_30px_-12px_rgba(26,43,43,0.15)]">
            <div className="absolute inset-0 bg-[#0fa3a3]/[0.04] rounded-[22px]" />

            {/* Device mockup */}
            <div className="relative w-64 h-80 rounded-[22px] bg-[#f0f7f0] border border-[#dce9e2] p-6 flex flex-col items-center justify-between">
              {/* Top indicator */}
              <div className="w-2 h-2 rounded-full bg-[#0fa3a3] animate-pulse" />

              {/* Screen area */}
              <div className="w-full flex-1 mx-4 my-3 rounded-2xl bg-white border border-[#dce9e2] flex items-center justify-center">
                <div className="text-center">
                  <Cpu size={32} className="text-[#0fa3a3] mx-auto mb-2" />
                  <p className="text-[10px] text-[#6b7f7e] font-mono">VENTHEN NODE</p>
                  <p className="text-[10px] text-[#0c7c7c] font-mono font-semibold mt-1">READY</p>
                </div>
              </div>

              {/* Bottom sensors */}
              <div className="w-full grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white border border-[#dce9e2] p-3 text-center">
                  <Radio size={16} className="text-[#0c7c7c] mx-auto mb-1" />
                  <p className="text-[10px] text-[#6b7f7e]">RFID</p>
                </div>
                <div className="rounded-xl bg-white border border-[#dce9e2] p-3 text-center">
                  <Fingerprint size={16} className="text-[#0c7c7c] mx-auto mb-1" />
                  <p className="text-[10px] text-[#6b7f7e]">Fingerprint</p>
                </div>
              </div>
            </div>

            {/* ESP32 label */}
            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-[#6b7f7e]">
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
                <div className="flex items-center gap-4 rounded-[18px] border border-[#dce9e2] bg-white p-4 transition-all hover:border-[#0fa3a3]/30 hover:shadow-[0_6px_20px_-8px_rgba(15,163,163,0.3)]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f3e8]">
                    <Shield size={16} className="text-[#0c7c7c]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1a2b2b]">{item.label}</p>
                    <p className="text-xs text-[#6b7f7e]">{item.sub}</p>
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

          <div className="mt-8 rounded-[18px] border border-[#dce9e2] bg-[#f0f7f0] p-5">
            <p className="text-xs font-semibold text-[#1a2b2b] uppercase tracking-wider mb-3">How it works</p>
            <p className="text-sm text-[#4a5f5e] leading-relaxed">
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
