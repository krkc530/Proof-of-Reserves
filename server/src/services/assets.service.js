import _ from "lodash";
import DbInstance from "../../database";

const createAsset = async (assetName, logoUrl, unit) => {
  const [rows, fields] = await DbInstance.execute(
    "INSERT INTO Assets (asset_name, logo_url, unit, balance) VALUES (?, ?, ?, ?)",
    [assetName || "test", logoUrl, unit, "0"]
  );
  const assetId = rows.insertId;

  return assetId;
};

const updateAssetBalance = async (assetId, balance) => {
  await DbInstance.execute("UPDATE Assets SET balance = ? WHERE asset_id = ?", [
    balance,
    assetId,
  ]);

  return true;
};

const getAssetBalance = async (assetId) => {
  const [rows, fields] = await DbInstance.query(
    "SELECT balance FROM Assets WHERE asset_id = ?",
    [assetId]
  );
  const balance = _.get(rows, "0.balance");

  return balance;
};

const getAsset = async (assetId) => {
  const [rows, fields] = await DbInstance.query(
    "SELECT * FROM Assets WHERE asset_id = ?",
    [assetId]
  );
  const result = _.get(rows, "0");
  const name = _.get(result, "asset_name");
  const logoUrl = _.get(result, "logo_url");
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
  const [rows, fields] = await DbInstance.query("SELECT asset_id FROM Assets");
  const assetIds = [];

  for (const row of rows) {
    assetIds.push(_.get(row, "asset_id"));
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
