/* eslint-disable */
/* eslint-env node */
var baseConfig = require('stylelint-config-itgalaxy');
var merge = require('merge');

module.exports = {
    rules: merge(baseConfig.rules, {
        'block-closing-brace-newline-after': [
            'always',
            {
                'ignoreAtRules': [
                    'if',
                    'else'
                ]
            }
        ],

        'at-rule-blacklist': ['debug'],
        'at-rule-no-unknown': [
            true,
            {
                'ignoreAtRules': [
                    'at-root',
                    'debug',
                    'each',
                    'else',
                    'error',
                    'extend',
                    'for',
                    'function',
                    'if',
                    'include',
                    'mixin',
                    'return',
                    'warn',
                    'while'
                ]
            }
        ],

        "scss/at-extend-no-missing-placeholder": null,

        "scss/at-function-pattern": "^[a-z][a-z0-9-_]{0,30}[a-z0-9]$",

        "scss/at-import-no-partial-leading-underscore": true,
        "scss/at-import-partial-extension-blacklist": ["scss"],
        "scss/at-import-partial-extension-whitelist": null,

        "scss/at-mixin-no-argumentless-call-parentheses": null,
        "scss/at-mixin-pattern": "^[a-z][a-z0-9-_]{0,40}[a-z0-9]$",

        "scss/dollar-variable-no-missing-interpolation": true,
        "scss/dollar-variable-pattern": "^[a-z][a-z0-9-_]{0,50}[a-z0-9]$",

        "scss/percent-placeholder-pattern": "^[a-z][a-z0-9-_]{0,30}[a-z0-9]$",

        "scss/media-feature-value-dollar-variable": null,

        "scss/partial-no-import": null,

        "scss/selector-no-redundant-nesting-selector": true
    }),
    "plugins": [
        "stylelint-scss"
    ]
};
