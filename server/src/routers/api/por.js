import express from "express";
import expressAsyncHandler from "express-async-handler";

import porService from "../../services/por.service";

const router = express.Router();

router.get("/", expressAsyncHandler(porRequestController));

async function porRequestController(req, res) {
  console.debug("[porRequestController]", req.query);
  const startTime = Date.now();
  const response = await porService(req.query);
  console.debug("[porRequestController] PoR response:", response);
  console.debug(
    `[porRequestController] Time elapsed: ${Date.now() - startTime}ms`
  );
  res.status(201).json(response);
}

export default router;
