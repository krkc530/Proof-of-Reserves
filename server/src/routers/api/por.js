import express from "express";
import expressAsyncHandler from "express-async-handler";

import porService from "../../services/por.service";

const router = express.Router();

router.get("/:asset_idx", expressAsyncHandler(porRequestController));

async function porRequestController(req, res) {
  console.debug("[porRequestController]", req.params);
  const response = await porService(req.params);
  console.debug("[porRequestController] response:", response);
  res.status(201).json(response);
}

export default router;
