import express from "express";
import expressAsyncHandler from "express-async-handler";

import verifyService from "../../services/verify.service";

const router = express.Router();

router.get("/commit", expressAsyncHandler(verifyCommitController));
router.get("/total_cm", expressAsyncHandler(verifyTotalCommitController));

async function verifyCommitController(req, res) {
  console.debug("[verifyCommitController]", req.params);
  const response = await verifyService.verifyCommitmentService(req.params);
  console.debug("[verifyCommitController] response:", response);
  res.status(201).json(response);
}

async function verifyTotalCommitController(req, res) {
  console.debug("[verifyTotalCommitController]", req.params);
  const response = await verifyService.verifyTotalCommitmentService(req.params);
  console.debug("[verifyTotalCommitController] response:", response);
  res.status(201).json(response);
}

export default router;
