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
    "INSERT INTO UserAssets (userId, assetId, balance, random) VALUES (?, ?, ?, ?)",
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
        "UPDATE UserAssets SET isStored = true, comX = ?, comY = ? WHERE userId = ? AND assetId = ?",
        [commit[0], commit[1], userId, assetId]
      );
    })
    .catch((err) => {
      console.error("[UserAssetsService] Error while upload commitment", err);
    });
};

const getUserAssetBalance = async (userId, assetId) => {
  const [rows, fields] = await DbInstance.query(
    "SELECT balance FROM UserAssets WHERE userId = ? AND assetId = ?",
    [userId, assetId]
  );
  const balance = _.get(rows, "0.balance");

  return balance;
};

const getUserAsset = async (userId, assetId) => {
  const [rows, fields] = await DbInstance.query(
    "SELECT * FROM UserAssets WHERE userId = ? AND assetId = ?",
    [userId, assetId]
  );

  const balance = _.get(rows, "0.balance");
  const random = _.get(rows, "0.random");
  const comX = _.get(rows, "0.comX");
  const comY = _.get(rows, "0.comY");

  return {
    balance,
    random,
    commitment: [comX, comY],
  };
};

const UserAssetsServices = {
  createUserAsset,
  getUserAssetBalance,
  getUserAsset,
};

export default UserAssetsServices;
