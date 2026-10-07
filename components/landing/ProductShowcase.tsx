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
        <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-[#1a2b2b]">
          Everything your campus needs.
          <br />
          <GradientText as="span">One platform.</GradientText>
        </h2>
        <p className="mt-4 max-w-xl text-[#6b7f7e] text-base">
          Three purpose-built experiences that connect students, faculty, and administrators across the entire campus.
        </p>
      </FadeUp>

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {experiences.map((exp, i) => (
          <FadeUp key={exp.title} delay={i * 0.1}>
            <div className="group relative rounded-[18px] border border-[#dce9e2] bg-white p-6 transition-all duration-200 hover:border-[#0fa3a3]/30 hover:shadow-[0_8px_30px_-10px_rgba(15,163,163,0.25)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#e8f3e8] border border-[#dce9e2]">
                  <exp.icon size={18} className="text-[#0c7c7c]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1a2b2b]">{exp.title}</h3>
              </div>
              <p className="text-sm text-[#6b7f7e] leading-relaxed mb-5">{exp.description}</p>
              <ul className="space-y-2">
                {exp.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-[#4a5f5e]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0fa3a3]/50 group-hover:bg-[#0fa3a3] transition-colors" />
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
