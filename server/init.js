import fs from "fs";
import config from "./src/config.js";
import { initConfig } from "./src/utils/initConfig.js";

await initConfig();

fs.writeFileSync(
  config.PATH.homePath + "src/config.js",
  "export default " + JSON.stringify(config, null, 2)
);
