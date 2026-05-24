import "./globals.css";

export const metadata = {
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
  openGraph: {
    title: "PROTON — The control core of every screen",
    description:
      "India-first LED display control systems: receiving cards, controllers, processors and software.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0a1628",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
