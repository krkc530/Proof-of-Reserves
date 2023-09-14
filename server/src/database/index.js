import mysql2 from "mysql2/promise";
import config from "../config";

// singleton instance config
const DbInstance = await mysql2.createConnection({
  host: config.DB.host,
  user: config.DB.user,
  password: config.DB.password,
  database: "POR",
});

export default DbInstance;
