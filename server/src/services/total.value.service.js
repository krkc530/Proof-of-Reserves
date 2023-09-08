import _ from "lodash";
import DbInstance from "../../database";

const totalValueCommitment = async (assetIdx) => {
  if (assetIdx === undefined) {
    throw new Error("Invalid request params");
  }

  const [rows, fields] = await DbInstance.query(
    "SELECT value,random FROM user_list WHERE asset_idx = ?",
    [assetIdx]
  );
  let totalValue = 0;
  let totalRandom = 0;

  for (const row of rows) {
    totalValue += row.value;
    totalRandom += row.random;
  }

  return { value: totalValue };
};

const totalValueService = async (params) => {
  const assetIdx = _.get(params, "asset_idx");

  return await totalValueCommitment(assetIdx);
};

export default totalValueService;
