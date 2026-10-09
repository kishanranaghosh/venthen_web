"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Fingerprint,
  Radio,
  Wifi,
  GraduationCap,
  Users,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { Reveal, SplitLetters, MaskedLines, CountUp } from "./editorial";
import { Chapter, GiantWord, Marquee, Stats } from "./Chapters";
import { Button } from "@/components/ui/primitives";

export function Manifesto() {
  return (
    <section id="story" className="relative bg-[#f7faf7] py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0c7c7c]">
                Manifesto
              </p>
              <p className="mt-4 max-w-[220px] text-sm leading-relaxed text-[#6b7f7e]">
                A campus is not a collection of tools. It is attendance, people,
                devices and decisions — moving together.
              </p>
            </Reveal>
          </div>
          <h2 className="font-bold leading-[0.95] tracking-[-0.03em] text-[#1a2b2b] text-4xl sm:text-5xl lg:text-6xl lg:col-span-8 lg:col-start-5">
            <MaskedLines stagger={0.12}>
              {[
                "Venthen connects every",
                "student, every faculty,",
                "every device quietly.",
              ]}
            </MaskedLines>
          </h2>
        </div>
        <Reveal
          delay={0.1}
          className="mt-10 flex flex-wrap gap-x-10 gap-y-3 border-t border-[#dce9e2] pt-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9db3b1]"
        >
          <span>01 Attendance</span>
          <span>02 Students</span>
          <span>03 Faculty</span>
          <span>04 Devices</span>
          <span>05 Intelligence</span>
          <span>06 Security</span>
        </Reveal>
      </div>
    </section>
  );
}

function AttendanceVisual() {
  const steps = [
    { icon: Radio, label: "RFID", sub: "Tap to identify" },
    { icon: Fingerprint, label: "Fingerprint", sub: "Verify" },
    { icon: Wifi, label: "ESP32", sub: "Edge sync" },
  ];
  return (
    <div className="relative rounded-[22px] border border-[#dce9e2] bg-white p-6 md:p-8 shadow-[0_12px_40px_-16px_rgba(26,43,43,0.18)]">
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0c7c7c]">
          Live flow
        </p>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#dff2e5] px-3 py-1 text-[11px] font-semibold text-[#1c8a5a]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#1c8a5a]" />{" "}
          Syncing
        </span>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-3">
        {steps.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1}>
            <div className="rounded-2xl border border-[#dce9e2] bg-[#f0f7f0] p-4 text-center">
              <s.icon size={20} className="mx-auto text-[#0c7c7c]" />
              <p className="mt-2 text-sm font-semibold text-[#1a2b2b]">
                {s.label}
              </p>
              <p className="text-[11px] text-[#6b7f7e]">{s.sub}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between rounded-2xl bg-[#1a2b2b] px-5 py-4 text-white">
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/60">
            Marked present
          </p>
          <CountUp to={38} suffix=" / 42" className="text-2xl font-bold" />
        </div>
        <div className="text-right">
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/60">
            Rate
          </p>
          <CountUp
            to={92}
            suffix="%"
            className="text-2xl font-bold text-[#5bd9d2]"
          />
        </div>
      </div>
    </div>
  );
}

