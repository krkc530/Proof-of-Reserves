import express from "express";
import expressAsyncHandler from "express-async-handler";

import updateService from "../../services/update.service";

const router = express.Router();

router.post("/", expressAsyncHandler(updateController));

async function updateController(req, res) {
  console.debug("[updateController]", req.body);
  const response = await updateService(req.body);
  res.status(201).json(response);
}

export default router;
