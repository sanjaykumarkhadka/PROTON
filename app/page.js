import Mark from "./_components/Mark";
import Nav from "./_components/Nav";
import ContactForm from "./_components/ContactForm";

export default function Home() {
  return (
    <>
      <div className="bg-wrap">
        <div className="grid-overlay" />
      </div>

      <Nav />

      {/* HERO */}
      <header id="top" className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">● Complete LED Signage Solutions · Made in India</span>
            <h1>
              LED signage, engineered <span className="accent">end to end in India.</span>
            </h1>
            <p className="lead">
              PROTON delivers the whole signage solution — the LED display, the
              control electronics that drive it, the software to manage your
              content, and local install &amp; service. The control system and
              the CMS are built in-house, by us. One partner. One accountable
              team. Designed in India, sold in rupees.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#products">See what we build</a>
              <a className="btn btn-ghost" href="/solutions">Solutions by use case</a>
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
            <div className="stat"><div className="num">₹7,000+ Cr</div><div className="lab">India LED signage market we address</div></div>
            <div className="stat"><div className="num">5</div><div className="lab">Display families — indoor, outdoor, rental, all-in-one, creative</div></div>
            <div className="stat"><div className="num">Control + CMS</div><div className="lab">Built in-house, in India</div></div>
            <div className="stat"><div className="num">In stock</div><div className="lab">Local, BIS-ready, INR pricing</div></div>
          </div>
        </div>
      </header>

      {/* PRODUCTS — three tiers */}
      <section id="products">
        <div className="container">
          <div className="section-head">
            <div className="kicker">What we build</div>
            <h2>One stack. Three tiers. Pick where you join.</h2>
            <p>
              We make the electronics that run an LED wall, the complete display
              built around them, and the software that manages content across a
              network. Buy the part, the whole display, or the managed signage
              service — same engineering team behind all three.
            </p>
          </div>

          {/* Tier 1 — Components */}
          <div className="tier-head">
            <div className="tier-badge">Tier 1</div>
            <h3>Components — for panel makers &amp; integrators</h3>
            <p>The in-house control electronics and LED modules. The pieces that go inside someone else&apos;s wall.</p>
          </div>
          <div className="products">
            <div className="pcard">
              <div className="tag">RX Series · Inside the panel</div>
              <h3>Receiving cards</h3>
              <p className="sub">A small board that fits inside every LED cabinet and lights up the pixels.</p>
              <ul>
                <li><b>RX-1</b> — everyday signage: shops, offices, lobbies.</li>
                <li><b>RX-Pro</b> — studios and rental events where every frame matters.</li>
                <li><b>RX-COB</b> — premium ultra-fine displays you can sit close to.</li>
              </ul>
              <div className="price">From <b>₹1,500</b> per board for integrators</div>
            </div>

            <div className="pcard">
              <div className="tag">TX Series · Drives the whole wall</div>
              <h3>Sending controllers</h3>
              <p className="sub">Takes your video (laptop, camera, player) and sends it to every panel — in sync.</p>
              <ul>
                <li><b>TX-1</b> — small and mid-size walls.</li>
                <li><b>TX-4K</b> — big 4K walls, tours, broadcast.</li>
              </ul>
              <div className="price">From <b>₹35,000</b> per controller</div>
            </div>

            <div className="pcard">
              <div className="tag">ONE &amp; VX · Big-wall processing</div>
              <h3>Video processors</h3>
              <p className="sub">When the wall is enormous, or you want many videos on it at once.</p>
              <ul>
                <li><b>PROTON ONE</b> — processor and controller in one box.</li>
                <li><b>PROTON VX</b> — separate processor for stadiums, airports, control rooms.</li>
              </ul>
              <div className="price">Roadmap <b>V2</b></div>
            </div>

            <div className="pcard">
              <div className="tag">LED Modules &amp; Cabinets</div>
              <h3>Panels &amp; cabinets</h3>
              <p className="sub">Indoor, outdoor and rental modules — sourced and qualified by us, tuned to work with PROTON control.</p>
              <ul>
                <li>Pitches from <b>P0.9 to P10</b></li>
                <li>SMD, COB and chip-on-board options</li>
                <li>Pre-matched with RX cards for fast install</li>
              </ul>
              <div className="price">Volume pricing for OEMs &amp; integrators</div>
            </div>
          </div>

          {/* Tier 2 — Complete displays */}
          <div className="tier-head" style={{ marginTop: 56 }}>
            <div className="tier-badge tier-2">Tier 2</div>
            <h3>Complete displays — for integrators &amp; end customers</h3>
            <p>Five named display families that bundle modules, control, and software — ready to install.</p>
          </div>
          <div className="products">
            <div className="pcard">
              <div className="tag">PROTON Indoor · P0.9–P2.5</div>
              <h3>Fine-pitch indoor walls</h3>
              <p className="sub">Retail flagships, lobbies, control rooms, broadcast and virtual production (XR) stages.</p>
              <div className="price"><b>Sweet spot:</b> seamless walls people stand close to</div>
            </div>
            <div className="pcard">
              <div className="tag">PROTON Outdoor · P3–P10</div>
              <h3>Outdoor &amp; high-brightness</h3>
              <p className="sub">Billboards, transit hubs, stadium fascias, building facades — built for sun and rain.</p>
              <div className="price"><b>Sweet spot:</b> bright, weather-rated, long life</div>
            </div>
            <div className="pcard">
              <div className="tag">PROTON Rental · P2.6–P4.8</div>
              <h3>Rental &amp; staging</h3>
              <p className="sub">Fast-lock cabinets for concerts, corporate events and touring shows. Cases included.</p>
              <div className="price"><b>Sweet spot:</b> rig fast, tear down faster</div>
            </div>
            <div className="pcard">
              <div className="tag">PROTON All-in-One · Fixed units</div>
              <h3>All-in-one displays</h3>
              <p className="sub">110&quot; meeting walls, LED posters and totems — single-SKU, plug-in-and-play.</p>
              <div className="price"><b>Sweet spot:</b> SMB, QSR, meeting rooms</div>
            </div>
            <div className="pcard">
              <div className="tag">PROTON Creative · Transparent / flexible / COB</div>
              <h3>Creative displays</h3>
              <p className="sub">Transparent walls, curved and flexible modules, COB fine-pitch — for retail and architecture.</p>
              <div className="price"><b>Sweet spot:</b> design-led installs that stand out</div>
            </div>
          </div>
          <p className="tier-note">
            Transparent and fine-pitch are the fastest-growing LED segments today; video walls
            remain the largest fixed-install category.
          </p>

          {/* Tier 3 — Software & Services */}
          <div className="tier-head" style={{ marginTop: 56 }}>
            <div className="tier-badge tier-3">Tier 3</div>
            <h3>Software &amp; services — to keep it all running</h3>
            <p>Our CMS, players, install &amp; AMC, plus a managed monthly plan if you&apos;d rather not own the hardware outright.</p>
          </div>
          <div className="products">
            <div className="pcard">
              <div className="tag">PROTON CMS · Subscription</div>
              <h3>Content management, in-house</h3>
              <p className="sub">Schedule playlists, push to multi-site networks, use templates, monitor uptime, get alerts, see analytics — from one dashboard.</p>
              <div className="price">From <b>₹999 / month</b> per screen</div>
            </div>
            <div className="pcard">
              <div className="tag">Built-in players · Android / SoC</div>
              <h3>No separate media PC</h3>
              <p className="sub">PROTON displays ship with an integrated Android or SoC player — fewer boxes, fewer cables, simpler installs.</p>
              <div className="price">Included with displays</div>
            </div>
            <div className="pcard">
              <div className="tag">Install · Calibration · AMC</div>
              <h3>People you can call</h3>
              <p className="sub">Site survey, install, on-site color calibration, and annual maintenance contracts — across India.</p>
              <div className="price">Per-site quote · multi-year AMC available</div>
            </div>
            <div className="pcard">
              <div className="tag">Signage-as-a-Service</div>
              <h3>Monthly plan — hardware + CMS + AMC</h3>
              <p className="sub">Bundle the display, control, software and service into one monthly fee. Financing-friendly — a real adoption driver in India.</p>
              <div className="price">Pricing on request</div>
            </div>
          </div>

          <div className="products-more">
            <a className="btn btn-ghost" href="/products">See each product in detail →</a>
            <a className="btn btn-ghost" href="/solutions">Pick a packaged solution →</a>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section id="technology">
        <div className="container">
          <div className="section-head">
            <div className="kicker">Why people pick us</div>
            <h2>The things that actually matter.</h2>
            <p>Not specs for the sake of specs — the three things customers feel every day.</p>
          </div>
          <div className="features">
            <div className="feature">
              <div className="ic">◎</div>
              <h4>Even color across the wall</h4>
              <p>Every panel is matched so the wall looks like one screen, not a patchwork of slightly different shades.</p>
            </div>
            <div className="feature">
              <div className="ic">⚡</div>
              <h4>Smooth video, no lag</h4>
              <p>Built for fast-moving content — sports, broadcast, live events. No judder, no flicker on camera.</p>
            </div>
            <div className="feature">
              <div className="ic">🛠</div>
              <h4>People you can actually call</h4>
              <p>Engineers in India. Spares in India. Replacements in days, not months. The pain of imported gear — solved.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MARKET */}
      <section id="market">
        <div className="container">
          <div className="section-head">
            <div className="kicker">The opportunity</div>
            <h2>A ~₹7,500 Cr Indian signage market, growing double digits.</h2>
            <p>
              India&apos;s digital signage market is roughly ₹7,500 Cr (2024)
              and compounding at 10–14% a year. LED display hardware alone is
              about ₹6,800 Cr of it. Most of that is still imported — and India
              is now pushing hard on local electronics. That&apos;s the window
              PROTON is built for.
            </p>
          </div>
          <div className="market">
            <div className="market-card">
              <h4 className="card-h">How big is the market?</h4>
              <div className="funnel">
                <div className="frow"><span className="l">TAM — complete LED signage</span><span className="v">₹7,000–8,500 Cr</span></div>
                <div className="frow"><span className="l">SAM — segments we serve</span><span className="v">₹3,200–4,500 Cr</span></div>
                <div className="frow"><span className="l">Target by Year 5 (most likely)</span><span className="v">₹80–110 Cr</span></div>
              </div>
              <p className="card-note">
                This is ~8–10× the control-only opportunity — bigger absolute
                revenue at a lower % share because it&apos;s a larger, more
                competitive market. Planning estimates, not a forecast.
              </p>
            </div>
            <div className="market-card">
              <h4 className="card-h">Where we could be in 5 years</h4>
              <div className="scenario s-cons"><span>Cautious</span><span className="pct">~1.5% of SAM · ₹50–65 Cr</span></div>
              <div className="scenario s-base"><span>Most likely</span><span className="pct">~2.5% of SAM · ₹80–110 Cr</span></div>
              <div className="scenario s-agg"><span>Ambitious</span><span className="pct">~3.5–4% of SAM · ₹130–180 Cr</span></div>
              <p className="card-note">
                Even the middle scenario would make PROTON a top-five Indian
                LED signage player.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why">
        <div className="container">
          <div className="section-head">
            <div className="kicker">Why PROTON</div>
            <h2>The only Indian LED signage solution with control + CMS built in-house.</h2>
          </div>
          <div className="features">
            <div className="feature"><div className="ic">🧩</div><h4>One vendor, one stack</h4><p>The control system and the CMS are ours, end-to-end. Tighter integration, fewer fingers to point, one team accountable when something needs to change.</p></div>
            <div className="feature"><div className="ic">📦</div><h4>In stock, in rupees</h4><p>Local stock. Rupee prices. AMC across India. No customs delays, no currency surprises, no waiting months for spares.</p></div>
            <div className="feature"><div className="ic">💳</div><h4>Buy it or rent it</h4><p>Take the hardware outright, or take the whole thing as a monthly Signage-as-a-Service plan — display, control, CMS and AMC bundled.</p></div>
            <div className="feature"><div className="ic">🤝</div><h4>Still good to panel makers</h4><p>Tier-1 components are still sold to panel manufacturers and integrators. Complete displays don&apos;t mean we stop serving the people who make them.</p></div>
            <div className="feature"><div className="ic">🇮🇳</div><h4>Right time, right place</h4><p>India is actively backing local electronics (ECMS, DLI). The market wants a homegrown option that can stand next to the imports.</p></div>
            <div className="feature"><div className="ic">🛠</div><h4>People you can call</h4><p>Engineers, calibrators and field techs across the country — same team that designed the product.</p></div>
          </div>
        </div>
      </section>

      {/* HOW WE GROW */}
      <section id="how-we-grow" className="how-strip">
        <div className="container">
          <div className="how-inner">
            <div className="how-step"><span className="how-num">1</span><div><h4>Start with what we own</h4><p>In-house control electronics + CMS. The differentiated bit.</p></div></div>
            <div className="how-step"><span className="how-num">2</span><div><h4>Deliver complete solutions</h4><p>Bundle in sourced LED modules and ship full displays, installed.</p></div></div>
            <div className="how-step"><span className="how-num">3</span><div><h4>Manufacture as volume justifies it</h4><p>Move module assembly in-house as India&apos;s ECMS / DLI incentives align with our run-rate.</p></div></div>
          </div>
          <p className="how-note">Asset-light to start, manufacturing-led as we scale.</p>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="cta">
        <div className="container">
          <div className="cta-box">
            <h2>Let&apos;s spec your next signage rollout.</h2>
            <p>Retail chain, integrator, transport authority, panel maker, or investor — tell us what you&apos;re building and we&apos;ll come back with the right tier.</p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="foot-inner">
            <a className="brand" href="#top"><Mark />PROTON</a>
            <div className="foot-links">
              <a href="/products">Products</a>
              <a href="/solutions">Solutions</a>
              <a href="/#technology">Why us</a>
              <a href="/#market">Market</a>
              <a href="/resources">Resources</a>
              <a href="/#contact">Contact</a>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
            </div>
            <div className="foot-copy">© {new Date().getFullYear()} PROTON · Made in India</div>
          </div>
          <p className="disclaimer">
            PROTON is a proposed brand shown for illustration. Product details, prices, and market figures are
            planning estimates — not a quote, datasheet, or guarantee. &ldquo;Proton&rdquo; may be a registered trademark of other
            companies in unrelated classes; verify trademark availability before commercial use.
          </p>
        </div>
      </footer>
    </>
  );
}
