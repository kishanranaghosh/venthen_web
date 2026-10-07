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
      <div className="absolute -inset-8 bg-[#0fa3a3]/[0.07] rounded-[40px] blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative rounded-[28px] border border-[#dce9e2] bg-white p-5 shadow-[0_20px_60px_-20px_rgba(26,43,43,0.25)]"
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] text-[#6b7f7e] font-medium">9:41</span>
          <div className="flex gap-1.5">
            <div className="w-3.5 h-3.5 rounded-full border border-[#dce9e2] bg-[#f0f7f0]" />
            <div className="w-3.5 h-3.5 rounded-full border border-[#dce9e2] bg-[#f0f7f0]" />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-xs text-[#6b7f7e] mb-0.5">Good morning,</p>
            <p className="text-lg font-semibold text-[#1a2b2b]">Rahul Sharma</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-[#e8f3e8] border border-[#dce9e2] p-3.5">
              <p className="text-[11px] text-[#0c7c7c] mb-1 font-medium">Attendance</p>
              <p className="text-2xl font-bold text-[#0c7c7c]">92%</p>
              <div className="mt-2 h-1.5 rounded-full bg-white">
                <div className="h-full w-[92%] rounded-full bg-[#0fa3a3]" />
              </div>
            </div>
            <div className="rounded-2xl bg-[#f7faf7] border border-[#dce9e2] p-3.5">
              <p className="text-[11px] text-[#6b7f7e] mb-1">Today</p>
              <p className="text-2xl font-bold text-[#1a2b2b]">4</p>
              <p className="text-[11px] text-[#6b7f7e] mt-0.5">classes</p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#f7faf7] border border-[#dce9e2] p-4">
            <p className="text-xs font-semibold text-[#1a2b2b] mb-3">Today&apos;s Schedule</p>
            <div className="space-y-3">
              {schedule.map((cls, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 rounded-xl p-2.5 ${
                    cls.active ? "bg-[#e8f3e8] border border-[#0fa3a3]/25" : "bg-white border border-[#dce9e2]"
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#f0f7f0] border border-[#dce9e2] flex items-center justify-center text-xs text-[#6b7f7e] font-mono">
                    {cls.time.split(":")[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#1a2b2b] truncate">{cls.subject}</p>
                    <p className="text-[11px] text-[#6b7f7e]">{cls.room}</p>
                  </div>
                  {cls.active && (
                    <span className="text-[10px] text-white font-semibold bg-[#0fa3a3] px-2 py-0.5 rounded-full">Now</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-around pt-1">
            {["Home", "Attendance", "Schedule", "Profile"].map((tab, i) => (
              <div key={tab} className="flex flex-col items-center gap-1">
                <div className={`w-5 h-5 rounded-md ${i === 0 ? "bg-[#0fa3a3]" : "bg-[#dce9e2]"}`} />
                <span className={`text-[10px] font-medium ${i === 0 ? "text-[#0c7c7c]" : "text-[#9db3b1]"}`}>{tab}</span>
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
          className="absolute hidden sm:flex items-center gap-2.5 rounded-2xl border border-[#dce9e2] bg-white/95 backdrop-blur-md px-3.5 py-2.5 shadow-[0_8px_24px_-8px_rgba(26,43,43,0.18)]"
          style={{ left: card.x, top: card.y, transform: "translate(-50%, -50%)" }}
        >
          <div className="w-2 h-2 rounded-full bg-[#0fa3a3] animate-pulse" />
          <div>
            <p className="text-[10px] text-[#6b7f7e] leading-none">{card.label}</p>
            <p className="text-xs font-semibold text-[#1a2b2b]">{card.value}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
