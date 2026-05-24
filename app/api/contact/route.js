const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "sanjay.khadka@skyboxindia.in";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "PROTON <onboarding@resend.dev>";
const RESEND_API_KEY = process.env.RESEND_API_KEY;

const escapeHtml = (s = "") =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s || "");

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, company, email, phone, useCase, message, website } = body || {};

  if (website) {
    return Response.json({ ok: true });
  }

  if (!name || !isEmail(email) || !message) {
    return Response.json(
      { error: "Please fill in name, a valid email, and a message." },
      { status: 400 }
    );
  }

  const subject = `PROTON enquiry — ${name}${company ? ` (${company})` : ""}`;
  const html = `
    <div style="font-family:system-ui,sans-serif;line-height:1.5;color:#0a1628">
      <h2 style="margin:0 0 12px">New PROTON enquiry</h2>
      <table style="border-collapse:collapse;font-size:14px">
        <tr><td style="padding:4px 10px 4px 0;color:#6f87a8">Name</td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="padding:4px 10px 4px 0;color:#6f87a8">Email</td><td>${escapeHtml(email)}</td></tr>
        ${company ? `<tr><td style="padding:4px 10px 4px 0;color:#6f87a8">Company</td><td>${escapeHtml(company)}</td></tr>` : ""}
        ${phone ? `<tr><td style="padding:4px 10px 4px 0;color:#6f87a8">Phone</td><td>${escapeHtml(phone)}</td></tr>` : ""}
        ${useCase ? `<tr><td style="padding:4px 10px 4px 0;color:#6f87a8">Type</td><td>${escapeHtml(useCase)}</td></tr>` : ""}
      </table>
      <h3 style="margin:18px 0 6px">Message</h3>
      <div style="white-space:pre-wrap;padding:12px;border-left:3px solid #2e7bff;background:#f5f8ff">${escapeHtml(message)}</div>
    </div>
  `;

  if (!RESEND_API_KEY) {
    console.warn("[contact] RESEND_API_KEY not set — logging submission instead:", {
      name, email, company, phone, useCase, message,
    });
    return Response.json({ ok: true, delivered: false });
  }

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject,
        html,
      }),
    });
    if (!r.ok) {
      const detail = await r.text();
      console.error("[contact] Resend error:", r.status, detail);
      return Response.json({ error: "Could not send right now." }, { status: 502 });
    }
    return Response.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] Network error:", err);
    return Response.json({ error: "Could not send right now." }, { status: 502 });
  }
}
