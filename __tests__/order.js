/* eslint-disable import/default */
import config from '../order';
/* eslint-enable import/default */
import stylelint from 'stylelint';
import test from 'ava';

function isObject(obj) {
    return typeof obj === 'object' && obj !== null;
}

test('test basic properties of config', (t) => {
    t.true(isObject(config.rules), 'rules is object');
});

const validCss = `
a {
    display: block;
    width: 100px;
    height: 100px;
    text-decoration: underline;
    color: red;
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

            t.false(errored, 'no errored');
            t.is(results[0].deprecations.length, 0, 'flags no deprecations');
            t.is(results[0].invalidOptionWarnings.length, 0, 'flags no invalid option warnings');
            t.is(results[0].warnings.length, 0, 'flags no warnings');

            return true;
        })
);
