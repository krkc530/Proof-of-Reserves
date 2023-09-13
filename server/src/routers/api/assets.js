import express from "express";
import expressAsyncHandler from "express-async-handler";
import _ from "lodash";

import UserAssetsServices from "../../services/userAssets.service";
import AssetsServices from "../../services/assets.service";

const router = express.Router();

router.get("/", expressAsyncHandler(assetsController));

async function assetsController(req, res) {
  console.debug("[assetsController]", req.query);
  const data = await getUserAssets(req.query);
  const response = { data };
  console.debug("[assetsController] response:", response);
  res.status(201).json(response);
}

async function getUserAssets(query) {
  const userId = _.get(query, "key");

  const assetIds = await AssetsServices.getAllAssetIds();
  const userAssets = [];

  for (const assetId of assetIds) {
    const { name, logoUrl, unit } = await AssetsServices.getAsset(assetId);
    const myAsset = await UserAssetsServices.getUserAssetBalance(
      userId,
      assetId
    );
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
