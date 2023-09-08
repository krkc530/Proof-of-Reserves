import express from "express";
import expressAsyncHandler from "express-async-handler";

import totalValueService from "../../services/total.value.service";

const router = express.Router();

router.get("/:asset_idx", expressAsyncHandler(getTotalValueController));

async function getTotalValueController(req, res) {
  console.debug("[getTotalValueController]", req.params);
  const response = await totalValueService(req.params);
  console.debug("[getTotalValueController] response:", response);
  res.status(201).json(response);
}

export default router;
