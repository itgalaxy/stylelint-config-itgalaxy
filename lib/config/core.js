'use strict';

const coreRules = require('./rules/core');
const orderRules = require('./rules/order');

module.exports = {
    plugins: ['stylelint-order'],
    rules: Object.assign({}, coreRules, orderRules)
};
