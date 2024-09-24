const rules = require("@burneeble/stylelint-plugin-burneeble");

module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-standard-scss"],
  plugins: [...rules],
  rules: {
    "selector-max-id": null,
    "max-nesting-depth": null,
    "color-named": null,
    "property-no-vendor-prefix": null,
    "color-function-notation": null,
    "alpha-value-notation": null,
  },
};
