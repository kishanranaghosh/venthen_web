"use client";

import { FadeUp, Section, SectionLabel, GradientText } from "@/components/ui/primitives";
import { Shield, Key, Users, Lock, Wifi, EyeOff } from "lucide-react";

const principles = [
  {
    icon: Shield,
    title: "Secure Authentication",
    desc: "Multi-factor authentication protects all user accounts students, faculty, and administrators.",
  },
  {
    icon: Users,
    title: "Role-Based Access",
    desc: "Granular permission controls ensure students, faculty, and admins see only what they should.",
  },
  {
    icon: Lock,
    title: "Protected APIs",
    desc: "All backend APIs enforce authentication and authorization on every request.",
  },
  {
    icon: Wifi,
    title: "Device Authentication",
    desc: "Attendance devices are provisioned with unique credentials and verified before connecting.",
  },
  {
    icon: EyeOff,
    title: "Data Separation",
    desc: "Student and faculty data access is logically separated with clear privilege boundaries.",
  },
  {
    icon: Key,
    title: "Secure Communication",
    desc: "TLS encryption protects all data in transit between apps, devices, and backend services.",
  },
];

export function SecuritySection() {
  return (
    <Section id="security">
      <FadeUp>
        <SectionLabel className="mb-4">Security</SectionLabel>
        <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-[#1a2b2b]">
          Built with <GradientText as="span">security in mind.</GradientText>
        </h2>
        <p className="mt-4 max-w-xl text-[#6b7f7e] text-base">
          Venthen is designed with security engineering principles at its core —
          protecting academic data and campus infrastructure from the ground up.
        </p>
      </FadeUp>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {principles.map((item, i) => (
          <FadeUp key={item.title} delay={i * 0.08}>
            <div className="group rounded-2xl border border-[#dce9e2] bg-white p-5 transition-all duration-200 hover:border-[#0fa3a3]/30 hover:bg-[#f0f7f0]">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0f7f0] group-hover:bg-[#e8f3e8] group-hover:border group-hover:border-[#dce9e2] transition-all">
                  <item.icon size={18} className="text-[#0c7c7c]/70 group-hover:text-[#0c7c7c] transition-colors" />
                </div>
                <h4 className="text-sm font-semibold text-[#1a2b2b]">{item.title}</h4>
              </div>
              <p className="text-sm text-[#6b7f7e] leading-relaxed">{item.desc}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}
