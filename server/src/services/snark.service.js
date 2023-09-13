import fs from "fs";
import config from "../config";
import _ from "lodash";

import legoGroth16 from "../../napirs-legogroth16";
import sigmaProtocol from "../crypto/sigmaProtocol";
import { pedersenGenToContractFormat } from "../utils/string";
import { proofFileToContractFormat } from "../utils/string";
import { addPrefixAndPadHex, decStrToHex } from "../utils/types";

const generateProof = (userId, assetId, value, random) => {
  if (typeof value !== "string") {
    value = value.toString();
  }
  if (typeof random !== "number") {
    random = Number(random);
  }
  const proofId = `${userId}_${assetId}`;
  legoGroth16.proof(proofId, value, random);

  return proofId;
};

const generateTotalKey = (proofIds) => {
  for (const proofId of proofIds) {
    if (typeof proofId !== "string") {
      console.error("[SnarkService] Invalid proofId:", user);
      return;
    }
    const proofPath =
      config.PATH.proofPath + "Proof_vk/proof_" + proofId + ".json";
    if (!fs.existsSync(proofPath)) {
      console.error("[SnarkService] Not exist:", proofPath);
      return;
    }
  }
  legoGroth16.totalPedCm(proofIds);
};

const generateTotalProof = () => {
  const { totalRandomString, totalValueString } = readTotalKey();

  console.log("[SnarkService] totalValueString:", totalValueString);
  console.log("[SnarkService] totalRandomString:", totalRandomString);

  // Note that totalValueString is actually not used
  const proof = sigmaProtocol().prove(
    BigInt(totalValueString),
    BigInt(totalRandomString)
  );

  return proof;
};

const readProof = (proofId) => {
  const proofPath =
    config.PATH.proofPath + "Proof_vk/proof_" + proofId + ".json";
  if (!fs.existsSync(proofPath)) {
    console.error("[SnarkService] Not exist:", proofPath);
    return;
  }
  const proof = proofFileToContractFormat(proofPath);

  return proof;
};

const readTotalKey = () => {
  const totalKeyPath = config.PATH.proofPath + "Ped_cm/CM_Key_total.json";
  if (!fs.existsSync(totalKeyPath)) {
    console.error("[SnarkService] Not exist:", totalKeyPath);
    return;
  }
  const totalKey = fs.readFileSync(totalKeyPath, "utf-8");
  const totalKeyJson = JSON.parse(totalKey);

  const totalValueString = _.get(totalKeyJson, "w");
  const totalRandomString = _.get(totalKeyJson, "v");

  return {
    totalValueString,
    totalRandomString,
  };
};

const getCommitmentFromProof = (proofId) => {
  const proof = readProof(proofId);
  const rawCommit = [proof[8], proof[9]];

  return rawCommit.map((decStr) => addPrefixAndPadHex(decStrToHex(decStr)));
};

const getPublicParameters = () => {
  const generatorPath = config.PATH.proofPath + "Ped_cm/generator.json";
  if (!fs.existsSync(generatorPath)) {
    console.error("[SnarkService] Not exist:", generatorPath);
    return;
  }
  const pp = pedersenGenToContractFormat(generatorPath);
  const g = { x: pp[0], y: pp[1] };
  const h = { x: pp[2], y: pp[3] };

  return { g, h };
};

const SnarkServices = {
  generateProof,
  generateTotalKey,
  generateTotalProof,
  getPublicParameters,
  getCommitmentFromProof,
};

export default SnarkServices;
