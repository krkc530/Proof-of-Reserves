import express from "express";
import apiRouter from "./api";

const rootRouter = express.Router();

rootRouter.use("/api", apiRouter);

export default rootRouter;
