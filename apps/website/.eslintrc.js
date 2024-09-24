const rules = require("@burneeble/eslint-plugin-burneeble").rules;
const disabled = require("@burneeble/eslint-plugin-burneeble").disabled;

const customRules = {};

Object.keys(rules).forEach((rule) => {
  customRules["@burneeble/burneeble/" + rule] = "error";
});

module.exports = {
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["@burneeble/burneeble"],
  rules: {
    ...customRules,
    ...disabled,
  },
};
