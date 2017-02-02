'use strict';

const color = require('./color');
const fontFamily = require('./font-family');
const fontWeight = require('./font-weight');
const functionRules = require('./function');
const number = require('./number');
const string = require('./string');
const length = require('./length');
const time = require('./time');
const unit = require('./unit');
const value = require('./value');
const valueList = require('./value-list');
const customProperty = require('./custom-property');
const shorthandProperty = require('./shorthand-property');
const property = require('./property');
const keyframeDeclaration = require('./keyframe-declaration');
const declaration = require('./declaration');
const declarationBlock = require('./declaration-block');
const block = require('./block');
const selector = require('./selector');
const selectorList = require('./selector-list');
const rule = require('./rule');
const mediaFeature = require('./media-feature');
const customMedia = require('./custom-media');
const mediaQueryList = require('./media-query-list');
const atRule = require('./at-rule');
const stylelintDisableComment = require('./stylelint-disable-comment');
const comment = require('./comment');
const general = require('./general');

module.exports = Object.assign(
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
);
