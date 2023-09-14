import mysql2 from "mysql2/promise";
import config from "../config";

// singleton instance config
const DbInstance = mysql2.createPool({
  host: config.DB.host,
  user: config.DB.user,
  password: config.DB.password,
  database: "POR",
  enableKeepAlive: true,
});

export default DbInstance;
