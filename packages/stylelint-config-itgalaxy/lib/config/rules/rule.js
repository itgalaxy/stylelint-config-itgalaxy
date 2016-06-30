/* eslint-disable */

'use strict';

module.exports = {
    'rule-nested-empty-line-before': [
        'always',
        {
            'except': [
                'first-nested'
            ],
            'ignore': [
                'after-comment'
            ]
        }
    ],
    'rule-non-nested-empty-line-before': [
        'always',
        {
            'ignore': [
                'after-comment'
            ]
        }
    ]
};
