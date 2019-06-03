"use strict";

const possibleErrors = require("./rules/possible-errors");
const limitLanguageFeatures = require("./rules/limit-language-features");
const stylisticIssues = require("./rules/stylistic-issues");

// For internal use
// Need resolve https://github.com/alexilyaev/stylelint-find-rules/issues/15
module.exports = {
  plugins: ["stylelint-order"],
  rules: Object.assign(
    {},
    possibleErrors,
    limitLanguageFeatures,
    stylisticIssues
  )
};
