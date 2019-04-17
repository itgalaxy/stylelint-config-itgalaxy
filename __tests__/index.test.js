import coreConfig from "..";
import cssConfig from "../css";
import scssConfig from "../scss";
import fs from "fs";
import path from "path";
import pify from "pify";
import stylelint from "stylelint";

const fixturesDir = path.resolve(__dirname, "fixtures");
const configPresets = {
  core: {
    config: coreConfig,
    testFile: path.join(fixturesDir, "foo.css")
  },
  css: {
    config: cssConfig,
    testFile: path.join(fixturesDir, "foo.css")
  },
  scss: {
    config: scssConfig,
    syntax: "scss",
    testFile: path.join(fixturesDir, "bar.scss")
  }
};

Object.keys(configPresets).forEach(configName => {
  test(`integration ${configName} configuration test`, () => {
    const { config, syntax, testFile } = configPresets[configName];

    return pify(fs.readFile)(testFile).then(code =>
      stylelint
        .lint({
          syntax,
          code: code.toString(),
          config
        })
        .then(data => {
          const { results } = data;

          expect(results[0].deprecations).toMatchSnapshot("deprecations");
          expect(results[0].invalidOptionWarnings).toMatchSnapshot(
            "invalidOptionWarnings"
          );
          expect(results[0].parseErrors).toMatchSnapshot("parseErrors");

          expect(results[0].warnings).toMatchSnapshot("warnings");

          return true;
        })
    );
  });
});
