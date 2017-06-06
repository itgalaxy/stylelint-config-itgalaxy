'use strict';

module.exports = {
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-colon-newline-after': 'always-multi-line',
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': [
        'never',
        {
            except: ['after-comment'],
            ignore: ['after-comment']
        }
    ],
    'declaration-no-important': null,
    'declaration-property-unit-blacklist': null,
    'declaration-property-unit-whitelist': null,
    'declaration-property-value-blacklist': {
        '/border/': ['/thin/', '/medium/', '/thick/'],
        '/transition/': ['/all/'],
        '/transition-property/': ['/all/']
    },
    'declaration-property-value-whitelist': null
};
