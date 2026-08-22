/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#050B1F",
          900: "#0A1440",
          800: "#0F1E5C",
          700: "#142878",
          600: "#1A379C",
        },
        brand: {
          600: "#1B3FD6",
          700: "#152FB0",
        },
        ink: "#0B0E1A",
        mist: "#F2F4F9",
      },
      fontFamily: {
        display: ["'Plus Jakarta Sans'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      maxWidth: {
        wrap: "1400px",
      },
    },
  },
  plugins: [],
};
