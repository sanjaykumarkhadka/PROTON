function Mark() {
  return (
    <svg className="mark" viewBox="0 0 64 64" width="28" height="28" aria-hidden="true">
      <defs>
        <radialGradient id="navnuc" cx="38%" cy="32%" r="70%">
          <stop offset="0%" stopColor="#7db8ff" />
          <stop offset="55%" stopColor="#2e7bff" />
          <stop offset="100%" stopColor="#0f3b7a" />
        </radialGradient>
      </defs>
      <g fill="none" stroke="#4f9dff" strokeWidth="2.6" opacity="0.85">
        <ellipse cx="32" cy="32" rx="27" ry="11" />
        <ellipse cx="32" cy="32" rx="27" ry="11" transform="rotate(60 32 32)" />
        <ellipse cx="32" cy="32" rx="27" ry="11" transform="rotate(120 32 32)" />
      </g>
      <circle cx="59" cy="32" r="3.4" fill="#21c8e8" />
      <circle cx="18.5" cy="9.6" r="3.4" fill="#4f9dff" />
      <circle cx="18.5" cy="54.4" r="3.4" fill="#ff9d3d" />
      <circle cx="32" cy="32" r="9.5" fill="url(#navnuc)" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <div className="bg-wrap">
        <div className="grid-overlay" />
      </div>

      {/* NAV */}
      <nav className="nav">
        <div className="container nav-inner">
          <a className="brand" href="#top">
            <Mark />
            PROTON
          </a>
          <div className="nav-links">
            <a href="#products">Products</a>
            <a href="#technology">Technology</a>
            <a href="#market">Market</a>
            <a href="#why">Why PROTON</a>
          </div>
          <a className="nav-cta" href="#contact">Talk to us</a>
        </div>
      </nav>

      {/* HERO */}
      <header id="top" className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">● LED Display Control Systems · Made in India</span>
            <h1>
              The control core of <span className="accent">every screen.</span>
            </h1>
            <p className="lead">
              PROTON builds the brains behind LED video — receiving cards, sending
              controllers, video processors and software that turn a wall of LED
              panels into one calibrated, seamless image. Engineered in India,
              priced in rupees, supported on the ground.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#products">Explore the products</a>
              <a className="btn btn-ghost" href="#market">See the market</a>
            </div>
          </div>

          <div className="atom-stage">
            <div className="atom" aria-hidden="true">
              <div className="orbit orbit-1"><span className="electron" /></div>
              <div className="orbit orbit-2"><span className="electron" /></div>
              <div className="orbit orbit-3"><span className="electron" /></div>
              <div className="nucleus" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="stats">
            <div className="stat"><div className="num">~55%</div><div className="lab">Target hardware gross margin</div></div>
            <div className="stat"><div className="num">12–18 mo</div><div className="lab">Concept → mass production</div></div>
            <div className="stat"><div className="num">₹700–1,000 Cr</div><div className="lab">India control-system TAM</div></div>
            <div className="stat"><div className="num">BIS-ready</div><div className="lab">Locally certified &amp; stocked</div></div>
          </div>
        </div>
      </header>

      {/* PRODUCTS */}
      <section id="products">
        <div className="container">
          <div className="section-head">
            <div className="kicker">The product line</div>
            <h2>One control chain. Built end to end.</h2>
            <p>
              A clean, modular portfolio organised around the LED control chain —
              launching with the RX receiving card and expanding up to controllers,
              processors and software.
            </p>
          </div>

          <div className="products">
            <div className="pcard">
              <div className="tag">RX Series · Receiving Cards</div>
              <h3>The volume product</h3>
              <p className="sub">The board inside every cabinet that drives the pixels.</p>
              <ul>
                <li><b>RX-1</b> — standard fixed-install card; up to ~512×256 px, 16× HUB75, 14–16 bit greyscale.</li>
                <li><b>RX-Pro</b> — low-latency, high-bandwidth (5G-class) for rental, xR &amp; broadcast.</li>
                <li><b>RX-COB</b> — optimised driving for Mini/Micro-LED (COB/MIP) fine pitches.</li>
              </ul>
              <div className="price">Launch price <b>₹1,500–3,200</b> to integrators</div>
            </div>

            <div className="pcard">
              <div className="tag">TX Series · Sending Controllers</div>
              <h3>Signal in, walls out</h3>
              <p className="sub">Scale and distribute video across the whole display.</p>
              <ul>
                <li><b>TX-1</b> — entry sending box; HDMI/DVI in, 4–6× Ethernet out, synchronous control.</li>
                <li><b>TX-4K</b> — 4K controller; HDMI 2.0 / DP / 3G-SDI in, multi-Gbps Ethernet + optical out.</li>
              </ul>
              <div className="price">Launch price <b>₹35k–1.4L</b></div>
            </div>

            <div className="pcard">
              <div className="tag">ONE &amp; VX · Processing</div>
              <h3>All-in-one &amp; video processors</h3>
              <p className="sub">Integrated processing and large multi-window walls.</p>
              <ul>
                <li><b>PROTON ONE</b> — all-in-one controller: video processing + control in one box (4K→8K).</li>
                <li><b>PROTON VX</b> — standalone video processor / splicer for large installations.</li>
              </ul>
              <div className="price">Roadmap <b>V2</b></div>
            </div>

            <div className="pcard">
              <div className="tag">Studio &amp; Cloud · Software</div>
              <h3>The experience layer</h3>
              <p className="sub">Setup, calibration and remote management that just works.</p>
              <ul>
                <li><b>PROTON Studio</b> — configuration &amp; point-by-point calibration software.</li>
                <li><b>PROTON Cloud</b> — remote monitoring, fault alerts &amp; content management (subscription).</li>
              </ul>
              <div className="price">Roadmap <b>V1 → V3</b></div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section id="technology">
        <div className="container">
          <div className="section-head">
            <div className="kicker">Why it looks better</div>
            <h2>Engineered where it matters most.</h2>
            <p>The differentiators customers actually feel — uniform colour, fast support, and software that doesn’t fight you.</p>
          </div>
          <div className="features">
            <div className="feature">
              <div className="ic">◎</div>
              <h4>Calibration &amp; thermal compensation</h4>
              <p>Point-by-point brightness and chroma uniformity, with adaptive thermal control to kill colour drift and red-stripe artifacts.</p>
            </div>
            <div className="feature">
              <div className="ic">⚡</div>
              <h4>Bandwidth &amp; low latency</h4>
              <p>5G-class data paths for high frame rate and high bit depth — ready for rental, virtual production and fine-pitch walls.</p>
            </div>
            <div className="feature">
              <div className="ic">🛠</div>
              <h4>Local support &amp; fast RMA</h4>
              <p>On-the-ground engineers, on-site calibration help and rapid replacement — the pain point with imported gear, solved.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MARKET */}
      <section id="market">
        <div className="container">
          <div className="section-head">
            <div className="kicker">The opportunity</div>
            <h2>An import-dominated market, ready to localise.</h2>
            <p>
              Almost the entire LED control layer in India is imported today. High
              tariffs and an LED-first signage shift make a BIS-ready local supplier
              structurally attractive — that is the gap PROTON fills.
            </p>
          </div>
          <div className="market">
            <div className="market-card">
              <h4 style={{ marginBottom: 14, fontSize: 18 }}>Market sizing (India control systems)</h4>
              <div className="funnel">
                <div className="frow"><span className="l">TAM — control systems</span><span className="v">₹700–1,000 Cr</span></div>
                <div className="frow"><span className="l">SAM — segments served</span><span className="v">₹450–650 Cr</span></div>
                <div className="frow"><span className="l">SOM — Yr-3 obtainable</span><span className="v">₹35–45 Cr</span></div>
              </div>
              <p style={{ color: "var(--muted)", fontSize: 12.5, marginTop: 14 }}>
                Control electronics ≈ 8–15% of an LED display’s cost (industry estimate). Figures are planning estimates, not a forecast.
              </p>
            </div>
            <div className="market-card">
              <h4 style={{ marginBottom: 14, fontSize: 18 }}>5-year share of served market</h4>
              <div className="scenario s-cons"><span>Conservative</span><span className="pct">~3% · ₹15–20 Cr</span></div>
              <div className="scenario s-base"><span>Base case</span><span className="pct">~7% · ₹35–45 Cr</span></div>
              <div className="scenario s-agg"><span>Aggressive</span><span className="pct">~12–15% · ₹70–95 Cr</span></div>
              <p style={{ color: "var(--muted)", fontSize: 13, marginTop: 16 }}>
                Reaching even high-single-digit national share in five years would make
                PROTON the clear domestic control-systems leader.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why">
        <div className="container">
          <div className="section-head">
            <div className="kicker">Why PROTON wins</div>
            <h2>Match them on quality. Beat them on everything local.</h2>
          </div>
          <div className="features">
            <div className="feature"><div className="ic">📦</div><h4>Availability</h4><p>BIS-ready local stock and predictable INR pricing — no import lead times, customs or forex swings.</p></div>
            <div className="feature"><div className="ic">🤝</div><h4>Built for OEMs</h4><p>We sell B2B to Indian panel makers and integrators, tailoring firmware and pixel formats to their cabinets.</p></div>
            <div className="feature"><div className="ic">🇮🇳</div><h4>Policy tailwind</h4><p>Aligned with India’s electronics push (ECMS, DLI) and import-substitution — a market that wants a local champion.</p></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="cta">
        <div className="container">
          <div className="cta-box">
            <h2>Let’s put PROTON inside your next wall.</h2>
            <p>Panel maker, integrator or investor — we’d love to talk. Request an eval kit or a partnership conversation.</p>
            <div className="hero-cta" style={{ justifyContent: "center" }}>
              <a className="btn btn-primary" href="mailto:hello@proton.example">Request an eval kit</a>
              <a className="btn btn-ghost" href="mailto:hello@proton.example">Partner with us</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="foot-inner">
            <a className="brand" href="#top"><Mark />PROTON</a>
            <div>© {new Date().getFullYear()} PROTON · LED Display Control Systems · Made in India</div>
          </div>
          <p className="disclaimer">
            PROTON is a proposed brand shown for illustration. Product specifications, prices and market figures are
            planning estimates, not a forecast, quote or guarantee. “Proton” may be a registered trademark of other
            companies in unrelated classes — verify trademark availability before commercial use.
          </p>
        </div>
      </footer>
    </>
  );
}
