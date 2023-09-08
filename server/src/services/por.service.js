import _ from "lodash";
import DbInstance from "../../database";

import commitsService from "./commits.service";

const generatePoKE = async (totalCommit, totalValue) => {
  // TODO: PoKE proof
  // userList = ["0", "1", ... "totalLength - 1"]
  // const userList = Array.from({ length: totalLength }, (_, index) =>
  //   index.toString()
  // );
  // legoGroth16.totalPedCm(userList);
};

const porService = async (params) => {
  const assetIdx = _.get(params, "asset_idx");

  const serverBalance = await getBalanceFromServer(assetIdx);
  const { commits, totalCommit } = await commitsService(params);

  const proof = await generatePoKE(totalCommit, serverBalance);

  return {
    serverBalance,
    totalCommit,
    commits,
    proof,
  };
};

export default porService;
