import fs from "fs";
import config from "../config.js";
import { pedersenGenToContractFormat } from "../utils/string.js";

let sigmaProtocolInstance = undefined;

class SigmaProtocol {
    constructor(g, h) {

    }
    static generateInstance() {
        try {
            // const vk = JSON.parse(fs.readFileSync(config.PATH.proofPath + "Ped_cm/generator.json", "utf8"));
            
            const ret = pedersenGenToContractFormat(config.PATH.proofPath + "Ped_cm/generator.json");

            return "hi";
        } catch (error) {
            return undefined;
        }
    }
}


export default () => {
    if(sigmaProtocolInstance === undefined){
        sigmaProtocolInstance = SigmaProtocol.generateInstance();
    }
    return sigmaProtocolInstance
}