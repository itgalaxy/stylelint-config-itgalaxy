'use strict';

module.exports = {
    'custom-property-empty-line-before': [
        'never',
        {
            except: ['after-comment'],
            ignore: ['after-comment']
        }
    ],
    'custom-property-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$'
};
