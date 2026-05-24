import Mark from "../_components/Mark";
import Nav from "../_components/Nav";

export const metadata = {
  title: "Terms of Use — PROTON",
  description: "Terms governing the use of the PROTON website and the information presented on it.",
};

export default function TermsPage() {
  return (
    <>
      <div className="bg-wrap"><div className="grid-overlay" /></div>
      <Nav />

      <main id="top" className="legal">
        <div className="container legal-container">
          <div className="crumb">
            <a href="/">Home</a> <span>/</span> <span>Terms</span>
          </div>
          <h1>Terms of Use</h1>
          <p className="legal-updated">Last updated: 2026-05-24</p>

          <section>
            <h2>About this site</h2>
            <p>
              This website presents PROTON&apos;s product line and company
              information. It is provided for general information and as a way
              to start a conversation with us.
            </p>
          </section>

          <section>
            <h2>Information accuracy</h2>
            <p>
              We try to keep specifications, pricing, and roadmap accurate, but
              they may change. Anything on this site — including spec tables,
              price ranges, and market figures — is indicative, not a binding
              quote or datasheet. A formal quote or contract from PROTON is
              required for any commercial commitment.
            </p>
          </section>

          <section>
            <h2>Intellectual property</h2>
            <p>
              The PROTON name, logo, illustrations, and copy on this site are
              the property of the company that operates PROTON, unless
              otherwise noted. You may reference and link to this site freely.
              Please ask before reproducing logos or copy in marketing
              material.
            </p>
            <p>
              &ldquo;Proton&rdquo; may be registered as a trademark by other
              companies in unrelated classes; the use here is in connection
              with LED display electronics.
            </p>
          </section>

          <section>
            <h2>Third-party services</h2>
            <p>
              This site uses Vercel for hosting and analytics, and Resend for
              transactional email when you contact us. Their own terms apply to
              the parts of the service they provide.
            </p>
          </section>

          <section>
            <h2>Limitation of liability</h2>
            <p>
              To the maximum extent permitted by Indian law, PROTON is not
              liable for any indirect or consequential loss arising from your
              use of the information on this site. Nothing here limits any
              right you have as a consumer that cannot be limited by contract.
            </p>
          </section>

          <section>
            <h2>Governing law</h2>
            <p>
              These terms are governed by the laws of India. Any dispute will
              be subject to the exclusive jurisdiction of the courts where the
              company is registered.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              Questions? Use the <a href="/#contact">contact form</a>.
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
