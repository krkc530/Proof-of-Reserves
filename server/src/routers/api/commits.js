import express from "express";
import expressAsyncHandler from "express-async-handler";

import commitsService from "../../services/commits.service";

const router = express.Router();

router.get("/:asset_idx", expressAsyncHandler(commitsController));

async function commitsController(req, res) {
  console.debug("[commitsController]", req.params);
  const response = await commitsService(req.params);
  console.debug(
    "[commitsController]:",
    response.totalCommit,
    response.commits.length
  );
  res.status(201).json(response);
}

export default router;
