import _ from "lodash";
import DbInstance from "../database";

const createAsset = async (assetName, logoUrl, unit) => {
  const [rows, fields] = await DbInstance.execute(
    "INSERT INTO Assets (assetName, logoUrl, unit) VALUES (?, ?, ?)",
    [assetName || "test", logoUrl, unit]
  );
  const assetId = rows.insertId;

  return assetId;
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

  return {
    name,
    logoUrl,
    unit,
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
  getAsset,
  getAllAssetIds,
};

export default AssetsServices;
