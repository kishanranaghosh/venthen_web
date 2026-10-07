import type { Metadata } from "next";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { PrivacyContent } from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy Venthen",
  description:
    "Learn how Venthen collects, uses, protects, and manages information across its mobile application and services.",
  openGraph: {
    title: "Privacy Policy Venthen",
    description:
      "Learn how Venthen collects, uses, protects, and manages information across its mobile application and services.",
  },
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#f7faf7] min-h-screen text-[#1a2b2b]">
      <Navbar />
      <PrivacyContent />
      <Footer />
    </div>
  );
}
