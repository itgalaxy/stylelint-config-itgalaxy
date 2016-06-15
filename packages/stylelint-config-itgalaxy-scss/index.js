/* eslint-disable no-var, quotes, quote-props, max-lines, import/no-commonjs */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-env node */
var baseConfig = require('stylelint-config-itgalaxy');
var lodash = require('lodash');

module.exports = lodash.defaultsDeep({}, baseConfig, {
    "rules": {
        "scss/at-extend-no-missing-placeholder": null,
        "scss/at-function-pattern": "^[a-z][a-z0-9-_]{0,30}[a-z0-9]$",
        "scss/at-import-no-partial-extension": true,
        "scss/at-import-no-partial-leading-underscore": true,
        "scss/at-mixin-no-argumentless-call-parentheses": null,
        "scss/at-mixin-pattern": "^[a-z][a-z0-9-_]{0,40}[a-z0-9]$",
        "scss/dollar-variable-no-missing-interpolation": true,
        "scss/dollar-variable-pattern": "^[a-z][a-z0-9-_]{0,50}[a-z0-9]$",
        "scss/percent-placeholder-pattern": "^[a-z][a-z0-9-_]{0,30}[a-z0-9]$",
        "scss/selector-no-redundant-nesting-selector": true
    },
    "plugins": [
        "stylelint-scss"
    ]
});
