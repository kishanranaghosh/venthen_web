"use client";

import { motion } from "framer-motion";

const floatingCards = [
  { label: "Attendance", value: "92%", x: "-5%", y: "10%", delay: 0.2 },
  { label: "Today's Classes", value: "4", x: "78%", y: "5%", delay: 0.35 },
  { label: "Present", value: "38 / 42", x: "80%", y: "45%", delay: 0.5 },
  { label: "Upcoming", value: "Quiz — CS 301", x: "-3%", y: "55%", delay: 0.65 },
  { label: "AI Assistant", value: "Online", x: "40%", y: "78%", delay: 0.8 },
];

const schedule = [
  { time: "9:00 AM", subject: "Data Structures", room: "CS 301", active: true },
  { time: "11:00 AM", subject: "Computer Networks", room: "CS 204" },
  { time: "2:00 PM", subject: "Operating Systems", room: "CS 105" },
];

export function HeroVisual() {
  return (
    <div className="relative mt-12 lg:mt-0 w-full max-w-[560px] mx-auto lg:mx-0">
      <div className="absolute -inset-10 bg-gradient-to-br from-orange-500/5 via-transparent to-amber-500/5 rounded-[40px] blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative rounded-[28px] border border-zinc-800/60 bg-[#0f0f0f] p-5 shadow-2xl shadow-black/50"
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] text-zinc-500 font-medium">9:41</span>
          <div className="flex gap-1.5">
            <div className="w-3.5 h-3.5 rounded-full border border-zinc-600/50" />
            <div className="w-3.5 h-3.5 rounded-full border border-zinc-600/50" />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-xs text-zinc-500 mb-0.5">Good morning,</p>
            <p className="text-lg font-semibold text-white">Rahul Sharma</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-orange-500/10 border border-orange-500/20 p-3.5">
              <p className="text-[11px] text-orange-400/80 mb-1">Attendance</p>
              <p className="text-2xl font-bold text-orange-400">92%</p>
              <div className="mt-2 h-1.5 rounded-full bg-orange-500/20">
                <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
              </div>
            </div>
            <div className="rounded-2xl bg-white/[0.03] border border-zinc-800/50 p-3.5">
              <p className="text-[11px] text-zinc-500 mb-1">Today</p>
              <p className="text-2xl font-bold text-white">4</p>
              <p className="text-[11px] text-zinc-500 mt-0.5">classes</p>
            </div>
          </div>

          <div className="rounded-2xl bg-white/[0.03] border border-zinc-800/50 p-4">
            <p className="text-xs font-medium text-zinc-400 mb-3">Today&apos;s Schedule</p>
            <div className="space-y-3">
              {schedule.map((cls, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 rounded-xl p-2.5 ${
                    cls.active ? "bg-orange-500/10 border border-orange-500/20" : "bg-white/[0.02]"
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-zinc-800/50 flex items-center justify-center text-xs text-zinc-400 font-mono">
                    {cls.time.split(":")[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">{cls.subject}</p>
                    <p className="text-[11px] text-zinc-500">{cls.room}</p>
                  </div>
                  {cls.active && (
                    <span className="text-[10px] text-orange-400 font-medium bg-orange-500/15 px-2 py-0.5 rounded-full">Now</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-around pt-1">
            {["Home", "Attendance", "Schedule", "Profile"].map((tab, i) => (
              <div key={tab} className="flex flex-col items-center gap-1">
                <div className={`w-5 h-5 rounded-md ${i === 0 ? "bg-orange-500/30 border border-orange-500/40" : "bg-zinc-800/50"}`} />
                <span className={`text-[10px] ${i === 0 ? "text-orange-400" : "text-zinc-600"}`}>{tab}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {floatingCards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: card.delay + 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute hidden sm:flex items-center gap-2.5 rounded-xl border border-zinc-800/60 bg-[#141414]/90 backdrop-blur-md px-3.5 py-2.5 shadow-lg shadow-black/30"
          style={{ left: card.x, top: card.y, transform: "translate(-50%, -50%)" }}
        >
          <div className="w-2 h-2 rounded-full bg-orange-500/60 animate-pulse" />
          <div>
            <p className="text-[10px] text-zinc-500 leading-none">{card.label}</p>
            <p className="text-xs font-semibold text-white">{card.value}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
