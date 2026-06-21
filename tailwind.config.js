/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        void: "#070b14",
        surface: "#101728",
        ink: "#eef2fb",
        muted: "#8590ab",
        sky: {
          DEFAULT: "#4cc9f0",
          dim: "#2f8fb3",
        },
        aurora: {
          DEFAULT: "#9d7bea",
          dim: "#6f54a8",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "aurora-gradient": "linear-gradient(135deg, #4cc9f0 0%, #9d7bea 100%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(76, 201, 240, 0.35)",
        "glow-violet": "0 0 40px -10px rgba(157, 123, 234, 0.35)",
      },
      keyframes: {
        drift1: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(40px, -30px) scale(1.08)" },
          "66%": { transform: "translate(-30px, 20px) scale(0.95)" },
        },
        drift2: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-50px, 40px) scale(1.1)" },
        },
        twinkle: {
          "0%, 100%": { opacity: 0.2 },
          "50%": { opacity: 1 },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
      animation: {
        drift1: "drift1 22s ease-in-out infinite",
        drift2: "drift2 28s ease-in-out infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
