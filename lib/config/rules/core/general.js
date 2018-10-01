"use strict";

module.exports = {
  indentation: [2],
  linebreaks: "unix",
  "max-empty-lines": 1,
  "max-line-length": [120, { ignore: ["comments"] }],
  "max-nesting-depth": [5, { ignore: ["blockless-at-rules"] }],
  "no-descending-specificity": null,
  "no-duplicate-at-import-rules": true,
  "no-duplicate-selectors": true,
  "no-empty-source": true,
  "no-eol-whitespace": true,
  "no-extra-semicolons": true,
  "no-invalid-double-slash-comments": true,
  "no-missing-end-of-source-newline": true,
  "no-empty-first-line": true,
  "no-unknown-animations": true
};
