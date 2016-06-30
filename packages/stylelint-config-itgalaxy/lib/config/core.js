/* eslint-disable */

'use strict';

var color = require('./rules/color');
var fontFamily = require('./rules/font-family');
var fontWeight = require('./rules/font-weight');
var functionRules = require('./rules/function');
var number = require('./rules/number');
var string = require('./rules/string');
var length = require('./rules/length');
var time = require('./rules/time');
var unit = require('./rules/unit');
var value = require('./rules/value');
var valueList = require('./rules/value-list');
var customProperty = require('./rules/custom-property');
var shorthandProperty = require('./rules/shorthand-property');
var property = require('./rules/property');
var keyframeDeclaration = require('./rules/keyframe-declaration');
var declaration = require('./rules/declaration');
var declarationBlock = require('./rules/declaration-block');
var block = require('./rules/block');
var selector = require('./rules/selector');
var selectorList = require('./rules/selector-list');
var rootRule = require('./rules/root-rule');
var rule = require('./rules/rule');
var mediaFeature = require('./rules/media-feature');
var customMedia = require('./rules/custom-media');
var mediaQuery = require('./rules/media-query');
var mediaQueryList = require('./rules/media-query-list');
var atRule = require('./rules/at-rule');
var stylelintDisableComment = require('./rules/stylelint-disable-comment');
var comment = require('./rules/comment');
var general = require('./rules/general');
var merge = require('merge');

module.exports = {
    rules: merge(
        color,
        fontFamily,
        fontWeight,
        functionRules,
        number,
        string,
        length,
        time,
        unit,
        value,
        valueList,
        customProperty,
        shorthandProperty,
        property,
        keyframeDeclaration,
        declaration,
        declarationBlock,
        block,
        selector,
        selectorList,
        rootRule,
        rule,
        mediaFeature,
        customMedia,
        mediaQuery,
        mediaQueryList,
        atRule,
        stylelintDisableComment,
        comment,
        general
    )
};
