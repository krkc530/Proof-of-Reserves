import _ from "lodash";
import DbInstance from "../../database";
import porContract from "../web3";
import legoGroth16 from "../../napirs-legogroth16";
import config from "../config";

import { getBalanceFromChain, getBalanceFromServer } from "./balances.service";

export const updateChainBalance = async (assetIdx, balance) => {
  const balanceBN = BigInt(balance);
  // balance validation
  if (balanceBN < 0 || balanceBN > 2n ** 64n) {
    throw new Error("Invalid request params, value range error");
  }

  const assetBalance = await getBalanceFromChain(assetIdx);

  // if not exist yet
  if (assetBalance === undefined) {
    await DbInstance.query(
      "INSERT INTO balance_list (asset_idx, balance) VALUES (?, ?)",
      [assetIdx, balance]
    );

    return;
  }

  // update balance
  await DbInstance.query(
    "UPDATE balance_list SET balance = ? WHERE asset_idx = ?",
    [balance, assetIdx]
  );
};

const updateCommitment = async (recordId, assetIdx, recordValue) => {
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

  // id validation
  if (totalLength <= recordId || recordId < 0) {
    throw new Error("Invalid request params, id range error");
  }

  // Generate new random
  // TODO: 32bit
  const random = Math.floor(Math.random() * 10000);

  await DbInstance.query(
    "UPDATE user_list SET value = ?,random = ? WHERE id = ? AND asset_idx = ?",
    [recordValue, random, recordId, assetIdx]
  );

  legoGroth16.proof(recordId, recordValue, random);

  // contract call
  await porContract.updateCommitment(
    assetIdx,
    recordId,
    config.PATH.proofPath + "Proof_vk/proof_" + recordId + ".json"
  );

  // userList = ["0", "1", ... "totalLength - 1"]
  const userList = Array.from({ length: totalLength }, (_, index) =>
    index.toString()
  );
  legoGroth16.totalPedCm(userList);

  // contract call
  await porContract.updateTotalValue(assetIdx);
};

const updateService = async (data) => {
  const assetIdx = _.get(data, "asset_idx");
  const recordValue = _.get(data, "value");
  const recordId = _.get(data, "id");

  await updateCommitment(recordId, assetIdx, recordValue);
  const balance = await getBalanceFromServer(assetIdx);
  await updateChainBalance(assetIdx, balance);

  return;
};

export default updateService;
