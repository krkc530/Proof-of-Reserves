import fs from "fs";
import config from "../config.js";
import { pedersenGenToContractFormat } from "../utils/string.js";
import Curve from "./curve.js";
import mimc from "./mimc.js";
import CurveParam, { WeierstrassCurveParam } from "./curveParam.js";
import math, { randomFieldElement, modPow } from "../utils/math.js";

let sigmaProtocolInstance = undefined;

class SigmaProtocol {
    /**
     * 
     * @param {Curve.AffinePoint} g : ccGroth16 gamma_abc_g1
     * @param {Curve.AffinePoint} h : ccGroth16 eta_gamma_inv_g1
     */
    constructor(g, h, curveType='EC_BN254') {
        this.mimc = new mimc.MiMC7();
        this.g = g;
        this.h = h;
        this.curveParam = WeierstrassCurveParam(curveType);
        this.WeierstrassCurve = new Curve.WeierstrassCurve(this.curveParam);
    }

    static generateInstance() {
        try {
            // const vk = JSON.parse(fs.readFileSync(config.PATH.proofPath + "Ped_cm/generator.json", "utf8"));
            const ret = pedersenGenToContractFormat(config.PATH.proofPath + "Ped_cm/generator.json");
            
            console.log(ret);

            return new SigmaProtocol(
                new Curve.AffinePoint(ret[0], ret[1]),
                new Curve.AffinePoint(ret[2], ret[3])
            )
        } catch (error) {
            console.log(error)
            return undefined;
        }
    }

    prove(
        value,
        random
    ) {
        const y  = this.WeierstrassCurve.scalarMulG1(this.h, random);
        const r_ = randomFieldElement();
        // t = h^r`
        const hr_ = this.WeierstrassCurve.scalarMulG1(this.h, r_);

        console.log('h : ', this.h)
        console.log("y : ", y)
        console.log("t : ", hr_)
        const c = this.mimc.hash(
            this.h.x.toString(16),
            y.x.toString(16),
            hr_.x.toString(16),
        )
        console.log("BigInt(c) : ", BigInt('0x' + c))
        const s = r_ + math.mod(BigInt('0x' + c) * random, this.WeierstrassCurve.PRIME);
        console.log('h r`',hr_)
        console.log('c',c)
        return {
            tx : hr_.x,
            ty : hr_.y,
            s : s
        }
    }
}


export default () => {
    if(sigmaProtocolInstance === undefined){
        sigmaProtocolInstance = SigmaProtocol.generateInstance();
    }
    return sigmaProtocolInstance;
}