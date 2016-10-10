# stylelint-config-itgalaxy

[![NPM version](https://img.shields.io/npm/v/stylelint-config-itgalaxy.svg)](https://www.npmjs.org/package/stylelint-config-itgalaxy) 
[![Travis Build Status](https://img.shields.io/travis/itgalaxy/stylelint-config-itgalaxy/master.svg?label=build)](https://travis-ci.org/itgalaxy/stylelint-config-itgalaxy) 
[![dependencies Status](https://david-dm.org/itgalaxy/stylelint-config-itgalaxy/status.svg)](https://david-dm.org/itgalaxy/stylelint-config-itgalaxy) 
[![devDependencies Status](https://david-dm.org/itgalaxy/stylelint-config-itgalaxy/dev-status.svg)](https://david-dm.org/itgalaxy/stylelint-config-itgalaxy?type=dev)

> itgalaxy org's shareable config for stylelint (`css` and `scss`).

For consistent `css` and `scss` code across itgalaxy's repos.

## Installation

```bash
npm install stylelint-config-itgalaxy
```

## Usage

If you've installed `stylelint-config-itgalaxy` locally within your project, just set your `stylelint` config to:

```json
{
  "extends": "stylelint-config-itgalaxy"
}
```

For `scss` use:

```json
{
  "extends": "stylelint-config-itgalaxy/scss"
}
```

If you've globally installed `stylelint-config-itgalaxy` using the `-g` flag, 
then you'll need to use the absolute path to `stylelint-config-itgalaxy` in your config e.g.

```json
{
  "extends": "/absolute/path/to/stylelint-config-itgalaxy"
}
```

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to change the `indentation` to tabs, turn off the `number-leading-zero` rule, 
change the `property-no-unknown` rule to use its `ignoreAtRules` option and add the `unit-whitelist` rule:

```json
{
  "extends": "stylelint-config-itgalaxy",
  "rules": {
    "indentation": "tab",
    "number-leading-zero": null,
    "property-no-unknown": [ true, {
      "ignoreProperties": [
        "composes"
      ]
    }],
    "unit-whitelist": ["em", "rem", "s"]
  }
}
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
