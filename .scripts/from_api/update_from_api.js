require("dotenv").config();
const axios = require("axios").create({
  baseURL: process.env.FA_API_URL,
  headers: { "x-api-key": process.env.FA_API_KEY },
});
const fs = require("fs");
const path = require("path");
const clone = require("lodash.clonedeep");

const keyMapping = {
  X_AllAge_EasterBonus4: "Observatory",
  X_AllAge_Expedition: "Temple_of_Relics",
  X_AllAge_Oracle: "Oracle_of_Delphi",
  X_ArcticFuture_Landmark1: "Gaea_Statue",
  X_ArcticFuture_Landmark2: "Arctic_Orangery",
  X_ArcticFuture_Landmark3: "Seed_Vault",
  X_BronzeAge_Landmark1: "Tower_of_Babel",
  X_BronzeAge_Landmark2: "Statue_of_Zeus",
  X_ColonialAge_Landmark1: "Frauenkirche_of_Dresden",
  X_ColonialAge_Landmark2: "Deal_Castle",
  X_ContemporaryEra_Landmark1: "Lotus_Temple",
  X_ContemporaryEra_Landmark2: "Innovation_Tower",
  X_EarlyMiddleAge_Landmark1: "Hagia_Sophia",
  X_EarlyMiddleAge_Landmark2: "Cathedral_of_Aachen",
  X_EarlyMiddleAge_Landmark3: "Galata_Tower",
  X_FutureEra_Landmark1: "The_Arc",
  X_FutureEra_Landmark2: "Rain_Forest_Project",
  X_HighMiddleAge_Landmark1: "St_Mark_s_Basilica",
  X_HighMiddleAge_Landmark3: "Notre_Dame",
  X_IndustrialAge_Landmark1: "Royal_Albert_Hall",
  X_IndustrialAge_Landmark2: "Capitol",
  X_IronAge_Landmark1: "Colosseum",
  X_IronAge_Landmark2: "Lighthouse_of_Alexandria",
  X_LateMiddleAge_Landmark1: "Saint_Basil_s_Cathedral",
  X_LateMiddleAge_Landmark3: "Castel_del_Monte",
  X_ModernEra_Landmark1: "Space_Needle",
  X_ModernEra_Landmark2: "Atomium",
  X_OceanicFuture_Landmark1: "Atlantis_Museum",
  X_OceanicFuture_Landmark2: "The_Kraken",
  X_OceanicFuture_Landmark3: "The_Blue_Galaxy",
  X_PostModernEra_Landmark1: "Cape_Canaveral",
  X_PostModernEra_Landmark2: "The_Habitat",
  X_ProgressiveEra_Landmark1: "Alcatraz",
  X_ProgressiveEra_Landmark2: "Chateau_Frontenac",
  X_SpaceAgeAsteroidBelt_Landmark1: "Space_Carrier",
  X_SpaceAgeMars_Landmark1: "Star_Gazer",
  X_SpaceAgeMars_Landmark2: "The_Virgo_Project",
  X_TomorrowEra_Landmark1: "Voyager_V1",
  X_TomorrowEra_Landmark2: "Truce_Tower",
  X_VirtualFuture_Landmark1: "Terracotta_Army",
  X_VirtualFuture_Landmark2: "Himeji_Castle",
};

const deleteFileIfExist = (path) => {
  if (fs.existsSync(path)) {
    fs.unlinkSync(path);
  }
};

async function main() {
  let result = {};

  for (const gbKey in keyMapping) {
    const r = await axios.get("bulk", {
      params: {
        id: gbKey,
        level: "all",
      },
    });
    result[keyMapping[gbKey]] = r.data.response;
  }

  if (process.env.SAVE_RESULT) {
    fs.writeFileSync(path.join(__dirname, "./all_gb_from_api.json"), JSON.stringify(result, null, 2));
  }
  updateGbData(result);
}

