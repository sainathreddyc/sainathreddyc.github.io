import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sainath Reddy C | AI Powered Performance Marketing Specialist",
  description:
    "Portfolio of Sainath Reddy C — 11+ years managing ₹60L+ annual ad budgets across Google, Meta, and Amazon Ads. Specialist in Lead Generation, CRO, and E-commerce ROAS.",
  keywords: [
    "Sainath Reddy C",
    "Performance Marketing",
    "Google Ads",
    "Meta Ads",
    "Amazon Ads",
    "CRO",
    "GA4",
    "Lead Generation",
  ],
  authors: [{ name: "Sainath Reddy C" }],
  openGraph: {
    title: "Sainath Reddy C | AI Powered Performance Marketing Specialist",
    description:
      "11+ years scaling performance marketing campaigns with 35x–50x ROAS and full-funnel lead generation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${spaceGrotesk.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#070a13] text-slate-100 font-sans antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
        {/* Ambient background glows */}
        <div className="fixed top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-indigo-600/20 blur-[130px] pointer-events-none -z-10" />
        <div className="fixed top-[35%] left-[-150px] w-[600px] h-[600px] rounded-full bg-cyan-600/15 blur-[140px] pointer-events-none -z-10" />
        <div className="fixed bottom-[-100px] right-[10%] w-[550px] h-[550px] rounded-full bg-emerald-600/15 blur-[140px] pointer-events-none -z-10" />
        {children}
      </body>
    </html>
  );
}
