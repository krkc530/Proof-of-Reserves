import { JsonRpcProvider, Contract } from "ethers";
import { getContractAddress } from "../http/http";
import config from "../config";
import fs from 'fs';

const provider      = new JsonRpcProvider("http://localhost:7545");
const contractIns   = undefined;
const contractABI   = JSON.parse(fs.readFileSync(config.HOMEPATH + '/src/core/web3/ProofOfReservesContract.json', 'utf8'))["abi"];

export function setContractIns(address, abi=contractABI) {
    contractIns = new Contract(address, abi, provider);
}

export async function getContractIns() {
    if(contractIns === undefined){
        const address = await getContractAddress();
        setContractIns(address);
    }
    return contractIns;
}

export async function getCommitmnetCnt() {
    return await (await getContractIns()).get_commitment_cnt();
}

export async function getAllCommitments() {
    return await (await getContractIns()).get_all_commitments();
}

export default {
    setContractIns,
    getContractIns,
    getCommitmnetCnt,
    getAllCommitments,
}