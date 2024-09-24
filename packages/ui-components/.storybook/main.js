import { dirname, join } from "path";
const path = require("path");

module.exports = {
  stories: ["../src/**/**/*.mdx", "../src/**/**/*.stories.@(js|jsx|ts|tsx)"],
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-mdx-gfm"),
    getAbsolutePath("storybook-addon-mock"),
    getAbsolutePath("@storybook/addon-mdx-gfm"),
    getAbsolutePath("@storybook/addon-mdx-gfm"),
    "@chromatic-com/storybook"
  ],
  managerHead: (head) => `
    ${head}
    <style>
      .css-14m2fqk .css-uwwqev {
        overflow: hidden scroll !important
      }
    </style>
  `,

  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {},
  },

  webpackFinal: async (config, { configType }) => {
    // get index of css rule
    const ruleCssIndex = config.module.rules.findIndex(
      (rule) => rule.test.toString() === "/\\.css$/"
    );

    // map over the 'use' array of the css rule and set the 'module' option to true
    config.module.rules[ruleCssIndex].use.map((item) => {
      if (item.loader && item.loader.includes("/css-loader/")) {
        item.options.modules = {
          mode: "local",
          localIdentName:
            configType === "PRODUCTION"
              ? "[local]__[hash:base64:5]"
              : "[name]__[local]__[hash:base64:5]",
        };
      }

      return item;
    });

    return config;
  },

  docs: {},

  features: {
    experimentalRSC: true,
  },
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
