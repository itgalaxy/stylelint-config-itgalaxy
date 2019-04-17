"use strict";

module.exports = {
  "declaration-bang-space-after": "never",
  "declaration-bang-space-before": "always",
  "declaration-colon-newline-after": null,
  "declaration-colon-space-after": "always",
  "declaration-colon-space-before": "never",
  "declaration-empty-line-before": [
    "never",
    {
      ignore: ["after-comment"]
    }
  ],
  "declaration-no-important": null,
  "declaration-property-unit-blacklist": null,
  "declaration-property-unit-whitelist": null,
  "declaration-property-value-blacklist": {
    "/border/": ["/thin/i", "/medium/i", "/thick/i"],
    "/transition/": ["/all/i"],
    "/transition-property/": ["/all/i"]
  },
  "declaration-property-value-whitelist": null
};
