import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pine: "#0D3829",
          pineDark: "#08241A",
          sprout: "#2B6E4F",
          sproutLight: "#40916C",
          soil: "#3B2314",
          soilLight: "#5A3822",
          gold: "#DDA15E",
          goldDark: "#BC6C25",
          cream: "#FAF7F2",
          creamWarm: "#F3ECE1",
          slate: "#1C3127",
          charcoal: "#16201B",
          // Mapped aliases for smooth transition
          green: "#2B6E4F",
          forest: "#0D3829",
          olive: "#40916C",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Playfair Display", "Poppins", "serif"],
        body: ["var(--font-body)", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      borderRadius: {
        "3xl": "1.75rem",
        "4xl": "2.25rem",
      },
      boxShadow: {
        tactile: "0 10px 30px -5px rgba(13, 56, 41, 0.08), 0 4px 6px -2px rgba(13, 56, 41, 0.04)",
        "tactile-hover": "0 20px 40px -10px rgba(13, 56, 41, 0.15), 0 8px 12px -3px rgba(13, 56, 41, 0.06)",
        storybook: "0 25px 50px -12px rgba(13, 56, 41, 0.22)",
      },
      animation: {
        "float-gentle": "floatGentle 4s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
      },
      keyframes: {
        floatGentle: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-8px) rotate(2deg)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.95", transform: "scale(1.02)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
