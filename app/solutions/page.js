import Mark from "../_components/Mark";
import Nav from "../_components/Nav";

export const metadata = {
  title: "Solutions — PROTON LED Signage by Use Case",
  description:
    "Match PROTON's display families to your venue and pixel pitch. Plus packaged PROTON Signage Series kits — display + control + mount + CMS + install + AMC.",
  openGraph: {
    title: "PROTON Solutions — LED signage by use case",
    description:
      "Find the right pitch and display family for your venue, or pick a packaged PROTON Signage Series kit.",
    type: "website",
  },
};

const PITCH_BANDS = [
  { key: "ultra", label: "Ultra-fine", range: "P0.9–1.5" },
  { key: "fine", label: "Fine", range: "P1.5–2.5" },
  { key: "standard", label: "Standard", range: "P2.6–4" },
  { key: "outdoor", label: "Outdoor", range: "P4–P10" },
];

const ENVIRONMENTS = [
  {
    key: "retail",
    label: "Retail / showroom",
    cells: {
      ultra: { type: "Indoor COB", note: "Flagships, jewellery, premium retail" },
      fine: { type: "Indoor SMD", note: "Mainline retail, brand walls" },
      standard: { type: "Indoor or Creative", note: "In-store posters, curves" },
      outdoor: { type: "Outdoor Fixed", note: "Storefront LED" },
    },
  },
  {
    key: "corporate",
    label: "Corporate / control room",
    cells: {
      ultra: { type: "Indoor Studio / COB", note: "Boardroom, NOC, command" },
      fine: { type: "Indoor SMD", note: "Lobby, town-hall, auditorium" },
      standard: { type: "All-in-One 110\"", note: "Meeting / conference walls" },
      outdoor: { type: "—", note: "Use Indoor / All-in-One" },
    },
  },
  {
    key: "transport",
    label: "Transport / public",
    cells: {
      ultra: { type: "—", note: "Overkill for distance" },
      fine: { type: "Indoor SMD", note: "Concourse, gate displays" },
      standard: { type: "Totem / All-in-One", note: "Wayfinding, ticketing" },
      outdoor: { type: "Outdoor Fixed", note: "Platform, facade, billboards" },
    },
  },
  {
    key: "events",
    label: "Events / rental",
    cells: {
      ultra: { type: "Studio / XR", note: "Virtual production stages" },
      fine: { type: "Rental Indoor", note: "Conferences, awards, broadcast" },
      standard: { type: "Rental Indoor", note: "Concerts, expos" },
      outdoor: { type: "Rental Outdoor", note: "Festivals, sports" },
    },
  },
];

