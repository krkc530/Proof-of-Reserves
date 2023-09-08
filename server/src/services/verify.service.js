import _ from "lodash";

const verifyCommitment = async (value, random, commit) => {
  // TODO
  // get g, h
  // c = g^v*h^r
  // check c === commit
};

const verifyTotalCommitment = async (balance, totalCommit, proof) => {
  // TODO: PoKE verify
};

export const verifyTotalCommitmentService = async (params) => {
  const balance = _.get(params, "balance");
  const totalCommit = _.get(params, "totalCommit");
  const proof = _.get(params, "proof");

  return await verifyTotalCommitment(balance, totalCommit, proof);
};

export const verifyCommitmentService = async (params) => {
  const value = _.get(params, "value");
  const random = _.get(params, "random");
  const commit = _.get(params, "commit");

  return await verifyCommitment(value, random, commit);
};

const verifyService = {
  verifyCommitmentService,
  verifyTotalCommitmentService,
};

export default verifyService;
