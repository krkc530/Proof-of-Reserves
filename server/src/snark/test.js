import legogroth from "../../napirs-legogroth16/index.js"

describe("test snark", () => {
    it("test setup", () => {
        legogroth.paramsBn128(1234);
    })

    it("test prove", () => {
        legogroth.proof("kkb", "123", 112200);
    })
})