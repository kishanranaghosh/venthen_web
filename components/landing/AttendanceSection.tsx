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
        <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-[#1a2b2b]">
          Attendance,{" "}
          <GradientText as="span">without the manual work.</GradientText>
        </h2>
        <p className="mt-4 max-w-xl text-[#6b7f7e] text-base">
          Connect digital attendance with dedicated hardware infrastructure —
          RFID, fingerprint, and ESP32-based devices that sync in real time.
        </p>
      </FadeUp>

      {/* Flow diagram */}
      <FadeUp delay={0.2}>
        <div className="mt-16 relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-[5%] right-[5%] h-px bg-[#0fa3a3]/20 hidden md:block" />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-2">
            {steps.map((step, i) => (
              <div key={step.label} className="relative flex flex-col items-center text-center group">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-[#dce9e2] group-hover:border-[#0fa3a3]/40 group-hover:shadow-[0_8px_24px_-8px_rgba(15,163,163,0.3)] transition-all duration-200 mb-3 z-10">
                  <step.icon size={24} className="text-[#0c7c7c]" />
                </div>
                <p className="text-sm font-semibold text-[#1a2b2b]">{step.label}</p>
                <p className="text-xs text-[#6b7f7e] mt-0.5">{step.desc}</p>
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
            <div className="group rounded-[18px] border border-[#dce9e2] bg-white p-5 transition-all duration-200 hover:border-[#0fa3a3]/30 hover:shadow-[0_8px_30px_-10px_rgba(15,163,163,0.22)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e8f3e8]">
                  <item.icon size={16} className="text-[#0c7c7c]" />
                </div>
                <h4 className="text-sm font-semibold text-[#1a2b2b]">{item.title}</h4>
              </div>
              <p className="text-sm text-[#6b7f7e] leading-relaxed">{item.desc}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}
