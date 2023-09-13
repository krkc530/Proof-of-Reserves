import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import rootRouter from "./routers/index.js";
import errorHandler from "./middleware/errorHandler.js";

import uploadService from "./services/upload.service.js";

const uploadDefaultCommits = async (assetIdx = 0, length = 5) => {
  const values = Array.from({ length }, () => Math.floor(Math.random() * 1000));
  for (const v of values) {
    const data = { asset_id: assetIdx, value: v.toString() };
    await uploadService(data);
  }
};

const onStartServer = async () => {
  uploadDefaultCommits().catch((e) => console.error(e));
};

const server = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(cors({ origin: "*" }));

  app.get("/", (req, res) => {
    res.send("por is best");
  });

  app.use("/", rootRouter);
  app.use(errorHandler);

  app.listen(8000, () => {
    console.log("server start on 8000");
    onStartServer();
  });
};

export default server;
