type PortraitProps = {
  variant: "before" | "after";
  className?: string;
};

// Stylized editorial portrait. "before" shows visible skin texture / blemishes.
// "after" shows smooth, even-toned skin. Rendered as pure SVG so the site is
// self-contained and the visual stays crisp at every size.
export default function PortraitSVG({ variant, className }: PortraitProps) {
  const isBefore = variant === "before";

  const skinBase = isBefore ? "#C79A78" : "#D9B695";
  const skinHighlight = isBefore ? "#E5BC97" : "#F2D5B8";
  const skinShadow = isBefore ? "#7E4E33" : "#8A5E40";

  return (
    <svg
      viewBox="0 0 1200 1600"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden
    >
      <defs>
        <radialGradient id={`bg-${variant}`} cx="50%" cy="35%" r="75%">
          <stop offset="0%" stopColor={isBefore ? "#4A372A" : "#6E513B"} />
          <stop offset="55%" stopColor={isBefore ? "#2C1F16" : "#3F2C1F"} />
          <stop offset="100%" stopColor="#1A110B" />
        </radialGradient>

        <radialGradient id={`face-${variant}`} cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor={skinHighlight} />
          <stop offset="55%" stopColor={skinBase} />
          <stop offset="100%" stopColor={skinShadow} />
        </radialGradient>

        <radialGradient id={`cheek-${variant}`} cx="50%" cy="50%" r="50%">
          <stop
            offset="0%"
            stopColor={isBefore ? "#B65B46" : "#D9826A"}
            stopOpacity={isBefore ? 0.55 : 0.25}
          />
          <stop offset="100%" stopColor={skinBase} stopOpacity="0" />
        </radialGradient>

        <linearGradient id={`light-${variant}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFE8C9" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </linearGradient>

        <filter id={`grain-${variant}`}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency={isBefore ? "0.9" : "0.65"}
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix
            values={
              isBefore
                ? "0 0 0 0 0.35  0 0 0 0 0.15  0 0 0 0 0.1  0 0 0 0.6 0"
                : "0 0 0 0 0.55  0 0 0 0 0.35  0 0 0 0 0.25  0 0 0 0.2 0"
            }
          />
          <feComposite in2="SourceGraphic" operator="in" />
        </filter>
      </defs>

      {/* Backdrop */}
      <rect width="1200" height="1600" fill={`url(#bg-${variant})`} />

      {/* Soft window light */}
      <rect width="1200" height="1600" fill={`url(#light-${variant})`} />

      {/* Neck / shoulders */}
      <path
        d="M 350 1600 C 380 1350 420 1250 480 1180 L 720 1180 C 780 1250 820 1350 850 1600 Z"
        fill={skinShadow}
        opacity="0.9"
      />

      {/* Hair back */}
      <path
        d="M 250 720 C 250 430 420 260 600 260 C 780 260 950 430 950 720 L 950 1050 C 900 980 870 900 870 780 C 870 640 760 520 600 520 C 440 520 330 640 330 780 C 330 900 300 980 250 1050 Z"
        fill="#1C120A"
      />

      {/* Face oval */}
      <ellipse
        cx="600"
        cy="780"
        rx="270"
        ry="340"
        fill={`url(#face-${variant})`}
      />

      {/* Cheek blush */}
      <ellipse cx="470" cy="860" rx="90" ry="60" fill={`url(#cheek-${variant})`} />
      <ellipse cx="730" cy="860" rx="90" ry="60" fill={`url(#cheek-${variant})`} />

      {/* Brows */}
      <path
        d="M 440 680 Q 490 660 545 678"
        stroke="#1E120A"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 660 678 Q 715 660 765 680"
        stroke="#1E120A"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />

      {/* Eyes */}
      <ellipse cx="495" cy="740" rx="26" ry="11" fill="#1C120A" />
      <ellipse cx="710" cy="740" rx="26" ry="11" fill="#1C120A" />
      <circle cx="500" cy="737" r="4" fill="#F6E4CC" />
      <circle cx="715" cy="737" r="4" fill="#F6E4CC" />

      {/* Nose */}
      <path
        d="M 600 770 Q 585 840 580 900 Q 595 918 620 918 Q 625 900 612 870 Q 610 820 606 770 Z"
        fill={skinShadow}
        opacity="0.18"
      />

      {/* Lips */}
      <path
        d="M 540 980 Q 600 960 660 980 Q 620 1010 600 1010 Q 580 1010 540 980 Z"
        fill={isBefore ? "#8B4A38" : "#B55F4A"}
        opacity="0.85"
      />
      <path
        d="M 540 985 Q 600 1025 660 985"
        stroke={isBefore ? "#4E2518" : "#6E321F"}
        strokeWidth="3"
        fill="none"
        opacity="0.5"
      />

      {/* Skin texture layer */}
      <g filter={`url(#grain-${variant})`} opacity={isBefore ? 0.75 : 0.25}>
        <ellipse cx="600" cy="780" rx="270" ry="340" fill={skinBase} />
      </g>

      {/* BEFORE-only: visible blemishes & redness */}
      {isBefore && (
        <g opacity="0.9">
          {/* Forehead cluster */}
          <circle cx="540" cy="620" r="6" fill="#9E3A28" />
          <circle cx="568" cy="610" r="4" fill="#8A2F1F" />
          <circle cx="612" cy="615" r="5" fill="#A5412E" />
          <circle cx="655" cy="625" r="4" fill="#8C3322" />
          <circle cx="628" cy="645" r="3" fill="#7C2B1C" />
          {/* Left cheek */}
          <circle cx="445" cy="830" r="7" fill="#A73C28" />
          <circle cx="470" cy="880" r="5" fill="#8E3020" />
          <circle cx="420" cy="890" r="4" fill="#7B2818" />
          <circle cx="495" cy="920" r="4" fill="#8A3121" />
          <circle cx="455" cy="920" r="3" fill="#722617" />
          {/* Right cheek */}
          <circle cx="760" cy="830" r="6" fill="#9E3826" />
          <circle cx="735" cy="885" r="5" fill="#8A2F1F" />
          <circle cx="785" cy="895" r="4" fill="#7C2A19" />
          <circle cx="720" cy="925" r="3" fill="#742617" />
          {/* Chin */}
          <circle cx="585" cy="1055" r="5" fill="#9E3826" />
          <circle cx="615" cy="1070" r="4" fill="#8A2F1F" />
          <circle cx="600" cy="1090" r="3" fill="#7A2719" />
          {/* Redness patches */}
          <ellipse cx="460" cy="860" rx="70" ry="45" fill="#B3493A" opacity="0.25" />
          <ellipse cx="740" cy="860" rx="70" ry="45" fill="#B3493A" opacity="0.25" />
        </g>
      )}

      {/* AFTER: luminous highlight */}
      {!isBefore && (
        <>
          <ellipse
            cx="600"
            cy="700"
            rx="120"
            ry="60"
            fill="#FFF0D6"
            opacity="0.25"
          />
          <ellipse
            cx="520"
            cy="800"
            rx="40"
            ry="25"
            fill="#FFF0D6"
            opacity="0.2"
          />
          <ellipse
            cx="680"
            cy="800"
            rx="40"
            ry="25"
            fill="#FFF0D6"
            opacity="0.2"
          />
        </>
      )}

      {/* Hair front strands */}
      <path
        d="M 330 780 C 360 620 460 480 600 480 C 740 480 840 620 870 780 L 870 610 C 820 460 720 360 600 360 C 480 360 380 460 330 610 Z"
        fill="#150C06"
      />
    </svg>
  );
}
