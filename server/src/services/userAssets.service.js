import _ from "lodash";
import DbInstance from "../database";
import SnarkServices from "./snark.service";

const createUserAsset = async (userId, assetId, balance) => {
  const bnBalance = BigInt(balance);

  // value validation
  if (bnBalance < 0 || bnBalance > 2n ** 64n) {
    throw new Error("Invalid request params, value range error");
  }

  // Generate new random
  // TODO: 32bit
  const random = Math.floor(Math.random() * 10000);

  // // generate proof and get commit
  const proofId = SnarkServices.generateProof(userId, assetId, balance, random);
  const commit = SnarkServices.getCommitmentFromProof(proofId);

  // create UserAsset
  await DbInstance.execute(
    "INSERT INTO UserAssets (userId, assetId, balance, random, comX, comY) VALUES (?, ?, ?, ?, ?, ?)",
    [userId, assetId, balance, random, _.get(commit, "0"), _.get(commit, "1")]
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

const getAllCommitments = async (assetId) => {
  const [rows, fields] = await DbInstance.query(
    "SELECT comX, comY FROM UserAssets WHERE assetId = ?",
    [assetId]
  );
  const commitments = [];

  for (const row of rows) {
    commitments.push([_.get(row, "comX"), _.get(row, "comY")]);
  }

  return commitments;
};

const getUserAssets = async (assetId) => {
  const [rows, fields] = await DbInstance.query(
    "SELECT * FROM UserAssets WHERE assetId = ?",
    [assetId]
  );
  const userAssets = [];

  for (const row of rows) {
    userAssets.push({
      userId: _.get(row, "userId"),
      balance: _.get(row, "balance"),
      random: _.get(row, "random"),
      commitment: [_.get(row, "comX"), _.get(row, "comY")],
    });
  }

  return userAssets;
};

const UserAssetsServices = {
  createUserAsset,
  getUserAssetBalance,
  getUserAsset,
  getAllCommitments,
  getUserAssets,
};

export default UserAssetsServices;
