'use strict';

module.exports = {
    'order/declaration-block-order': null,
    'order/declaration-block-properties-specified-order': [
        [
            // 1. Heading
            'content',
            'quotes',

            // 2. Positioning
            'position',
            'top',
            'right',
            'bottom',
            'left',
            'z-index',

            // 3. Box Model & Display
            'box-sizing',
            'display',
            'float',
            'clear',

            // 4. Visual effects
            'overflow',
            'overflow-y',
            'overflow-x',
            'overflow-scrolling',
            'clip',
            'clip-path',
            'mask',
            'visibility',

            // 5. Flexible Box Layout
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

             // 6. Outline (it's not a part of the box model), but it is convenient have before border
            'outline',
            'outline-color',
            'outline-style',
            'outline-width',
            'outline-offset',

            // 7. Tables
            'caption-side',
            'table-layout',
            'border-collapse',
            'border-spacing',
            'empty-cells',
            
            // 7. List style
            'list-style',
            'list-style-type',
            'list-style-position',
            'list-style-image',

            // 9. Border
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
            
            // 10. Margin
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            
            // 11. Colors and Backgrounds
            'opacity',
            'color',
            'background',
            'background-color',
            'background-image',
            'background-position',
            'background-size',
            'background-repeat',
            'background-origin',
            'background-clip',
            'background-attachment',
            'background-blend-mode',
            
            // 12. Padding
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
            
            // 13. Width
            'max-width',
            'min-width',
            'width',
            
            // 14. Height
            'max-height',
            'min-height',
            'height',
           
            // 15. Zoom
            'max-zoom',
            'min-zoom',
            'zoom',
            
            // 16. Direction
            'direction',
            'unicode-bidi',
            
            // 17. Multi-column Layout
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
            
            // 18. Animation
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
            
            // 19. Font
            'src',
            'font',
            'font-family',
            'font-style',
            'font-variant',
            'font-weight',
            'font-stretch',
            'font-size',
            'font-smoothing',
            'font-emphasize',
            'font-emphasize-position',
            'font-emphasize-style',
            
            'letter-spacing',
            'line-height',
            'word-spacing',
            
            
            // 'user-zoom',
            // 'orientation',
            // 'system',
            // 'symbols',
            // 'additive-symbols',
            // 'negative',
            // 'prefix',
            // 'suffix',
            // 'range',
            // 'pad',
            // 'speak-as',
            // 'fallback',
            // 'page-break-inside',
            // 'page-break-before',
            // 'page-break-after',
            // 'widows',
            // 'orphans',
            // 'writing-mode',
            
            // 20. Text
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
            'text-size-adjust',
            'text-emphasis',
            'text-emphasis-color',
            'text-emphasis-style',
            'text-emphasis-position',
            'vertical-align',
            'white-space',
            'hyphens',
            'tab-size',
            'word-wrap',
            'word-break',
            
            // 21. Filter Effects
            'filter',
            
            // 22. UI
            'counter-increment',
            'counter-reset',
            'appearance',
            'cursor',
            'resize'
            'pointer-events',
            'touch-action',
            'touch-callout',
            'user-select',
        ],
        {
            unspecified: 'bottom'
        }
    ],
    'order/declaration-block-properties-alphabetical-order': null,
    'order/declaration-block-property-groups-structure': null
};
