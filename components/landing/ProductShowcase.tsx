"use client";

import { GraduationCap, Users, Building2 } from "lucide-react";
import { FadeUp, Section, SectionLabel, GradientText } from "@/components/ui/primitives";

const experiences = [
  {
    icon: GraduationCap,
    title: "Student",
    description: "Track attendance, view schedules, receive notifications, and stay updated on academic progress — all in one place.",
    features: ["Attendance overview", "Subject-wise breakdown", "Class schedule", "Notifications & alerts", "Academic updates", "Attendance history"],
  },
  {
    icon: Users,
    title: "Faculty",
    description: "Manage classes, take attendance, control devices, view analytics, and interact with the AI assistant to streamline workflows.",
    features: ["Class management", "Attendance control", "Student tracking", "Device management", "Analytics dashboard", "AI assistant"],
  },
  {
    icon: Building2,
    title: "Institution",
    description: "Oversee departments, faculty, students, and attendance infrastructure from a unified administrative dashboard.",
    features: ["Department management", "Faculty administration", "Device provisioning", "Attendance oversight", "Campus analytics", "Role-based access"],
  },
];

export function ProductShowcase() {
  return (
    <Section id="features">
      <FadeUp>
        <SectionLabel className="mb-4">Platform</SectionLabel>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          Everything your campus needs.
          <br />
          <GradientText as="span">One platform.</GradientText>
        </h2>
        <p className="mt-4 max-w-xl text-zinc-400 text-base">
          Three purpose-built experiences that connect students, faculty, and administrators across the entire campus.
        </p>
      </FadeUp>

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {experiences.map((exp, i) => (
          <FadeUp key={exp.title} delay={i * 0.1}>
            <div className="group relative rounded-2xl border border-zinc-800/60 bg-[#0f0f0f] p-6 transition-all duration-300 hover:border-orange-500/30 hover:bg-[#111]">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 border border-orange-500/20">
                  <exp.icon size={18} className="text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed mb-5">{exp.description}</p>
              <ul className="space-y-2">
                {exp.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-zinc-500">
                    <span className="w-1 h-1 rounded-full bg-zinc-700 group-hover:bg-orange-500/60 transition-colors" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}
