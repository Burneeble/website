import { merge } from "lodash";
import libConfig from "../../node_modules/@burneeble/ui-components/dist/css/tailwind.config";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../node_modules/@burneeble/ui-components/dist/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/main.scss",
  ],
  theme: merge(libConfig.theme, {
    extend: {
      fontFamily: {
        "bowlby-one": ["var(--font-title)"],
        "bowlby-one-sc": ["var(--secondary-font-title)"],
        inter: ["var(--font-default)"],
      },
    },
  }),
  prefix: "tw-",
  plugins: merge([], libConfig.plugins),
};
