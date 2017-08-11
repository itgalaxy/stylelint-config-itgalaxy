"use strict";

module.exports = {
    "comment-empty-line-before": [
        "always",
        {
            except: ["first-nested"],
            ignore: ["stylelint-commands", "after-comment"]
        }
    ],
    "comment-no-empty": true,
    "comment-whitespace-inside": "always",
    "comment-word-blacklist": ["/todo/i", "/fixme/i"]
};
