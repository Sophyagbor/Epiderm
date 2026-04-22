import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#FBF7F2",
          100: "#F5EEE4",
          200: "#EADFCE",
          300: "#DCC9AE",
          400: "#C4AA87",
          500: "#A68B68",
          600: "#876E4F",
          700: "#69553D",
          800: "#4A3C2B",
          900: "#2B231A",
        },
        clay: {
          50: "#F7F1EA",
          100: "#EADBC8",
          200: "#D6BB9A",
          300: "#B89776",
          400: "#9A7756",
          500: "#7C5D3E",
          600: "#5E452C",
          700: "#402F1E",
        },
        cream: "#F9F4ED",
        ink: "#1C1613",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-fraunces)", "ui-serif", "Georgia"],
      },
      letterSpacing: {
        editorial: "-0.03em",
      },
      keyframes: {
        grain: {
          "0%, 100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-5%,-5%)" },
          "20%": { transform: "translate(-10%,5%)" },
          "30%": { transform: "translate(5%,-10%)" },
          "40%": { transform: "translate(-5%,15%)" },
          "50%": { transform: "translate(-10%,5%)" },
          "60%": { transform: "translate(15%,0)" },
          "70%": { transform: "translate(0,10%)" },
          "80%": { transform: "translate(-15%,0)" },
          "90%": { transform: "translate(10%,5%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        grain: "grain 8s steps(10) infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
