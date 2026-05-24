const STROKE = "rgba(120,170,255,0.55)";
const STROKE_DIM = "rgba(120,170,255,0.30)";
const FILL_PCB = "rgba(15,40,80,0.65)";
const FILL_CHIP = "rgba(46,123,255,0.30)";
const ACCENT = "#21c8e8";
const ACCENT_2 = "#4f9dff";
const SAFFRON = "#ff9d3d";
const GREEN = "#2bd07a";

function ArtFrame({ children, label }) {
  return (
    <div className="product-art" aria-hidden="true">
      <svg viewBox="0 0 320 200" width="100%" height="100%" role="img" aria-label={label}>
        <defs>
          <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(46,123,255,0.10)" />
            <stop offset="100%" stopColor="rgba(33,200,232,0.04)" />
          </linearGradient>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(46,123,255,0.45)" />
            <stop offset="100%" stopColor="rgba(46,123,255,0)" />
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="320" height="200" rx="14" fill="url(#bgGrad)" stroke={STROKE_DIM} />
        {children}
      </svg>
    </div>
  );
}

export function RxArt() {
  return (
    <ArtFrame label="Receiving card illustration">
      <circle cx="160" cy="100" r="80" fill="url(#glow)" />
      {/* PCB body */}
      <rect x="60" y="58" width="200" height="84" rx="6" fill={FILL_PCB} stroke={STROKE} />
      {/* Edge connector */}
      <rect x="62" y="134" width="80" height="6" fill={ACCENT_2} opacity="0.85" />
      {[0,1,2,3,4,5,6,7].map(i => (
        <rect key={i} x={66 + i*10} y={134} width="6" height="6" fill="#0a1628" />
      ))}
      {/* Main chip */}
      <rect x="130" y="76" width="60" height="40" rx="3" fill="#0a1628" stroke={STROKE} />
      <text x="160" y="100" textAnchor="middle" fill={ACCENT} fontSize="9" fontFamily="monospace" letterSpacing="1">PROTON RX</text>
      {/* Secondary chips */}
      <rect x="74" y="68" width="44" height="14" rx="2" fill={FILL_CHIP} stroke={STROKE_DIM} />
      <rect x="200" y="68" width="44" height="14" rx="2" fill={FILL_CHIP} stroke={STROKE_DIM} />
      <rect x="200" y="110" width="44" height="18" rx="2" fill={FILL_CHIP} stroke={STROKE_DIM} />
      {/* RJ45 jacks */}
      <rect x="74" y="106" width="20" height="22" rx="2" fill="#0a1628" stroke={STROKE} />
      <rect x="98" y="106" width="20" height="22" rx="2" fill="#0a1628" stroke={STROKE} />
      {/* Status LEDs */}
      <circle cx="252" cy="80" r="2.5" fill={GREEN}><animate attributeName="opacity" values="1;0.3;1" dur="1.6s" repeatCount="indefinite" /></circle>
      <circle cx="252" cy="90" r="2.5" fill={ACCENT_2} />
      {/* Traces */}
      <path d="M 130 96 Q 110 96 96 96" stroke={ACCENT_2} strokeWidth="0.6" fill="none" opacity="0.6" />
      <path d="M 190 96 Q 210 96 224 96" stroke={ACCENT_2} strokeWidth="0.6" fill="none" opacity="0.6" />
    </ArtFrame>
  );
}

export function TxArt() {
  return (
    <ArtFrame label="Sending controller illustration">
      <circle cx="160" cy="100" r="80" fill="url(#glow)" />
      {/* Rack box */}
      <rect x="40" y="62" width="240" height="76" rx="4" fill={FILL_PCB} stroke={STROKE} />
      {/* Front bezel detail */}
      <rect x="40" y="62" width="240" height="14" rx="4" fill="rgba(10,22,40,0.7)" stroke="none" />
      <text x="56" y="73" fill={ACCENT} fontSize="8" fontFamily="monospace" letterSpacing="2">PROTON TX</text>
      {/* Display screen */}
      <rect x="56" y="86" width="80" height="38" rx="3" fill="#06101f" stroke={STROKE_DIM} />
      <text x="64" y="100" fill={ACCENT} fontSize="7" fontFamily="monospace">4K · 60Hz</text>
      <text x="64" y="112" fill="#9fb3d1" fontSize="6" fontFamily="monospace">WALL OK</text>
      <text x="64" y="120" fill={GREEN} fontSize="6" fontFamily="monospace">● LIVE</text>
      {/* Knob */}
      <circle cx="158" cy="105" r="11" fill="#0a1628" stroke={STROKE} />
      <circle cx="158" cy="105" r="3" fill={ACCENT_2} />
      {/* Output ports */}
      {[0,1,2,3].map(i => (
        <rect key={i} x={184 + i*22} y="92" width="16" height="14" rx="2" fill="#0a1628" stroke={STROKE} />
      ))}
      {/* Port LEDs */}
      {[0,1,2,3].map(i => (
        <circle key={i} cx={192 + i*22} cy={116} r="1.8" fill={i===0 ? GREEN : ACCENT_2} />
      ))}
      {/* Rack ears */}
      <rect x="30" y="68" width="8" height="64" rx="2" fill="rgba(10,22,40,0.7)" stroke={STROKE_DIM} />
      <rect x="282" y="68" width="8" height="64" rx="2" fill="rgba(10,22,40,0.7)" stroke={STROKE_DIM} />
    </ArtFrame>
  );
}

