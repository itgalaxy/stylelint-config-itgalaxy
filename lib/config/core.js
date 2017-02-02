'use strict';

const color = require('./rules/color');
const fontFamily = require('./rules/font-family');
const fontWeight = require('./rules/font-weight');
const functionRules = require('./rules/function');
const number = require('./rules/number');
const string = require('./rules/string');
const length = require('./rules/length');
const time = require('./rules/time');
const unit = require('./rules/unit');
const value = require('./rules/value');
const valueList = require('./rules/value-list');
const customProperty = require('./rules/custom-property');
const shorthandProperty = require('./rules/shorthand-property');
const property = require('./rules/property');
const keyframeDeclaration = require('./rules/keyframe-declaration');
const declaration = require('./rules/declaration');
const declarationBlock = require('./rules/declaration-block');
const block = require('./rules/block');
const selector = require('./rules/selector');
const selectorList = require('./rules/selector-list');
const rule = require('./rules/rule');
const mediaFeature = require('./rules/media-feature');
const customMedia = require('./rules/custom-media');
const mediaQueryList = require('./rules/media-query-list');
const atRule = require('./rules/at-rule');
const stylelintDisableComment = require('./rules/stylelint-disable-comment');
const comment = require('./rules/comment');
const general = require('./rules/general');

module.exports = {
    rules: Object.assign(
        {},
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
        rule,
        mediaFeature,
        customMedia,
        mediaQueryList,
        atRule,
        stylelintDisableComment,
        comment,
        general
    )
};
