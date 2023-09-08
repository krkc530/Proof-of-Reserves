import express from "express";
import expressAsyncHandler from "express-async-handler";

import uploadService from "../../services/upload.service";

const router = express.Router();

router.post("/", expressAsyncHandler(uploadController));

async function uploadController(req, res) {
  console.debug("[uploadController]", req.body);
  const response = await uploadService(req.body);
  res.status(201).json(response);
}

export default router;
