"use client";

import { FadeUp, Section, SectionLabel, GradientText } from "@/components/ui/primitives";

const screens = [
  {
    label: "Home",
    content: (
      <div className="space-y-3">
        <div>
          <div className="h-2 w-16 rounded bg-zinc-800 mb-2" />
          <div className="h-4 w-24 rounded bg-white/90" />
        </div>
        <div className="rounded-xl bg-orange-500/10 border border-orange-500/20 p-3">
          <div className="h-1.5 w-full rounded-full bg-orange-500/20 mb-2">
            <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
          </div>
          <div className="flex justify-between">
            <div className="h-3 w-10 rounded bg-orange-400/60" />
            <div className="h-3 w-8 rounded bg-zinc-700/50" />
          </div>
        </div>
        <div className="space-y-2">
          {[80, 50, 60].map((w, i) => (
            <div key={i} className="h-6 rounded-lg bg-zinc-800/50 flex items-center px-2.5 gap-2">
              <div className="w-5 h-5 rounded bg-zinc-700/50" />
              <div className={`h-2 rounded bg-zinc-700 ${i === 0 ? "w-24" : i === 1 ? "w-32" : "w-20"}`} />
              <div className="ml-auto h-3 w-8 rounded-full bg-orange-500/20" />
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    label: "Attendance",
    content: (
      <div className="space-y-3">
        <div className="h-3 w-20 rounded bg-zinc-600 mb-2" />
        <div className="rounded-xl bg-zinc-800/40 p-3 text-center">
          <div className="h-8 w-16 rounded bg-orange-400/80 mx-auto mb-1" />
          <div className="h-2 w-12 rounded bg-zinc-700 mx-auto" />
        </div>
        <div className="space-y-2">
          {["Data Structures", "Computer Networks", "Operating Systems"].map((s) => (
            <div key={s} className="flex items-center gap-2.5">
              <div className="h-2 flex-1 rounded bg-zinc-800/50" />
              <div className="h-2 w-8 rounded bg-orange-500/30" />
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    label: "Schedule",
    content: (
      <div className="space-y-2.5">
        <div className="h-3 w-20 rounded bg-zinc-600 mb-1" />
        {[
          { t: "9:00 AM", s: "Data Structures" },
          { t: "11:00 AM", s: "Computer Networks" },
          { t: "2:00 PM", s: "Operating Systems" },
        ].map((cls, i) => (
          <div key={i} className="flex items-center gap-3 rounded-lg bg-zinc-800/40 p-2.5">
            <div className="h-7 w-7 rounded-lg bg-zinc-700/50 flex items-center justify-center">
              <div className="h-2 w-4 rounded bg-zinc-600" />
            </div>
            <div className="flex-1">
              <div className="h-3 w-24 rounded bg-white/60 mb-1" />
              <div className="h-2 w-16 rounded bg-zinc-700" />
            </div>
            {i === 0 && <div className="h-4 w-8 rounded-full bg-orange-500/20" />}
          </div>
        ))}
      </div>
    ),
  },
  {
    label: "Profile",
    content: (
      <div className="space-y-3 text-center pt-4">
        <div className="h-14 w-14 rounded-full bg-zinc-800/60 mx-auto mb-2" />
        <div className="h-4 w-28 rounded bg-white/80 mx-auto" />
        <div className="h-3 w-20 rounded bg-zinc-600 mx-auto" />
        <div className="grid grid-cols-2 gap-2 mt-3">
          {["CS301", "Semester 5", "2024-28", "Div A"].map((d) => (
            <div key={d} className="h-10 rounded-lg bg-zinc-800/40 flex items-center justify-center">
              <div className="h-3 w-12 rounded bg-zinc-700/50" />
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export function StudentExperience() {
  return (
    <Section>
      <FadeUp>
        <SectionLabel className="mb-4">Student Experience</SectionLabel>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          Everything students need,{" "}
          <GradientText as="span">without the clutter.</GradientText>
        </h2>
        <p className="mt-4 max-w-xl text-zinc-400 text-base">
          A clean, focused mobile experience that puts attendance, schedule,
          and academic updates right where students expect them.
        </p>
      </FadeUp>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {screens.map((screen, i) => (
          <FadeUp key={screen.label} delay={i * 0.1}>
            <div className="group rounded-[28px] border border-zinc-800/60 bg-[#0f0f0f] p-4 transition-all duration-300 hover:border-zinc-700/80 hover:bg-[#111]">
              {/* Status bar mock */}
              <div className="flex items-center justify-between mb-4 px-1">
                <div className="h-2 w-8 rounded bg-zinc-700" />
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full border border-zinc-700" />
                  <div className="w-3 h-3 rounded-full border border-zinc-700" />
                </div>
              </div>

              {/* Screen content */}
              <div className="min-h-[200px]">{screen.content}</div>

              {/* Screen label */}
              <div className="mt-4 pt-3 border-t border-zinc-800/50 text-center">
                <p className="text-xs font-medium text-zinc-500 group-hover:text-zinc-400 transition-colors">{screen.label}</p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}
