const { join } = require("path");
const { existsSync, writeFileSync, mkdirSync } = require("fs");
const hasha = require("hasha");

import * as campaignCost from "../../lib/foe-data/campaign-cost";
import * as gbs from "../../lib/foe-data/gbs";
import * as goods from "../../lib/foe-data/goods";

const mapFiles = {
  "campaign-cost": campaignCost,
  gbs,
  goods
};

module.exports = async function () {
  const { rootDir, generate: { dir: generateDir } } = this.options;
  const dirPath = "foe-data";
  const filesName = ["campaign-cost", "gbs", "goods"];
  /**
   * Contains @filesName parsed and with a content hash
   * @type {{{content: string, hash: string}}}
   */
  const filesContent = {};

  const getEnvName = (name) => `FOE_DATA_API_${name.toUpperCase().replace(/-/g, "_")}`;
  /**
   * Given a data, it compute the associated hash (sha512).
   *
   * @param data {string} Data for which we want to compute the hash
   * @returns {string} Return the first 7 characters (like hash of nuxt build) of the hash.
   */
  const getHash = (data) => hasha(data, {
    algorithm: "sha512"
  }).slice(0, 7);

  // generate foe-data in dist
  this.nuxt.hook('generate:done', async () => {
    for (const fileName of filesName) {
      if (!existsSync(join(generateDir, dirPath))) {
        mkdirSync(join(generateDir, dirPath));
      }

      const generateFilePath = join(generateDir, dirPath, `${fileName}-${filesContent[fileName].hash}.json`);
      writeFileSync(generateFilePath, filesContent[fileName].content);
    }
  });

  // render foe-data via SSR
  this.nuxt.hook('render:setupMiddleware', () => {
    for (const fileName of filesName) {
      let obj = mapFiles[fileName];
      if ("default" in obj) {
        obj = obj.default;
      }
      filesContent[fileName] = {
        content: JSON.stringify(obj)
      };
      // The use of the hash is to invalid old data cached by CDN.
      filesContent[fileName].hash = getHash(filesContent[fileName].content);

      // Set $config.FOE_DATA_API_<variable-name>
      this.nuxt.options.publicRuntimeConfig[getEnvName(fileName)] = `/${dirPath}/${fileName}-${filesContent[fileName].hash}.json`;
      this.nuxt.server.useMiddleware({
        path: `${dirPath}/${fileName}-${filesContent[fileName].hash}.json`,
        async handler(req, res) {
          res.setHeader('Content-Type', 'application/json');
          res.end(filesContent[fileName].content);
        }
      })
    }
  })
};
