import express from "express";
import upload from "./upload.js";
import update from "./update.js";
import addr from "./addr.js";
import balances from "./balances.js";
import commits from "./commits.js";

import verify from "./verify.js";
import por from "./por.js";
import newAssets from "./new.assets.js";

const apiRouter = express.Router();

// for test web frontend
apiRouter.use("/upload", upload);
apiRouter.use("/update", update);
apiRouter.use("/addr", addr);
apiRouter.use("/balances", balances);
apiRouter.use("/commits", commits);

// for app frontend
apiRouter.use("/por", por);
apiRouter.use("/verify", verify);
apiRouter.use("/new_assets", newAssets);

export default apiRouter;
