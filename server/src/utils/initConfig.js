import config from "../config.js";

const DEFAULT_DB_PASSWD = "1234";

export const initConfig = () => {
  config.PATH.homePath = process.env.PWD + "/";
  config.PATH.proofPath = config.PATH.homePath + "napirs-legogroth16/json/";
  config.DB.password = process.env.DB_PASSWORD || DEFAULT_DB_PASSWD;

  if (config.DB.password === DEFAULT_DB_PASSWD) {
    console.warn(
      "WARNING: Using the default database password. Consider setting DB_PASSWORD as an environment variable for security."
    );
  }
};
