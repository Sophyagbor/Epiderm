type Variant = "acne" | "pigmentation" | "barrier" | "sun";

// Abstract, tactile skincare "product / ritual" art per system.
export default function SystemCardArt({ variant }: { variant: Variant }) {
  const palettes: Record<
    Variant,
    { bg: [string, string]; accent: string; bottle: string; cap: string }
  > = {
    acne: {
      bg: ["#EADFCE", "#C9A886"],
      accent: "#7C5D3E",
      bottle: "#F7EFE3",
      cap: "#2B231A",
    },
    pigmentation: {
      bg: ["#F0D9C0", "#A87659"],
      accent: "#6E3E25",
      bottle: "#FFF4E4",
      cap: "#3E2516",
    },
    barrier: {
      bg: ["#F5EEE4", "#D6BB9A"],
      accent: "#876E4F",
      bottle: "#FBF7F2",
      cap: "#2B231A",
    },
    sun: {
      bg: ["#F4DDB6", "#B98347"],
      accent: "#7A4A1D",
      bottle: "#FFEBC8",
      cap: "#2B1A0B",
    },
  };

  const p = palettes[variant];

  return (
    <svg
      viewBox="0 0 600 720"
      preserveAspectRatio="xMidYMid slice"
      className="w-full h-full"
      aria-hidden
    >
      <defs>
        <linearGradient id={`bg-${variant}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={p.bg[0]} />
          <stop offset="100%" stopColor={p.bg[1]} />
        </linearGradient>
        <radialGradient id={`light-${variant}`} cx="30%" cy="25%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <filter id={`soft-${variant}`}>
          <feGaussianBlur stdDeviation="1.2" />
        </filter>
      </defs>

      <rect width="600" height="720" fill={`url(#bg-${variant})`} />
      <rect width="600" height="720" fill={`url(#light-${variant})`} />

      {/* Stone plinth */}
      <ellipse cx="300" cy="600" rx="210" ry="30" fill={p.accent} opacity="0.25" />
      <ellipse cx="300" cy="590" rx="190" ry="22" fill={p.accent} opacity="0.35" />

      {/* Bottle shadow */}
      <ellipse cx="300" cy="600" rx="100" ry="12" fill="#000" opacity="0.22" />

      {/* Bottle body */}
      <g filter={`url(#soft-${variant})`}>
        <rect x="210" y="240" width="180" height="330" rx="18" fill={p.bottle} />
      </g>
      <rect
        x="210"
        y="240"
        width="180"
        height="330"
        rx="18"
        fill="none"
        stroke={p.accent}
        strokeOpacity="0.25"
      />
      {/* Highlight */}
      <rect x="228" y="260" width="10" height="290" rx="5" fill="#FFFFFF" opacity="0.5" />
      {/* Shadow edge */}
      <rect x="370" y="260" width="6" height="290" rx="3" fill={p.accent} opacity="0.25" />

      {/* Label */}
      <rect x="232" y="360" width="136" height="120" rx="4" fill={p.accent} opacity="0.08" />
      <rect x="232" y="360" width="136" height="120" rx="4" fill="none" stroke={p.accent} strokeOpacity="0.35" />
      <text
        x="300"
        y="400"
        textAnchor="middle"
        fontFamily="serif"
        fontSize="22"
        fontStyle="italic"
        fill={p.accent}
      >
        Epiderm
      </text>
      <line x1="252" y1="418" x2="348" y2="418" stroke={p.accent} strokeOpacity="0.5" />
      <text
        x="300"
        y="448"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="9"
        letterSpacing="3"
        fill={p.accent}
      >
        {variant === "acne"
          ? "01 · CLARIFY"
          : variant === "pigmentation"
          ? "02 · EVEN"
          : variant === "barrier"
          ? "03 · REPAIR"
          : "04 · SHIELD"}
      </text>
      <text
        x="300"
        y="466"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="8"
        letterSpacing="2"
        fill={p.accent}
        opacity="0.7"
      >
        SYSTEM · 50ML
      </text>

      {/* Cap */}
      <rect x="240" y="180" width="120" height="70" rx="6" fill={p.cap} />
      <rect x="240" y="180" width="120" height="10" rx="3" fill="#FFFFFF" opacity="0.08" />

      {/* Dropper stem */}
      <rect x="292" y="150" width="16" height="36" fill={p.cap} />
      <circle cx="300" cy="140" r="16" fill={p.cap} />

      {/* Floating ingredient */}
      {variant === "acne" && (
        <g opacity="0.6">
          <circle cx="120" cy="180" r="28" fill="#A68B68" />
          <circle cx="130" cy="170" r="8" fill="#FBF7F2" opacity="0.4" />
        </g>
      )}
      {variant === "pigmentation" && (
        <g opacity="0.7">
          <path d="M 460 160 q 20 -30 48 -10 q 10 30 -18 38 q -30 6 -30 -28 z" fill="#C98A5E" />
        </g>
      )}
      {variant === "barrier" && (
        <g opacity="0.7">
          <circle cx="110" cy="200" r="22" fill="#EADBC8" />
          <circle cx="140" cy="230" r="14" fill="#D6BB9A" />
        </g>
      )}
      {variant === "sun" && (
        <g opacity="0.85">
          <circle cx="470" cy="150" r="40" fill="#F4C27A" />
          <g stroke="#F4C27A" strokeWidth="3" strokeLinecap="round">
            <line x1="470" y1="90" x2="470" y2="70" />
            <line x1="470" y1="230" x2="470" y2="210" />
            <line x1="410" y1="150" x2="390" y2="150" />
            <line x1="550" y1="150" x2="530" y2="150" />
            <line x1="426" y1="106" x2="414" y2="94" />
            <line x1="514" y1="194" x2="526" y2="206" />
            <line x1="514" y1="106" x2="526" y2="94" />
            <line x1="426" y1="194" x2="414" y2="206" />
          </g>
        </g>
      )}
    </svg>
  );
}
