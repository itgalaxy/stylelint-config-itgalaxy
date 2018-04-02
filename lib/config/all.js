"use strict";

const coreRules = require("./rules/core");

// For internal use
// Need resolve https://github.com/alexilyaev/stylelint-find-rules/issues/15
module.exports = {
  plugins: ["stylelint-order"],
  rules: Object.assign({}, coreRules)
};
