import Mark from "../_components/Mark";
import Nav from "../_components/Nav";

export const metadata = {
  title: "Resources — PROTON",
  description:
    "Guides and explainers on LED display electronics — receiving cards, controllers, processors, color matching, calibration, and more.",
};

const PLANNED = [
  {
    tag: "Guide",
    title: "How to choose a receiving card",
    blurb:
      "What the spec sheet hides — refresh rate vs grey-scale, brightness uniformity, and the difference between mid-end and high-end cards.",
  },
  {
    tag: "Explainer",
    title: "LED wall calibration, in plain English",
    blurb:
      "Why no LED wall looks right out of the box, what calibration actually does to each panel, and how often it needs redoing.",
  },
  {
    tag: "Guide",
    title: "Sending controllers: TX-1 vs TX-4K vs ONE",
    blurb:
      "Which box you need at which wall size, with the trade-offs between cost, port count, and processing.",
  },
  {
    tag: "Explainer",
    title: "Why color matching matters more than pitch",
    blurb:
      "Pixel pitch sells walls, but uneven color is what kills them. The physics behind shade variation and how PROTON tunes it out.",
  },
  {
    tag: "Reference",
    title: "Pixel pitch &amp; viewing distance, cheat sheet",
    blurb:
      "A one-page reference for choosing pitch by venue type — retail, stage, control room, broadcast, outdoor.",
  },
  {
    tag: "Industry",
    title: "India&apos;s LED display market — the 2026 view",
    blurb:
      "Where the demand is coming from (rental, retail, infra), why imports dominate, and what changes with the ECMS push.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <div className="bg-wrap"><div className="grid-overlay" /></div>
      <Nav />

      <header id="top" className="page-head">
        <div className="container">
          <div className="crumb">
            <a href="/">Home</a> <span>/</span> <span>Resources</span>
          </div>
          <span className="eyebrow">● Guides &amp; Explainers</span>
          <h1>
            Things worth <span className="accent">knowing</span> before you buy a wall.
          </h1>
          <p className="lead">
            We&apos;re writing a small library of plain-language guides for
            people who buy, build, and run LED video walls. Below is the
            roadmap — drop us a line if you&apos;d like any of these next.
          </p>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="resources-grid">
            {PLANNED.map((p) => (
              <article key={p.title} className="rcard">
                <div className="tag">{p.tag}</div>
                <h3 dangerouslySetInnerHTML={{ __html: p.title }} />
                <p dangerouslySetInnerHTML={{ __html: p.blurb }} />
                <div className="rcard-foot">
                  <span className="coming">Coming soon</span>
                  <a href="/#contact" className="rcard-cta">Request this →</a>
                </div>
              </article>
            ))}
          </div>

          <div className="cta" style={{ paddingTop: 60 }}>
            <div className="cta-box" style={{ padding: "40px 28px" }}>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)" }}>
                Want one of these written first?
              </h2>
              <p>
                Tell us which one is most useful to your team and we&apos;ll
                bump it to the top of the queue.
              </p>
              <div className="hero-cta" style={{ justifyContent: "center" }}>
                <a className="btn btn-primary" href="/#contact">Send us a note</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="foot-inner">
            <a className="brand" href="/"><Mark />PROTON</a>
            <div className="foot-links">
              <a href="/products">Products</a>
              <a href="/resources">Resources</a>
              <a href="/#contact">Contact</a>
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
