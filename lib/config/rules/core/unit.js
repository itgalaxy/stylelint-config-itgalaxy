"use strict";

module.exports = {
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
  "unit-case": "lower",
  "unit-no-unknown": true,
  "unit-whitelist": null
};
