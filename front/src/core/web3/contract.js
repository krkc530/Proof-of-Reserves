import { JsonRpcProvider, Contract } from "ethers";
import { getContractAddress } from "../http/http";
import ProofOfReservesContract from "./ProofOfReservesContract";
import config from "../config";
// import fs from 'fs';

let   provider      = new JsonRpcProvider("http://127.0.0.1:7545");
let   contractIns   = undefined;
let   contractABI   = ProofOfReservesContract.abi;
let   contractAddr  = undefined;

export async function getContractAddressAndSetContractIns(abi=contractABI) {
    if (contractAddr) return contractIns;
    setContractIns(await getContractAddress(), abi);
}

export function setContractIns(address, abi=contractABI) {
    contractAddr= address;
    contractIns = new Contract(address, abi, provider);
}

export function getContractIns() {
    if(contractIns === undefined){
        return undefined
    }
    return contractIns;
}

export async function getCommitmnetCnt() {
    return await (await getContractAddressAndSetContractIns()).get_commitment_cnt();
}

export async function getAllCommitments() {
    let arr = [];
    let ret = await (await getContractAddressAndSetContractIns()).get_all_commitments();
    console.log(ret);
    for(let i=0; i<ret.length; i++){
        let tmp = ret[i.toString()];
        arr.push([tmp[0], tmp[1]]);
    }

    return arr;
}

export default {
    setContractIns,
    getContractIns,
    getCommitmnetCnt,
    getAllCommitments,
}