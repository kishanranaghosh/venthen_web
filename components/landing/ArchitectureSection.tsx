"use client";

import { motion } from "framer-motion";
import { FadeUp, Section, SectionLabel, GradientText } from "@/components/ui/primitives";
import { Smartphone, Server, Shield, Database, Cpu, Sparkles } from "lucide-react";

const layers = [
  {
    label: "Student App",
    sub: "Mobile",
    icon: Smartphone,
    color: "border-[#dce9e2] bg-[#f0f7f0]",
    iconColor: "text-[#0c7c7c]",
  },
  {
    label: "Faculty App",
    sub: "Web & Mobile",
    icon: Smartphone,
    color: "border-[#dce9e2] bg-[#f0f7f0]",
    iconColor: "text-[#0c7c7c]",
  },
];

const middle = [
  { label: "Venthen API", icon: Server, desc: "REST + Realtime" },
  { label: "Auth & Services", icon: Shield, desc: "Authentication, RBAC" },
  { label: "Data & Storage", icon: Database, desc: "Records, analytics" },
];

const bottom = [
  { label: "Attendance Devices", icon: Cpu, desc: "ESP32 + Sensors" },
  { label: "Venthen AI", icon: Sparkles, desc: "Intelligent assistant" },
];

export function ArchitectureSection() {
  return (
    <Section id="about">
      <FadeUp>
        <SectionLabel className="mb-4">Architecture</SectionLabel>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1a2b2b]">
          A <GradientText as="span">connected platform</GradientText>,
          <br />
          not a collection of tools.
        </h2>
        <p className="mt-4 max-w-xl text-[#6b7f7e] text-base">
          Venthen is built as a unified platform where every component — mobile apps,
          backend services, attendance devices, and AI — works together.
        </p>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="mt-16 rounded-[22px] border border-[#dce9e2] bg-white p-8 md:p-12">
          <div className="max-w-2xl mx-auto space-y-6">
            {/* Top: Apps */}
            <div className="grid grid-cols-2 gap-4">
              {layers.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -2 }}
                  className={`rounded-2xl border ${item.color} p-4 text-center`}
                >
                  <item.icon size={18} className={`mx-auto mb-2 ${item.iconColor}`} />
                  <p className="text-sm font-semibold text-[#1a2b2b]">{item.label}</p>
                  <p className="text-[11px] text-[#6b7f7e] mt-0.5">{item.sub}</p>
                </motion.div>
              ))}
            </div>

            {/* Arrows down */}
            <div className="flex justify-center gap-4">
              {[0, 1].map((i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="h-6 w-px bg-gradient-to-b from-[#0fa3a3]/40 to-transparent" />
                </div>
              ))}
            </div>

            {/* Middle: Platform */}
            <div className="grid grid-cols-3 gap-4">
              {middle.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -2 }}
                  className="rounded-2xl border border-[#dce9e2] bg-white/[0.02] p-4 text-center"
                >
                  <item.icon size={18} className="mx-auto mb-2 text-[#0c7c7c]/60" />
                  <p className="text-sm font-semibold text-[#1a2b2b]">{item.label}</p>
                  <p className="text-[11px] text-[#6b7f7e] mt-0.5">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Arrows down */}
            <div className="flex justify-center gap-4">
              {[0, 1].map((i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="h-6 w-px bg-gradient-to-b from-[#0fa3a3]/40 to-transparent" />
                </div>
              ))}
            </div>

            {/* Bottom */}
            <div className="grid grid-cols-2 gap-4">
              {bottom.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -2 }}
                  className="rounded-2xl border border-[#dce9e2] bg-[#0fa3a3]/[0.03] p-4 text-center"
                >
                  <item.icon size={18} className="mx-auto mb-2 text-[#0c7c7c]" />
                  <p className="text-sm font-semibold text-[#1a2b2b]">{item.label}</p>
                  <p className="text-[11px] text-[#6b7f7e] mt-0.5">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}
