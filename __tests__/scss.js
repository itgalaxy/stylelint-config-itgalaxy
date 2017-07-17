import config from "../scss";
import fs from "fs";
import path from "path";
import pify from "pify";
import stylelint from "stylelint";
import test from "ava";

const fixturesDir = path.resolve(process.cwd(), "__tests__/fixtures");

function isObject(obj) {
    return typeof obj === "object" && obj !== null;
}

test("test basic properties of config", t => {
    t.true(isObject(config.rules), "rules is object");
    t.true(isObject(config.plugins), "rules is plugins");
    t.true(config.plugins.indexOf("stylelint-scss") !== -1);
});

test("no warnings, deprecations and invalid options with valid scss", t => {
    config.rules["scss/partial-no-import"] = null;

    return pify(fs.readFile)(path.join(fixturesDir, "bar.scss")).then(code =>
        stylelint
            .lint({
                code: code.toString(),
                config,
                syntax: "scss"
            })
            .then(data => {
                const { errored, results } = data;

                t.false(errored, "no errored");
                t.is(
                    results[0].deprecations.length,
                    0,
                    "flags no deprecations"
                );
                t.is(
                    results[0].invalidOptionWarnings.length,
                    0,
                    "flags no invalid option warnings"
                );
                t.is(results[0].warnings.length, 0, "flags no warnings");

                return true;
            })
    );
});

test("a warning with invalid scss", t => {
    config.rules["scss/partial-no-import"] = null;

    return stylelint
        .lint({
            code: ['@import "path/to/file.scss"', "\n"].join("\n"),
            config,
            syntax: "scss"
        })
        .then(data => {
            const { errored, results } = data;

            t.true(errored, "errored");
            t.is(results[0].warnings.length, 1, "flags one warning");
            t.is(
                results[0].warnings[0].text,
                'Unexpected extension ".scss" in imported partial name' +
                    " (scss/at-import-partial-extension-blacklist)",
                "correct warning text"
            );

            return false;
        });
});
