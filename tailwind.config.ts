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
          red: "#E63946",
          redDark: "#B82835",
          green: "#2A9D8F",
          forest: "#1D6E64",
          olive: "#588157",
          cream: "#FDFBF7",
          creamWarm: "#FFF8F0",
          slate: "#264653",
          charcoal: "#1F2937",
          gold: "#E9C46A",
          goldDark: "#855F08",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Poppins", "Baloo 2", "sans-serif"],
        body: ["var(--font-body)", "Nunito", "sans-serif"],
      },
      borderRadius: {
        "3xl": "1.75rem",
        "4xl": "2.25rem",
      },
      boxShadow: {
        tactile: "0 10px 30px -5px rgba(38, 70, 83, 0.08), 0 4px 6px -2px rgba(38, 70, 83, 0.04)",
        "tactile-hover": "0 20px 40px -10px rgba(230, 57, 70, 0.15), 0 8px 12px -3px rgba(38, 70, 83, 0.06)",
        storybook: "0 25px 50px -12px rgba(38, 70, 83, 0.18)",
      },
      animation: {
        "float-gentle": "floatGentle 4s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
      },
      keyframes: {
        floatGentle: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(3deg)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.03)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
