"use strict";

module.exports = {
  "color-named": "never",
  "color-no-hex": null,

  "function-blacklist": null,
  "function-url-no-scheme-relative": true,
  "function-url-scheme-blacklist": null,
  "function-url-scheme-whitelist": ["http", "https"],
  "function-whitelist": null,

  "keyframes-name-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
  "number-max-precision": 8,
  "time-min-milliseconds": 100,

  "unit-blacklist": [
    // Absolute lengths
    "cm",
    "mm",
    "q",
    "in",
    "pt",
    "pc",

    // IE9
    "vm",

    // Prefer `deg`
    "grad",
    "turn",
    "rad",

    // Prefer `dppx` or `dpi`
    "dpcm"
  ],
  "unit-whitelist": null,

  "shorthand-property-no-redundant-values": true,

  "value-no-vendor-prefix": true,

  "custom-property-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",

  "property-blacklist": null,
  "property-no-vendor-prefix": true,
  "property-whitelist": null,

  "declaration-block-no-redundant-longhand-properties": true,
  "declaration-no-important": null,
  "declaration-property-unit-blacklist": null,
  "declaration-property-unit-whitelist": null,
  "declaration-property-value-blacklist": {
    "/border/": ["/thin/i", "/medium/i", "/thick/i"],
    "/transition/": ["/all/i"],
    "/transition-property/": ["/all/i"]
  },
  "declaration-property-value-whitelist": null,

  "declaration-block-single-line-max-declarations": null,

  "selector-attribute-operator-blacklist": null,
  "selector-attribute-operator-whitelist": null,

  "selector-class-pattern": [
    "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
    {
      resolveNestedSelectors: true
    }
  ],
  "selector-combinator-blacklist": null,
  "selector-combinator-whitelist": null,
  "selector-id-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
  "selector-max-attribute": 2,
  "selector-max-class": 5,
  "selector-max-combinators": 5,
  "selector-max-compound-selectors": 5,
  "selector-max-empty-lines": 0,
  "selector-max-id": 0,
  // Maybe enable in future
  "selector-max-pseudo-class": null,
  "selector-max-specificity": "0,5,0",
  "selector-max-type": 3,
  "selector-max-universal": 0,
  "selector-nested-pattern": null,
  "selector-no-qualifying-type": null,
  "selector-no-vendor-prefix": true,
  "selector-pseudo-class-blacklist": null,
  "selector-pseudo-class-whitelist": null,
  "selector-pseudo-element-blacklist": null,
  "selector-pseudo-element-whitelist": null,

  "media-feature-name-blacklist": [
    // Deprecated
    "/device-width/i",
    "/device-height/i",
    "/device-aspect-ratio/i"
  ],
  "media-feature-name-no-vendor-prefix": true,
  "media-feature-name-value-whitelist": null,
  "media-feature-name-whitelist": null,

  "custom-media-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",

  "at-rule-blacklist": null,
  "at-rule-no-vendor-prefix": true,
  "at-rule-property-requirelist": {
    "font-face": ["font-family", "src", "font-display"]
  },
  "at-rule-whitelist": null,

  "comment-word-blacklist": ["/todo/i", "/fixme/i"],

  "max-nesting-depth": [5, { ignore: ["blockless-at-rules"] }],
  "no-unknown-animations": true
};
