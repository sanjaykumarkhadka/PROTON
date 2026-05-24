const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://proton.in";

export default function sitemap() {
  const now = new Date();
  return [
    { url: `${SITE_URL}/`,          lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${SITE_URL}/products`,  lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/solutions`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/resources`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/privacy`,   lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
    { url: `${SITE_URL}/terms`,     lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
  ];
}
