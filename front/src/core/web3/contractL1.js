import { JsonRpcProvider, Contract } from "ethers";
import { getL1ContractAddress } from "../http/http";
import ProofOfReservesContract from "./ProofOfReservesContractL1";
import config from "../config";

let provider = new JsonRpcProvider("http://127.0.0.1:7545", undefined, {
  batchMaxCount: 1,
});
let contractIns = undefined;
let contractABI = ProofOfReservesContract["abi"];
let contractAddr = undefined;

export async function getContractAddressAndSetContractIns(abi = contractABI) {
  if (contractAddr != undefined) return contractIns;
  setContractInsL1(await getL1ContractAddress(), abi);
  return contractIns;
}

export function setContractInsL1(address, abi = contractABI) {
  contractAddr = address;
  contractIns = new Contract(address, abi, provider);
}

export function getContractInsL1() {
  if (contractIns === undefined) {
    return undefined;
  }
  return contractIns;
}

export async function getTotalValueFromContract(assetIdx) {
  const ret = await (
    await getContractAddressAndSetContractIns()
  ).get_total_value(assetIdx);
  return ret.toString();
}

export default {
  setContractInsL1,
  getContractInsL1,
};
