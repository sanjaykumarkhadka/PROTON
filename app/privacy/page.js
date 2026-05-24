import Mark from "../_components/Mark";
import Nav from "../_components/Nav";

export const metadata = {
  title: "Privacy Policy — PROTON",
  description: "How PROTON collects, uses, and protects information you share with us.",
};

export default function PrivacyPage() {
  return (
    <>
      <div className="bg-wrap"><div className="grid-overlay" /></div>
      <Nav />

      <main id="top" className="legal">
        <div className="container legal-container">
          <div className="crumb">
            <a href="/">Home</a> <span>/</span> <span>Privacy</span>
          </div>
          <h1>Privacy Policy</h1>
          <p className="legal-updated">Last updated: 2026-05-24</p>

          <section>
            <h2>What this is</h2>
            <p>
              This page explains what information PROTON (the brand operated by
              the company behind this website) collects when you visit our site
              or contact us, how we use it, and how we keep it safe.
            </p>
          </section>

          <section>
            <h2>What we collect</h2>
            <p>We collect only what we need:</p>
            <ul>
              <li>
                <b>Contact form data</b> — when you fill the form, we receive
                your name, email, phone (optional), company, and message.
              </li>
              <li>
                <b>Basic analytics</b> — anonymous, aggregated page-view data
                via Vercel Analytics. No cookies, no personal identifiers.
              </li>
              <li>
                <b>Server logs</b> — standard request logs (IP, browser, time)
                kept for short-term security and debugging.
              </li>
            </ul>
          </section>

          <section>
            <h2>How we use it</h2>
            <ul>
              <li>To respond to your enquiry.</li>
              <li>To improve the site (which pages are useful, which aren't).</li>
              <li>To protect the site from abuse.</li>
            </ul>
            <p>
              We do not sell your data. We do not share it with advertisers. We
              do not enroll you in marketing emails unless you ask.
            </p>
          </section>

          <section>
            <h2>Where it lives</h2>
            <p>
              Contact-form messages are delivered via Resend (transactional
              email provider) to a PROTON inbox. Analytics is processed by
              Vercel. Both are GDPR-aware providers. We retain enquiries for as
              long as needed to handle them and your relationship with us.
            </p>
          </section>

          <section>
            <h2>Your rights (India · DPDP)</h2>
            <p>
              Under India&apos;s Digital Personal Data Protection Act, you can
              ask us to access, correct, or delete the personal data we hold
              about you. Write to{" "}
              <a href="/#contact">our contact form</a> with the subject
              &ldquo;DPDP request&rdquo; and we&apos;ll respond within a
              reasonable period.
            </p>
          </section>

          <section>
            <h2>Cookies</h2>
            <p>
              This site does not use tracking cookies. Vercel Analytics runs
              cookieless. The only browser storage we use is what Next.js needs
              to render the page.
            </p>
          </section>

          <section>
            <h2>Changes</h2>
            <p>
              If we change this policy materially, we&apos;ll update the date at
              the top and, where appropriate, note the change in the next email
              we send you.
            </p>
          </section>
        </div>
      </main>

      <footer>
        <div className="container">
          <div className="foot-inner">
            <a className="brand" href="/"><Mark />PROTON</a>
            <div className="foot-links">
              <a href="/products">Products</a>
              <a href="/resources">Resources</a>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
            </div>
            <div className="foot-copy">© {new Date().getFullYear()} PROTON · Made in India</div>
          </div>
        </div>
      </footer>
    </>
  );
}
