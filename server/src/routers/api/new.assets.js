import express from "express";
import expressAsyncHandler from "express-async-handler";

const router = express.Router();

router.post("/:asset_idx", expressAsyncHandler(newAssetsController));

async function newAssetsController(req, res) {
  console.debug("[newAssetsController]", req.body);
  // TODO: generate assets
  const response = undefined;
  console.debug("[newAssetsController] response:", response);
  res.status(201).json(response);
}

export default router;
