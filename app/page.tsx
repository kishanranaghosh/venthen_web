import { Navbar } from "@/components/landing/Navbar";
import { LandingShell } from "@/components/landing/Loader";
import { CursorGlow } from "@/components/landing/CursorGlow";
import { Hero } from "@/components/landing/Hero";
import { Manifesto, Chapters, Finale } from "@/components/landing/Story";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <LandingShell>
      <main className="relative min-h-screen bg-[#f7faf7] text-[#1a2b2b] overflow-x-clip">
        <CursorGlow />
        <Navbar />
        <Hero />

        <Chapters />
        <Finale />
        <Footer />
      </main>
    </LandingShell>
  );
}
