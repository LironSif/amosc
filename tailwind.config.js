/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll: 'scroll 40s linear infinite', // מהירות הגלילה (40 שניות)
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-50% - 1rem))' }, // גלילה של חצי מהרוחב
        },
      },
      fontFamily: {
        heebo: ["Heebo", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
