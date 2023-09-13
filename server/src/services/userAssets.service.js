import _ from "lodash";
import config from "../config";
import DbInstance from "../../database";
import SnarkServices from "./snark.service";
import ContractServices from "./contract.service";
import AssetsServices from "./assets.service";

const createUserAsset = async (userId, assetId, balance) => {
  const bnBalance = BigInt(balance);

  // value validation
  if (bnBalance < 0 || bnBalance > 2n ** 64n) {
    throw new Error("Invalid request params, value range error");
  }

  // Generate new random
  // TODO: 32bit
  const random = Math.floor(Math.random() * 10000);

  await DbInstance.execute(
    "INSERT INTO UserAssets (user_id, asset_id, balance, random) VALUES (?, ?, ?, ?)",
    [userId, assetId, balance, random]
  );

  // generate proof
  const proofId = SnarkServices.generateProof(userId, assetId, balance, random);
  const commit = SnarkServices.getCommitmentFromProof(proofId);

  // upload commit with proof to contract
  ContractServices.uploadCommitment(assetId, proofId)
    .then(async (e) => {
      // update total asset balance in DB
      const assetBalance = await AssetsServices.getAssetBalance(assetId);
      const updatedAssetBalance = BigInt(assetBalance) + BigInt(balance);
      await AssetsServices.updateAssetBalance(assetId, updatedAssetBalance);

      // store commitment to UserAsset record
      console.debug("[UserAssetsService] Commitment stored:", commit);
      await DbInstance.execute(
        "UPDATE UserAssets SET is_stored = true, com_x = ?, com_y = ? WHERE user_id = ? AND asset_id = ?",
        [commit[0], commit[1], userId, assetId]
      );
    })
    .catch((err) => {
      console.error("[UserAssetsService] Error while upload commitment", err);
    });
};

const getUserAssetBalance = async (userId, assetId) => {
  const [rows, fields] = await DbInstance.query(
    "SELECT balance FROM UserAssets WHERE user_id = ? AND asset_id = ?",
    [userId, assetId]
  );
  const balance = _.get(rows, "0.balance");

  return balance;
};

const getUserAsset = async (userId, assetId) => {
  const [rows, fields] = await DbInstance.query(
    "SELECT * FROM UserAssets WHERE user_id = ? AND asset_id = ?",
    [userId, assetId]
  );

  const balance = _.get(rows, "0.balance");
  const random = _.get(rows, "0.random");
  const com_x = _.get(rows, "0.com_x");
  const com_y = _.get(rows, "0.com_y");

  return {
    balance,
    random,
    commitment: [com_x, com_y],
  };
};

const UserAssetsServices = {
  createUserAsset,
  getUserAssetBalance,
  getUserAsset,
};

export default UserAssetsServices;
