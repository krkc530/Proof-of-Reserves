import _ from "lodash";
import DbInstance from "../../database";

export const getTotalValue = async (assetIdx) => {
  if (assetIdx === undefined) {
    throw new Error("Invalid request params");
  }

  const [rows, fields] = await DbInstance.query(
    "SELECT value FROM user_list WHERE asset_idx = ?",
    [assetIdx]
  );
  let totalValue = 0;

  for (const row of rows) {
    totalValue += row.value;
  }

  return totalValue;
};

export const getBalance = async (assetIdx) => {
  const [rows, fields] = await DbInstance.query(
    "SELECT balance FROM balance_list WHERE asset_idx = ?",
    [assetIdx]
  );

  const totalBalance = _.get(rows, "0.balance");

  return totalBalance;
};

const totalValueService = async (params) => {
  const assetIdx = _.get(params, "asset_idx");

  const value = await getTotalValue(assetIdx);
  const balance = (await getBalance(assetIdx)) || 0;

  return {
    value,
    balance,
  };
};

export default totalValueService;
