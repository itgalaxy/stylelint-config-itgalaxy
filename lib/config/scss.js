"use strict";

const scssRules = require("./rules/scss");

module.exports = {
    extends: ["./core"].map(require.resolve),
    plugins: ["stylelint-scss"],
    rules: Object.assign({}, scssRules, {
        "at-rule-blacklist": ["debug"],
        "at-rule-empty-line-before": [
            "always",
            {
                except: ["blockless-after-blockless", "first-nested"],
                ignore: ["after-comment"],
                ignoreAtRules: ["else"]
            }
        ],
        "at-rule-no-unknown": [
            true,
            {
                ignoreAtRules: [
                    "at-root",
                    "content",
                    "debug",
                    "each",
                    "else",
                    "error",
                    "extend",
                    "for",
                    "function",
                    "if",
                    "include",
                    "mixin",
                    "return",
                    "warn",
                    "while"
                ]
            }
        ],
        "block-closing-brace-newline-after": [
            "always",
            {
                ignoreAtRules: ["if", "else"]
            }
        ]
    })
};
