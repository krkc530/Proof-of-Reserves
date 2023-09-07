import config from "./config.js";
import bodyParser from "body-parser";
import express from "express";
import mysql from "mysql2";
import cors from "cors";
import rootRouter from "./routers/index.js";
import porContract from "./web3/index.js";
import legogroth from "../napirs-legogroth16/index.js";

export const connection = mysql.createConnection({
  host: config.DB.host,
  user: config.DB.user,
  password: config.DB.password,
  database: "POR",
});

async function set_id_value(id, assetIdx, value) {
  var seed = Math.floor(Math.random() * 10000);

  legogroth.proof(String(id), String(value), seed);
  connection.query(
    "INSERT INTO user_list (id,asset_idx,value,random) VALUES (?,?,?,?)",
    [id, assetIdx, value, seed],
    (err, result) => {
      if (err) {
        console.log("error in set_id_value funcion");
        console.log(err);
        return;
      }
    }
  );

  // contract
  await porContract.uploadCommitment(
    assetIdx,
    config.PATH.proofPath + "Proof_vk/proof_" + String(id) + ".json"
  );
}

const server = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(cors({ origin: "*" }));

  app.get("/", (req, res) => {
    res.send("por is best");
  });

  app.use("/", rootRouter);

  app.listen(8000, () => {
    console.log("server start on 8000");
  });

  const user_ids = [0, 1, 2, 3, 4];
  const asset_idx = 0;
  for (const id of user_ids) {
    const rand = Number(Math.floor(Math.random() * 1000));
    await set_id_value(id, asset_idx, rand);
  }

  legogroth.totalPedCm(user_ids.map((i) => String(i)));
  await porContract.updateTotalValue(asset_idx);
};

export default server;
