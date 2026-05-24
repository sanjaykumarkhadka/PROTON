import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Inter, JetBrains_Mono } from "next/font/google";

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://proton.in";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "PROTON — The control core of every screen",
  description:
    "PROTON builds the control layer of LED video — receiving cards, sending controllers, video processors and software. Made in India, engineered for the world.",
  keywords: [
    "LED display control system",
    "receiving card",
    "sending card",
    "LED controller",
    "video processor",
    "Made in India",
    "PROTON",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PROTON — The control core of every screen",
    description:
      "India-first LED display control systems: receiving cards, controllers, processors and software.",
    type: "website",
    url: SITE_URL,
    siteName: "PROTON",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "PROTON — The control core of every screen",
    description:
      "India-first LED display control systems: receiving cards, controllers, processors and software.",
  },
};

export const viewport = {
  themeColor: "#0a1628",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PROTON",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  description:
    "Indian designer and manufacturer of LED display control systems — receiving cards, sending controllers, video processors and software.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  areaServed: "IN",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <a href="#top" className="skip-link">Skip to content</a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
