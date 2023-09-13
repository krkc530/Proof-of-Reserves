import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import rootRouter from "./routers/index.js";
import errorHandler from "./middleware/errorHandler.js";

import { generateAllAssets } from "./routers/api/new.assets.js";

const onStartServer = async () => {
  //   generateAllAssets().catch((e) => console.error(e));
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
