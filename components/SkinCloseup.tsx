type Variant = "before" | "after";

type Props = {
  variant: Variant;
  tone: "warm" | "deep" | "fair" | "medium";
  seed?: number;
  className?: string;
};

const palettes = {
  fair: { base: "#E8C6A4", highlight: "#F4DBBE", shadow: "#A7764E" },
  warm: { base: "#C79A78", highlight: "#E3B892", shadow: "#7F4C2C" },
  medium: { base: "#A27550", highlight: "#C59272", shadow: "#5C3719" },
  deep: { base: "#6E4A2E", highlight: "#8E6945", shadow: "#3B2110" },
};

function rand(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export default function SkinCloseup({
  variant,
  tone,
  seed = 7,
  className,
}: Props) {
  const p = palettes[tone];
  const isBefore = variant === "before";
  const r = rand(seed);

  // Pre-compute blemish positions so before/after map to same spots visually.
  const blemishes = Array.from({ length: 12 }).map(() => ({
    cx: 100 + r() * 400,
    cy: 100 + r() * 500,
    rr: 3 + r() * 6,
  }));

  const id = `${tone}-${variant}-${seed}`;

  return (
    <svg
      viewBox="0 0 600 720"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden
    >
      <defs>
        <radialGradient id={`skin-${id}`} cx="50%" cy="45%" r="70%">
          <stop offset="0%" stopColor={p.highlight} />
          <stop offset="60%" stopColor={p.base} />
          <stop offset="100%" stopColor={p.shadow} />
        </radialGradient>
        <filter id={`tex-${id}`}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency={isBefore ? "0.85" : "0.55"}
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix values="0 0 0 0 0.2  0 0 0 0 0.1  0 0 0 0 0.08  0 0 0 0.25 0" />
          <feComposite in2="SourceGraphic" operator="in" />
        </filter>
      </defs>

      <rect width="600" height="720" fill={`url(#skin-${id})`} />

      {/* Light */}
      <ellipse
        cx="220"
        cy="180"
        rx="260"
        ry="140"
        fill="#FFF0D6"
        opacity={isBefore ? 0.18 : 0.3}
      />

      {/* Texture noise */}
      <g filter={`url(#tex-${id})`} opacity={isBefore ? 0.7 : 0.25}>
        <rect width="600" height="720" fill={p.base} />
      </g>

      {/* Pores / freckles (always subtle) */}
      <g opacity="0.25">
        {blemishes.map((b, i) => (
          <circle
            key={`pore-${i}`}
            cx={b.cx}
            cy={b.cy}
            r={1.5}
            fill={p.shadow}
          />
        ))}
      </g>

      {/* Before: pronounced blemishes, redness */}
      {isBefore && (
        <>
          <g>
            {blemishes.map((b, i) => (
              <g key={`ac-${i}`}>
                <circle
                  cx={b.cx}
                  cy={b.cy}
                  r={b.rr + 8}
                  fill="#A6452E"
                  opacity="0.18"
                />
                <circle cx={b.cx} cy={b.cy} r={b.rr} fill="#8E3220" />
                <circle
                  cx={b.cx - 1}
                  cy={b.cy - 1}
                  r={b.rr * 0.4}
                  fill="#C26245"
                />
              </g>
            ))}
          </g>
          {/* Redness patches */}
          <ellipse cx="180" cy="360" rx="120" ry="80" fill="#AA4432" opacity="0.18" />
          <ellipse cx="430" cy="420" rx="130" ry="90" fill="#AA4432" opacity="0.15" />
        </>
      )}

      {/* After: luminous highlight, even tone */}
      {!isBefore && (
        <>
          <ellipse cx="260" cy="240" rx="180" ry="100" fill="#FFF1D4" opacity="0.25" />
          <ellipse cx="420" cy="460" rx="90" ry="60" fill="#FFF1D4" opacity="0.18" />
        </>
      )}
    </svg>
  );
}
