"use client";

import { motion } from "framer-motion";
import { FadeUp, Section, SectionLabel, GradientText } from "@/components/ui/primitives";
import { Sparkles, ArrowRight } from "lucide-react";
import { aiMessages, aiCapabilities } from "./AIData";

export function AISection() {
  return (
    <Section id="ai">
      <FadeUp>
        <SectionLabel className="mb-4">
          <Sparkles size={12} />
          Venthen AI
        </SectionLabel>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          An intelligent assistant for{" "}
          <GradientText as="span">your campus workflows.</GradientText>
        </h2>
        <p className="mt-4 max-w-xl text-zinc-400 text-base">
          Designed to help faculty work with campus data using natural language —
          ask questions, analyze trends, and perform actions through a conversational interface.
        </p>
      </FadeUp>

      <div className="mt-16 grid lg:grid-cols-2 gap-10">
        {/* Chat UI */}
        <FadeUp>
          <div className="rounded-3xl border border-zinc-800/60 bg-[#0f0f0f] overflow-hidden shadow-xl shadow-black/30">
            <div className="flex items-center gap-3 px-5 py-4 border-b border-zinc-800/50">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500">
                <Sparkles size={16} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Venthen AI</p>
                <p className="text-[10px] text-green-400/80">Active</p>
              </div>
            </div>
            <div className="p-5 space-y-4 min-h-[340px]">
              {aiMessages.map((msg, i) => {
                if (msg.role === "user") {
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 }}
                      className="flex justify-end"
                    >
                      <div className="max-w-[80%] rounded-2xl rounded-br-md bg-orange-500/15 border border-orange-500/20 px-4 py-2.5">
                        <p className="text-sm text-white">{msg.text}</p>
                      </div>
                    </motion.div>
                  );
                }
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 0.15 }}
                    className="flex justify-start"
                  >
                    <div className="max-w-[85%] space-y-3">
                      {msg.text && (
                        <div className="rounded-2xl rounded-bl-md bg-zinc-800/60 border border-zinc-700/50 px-4 py-2.5">
                          <p className="text-sm text-zinc-200 leading-relaxed">{msg.text}</p>
                        </div>
                      )}
                      {msg.cards?.map((card, j) => (
                        <div
                          key={j}
                          className="rounded-xl bg-[#141414] border border-zinc-800/60 p-3 flex items-center gap-3"
                        >
                          <div className="flex-1">
                            <p className="text-xs font-medium text-white">{card.label}</p>
                            <p className="text-[11px] text-zinc-500">{card.count} · {card.pct}</p>
                          </div>
                          <ArrowRight size={14} className="text-zinc-600" />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <div className="px-5 pb-4">
              <div className="flex items-center gap-2 rounded-xl bg-zinc-800/40 border border-zinc-700/50 px-4 py-2.5">
                <div className="h-2 w-24 rounded bg-zinc-600" />
                <div className="ml-auto flex h-7 w-7 items-center justify-center rounded-lg bg-orange-500/20">
                  <ArrowRight size={12} className="text-orange-400" />
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Capabilities */}
        <div>
          <FadeUp delay={0.2}>
            <p className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-4">Capabilities</p>
          </FadeUp>
          <div className="space-y-2.5">
            {aiCapabilities.map((cap, i) => (
              <FadeUp key={i} delay={0.15 + i * 0.06}>
                <div className="flex items-center gap-3 rounded-xl border border-zinc-800/60 bg-[#0f0f0f] p-3.5 transition-all duration-300 hover:border-orange-500/20 hover:bg-[#111]">
                  <Sparkles size={14} className="text-orange-400/60 shrink-0" />
                  <p className="text-sm text-zinc-300">{cap}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.7}>
            <p className="mt-6 text-xs text-zinc-600 leading-relaxed">
              Venthen AI is designed to assist faculty with authenticated access to campus data
              and workflows. Capabilities may vary based on institutional configuration.
            </p>
          </FadeUp>
        </div>
      </div>
    </Section>
  );
}
