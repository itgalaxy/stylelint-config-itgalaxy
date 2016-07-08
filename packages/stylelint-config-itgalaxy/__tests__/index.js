/* eslint-disable import/default */
import config from '../index';
/* eslint-enable import/default */
import stylelint from 'stylelint';
import test from 'ava';

function isObject(obj) {
    return typeof obj === 'object' && obj !== null;
}

test('test basic properties of config', (t) => {
    t.true(isObject(config.rules), 'rules is object');
});

const validCss = `@import url("x.css");
@import url("y.css");

:root {
    --foo-bar: 1px;
    --foo-var: 1em;
}

/**
 * Multi-line comment
 */
.selector-1,
.selector-2,
.selector-3[type="text"] {
    display: block !important;
    box-sizing: border-box;
    background: linear-gradient(#fff, rgba(0, 0, 0, 0.8));
    color: #333;
    font-weight: 700;
}

@keyframes slip-n-slide {
    from {
        top: 0;
    }

    to {
        top: 200px;
    }
}

.selector-a,
.selector-b:not(:first-child) {
    top: calc(calc(1em * 2) / 3);
    animation: slip-n-slide 150ms linear;
    padding: 10px !important;
}

.selector-x {
    width: 10%;
}

.selector-y {
    width: 20%;
}

.selector-z {
    width: 30%;
}

/* Single-line comment */
@media (min-width >= 60em) {
    .selector {
        /* Flush to parent comment */
        transform: translate(1, 1) scale(3);
    }
}

@media (min-orientation: portrait), projection and (color) {
    .selector-i + .selector-ii {
        top: 3.24563431px;
        background: color(rgb(0, 0, 0) lightness(50%));
        font-family: Arial, helvetica, "arial black", "sake_case_font", "MyFontVersion6", sans-serif;
        font-weight: lighter;
    }
}

/* Flush single line comment */
@media screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    /* Comment here */
    .selector {
        margin: 10px;
        margin-bottom: 5px;
        box-shadow:
            0 1px 1px #000,
            0 1px 0 #fff,
            2px 2px 1px 1px #ccc inset;
        background-image:
            repeating-linear-gradient(
                -45deg,
                transparent,
                #fff 25px,
                rgba(255, 255, 255, 1) 50px
            );
        height: 10rem;
    }

    /* Flush nested single line comment */
    .selector::after {
        background-image: url("x.svg");
        content: "→";
    }
}

/*
 * Some description about section
 */

.foo {
    margin: 1px 1px 1px 2px;
}

[src] {
    text-decoration: underline;
}

[target="_blank"] {
    display: block;
}

.class-1 .class-2 .class-3 .class-4 .class-5 {
    display: block;
}

@supports (display: flex) and (max-width: 100px) {
    body {
        display: flex;
        max-width: 100px;
    }
}

.bar {
    font-size: 16px;
    font-size: 1rem;
}

/* stylelint-disable block-no-empty */
/* Some reason */
.template {
}
/* stylelint-enable block-no-empty */

`;

const invalidCss = `a {
    top: .2em;
}

`;

test(
    'no warnings, deprecations and invalid options with valid css',
    (t) => stylelint.lint({
        code: validCss,
        config
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
    'a warning with invalid css',
    (t) => stylelint.lint({
        code: invalidCss,
        config
    })
        .then((data) => {
            const {
                errored,
                results
            } = data;
            const {warnings} = results[0];

            t.true(errored, 'errored');
            t.is(warnings.length, 1, 'flags one warning');
            t.is(warnings[0].text, 'Expected a leading zero (number-leading-zero)', 'correct warning text');

            return false;
        })
);
