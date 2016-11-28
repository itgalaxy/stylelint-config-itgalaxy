'use strict';

module.exports = {
    'declaration-block-no-duplicate-properties': [
        true,
        {
            ignore: [
                'consecutive-duplicates'
            ]
        }
    ],
    'declaration-block-no-ignored-properties': true,
    'declaration-block-no-redundant-longhand-properties': true,
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
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-newline-before': null,
    'declaration-block-semicolon-space-after': null,
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-single-line-max-declarations': null,
    'declaration-block-trailing-semicolon': 'always'
};
