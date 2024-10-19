/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx,stories.tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
};
