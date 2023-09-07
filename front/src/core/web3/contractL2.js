import { JsonRpcProvider, Contract } from "ethers";
import { getContractAddress, getL2ContractAddress } from "../http/http";
import ProofOfReservesContract from "./ProofOfReservesContractL2";
import config from "../config";
// import fs from 'fs';

let provider = new JsonRpcProvider("http://127.0.0.1:7545", undefined, {
  batchMaxCount: 1,
});
let contractIns = undefined;
let contractABI = ProofOfReservesContract["abi"];
let contractAddr = undefined;

export async function getContractAddressAndSetContractIns(abi = contractABI) {
  if (contractAddr != undefined) return contractIns;
  setContractInsL2(await getL2ContractAddress(), abi);
  return contractIns;
}

export function setContractInsL2(address, abi = contractABI) {
  console.log(abi);
  console.log(address);
  contractAddr = address;
  contractIns = new Contract(address, abi, provider);
}

export function getContractInsL2() {
  if (contractIns === undefined) {
    return getContractAddressAndSetContractIns();
  }
  return contractIns;
}

export async function getCommitmnetCnt(assetIdx) {
  return await (
    await getContractAddressAndSetContractIns()
  ).get_commitment_cnt(assetIdx);
}

export async function getAllCommitments(assetIdx) {
  let arr = [];
  let ret = await (
    await getContractAddressAndSetContractIns()
  ).get_all_commitments(assetIdx);
  // console.log(ret);
  for (let i = 0; i < ret.length; i++) {
    let tmp = ret[i.toString()];
    arr.push([tmp[0], tmp[1]]);
  }

  return arr;
}

export async function getSumOfCommitmets(assetIdx) {
  const ret = await (
    await getContractAddressAndSetContractIns()
  ).get_sum_of_commitments(assetIdx);
  // console.log(ret);
  return ret;
}

export default {
  setContractInsL2,
  getContractInsL2,
  getCommitmnetCnt,
  getAllCommitments,
};
