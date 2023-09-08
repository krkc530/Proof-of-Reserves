import _ from "lodash";
import DbInstance from "../../database";

// this represents balance from "trade" server
export const getBalanceFromServer = async (assetIdx) => {
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

// this represents balance from blockchain (mocking)
export const getBalanceFromChain = async (assetIdx) => {
  const [rows, fields] = await DbInstance.query(
    "SELECT balance FROM balance_list WHERE asset_idx = ?",
    [assetIdx]
  );

  const totalBalance = _.get(rows, "0.balance");

  return totalBalance;
};

const balanceService = async (params) => {
  const assetIdx = _.get(params, "asset_idx");

  const serverBalance = await getBalanceFromServer(assetIdx);
  const chainBalance = (await getBalanceFromChain(assetIdx)) || 0;

  return {
    serverBalance,
    chainBalance,
  };
};

export default balanceService;
