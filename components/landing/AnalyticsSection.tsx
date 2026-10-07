"use client";

import { FadeUp, Section, SectionLabel, GradientText } from "@/components/ui/primitives";

export function AnalyticsSection() {
  return (
    <Section>
      <FadeUp>
        <SectionLabel className="mb-4">Analytics</SectionLabel>
        <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-[#1a2b2b]">
          Turn attendance data into{" "}
          <GradientText as="span">useful insight.</GradientText>
        </h2>
        <p className="mt-4 max-w-xl text-[#6b7f7e] text-base">
          Visualize attendance patterns, identify trends, and make informed
          decisions with institution-wide analytics.
        </p>
      </FadeUp>

      <div className="mt-16 grid md:grid-cols-2 gap-6">
        {/* Chart 1: Attendance trend */}
        <FadeUp delay={0.1}>
          <div className="rounded-[22px] border border-[#dce9e2] bg-white p-6">
            <p className="text-xs font-medium text-[#6b7f7e] uppercase tracking-wider mb-4">Attendance Trend</p>
            <div className="h-40 flex items-end gap-3 px-2">
              {[78, 82, 85, 80, 88, 92, 90, 87, 91, 93, 89, 92].map((v, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                  <div
                    className="w-full rounded-t-md bg-[#0fa3a3]/70 transition-all hover:bg-[#0fa3a3]"
                    style={{ height: `${(v / 100) * 140}px` }}
                  />
                  <span className="text-[9px] text-[#9db3b1]">{["J","F","M","A","M","J","J","A","S","O","N","D"][i]}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-4 pt-3 border-t border-[#dce9e2]">
              <span className="w-2 h-2 rounded-full bg-[#0fa3a3]" />
              <span className="text-xs text-[#6b7f7e]">Overall attendance: 87.3% average</span>
            </div>
          </div>
        </FadeUp>

        {/* Chart 2: Subject breakdown */}
        <FadeUp delay={0.2}>
          <div className="rounded-[22px] border border-[#dce9e2] bg-white p-6">
            <p className="text-xs font-medium text-[#6b7f7e] uppercase tracking-wider mb-4">Subject-wise Attendance</p>
            <div className="space-y-4">
              {[
                { label: "Data Structures", pct: 91, color: "bg-[#0fa3a3]" },
                { label: "Computer Networks", pct: 86, color: "bg-[#34b37a]" },
                { label: "Operating Systems", pct: 82, color: "bg-[#5bc8b4]" },
                { label: "Mathematics", pct: 89, color: "bg-[#9db3b1]" },
                { label: "Software Engineering", pct: 79, color: "bg-[#9db3b1]" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-xs text-[#6b7f7e]">{item.label}</span>
                    <span className="text-xs font-semibold text-[#1a2b2b]">{item.pct}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-[#e8f3e8]">
                    <div
                      className={`h-full rounded-full ${item.color}`}
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
          <div className="rounded-[22px] border border-[#dce9e2] bg-white p-6">
            <p className="text-xs font-medium text-[#6b7f7e] uppercase tracking-wider mb-4">Attendance Distribution</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { range: "90-100%", count: 24, color: "bg-[#dff2e5] text-[#1c8a5a] border-[#bfe3cd]" },
                { range: "80-89%", count: 18, color: "bg-[#e8f3e8] text-[#0c7c7c] border-[#dce9e2]" },
                { range: "70-79%", count: 8, color: "bg-[#fdf3df] text-[#b7791f] border-[#f0dfb5]" },
                { range: "Below 70%", count: 3, color: "bg-[#fbeAEA] text-[#c24343] border-[#f3c9c9]" },
              ].map((d) => (
                <div key={d.range} className={`rounded-2xl p-4 text-center border ${d.color}`}>
                  <p className="text-2xl font-bold">{d.count}</p>
                  <p className="text-xs mt-1 opacity-80">{d.range}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Chart 4: Alert */}
        <FadeUp delay={0.35}>
          <div className="rounded-[22px] border border-[#dce9e2] bg-white p-6 flex flex-col justify-center">
            <p className="text-xs font-medium text-[#6b7f7e] uppercase tracking-wider mb-4">Attendance Alerts</p>
            <div className="space-y-3">
              {[
                { text: "8 students below 75% in Data Structures", level: "high" },
                { text: "Attendance drop detected in CS 204 — last 2 weeks", level: "medium" },
                { text: "5 students approaching 75% threshold in OS", level: "low" },
              ].map((alert, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl bg-[#f0f7f0] border border-[#dce9e2] p-3">
                  <div className={`w-2 h-2 rounded-full ${
                    alert.level === "high" ? "bg-[#c24343]" : alert.level === "medium" ? "bg-[#b7791f]" : "bg-[#0fa3a3]"
                  }`} />
                  <p className="text-xs text-[#4a5f5e]">{alert.text}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </Section>
  );
}
