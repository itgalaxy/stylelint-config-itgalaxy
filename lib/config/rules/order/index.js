'use strict';

module.exports = {
    'order/declaration-block-order': null,
    'order/declaration-block-properties-specified-order': [
        [
            // 1. Inheritance
            'all',

            // 2. Heading
            'content',
            'quotes',

            // 3. Positioning
            'position',
            'top',
            'right',
            'bottom',
            'left',
            'z-index',

            // 4. Shapes
            'shape-outside',
            'shape-image-threshold',
            'shape-margin',

            // 5. Box Model & Display
            'box-sizing',
            'display',
            'float',
            'clear',

            // 6. Flexible Box Layout
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
            'order',

            // 7. Visual effects
            'visibility',
            'overflow',
            'overflow-y',
            'overflow-x',
            'overflow-scrolling',
            'overflow-wrap',
            'clip',
            'clip-path',
            'mask',

            // 8. Tables
            'caption-side',
            'table-layout',
            'border-collapse',
            'border-spacing',
            'empty-cells',

            // 9. Counter Styles
            'system',
            'symbols',
            'additive-symbols',
            'negative',
            'prefix',
            'suffix',
            'range',
            'pad',
            'speak-as',
            'fallback',

            // 10. List style
            'list-style',
            'list-style-type',
            'list-style-position',
            'list-style-image',

            // 11. Outline (it's not a part of the box model), but it is convenient have before border
            'outline',
            'outline-width',
            'outline-style',
            'outline-color',
            'outline-offset',

            // 12. Direction
            'writing-mode',
            'direction',
            'unicode-bidi',

            // 13. Border
            'border',
            'border-top',
            'border-right',
            'border-bottom',
            'border-left',
            'border-width',
            'border-top-width',
            'border-right-width',
            'border-bottom-width',
            'border-left-width',
            'border-style',
            'border-top-style',
            'border-right-style',
            'border-bottom-style',
            'border-left-style',
            'border-color',
            'border-top-color',
            'border-right-color',
            'border-bottom-color',
            'border-left-color',
            'border-image',
            'border-image-source',
            'border-image-slice',
            'border-image-width',
            'border-image-outset',
            'border-image-repeat',
            'border-radius',
            'border-top-left-radius',
            'border-top-right-radius',
            'border-bottom-left-radius',
            'border-bottom-right-radius',
            'box-shadow',

            // 14. Margin
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',

            // 15. Colors and Backgrounds
            'opacity',
            'color',
            'background',
            'background-image',
            'background-position',
            'background-size',
            'background-repeat',
            'background-attachment',
            'background-origin',
            'background-clip',
            'background-color',
            'background-blend-mode',

            // 16. Padding
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',

            // 17. Width and Height
            'min-block-size',
            'block-size',

            // 18. Width
            'max-width',
            'min-width',
            'width',

            // 19. Height
            'max-height',
            'min-height',
            'height',

            // 20. Zoom
            'max-zoom',
            'min-zoom',
            'zoom',
            'user-zoom',
            'orientation',

            // 21. Multi-column Layout
            'columns',
            'column-width',
            'column-count',
            'column-gap',
            'column-fill',
            'column-span',
            'column-rule',
            'column-rule-width',
            'column-rule-style',
            'column-rule-color',

            // 22. Animation
            'will-change',
            'backface-visibility',
            'perspective',
            'perspective-origin',
            'transform',
            'transform-origin',
            'transform-style',
            'transition',
            'transition-property',
            'transition-duration',
            'transition-timing-function',
            'transition-delay',
            'animation',
            'animation-name',
            'animation-duration',
            'animation-timing-function',
            'animation-delay',
            'animation-iteration-count',
            'animation-direction',
            'animation-fill-mode',
            'animation-play-state',

            // 23. Font
            'font',
            'font-style',
            'font-variant',
            'font-weight',
            'font-stretch',
            'font-size',
            'font-family',
            'src',
            'font-smoothing',
            'font-emphasize',
            'font-emphasize-position',
            'font-emphasize-style',
            'line-height',

            // 24. Text
            'hyphens',
            'letter-spacing',
            'tab-size',
            'text-align',
            'text-align-last',
            'text-combine-upright',
            'text-decoration',
            'text-decoration-color',
            'text-decoration-line',
            'text-decoration-style',
            'text-emphasis',
            'text-emphasis-color',
            'text-emphasis-position',
            'text-emphasis-style',
            'text-indent',
            'text-justify',
            'text-orientation',
            'text-overflow',
            'text-rendering',
            'text-shadow',
            'text-size-adjust',
            'text-stroke',
            'text-stroke-color',
            'text-stroke-width',
            'text-transform',
            'text-underline-position',
            'vertical-align',
            'white-space',
            'word-break',
            'word-spacing',
            'word-wrap',

            // 25. Page breaks
            'page-break-after',
            'page-break-before',
            'page-break-inside',
            'widows',
            'orphans',

            // 26. Filter Effects
            'filter',

            // 27. UI
            'appearance',
            'counter-increment',
            'counter-reset',
            'cursor',
            'pointer-events',
            'resize',
            'touch-action',
            'touch-callout',
            'user-select'
        ],
        {
            unspecified: 'bottom'
        }
    ],
    'order/declaration-block-properties-alphabetical-order': null,
    'order/declaration-block-property-groups-structure': null
};
