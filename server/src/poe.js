import mimc from "./utils/mimc.js";
import math from "./utils/math.js";
import Curve from "./crypto/curve.js";
import CurveParam from "./crypto/curveParam.js";
import Web3 from "web3";
import fs from "fs";
import _ from "lodash";

var ContractJson = JSON.parse(
    fs.readFileSync("../../contract/build/contracts/PoExpBn128.json", "utf-8")
);
const w3 = new Web3("http://127.0.0.1:7545");
const ins = new w3.eth.Contract(ContractJson.abi);
let contractAddr = undefined;

const deploy = async (...params) => {
    const addr = "0x97A247F3850bFc77a690da2Dcb587CcB0C8a39bC";
    const privateKey =
        "da36625bb72699e79f63b57d87347eec38e8c171fe6ccc5381761b4f8f04c777";

    const rawTx = ins.deploy({
        data: ContractJson.bytecode,
        arguments: params,
    });

    const gas = await rawTx.estimateGas();
    // console.log("await rawTx.estimateGas() : ", gas);
    const signedTx = await w3.eth.accounts.signTransaction(
        {
            from: `${addr}`,
            data: rawTx.encodeABI(),
            gas: gas,
            gasPrice: "0x1",
        },
        `${privateKey}`
    );

    const receipt = await w3.eth.sendSignedTransaction(signedTx.rawTransaction);
    // console.log("receipt :", receipt);
    console.log(`Contract deployed at address: ${receipt.contractAddress}`);

    ins.options.address = receipt.contractAddress;
    contractAddr = receipt.contractAddress;

    return receipt;
};

const verifyBN128 = async (...inputs) => {
    try {
        let [tX, tY, s, v, yX, yY, cm] = inputs;
        let proof = [tX, tY, s];
        let input = [v, yX, yY, cm];
        const result = await ins.methods.verifyBN128(proof, input).call();
        console.log("Verify: ", result);
    } catch (err) {
        console.log("Error occur: \n", err);
    }
};

const prove = (hX, hY, yX, r, curve) => {
    // let hY = curve.computeYCoord(hX);
    let h = new Curve.AffinePoint(hX, hY);
    curve.checkPointOnCurve(h);
    const mimc7 = new mimc.MiMC7();

    let gamma = BigInt(math.randomFieldElement());

    let tX = curve.multscalar(hX, gamma);

    let c = mimc7.hash([hX, hY, yX, tX]); // 문제점: 현재 input들이 bigint 타입이 아닌 undefined로 입력됨
    // let c = mimc7.hash(mimc7.hash(mimc7.hash(hX, hY), yX), tX);
    console.log("c\t: ", c.toString(16));

    let s = gamma + c * r;

    return [s, tX];
};

const requestVerify = (v, yX, yY, s, tX, curve) => {
    let tY = curve.computeYCoord(tX);
    let t = new Curve.AffinePoint(tX, tY);
    curve.checkPointOnCurve(t);

    let proof = [tX, tY, s];
    let inputs = [v, yX, yY, cm];

    return verifyBN128(proof, inputs);
};

const setCurve = () => {
    let cvParam = CurveParam("EC_ALT_BN128");
    let curve = new Curve.MontgomeryCurve(cvParam);
    return curve;
};

// test
// let proof = { tX, tY, s };
// let inputs = { v, yX, yY, cm };
let curve = setCurve();
let gX = curve.g;
let gY = curve.computeYCoord(gX);
// let gX =
//     10398164868948269691505217409040279103932722394566360325611713252123766059173n;
// let gY =
//     18596358737454405214613879660253479705643019753752739890010298487552088498960n;
console.log("gX: ", gX);
console.log("gY: ", gY);
let hX = curve.multscalar(gX, BigInt(math.randomFieldElement()));
let hY = curve.computeYCoord(hX);
// let hX =
//     6039291204268373030362908626301158395944446986559486142429114159767272214213n;
// let hY =
//     1384724759192183594287808796625002735462820094407981506974141431614742812216n;
console.log("hX: ", hX);
console.log("hY: ", hY);
let g = new Curve.AffinePoint(gX, gY);
let h = new Curve.AffinePoint(hX, hY);
curve.checkPointOnCurve(h);

const poexp = deploy(gX, gY, hX, hY);

let r = 3n,
    v = 6n;

let yX = curve.multscalar(hX, r);
let yY = curve.computeYCoord(yX);
console.log("yX: ", yX);
console.log("yY: ", yY);
let y = new Curve.AffinePoint(yX, yY);

let cm = curve.addAffinePoint(curve.computeScalarMul(g, v), y);
console.log("cmX: ", cm.x);
console.log("cmY: ", cm.y);

let [s, tX] = prove(hX, hY, yX, r, curve);
console.log("s: ", s);
console.log("tX: ", tX);
let tY = curve.computeYCoord(tX);
console.log("tY: ", tY);
let result = requestVerify(v, yX, yY, s, tX, curve);
console.log(result);

// end of test
/**
 ** Test Value
 *
 * g  = (10398164868948269691505217409040279103932722394566360325611713252123766059173n, 18596358737454405214613879660253479705643019753752739890010298487552088498960n)
 * h  = (6039291204268373030362908626301158395944446986559486142429114159767272214213n,  1384724759192183594287808796625002735462820094407981506974141431614742812216n)
 * cm = (17919781421050078749467487064925962975586909726361376864580447828085744236399n, 13640228193021055318858764804500822238804882511401358086568203198784753078053n)
 * t  = (4040818440838952847724534098399783490976449942291427974656271383460828102581n,  17629722388518730338494832195529782970767066633963034872900018227363833812445n)
 * v  = 6n
 * r  = 3n
 * y  = (8086018920028813509110335210842347695594566496999421045757886506518189509009n, 6890003984277359997467829335630101104276602641704073161739992420458962946061n)
 * c  = 153a9487ee2b9a1e99fc3cc4b7f0043f42382a8ed7b4ff73a407a5bb5b8bc720
 *    0x153A9487EE2B9A1E99FC3CC4B7F0043F42382A8ED7B4FF73A407A5BB5B8BC720 (contract)
 * s  = 49095930537543229633841632926942211423303365359356808756484676972622901915619n
 * 10398164868948269691505217409040279103932722394566360325611713252123766059173, 18596358737454405214613879660253479705643019753752739890010298487552088498960, 6039291204268373030362908626301158395944446986559486142429114159767272214213, 1384724759192183594287808796625002735462820094407981506974141431614742812216
 * [4040818440838952847724534098399783490976449942291427974656271383460828102581, 17629722388518730338494832195529782970767066633963034872900018227363833812445, 49095930537543229633841632926942211423303365359356808756484676972622901915619]
 * [6, 8086018920028813509110335210842347695594566496999421045757886506518189509009, 6890003984277359997467829335630101104276602641704073161739992420458962946061,17919781421050078749467487064925962975586909726361376864580447828085744236399, 13640228193021055318858764804500822238804882511401358086568203198784753078053]

 */

/**
 * 문제점
 * 1. 현재 generator를 어떻게 받아올 것인가? <== Class 형식으로 constructor에서 받아오도록 하자. (임시 또는 병합할 때 해결할 예정)
 * 2. SNARK를 쓰지 않고 r을 어떻게 private input으로 설정 할 수 있을까?
 *      => 상관 없다. Contract에만 input으로 넘기지만 않으면 된다. (완)
 * 3. ㅇㅅㅇ
 */
