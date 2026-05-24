"use client";

import { useState } from "react";

const USE_CASES = [
  { value: "", label: "What brings you here?" },
  { value: "integrator", label: "Integrator / installer" },
  { value: "rental", label: "Rental & events" },
  { value: "panel-maker", label: "Panel manufacturer" },
  { value: "oem", label: "OEM / channel partner" },
  { value: "investor", label: "Investor" },
  { value: "other", label: "Something else" },
];

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err.message);
    }
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <div className="form-success-icon">✓</div>
        <h3>Thanks — message received.</h3>
        <p>We&apos;ll get back to you within one business day. Usually faster.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="form-row two">
        <label className="field">
          <span>Name</span>
          <input name="name" type="text" required autoComplete="name" />
        </label>
        <label className="field">
          <span>Company</span>
          <input name="company" type="text" autoComplete="organization" />
        </label>
      </div>

      <div className="form-row two">
        <label className="field">
          <span>Email</span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label className="field">
          <span>Phone (optional)</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
      </div>

      <label className="field">
        <span>Type</span>
        <select name="useCase" defaultValue="">
          {USE_CASES.map((u) => (
            <option key={u.value} value={u.value} disabled={u.value === ""}>
              {u.label}
            </option>
          ))}
        </select>
      </label>

      <label className="field">
        <span>How can we help?</span>
        <textarea
          name="message"
          rows={4}
          required
          placeholder="A few lines about the wall, the use case, or what you'd like to see."
        />
      </label>

      {/* Honeypot — hidden from humans, bots fill it */}
      <div className="hp" aria-hidden="true">
        <label>
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="form-actions">
        <button
          className="btn btn-primary"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        {status === "error" && (
          <div className="form-error" role="alert">
            {error}
          </div>
        )}
      </div>
    </form>
  );
}
