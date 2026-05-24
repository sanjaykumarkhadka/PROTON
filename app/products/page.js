import Mark from "../_components/Mark";
import Nav from "../_components/Nav";
import { RxArt, TxArt, OneArt, SoftwareArt } from "../_components/ProductArt";

export const metadata = {
  title: "Products — PROTON Complete LED Signage Solutions",
  description:
    "Components, complete LED displays, and signage software & services — PROTON's three-tier product line for India, with the control system and CMS built in-house.",
  openGraph: {
    title: "Products — PROTON Complete LED Signage Solutions",
    description:
      "Components, complete displays, and signage software & services — built in India, control + CMS in-house.",
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
      <header id="top" className="page-head">
        <div className="container">
          <div className="crumb">
            <a href="/">Home</a> <span>/</span> <span>Products</span>
          </div>
          <span className="eyebrow">● Complete LED signage solutions</span>
          <h1>
            Three tiers. <span className="accent">One in-house stack.</span>
          </h1>
          <p className="lead">
            PROTON is built in three tiers: the <b>components</b> that go
            inside every wall, the <b>complete displays</b> built around them,
            and the <b>software &amp; services</b> that keep the whole thing
            running. The control system and CMS are ours — that&apos;s the
            differentiator. The displays are sourced and qualified to work
            with that control. Pick the tier that fits where you sit in the
            chain.
          </p>
          <div className="tier-jump">
            <a href="#components" className="chip">↓ Tier 1 · Components</a>
            <a href="#displays" className="chip">↓ Tier 2 · Complete displays</a>
            <a href="#software" className="chip">↓ Tier 3 · Software &amp; services</a>
          </div>
        </div>
      </header>

      {/* TIER 1 INTRO */}
      <section id="components" className="product-section">
        <div className="container">
          <div className="tier-page-head">
            <div className="tier-badge">Tier 1 · Components</div>
            <h2>For panel makers &amp; integrators</h2>
            <p>The in-house control electronics and qualified LED modules — sold to people building their own walls.</p>
          </div>
        </div>
      </section>

      {/* RX SERIES */}
      <section id="rx" className="product-section">
        <div className="container">
          <div className="product-hero with-art">
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
            <RxArt />
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
          <div className="product-hero with-art">
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
            <TxArt />
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
          <div className="product-hero with-art">
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
            <OneArt />
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

      {/* LED MODULES (Tier 1 finisher) */}
      <section id="modules" className="product-section alt">
        <div className="container">
          <div className="product-hero">
            <div>
              <div className="kicker">LED Modules &amp; Cabinets</div>
              <h2>Panels &amp; cabinets — sourced, qualified, and tuned to PROTON control</h2>
              <p>
                For partners who want to assemble their own walls, we supply
                LED modules and cabinets pre-matched to PROTON receiving
                cards. SMD, COB and chip-on-board options across pitches from
                P0.9 to P10, indoor and outdoor.
              </p>
              <div className="tagrow">
                <span className="chip">P0.9 – P10</span>
                <span className="chip">SMD · COB · MIP</span>
                <span className="chip">Pre-matched with RX cards</span>
                <span className="chip">Volume pricing for OEMs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIER 2 INTRO */}
      <section id="displays" className="product-section">
        <div className="container">
          <div className="tier-page-head">
            <div className="tier-badge tier-2">Tier 2 · Complete Displays</div>
            <h2>For integrators &amp; end customers</h2>
            <p>Five named display families. Each one bundles the LED, the PROTON control, the player and the CMS — ready to install.</p>
          </div>
        </div>
      </section>

      {/* INDOOR */}
      <section id="indoor" className="product-section alt">
        <div className="container">
          <div className="product-hero">
            <div>
              <div className="kicker">PROTON Indoor</div>
              <h2>Fine-pitch indoor walls · P0.9 – P2.5</h2>
              <p>
                Seamless walls people stand close to — retail flagships,
                lobbies, control rooms, broadcast studios and virtual
                production (XR) stages. Fine-pitch is one of the fastest
                growing LED segments in India.
              </p>
              <div className="tagrow">
                <span className="chip">P0.9 / P1.2 / P1.5 / P1.8 / P2.5</span>
                <span className="chip">800–1,200 nits</span>
                <span className="chip">3,840 Hz refresh</span>
                <span className="chip">Front service</span>
              </div>
            </div>
          </div>
          <div className="sku-grid two">
            <article className="sku">
              <header><span className="sku-name">Indoor · Standard</span><span className="sku-price">From ₹35,000 / sqft</span></header>
              <p className="sku-tag">Retail, lobbies, meeting walls</p>
              <SpecTable
                rows={[
                  ["Pitches", "P1.5 / P1.8 / P2.5"],
                  ["Brightness", "Up to 800 nits"],
                  ["Cabinet", "600 × 337.5 mm aluminium"],
                  ["Service", "Front and rear"],
                  ["Bundled", "RX cards · TX-1 · Studio · CMS"],
                ]}
              />
            </article>
            <article className="sku">
              <header><span className="sku-name">Indoor · Studio / XR</span><span className="sku-price">From ₹85,000 / sqft</span></header>
              <p className="sku-tag">Broadcast and virtual production</p>
              <SpecTable
                rows={[
                  ["Pitches", "P0.9 / P1.2"],
                  ["Brightness", "Up to 1,200 nits"],
                  ["Refresh", "3,840 Hz / 240 fps"],
                  ["Camera-friendly", "Genlock + low-latency"],
                  ["Bundled", "RX-Pro · TX-4K · Studio · CMS"],
                ]}
              />
            </article>
          </div>
        </div>
      </section>

      {/* OUTDOOR */}
      <section id="outdoor" className="product-section">
        <div className="container">
          <div className="product-hero">
            <div>
              <div className="kicker">PROTON Outdoor</div>
              <h2>Outdoor &amp; high-brightness · P3 – P10</h2>
              <p>
                Built for sun, rain and the long haul. Billboards, transit
                hubs, stadium fascias and building facades. IP-rated cabinets,
                solar-readable brightness, and a service team that travels.
              </p>
              <div className="tagrow">
                <span className="chip">P3 / P4 / P5 / P6 / P8 / P10</span>
                <span className="chip">5,000–8,500 nits</span>
                <span className="chip">IP65 front / IP54 rear</span>
                <span className="chip">100,000-hour LED life</span>
              </div>
            </div>
          </div>
          <div className="sku-grid two">
            <article className="sku">
              <header><span className="sku-name">Outdoor · Fixed</span><span className="sku-price">From ₹18,000 / sqft</span></header>
              <p className="sku-tag">Billboards and facades</p>
              <SpecTable
                rows={[
                  ["Pitches", "P4 / P5 / P6 / P8 / P10"],
                  ["Brightness", "Up to 8,500 nits"],
                  ["Cabinet", "960 × 960 mm steel, IP65"],
                  ["Ambient sensor", "Auto-dim by light + time"],
                  ["Bundled", "RX cards · TX-1 · Cloud monitoring"],
                ]}
              />
            </article>
            <article className="sku">
              <header><span className="sku-name">Outdoor · Stadium</span><span className="sku-price">From ₹28,000 / sqft</span></header>
              <p className="sku-tag">Sports and broadcast-grade outdoor</p>
              <SpecTable
                rows={[
                  ["Pitches", "P3 / P4"],
                  ["Brightness", "Up to 7,500 nits"],
                  ["Refresh", "3,840 Hz / 240 fps"],
                  ["Camera-friendly", "Yes — sync with OB van"],
                  ["Bundled", "RX-Pro · TX-4K · Studio · CMS"],
                ]}
              />
            </article>
          </div>
        </div>
      </section>

      {/* RENTAL */}
      <section id="rental" className="product-section alt">
        <div className="container">
          <div className="product-hero">
            <div>
              <div className="kicker">PROTON Rental</div>
              <h2>Rental &amp; staging · P2.6 – P4.8</h2>
              <p>
                Fast-lock cabinets for concerts, corporate events and touring
                shows. Light, curveable, and flight-cased — built to rig fast
                and tear down faster.
              </p>
              <div className="tagrow">
                <span className="chip">P2.6 / P2.9 / P3.9 / P4.8</span>
                <span className="chip">Curve ±15°</span>
                <span className="chip">Fast-lock corners</span>
                <span className="chip">Flightcase included</span>
              </div>
            </div>
          </div>
          <div className="sku-grid two">
            <article className="sku">
              <header><span className="sku-name">Rental · Indoor</span><span className="sku-price">From ₹48,000 / panel</span></header>
              <p className="sku-tag">Concerts, conferences, stages</p>
              <SpecTable
                rows={[
                  ["Pitches", "P2.6 / P2.9 / P3.9"],
                  ["Cabinet", "500 × 500 mm die-cast aluminium"],
                  ["Weight", "Under 7 kg per cabinet"],
                  ["Rigging", "Top + side fast-locks, curve ±15°"],
                  ["Bundled", "RX-Pro · TX-4K · flightcase (6 panels)"],
                ]}
              />
            </article>
            <article className="sku">
              <header><span className="sku-name">Rental · Outdoor</span><span className="sku-price">From ₹62,000 / panel</span></header>
              <p className="sku-tag">Festivals, sports, outdoor staging</p>
              <SpecTable
                rows={[
                  ["Pitches", "P3.9 / P4.8"],
                  ["Brightness", "5,500 nits, IP65 front"],
                  ["Cabinet", "500 × 1,000 mm waterproof"],
                  ["Rigging", "Compatible with truss systems"],
                  ["Bundled", "RX-Pro · TX-4K · Studio · CMS"],
                ]}
              />
            </article>
          </div>
        </div>
      </section>

      {/* ALL-IN-ONE */}
      <section id="all-in-one" className="product-section">
        <div className="container">
          <div className="product-hero">
            <div>
              <div className="kicker">PROTON All-in-One</div>
              <h2>Fixed all-in-one displays</h2>
              <p>
                Single-SKU, plug-and-play. The display, the player, the
                control and the CMS all in one unit — for SMBs, QSRs,
                meeting rooms, hotels and retail counters.
              </p>
              <div className="tagrow">
                <span className="chip">110&quot; meeting wall</span>
                <span className="chip">Digital posters</span>
                <span className="chip">LED totems</span>
                <span className="chip">Android player built-in</span>
              </div>
            </div>
          </div>
          <div className="sku-grid">
            <article className="sku">
              <header><span className="sku-name">Wall 110&quot;</span><span className="sku-price">From ₹6,50,000</span></header>
              <p className="sku-tag">Meeting and conference walls</p>
              <SpecTable
                rows={[
                  ["Size", "110 inches / 16:9"],
                  ["Pitch", "P1.5 (FHD) or P1.2 (4K)"],
                  ["Player", "Android 13 SoC built-in"],
                  ["Connections", "HDMI / USB-C / Wi-Fi / LAN"],
                  ["Mount", "Wall mount included"],
                ]}
              />
            </article>
            <article className="sku">
              <header><span className="sku-name">Poster</span><span className="sku-price">From ₹2,25,000</span></header>
              <p className="sku-tag">In-store and lobby signage</p>
              <SpecTable
                rows={[
                  ["Size", "55&quot; / 65&quot; / 75&quot; portrait"],
                  ["Pitch", "P1.8 indoor"],
                  ["Brightness", "Up to 800 nits"],
                  ["Player", "Android 13 SoC built-in"],
                  ["Stand", "Floor-stand or wall option"],
                ]}
              />
            </article>
            <article className="sku">
              <header><span className="sku-name">Totem</span><span className="sku-price">From ₹3,50,000</span></header>
              <p className="sku-tag">Wayfinding and outdoor counters</p>
              <SpecTable
                rows={[
                  ["Form factor", "Free-standing pillar"],
                  ["Pitch", "P2.5 indoor / P4 outdoor"],
                  ["Brightness", "Up to 2,500 nits"],
                  ["Player", "Android 13 SoC built-in"],
                  ["Use", "Malls, airports, transit"],
                ]}
              />
            </article>
          </div>
        </div>
      </section>

      {/* CREATIVE */}
      <section id="creative" className="product-section alt">
        <div className="container">
          <div className="product-hero">
            <div>
              <div className="kicker">PROTON Creative</div>
              <h2>Transparent, flexible &amp; COB displays</h2>
              <p>
                For design-led installs that need to stand out. Transparent
                walls for shop windows, flexible modules for curves and
                columns, and COB ultra-fine pitch for premium retail and
                architecture.
              </p>
              <div className="tagrow">
                <span className="chip">Transparent · 60–85% see-through</span>
                <span className="chip">Flexible / curved</span>
                <span className="chip">COB ultra-fine</span>
                <span className="chip">Custom shapes</span>
              </div>
            </div>
          </div>
          <div className="sku-grid">
            <article className="sku">
              <header><span className="sku-name">Transparent</span><span className="sku-price">From ₹95,000 / sqft</span></header>
              <p className="sku-tag">Shop windows, glass walls</p>
              <SpecTable
                rows={[
                  ["Transparency", "60 – 85%"],
                  ["Pitch", "P3.9 / P7.8"],
                  ["Brightness", "Up to 5,500 nits"],
                  ["Weight", "Under 11 kg / sqm"],
                  ["Mount", "Glass clip or steel frame"],
                ]}
              />
            </article>
            <article className="sku">
              <header><span className="sku-name">Flexible / Curved</span><span className="sku-price">From ₹75,000 / sqft</span></header>
              <p className="sku-tag">Columns, ribbons, curves</p>
              <SpecTable
                rows={[
                  ["Pitch", "P2.5 / P3 / P4"],
                  ["Bend radius", "Down to 300 mm"],
                  ["Format", "Tile, ribbon, custom-cut"],
                  ["Use", "Retail, museums, architecture"],
                  ["Bundled", "RX-Pro · TX-1 / TX-4K"],
                ]}
              />
            </article>
            <article className="sku">
              <header><span className="sku-name">COB Ultra-fine</span><span className="sku-price">From ₹1,10,000 / sqft</span></header>
              <p className="sku-tag">Premium control rooms, home cinema</p>
              <SpecTable
                rows={[
                  ["Pitches", "P0.9 / P1.2 / P1.5"],
                  ["Contrast", "5,000:1 with deep blacks"],
                  ["Surface", "Anti-glare, smudge-resistant"],
                  ["Heat", "Auto-tuning during runtime"],
                  ["Bundled", "RX-COB · TX-4K · Studio · CMS"],
                ]}
              />
            </article>
          </div>
        </div>
      </section>

      {/* TIER 3 INTRO */}
      <section id="software-services" className="product-section">
        <div className="container">
          <div className="tier-page-head">
            <div className="tier-badge tier-3">Tier 3 · Software &amp; Services</div>
            <h2>To keep your signage running</h2>
            <p>The PROTON CMS plus install, calibration and AMC — and an optional monthly Signage-as-a-Service plan that bundles it all.</p>
          </div>
        </div>
      </section>

      {/* SOFTWARE */}
      <section id="software" className="product-section alt">
        <div className="container">
          <div className="product-hero with-art">
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
            <SoftwareArt />
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

          <div className="sku-grid" style={{ marginTop: 20 }}>
            <article className="sku" style={{ gridColumn: "1 / -1" }}>
              <header><span className="sku-name">PROTON CMS</span><span className="sku-price">From ₹999 / month per screen</span></header>
              <p className="sku-tag">Content management for signage networks — built in-house, by us</p>
              <SpecTable
                rows={[
                  ["What it does", "Schedule content, push playlists, manage multi-site networks"],
                  ["Templates", "Drag-and-drop layouts for retail, QSR, transit, corporate"],
                  ["Player support", "PROTON SoC built-in, plus Android / Windows / BrightSign"],
                  ["Multi-site", "Tag screens by city, store, channel — push in one click"],
                  ["Uptime", "Heartbeat per screen, downtime alerts via email / WhatsApp"],
                  ["Analytics", "Plays, completion rate, dwell-time integrations"],
                  ["Hosted in", "Mumbai (India region) · GDPR &amp; DPDP compliant"],
                ]}
              />
              <div className="sku-use">
                <b>Best for:</b> retail chains, QSR brands, transport
                authorities, corporate communications, hotel and hospitality
                groups. Use it standalone or bundled into Signage-as-a-Service.
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="product-section">
        <div className="container">
          <div className="product-hero">
            <div>
              <div className="kicker">Install · Calibration · AMC · SaaS</div>
              <h2>Services — people you can call</h2>
              <p>
                A real install team, real calibrators, and a real AMC. Across
                India. If you&apos;d rather not own the hardware outright,
                take the same stack as a monthly Signage-as-a-Service plan.
              </p>
              <div className="tagrow">
                <span className="chip">Pan-India install</span>
                <span className="chip">On-site calibration</span>
                <span className="chip">Multi-year AMC</span>
                <span className="chip">Signage-as-a-Service</span>
              </div>
            </div>
          </div>
          <div className="sku-grid two">
            <article className="sku">
              <header><span className="sku-name">Install &amp; Calibration</span><span className="sku-price">Per-site quote</span></header>
              <p className="sku-tag">Survey, install, commission</p>
              <SpecTable
                rows={[
                  ["Site survey", "Included for orders over 50 sqft"],
                  ["Install team", "PROTON-trained crews across major metros"],
                  ["Commissioning", "Color match, Studio setup, CMS onboarding"],
                  ["Training", "On-site + recorded for your team"],
                  ["Sign-off", "Acceptance test report with each install"],
                ]}
              />
            </article>
            <article className="sku">
              <header><span className="sku-name">AMC · Annual Maintenance</span><span className="sku-price">From 6% of hardware / year</span></header>
              <p className="sku-tag">Keep it running</p>
              <SpecTable
                rows={[
                  ["Coverage", "Spares, on-site visits, remote monitoring"],
                  ["Response", "Next-business-day metros · 72h elsewhere"],
                  ["Spares", "Stocked locally — modules, cards, PSUs"],
                  ["Recalibration", "Yearly color tune included"],
                  ["Term", "1, 3 or 5-year contracts"],
                ]}
              />
            </article>
          </div>
          <div className="sku-grid" style={{ marginTop: 20 }}>
            <article className="sku" style={{ gridColumn: "1 / -1" }}>
              <header><span className="sku-name">Signage-as-a-Service</span><span className="sku-price">Monthly plan · pricing on request</span></header>
              <p className="sku-tag">Hardware + CMS + AMC, bundled into one monthly fee</p>
              <SpecTable
                rows={[
                  ["What&apos;s included", "Display, PROTON control, CMS, install, AMC, refresh"],
                  ["Term", "36 or 60 months · refresh at end of term"],
                  ["Cash flow", "OpEx instead of CapEx — easier to approve in India"],
                  ["Scale", "Add screens any time — same monthly contract"],
                  ["Exit", "Buy-out option at residual value"],
                ]}
              />
              <div className="sku-use">
                <b>Why we offer this:</b> financing is one of the biggest
                adoption drivers in Indian digital signage. Managed signage is
                widely seen as the future of the category.
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="cta">
        <div className="container">
          <div className="cta-box">
            <h2>Spec your install with us.</h2>
            <p>Tell us about the site — venue, pitch, size, content. We&apos;ll come back with the right tier, a sample where it makes sense, and a quote.</p>
            <div className="hero-cta" style={{ justifyContent: "center" }}>
              <a className="btn btn-primary" href="/#contact">Talk to us</a>
              <a className="btn btn-ghost" href="/solutions">See packaged solutions</a>
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
