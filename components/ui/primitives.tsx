"use client";

import { type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  as?: keyof typeof motion;
}

export function FadeUp({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
  as = "div",
}: FadeUpProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, delay, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const MotionComponent = motion[as] as typeof motion.div;

  return (
    <MotionComponent
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative w-full py-24 md:py-32 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-[#dce9e2] bg-[#eaf6f4] px-4 py-1.5 text-xs font-semibold text-[#0c7c7c] ${className}`}
    >
      {children}
    </div>
  );
}

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span";
}

export function GradientText({
  children,
  className = "",
  as: Tag = "span",
}: GradientTextProps) {
  return (
    <Tag
      className={`text-[#0fa3a3] ${className}`}
    >
      {children}
    </Tag>
  );
}

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
  arrow?: boolean;
}

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  arrow = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0fa3a3]/40 focus:ring-offset-2 focus:ring-offset-[#f7faf7] active:scale-[0.98]";

  const variants = {
    primary:
      "bg-[#0fa3a3] text-white hover:bg-[#0c8a8a] hover:shadow-[0_6px_24px_-8px_rgba(15,163,163,0.5)]",
    secondary:
      "border border-[#dce9e2] bg-white text-[#1a2b2b] hover:border-[#0fa3a3]/40 hover:bg-[#f0f7f0]",
    ghost:
      "text-[#6b7f7e] hover:text-[#1a2b2b] hover:bg-[#e8f3e8]",
  };

  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className} group`}
    >
      {children}
      {arrow && (
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      )}
    </Component>
  );
}
