/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "ieee-blue": {
          DEFAULT: "#00629B",
          dark: "#004F7C",
          darker: "#00354F",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "pulse-ring": "pulseRing 2s infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulseRing: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(0,98,155,0.35)" },
          "50%": { boxShadow: "0 0 0 12px rgba(0,98,155,0)" },
        },
      },
    },
  },
  plugins: [],
};
