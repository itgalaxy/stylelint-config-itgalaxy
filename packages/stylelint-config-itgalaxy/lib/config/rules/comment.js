/* eslint-disable */

'use strict';

module.exports = {
    'comment-empty-line-before': [
        'always',
        {
            'except': [
                'first-nested'
            ],
            'ignore': [
                'stylelint-commands',
                'between-comments'
            ]
        }
    ],
    'comment-no-empty': true,
    'comment-whitespace-inside': 'always',
    'comment-word-blacklist': [
        '/(T|t)(O|o)(D|d)(O|o)/',
        '/(F|f)(I|i)(X|x)(M|m)(E|e)/'
    ]
};
