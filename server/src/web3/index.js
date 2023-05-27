import fs from "fs";
import proofOfReserveContract from "./contract.js";
import Ganache from "./ganache.js";
import config from "../config.js";
import {
    vkFileToContractFormat,
} from "../utils/string.js"

const contractJson = JSON.parse(fs.readFileSync(config.PATH.homePath + 'src/web3/ProofOfReservesContract.json', 'utf-8'));

const vkPath = config.PATH.proofPath + "Proof_vk/VK.json"

const porContract = await proofOfReserveContract.deployAndconstruct(
    Ganache.getAddress(),
    Ganache.getPrivateKey(),
    vkFileToContractFormat(vkPath),
    config.testProvider,
    contractJson.abi,
    contractJson.bytecode
)

export default porContract;