import util from "util";
import fs from "fs";
import path from "path";
import stylelint from "stylelint";
import scssConfig from "../scss";
import cssConfig from "../css";
import coreConfig from "..";

const fixturesDir = path.resolve(__dirname, "fixtures");
const presets = {
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

const readFile = util.promisify(fs.readFile);

describe("presets", () => {
  Object.keys(presets).forEach(configName => {
    it(`integration "${configName}" configuration test`, () => {
      const { config, syntax, testFile } = presets[configName];

      return readFile(testFile).then(code =>
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
});
