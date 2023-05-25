import legogroth from "../../napirs-legogroth16/index.js"
import config from "../config.js";
import porContract from "../web3/index.js";

describe("test snark", () => {
    it("test setup", () => {
        legogroth.paramsBn128(1234);
    })

    it("test prove", async  () => {
        const max = 2 ** 32 - 1;

        for (let i = 0; i < 5; i++) {
            legogroth.proof(
                "kkb" + String(i), (i ** 2 + 3 * i).toString(),
                Math.floor(Math.random() * max)
            );

            console.log(await porContract.uploadCommitment(
                config.homePath + "napirs-legogroth16/json/Proof_vk/proof_" + "kkb" + String(i) + ".json"
            ));
        }
    }).timeout(1000000)

    it("test get all cm", async () => {
        const cmList = await porContract.getAllCommitments();
        console.log(cmList); 
    })

})