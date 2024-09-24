const rules = require("@burneeble/eslint-plugin-burneeble").rules;
const disabled = require("@burneeble/eslint-plugin-burneeble").disabled;

const customRules = {};

Object.keys(rules).forEach((rule) => {
  customRules["@burneeble/burneeble/" + rule] = "error";
});

const { FlatCompat } = require("@eslint/eslintrc");
const js = require("@eslint/js");

const compat = new FlatCompat({
  recommendedConfig: js.configs.recommended,
  baseDirectory: __dirname,
  allConfig: js.configs.all,
  resolvePluginsRelativeTo: __dirname,
});

module.exports = compat.config({
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react", "@burneeble/burneeble"],
  rules: {
    "react/jsx-key": "error",
    "storybook/prefer-pascal-case": "off",
    "@typescript-eslint/no-explicit-any": "off",
    ...customRules,
    ...disabled,
  },
  ignorePatterns: ["eslint.config.js", "lib/**/*"],
});
