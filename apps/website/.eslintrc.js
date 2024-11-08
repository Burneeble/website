const rules = require("@burneeble/eslint-plugin-burneeble").rules;
const disabled = require("@burneeble/eslint-plugin-burneeble").disabled;

const customRules = {};

Object.keys(rules).forEach((rule) => {
  customRules["@burneeble/burneeble/" + rule] = "error";
});

module.exports = {
  ...{
    extends: [
      "next/core-web-vitals",
      "next/typescript",
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:tailwindcss/recommended",
    ],
    plugins: ["@burneeble/burneeble"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "tailwindcss/classnames-order": "off",
      "tailwindcss/no-custom-classname": "off",
      "tailwindcss/no-arbitrary-value": "off",
      "tailwindcss/no-contradicting-classname": "error",
      ...customRules,
      ...disabled,
    },
    ignorePatterns: [
      "node_modules/",
      ".next/",
      ".eslintrc.js",
      "components/ui/**/*",
      "hooks/**/*",
      "tailwind.config.js",
      "postcss.config.js",
    ],
    settings: {
      tailwindcss: {
        prefix: "tw-",
      },
    },
  },
};
