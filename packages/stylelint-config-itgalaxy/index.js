/* eslint-disable */

module.exports = {
    'rules': {
        'color-hex-case': 'lower',
        'color-hex-length': 'short',
        'color-named': 'never',
        'color-no-hex': null,
        'color-no-invalid-hex': true,

        'font-family-name-quotes': 'always-where-recommended',

        'font-weight-notation': [
            'numeric',
            {
                'ignore': [
                    'relative'
                ]
            }
        ],

        'function-blacklist': null,
        'function-calc-no-unspaced-operator': true,
        'function-comma-newline-after': 'always-multi-line',
        'function-comma-newline-before': null,
        'function-comma-space-after': 'always-single-line',
        'function-comma-space-before': 'never',
        'function-linear-gradient-no-nonstandard-direction': true,
        'function-max-empty-lines': 0,
        'function-name-case': 'lower',
        'function-parentheses-newline-inside': 'always-multi-line',
        'function-parentheses-space-inside': 'never-single-line',
        'function-url-data-uris': 'never',
        'function-url-quotes': 'always',
        'function-whitelist': null,
        'function-whitespace-after': 'always',

        'number-leading-zero': 'always',
        'number-max-precision': 8,
        'number-no-trailing-zeros': true,

        'string-no-newline': true,
        'string-quotes': 'double',

        'length-zero-no-unit': true,

        'time-no-imperceptible': true,

        'unit-whitelist': null,
        'unit-case': 'lower',
        'unit-no-unknown': true,
        'unit-blacklist': [
            'ex',
            'cm',
            'mm',
            'q',
            'in',
            'pt',
            'pc',
            'ch',
            'vm',
            'grad',
            'turn',
            'rad'
        ],

        'value-no-vendor-prefix': true,
        'value-keyword-case': 'lower',

        'value-list-comma-newline-after': 'always-multi-line',
        'value-list-comma-newline-before': null,
        'value-list-comma-space-after': 'always-single-line',
        'value-list-comma-space-before': 'never',

        'shorthand-property-no-redundant-values': true,

        'custom-property-no-outside-root': true,
        'custom-property-pattern': '^[a-z][a-z0-9-_]{0,30}[a-z0-9]$',

        'property-blacklist': null,
        'property-case': 'lower',
        'property-no-vendor-prefix': true,
        'property-whitelist': null,

        'keyframe-declaration-no-important': true,

        'declaration-bang-space-after': 'never',
        'declaration-bang-space-before': 'always',
        'declaration-colon-newline-after': 'always-multi-line',
        'declaration-colon-space-after': 'always-single-line',
        'declaration-colon-space-before': 'never',
        'declaration-no-important': null,
        'declaration-property-unit-blacklist': null,
        'declaration-property-unit-whitelist': null,
        'declaration-property-value-blacklist': {
            '/border/': ['/thin/', '/medium/', '/thick/'],
            '/transition/': ['/all/']
        },
        'declaration-property-value-whitelist': null,

        'declaration-block-no-duplicate-properties': true,
        'declaration-block-no-ignored-properties': true,
        'declaration-block-no-shorthand-property-overrides': true,
        'declaration-block-properties-order': [
            [
                {
                    'order': 'strict',
                    'properties': [
                        'appearance'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'display',
                        'position',
                        'top',
                        'right',
                        'bottom',
                        'left'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'flex',
                        'flex-grow',
                        'flex-shrink',
                        'flex-basis',
                        'flex-flow',
                        'flex-direction',
                        'flex-wrap',
                        'justify-content',
                        'align-items',
                        'align-content',
                        'align-self',
                        'order'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'columns',
                        'column-width',
                        'column-count',
                        'column-gap',
                        'column-fill',
                        'column-span',
                        'column-rule',
                        'column-rule-width',
                        'column-rule-style',
                        'column-rule-color'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'float',
                        'clear'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'will-change',
                        'backface-visibility'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'perspective',
                        'perspective-origin'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'transform',
                        'transform-origin',
                        'transform-style'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'transition',
                        'transition-property',
                        'transition-duration',
                        'transition-timing-function',
                        'transition-delay'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'animation',
                        'animation-name',
                        'animation-duration',
                        'animation-timing-function',
                        'animation-delay',
                        'animation-iteration-count',
                        'animation-direction',
                        'animation-fill-mode',
                        'animation-play-state'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'visibility',
                        'opacity',
                        'z-index'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'margin',
                        'margin-top',
                        'margin-right',
                        'margin-bottom',
                        'margin-left'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'box-sizing'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'filter'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'mask'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'outline',
                        'outline-color',
                        'outline-style',
                        'outline-width',
                        'outline-offset'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'border',
                        'border-top',
                        'border-right',
                        'border-bottom',
                        'border-left',
                        'border-width',
                        'border-top-width',
                        'border-right-width',
                        'border-bottom-width',
                        'border-left-width'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'border-style',
                        'border-top-style',
                        'border-right-style',
                        'border-bottom-style',
                        'border-left-style'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'border-color',
                        'border-top-color',
                        'border-right-color',
                        'border-bottom-color',
                        'border-left-color'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'border-image',
                        'border-image-source',
                        'border-image-slice',
                        'border-image-width',
                        'border-image-outset',
                        'border-image-repeat'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'border-radius',
                        'border-top-left-radius',
                        'border-top-right-radius',
                        'border-bottom-left-radius',
                        'border-bottom-right-radius'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'box-shadow'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'background',
                        'background-color',
                        'background-image',
                        'background-position',
                        'background-size',
                        'background-repeat',
                        'background-origin',
                        'background-clip',
                        'background-attachment',
                        'background-blend-mode'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'cursor'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'padding',
                        'padding-top',
                        'padding-right',
                        'padding-bottom',
                        'padding-left'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'clip',
                        'clip-path'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'width',
                        'min-width',
                        'max-width'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'height',
                        'min-height',
                        'max-height'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'zoom',
                        'min-zoom',
                        'max-zoom',
                        'user-zoom',
                        'orientation'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'overflow',
                        'overflow-y',
                        'overflow-x',
                        'overflow-scrolling'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'pointer-events'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'touch-action',
                        'touch-callout'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'user-select'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'resize'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'list-style',
                        'list-style-type',
                        'list-style-position',
                        'list-style-image'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'counter-increment',
                        'counter-reset'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'system',
                        'symbols',
                        'additive-symbols',
                        'negative',
                        'prefix',
                        'suffix',
                        'range',
                        'pad',
                        'speak-as',
                        'fallback'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'caption-side'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'table-layout',
                        'border-collapse',
                        'border-spacing',
                        'empty-cells'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'page-break-inside',
                        'page-break-before',
                        'page-break-after'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'widows',
                        'orphans'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'direction'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'writing-mode',
                        'vertical-align'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'text-orientation',
                        'text-align',
                        'text-align-last',
                        'text-justify',
                        'text-indent',
                        'text-transform',
                        'text-decoration',
                        'text-decoration-line',
                        'text-decoration-style',
                        'text-decoration-color',
                        'text-underline-position',
                        'text-rendering',
                        'text-shadow',
                        'text-overflow',
                        'text-stroke',
                        'text-stroke-width',
                        'text-stroke-color',
                        'text-size-adjust'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'line-height',
                        'tab-size',
                        'word-spacing',
                        'word-wrap',
                        'word-break',
                        'letter-spacing',
                        'white-space',
                        'color'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'font-family',
                        'src',
                        'font',
                        'font-style',
                        'font-variant',
                        'font-weight',
                        'font-stretch',
                        'font-size',
                        'font-smoothing'
                    ]
                },
                {
                    'order': 'strict',
                    'properties': [
                        'content',
                        'quotes'
                    ]
                }
            ],
            {
                'unspecified': 'bottom'
            }
        ],
        'declaration-block-semicolon-newline-after': 'always-multi-line',
        'declaration-block-semicolon-newline-before': null,
        'declaration-block-semicolon-space-after': 'always-single-line',
        'declaration-block-semicolon-space-before': 'never',
        'declaration-block-single-line-max-declarations': 0,
        'declaration-block-trailing-semicolon': 'always',

        'block-closing-brace-newline-after': [
            'always',
            {
                'ignoreAtRules': [
                    'if',
                    'else'
                ]
            }
        ],
        'block-closing-brace-newline-before': 'always',
        'block-closing-brace-space-after': null,
        'block-closing-brace-space-before': null,
        'block-no-empty': true,
        'block-no-single-line': true,
        'block-opening-brace-newline-after': 'always-multi-line',
        'block-opening-brace-newline-before': null,
        'block-opening-brace-space-after': 'always-single-line',
        'block-opening-brace-space-before': 'always',

        'selector-attribute-brackets-space-inside': 'never',
        'selector-attribute-operator-blacklist': null,
        'selector-attribute-operator-space-after': 'never',
        'selector-attribute-operator-space-before': 'never',
        'selector-attribute-operator-whitelist': null,
        'selector-class-pattern': '^[a-z][a-z0-9-_]{0,44}[a-z0-9]$',
        'selector-combinator-space-after': 'always',
        'selector-combinator-space-before': 'always',
        'selector-id-pattern': '^[a-z][a-z0-9-_]{0,30}[a-z0-9]$',
        'selector-max-compound-selectors': 5,
        'selector-max-specificity': '0,5,0',
        'selector-no-attribute': null,
        'selector-no-combinator': null,
        'selector-no-id': null,
        'selector-no-qualifying-type': [
            true,
            {
                'ignore': [
                    'class'
                ]
            }
        ],
        'selector-no-type': null,
        'selector-no-universal': true,
        'selector-no-vendor-prefix': true,
        'selector-pseudo-class-case': 'lower',
        'selector-pseudo-class-no-unknown': true,
        'selector-pseudo-class-parentheses-space-inside': 'never',
        'selector-pseudo-element-case': 'lower',
        'selector-pseudo-element-colon-notation': 'double',
        'selector-pseudo-element-no-unknown': true,
        'selector-root-no-composition': true,
        'selector-type-case': 'lower',
        'selector-type-no-unknown': [
            true,
            {
                'ignoreTypes': [
                    'noindex'
                ]
            }
        ],
        'selector-max-empty-lines': 0,

        'selector-list-comma-newline-after': 'always',
        'selector-list-comma-newline-before': null,
        'selector-list-comma-space-after': null,
        'selector-list-comma-space-before': 'never',

        'root-no-standard-properties': true,

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
        ],

        'media-feature-colon-space-after': 'always',
        'media-feature-colon-space-before': 'never',
        'media-feature-name-no-vendor-prefix': true,
        'media-feature-no-missing-punctuation': true,
        'media-feature-range-operator-space-after': 'always',
        'media-feature-range-operator-space-before': 'always',

        'custom-media-pattern': '^[a-z][a-z0-9-_]{0,30}[a-z0-9]$',

        'media-query-parentheses-space-inside': 'never',

        'media-query-list-comma-newline-after': 'always-multi-line',
        'media-query-list-comma-newline-before': null,
        'media-query-list-comma-space-after': 'always-single-line',
        'media-query-list-comma-space-before': 'never',

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
        'at-rule-no-vendor-prefix': true,
        'at-rule-semicolon-newline-after': 'always',
        'at-rule-whitelist': null,

        'stylelint-disable-reason': 'always-after',

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
        'comment-whitespace-inside': 'always',
        'comment-word-blacklist': [[
            '/(T|t)(O|o)(D|d)(O|o)/',
            '/(F|f)(I|i)(X|x)(M|m)(E|e)/'
        ]],

        'indentation': [
            4,
            {
                'indentInsideParens': 'once'
            }
        ],
        'max-empty-lines': 1,
        'max-line-length': 120,
        'max-nesting-depth': 7,
        'no-browser-hacks': null,
        'no-descending-specificity': null,
        'no-duplicate-selectors': true,
        'no-eol-whitespace': true,
        'no-extra-semicolons': true,
        'no-indistinguishable-colors': null,
        'no-invalid-double-slash-comments': true,
        'no-missing-eof-newline': true,
        'no-unknown-animations': true,
        'no-unsupported-browser-features': null
    }
};
