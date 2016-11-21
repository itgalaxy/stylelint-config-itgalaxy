# Change Log

All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](http://semver.org/).

# 15.0.0 - 2016-11-21

- Added **(Major update)**: `font-family-no-duplicate-names` rule.
- Chore: update a minimal version of `ava` from `0.16.0` to `0.17.0`.
- Chore: update a minimal version of `ava` from `3.5.0` to `3.10.0`.
- Chore: update a minimal version of `eslint-plugin-ava` from `3.0.0` to `4.0.0`.
- Chore: update a minimal version of `eslint-plugin-import` from `2.0.0` to `2.2.0`.
- Chore: update a minimal version of `eslint-plugin-jsx-a11y` from `2.2.0` to `3.0.0`.
- Chore: update a minimal version of `eslint-plugin-lodash` from `2.1.0` to `2.2.0`.
- Chore: update a minimal version of `eslint-plugin-node` from `2.0.0` to `3.0.0`.
- Chore: update a minimal version of `eslint-plugin-itgalaxy` from `23.0.0` to `30.0.0`.
- Chore: update a minimal version of `eslint-plugin-promise` from `3.0.0` to `3.4.0`.
- Chore: update a minimal version of `eslint-plugin-react` from `6.3.0` to `6.7.0`.
- Chore: update a minimal version of `nyc` from `8.3.0` to `9.0.0`.
- Chore: update a minimal version of `remark-preset-lint-itgalaxy` from `2.0.0` to `3.0.0`.
- Chore **(Major update)**: update a minimal version of `stylelint` from `7.5.0` to `7.6.0`.
- Chore: added `nodejs` 7 version on travis CI build.

# 14.0.0 - 2016-10-19

- Added **(Major update)**: Rule `selector-no-empty
- Chore **(Major upgrade)**: Update a minimal version of `stylelint` from `7.4.2` to `7.5.0`.
- Chore: update a minimal version of `eslint-plugin-itgalaxy` from `22.0.0` to `23.0.0`.
- Chore: update a minimal version of `eslint-plugin-lodash` from `1.10.0` to `2.1.0`.
- Chore: Use `^` instead `~` from `package-schema` and `ajv-cli`.

# 13.0.0 - 2016-10-10

- Added **(Major update)**: rule `media-feature-name-blacklist`.

- Chore **(Major upgrade)**: Update a minimal version of `stylelint` from `7.3.1` to `7.4.2`. 
  Version `7.4.0`, `7.4.1` is buggy.

- Chore: Update a minimal version of `remark-preset-lint-itgalaxy` from `1.0.0` to `2.0.0`.

- Chore: Update a minimal version of `ajv-cli` from `0.9.0` to `1.1.0`.

- Chore: Update a minimal version of `eslint-plugin-import` from `1.16.0` to `2.0.0`.

- Chore: Update a minimal version of `eslint-plugin-promise` from `1.16.0` to `2.0.0`. 

- Chore: Update a minimal version of `eslint-plugin-itgalaxy` from `18.0.0` to `22.0.0`. 

- Chore: Update a minimal version of `eslint-plugin-promise` from `2.0.0` to `3.0.0`.

- Chore: Rename `eslint-plugin-xo` to `eslint-plugin-unicorn`.

# 12.0.0 - September 21, 20016

- Chore: improve `README.md`.

- Chore: use right versions for `eslint-*` plugins.

- Chore: fix link `dependecies` and `devDependencies` badges.

- Chore: update a minimal version of `eslint` from `3.4.0` to `3.5.0`.

- Chore: update a minimal version of `eslint-plugin-import` from `14.0.0` to `15.0.0`.

- Chore: update a minimal version of `eslint-plugin-itgalaxy` from `13.0.0` to `18.0.0`.

- Chore: update a minimal version of `eslint-plugin-react ` from `6.2.0` to `6.3.0`.

- Chore: update a minimal version of `eslint-plugin-xo` from `0.5.0` to `1.0.0`.

- Chore: update a minimal version of `npm-run-all` from `3.0.0` to `3.1.0`.

- Chore: update a minimal version of `nyc` from `8.1.0` to `8.3.0`.

- Chore **(Major update)**: update a minimal version of `stylelint` from `7.2.0` to `7.3.1`. 
  Version `7.3.0` is buggy. 

# 11.0.0

- Added **(Major update)**: `declaration-block-no-redundant-longhand-properties` rule.
- Added **(Major update)**: `function-url-scheme-whitelist` rule.
- Added **(Major update)**: `media-feature-name-no-unknown` rule.
- Added **(Major update)**: `selector-descendant-combinator-no-non-space` rule.
- Added **(Major update)**: `value-list-max-empty-lines` rule.
- Added: `composes` to `ignoreProperties` in `property-no-unknown` rule.
- Chore: use `^` instead `~` for `babel-preset-es2015` package.
- Chore: use `^` instead `~` from `babel-preset-stage-0` package.
- Chore: update a minimal version of `eslint-plugin-itgalaxy` from `11.0.0` to `13.0.0`.
- Chore **(Major update)**: update a minimal version of `stylelint` from `7.1.0` to `7.2.0`.
- Chore: improve tests.
- Fixed: `color-named` now ignores `composes` properties.

# 10.0.0

- Changed: disable `scss/partial-no-import` rule.
- Chore: add all `peerDependencies` for `eslint-plugin-itgalaxy`.
- Chore: update a minimal version of `remark-cli` from `1.0.0` to `2.0.0`.
- Chore: update a minimal version of `remark-lint` from `4.0.0` to `5.0.0`.
- Chore: use `remark-preset-lint-itgalaxy` instead `remark-lint-config-itgalaxy`.

# 9.0.0

- Changed: enable `no-browser-hacks` rule in `core` preset.
- Changed: disable `no-browser-hacks` rule in `scss` preset.
- Chore **(Major update)**: merge package `stylelint-config-itgalaxy` with `stylelint-config-itgalaxy-scss`.
- Chore: use `Object.assign` instead `merge` package.
- Chore: `devDependencies` and `peerDependencies` now have equals version of packages.
- Chore: update the minimal version of `npm-run-all` from `2.3.0` to `3.0.0`.
- Fixed: add `content` to `ignoreAtRules` in `at-rule-no-unknown` rule in `scss` preset.

# 8.0.0

- Changed(revert): use option `blockless-group` instead `blockless-after-same-name-blockless` from `except` 
  in `at-rule-empty-line-before` rule.

# 7.0.0

- Added **(Major update)**: `block-closing-brace-empty-line-before` rule.

- Added **(Major update)**: `comment-no-empty` rule.

- Added **(Major update)**: `custom-property-empty-line-before` rule.

- Added **(Major update)**: `declaration-empty-line-before` rule.

- Added **(Major update)**: `media-feature-name-case` rule.

- Changed: use option `blockless-after-same-name-blockless` instead `blockless-group` from `except` 
  in `at-rule-empty-line-before` rule.

- Chore: add rule `selector-nested-pattern` for tracking.

- Chore: add rule `selector-pseudo-class-blacklist` for tracking.

- Chore: add rule `selector-pseudo-class-whitelist` for tracking.

- Chore: update version `eslint-plugin-itgalaxy` to `6.0.0`.

- Removed: option `all-nested` from `ignore` in `at-rule-empty-line-before` rule.

# 6.0.0

- Changed: `comment-word-blacklist` now get primary option as not nested array.

# 5.0.0

- Added **(Major update)**: `property-no-unknown` rule.
- Chore **(Major update)**: update version `stylelint` to `7.0.0`.
- Changed: rename `no-missing-eof-newline` to `no-missing-end-of-source-newline`.
- Changed: rename `media-query-parentheses-space-inside` to `media-feature-parentheses-space-inside`.

# 4.0.0

- Removed: support node 0.12.

# 3.0.0

- Added **(Major update)**: `function-url-no-scheme-relative` rule.
- Added **(Major update)**: `selector-attribute-quotes` rule.
- Added **(Major update)**: new rule `at-rule-no-unknown`.
- Added **(Major update)**: new rule `no-empty-source`.

# 2.1.2

- Fixed: add to `files` package.json directory 'lib'.

# 2.1.1

- Fixed: move `merge` from `devDependencies` to `dependencies`.

# 2.1.0

- Chore: refactoring, internal release.

# 2.0.0

- Changed: `devDependencies` and `peerDependencies` semver.

# 1.0.2

- Chore: update `devDependencies` in package.json.
- Chore **(Major update)**: update `stylelint`.

# 1.0.1

- Chore: integrate `eslint-plugin-itgalaxy` and fix eslint errors.

# 1.0.0

- Initial public release.
