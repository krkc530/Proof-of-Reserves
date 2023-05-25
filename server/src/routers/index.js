import express from "express";
import tool from './tool/index.js'

const rootRouter = express.Router();

rootRouter.use('/tool', tool);

export default rootRouter;