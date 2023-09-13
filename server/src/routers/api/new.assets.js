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
  const { success, key } = await generateAllAssets();
  const response = {
    success,
    key,
  };
  console.debug("[newAssetsController] response:", response);
  res.status(201).json(response);
}

async function generateAllAssets() {
  const newUserId = await UsersServices.createUser();
  const assetIds = await AssetsServices.getAllAssetIds();

  for (const assetId of assetIds) {
    const balance = Math.floor(Math.random() * 1000);
    await UserAssetsServices.createUserAsset(newUserId, assetId, balance);
  }

  return {
    success: true,
    key: newUserId,
  };
}

export default router;
