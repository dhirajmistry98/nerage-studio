import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import CinematicCursor from "@/components/CinematicCursor";

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "nerage ",
  description: "nerage produces and directs high-end launch films and videos for innovative tech and saas companies.",
  keywords: ["launch films", "video production", "saas video", "tech film", "nerage studio", "commercial director"],
  authors: [{ name: "nerage studio" }],
  openGraph: {
    title: "nerage — Launch films that break the internet",
    description: "nerage produces and directs high-end launch films and videos for innovative tech and saas companies.",
    type: "website",
    locale: "en_US",
    siteName: "nerage studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "nerage — Launch films that break the internet",
    description: "nerage produces and directs high-end launch films and videos for innovative tech and saas companies.",
    creator: "@nerage",
  },
};

export const viewport: Viewport = {
  themeColor: "#fafafa",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={{ colorScheme: "light" }}
      className={`${dmSerif.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body
        style={{ colorScheme: "light" }}
        className="min-h-full flex flex-col font-sans bg-[#fafafa] text-[#0b0b0b] selection:bg-[#0b0b0b] selection:text-white"
      >
        <CinematicCursor />
        {children}
      </body>
    </html>
  );
}
