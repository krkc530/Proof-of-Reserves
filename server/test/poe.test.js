import poe from "../src/crypto/poe.js";
import { WeierstrassCurve, AffinePoint } from "../src/crypto/curve.js";

describe("poe", () => {
    it("poe", () => {
        const Poe = poe();
        const totalV = BigInt('123');
        const totalR = BigInt('123');
        const curve  = new WeierstrassCurve();

        const cm = curve.addAffineG1(
            curve.scalarMulG1( Poe.g, totalV),
            curve.scalarMulG1( Poe.h, totalR)
        )
        
        console.log("g : ", Poe.g);
        console.log("h : ", Poe.h);
        console.log("cm : ,", cm)
        
        console.log("y h^r", curve.scalarMulG1( Poe.h, totalR))
        const proof = Poe.prove(
            BigInt('123'),
            BigInt('123'),
        )
        console.log(proof)
    })
})

/*
[
    6041032167591746115101153665525543567142976074224459182899095563265784299363,
    9326425714299024539500933694186100348670733295236189566534064697053314527806,
    690297259005751019570991586823944938547165059560861456754471995318167903180,
    7972402032431685932584509075640364825559076836484819141333649726783946992167
]
*/