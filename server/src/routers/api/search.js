import express from "express";
import expressAsyncHandler from "express-async-handler";
import { body, validationResult } from "express-validator";
import _ from "lodash";

import ContractServices from "../../services/contract.service";

const router = express.Router();

router.get(
  "/",
  body("asset_id").custom((v) => {
    return /^[0-9]*$/.test(v);
  }),
  body("commitment").custom((v) => {
    const isHexString = v.every((item) => /^0x[0-9a-fA-F]{64}$/.test(item));
    return isHexString && v.length === 2;
  }),
  expressAsyncHandler(SearchCommitController)
);

async function SearchCommitController(req, res) {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({ errors: result.array() });
  }
  console.debug("[SearchCommitController]", req.body);
  const assetId = _.get(req.body, "asset_id");
  const commitment = _.get(req.body, "commitment");

  const commitments = await ContractServices.getAllCommitments(assetId);
  const isIncluded = commitments.some((e) => {
    if (e[0] === commitment[0] && e[1] === commitment[1]) {
      return true;
    }
  });
  const response = {
    success: isIncluded,
    commitments,
  };
  console.debug("[SearchCommitController] success:", response.success);
  res.status(200).json(response);
}

export default router;
