"use client";

import { FadeUp, Section, SectionLabel, GradientText } from "@/components/ui/primitives";
import { Fingerprint, Wifi, Shield, Clock, Radio, Database } from "lucide-react";

const steps = [
  { icon: Radio, label: "RFID", desc: "Tap to identify" },
  { icon: Fingerprint, label: "Fingerprint", desc: "Biometric verification" },
  { icon: Wifi, label: "ESP32 Device", desc: "Edge processing" },
  { icon: Shield, label: "Venthen Backend", desc: "Secure transmission" },
  { icon: Database, label: "Attendance Record", desc: "Instant sync" },
];

export function AttendanceSection() {
  return (
    <Section id="platform">
      <FadeUp>
        <SectionLabel className="mb-4">Attendance Infrastructure</SectionLabel>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          Attendance,{" "}
          <GradientText as="span">without the manual work.</GradientText>
        </h2>
        <p className="mt-4 max-w-xl text-zinc-400 text-base">
          Connect digital attendance with dedicated hardware infrastructure —
          RFID, fingerprint, and ESP32-based devices that sync in real time.
        </p>
      </FadeUp>

      {/* Flow diagram */}
      <FadeUp delay={0.2}>
        <div className="mt-16 relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-[5%] right-[5%] h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent hidden md:block" />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-2">
            {steps.map((step, i) => (
              <div key={step.label} className="relative flex flex-col items-center text-center group">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-[#111] border border-zinc-800/60 group-hover:border-orange-500/30 transition-all duration-300 mb-3 z-10">
                  <step.icon size={24} className="text-orange-400/80 group-hover:text-orange-400 transition-colors" />
                </div>
                <p className="text-sm font-medium text-white">{step.label}</p>
                <p className="text-xs text-zinc-500 mt-0.5">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="absolute top-8 left-full w-full h-px bg-zinc-800/50 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </FadeUp>

      {/* Detail cards */}
      <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { icon: Radio, title: "RFID Attendance", desc: "Students tap RFID cards on Venthen devices for instant identification and attendance marking." },
          { icon: Fingerprint, title: "Fingerprint", desc: "Biometric verification ensures accurate identity confirmation for every attendance record." },
          { icon: Wifi, title: "ESP32 Devices", desc: "Custom hardware running on ESP32 microcontrollers handles attendance at the edge." },
          { icon: Shield, title: "Device Auth", desc: "Every device is securely provisioned and authenticated before connecting to the platform." },
          { icon: Clock, title: "Real-time Sync", desc: "Attendance records are transmitted to the platform as they happen — visible to faculty immediately." },
          { icon: Database, title: "Full History", desc: "Students can view their complete attendance history with subject-wise breakdowns." },
        ].map((item, i) => (
          <FadeUp key={item.title} delay={i * 0.08}>
            <div className="group rounded-2xl border border-zinc-800/60 bg-[#0f0f0f] p-5 transition-all duration-300 hover:border-zinc-700/80 hover:bg-[#111]">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-800/50">
                  <item.icon size={16} className="text-orange-400/70" />
                </div>
                <h4 className="text-sm font-semibold text-white">{item.title}</h4>
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}
