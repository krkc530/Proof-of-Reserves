import express from "express";
import expressAsyncHandler from "express-async-handler";
import { query, validationResult } from "express-validator";
import _ from "lodash";

import UserAssetsServices from "../../services/userAssets.service";

const router = express.Router();

router.get(
  "/",
  query("assetId").custom((v) => {
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
  const assetId = _.get(req.query, "assetId");
  const commitments = await UserAssetsServices.getAllCommitments(assetId);
  console.debug("[commitsController]:", _.get(commitments, "length"));
  res.status(200).json({ commitments });
}

export default router;
