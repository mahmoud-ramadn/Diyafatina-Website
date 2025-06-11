import animate from "tailwindcss-animate";
import colors from "tailwindcss/colors"; // <-- Add this import

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,vue}",
    "./components/**/*.{ts,tsx,vue}",
    "./app/**/*.{ts,tsx,vue}",
    "./src/**/*.{ts,tsx,vue}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "16px",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        white: "#FFFFFF", // Now properly defined
        black: "#000000",
        primary: "#38BFBE",
        blue: {
          500: "#0050FF",
          600: "#3366FF",
          700: "#1B46AD",
          800: "#777A8B",
        },
        blueTest: "#0050FF",

        gray: {
          300: "#2B374D",
          500: "#444C5F",
          600: "#424B59",
          700: "#6E7C91",
          800: "#CED7E3",
          900: "#8892AA",
        },
        green: {
          150: "#2C4F50",
          200: "#25C6C10A",
          300: "#38BFBE14",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      backgroundImage: {
        "leaning-gradient":
          "linear-gradient(134deg, rgba(0, 80, 255, 0.2) 0%, rgba(38, 200, 234, 0.7) 30%, rgba(255, 255, 255, 0.2) 100%)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        noto: "'Noto Kufi Arabic', sans-serif",
      },
      fontSize: {
        xxs: "10px",
      },
    },
  },
  plugins: [animate],
};
