export default function Mark({ size = 28 }) {
  return (
    <svg
      className="mark"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      aria-hidden="true"
    >
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
