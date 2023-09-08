import fs from "fs";
import {
  proofOfReserveContractL2,
  proofOfReserveContractL1,
} from "./contract.js";
import config from "../config.js";

const contractL2Json = JSON.parse(
  fs.readFileSync(
    config.PATH.homePath + "src/web3/ProofOfReservesContractL2.json",
    "utf-8"
  )
);
const contractL1Json = JSON.parse(
  fs.readFileSync(
    config.PATH.homePath + "src/web3/ProofOfReservesContractL1.json",
    "utf-8"
  )
);

const porContractL1 = new proofOfReserveContractL1(
  config.testProvider,
  contractL1Json.abi,
  config.L1_ADDRESS
);

const porContractL2 = new proofOfReserveContractL2(
  config.testProvider,
  contractL2Json.abi,
  config.L2_ADDRESS
);

export default {
  porContractL1: porContractL1,
  porContractL2: porContractL2,
  AddressL1: porContractL1.Addr,
  AddressL2: porContractL2.Addr,
  uploadCommitment: async (assetIdx, path) => {
    return await porContractL2.uploadCommitment(assetIdx, path);
  },
  updateCommitment: async (assetIdx, idx, proofPath) => {
    return await porContractL2.updateCommitment(assetIdx, idx, proofPath);
  },
  updateTotalValue: async (assetIdx) => {
    return await porContractL1.updateTotalValue(assetIdx);
  },
  getAllCommitments: async (assetIdx) => {
    return await porContractL2.getAllCommitments(assetIdx);
  },
  getTotalValue: (assetIdx) => {
    return porContractL1.getTotalValue(assetIdx);
  },
  getTotalCommitment: async (assetIdx) => {
    return porContractL2.getTotalCommitment(assetIdx);
  },
};