function StudentsVisual() {
  const rows = [
    { s: "Data Structures", p: 91 },
    { s: "Networks", p: 86 },
    { s: "Operating Systems", p: 82 },
  ];
  return (
    <div className="rounded-[22px] border border-[#dce9e2] bg-white p-6 md:p-8 shadow-[0_12px_40px_-16px_rgba(26,43,43,0.18)]">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e8f3e8]">
          <GraduationCap size={20} className="text-[#0c7c7c]" />
        </div>
        <div>
          <p className="text-sm font-semibold text-[#1a2b2b]">
            Rahul Sharma · CS 301
          </p>
          <p className="text-xs text-[#6b7f7e]">Semester 5 · Div A</p>
        </div>
        <span className="ml-auto rounded-full bg-[#0fa3a3] px-3 py-1 text-xs font-bold text-white">
          92%
        </span>
      </div>
      <div className="mt-6 space-y-4">
        {rows.map((r) => (
          <div key={r.s}>
            <div className="mb-1.5 flex justify-between text-xs">
              <span className="text-[#6b7f7e]">{r.s}</span>
              <span className="font-semibold text-[#1a2b2b]">{r.p}%</span>
            </div>
            <div className="h-2 rounded-full bg-[#e8f3e8]">
              <motion.div
                className="h-full rounded-full bg-[#0fa3a3]"
                initial={{ width: 0 }}
                whileInView={{ width: `${r.p}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FacultyVisual() {
  const people = [
    { n: "Rahul Sharma", id: "CS2024-001", p: 92 },
    { n: "Priya Patel", id: "CS2024-002", p: 88 },
    { n: "Arjun Nair", id: "CS2024-003", p: 74 },
  ];
  return (
    <div className="rounded-[22px] border border-[#dce9e2] bg-white p-6 md:p-8 shadow-[0_12px_40px_-16px_rgba(26,43,43,0.18)]">
      <div className="flex items-center gap-3 border-b border-[#dce9e2] pb-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1a2b2b] text-white">
          <Users size={20} />
        </div>
        <div>
          <p className="text-sm font-semibold text-[#1a2b2b]">
            CS 301 · Morning batch
          </p>
          <p className="text-xs text-[#6b7f7e]">
            42 students · 3 devices online
          </p>
        </div>
      </div>
      <div className="mt-4 space-y-3">
        {people.map((s) => (
          <div
            key={s.id}
            className="flex items-center gap-3 rounded-2xl border border-[#dce9e2] bg-[#f7faf7] px-4 py-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f3e8] text-xs font-bold text-[#0c7c7c]">
              {s.n
                .split(" ")
                .map((w) => w[0])
                .join("")}
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-[#1a2b2b]">{s.n}</p>
              <p className="text-[11px] text-[#6b7f7e]">{s.id}</p>
            </div>
            <span
              className={`rounded-full px-2.5 py-1 text-xs font-bold ${s.p < 75 ? "bg-[#fbeAEA] text-[#c24343]" : "bg-[#dff2e5] text-[#1c8a5a]"}`}
            >
              {s.p}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function IntelligenceVisual() {
  const reduced = useReducedMotion();
  return (
    <div className="overflow-hidden rounded-[22px] border border-[#dce9e2] bg-white shadow-[0_12px_40px_-16px_rgba(26,43,43,0.18)]">
      <div className="flex items-center gap-3 border-b border-[#dce9e2] px-5 py-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0fa3a3]">
          <Sparkles size={16} className="text-white" />
        </div>
        <div>
          <p className="text-sm font-semibold text-[#1a2b2b]">Venthen AI</p>
          <p className="text-[11px] font-medium text-[#1c8a5a]">Active</p>
        </div>
      </div>
      <div className="space-y-3 p-5">
        <motion.div
          className="ml-auto max-w-[80%] rounded-2xl rounded-br-md border border-[#dce9e2] bg-[#e8f3e8] px-4 py-2.5"
          initial={{ opacity: 0, x: reduced ? 0 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-[#1a2b2b]">
            Which students are below 75%?
          </p>
        </motion.div>
        <motion.div
          className="max-w-[85%] rounded-2xl rounded-bl-md border border-[#dce9e2] bg-[#f7faf7] px-4 py-2.5"
          initial={{ opacity: 0, x: reduced ? 0 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <p className="text-sm leading-relaxed text-[#4a5f5e]">
            8 students across 3 subjects DS (4), Networks (2), OS (2).
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function SecurityVisual() {
  const items = [
    "Role-based access",
    "Device authentication",
    "TLS everywhere",
    "Separated data",
  ];
  return (
    <div className="rounded-[22px] border border-[#dce9e2] bg-[#1a2b2b] p-6 md:p-8 text-white">
      <div className="flex items-center gap-3">
        <ShieldCheck size={22} className="text-[#5bd9d2]" />
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/60">
          Security by design
        </p>
      </div>
      <p className="mt-5 text-3xl md:text-4xl font-bold leading-tight tracking-tight">
        Quietly secure,
        <br />
        <span className="text-[#5bd9d2]">by default.</span>
      </p>
      <div className="mt-6 grid sm:grid-cols-2 gap-2.5">
        {items.map((t) => (
          <div
            key={t}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85"
          >
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Chapters() {
  return (
    <>
      <Marquee
        items={[
          "Attendance",
          "Students",
          "Faculty",
          "Devices",
          "Analytics",
          "Venthen AI",
        ]}
      />
      <div id="features">
        <Chapter
          id="platform"
          phoneScene="attendance"
          index="01"
          word="ATTENDANCE"
          tagline="Infrastructure"
          copy="Know who is present — before the class begins."
          points={[
            "RFID + fingerprint at the door",
            "ESP32 edge devices, real-time sync",
            "Full history, subject-wise",
          ]}
          visual={<AttendanceVisual />}
        />
      </div>
      <GiantWord
        word="EVERY STUDENT"
        caption="Students · Schedules · Progress · Alerts"
      />
      <Chapter
        id="students"
        phoneScene="students"
        index="02"
        word="STUDENTS"
        tagline="Mobile-first"
        copy="Everything students need. In one calm place."
        points={[
          "Attendance overview & history",
          "Class schedule & updates",
          "Notifications that matter",
        ]}
        visual={<StudentsVisual />}
        flip
      />
      <GiantWord
        word="EVERY FACULTY"
        caption="Classes · Devices · Analytics · AI"
        teal
      />
      <Chapter
        id="faculty"
        phoneScene="faculty"
        index="03"
        word="FACULTY"
        tagline="Teach, not administrate"
        copy="Less administration. More teaching."
        points={[
          "Rosters & session control",
          "Device monitoring per class",
          "Trends & at-risk alerts",
        ]}
        visual={<FacultyVisual />}
        flip
      />
      <GiantWord
        word="INTELLIGENCE"
        caption="Ask · Analyze · Act with Venthen AI"
      />
      <Chapter
        id="ai"
        phoneScene="intelligence"
        index="04"
        word="INTELLIGENCE"
        tagline="Venthen AI"
        copy="Turn campus data into useful decisions."
        points={[
          "Ask in natural language",
          "Thresholds & trend summaries",
          "Authorized actions, safely",
        ]}
        visual={<IntelligenceVisual />}
      />
      <Stats />
      <Chapter
        id="security"
        phoneScene="security"
        index="05"
        word="SECURE"
        tagline="Trust"
        copy="Academic data, protected from the ground up."
        points={[
          "Multi-factor & role-based access",
          "Provisioned, verified devices",
          "Encrypted in transit",
        ]}
        visual={<SecurityVisual />}
      />
    </>
  );
}

export function Finale() {
  return (
    <section
      id="cta"
      data-phone-scene="cta"
      className="relative z-[2] flex min-h-[100svh] items-center overflow-hidden bg-transparent pb-20 pt-[calc(4rem+38svh)] md:pb-24 lg:py-20"
    >
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[480px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0fa3a3]/[0.08] blur-[130px]"
      />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="max-w-[42rem]">
          <SplitLetters
            text="BEGIN"
            className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#0c7c7c]"
            stagger={0.05}
          />
          <h2 className="mt-6 font-bold leading-[0.94] tracking-[-0.05em] text-[#1a2b2b] text-[clamp(2.5rem,9vw,3.8rem)] md:text-[clamp(3.25rem,5vw,4.8rem)]">
            <span className="block">Ready to modernize</span>
            <span className="block text-[#0fa3a3]">your campus?</span>
          </h2>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#6b7f7e] md:text-lg">
              Bring attendance, academic workflows, and intelligent campus
              tools together with Venthen.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button
                variant="primary"
                arrow
                href="/sign-up"
                className="px-8 py-4 text-base"
              >
                Get Started
              </Button>
              <Button
                variant="secondary"
                href="#features"
                className="px-8 py-4 text-base"
              >
                Explore the platform
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.35}>
            <p className="mt-8 text-xs uppercase tracking-[0.24em] text-[#9db3b1]">
              Built for modern educational institutions
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
