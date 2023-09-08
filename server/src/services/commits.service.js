import _ from "lodash";
import porContract from "../web3";

const getCommits = async (assetIdx) => {
  const rawCommits = await porContract.getAllCommitments(assetIdx);
  const commits = [];

  for (const rawCommit of rawCommits) {
    commits.push([rawCommit[0], rawCommit[1]]);
  }

  return commits;
};

const getTotalCommit = async (assetIdx) => {
  const totalCommit = await porContract.getTotalCommitment(assetIdx);

  return [totalCommit[0], totalCommit[1]];
};

const commitsService = async (params) => {
  const assetIdx = _.get(params, "asset_idx");
  const commits = await getCommits(assetIdx);
  const totalCommit = await getTotalCommit(assetIdx);

  return { commits, totalCommit };
};

export default commitsService;
