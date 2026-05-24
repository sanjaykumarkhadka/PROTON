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
            <span className="eyebrow">● LED Display Electronics · Made in India</span>
            <h1>
              The control core of <span className="accent">every screen.</span>
            </h1>
            <p className="lead">
              PROTON makes the electronics and software that power LED video walls —
              the parts inside that turn a wall of LED panels into one big, sharp
              picture. Designed in India, sold in rupees, supported by people you
              can actually call.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#products">See our products</a>
              <a className="btn btn-ghost" href="#market">Why now</a>
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
            <div className="stat"><div className="num">~55%</div><div className="lab">Healthy hardware margin</div></div>
            <div className="stat"><div className="num">12–18 mo</div><div className="lab">From idea to shipping</div></div>
            <div className="stat"><div className="num">₹700–1,000 Cr</div><div className="lab">India market we serve</div></div>
            <div className="stat"><div className="num">In stock</div><div className="lab">Local, BIS-ready</div></div>
          </div>
        </div>
      </header>

      {/* PRODUCTS */}
      <section id="products">
        <div className="container">
          <div className="section-head">
            <div className="kicker">What we make</div>
            <h2>Four product families. One job — your wall looks great.</h2>
            <p>
              A small board that goes inside every panel. A box that drives the
              whole wall. A bigger box for huge displays. And software that ties
              it all together.
            </p>
          </div>

          <div className="products">
            <div className="pcard">
              <div className="tag">RX Series · Inside the panel</div>
              <h3>The brain inside every panel</h3>
              <p className="sub">A small board that fits inside every LED cabinet and lights up the pixels.</p>
              <ul>
                <li><b>RX-1</b> — for everyday signage: shops, offices, lobbies.</li>
                <li><b>RX-Pro</b> — for studios and rental events where every frame matters.</li>
                <li><b>RX-COB</b> — for premium, ultra-fine displays you can sit close to.</li>
              </ul>
              <div className="price">From <b>₹1,500</b> per board for integrators</div>
            </div>

            <div className="pcard">
              <div className="tag">TX Series · Drives the whole wall</div>
              <h3>The box that runs the wall</h3>
              <p className="sub">Takes your video (laptop, camera, player) and sends it to every panel — in sync.</p>
              <ul>
                <li><b>TX-1</b> — entry-level box for small and mid-size walls.</li>
                <li><b>TX-4K</b> — pro box for big 4K walls, tours, and broadcast.</li>
              </ul>
              <div className="price">From <b>₹35,000</b> per controller</div>
            </div>

            <div className="pcard">
              <div className="tag">ONE &amp; VX · Big-wall processing</div>
              <h3>For huge or multi-source walls</h3>
              <p className="sub">When the wall is enormous, or you want many videos on it at once.</p>
              <ul>
                <li><b>PROTON ONE</b> — processor and controller in a single box.</li>
                <li><b>PROTON VX</b> — separate processor for stadiums, airports, control rooms.</li>
              </ul>
              <div className="price">Roadmap <b>V2</b></div>
            </div>

            <div className="pcard">
              <div className="tag">Studio &amp; Cloud · Software</div>
              <h3>Set up &amp; monitor the wall</h3>
              <p className="sub">Apps that make the hardware easy to install and easy to keep an eye on.</p>
              <ul>
                <li><b>PROTON Studio</b> — desktop app to lay out and color-match the wall on-site.</li>
                <li><b>PROTON Cloud</b> — web dashboard to watch your walls from anywhere.</li>
              </ul>
              <div className="price">Studio is included · Cloud is a subscription</div>
            </div>
          </div>

          <div className="products-more">
            <a className="btn btn-ghost" href="/products">See each product in detail →</a>
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
            <h2>India buys these from abroad today. We want to change that.</h2>
            <p>
              Almost every LED display electronics part in India is imported.
              Rising tariffs and India's electronics push make a local supplier
              the obvious next move — that's where PROTON fits in.
            </p>
          </div>
          <div className="market">
            <div className="market-card">
              <h4 className="card-h">How big is the market?</h4>
              <div className="funnel">
                <div className="frow"><span className="l">Total India market</span><span className="v">₹700–1,000 Cr</span></div>
                <div className="frow"><span className="l">Segments we can sell to</span><span className="v">₹450–650 Cr</span></div>
                <div className="frow"><span className="l">What we can realistically win by Yr 3</span><span className="v">₹35–45 Cr</span></div>
              </div>
              <p className="card-note">
                Electronics are about 8–15% of an LED display's cost. Figures are planning estimates, not a forecast.
              </p>
            </div>
            <div className="market-card">
              <h4 className="card-h">Where we could be in 5 years</h4>
              <div className="scenario s-cons"><span>Cautious</span><span className="pct">~3% · ₹15–20 Cr</span></div>
              <div className="scenario s-base"><span>Most likely</span><span className="pct">~7% · ₹35–45 Cr</span></div>
              <div className="scenario s-agg"><span>Ambitious</span><span className="pct">~12–15% · ₹70–95 Cr</span></div>
              <p className="card-note">
                Even reaching the middle of that range would make PROTON the clear
                Indian leader in this space.
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
            <h2>Match the imports on quality. Beat them on everything local.</h2>
          </div>
          <div className="features">
            <div className="feature"><div className="ic">📦</div><h4>In stock, in rupees</h4><p>Local stock. Rupee prices. No customs delays, no currency surprises, no waiting months for spares.</p></div>
            <div className="feature"><div className="ic">🤝</div><h4>Built for Indian makers</h4><p>We work with Indian panel manufacturers and integrators, tailoring our boards to fit their cabinets and workflow.</p></div>
            <div className="feature"><div className="ic">🇮🇳</div><h4>Right time, right place</h4><p>India is actively supporting local electronics (ECMS, DLI). The market wants a homegrown option.</p></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="cta">
        <div className="container">
          <div className="cta-box">
            <h2>Let's put PROTON inside your next wall.</h2>
            <p>Panel maker, integrator, or investor — tell us a little about what you&apos;re building and we&apos;ll get back to you.</p>
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
            planning estimates — not a quote, datasheet, or guarantee. "Proton" may be a registered trademark of other
            companies in unrelated classes; verify trademark availability before commercial use.
          </p>
        </div>
      </footer>
    </>
  );
}
