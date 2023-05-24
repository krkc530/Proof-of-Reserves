import fs from 'fs';

import {
    jsonToContractFormat
} from "../string.js"

describe('Test', () => {
    const vk = JSON.parse(fs.readFileSync('./vk.json', 'utf8'));
    const proof = JSON.parse(fs.readFileSync('./proof.json', 'utf8'));

    it("test vk ", () => {
        const vkContractFormat = jsonToContractFormat(vk);
        console.log(vkContractFormat, vkContractFormat.length);
    })

    it("test proof ", () => {
        const proofContractFormat = jsonToContractFormat(proof);
        console.log(proofContractFormat, proofContractFormat.length);
    })
})