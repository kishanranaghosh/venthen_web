"use client";

import { FadeUp, Section, SectionLabel, GradientText } from "@/components/ui/primitives";

export function AnalyticsSection() {
  return (
    <Section>
      <FadeUp>
        <SectionLabel className="mb-4">Analytics</SectionLabel>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          Turn attendance data into{" "}
          <GradientText as="span">useful insight.</GradientText>
        </h2>
        <p className="mt-4 max-w-xl text-zinc-400 text-base">
          Visualize attendance patterns, identify trends, and make informed
          decisions with institution-wide analytics.
        </p>
      </FadeUp>

      <div className="mt-16 grid md:grid-cols-2 gap-6">
        {/* Chart 1: Attendance trend */}
        <FadeUp delay={0.1}>
          <div className="rounded-3xl border border-zinc-800/60 bg-[#0f0f0f] p-6">
            <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-4">Attendance Trend</p>
            <div className="h-40 flex items-end gap-3 px-2">
              {[78, 82, 85, 80, 88, 92, 90, 87, 91, 93, 89, 92].map((v, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                  <div
                    className="w-full rounded-t-md bg-gradient-to-t from-orange-500/30 to-orange-500/60 transition-all hover:from-orange-500/50 hover:to-orange-500/80"
                    style={{ height: `${(v / 100) * 140}px` }}
                  />
                  <span className="text-[9px] text-zinc-600">{["J","F","M","A","M","J","J","A","S","O","N","D"][i]}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-4 pt-3 border-t border-zinc-800/50">
              <span className="w-2 h-2 rounded-full bg-orange-400" />
              <span className="text-xs text-zinc-500">Overall attendance: 87.3% average</span>
            </div>
          </div>
        </FadeUp>

        {/* Chart 2: Subject breakdown */}
        <FadeUp delay={0.2}>
          <div className="rounded-3xl border border-zinc-800/60 bg-[#0f0f0f] p-6">
            <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-4">Subject-wise Attendance</p>
            <div className="space-y-4">
              {[
                { label: "Data Structures", pct: 91, color: "from-orange-500 to-amber-400" },
                { label: "Computer Networks", pct: 86, color: "from-amber-500 to-yellow-400" },
                { label: "Operating Systems", pct: 82, color: "from-orange-400 to-orange-300" },
                { label: "Mathematics", pct: 89, color: "from-zinc-600 to-zinc-500" },
                { label: "Software Engineering", pct: 79, color: "from-zinc-600 to-zinc-500" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-xs text-zinc-400">{item.label}</span>
                    <span className="text-xs font-medium text-white">{item.pct}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-zinc-800">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Chart 3: Distribution */}
        <FadeUp delay={0.25}>
          <div className="rounded-3xl border border-zinc-800/60 bg-[#0f0f0f] p-6">
            <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-4">Attendance Distribution</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { range: "90-100%", count: 24, color: "bg-green-500/30 text-green-400" },
                { range: "80-89%", count: 18, color: "bg-orange-500/20 text-orange-400" },
                { range: "70-79%", count: 8, color: "bg-amber-500/20 text-amber-400" },
                { range: "Below 70%", count: 3, color: "bg-red-500/20 text-red-400" },
              ].map((d) => (
                <div key={d.range} className={`rounded-xl p-4 text-center ${d.color} border border-current/20`}>
                  <p className="text-2xl font-bold">{d.count}</p>
                  <p className="text-xs mt-1 opacity-80">{d.range}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Chart 4: Alert */}
        <FadeUp delay={0.35}>
          <div className="rounded-3xl border border-zinc-800/60 bg-[#0f0f0f] p-6 flex flex-col justify-center">
            <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-4">Attendance Alerts</p>
            <div className="space-y-3">
              {[
                { text: "8 students below 75% in Data Structures", level: "high" },
                { text: "Attendance drop detected in CS 204 — last 2 weeks", level: "medium" },
                { text: "5 students approaching 75% threshold in OS", level: "low" },
              ].map((alert, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl bg-zinc-800/30 p-3">
                  <div className={`w-2 h-2 rounded-full ${
                    alert.level === "high" ? "bg-red-400" : alert.level === "medium" ? "bg-amber-400" : "bg-orange-400"
                  }`} />
                  <p className="text-xs text-zinc-300">{alert.text}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </Section>
  );
}
