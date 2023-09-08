import _ from "lodash";
import DbInstance from "../../database";
import porContract from "../web3";
import legoGroth16 from "../../napirs-legogroth16";
import config from "../config";

import { updateBalance } from "./update.service";
import { getTotalValue } from "./total.value.service";

const uploadCommitment = async (assetIdx, recordValue) => {
  const recordValueBN = BigInt(recordValue);

  // value validation
  if (recordValueBN < 0 || recordValueBN > 2n ** 64n) {
    throw new Error("Invalid request params, value range error");
  }
  const [rows, fields] = await DbInstance.query(
    "SELECT COUNT(*) AS count FROM user_list WHERE asset_idx = ?",
    [assetIdx]
  );

  const totalLength = _.get(rows, "0.count");

  const newRecordId = totalLength;

  // Generate new random
  // TODO: 32bit
  const random = Math.floor(Math.random() * 10000);
  legoGroth16.proof(String(newRecordId), recordValue, random);

  await DbInstance.query(
    "INSERT INTO user_list (id,asset_idx,value,random) VALUES (?,?,?,?)",
    [newRecordId, assetIdx, recordValue, random]
  );

  // contract call
  await porContract.uploadCommitment(
    assetIdx,
    config.PATH.proofPath + "Proof_vk/proof_" + newRecordId + ".json"
  );

  // userList = ["0", "1", ... , "totalLength - 1", "newRecordId"]
  const userList = Array.from({ length: newRecordId + 1 }, (_, index) =>
    index.toString()
  );
  legoGroth16.totalPedCm(userList);

  // contract call
  await porContract.updateTotalValue(assetIdx);
};

const uploadService = async (data) => {
  const assetIdx = _.get(data, "asset_idx");
  const value = _.get(data, "value");

  await uploadCommitment(assetIdx, value);
  const balance = await getTotalValue(assetIdx);
  await updateBalance(assetIdx, balance);

  return;
};

export default uploadService;
