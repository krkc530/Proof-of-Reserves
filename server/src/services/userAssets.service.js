import _ from "lodash";
import DbInstance from "../database";
import SnarkServices from "./snark.service";
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

const getUserIdsFromStoredAssets = async (assetId) => {
  const [rows, fields] = await DbInstance.query(
    "SELECT userId FROM UserAssets WHERE assetId = ? AND isStored = true",
    [assetId]
  );
  const userIds = [];

  for (const row of rows) {
    userIds.push(_.get(row, "userId"));
  }

  return userIds;
};

const getAllCommitments = async (assetId) => {
  const [rows, fields] = await DbInstance.query(
    "SELECT comX, comY FROM UserAssets WHERE assetId = ? AND isStored = true",
    [assetId]
  );
  const commitments = [];

  for (const row of rows) {
    commitments.push([_.get(row, "comX"), _.get(row, "comY")]);
  }

  return commitments;
};

const UserAssetsServices = {
  createUserAsset,
  getUserAssetBalance,
  getUserAsset,
  getUserIdsFromStoredAssets,
  getAllCommitments,
};

export default UserAssetsServices;
