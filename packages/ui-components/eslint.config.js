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
});

module.exports = [
  ...compat.config({
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
      "plugin:storybook/recommended",
    ],
    overrides: [
      {
        files: ["**/*.ts", "**/*.tsx"],
        parser: "@typescript-eslint/parser",
        plugins: ["@typescript-eslint"],
        extends: ["plugin:@typescript-eslint/recommended"],
      },
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
    ignorePatterns: [
      "eslint.config.js",
      "dist/**/*",
      "rollup.config.js",
      "create-component.js",
      "components/ui/**/*",
    ],
  }),
  ...compat.config({
    rules: {
      "react/jsx-key": "error",
      "storybook/prefer-pascal-case": "off",
      ...customRules,
      ...disabled,
    },
  }),
];
