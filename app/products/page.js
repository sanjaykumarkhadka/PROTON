import Mark from "../_components/Mark";
import Nav from "../_components/Nav";

export const metadata = {
  title: "Products — PROTON LED Display Control Systems",
  description:
    "PROTON product line: RX receiving cards, TX sending controllers, PROTON ONE & VX processors, and PROTON Studio + Cloud software. Indicative specs and use cases.",
  openGraph: {
    title: "Products — PROTON LED Display Control Systems",
    description:
      "Receiving cards, sending controllers, processors and software — engineered in India.",
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
            The full control chain — <span className="accent">from cabinet to cloud.</span>
          </h1>
          <p className="lead">
            Four product families covering every layer of an LED display system:
            receiving cards inside the cabinets, sending controllers driving the wall,
            processors stitching multiple inputs, and software for setup, calibration
            and remote management. Specs below are indicative for launch SKUs.
          </p>
        </div>
      </header>

      {/* RX SERIES */}
      <section id="rx" className="product-section">
        <div className="container">
          <div className="product-hero">
            <div>
              <div className="kicker">RX Series</div>
              <h2>Receiving cards — the board inside every cabinet</h2>
              <p>
                The RX series is PROTON’s volume product: the small PCB inside
                every LED cabinet that takes the gigabit data stream from the
                sending controller and drives the actual pixels. Three SKUs cover
                fixed-install, rental/broadcast, and fine-pitch COB displays.
              </p>
              <div className="tagrow">
                <span className="chip">HUB75 / HUB320 outputs</span>
                <span className="chip">14–16 bit greyscale</span>
                <span className="chip">PWM &amp; thermal compensation</span>
              </div>
            </div>
          </div>

          <div className="sku-grid">
            <article className="sku">
              <header><span className="sku-name">RX-1</span><span className="sku-price">₹1,500–1,900</span></header>
              <p className="sku-tag">Standard fixed-install card</p>
              <SpecTable
                rows={[
                  ["Max pixel load", "~512 × 256 px / card"],
                  ["HUB75E outputs", "16×"],
                  ["Greyscale", "14–16 bit"],
                  ["Refresh", "≥ 1,920 Hz (PWM)"],
                  ["Frame rate", "Up to 60 Hz @ full load"],
                  ["Receiving link", "Gigabit Ethernet"],
                  ["Calibration", "Point-by-point on-board"],
                  ["Power", "5 V, < 4 W"],
                ]}
              />
              <div className="sku-use">
                <b>Best for:</b> indoor &amp; outdoor fixed-install signage, retail,
                corporate, P1.5–P4 cabinets.
              </div>
            </article>

            <article className="sku">
              <header><span className="sku-name">RX-Pro</span><span className="sku-price">₹2,400–3,200</span></header>
              <p className="sku-tag">Low-latency, 5G-class rental &amp; broadcast</p>
              <SpecTable
                rows={[
                  ["Max pixel load", "~1024 × 512 px / card"],
                  ["HUB75E outputs", "20×"],
                  ["Greyscale", "16 bit"],
                  ["Refresh", "≥ 3,840 Hz"],
                  ["Frame rate", "Up to 240 Hz"],
                  ["Receiving link", "5G Ethernet (5 Gbps)"],
                  ["Latency", "Sub-frame, genlock-ready"],
                  ["HDR", "HDR10 / PQ-curve support"],
                ]}
              />
              <div className="sku-use">
                <b>Best for:</b> rental staging, broadcast studios, xR/virtual production,
                fine-pitch cinema walls.
              </div>
            </article>

            <article className="sku">
              <header><span className="sku-name">RX-COB</span><span className="sku-price">₹2,200–2,900</span></header>
              <p className="sku-tag">Mini/Micro-LED COB &amp; MIP driving</p>
              <SpecTable
                rows={[
                  ["Drive mode", "Common-cathode & MIP"],
                  ["Greyscale", "16 bit + dynamic"],
                  ["Refresh", "≥ 3,840 Hz"],
                  ["Bit depth", "Up to 22-bit display"],
                  ["Low brightness", "Smooth from 0.1 nit"],
                  ["Pixel pitch range", "P0.7–P1.5 typical"],
                  ["Receiving link", "5G Ethernet (5 Gbps)"],
                  ["Thermal compensation", "Adaptive per-LED"],
                ]}
              />
              <div className="sku-use">
                <b>Best for:</b> high-end conference rooms, control rooms, retail flagships,
                premium home cinema.
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
              <h2>Sending controllers — signal in, walls out</h2>
              <p>
                The TX series takes a clean video feed (HDMI, DP, SDI) and
                distributes it across hundreds of receiving cards over gigabit
                or optical links — keeping the whole wall pixel-locked and
                frame-synchronised.
              </p>
              <div className="tagrow">
                <span className="chip">HDMI 2.0 / DP / 3G-SDI</span>
                <span className="chip">Gigabit + optical out</span>
                <span className="chip">Genlock / frame-sync</span>
              </div>
            </div>
          </div>

          <div className="sku-grid two">
            <article className="sku">
              <header><span className="sku-name">TX-1</span><span className="sku-price">₹35,000–55,000</span></header>
              <p className="sku-tag">Entry sending box for indoor walls</p>
              <SpecTable
                rows={[
                  ["Inputs", "HDMI 1.4, DVI"],
                  ["Outputs", "4–6 × Gigabit Ethernet"],
                  ["Max load", "2.6 Mpx (≈ 2K)"],
                  ["Latency", "≤ 2 frames"],
                  ["Sync", "Hardware frame-sync"],
                  ["Control", "USB + Ethernet (Studio)"],
                  ["Form factor", "1U half-rack"],
                  ["Audio", "Stereo passthrough"],
                ]}
              />
              <div className="sku-use">
                <b>Best for:</b> retail rollouts, lobbies, mid-size meeting walls,
                up to ~2K resolution displays.
              </div>
            </article>

            <article className="sku">
              <header><span className="sku-name">TX-4K</span><span className="sku-price">₹95,000–1,40,000</span></header>
              <p className="sku-tag">4K controller with optical distribution</p>
              <SpecTable
                rows={[
                  ["Inputs", "HDMI 2.0, DP 1.2, 3G-SDI"],
                  ["Outputs", "10–16× Gigabit + 2× 10G fibre"],
                  ["Max load", "8.8 Mpx (4K @ 60 Hz)"],
                  ["Latency", "≤ 1 frame end-to-end"],
                  ["Sync", "Genlock-in, frame-sync"],
                  ["Bit depth", "10-bit pipeline, HDR10"],
                  ["Redundancy", "Hot-backup port pairs"],
                  ["Form factor", "1U full-rack"],
                ]}
              />
              <div className="sku-use">
                <b>Best for:</b> rental tours, broadcast studios, large fixed
                installations, 4K conference walls.
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
              <h2>Processing — all-in-one and multi-window</h2>
              <p>
                When a project needs scaling, multi-window layouts or seamless
                stitching across very large walls, the processor layer steps in.
                PROTON ONE collapses processing and control into a single box;
                PROTON VX is a standalone video processor / splicer.
              </p>
              <div className="tagrow">
                <span className="chip">4K → 8K canvas</span>
                <span className="chip">PIP / multi-window</span>
                <span className="chip">Edge blending</span>
                <span className="chip">Roadmap V2</span>
              </div>
            </div>
          </div>

          <div className="sku-grid two">
            <article className="sku">
              <header><span className="sku-name">PROTON ONE</span><span className="sku-price">Roadmap · V2</span></header>
              <p className="sku-tag">All-in-one: processor + controller</p>
              <SpecTable
                rows={[
                  ["Canvas", "Up to 8K × 2K"],
                  ["Inputs", "4× HDMI 2.0, 2× DP 1.4, 2× 3G-SDI"],
                  ["Outputs", "16× Gigabit + 4× 10G fibre"],
                  ["Windows", "Up to 8 simultaneous"],
                  ["Latency", "≤ 1 frame"],
                  ["Scaler", "10-bit, motion-adaptive"],
                  ["Control", "Front LCD + Studio"],
                ]}
              />
              <div className="sku-use">
                <b>Best for:</b> command &amp; control rooms, broadcast, large
                corporate auditorium installs.
              </div>
            </article>

            <article className="sku">
              <header><span className="sku-name">PROTON VX</span><span className="sku-price">Roadmap · V2</span></header>
              <p className="sku-tag">Standalone video processor / splicer</p>
              <SpecTable
                rows={[
                  ["Canvas", "Up to 16K × 4K"],
                  ["Layers", "16 layers / 32 windows"],
                  ["Inputs", "12-port modular (HDMI/DP/SDI/IP)"],
                  ["Outputs", "8× HDMI 2.0 or fibre"],
                  ["Effects", "Edge blend, warp, mask"],
                  ["Preview", "Multi-view HDMI out"],
                  ["Redundancy", "Dual PSU, hot-swap"],
                ]}
              />
              <div className="sku-use">
                <b>Best for:</b> stadium screens, airport displays, multi-source
                command centres, theme park installations.
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
              <h2>The software layer — setup, calibration, monitoring</h2>
              <p>
                Hardware gets you 80% of the way. Software gets you to a wall
                that actually <em>looks</em> right and stays online. PROTON Studio
                is the local config &amp; calibration tool; PROTON Cloud is the
                subscription layer for fleet monitoring and content.
              </p>
              <div className="tagrow">
                <span className="chip">Windows + macOS</span>
                <span className="chip">Point-by-point calibration</span>
                <span className="chip">REST API</span>
              </div>
            </div>
          </div>

          <div className="sku-grid two">
            <article className="sku">
              <header><span className="sku-name">PROTON Studio</span><span className="sku-price">Bundled with hardware</span></header>
              <p className="sku-tag">Local configuration &amp; calibration</p>
              <SpecTable
                rows={[
                  ["Platforms", "Windows 10/11, macOS 12+"],
                  ["Discovery", "Auto-detect TX + RX over LAN"],
                  ["Mapping", "Drag-and-drop cabinet layout"],
                  ["Calibration", "Point-by-point brightness + chroma"],
                  ["Profiles", "Save / clone / version configs"],
                  ["Tests", "Patterns, ageing, dead-pixel scan"],
                  ["Languages", "English, Hindi (Yr-1)"],
                ]}
              />
              <div className="sku-use">
                <b>Best for:</b> integrators commissioning walls on-site, OEMs
                bench-testing cabinets, service techs in the field.
              </div>
            </article>

            <article className="sku">
              <header><span className="sku-name">PROTON Cloud</span><span className="sku-price">Subscription · ₹999/mo per wall</span></header>
              <p className="sku-tag">Fleet monitoring &amp; content management</p>
              <SpecTable
                rows={[
                  ["Hosting", "India region (AWS Mumbai)"],
                  ["Telemetry", "Per-cabinet health, temp, voltage"],
                  ["Alerts", "Email + WhatsApp + webhook"],
                  ["Content", "Schedule / push / rollback"],
                  ["Remote access", "Studio over secure tunnel"],
                  ["Audit log", "Per-user action history"],
                  ["API", "REST + webhooks"],
                ]}
              />
              <div className="sku-use">
                <b>Best for:</b> chains running 10+ walls, DOOH operators, rental
                companies tracking inventory health.
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="cta">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to evaluate?</h2>
            <p>Tell us your cabinet design, pixel pitch and volume — we’ll send an eval kit and a tailored quote.</p>
            <div className="hero-cta" style={{ justifyContent: "center" }}>
              <a className="btn btn-primary" href="mailto:hello@proton.example">Request an eval kit</a>
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
              <a href="/#technology">Technology</a>
              <a href="/#market">Market</a>
              <a href="/#contact">Contact</a>
            </div>
            <div className="foot-copy">© {new Date().getFullYear()} PROTON · Made in India</div>
          </div>
          <p className="disclaimer">
            All specifications, prices and availability above are indicative planning
            estimates for illustration only — not a quote, datasheet or guarantee.
            “Proton” may be a registered trademark of other companies in unrelated
            classes; verify trademark availability before commercial use.
          </p>
        </div>
      </footer>
    </>
  );
}
