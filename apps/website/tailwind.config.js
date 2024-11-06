import { merge } from "lodash";
import libConfig from "../../node_modules/@burneeble/ui-components/dist/css/tailwind.config";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../node_modules/@burneeble/ui-components/dist/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: merge(
    {
      extend: {},
    },
    libConfig.theme
  ),
  prefix: "tw-",
  plugins: merge([], libConfig.plugins),
};
