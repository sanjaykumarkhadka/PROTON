import Mark from "../_components/Mark";
import Nav from "../_components/Nav";

export const metadata = {
  title: "Products — PROTON LED Display Electronics",
  description:
    "PROTON's product line in plain language: receiving cards, sending controllers, video processors, and software — what they do, who they're for, and what's inside the box.",
  openGraph: {
    title: "Products — PROTON LED Display Electronics",
    description:
      "Receiving cards, controllers, processors, and software — engineered in India.",
    type: "website",
  },
};

function SpecTable({ rows }) {
  return (
    <table className="spec-table">
      <tbody>
        {rows.map(([k, v]) => (
          <tr key={k}>
            <th scope="row">{k}</th>
            <td>{v}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function ProductsPage() {
  return (
    <>
      <div className="bg-wrap">
        <div className="grid-overlay" />
      </div>

      <Nav />

      {/* Page header */}
      <header className="page-head">
        <div className="container">
          <div className="crumb">
            <a href="/">Home</a> <span>/</span> <span>Products</span>
          </div>
          <span className="eyebrow">● The PROTON product line</span>
          <h1>
            Four product families, <span className="accent">one job done well.</span>
          </h1>
          <p className="lead">
            Small boards that go inside every LED panel. A box that drives the
            whole wall. A bigger box for huge displays. And software that ties
            it all together. Here's the lineup, in plain language.
          </p>
        </div>
      </header>

      {/* RX SERIES */}
      <section id="rx" className="product-section">
        <div className="container">
          <div className="product-hero">
            <div>
              <div className="kicker">RX Series</div>
              <h2>Receiving cards — the brain inside every panel</h2>
              <p>
                Every LED cabinet has a small board inside it. That board takes
                the video coming in over a network cable and lights up the
                pixels. The RX series is PROTON's version of that board, in
                three flavors for three kinds of customer.
              </p>
              <div className="tagrow">
                <span className="chip">Fits inside standard LED cabinets</span>
                <span className="chip">Smooth, flicker-free picture</span>
                <span className="chip">Auto color &amp; heat tuning</span>
              </div>
            </div>
          </div>

          <div className="sku-grid">
            <article className="sku">
              <header><span className="sku-name">RX-1</span><span className="sku-price">₹1,500–1,900</span></header>
              <p className="sku-tag">For everyday signage walls</p>
              <SpecTable
                rows={[
                  ["What it does", "Lights up a standard LED panel"],
                  ["Picture quality", "Smooth color, no visible flicker"],
                  ["Panel size it drives", "Up to a typical 1m × 0.5m cabinet"],
                  ["Connection", "Plain network cable"],
                  ["Power use", "Less than 4 watts"],
                ]}
              />
              <div className="sku-use">
                <b>Best for:</b> shops, offices, lobbies, retail signage,
                everyday indoor and outdoor displays.
              </div>
            </article>

            <article className="sku">
              <header><span className="sku-name">RX-Pro</span><span className="sku-price">₹2,400–3,200</span></header>
              <p className="sku-tag">For studios &amp; rental events</p>
              <SpecTable
                rows={[
                  ["What it does", "Lights up panels for studios and rental shows"],
                  ["Picture quality", "Studio-grade — looks great on camera"],
                  ["Motion handling", "Smooth even at 240 frames per second"],
                  ["Sync", "Works with broadcast cameras and equipment"],
                  ["Connection", "Five times faster network link"],
                ]}
              />
              <div className="sku-use">
                <b>Best for:</b> rental staging, concerts, broadcast studios,
                virtual production (XR), cinema-quality walls.
              </div>
            </article>

            <article className="sku">
              <header><span className="sku-name">RX-COB</span><span className="sku-price">₹2,200–2,900</span></header>
              <p className="sku-tag">For premium, ultra-fine displays</p>
              <SpecTable
                rows={[
                  ["What it does", "Drives premium ultra-fine LED displays"],
                  ["Looks great even", "From a metre away (very fine pitch)"],
                  ["Color depth", "Extra-deep — looks great in dim rooms"],
                  ["Low brightness", "Smooth even when dimmed right down"],
                  ["Heat handling", "Auto-adjusts as panels warm up"],
                ]}
              />
              <div className="sku-use">
                <b>Best for:</b> premium meeting rooms, control rooms, retail
                flagships, home cinema, exec showcases.
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* TX SERIES */}
      <section id="tx" className="product-section alt">
        <div className="container">
          <div className="product-hero">
            <div>
              <div className="kicker">TX Series</div>
              <h2>Sending controllers — the box that runs the wall</h2>
              <p>
                The TX box sits between your video source (laptop, camera,
                media player) and the wall. It takes the video in, splits it
                across every panel on the wall, and keeps the whole thing
                perfectly in sync.
              </p>
              <div className="tagrow">
                <span className="chip">Plug in HDMI / DisplayPort / SDI</span>
                <span className="chip">Sends video to dozens of panels</span>
                <span className="chip">Keeps the wall in sync</span>
              </div>
            </div>
          </div>

          <div className="sku-grid two">
            <article className="sku">
              <header><span className="sku-name">TX-1</span><span className="sku-price">₹35,000–55,000</span></header>
              <p className="sku-tag">Entry-level controller for indoor walls</p>
              <SpecTable
                rows={[
                  ["What it does", "Drives small to mid-size walls (up to ~2K)"],
                  ["Video inputs", "HDMI and DVI — laptops, players, etc."],
                  ["Outputs to panels", "4 to 6 network ports"],
                  ["Lag", "Imperceptible (under 2 frames)"],
                  ["Setup", "USB + Studio app"],
                  ["Size", "Half-rack — fits in a small cabinet"],
                ]}
              />
              <div className="sku-use">
                <b>Best for:</b> retail roll-outs, lobbies, mid-size meeting
                walls, indoor signage up to about 2K resolution.
              </div>
            </article>

            <article className="sku">
              <header><span className="sku-name">TX-4K</span><span className="sku-price">₹95,000–1,40,000</span></header>
              <p className="sku-tag">Pro 4K controller with fibre reach</p>
              <SpecTable
                rows={[
                  ["What it does", "Drives big 4K walls with fibre reach"],
                  ["Video inputs", "HDMI 2.0, DisplayPort, SDI"],
                  ["Outputs to panels", "Up to 16 network ports + 2 fibre"],
                  ["Lag", "1 frame — broadcast-ready"],
                  ["Resolution", "Full 4K at 60 frames per second"],
                  ["Reliability", "Built-in backup port pairs"],
                ]}
              />
              <div className="sku-use">
                <b>Best for:</b> rental tours, broadcast studios, large fixed
                installations, 4K conference and command walls.
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ONE & VX */}
      <section id="one-vx" className="product-section">
        <div className="container">
          <div className="product-hero">
            <div>
              <div className="kicker">PROTON ONE &amp; VX</div>
              <h2>Processing — for huge or multi-source walls</h2>
              <p>
                When the wall is enormous, or you need many videos showing on
                it side-by-side, you need a processor. PROTON ONE puts the
                processor and controller in one box. PROTON VX is a dedicated
                processor for really large or complex jobs.
              </p>
              <div className="tagrow">
                <span className="chip">Up to 8K canvas (ONE)</span>
                <span className="chip">Up to 16K canvas (VX)</span>
                <span className="chip">Multiple videos at once</span>
                <span className="chip">Roadmap V2</span>
              </div>
            </div>
          </div>

          <div className="sku-grid two">
            <article className="sku">
              <header><span className="sku-name">PROTON ONE</span><span className="sku-price">Roadmap · V2</span></header>
              <p className="sku-tag">Processor + controller in one box</p>
              <SpecTable
                rows={[
                  ["What it does", "Mixes multiple videos and drives the wall"],
                  ["Canvas size", "Up to 8K wide"],
                  ["Video inputs", "4 HDMI + 2 DisplayPort + 2 SDI"],
                  ["Outputs", "16 network ports + 4 fibre"],
                  ["Windows", "Up to 8 pictures side-by-side"],
                  ["Control", "Front-panel touchscreen + Studio app"],
                ]}
              />
              <div className="sku-use">
                <b>Best for:</b> command and control rooms, broadcast
                stations, large corporate auditoriums.
              </div>
            </article>

            <article className="sku">
              <header><span className="sku-name">PROTON VX</span><span className="sku-price">Roadmap · V2</span></header>
              <p className="sku-tag">Big standalone video processor</p>
              <SpecTable
                rows={[
                  ["What it does", "Splices many videos into one huge wall"],
                  ["Canvas size", "Up to 16K × 4K"],
                  ["Sources at once", "Up to 32 inputs, 16 layers"],
                  ["Inputs", "12-port modular: HDMI / DisplayPort / SDI / IP"],
                  ["Effects", "Edge blending, warping, masking"],
                  ["Reliability", "Two power supplies — hot-swappable"],
                ]}
              />
              <div className="sku-use">
                <b>Best for:</b> stadium screens, airport displays, large
                command centres, theme-park attractions.
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SOFTWARE */}
      <section id="software" className="product-section alt">
        <div className="container">
          <div className="product-hero">
            <div>
              <div className="kicker">PROTON Studio &amp; Cloud</div>
              <h2>Software — set it up, then keep an eye on it</h2>
              <p>
                Hardware gets you most of the way. Software gets you to a wall
                that <em>actually</em> looks right and stays online. PROTON
                Studio is the desktop app for setting it all up. PROTON Cloud
                is the web dashboard for watching your walls from anywhere.
              </p>
              <div className="tagrow">
                <span className="chip">Windows + Mac</span>
                <span className="chip">Drag-and-drop setup</span>
                <span className="chip">Remote monitoring</span>
              </div>
            </div>
          </div>

          <div className="sku-grid two">
            <article className="sku">
              <header><span className="sku-name">PROTON Studio</span><span className="sku-price">Bundled with hardware</span></header>
              <p className="sku-tag">Set up &amp; color-match the wall on-site</p>
              <SpecTable
                rows={[
                  ["What it does", "Sets up and tunes the wall on-site"],
                  ["Runs on", "Windows 10/11 and Mac (macOS 12+)"],
                  ["Finds your gear", "Auto-detects controllers and cards"],
                  ["Wall layout", "Drag-and-drop cabinet map"],
                  ["Color matching", "Pixel-by-pixel tuning"],
                  ["Diagnostics", "Test patterns, dead-pixel scan, ageing"],
                  ["Languages", "English and Hindi"],
                ]}
              />
              <div className="sku-use">
                <b>Best for:</b> integrators commissioning walls on-site, panel
                makers bench-testing cabinets, service techs in the field.
              </div>
            </article>

            <article className="sku">
              <header><span className="sku-name">PROTON Cloud</span><span className="sku-price">From ₹999 / month per wall</span></header>
              <p className="sku-tag">Watch your walls from anywhere</p>
              <SpecTable
                rows={[
                  ["What it does", "Watches your walls remotely"],
                  ["Hosted in", "Mumbai (India region)"],
                  ["Health checks", "Temperature, power, panel uptime"],
                  ["Alerts", "Email, WhatsApp, webhooks"],
                  ["Content", "Schedule, push, roll back remotely"],
                  ["History", "Audit log of who did what"],
                ]}
              />
              <div className="sku-use">
                <b>Best for:</b> chains running 10+ walls, outdoor advertising
                operators, rental companies tracking their fleet.
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="cta">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to try one?</h2>
            <p>Tell us a bit about your wall — cabinet size, pixel pitch, how many you need — and we'll send a sample and a tailored quote.</p>
            <div className="hero-cta" style={{ justifyContent: "center" }}>
              <a className="btn btn-primary" href="mailto:hello@proton.example">Request a sample</a>
              <a className="btn btn-ghost" href="/#market">See the market</a>
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
              <a href="/#technology">Why us</a>
              <a href="/#market">Market</a>
              <a href="/#contact">Contact</a>
            </div>
            <div className="foot-copy">© {new Date().getFullYear()} PROTON · Made in India</div>
          </div>
          <p className="disclaimer">
            Product details, prices, and availability shown above are indicative
            planning estimates — not a quote, datasheet, or guarantee.
            "Proton" may be a registered trademark of other companies in
            unrelated classes; verify trademark availability before commercial use.
          </p>
        </div>
      </footer>
    </>
  );
}