function updateGbData(gbData = require("./all_gb_from_api.json")) {
  for (const elt in gbData) {
    const gb = require(`../../lib/foe-data/gbs-data/${elt}`).default;

    for (let i = 0; i < gb.levels.length; i++) {
      const currentDataFromAPI = gbData[elt].find((elt) => elt.level === i + 1);
      if (!currentDataFromAPI) {
        continue;
      }
      if (!("gbReward" in gb)) {
        gb.gbReward = {};
      }

      if (gb.levels[i].cost !== currentDataFromAPI.total_fp) {
        console.error(
          `Level ${i + 1} of ${elt}: level cost defer between Sheet (${gb.levels[i].cost}) and API (${
            currentDataFromAPI.total_fp
          })`
        );
        continue;
      }

      currentDataFromAPI.patron_bonus = currentDataFromAPI.patron_bonus.sort((a, b) => {
        if (a.rank > b.rank) {
          return 1;
        }
        if (a.rank < b.rank) {
          return -1;
        }
        return 0;
      });

      if (gb.levels[i].reward && gb.levels[i].reward[0].fp !== currentDataFromAPI.patron_bonus[0].forgepoints) {
        console.error(
          `Level ${i + 1} of ${elt}: firt place FP reward defer between Sheet (${gb.levels[i].reward[0].fp}) and API (${
            currentDataFromAPI.patron_bonus[0].forgepoints
          })`
        );
        continue;
      }

      gb.gbReward[i + 1] = currentDataFromAPI.rewards;

      currentDataFromAPI.patron_bonus = currentDataFromAPI.patron_bonus.map((elt) => ({
        fp: elt.forgepoints,
        bp: elt.blueprints,
        medals: elt.medals,
      }));
      if (gb.levels[i].reward) {
        for (let j = 0; j < gb.levels[i].reward.length; j++) {
          if (currentDataFromAPI.patron_bonus[j]) {
            gb.levels[i].reward[j] = Object.assign(gb.levels[i].reward[j], currentDataFromAPI.patron_bonus[j]);
          }
        }
      } else {
        // When API have more levels than Sheet
        gb.levels[i].reward = currentDataFromAPI.patron_bonus;
      }
    } // End for each levels of current GB

    const finalGB = clone(gb);
    delete finalGB.levels;
    delete finalGB.age;

    let resultFile = `const ages = require("../ages.json");
const ageCost = require("../ages-cost/${
      gb.key === "Galata_Tower" ? "Galata" : gb.key === "Oracle_of_Delphi" ? "Oracle" : gb.age
    }.json");
${
  ["HighMiddleAges", "NoAge"].includes(gb.age) && !(gb.key === "Galata_Tower")
    ? 'const defaultCost = require("../ages-cost/defaultCost.json")'
    : ""
}

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = ${JSON.stringify(finalGB, null, 2).slice(0, -2)},\n  age: ages.${gb.age}.key,\n  levels: ${
      ["HighMiddleAges", "NoAge"].includes(gb.age) && !(gb.key === "Galata_Tower")
        ? "[...ageCost, ...defaultCost]"
        : "ageCost"
    }\n};
`;

    fs.writeFileSync(path.join(__dirname, `../../lib/foe-data/gbs-data/${elt}.js`), resultFile);

    if (gb.key === "Galata_Tower") {
      fs.writeFileSync(
        path.join(__dirname, `../../lib/foe-data/ages-cost/Galata.json`),
        JSON.stringify(gb.levels, null, 2)
      );
      deleteFileIfExist(path.join(__dirname, `../../lib/foe-data/ages-cost/Galata.js`));
    } else if (["HighMiddleAges", "NoAge"].includes(gb.age)) {
      const levels = clone(gb.levels);
      if (gb.key === "Oracle_of_Delphi") {
        fs.writeFileSync(
          path.join(__dirname, "../../lib/foe-data/ages-cost/Oracle.json"),
          JSON.stringify(levels.splice(0, 9), null, 2)
        );
        deleteFileIfExist(path.join(__dirname, "../../lib/foe-data/ages-cost/Oracle.js"));
        fs.writeFileSync(
          path.join(__dirname, "../../lib/foe-data/ages-cost/defaultCost.json"),
          JSON.stringify(levels, null, 2)
        );
      } else {
        fs.writeFileSync(
          path.join(__dirname, `../../lib/foe-data/ages-cost/${gb.age}.json`),
          JSON.stringify(levels.splice(0, 9), null, 2)
        );
        fs.writeFileSync(
          path.join(__dirname, "../../lib/foe-data/ages-cost/defaultCost.json"),
          JSON.stringify(levels, null, 2)
        );
        deleteFileIfExist(path.join(__dirname, `../../lib/foe-data/ages-cost/${gb.age}.js`));
      }
    } else {
      fs.writeFileSync(
        path.join(__dirname, `../../lib/foe-data/ages-cost/${gb.age}.json`),
        JSON.stringify(gb.levels, null, 2)
      );
      deleteFileIfExist(path.join(__dirname, `../../lib/foe-data/ages-cost/${gb.age}.js`));
    }
  } // End for each GB
  deleteFileIfExist(path.join(__dirname, `../../lib/foe-data/ages-cost/defaultCost.js`));
}

if (!process.env.USE_SAVE) {
  main().then(() => {
    console.log("Done!");
  });
} else {
  updateGbData();
}
