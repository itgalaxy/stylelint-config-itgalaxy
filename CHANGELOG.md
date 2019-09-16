# Change Log

All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](http://semver.org).

## 55.0.0 - 2019-09-16

- Added: `unicode-bom` rule.
- Added: `scss/at-if-no-null` rule.
- Added: `scss/at-import-partial-extension` rule.
- Added: `scss/map-keys-quotes` rule.
- Added: `scss/dimension-no-non-numeric-values` rule.
- Chore: minimum required `stylelint` version is now `^11.0.0`.
- Chore: minimum required `stylelint-scss` version is now `^3.10.1`.
- Chore: minimum required `stylelint-order` version is now `^3.1.0`.

## 54.0.0 - 2019-06-03

- Added: `scss/at-each-key-value-single-line` rule.
- Added: `scss/function-quote-no-quoted-strings-inside` rule.
- Added: `scss/function-unquote-no-unquoted-strings-inside` rule.
- Changed: minimum required `stylelint-scss` version is now `^3.8.0`.

## 53.0.0 - 2019-04-19

- Changed: minimum required `stylelint-order` version is now `^3.0.0`.

## 52.0.0 - 2019-04-17

- Added: `at-rule-property-requirelist` rule.
- Changed: minimum required `stylelint` version is now `^10.0.1`.
- Changed: minimum required `stylelint-order` version is now `^2.2.1`.
- Changed: minimum required `stylelint` version is now `^3.6.0`.
- Changed: support only `nodejs` >= 8.9
- Changed: allow `ex` and `ch` units.
- Changed: disallow `dpcm` unit.

## 51.0.0 - 2018-11-21

- Chore: minimum required `stylelint-order` version is now `^2.0.0`.

## 50.0.0 - 2018-10-01

- Added: `no-empty-first-line` rule.
- Chore: minimum required `stylelint` version is now `^9.6.0`.

## 49.0.0 - 2018-08-10

- Chore: minimum required `stylelint-order` version is now `^1.0.0`.

## 48.0.0 - 2018-07-26

- Added: `linebreaks` rule.
- Chore: minimum required `stylelint` version is now `^9.4.0`.

## 47.0.0 - 2018-06-21

- Added: `keyframes-name-pattern` rule.
- Added: `scss/operator-no-newline-before` rule.
- Changed: disable `scss/operator-no-newline-after` rule.
- Changed: disable `scss/dollar-variable-colon-newline-after` rule.
- Changed: `scss/dollar-variable-colon-space-after` to `always`.
- Changed: `declaration-colon-space-after` to `always`.
- Changed: disable `declaration-colon-newline-after`.
- Revert: `scss/no-duplicate-dollar-variables` rule.

## 46.0.0 - 2018-05-04

- Added: `scss/no-duplicate-dollar-variables` rule.
- Chore: minimum required `stylelint-scss` version is now `^3.1.0`.

## 45.0.0 - 2018-02-13

- Chore: minimum required `stylelint-scss` version is now `^3.0.0`.

## 44.0.0 - 2018-02-13

- Chore: minimum required `stylelint` version is now `^9.0.0`.
- Chore: minimum required `stylelint-scss` version is now `^2.3.0`.

## 43.0.0 - 2017-12-05

- Chore: minimum required `stylelint-order` version is now `^0.8.0`.
- Chore: minimum required `nodejs` version is now `^6.9.0`.

## 42.0.0 - 2017-11-28

- Added: `font-family-no-missing-generic-family-keyword` rule.
- Added: `no-duplicate-at-import-rules` rule.
- Chore: minimum required `stylelint` version is now `^8.3.1`.

## 41.0.0 - 2017-09-25

- Chore **(Major update)**: minimum required `stylelint-order` version is now
  `^0.7.0`.

## 40.0.0 - 2017-08-28

- Added: `at-else-if-parentheses-space-before` rule.
- Added: `at-function-parentheses-space-before` rule.
- Added: `at-mixin-parentheses-space-before` rule.
- Chore **(Major update)**: minimum required `stylelint-scss` version is now
  `^2.1.0`.

## 39.0.0 - 2017-08-12

- Changed: `max-line-length` to `120`.
- Changed: ignore `comments` in `max-line-length` rule.

## 38.0.0 - 2017-08-11

- Added: `selector-max-combinators` rule.
- Added: `selector-max-type` rule.
- Added: `selector-max-class` rule.
- Added: `selector-max-attribute` rule.
- Added: `selector-max-compound-selectors` rule.
- Changed: `max-line-length` to `80`.
- Changed: `indentation` to `2`.
- Changed: `consecutive-duplicates` to
  `consecutive-duplicates-with-different-values` for
  `consecutive-duplicates-with-different-values` rule.
- Changed: `max-nesting-depth` to `5` and set `ignore` to `blockless-at-rules`.

## 37.0.0 - 2017-07-31

- Chore **(Major update)**: minimum required `stylelint-scss` version is now
  `^2.0.0`.

## 36.0.0 - 2017-07-18

- Chore **(Major update)**: minimum required `stylelint-order` version is now
  `^0.6.0`.

## 35.0.0 - 2017-07-17

- Removed **(Major update)**: `declaration-block-no-ignored-properties` rule.

## 34.0.0 - 2017-06-27

- Added **(Major update)**: `selector-max-id` rule.
- Added **(Major update)**: `selector-max-universal` rule.
- Added **(Major update)**: `break-inside` property in `order/properties-order`
  rule.
- Added **(Major update)**: `css` preset.
- Chore **(Major update)**: minimum required `stylelint` version is now
  `^7.12.0`.
- Removed **(Major update)**: `core` preset (using for build-in purpose).
- Removed **(Major update)**: `selector-no-universal` rule in favor
  `selector-max-universal`.
- Removed **(Major update)**: `selector-max-compound-selectors`.
- Removed **(Major update)**: `selector-no-qualifying-type` rule.

## 33.0.0 - 2017-06-10

- Chore **(Major update)**: minimum required `stylelint-order` version is now
  `^0.5.0`.
- Chore **(Major update)**: minimum required `stylelint` version is now
  `^7.11.0`.

## 32.0.0 - 2017-05-30

- Removed **(Major update)**: `stylelint-disable-reason` rule.

## 31.0.0 - 2017-04-04

- Added **(Major update)**: `at-rule-semicolon-space-before` rule.
- Chore **(Major update)**: minimum required `stylelint` version is now
  `^7.10.0`.

## 30.0.0 - 2017-03-13

- Chore **(Major update)**: minimum required `stylelint-order` version is now
  `^0.4.0`.

## 29.0.0 - 2017-03-03

- Changed: properties order in
  `order/declaration-block-properties-specified-order`.

## 28.0.0 - 2017-03-03

- Changed: properties order in
  `order/declaration-block-properties-specified-order`.

## 27.0.0 - 2017-03-02

- Changed: properties order in
  `order/declaration-block-properties-specified-order`.

## 26.0.0 - 2017-03-02

- Changed: set option `unspecified` to `ignore` in
  `order/declaration-block-properties-specified-order`.
- Changed: properties orderin
  `order/declaration-block-properties-specified-order`.

## 25.0.0 - 2017-02-28

- Changed: properties order in
  `order/declaration-block-properties-specified-order`.

## 24.0.0 - 2017-02-22

- Changed: pattern in `scss/at-function-pattern`.
- Changed: pattern in `scss/at-mixin-pattern`.
- Changed: pattern in `scss/dollar-variable-pattern`.
- Changed: pattern in `scss/percent-placeholder-pattern`.
- Changed: pattern in `custom-media-pattern`.
- Changed: pattern in `custom-property-pattern`.
- Changed: pattern in `selector-id-pattern`.
- Changed: pattern in `selector-class-pattern`.

## 23.0.0 - 2017-02-20

- Chore **(Major update)**: minimum required `stylelint` version is now
  `^7.9.0`.
- Chore **(Major update)**: minimum required `stylelint-order` version is now
  `^0.3.0`.

## 22.0.0 - 2017-02-11

- Changed: deleted characters length limit from `custom-media-pattern`.
- Changed: deleted characters length limit from `custom-property-pattern`.
- Changed: deleted characters length limit from `selector-class-pattern`.
- Changed: deleted characters length limit from `selector-id-pattern`.
- Changed: deleted characters length limit from `scss/at-function-pattern`.
- Changed: deleted characters length limit from `scss/at-mixin-pattern`.
- Changed: deleted characters length limit from `scss/dollar-variable-pattern`.
- Changed: deleted characters length limit from
  `scss/percent-placeholder-pattern`.

## 21.0.0 - 2017-02-11

- Changed: moved `stylelint-order` rules to `core` preset.
- Changed: set `resolveNestedSelectors` to `true` in `selector-class-pattern`
  rule.

## 20.0.0 - 2017-02-02

- Added **(Major update)**: `order/declaration-block-properties-specified-order`
  rule.
- Added **(Major update)**: `rule-empty-line-before` rule.
- Added **(Major update)**: `time-min-milliseconds` rule.
- Added **(Major update)**: `after-same-name` in `except` option into
  `at-rule-empty-line-before` rule.
- Chore **(Major update)**: minimum required `stylelint` version is now
  `^7.8.0`.
- Fixed: removed `stylelint-scss` from `dependencies`.
- Removed **(Major update)**: `block-no-single-line` rule.
- Removed **(Major update)**: `time-no-imperceptible` rule.
- Removed **(Major update)**: `no-browser-hacks` rule.
- Removed **(Major update)**: `no-indistinguishable-colors` rule.
- Removed **(Major update)**: `no-unsupported-browser-features` rule.
- Removed **(Major update)**: `custom-property-no-outside-root` rule.
- Removed **(Major update)**: `root-no-standard-properties` rule.
- Removed **(Major update)**: `selector-root-no-composition` rule.
- Removed **(Major update)**: `media-feature-no-missing-punctuation` rule.
- Removed **(Major update)**: `selector-no-empty` rule.
- Removed **(Major update)**: `declaration-block-properties-order` rule.

## 19.0.0 - 2016-12-20

- Chore **(Major update)**: minimum required `stylelint` version is now
  `^7.7.0`.

## 18.0.0 - 2016-12-12

- Added **(Major update)**: `scss/declaration-nested-properties` rule.
- Added **(Major update)**: `scss/at-else-closing-brace-space-after` rule.
- Added **(Major update)**: `scss/at-else-empty-line-before`.
- Chore **(Major update)**: minimum required `stylelint-scss` version is now
  `^1.4.1`.

## 17.0.0 - 2016-12-12

- Added **(Major update)**: `scss/at-else-closing-brace-newline-after` rule.
- Added **(Major update)**: `scss/at-if-closing-brace-newline-after` rule.
- Added **(Major update)**: `scss/at-if-closing-brace-space-after` rule.
- Chore: minimum required `eslint` version is now `^3.12.0`.
- Chore: minimum required `eslint-plugin-itgalaxy` version is now `^33.0.0`.
- Chore: minimum required `eslint-plugin-react` version is now `^6.8.0`.
- Chore **(Major update)**: minimum required `stylelint-scss` version is now
  `^1.4.0`.

## 16.0.0 - 2016-11-28

- Added **(Major update)**: `transition-property` with `all` value in
  `declaration-property-value-blacklist` rule.
- Changed: `block-no-single-line` rule now have `null` option.
- Changed: `block-opening-brace-newline-after` rule now have `always` option.
- Changed: `block-opening-brace-space-after` rule now have `null` option.
- Changed: `declaration-block-semicolon-newline-after` rule now have `always`
  option.
- Changed: `declaration-block-semicolon-space-after` rule now have `null`
  option.
- Changed: `declaration-block-single-line-max-declarations` rule now have `null`
  option.
- Chore: minimum required `eslint` version is now `^3.11.0`.
- Chore: minimum required `eslint-plugin-itgalaxy` version is now `^31.0.0`.
- Chore: minimum required `nyc` version is now `^10.0.0`.

## 15.0.0 - 2016-11-21

- Added **(Major update)**: `font-family-no-duplicate-names` rule.
- Chore: minimum required `ava` version is now `^0.16.0`.
- Chore: minimum required `eslint` version is now `^3.5.0`.
- Chore: minimum required `eslint-plugin-ava` version is now `^3.0.0`.
- Chore: minimum required `eslint-plugin-import` version is now `^2.0.0`.
- Chore: minimum required `eslint-plugin-jsx-a11y` version is now `^2.2.0`.
- Chore: minimum required `eslint-plugin-lodash` version is now `^2.1.0`.
- Chore: minimum required `eslint-plugin-node` version is now `^2.0.0`.
- Chore: minimum required `eslint-plugin-itgalaxy` version is now `^23.0.0`.
- Chore: minimum required `eslint-plugin-promise` version is now `^3.0.0`.
- Chore: minimum required `eslint-plugin-react` version is now `^6.3.0`.
- Chore: minimum required `nyc` version is now `^8.3.0`.
- Chore: minimum required `remark-preset-lint-itgalaxy` version is now `^2.0.0`.
- Chore **(Major update)**: minimum required `stylelint` version is now
  `^7.5.0`.
- Chore: added `nodejs` 7 version on travis CI build.

## 14.0.0 - 2016-10-19

- Added **(Major update)**: Rule `selector-no-empty
- Chore **(Major upgrade)**: minimum required `stylelint` version is now
  `^7.4.2`.
- Chore: minimum required `eslint-plugin-itgalaxy` version is now `^22.0.0`.
- Chore: minimum required `eslint-plugin-lodash` version is now `^1.10.0`.
- Chore: Use `^` instead `~` version is now `package-schema` and `ajv-cli`.

## 13.0.0 - 2016-10-10

- Added **(Major update)**: rule `media-feature-name-blacklist`.
- Chore **(Major upgrade)**: minimum required `stylelint` version is now
  `^7.3.1`. Version `7.4.0`, `7.4.1` is buggy.
- Chore: minimum required `remark-preset-lint-itgalaxy` version is now `^1.0.0`.
- Chore: minimum required `ajv-cli` version is now `^0.9.0`.
- Chore: minimum required `eslint-plugin-import` version is now `^1.16.0`.
- Chore: minimum required `eslint-plugin-promise` version is now `^1.16.0`.
- Chore: minimum required `eslint-plugin-itgalaxy` version is now `^18.0.0`.
- Chore: minimum required `eslint-plugin-promise` version is now `^2.0.0`.
- Chore: Rename `eslint-plugin-xo` to `eslint-plugin-unicorn`.

## 12.0.0 - September 21, 20016

- Chore: improve `README.md`.
- Chore: use right versions for `eslint-*` plugins.
- Chore: fix link `dependecies` and `devDependencies` badges.
- Chore: minimum required `eslint` version is now `^3.4.0`.
- Chore: minimum required `eslint-plugin-import` version is now `^14.0.0`.
- Chore: minimum required `eslint-plugin-itgalaxy` version is now `^13.0.0`.
- Chore: minimum required `eslint-plugin-react` version is now `^6.2.0`.
- Chore: minimum required `eslint-plugin-xo` version is now `^0.5.0`.
- Chore: minimum required `npm-run-all` version is now `^3.0.0`.
- Chore: minimum required `nyc` version is now `^8.1.0`.
- Chore **(Major update)**: minimum required `stylelint` version is now
  `^7.2.0`. Version `7.3.0` is buggy.

## 11.0.0

- Added **(Major update)**: `declaration-block-no-redundant-longhand-properties`
  rule.
- Added **(Major update)**: `function-url-scheme-whitelist` rule.
- Added **(Major update)**: `media-feature-name-no-unknown` rule.
- Added **(Major update)**: `selector-descendant-combinator-no-non-space` rule.
- Added **(Major update)**: `value-list-max-empty-lines` rule.
- Added: `composes` to `ignoreProperties` in `property-no-unknown` rule.
- Chore: use `^` instead `~` for `babel-preset-es2015` package.
- Chore: use `^` instead `~` version is now `babel-preset-stage-0` package.
- Chore: minimum required `eslint-plugin-itgalaxy` version is now `^11.0.0`.
- Chore **(Major update)**: minimum required `stylelint` version is now
  `^7.1.0`.
- Chore: improve tests.
- Fixed: `color-named` now ignores `composes` properties.

## 10.0.0

- Changed: disable `scss/partial-no-import` rule.
- Chore: add all `peerDependencies` for `eslint-plugin-itgalaxy`.
- Chore: minimum required `remark-cli` version is now `^1.0.0`.
- Chore: minimum required `remark-lint` version is now `^4.0.0`.
- Chore: use `remark-preset-lint-itgalaxy` instead
  `remark-lint-config-itgalaxy`.

## 9.0.0

- Changed: enable `no-browser-hacks` rule in `core` preset.
- Changed: disable `no-browser-hacks` rule in `scss` preset.
- Chore **(Major update)**: merge package `stylelint-config-itgalaxy` with
  `stylelint-config-itgalaxy-scss`.
- Chore: use `Object.assign` instead `merge` package.
- Chore: `devDependencies` and `peerDependencies` now have equals version of
  packages.
- Chore: update the minimal version of `npm-run-all` version is now `2.3.0`.
- Fixed: add `content` to `ignoreAtRules` in `at-rule-no-unknown` rule in `scss`
  preset.

## 8.0.0

- Changed(revert): use option `blockless-group` instead
  `blockless-after-same-name-blockless` from `except` in
  `at-rule-empty-line-before` rule.

## 7.0.0

- Added **(Major update)**: `block-closing-brace-empty-line-before` rule.
- Added **(Major update)**: `comment-no-empty` rule.
- Added **(Major update)**: `custom-property-empty-line-before` rule.
- Added **(Major update)**: `declaration-empty-line-before` rule.
- Added **(Major update)**: `media-feature-name-case` rule.
- Changed: use option `blockless-after-same-name-blockless` instead
  `blockless-group` from `except` in `at-rule-empty-line-before` rule.
- Chore: add rule `selector-nested-pattern` for tracking.
- Chore: add rule `selector-pseudo-class-blacklist` for tracking.
- Chore: add rule `selector-pseudo-class-whitelist` for tracking.
- Chore: minimum required `eslint-plugin-itgalaxy` version is now `^6.0.0`.
- Removed: option `all-nested` from `ignore` in `at-rule-empty-line-before`
  rule.

## 6.0.0

- Changed: `comment-word-blacklist` now get primary option as not nested array.

## 5.0.0

- Added **(Major update)**: `property-no-unknown` rule.
- Chore **(Major update)**: minimum required `stylelint` version is now
  `^7.0.0`.
- Changed: rename `no-missing-eof-newline` to
  `no-missing-end-of-source-newline`.
- Changed: rename `media-query-parentheses-space-inside` to
  `media-feature-parentheses-space-inside`.

## 4.0.0

- Removed: support node 0.12.

## 3.0.0

- Added **(Major update)**: `function-url-no-scheme-relative` rule.
- Added **(Major update)**: `selector-attribute-quotes` rule.
- Added **(Major update)**: new rule `at-rule-no-unknown`.
- Added **(Major update)**: new rule `no-empty-source`.

## 2.1.2

- Fixed: add to `files` package.json directory 'lib'.

## 2.1.1

- Fixed: move `merge` from `devDependencies` to `dependencies`.

## 2.1.0

- Chore: refactoring, internal release.

## 2.0.0

- Changed: `devDependencies` and `peerDependencies` semver.

## 1.0.2

- Chore: update `devDependencies` in package.json.
- Chore **(Major update)**: update `stylelint`.

## 1.0.1

- Chore: integrate `eslint-plugin-itgalaxy` and fix eslint errors.

## 1.0.0

- Initial public release.
