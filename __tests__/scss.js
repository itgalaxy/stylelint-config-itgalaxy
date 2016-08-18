import config from '../scss'; // eslint-disable-line import/default
import stylelint from 'stylelint';
import test from 'ava';

function isObject(obj) {
    return typeof obj === 'object' && obj !== null;
}

test('test basic properties of config', (t) => {
    t.true(isObject(config.rules), 'rules is object');
    t.true(isObject(config.plugins), 'rules is plugins');
    t.true(config.plugins.indexOf('stylelint-scss') !== -1);
});

const validScss = `
@import "file";
@import "_path/to/file";
@import "some.css";

// Variables
$variable: 10px;
$box-shadow:
    0 0 0 1px #5b9dd9,
    0 0 2px 1px rgba(30, 140, 190, 0.8);
$sum: 10px + 10px;
$sum:
    100px + 100px + 100px + 100px + 100px + 100px
    - 8000px * 2px / 4px;

@function my-calculation-function($some-number, $another-number) {
    @return $some-number + $another-number;
}

@mixin box-shadow($top, $left, $blur, $color, $inset:"") {
    box-shadow: $top $left $blur $color unquote($inset);
}

%some-placeholder {
    display: flex;
}

.class-one {
    &.foo {
        display: block; // Inline-comment
    }

    .foo > & {
        display: block;
    }
}

.class-two {
    &,
    .foo,
    .bar {
        margin: 0;
    }
}

.class-three {
    + .foo {
        display: block;
    }
}

.class-with-mixin {
    @include mixin-name();
    width: 10px * 10;
}
`;

const invalidScss = `
@import "path/to/file.scss"

`;

test(
    'no warnings, deprecations and invalid options with valid scss',
    (t) => {
        config.rules['scss/partial-no-import'] = null;

        return stylelint.lint({
            code: validScss,
            config,
            syntax: 'scss'
        })
            .then((data) => {
                const {
                    errored,
                    results
                } = data;
                const {
                    deprecations,
                    invalidOptionWarnings,
                    warnings
                } = results[0];

                t.false(errored, 'no errored');
                t.is(deprecations.length, 0, 'flags no deprecations');
                t.is(invalidOptionWarnings.length, 0, 'flags no invalid option warnings');
                t.is(warnings.length, 0, 'flags no warnings');

                return true;
            });
    }
);

test(
    'a warning with invalid scss',
    (t) => {
        config.rules['scss/partial-no-import'] = null;

        return stylelint.lint({
            code: invalidScss,
            config,
            syntax: 'scss'
        })
            .then((data) => {
                const {
                    errored,
                    results
                } = data;
                const {warnings} = results[0];

                t.true(errored, 'errored');
                t.is(warnings.length, 1, 'flags one warning');
                t.is(
                    warnings[0].text,
                    'Unexpected extension ".scss" in imported partial name'
                        + ' (scss/at-import-partial-extension-blacklist)',
                    'correct warning text'
                );

                return false;
            });
    }
);
