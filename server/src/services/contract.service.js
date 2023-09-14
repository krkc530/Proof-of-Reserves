import fs from "fs";
import _ from "lodash";

import config from "../config";
import Contract from "../web3";
import { addPrefixAndPadHex, decStrToHex } from "../utils/types";

const uploadCommitment = async (assetId, proofId) => {
  const proofPath = config.SNARK_PATH + "Proof_vk/proof_" + proofId + ".json";

  if (!fs.existsSync(proofPath)) {
    throw new Error(`[ContractService] Not exist: ${proofPath}`);
  }
  // contract call
  try {
    await Contract.uploadCommitment(assetId, proofPath);
  } catch (err) {
    throw new Error(`[ContractService] Transaction failed: ${err}`);
  }
};

const getAllCommitments = async (assetId) => {
  const rawCommits = await Contract.getAllCommitments(assetId);
  const commits = [];

  for (const rawCommit of rawCommits) {
    const hexCommit = rawCommit.map((decStr) =>
      addPrefixAndPadHex(decStrToHex(decStr))
    );
    commits.push(hexCommit);
  }

  return commits;
};

const getTotalCommitment = async (assetId) => {
  const totalCommit = await Contract.getTotalCommitment(assetId);
  const hexTotalCommit = totalCommit.map((decStr) =>
    addPrefixAndPadHex(decStrToHex(decStr))
  );

  return hexTotalCommit;
};

const ContractServices = {
  uploadCommitment,
  getAllCommitments,
  getTotalCommitment,
};

export default ContractServices;
