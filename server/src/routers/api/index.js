import express from "express";

import commits from "./commits.js";
import por from "./por.js";
import newAssets from "./new.assets.js";
import assets from "./assets.js";
import report from "./report.js";

const apiRouter = express.Router();

// for poc app frontend
apiRouter.use("/por", por);
apiRouter.use("/new_assets", newAssets);
apiRouter.use("/assets", assets);
apiRouter.use("/commits", commits);
apiRouter.use("/report", report);

export default apiRouter;
