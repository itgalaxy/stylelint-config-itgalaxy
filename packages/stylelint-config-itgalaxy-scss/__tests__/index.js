/* eslint-disable import/default */
import config from '../index';
/* eslint-enable import/default */
import stylelint from 'stylelint';
/* eslint-disable node/no-missing-import, import/no-unresolved */
import test from 'ava';
/* eslint-enable node/no-missing-import, import/no-unresolved */

function isObject(obj) {
    return typeof obj === 'object' && obj !== null;
}

test('test basic properties of config', (t) => {
    t.true(isObject(config.rules), 'rules is object');
    t.true(isObject(config.plugins), 'rules is plugins');
});

const validCss = `
@import "file";
@import "_path/to/file";

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
        display: block;
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

`;

const invalidCss = `
@import "path/to/file.scss"

`;

test(
    'no warnings, deprecations and invalid options with valid scss',
    (t) => stylelint.lint({
        code: validCss,
        config: config,
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
        })
);

test(
    'a warning with invalid scss',
    (t) => stylelint.lint({
        code: invalidCss,
        config: config
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
                'Unexpected file extension in imported partial name (scss/at-import-no-partial-extension)',
                'correct warning text'
            );

            return false;
        })
);
