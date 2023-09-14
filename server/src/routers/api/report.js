import express from "express";
import expressAsyncHandler from "express-async-handler";
import { query, body, validationResult } from "express-validator";
import _ from "lodash";

import ReportServices from "../../services/report.service";

const router = express.Router();

router.post(
  "/",
  body("assetId").custom((v) => {
    return /^[0-9]*$/.test(v);
  }),
  body("key").custom((v) => {
    return /^[0-9]*$/.test(v);
  }),
  expressAsyncHandler(ReportController)
);

router.get(
  "/history",
  query("assetId").custom((v) => {
    return /^[0-9]*$/.test(v);
  }),
  expressAsyncHandler(ReportsHistoryController)
);

async function ReportsHistoryController(req, res) {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({ errors: result.array() });
  }
  console.debug("[ReportsHistoryController]", req.query);
  const assetId = _.get(req.query, "assetId");
  const reportHistory = await ReportServices.getReportsForAsset(assetId);
  const response = {
    reports: reportHistory,
  };
  console.debug("[ReportsHistoryController] response:", response);
  res.status(200).json(response);
}

async function ReportController(req, res) {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({ errors: result.array() });
  }
  console.debug("[ReportController]", req.body);
  const assetId = _.get(req.body, "assetId");
  const userId = _.get(req.body, "key");
  const newReportId = await ReportServices.createReport(userId, assetId);
  const response = {
    success: true,
    reportId: newReportId,
  };
  console.debug("[ReportController] response:", response);
  res.status(201).json(response);
}

export default router;
