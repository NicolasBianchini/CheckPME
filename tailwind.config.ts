import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#d7e9ff",
          200: "#afd3ff",
          300: "#7cb5ff",
          400: "#438fff",
          500: "#1d67e2",
          600: "#1550b8",
          700: "#123f8f",
          800: "#14356f",
          900: "#152d59"
        },
        success: "#1f9d68",
        warning: "#e7a008",
        danger: "#dc4c3f"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 35px rgba(17, 37, 73, 0.08)",
        panel: "0 20px 45px rgba(17, 37, 73, 0.12)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(21,45,89,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(21,45,89,0.04) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
