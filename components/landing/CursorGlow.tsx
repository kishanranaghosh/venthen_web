"use client";

import { useEffect } from "react";

/* Subtle cursor-following teal glow — desktop pointers only, respects reduced motion. */
export function CursorGlow() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = document.createElement("div");
    el.setAttribute("aria-hidden", "true");
    el.style.cssText = [
      "position:fixed",
      "left:0",
      "top:0",
      "width:520px",
      "height:520px",
      "margin-left:-260px",
      "margin-top:-260px",
      "border-radius:9999px",
      "pointer-events:none",
      "z-index:1",
      "background:radial-gradient(circle, rgba(15,163,163,0.07) 0%, transparent 60%)",
      "transform:translate(-100px,-100px)",
      "transition:transform 0.35s cubic-bezier(0.22,1,0.36,1)",
    ].join(";");
    document.body.appendChild(el);
    let raf = 0;
    let tx = -200;
    let ty = -200;
    let cx = tx;
    let cy = ty;
    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const loop = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      el.style.transform = `translate(${cx}px,${cy}px)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
      el.remove();
    };
  }, []);
  return null;
}
