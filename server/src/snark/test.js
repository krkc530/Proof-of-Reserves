import legogroth from "../../napirs-legogroth16/index.js"

describe("test snark", () => {
    it("test setup", () => {
        legogroth.paramsBn128(1234);
    })

    it("test prove", () => {
        const max = 2 ** 32 - 1;

        for (let i = 0; i < 10; i++) {
            legogroth.proof(
                "kkb" + String(i), (i ** 2 + 3 * i).toString(),
                Math.floor(Math.random() * max)
            );
        }
    })

    it("test aggregate", () => {
        let nameList = [];
        for (let i = 0; i < 10; i++) {
            nameList.push("kkb" + String(i));
        }

        legogroth.totalPedCm(nameList)
    })

    it("test verify", () => {
        console.log(legogroth.verifyTheProof("kkb"));
    })

})