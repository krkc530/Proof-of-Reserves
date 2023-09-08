import axios from "axios";

const httpCli = axios.create();
// default 설정 key 설정 등등. ..
httpCli.defaults.baseURL = "http://127.0.0.1:8000";
// httpCli.defaults.withCredentials = true;
httpCli.defaults.timeout = 25000;

export async function getContractAddress() {
  try {
    const addresses = await httpCli.get("/api/addr");
    const addr = addresses["data"];
    console.log(addr);
    return addresses["data"];
  } catch (error) {
    console.log(error);
    return undefined;
  }
  // console.log();
  // return (await httpCli.get('/api/addr')).data.Addr;
}

export async function getL2ContractAddress() {
  try {
    const addresses = await httpCli.get("/api/addr");
    return addresses["data"]["AddressL2"];
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

export async function getL1ContractAddress() {
  try {
    const addresses = await httpCli.get("/api/addr");
    return addresses["data"]["AddressL1"];
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

/**
 *
 * @param {String} assetIdx
 * @param {String} value
 * @returns {Promise<boolean>}
 */
export async function uploadValue(assetIdx, value) {
  if (typeof value !== "string" || typeof assetIdx !== "string") return false;

  const data = {
    asset_idx: assetIdx,
    value: value,
  };

  try {
    const res = await httpCli.post("/api/upload", data);
    console.debug(res.data);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

/**
 *
 * @param {String} idx   : dec index
 * @param {String} assetIdx
 * @param {String} value : dec balance of user
 * @returns {Promise<boolean>}
 */
export async function updateValue(idx, assetIdx, value) {
  if (
    typeof value !== "string" ||
    typeof assetIdx !== "string" ||
    typeof idx !== "string"
  )
    return false;

  const data = {
    id: idx,
    asset_idx: assetIdx,
    value: value,
  };
  try {
    const res = await httpCli.post("/api/update", data);
    console.debug(res.data);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export async function getBalances(assetIdx) {
  try {
    const res = await httpCli.get("/api/balances/" + assetIdx);
    const serverBalance = res.data.serverBalance;
    const chainBalance = res.data.chainBalance;
    return { serverBalance, chainBalance };
  } catch (err) {
    console.error(err);
    return undefined;
  }
}

export async function getAllCommitments(assetIdx) {
  try {
    const res = await httpCli.get("/api/commits/" + assetIdx);
    const commits = res.data.commits;
    const totalCommit = res.data.totalCommit;
    return { commits, totalCommit };
  } catch (err) {
    console.error(err);
    return undefined;
  }
}

export default httpCli;