const KITS = [
  {
    name: "Retail Wall Kit",
    tag: "PROTON Signage Series",
    blurb:
      "P1.5 or P1.8 indoor wall, PROTON TX-1 controller, RX cards pre-fitted, wall-mount frame, Studio + CMS, install and 1-year AMC.",
    size: "From 3 × 2 m",
    price: "From ₹4.5 L",
    use: "Brand walls, flagship retail, showroom feature walls",
    color: "blue",
  },
  {
    name: "Meeting / NOC Kit",
    tag: "PROTON Signage Series",
    blurb:
      "P1.2 indoor SMD wall or 110\" all-in-one, ONE processor for multi-source, wall mount, Studio + CMS, install and 1-year AMC.",
    size: "110\" or modular 3 × 1.7 m",
    price: "From ₹6.5 L",
    use: "Boardrooms, command centres, hybrid meeting rooms",
    color: "cyan",
  },
  {
    name: "All-in-One Display",
    tag: "PROTON Signage Series",
    blurb:
      "Single-SKU display with built-in Android player and CMS subscription. Wall-mount, plug into power and Wi-Fi, schedule from anywhere.",
    size: "55\" / 65\" / 75\" / 110\"",
    price: "From ₹2.25 L",
    use: "SMBs, QSRs, hotels, retail counters, lobbies",
    color: "green",
  },
  {
    name: "Outdoor Billboard Kit",
    tag: "PROTON Signage Series",
    blurb:
      "P6 or P8 outdoor cabinets, TX-1 controller, IP65 enclosure, structural frame design, Cloud monitoring, install and 3-year AMC.",
    size: "From 4 × 3 m",
    price: "From ₹8 L",
    use: "Storefronts, transit, roadside, building facades",
    color: "amber",
  },
  {
    name: "Rental Flightcase Set",
    tag: "PROTON Signage Series",
    blurb:
      "12 × P2.9 rental panels in two flightcases, TX-4K controller, rigging kit, spares, Studio + CMS. Built to tour.",
    size: "≈ 6 × 1.7 m built",
    price: "From ₹7.2 L",
    use: "Touring, corporate events, weddings, expo booths",
    color: "purple",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <div className="bg-wrap"><div className="grid-overlay" /></div>
      <Nav />

      <header id="top" className="page-head">
        <div className="container">
          <div className="crumb">
            <a href="/">Home</a> <span>/</span> <span>Solutions</span>
          </div>
          <span className="eyebrow">● Solutions by use case</span>
          <h1>
            Tell us the venue. <span className="accent">We&apos;ll spec the wall.</span>
          </h1>
          <p className="lead">
            Two ways in: pick the right pitch and family from the matrix
            below, or jump straight to a packaged PROTON Signage Series kit.
            Either way you get the display, the control, the CMS, the
            install and an AMC from one team.
          </p>
          <div className="tier-jump">
            <a href="#matrix" className="chip">↓ Pitch × use-case matrix</a>
            <a href="#kits" className="chip">↓ Packaged kits</a>
          </div>
        </div>
      </header>

      {/* MATRIX */}
      <section id="matrix" className="product-section">
        <div className="container">
          <div className="tier-page-head">
            <div className="tier-badge tier-2">Pitch × Use-Case Matrix</div>
            <h2>Find the right PROTON family for your venue</h2>
            <p>Rows are the environment. Columns are pixel-pitch bands (closer viewing on the left, further on the right). Each cell suggests the PROTON family to consider.</p>
          </div>

          <div className="matrix-wrap">
            <table className="matrix">
              <thead>
                <tr>
                  <th scope="col">Environment</th>
                  {PITCH_BANDS.map((b) => (
                    <th key={b.key} scope="col">
                      <div className="m-pitch">{b.label}</div>
                      <div className="m-range">{b.range}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ENVIRONMENTS.map((env) => (
                  <tr key={env.key}>
                    <th scope="row">{env.label}</th>
                    {PITCH_BANDS.map((b) => {
                      const c = env.cells[b.key];
                      const isEmpty = c.type === "—";
                      return (
                        <td key={b.key} className={isEmpty ? "m-empty" : ""}>
                          <div className="m-type">{c.type}</div>
                          <div className="m-note">{c.note}</div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="card-note" style={{ marginTop: 18 }}>
            Not sure where you fit? <a href="/#contact">Send us a site brief</a> and we&apos;ll point at the right tier.
          </p>
        </div>
      </section>

      {/* KITS */}
      <section id="kits" className="product-section alt">
        <div className="container">
          <div className="tier-page-head">
            <div className="tier-badge tier-3">PROTON Signage Series</div>
            <h2>Packaged kits — display + control + mount + CMS + install + AMC</h2>
            <p>Five starter kits we can ship and install across India. Each one bundles every layer of the stack — and every one is upgradable to Signage-as-a-Service.</p>
          </div>

          <div className="kits-grid">
            {KITS.map((k) => (
              <article key={k.name} className={`kit kit-${k.color}`}>
                <div className="tag">{k.tag}</div>
                <h3>{k.name}</h3>
                <p className="kit-blurb">{k.blurb}</p>
                <div className="kit-meta">
                  <div><span>Size</span><b>{k.size}</b></div>
                  <div><span>From</span><b>{k.price}</b></div>
                </div>
                <div className="kit-use">{k.use}</div>
                <a className="btn btn-ghost kit-cta" href="/#contact">Spec this kit →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="cta">
        <div className="container">
          <div className="cta-box">
            <h2>Not sure which? Tell us the brief.</h2>
            <p>Site type, rough size, indoor or outdoor, content plan — anything you can share helps. We&apos;ll come back with a tailored proposal.</p>
            <div className="hero-cta" style={{ justifyContent: "center" }}>
              <a className="btn btn-primary" href="/#contact">Send a brief</a>
              <a className="btn btn-ghost" href="/products">See each product</a>
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
              <a href="/solutions">Solutions</a>
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
