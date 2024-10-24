/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "scale-pulse": "scalepulse 2s infinite",
        "liner-pulse": "linerPulse 1s infinite",
        "bounce-once": "bounceOnce 0.3s ease-in-out"
      },
      keyframes: {
        scalepulse: {
          "0% , 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
        linerPulse: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-10px)" }, // Moves left by 10px
          "100%": { transform: "translateX(0)" },
        },
        bounceOnce : {
          "0%" : {transform: "translateY(0)"},
          "50%" : {transform: "translateY(-20px)"},
          "100%" : {transform: "translateY(0)"}
        }
      },
      colors: {
        'first-color': 'var(--first-color)', 
        'text-color': 'var(--text-color)',
      },
      fontSize: {
        'big': 'var(--big-font-size)',
        'normal': 'var(--normal-font-size)',
      },
    },
  },
  plugins: [],
};
