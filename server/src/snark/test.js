import legogroth from "../../napirs-legogroth16/index.js"

describe("test snark", () => {
    it("test setup", () => {
        legogroth.getRangeProofParamsGetBls12381();
    })

    it("test prove", () => {
        legogroth.getProof("kkb", "123");
    })
})