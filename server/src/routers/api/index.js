import express from "express";
import upload from "./upload.js";
import update from "./update.js";
import addr from "./addr.js";
import total_cm from "./total.value.js";

const apiRouter = express.Router();

apiRouter.use("/upload", upload);
apiRouter.use("/update", update);
apiRouter.use("/addr", addr);
apiRouter.use("/total_cm", total_cm);

export default apiRouter;
