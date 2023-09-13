import express from "express";
import expressAsyncHandler from "express-async-handler";
import { query, validationResult } from "express-validator";
import _ from "lodash";

import PorServices from "../../services/por.service";

const router = express.Router();

router.get(
  "/",
  query("asset_id").custom((v) => {
    return /^[0-9]*$/.test(v);
  }),
  expressAsyncHandler(porRequestController)
);

async function porRequestController(req, res) {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({ errors: result.array() });
  }
  const userId = _.get(req.query, "key");
  if (userId !== undefined) {
    if (!/^[0-9]*$/.test(userId)) {
      return res.status(400).json({ errors: "Invalid value" });
    }
    console.debug("[porRequestController]", req.query);
    const startTime = Date.now();
    const response = await PorServices.PorForUserService(req.query);
    console.debug("[porRequestController] PoR response:", response);
    console.debug(
      `[porRequestController] Time elapsed: ${Date.now() - startTime}ms`
    );
    return res.status(200).json(response);
  }
  console.debug("[porRequestController]", req.query);
  const startTime = Date.now();
  const response = await PorServices.PorService(req.query);
  console.debug("[porRequestController] PoR response:", response);
  console.debug(
    `[porRequestController] Time elapsed: ${Date.now() - startTime}ms`
  );
  res.status(200).json(response);
}

export default router;
