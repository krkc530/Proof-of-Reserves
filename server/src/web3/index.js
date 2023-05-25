import fs from "fs";
import proofOfReserveContract from "./contract";
import Ganache from "./ganache";
import config from "../config";
import {
    vkFileToContractFormat,
} from "../utils/string.js"

const contractJson = JSON.parse(fs.readFileSync(config.homePath + '../../src/web3/ProofOfReservesContract.json', 'utf-8'));

const porContract = await proofOfReserveContract.deployAndconstruct(
    Ganache.getAddress(),
    Ganache.getPrivateKey(),
    vkFileToContractFormat(config.homePath + 'Proof_vk/VK.json'),
    config.testProvider,
    contractJson.abi,
    contractJson.bytecode
)

export default porContract;