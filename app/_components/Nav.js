"use client";

import { useEffect, useState } from "react";
import Mark from "./Mark";

const LINKS = [
  { href: "/#products", label: "Products" },
  { href: "/#technology", label: "Technology" },
  { href: "/#market", label: "Market" },
  { href: "/#why", label: "Why PROTON" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a className="brand" href="/#top" onClick={() => setOpen(false)}>
          <Mark />
          PROTON
        </a>

        <div className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="nav-right">
          <a className="nav-cta" href="/#contact">
            Talk to us
          </a>
          <button
            type="button"
            className={`hamburger ${open ? "open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu ${open ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        hidden={!open}
      >
        <div className="mobile-menu-inner">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            className="btn btn-primary mobile-cta"
            href="/#contact"
            onClick={() => setOpen(false)}
          >
            Talk to us
          </a>
        </div>
      </div>
    </nav>
  );
}
