/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        swift: {
          black: "#111111",
          coral: "#FF6B5A",
          teal: "#0D3B3F",
          dark: "#050505", // Even darker gray for contrast
        },
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        heading: ["Rajdhani", "sans-serif"],
      },
      backgroundImage: {
        "glow-radial":
          "radial-gradient(circle at center, rgba(255,255,255,0.06) 0%, transparent 60%)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
