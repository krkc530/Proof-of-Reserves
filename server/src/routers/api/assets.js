import express from "express";
import expressAsyncHandler from "express-async-handler";
import { query, validationResult } from "express-validator";
import createHttpError from "http-errors";
import _ from "lodash";

import UserAssetsServices from "../../services/userAssets.service";
import AssetsServices from "../../services/assets.service";
import { formatNumberWithDecimal } from "../../utils/string";

const router = express.Router();

router.get(
  "/",
  query("key").custom((v) => {
    return /^[0-9]*$/.test(v);
  }),
  expressAsyncHandler(assetsController)
);

async function assetsController(req, res) {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({ errors: result.array() });
  }
  console.debug("[assetsController]", req.query);
  const data = await getUserAssets(req.query);
  const response = { data };
  console.debug("[assetsController] response:", response);
  res.status(200).json(response);
}

async function getUserAssets(query) {
  const userId = _.get(query, "key");

  const assetIds = await AssetsServices.getAllAssetIds();
  const userAssets = [];

  for (const assetId of assetIds) {
    const { name, logoUrl, unit } = await AssetsServices.getAsset(assetId);
    let myAsset = await UserAssetsServices.getUserAssetBalance(userId, assetId);
    if (!myAsset) {
      throw createHttpError.NotFound("User asset not found");
    }
    // TODO: refactor
    if (unit === "ETH") {
      myAsset = formatNumberWithDecimal(myAsset, 10 ** 9);
    }
    userAssets.push({
      name,
      logoUrl,
      unit,
      myAsset,
    });
  }
  return userAssets;
}

export default router;
