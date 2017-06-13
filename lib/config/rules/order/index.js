'use strict';

module.exports = {
    'order/order': null,
    'order/properties-order': [
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

            // 4. Box Model & Display
            'box-sizing',
            'display',
            'float',
            'clear',

            // 5. Shapes
            'shape-outside',
            'shape-image-threshold',
            'shape-margin',

            // 6. Visual effects
            'visibility',
            'overflow',
            'overflow-x',
            'overflow-y',
            'overflow-scrolling',
            'overflow-wrap',
            'scroll-behavior',
            'scroll-snap-type',
            'clip',
            'clip-path',
            'mask',

            // 7. Flexible Box Layout
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

            // 8. Tables
            'caption-side',
            'table-layout',
            'border-collapse',
            'border-spacing',
            'empty-cells',

            // 9. List style
            'list-style',
            'list-style-type',
            'list-style-position',
            'list-style-image',

            // 10. Multi-column Layout
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

            // 11. Grid
            'grid',
            'grid-area',
            'grid-template',
            'grid-template-rows',
            'grid-template-columns',
            'grid-template-areas',
            'grid-auto-rows',
            'grid-auto-columns',
            'grid-auto-flow',
            'grid-gap',
            'grid-row',
            'grid-row-gap',
            'grid-row-start',
            'grid-row-end',
            'grid-column',
            'grid-column-start',
            'grid-column-gap',
            'grid-column-end',

            // 12. Width
            'width',
            'min-width',
            'max-width',

            // 13. Height
            'height',
            'min-height',
            'max-height',

            // 14. Zoom
            'zoom',
            'min-zoom',
            'max-zoom',
            'user-zoom',
            'orientation',

            // 15. Sizing Images and Objects
            'object-fit',
            'object-position',

            // 16. Padding
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',

            // 17. Opacity, Colors and Backgrounds
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

            // 18. Border
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

            // 19. Margin
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',

            // 20. Outline
            'outline',
            'outline-width',
            'outline-style',
            'outline-color',
            'outline-offset',

            // 21. Font
            'font',
            'font-style',
            'font-variant',
            'font-weight',
            'font-stretch',
            'font-size',
            'font-size-adjust',
            'font-family',
            'font-emphasize',
            'font-emphasize-position',
            'font-emphasize-style',
            'font-kerning',
            'font-language-override',
            'font-smoothing',
            'font-synthesis',
            'font-variant',
            'font-variant-alternates',
            'font-variant-caps',
            'font-variant-east-asian',
            'font-variant-ligatures',
            'font-variant-numeric',
            'font-variant-position',
            'src',
            'line-height',

            // 22. Text alignment & decoration
            'writing-mode',
            'direction',
            'unicode-bidi',
            'unicode-range',
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

            // 23. Text spacing
            'white-space',
            'letter-spacing',
            'word-spacing',
            'word-wrap',
            'word-break',
            'line-break',
            'tab-size',
            'hyphens',

            // 24. Image Processing
            'image-orientation',
            'image-rendering',
            'image-resolution',

            // 25. Filter Effects
            'filter',

            // 26. Animation
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

            // 27. UI
            'appearance',
            'counter-increment',
            'counter-reset',
            'cursor',
            'pointer-events',
            'resize',
            'touch-action',
            'touch-callout',
            'user-select',

            // 28. Page breaks
            'page-break-after',
            'page-break-before',
            'page-break-inside',
            'break-inside',
            'widows',
            'orphans',

            // 29. Counter Styles
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
        ],
        {
            unspecified: 'ignore'
        }
    ],
    'order/properties-alphabetical-order': null
};
