import express from "express";
import expressAsyncHandler from "express-async-handler";

import balanceService from "../../services/balances.service";

const router = express.Router();

router.get("/:asset_idx", expressAsyncHandler(getTotalValueController));

async function getTotalValueController(req, res) {
  console.debug("[getTotalValueController]", req.params);
  const response = await balanceService(req.params);
  console.debug("[getTotalValueController] response:", response);
  res.status(201).json(response);
}

export default router;
