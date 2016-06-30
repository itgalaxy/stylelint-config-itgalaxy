/* eslint-disable */

'use strict';

module.exports = {
    'at-rule-blacklist': null,
    'at-rule-empty-line-before': [
        'always',
        {
            'except': [
                'blockless-group',
                'first-nested'
            ],
            'ignore': [
                'after-comment',
                'all-nested'
            ]
        }
    ],
    'at-rule-name-case': 'lower',
    'at-rule-name-newline-after': null,
    'at-rule-name-space-after': 'always',
    'at-rule-no-unknown': true,
    'at-rule-no-vendor-prefix': true,
    'at-rule-semicolon-newline-after': 'always',
    'at-rule-whitelist': null
};
