import mysql2 from "mysql2/promise";
import config from "../utils/config";

// singleton instance config
const DbInstance = mysql2.createPool({
  host: config.DB_HOST,
  user: config.DB_USER,
  database: config.DB_DATABASE,
  password: config.DB_PASSWORD,
  enableKeepAlive: true,
});

export default DbInstance;
