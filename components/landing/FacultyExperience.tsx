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
        <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-[#1a2b2b]">
          Give faculty{" "}
          <GradientText as="span">more time to teach.</GradientText>
        </h2>
        <p className="mt-4 max-w-xl text-[#6b7f7e] text-base">
          A powerful dashboard that handles attendance, analytics, and device
          management — so faculty can focus on what matters most.
        </p>
      </FadeUp>

      <div className="mt-16 grid lg:grid-cols-2 gap-10 items-start">
        {/* Dashboard visual */}
        <FadeUp>
          <div className="rounded-[22px] border border-[#dce9e2] bg-white p-5 shadow-[0_8px_30px_-12px_rgba(26,43,43,0.15)]">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-[#dce9e2]">
              <div>
                <div className="h-2 w-16 rounded bg-[#dce9e2] mb-1.5" />
                <div className="h-4 w-32 rounded bg-[#1a2b2b]/80" />
              </div>
              <div className="flex gap-2">
                <div className="h-8 w-8 rounded-xl bg-[#f0f7f0] border border-[#dce9e2]" />
                <div className="h-8 w-8 rounded-xl bg-[#f0f7f0] border border-[#dce9e2]" />
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="rounded-xl bg-[#e8f3e8] border border-[#dce9e2] p-3 text-center">
                <div className="h-5 w-8 rounded bg-[#0fa3a3] mx-auto mb-1" />
                <div className="h-2 w-12 rounded bg-[#dce9e2] mx-auto" />
              </div>
              <div className="rounded-xl bg-[#f7faf7] border border-[#dce9e2] p-3 text-center">
                <div className="h-5 w-8 rounded bg-[#9db3b1] mx-auto mb-1" />
                <div className="h-2 w-12 rounded bg-[#dce9e2] mx-auto" />
              </div>
              <div className="rounded-xl bg-[#f7faf7] border border-[#dce9e2] p-3 text-center">
                <div className="h-5 w-8 rounded bg-[#9db3b1] mx-auto mb-1" />
                <div className="h-2 w-12 rounded bg-[#dce9e2] mx-auto" />
              </div>
            </div>

            {/* Student list mock */}
            <div className="rounded-xl bg-[#f0f7f0] border border-[#dce9e2] p-3 mb-3">
              <div className="h-2 w-20 rounded bg-[#9db3b1] mb-3" />
              <div className="space-y-2">
                {[
                  { name: "Rahul Sharma", pct: 92, id: "CS2024-001" },
                  { name: "Priya Patel", pct: 88, id: "CS2024-002" },
                  { name: "Arjun Nair", pct: 74, id: "CS2024-003" },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#dce9e2]" />
                    <div className="flex-1">
                      <div className="h-2.5 w-24 rounded bg-white/60 mb-1" />
                      <div className="h-1.5 w-16 rounded bg-[#dce9e2]" />
                    </div>
                    <div className={`h-5 w-10 rounded-full flex items-center justify-center text-[10px] font-medium ${s.pct < 75 ? "bg-red-500/20 text-red-400" : "bg-green-500/20 text-green-400"}`}>
                      {s.pct}%
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Device status */}
            <div className="rounded-xl bg-[#f0f7f0] p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500/70 animate-pulse" />
                <div className="h-2 w-20 rounded bg-zinc-500" />
              </div>
              <div className="h-2 w-16 rounded bg-[#9db3b1]" />
            </div>
          </div>
        </FadeUp>

        {/* Features */}
        <div className="grid sm:grid-cols-2 gap-3">
          {facultyFeatures.map((item, i) => (
            <FadeUp key={item.label} delay={i * 0.08}>
              <div className="group rounded-2xl border border-[#dce9e2] bg-white p-4 transition-all duration-200 hover:border-[#0fa3a3]/30 hover:bg-[#f0f7f0]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#e8f3e8] border border-[#dce9e2]">
                    <item.icon size={14} className="text-[#0c7c7c]" />
                  </div>
                  <h4 className="text-sm font-semibold text-[#1a2b2b]">{item.label}</h4>
                </div>
                <p className="text-xs text-[#6b7f7e] leading-relaxed">{item.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </Section>
  );
}
