import _ from "lodash";
import config from "../config";
import DbInstance from "../../database";

import UserAssetsServices from "./userAssets.service";

const createReport = async (userId, assetId) => {
  const { commitment } = await UserAssetsServices.getUserAsset(userId, assetId);
  const [rows, fields] = await DbInstance.execute(
    "INSERT INTO Reports (userId, assetId, comX, comY) VALUES (?, ?,?,?)",
    [userId, assetId, commitment[0], commitment[1]]
  );
  const reportId = rows.insertId;

  return reportId;
};

const getReportsForAsset = async (assetId) => {
  const [rows, fields] = await DbInstance.query(
    "SELECT userId, ts, comX, comY FROM Reports WHERE assetId = ?",
    [assetId]
  );
  const reports = [];

  for (const row of rows) {
    console.log(_.get(row, "comX"), _.get(row, "comY"));

    reports.push({
      userId: _.get(row, "userId"),
      commitment: [_.get(row, "comX"), _.get(row, "comY")],
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
