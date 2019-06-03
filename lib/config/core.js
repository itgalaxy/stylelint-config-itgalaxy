"use strict";

const possibleErrors = require("./rules/possible-errors");
const limitLanguageFeatures = require("./rules/limit-language-features");
const stylisticIssues = require("./rules/stylistic-issues");
const orderRules = require("./rules/order");

module.exports = {
  plugins: ["stylelint-order"],
  rules: Object.assign(
    {},
    possibleErrors,
    limitLanguageFeatures,
    stylisticIssues,
    orderRules
  )
};
