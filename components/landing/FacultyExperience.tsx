"use client";

import { FadeUp, Section, SectionLabel, GradientText } from "@/components/ui/primitives";
import { Users, Clock, BarChart3, Bell, Cpu, Sparkles } from "lucide-react";

const facultyFeatures = [
  { icon: Users, label: "Class Management", desc: "View and manage class rosters, student details, and academic records." },
  { icon: Clock, label: "Attendance Control", desc: "Mark attendance, view real-time records, and manage attendance for each session." },
  { icon: Cpu, label: "Device Management", desc: "Monitor and control attendance devices assigned to your classes and labs." },
  { icon: BarChart3, label: "Analytics", desc: "Track attendance trends, identify patterns, and view class-level statistics." },
  { icon: Bell, label: "Notifications", desc: "Send announcements, reminders, and academic updates to students." },
  { icon: Sparkles, label: "AI Assistant", desc: "Ask questions about attendance data, student patterns, and class insights." },
];

export function FacultyExperience() {
  return (
    <Section>
      <FadeUp>
        <SectionLabel className="mb-4">Faculty Experience</SectionLabel>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          Give faculty{" "}
          <GradientText as="span">more time to teach.</GradientText>
        </h2>
        <p className="mt-4 max-w-xl text-zinc-400 text-base">
          A powerful dashboard that handles attendance, analytics, and device
          management — so faculty can focus on what matters most.
        </p>
      </FadeUp>

      <div className="mt-16 grid lg:grid-cols-2 gap-10 items-start">
        {/* Dashboard visual */}
        <FadeUp>
          <div className="rounded-3xl border border-zinc-800/60 bg-[#0f0f0f] p-5 shadow-xl shadow-black/30">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-zinc-800/50">
              <div>
                <div className="h-2 w-16 rounded bg-zinc-700 mb-1.5" />
                <div className="h-4 w-32 rounded bg-white/80" />
              </div>
              <div className="flex gap-2">
                <div className="h-8 w-8 rounded-xl bg-zinc-800/50" />
                <div className="h-8 w-8 rounded-xl bg-zinc-800/50" />
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="rounded-xl bg-orange-500/10 border border-orange-500/20 p-3 text-center">
                <div className="h-5 w-8 rounded bg-orange-400/70 mx-auto mb-1" />
                <div className="h-2 w-12 rounded bg-zinc-700 mx-auto" />
              </div>
              <div className="rounded-xl bg-zinc-800/40 p-3 text-center">
                <div className="h-5 w-8 rounded bg-zinc-500 mx-auto mb-1" />
                <div className="h-2 w-12 rounded bg-zinc-700 mx-auto" />
              </div>
              <div className="rounded-xl bg-zinc-800/40 p-3 text-center">
                <div className="h-5 w-8 rounded bg-zinc-500 mx-auto mb-1" />
                <div className="h-2 w-12 rounded bg-zinc-700 mx-auto" />
              </div>
            </div>

            {/* Student list mock */}
            <div className="rounded-xl bg-zinc-800/30 p-3 mb-3">
              <div className="h-2 w-20 rounded bg-zinc-600 mb-3" />
              <div className="space-y-2">
                {[
                  { name: "Rahul Sharma", pct: 92, id: "CS2024-001" },
                  { name: "Priya Patel", pct: 88, id: "CS2024-002" },
                  { name: "Arjun Nair", pct: 74, id: "CS2024-003" },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-zinc-700/50" />
                    <div className="flex-1">
                      <div className="h-2.5 w-24 rounded bg-white/60 mb-1" />
                      <div className="h-1.5 w-16 rounded bg-zinc-700" />
                    </div>
                    <div className={`h-5 w-10 rounded-full flex items-center justify-center text-[10px] font-medium ${s.pct < 75 ? "bg-red-500/20 text-red-400" : "bg-green-500/20 text-green-400"}`}>
                      {s.pct}%
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Device status */}
            <div className="rounded-xl bg-zinc-800/30 p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500/70 animate-pulse" />
                <div className="h-2 w-20 rounded bg-zinc-500" />
              </div>
              <div className="h-2 w-16 rounded bg-zinc-600" />
            </div>
          </div>
        </FadeUp>

        {/* Features */}
        <div className="grid sm:grid-cols-2 gap-3">
          {facultyFeatures.map((item, i) => (
            <FadeUp key={item.label} delay={i * 0.08}>
              <div className="group rounded-2xl border border-zinc-800/60 bg-[#0f0f0f] p-4 transition-all duration-300 hover:border-zinc-700/80 hover:bg-[#111]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-500/10 border border-orange-500/20">
                    <item.icon size={14} className="text-orange-400" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">{item.label}</h4>
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </Section>
  );
}
