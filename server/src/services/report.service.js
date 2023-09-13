import _ from "lodash";
import config from "../config";
import DbInstance from "../../database";

import UserAssetsServices from "./userAssets.service";

const createReport = async (userId, assetId) => {
  const { commitment } = await UserAssetsServices.getUserAsset(userId, assetId);
  const [rows, fields] = await DbInstance.execute(
    "INSERT INTO Reports (user_id, asset_id, com_x, com_y) VALUES (?, ?,?,?)",
    [userId, assetId, commitment[0], commitment[1]]
  );
  const reportId = rows.insertId;

  return reportId;
};

const getReportsForAsset = async (assetId) => {
  const [rows, fields] = await DbInstance.query(
    "SELECT user_id, ts, com_x, com_y FROM Reports WHERE asset_id = ?",
    [assetId]
  );
  const reports = [];

  for (const row of rows) {
    console.log(_.get(row, "com_x"), _.get(row, "com_y"));

    reports.push({
      user_id: _.get(row, "user_id"),
      commitment: [_.get(row, "com_x"), _.get(row, "com_y")],
      ts: _.get(row, "ts"),
    });
  }

  return reports;
};

const ReportServices = {
  createReport,
  getReportsForAsset,
};

export default ReportServices;
