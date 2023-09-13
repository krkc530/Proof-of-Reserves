import express from "express";
import expressAsyncHandler from "express-async-handler";
import _ from "lodash";

import UsersServices from "../../services/users.service";
import UserAssetsServices from "../../services/userAssets.service";
import AssetsServices from "../../services/assets.service";

const router = express.Router();

router.post("/", expressAsyncHandler(newAssetsController));

async function newAssetsController(req, res) {
  console.debug("[newAssetsController]");
  const response = await generateAllAssets();
  console.debug("[newAssetsController] response:", response);
  res.status(201).json(response);
}

export async function generateAllAssets() {
  const newUserId = await UsersServices.createUser();
  const assetIds = await AssetsServices.getAllAssetIds();

  // TODO: refactor
  const balances = [
    Math.floor(Math.random() * 10), // STOs
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 100000), // CBDCs
    Math.floor(Math.random() * 100000),
    Math.floor(Math.random() * 100000),
    Math.floor(Math.random() * 1000000000000), // FT, unit = Gwei (10^-9 ETH)
  ];

  for (const [i, assetId] of assetIds.entries()) {
    // const balance = Math.floor(Math.random() * 100000);
    await UserAssetsServices.createUserAsset(newUserId, assetId, balances[i]);
  }

  return {
    success: true,
    key: newUserId,
  };
}

export default router;
