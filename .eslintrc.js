"use strict";

module.exports = {
  extends: [
    "plugin:itgalaxy/script",
    "plugin:itgalaxy/esnext",
    "plugin:itgalaxy/node"
  ],
  overrides: [
    // Tests
    {
      extends: ["plugin:itgalaxy/dirty", "plugin:itgalaxy/jest"],
      excludedFiles: ["**/*.md"],
      files: ["**/__tests__/**/*", "**/__mocks__/**/*"],
      rules: {
        // Test can be written with using ES module syntax or CommonJS module syntax
        "node/no-unsupported-features/es-syntax": [
          "error",
          { ignores: ["modules", "dynamicImport"] }
        ],

        // Allow to use `console` (example - `mocking`)
        "no-console": "off"
      }
    },

    // Markdown
    {
      extends: ["plugin:itgalaxy/dirty", "plugin:itgalaxy/markdown"],
      files: ["**/*.md"],
      rules: {
        "no-unused-vars": "off",
        "no-console": "off",
        "import/no-unresolved": "off",
        "node/no-unpublished-require": "off",
        "node/no-unpublished-import": "off"
      }
    }
  ],
  root: true
};
