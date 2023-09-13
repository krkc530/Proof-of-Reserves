import express from "express";
import expressAsyncHandler from "express-async-handler";
import { query, validationResult } from "express-validator";
import _ from "lodash";

import ContractServices from "../../services/contract.service";

const router = express.Router();

router.get(
  "/",
  query("asset_id").custom((v) => {
    return /^[0-9]*$/.test(v);
  }),
  expressAsyncHandler(commitsController)
);

async function commitsController(req, res) {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({ errors: result.array() });
  }
  console.debug("[commitsController]", req.query);
  const assetId = _.get(req.query, "asset_id");
  const commitments = await ContractServices.getAllCommitments(assetId);
  console.debug("[commitsController]:", _.get(commitments, "length"));
  res.status(200).json({ commitments });
}

export default router;
