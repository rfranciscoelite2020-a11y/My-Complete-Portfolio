import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Randolf Francisco | GoHighLevel Implementation Specialist",
    template: "%s | Randolf Francisco",
  },
  description:
    "Skills-focused portfolio of Randolf Francisco showcasing GoHighLevel architecture, automation, Voice AI, websites, funnels, integrations, QA and remote implementation work.",
  keywords: [
    "GoHighLevel specialist",
    "marketing automation",
    "CRM implementation",
    "AI voice workflows",
    "funnel builder",
    "GoHighLevel automation",
    "remote automation specialist",
  ],
  authors: [{ name: "Randolf Francisco" }],
  creator: "Randolf Francisco",
  robots: {
    index: true,
    follow: true,
  },
  // Without these, sharing the portfolio link in LinkedIn, Slack, or a text
  // message falls back to a generic or broken preview card — this is what
  // controls the image, title, and description a prospect sees before they
  // even click through. Uses the existing hero photo as the preview image;
  // swap metadataBase for the real production domain once finalized.
  metadataBase: new URL("https://randolfdev.onrender.com"),
  openGraph: {
    title: "Randolf Francisco | GoHighLevel Implementation Specialist",
    description:
      "I build GoHighLevel systems, AI workflows and web experiences that work together — for agencies, consultants and service businesses.",
    url: "https://randolfdev.onrender.com",
    siteName: "Randolf Francisco",
    images: [
      {
        url: "/work/randolf-hero.webp",
        width: 1122,
        height: 1402,
        alt: "Randolf Francisco — GoHighLevel Implementation Specialist",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Randolf Francisco | GoHighLevel Implementation Specialist",
    description:
      "I build GoHighLevel systems, AI workflows and web experiences that work together — for agencies, consultants and service businesses.",
    images: ["/work/randolf-hero.webp"],
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          id="leadconnector-voice-ai-widget"
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a540fd082c5a91e7f04a66a"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
