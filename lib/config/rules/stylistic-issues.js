"use strict";

module.exports = {
  "color-hex-case": "lower",
  "color-hex-length": "short",

  "font-family-name-quotes": "always-where-recommended",
  "font-weight-notation": [
    "numeric",
    {
      ignore: ["relative"]
    }
  ],

  "function-comma-newline-after": "always-multi-line",
  "function-comma-newline-before": null,
  "function-comma-space-after": "always-single-line",
  "function-comma-space-before": "never",
  "function-max-empty-lines": 0,
  "function-name-case": "lower",
  "function-parentheses-newline-inside": "always-multi-line",
  "function-parentheses-space-inside": "never-single-line",
  "function-url-quotes": "always",
  "function-whitespace-after": "always",

  "number-leading-zero": "always",
  "number-no-trailing-zeros": true,

  "string-quotes": "double",

  "length-zero-no-unit": true,

  "unit-case": "lower",

  "value-keyword-case": "lower",

  "value-list-comma-newline-after": "always-multi-line",
  "value-list-comma-newline-before": null,
  "value-list-comma-space-after": "always-single-line",
  "value-list-comma-space-before": "never",
  "value-list-max-empty-lines": 0,

  "custom-property-empty-line-before": [
    "never",
    {
      ignore: ["after-comment"]
    }
  ],

  "property-case": "lower",

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

  "declaration-block-semicolon-newline-after": "always",
  "declaration-block-semicolon-newline-before": null,
  "declaration-block-semicolon-space-after": null,
  "declaration-block-semicolon-space-before": "never",
  "declaration-block-trailing-semicolon": "always",

  "block-closing-brace-empty-line-before": "never",
  "block-closing-brace-newline-after": "always",
  "block-closing-brace-newline-before": "always",
  "block-closing-brace-space-after": null,
  "block-closing-brace-space-before": null,
  "block-opening-brace-newline-after": "always",
  "block-opening-brace-newline-before": null,
  "block-opening-brace-space-after": null,
  "block-opening-brace-space-before": "always",

  "selector-attribute-brackets-space-inside": "never",
  "selector-attribute-operator-space-after": "never",
  "selector-attribute-operator-space-before": "never",
  "selector-attribute-quotes": "always",
  "selector-combinator-space-after": "always",
  "selector-combinator-space-before": "always",
  "selector-descendant-combinator-no-non-space": true,
  "selector-pseudo-class-case": "lower",
  "selector-pseudo-class-parentheses-space-inside": "never",
  "selector-pseudo-element-case": "lower",
  "selector-pseudo-element-colon-notation": "double",
  "selector-type-case": "lower",

  "selector-list-comma-newline-after": "always",
  "selector-list-comma-newline-before": null,
  "selector-list-comma-space-after": null,
  "selector-list-comma-space-before": "never",

  "rule-empty-line-before": [
    "always",
    {
      except: ["first-nested"],
      ignore: ["after-comment"]
    }
  ],

  "media-feature-colon-space-after": "always",
  "media-feature-colon-space-before": "never",
  "media-feature-name-case": "lower",
  "media-feature-parentheses-space-inside": "never",
  "media-feature-range-operator-space-after": "always",
  "media-feature-range-operator-space-before": "always",

  "media-query-list-comma-newline-after": "always-multi-line",
  "media-query-list-comma-newline-before": null,
  "media-query-list-comma-space-after": "always-single-line",
  "media-query-list-comma-space-before": "never",

  "at-rule-empty-line-before": [
    "always",
    {
      except: ["blockless-after-same-name-blockless", "first-nested"],
      ignore: ["after-comment"]
    }
  ],
  "at-rule-name-case": "lower",
  "at-rule-name-newline-after": null,
  "at-rule-name-space-after": "always",
  "at-rule-semicolon-newline-after": "always",
  "at-rule-semicolon-space-before": "never",

  "comment-empty-line-before": [
    "always",
    {
      except: ["first-nested"],
      ignore: ["stylelint-commands", "after-comment"]
    }
  ],
  "comment-whitespace-inside": "always",

  indentation: [2],
  linebreaks: "unix",
  "max-empty-lines": 1,
  "max-line-length": [120, { ignore: ["comments"] }],
  "no-eol-whitespace": true,
  "no-missing-end-of-source-newline": true,
  "no-empty-first-line": true
};
