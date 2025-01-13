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
      "plugin:readable-tailwind/warning",
      "plugin:readable-tailwind/error",
      "plugin:tailwindcss/recommended",
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
    plugins: [
      "@typescript-eslint",
      "react",
      "@burneeble/burneeble",
      "readable-tailwind",
    ],
    ignorePatterns: [
      "eslint.config.js",
      "dist/**/*",
      "rollup.config.js",
      "create-component.js",
      "components/ui/**/*",
      "hooks/**/*",
      "tailwind.config.js",
      "postcss.config.js",
    ],
  }),
  ...compat.config({
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "react/jsx-key": "error",
      "storybook/prefer-pascal-case": "off",
      "tailwindcss/classnames-order": "off",
      "tailwindcss/no-custom-classname": "off",
      "tailwindcss/no-arbitrary-value": "off",
      "tailwindcss/no-contradicting-classname": "error",
      ...customRules,
      ...disabled,
    },
  }),
  ...compat.config({
    settings: {
      tailwindcss: {
        prefix: "tw-",
      },
    },
  }),
];
