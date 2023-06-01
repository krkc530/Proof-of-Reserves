import mimc from "../src/crypto/mimc.js";
import {keccak256} from '@ethersproject/keccak256';
import {toUtf8Bytes} from '@ethersproject/strings';
import { hexToInt, hexToBytes } from "../src/utils/types.js";


describe("MiMC", () => {
    const mimc_seed = "mimc7_seed";

    it("mimc", () => {
        console.log("1\t",toUtf8Bytes(mimc_seed))
        console.log("2\t", BigInt(keccak256(toUtf8Bytes(mimc_seed))))
        // console.log("3\t",keccak256("1"))
    })
})