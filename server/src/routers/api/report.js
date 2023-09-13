import express from "express";
import expressAsyncHandler from "express-async-handler";
import _ from "lodash";

import ReportServices from "../../services/report.service";

const router = express.Router();

router.post("/", expressAsyncHandler(ReportController));
router.get("/history", expressAsyncHandler(ReportsHistoryController));

async function ReportsHistoryController(req, res) {
  console.debug("[ReportsHistoryController]", req.query);
  const assetId = _.get(req.query, "asset_id");
  const reportHistory = await ReportServices.getReportsForAsset(assetId);
  const response = {
    reports: reportHistory,
  };
  console.debug("[ReportsHistoryController] response:", response);
  res.status(201).json(response);
}

async function ReportController(req, res) {
  console.debug("[ReportController]", req.body);
  const assetId = _.get(req.body, "asset_id");
  const userId = _.get(req.body, "user_id");
  const newReportId = await ReportServices.createReport(userId, assetId);
  const response = {
    success: true,
    reportId: newReportId,
  };
  console.debug("[ReportController] response:", response);
  res.status(201).json(response);
}

export default router;
