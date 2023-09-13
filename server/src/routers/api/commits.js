import express from "express";
import expressAsyncHandler from "express-async-handler";
import _ from "lodash";

import ContractServices from "../../services/contract.service";

const router = express.Router();

router.get("/", expressAsyncHandler(commitsController));

async function commitsController(req, res) {
  console.debug("[commitsController]", req.query);
  const assetId = _.get(req.query, "asset_id");
  if (!assetId) {
    throw new Error("Bad Request");
  }
  const commitments = await ContractServices.getAllCommitments(assetId);
  console.debug("[commitsController]:", _.get(commitments, "length"));
  res.status(201).json({ commitments });
}

export default router;
