import _ from "lodash";
import DbInstance from "../database";

const createAsset = async (assetName, logoUrl, unit) => {
  const [rows, fields] = await DbInstance.execute(
    "INSERT INTO Assets (assetName, logoUrl, unit, balance) VALUES (?, ?, ?, ?)",
    [assetName || "test", logoUrl, unit, "0"]
  );
  const assetId = rows.insertId;

  return assetId;
};

const updateAssetBalance = async (assetId, balance) => {
  await DbInstance.execute("UPDATE Assets SET balance = ? WHERE assetId = ?", [
    balance,
    assetId,
  ]);

  return true;
};

const getAssetBalance = async (assetId) => {
  const [rows, fields] = await DbInstance.query(
    "SELECT balance FROM Assets WHERE assetId = ?",
    [assetId]
  );
  const balance = _.get(rows, "0.balance");

  return balance;
};

const getAsset = async (assetId) => {
  const [rows, fields] = await DbInstance.query(
    "SELECT * FROM Assets WHERE assetId = ?",
    [assetId]
  );
  const result = _.get(rows, "0");
  const name = _.get(result, "assetName");
  const logoUrl = _.get(result, "logoUrl");
  const unit = _.get(result, "unit");
  const balance = _.get(result, "balance");

  return {
    name,
    logoUrl,
    unit,
    balance,
  };
};

const getAllAssetIds = async () => {
  const [rows, fields] = await DbInstance.query("SELECT assetId FROM Assets");
  const assetIds = [];

  for (const row of rows) {
    assetIds.push(_.get(row, "assetId"));
  }

  return assetIds;
};

const AssetsServices = {
  createAsset,
  updateAssetBalance,
  getAssetBalance,
  getAsset,
  getAllAssetIds,
};

export default AssetsServices;
