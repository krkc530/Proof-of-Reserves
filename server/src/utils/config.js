import _ from "lodash";
import dotenv from "dotenv-flow";

const configFromDotenv = _.get(dotenv.config(), "parsed");
const configFromEnv = process.env || {};

const config = _.assign(
  {},
  configFromDotenv,
  _.pick(configFromEnv, _.keysIn(configFromDotenv))
);

export default config;
