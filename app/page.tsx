import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { ProductShowcase } from "@/components/landing/ProductShowcase";
import { AttendanceSection } from "@/components/landing/AttendanceSection";
import { HardwareSection } from "@/components/landing/HardwareSection";
import { StudentExperience } from "@/components/landing/StudentExperience";
import { FacultyExperience } from "@/components/landing/FacultyExperience";
import { AISection } from "@/components/landing/AISection";
import { AnalyticsSection } from "@/components/landing/AnalyticsSection";
import { SecuritySection } from "@/components/landing/SecuritySection";
import { ArchitectureSection } from "@/components/landing/ArchitectureSection";
import { MobileCTA } from "@/components/landing/MobileCTA";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808]">
      <Navbar />
      <Hero />
      <ProductShowcase />
      <AttendanceSection />
      <HardwareSection />
      <StudentExperience />
      <FacultyExperience />
      <AISection />
      <AnalyticsSection />
      <SecuritySection />
      <ArchitectureSection />
      <MobileCTA />
      <FinalCTA />
      <Footer />
    </main>
  );
}
