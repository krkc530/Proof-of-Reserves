import axios from "axios";

const httpCli = axios.create();
// default 설정 key 설정 등등. ..
httpCli.defaults.baseURL = "http://127.0.0.1:8000";
// httpCli.defaults.withCredentials = true;
httpCli.defaults.timeout = 25000;

export async function getContractAddress() {
  try {
    const addresses = await httpCli.get("/tool/addr");
    const addr = addresses["data"];
    console.log(addr);
    return addresses["data"];
  } catch (error) {
    console.log(error);
    return undefined;
  }
  // console.log();
  // return (await httpCli.get('/tool/addr')).data.Addr;
}

export async function getL2ContractAddress() {
  try {
    const addresses = await httpCli.get("/tool/addr");
    return addresses["data"]["AddressL2"];
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

export async function getL1ContractAddress() {
  try {
    const addresses = await httpCli.get("/tool/addr");
    return addresses["data"]["AddressL1"];
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

/**
 *
 * @param {String} value
 * @returns {boolean}
 */
export async function uploadValue(assetIdx, value) {
  if (typeof value !== "string") return false;

  const res = await httpCli.get("/tool/upload/" + assetIdx + "/" + value);

  console.log(res.data);

  return res.data.flag;
}

/**
 *
 * @param {String} idx   : dec index
 * @param {String} value : dec balance of user
 */
export async function updateValue(idx, assetIdx, value) {
  const res = await httpCli.get(
    "/tool/update/" + idx + "/" + assetIdx + "/" + value
  );

  console.log(res.data);

  return res.data.flag;
}

export async function getTotalValue(assetIdx) {
  const res = await httpCli.get("/tool/total_cm/" + assetIdx);

  return res.data.value;
}

export default httpCli;
