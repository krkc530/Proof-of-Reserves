import fs from "fs";
import proofOfReserveContract from "./contract.js";
import Ganache from "./ganache.js";
import config from "../config.js";
import {
    vkFileToContractFormat,
} from "../utils/string.js"

const contractJson = JSON.parse(fs.readFileSync(config.homePath + '../../src/web3/ProofOfReservesContract.json', 'utf-8'));

const vkPath = config.homePath + "napirs-legogroth16/json/Proof_vk/VK.json"

const porContract = await proofOfReserveContract.deployAndconstruct(
    Ganache.getAddress(),
    Ganache.getPrivateKey(),
<<<<<<< HEAD
    vkFileToContractFormat(vkPath),
=======
    vkFileToContractFormat(config.homePath + 'Proof_vk/VK.json'),
>>>>>>> 5ef2958eeb123cb02ec287c7c6827a045b63a6e5
    config.testProvider,
    contractJson.abi,
    contractJson.bytecode
)

export default porContract;