export function OneArt() {
  return (
    <ArtFrame label="Processor illustration">
      <circle cx="160" cy="100" r="80" fill="url(#glow)" />
      {/* Big 1U box */}
      <rect x="32" y="56" width="256" height="88" rx="5" fill={FILL_PCB} stroke={STROKE} />
      {/* Top edge */}
      <rect x="32" y="56" width="256" height="16" rx="5" fill="rgba(10,22,40,0.75)" />
      <text x="48" y="68" fill={ACCENT} fontSize="8" fontFamily="monospace" letterSpacing="2">PROTON ONE / VX</text>
      <circle cx="270" cy="64" r="2" fill={GREEN} />
      {/* Big screen */}
      <rect x="48" y="82" width="112" height="50" rx="3" fill="#06101f" stroke={STROKE_DIM} />
      {/* Mini canvas inside screen */}
      {Array.from({length: 8}).map((_, i) => (
        <rect key={i} x={54 + (i%4)*26} y={88 + Math.floor(i/4)*20} width="22" height="16" rx="1"
          fill={i===2 ? ACCENT_2 : (i===5 ? SAFFRON : "rgba(46,123,255,0.25)")} opacity={i===2 || i===5 ? 0.8 : 0.5} />
      ))}
      {/* Right side controls */}
      <rect x="176" y="82" width="50" height="50" rx="3" fill="#06101f" stroke={STROKE_DIM} />
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x="182" y={88 + i*10} width="14" height="6" rx="1" fill={ACCENT_2} opacity={0.3 + i*0.2} />
          <rect x="200" y={88 + i*10} width="20" height="6" rx="1" fill="rgba(120,170,255,0.18)" />
        </g>
      ))}
      {/* IO bank */}
      {[0,1,2,3,4].map(i => (
        <rect key={i} x={236 + i*9} y="86" width="6" height="42" rx="1" fill="#0a1628" stroke={STROKE_DIM} />
      ))}
    </ArtFrame>
  );
}

export function SoftwareArt() {
  return (
    <ArtFrame label="Studio software illustration">
      <circle cx="160" cy="100" r="80" fill="url(#glow)" />
      {/* App window */}
      <rect x="40" y="44" width="240" height="120" rx="8" fill={FILL_PCB} stroke={STROKE} />
      {/* Title bar */}
      <rect x="40" y="44" width="240" height="18" rx="8" fill="rgba(10,22,40,0.85)" />
      <rect x="40" y="56" width="240" height="6" fill="rgba(10,22,40,0.85)" />
      <circle cx="52" cy="53" r="3" fill="#ff6b6b" />
      <circle cx="62" cy="53" r="3" fill={SAFFRON} />
      <circle cx="72" cy="53" r="3" fill={GREEN} />
      <text x="160" y="56" textAnchor="middle" fill={ACCENT} fontSize="8" fontFamily="monospace" letterSpacing="2">PROTON STUDIO</text>
      {/* Sidebar */}
      <rect x="40" y="62" width="56" height="102" rx="0" fill="rgba(10,22,40,0.5)" />
      {["Wall", "Layers", "Color", "Output"].map((t, i) => (
        <g key={t}>
          <rect x="48" y={74 + i*18} width="42" height="12" rx="2" fill={i===0 ? ACCENT_2 : "rgba(120,170,255,0.12)"} opacity={i===0 ? 0.6 : 1} />
          <text x="69" y={82 + i*18} textAnchor="middle" fill={i===0 ? "#fff" : "#9fb3d1"} fontSize="6">{t}</text>
        </g>
      ))}
      {/* Wall preview grid */}
      <g transform="translate(108,72)">
        {Array.from({length: 24}).map((_, i) => {
          const x = (i % 8) * 19;
          const y = Math.floor(i / 8) * 19;
          const isHot = i === 9 || i === 10;
          const isWarm = i === 17 || i === 18;
          return (
            <rect key={i} x={x} y={y} width="17" height="17" rx="1.5"
              fill={isHot ? ACCENT_2 : isWarm ? SAFFRON : "rgba(46,123,255,0.20)"}
              opacity={isHot ? 0.9 : isWarm ? 0.7 : 0.5}
              stroke={STROKE_DIM} strokeWidth="0.5" />
          );
        })}
      </g>
      {/* Status row */}
      <rect x="108" y="138" width="160" height="20" rx="3" fill="rgba(10,22,40,0.55)" />
      <circle cx="118" cy="148" r="3" fill={GREEN}><animate attributeName="opacity" values="1;0.4;1" dur="1.8s" repeatCount="indefinite" /></circle>
      <text x="128" y="151" fill="#9fb3d1" fontSize="7" fontFamily="monospace">3,840 × 2,160 · 60 Hz · sync OK</text>
    </ArtFrame>
  );
}
