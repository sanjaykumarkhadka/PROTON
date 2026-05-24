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
  title: "PROTON — Complete LED Signage Solutions, Made in India",
  description:
    "PROTON delivers complete LED signage solutions — displays, in-house control electronics, in-house CMS, and local install & service. The only Indian LED signage solution with control + CMS built in-house.",
  keywords: [
    "LED signage India",
    "LED display India",
    "digital signage CMS",
    "LED video wall",
    "receiving card",
    "LED controller",
    "video processor",
    "fine pitch LED",
    "outdoor LED display",
    "rental LED",
    "Made in India",
    "PROTON",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PROTON — Complete LED Signage Solutions, Made in India",
    description:
      "Displays, control electronics, CMS, and install & service — one Indian partner, control + CMS built in-house.",
    type: "website",
    url: SITE_URL,
    siteName: "PROTON",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "PROTON — Complete LED Signage Solutions, Made in India",
    description:
      "Displays, control electronics, CMS, and install & service — one Indian partner, control + CMS built in-house.",
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
