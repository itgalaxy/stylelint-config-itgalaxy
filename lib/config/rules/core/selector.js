"use strict";

module.exports = {
    "selector-attribute-brackets-space-inside": "never",
    "selector-attribute-operator-blacklist": null,
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-operator-space-before": "never",
    "selector-attribute-operator-whitelist": null,
    "selector-attribute-quotes": "always",
    "selector-class-pattern": [
        "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
        {
            resolveNestedSelectors: true
        }
    ],
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-descendant-combinator-no-non-space": true,
    "selector-id-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
    "selector-max-attribute": null,
    "selector-max-class": null,
    "selector-max-combinators": null,
    "selector-max-compound-selectors": 5,
    "selector-max-empty-lines": 0,
    "selector-max-id": 0,
    "selector-max-specificity": "0,5,0",
    "selector-max-type": null,
    "selector-max-universal": 0,
    "selector-nested-pattern": null,
    "selector-no-qualifying-type": null,
    "selector-no-vendor-prefix": true,
    "selector-pseudo-class-blacklist": null,
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-pseudo-class-whitelist": null,
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-colon-notation": "double",
    "selector-pseudo-element-no-unknown": true,
    "selector-type-case": "lower",
    "selector-type-no-unknown": [
        true,
        {
            ignoreTypes: ["noindex"]
        }
    ]
};
