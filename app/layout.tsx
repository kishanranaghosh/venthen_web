import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Venthen — Intelligent Campus Management Platform",
  description:
    "Venthen connects students, faculty, attendance infrastructure, analytics, and intelligent campus workflows in one modern platform. Built for modern campuses.",
  keywords: [
    "venthen",
    "attendance management",
    "campus management",
    "education platform",
    "student attendance",
    "faculty management",
    "college management",
    "RFID attendance",
    "fingerprint attendance",
    "ESP32 attendance",
    "AI education",
    "campus automation",
  ],
  authors: [{ name: "Venthen" }],
  creator: "Venthen",
  publisher: "Venthen",
  metadataBase: new URL("https://venthen.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://venthen.dev",
    siteName: "Venthen",
    title: "Venthen — Intelligent Campus Management Platform",
    description:
      "Venthen connects students, faculty, attendance infrastructure, analytics, and intelligent campus workflows in one modern platform.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Venthen — Intelligent Campus Management Platform",
    description:
      "Venthen connects students, faculty, attendance infrastructure, analytics, and intelligent campus workflows in one modern platform.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: any) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#080808] text-[#fafafa]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
