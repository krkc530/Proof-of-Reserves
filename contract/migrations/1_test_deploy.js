const fs = require('fs');
const voca = require('voca');
const _ = require('lodash');

const pairingBN128Lib = artifacts.require('Pairing');
const ccGroth16Bn128Lib = artifacts.require('ccGroth16BN128');
const proofOfReserves = artifacts.require('ProofOfReservesContract');

const prepareVk = (vkString) => {
    let result = vkString;
    result = voca.replaceAll(result, 'QuadExtField', '');
    result = voca.replaceAll(result, 'BigInt', '');
    result = voca.replaceAll(result, '(', '');
    result = voca.replaceAll(result, ')', '');
    result = voca.replaceAll(result, '[', '');
    result = voca.replaceAll(result, ']', '');
    return result;
}

const parseG2 = (g2String) => {
    let result = g2String;
    result = voca.replaceAll(result, '{', '');
    result = voca.replaceAll(result, '}', '');
    result = voca.replaceAll(result, 'c0:', '');
    result = voca.replaceAll(result, 'c1:', '');
    result = result.split(',');

    result = result.map(x => BigInt(x))

    for(i=0;i<result.length;i+=2){
        let tmp = result[i];
        result[i] = result[i+1];
        result[i+1] = tmp;
    }

    return result;
}

const parseG1 = (g1String, radix=10) => {
    let result = g1String;
    result = result.split(',');

    result = result.map(x => BigInt(x).toString(radix))

    return result;
}

/**
 * 
 * @param {Array<BigInt>} sliceArr 
 */
const arrToAffine = (sliceArr, radix = 10) => {
    let Affine = []
    const len = sliceArr.length;

    for (let i = 0; i < len; i += 4) {
        let tmp = BigInt(0);
        for (let j = 3; j >= 0; j--) {
            tmp = tmp << BigInt(64);
            tmp += sliceArr[i + j];
        }
        Affine.push(tmp.toString(radix));
    }
    return Affine;
}

// let vkString ='{"alpha_g1":"(17852767873561159599209236125683795018966032071233371417985565189253411755543, 18603560433620198276905541018676510600361867071688422142957802985909402114678)","beta_g2":"(QuadExtField { c0: BigInt([476265901820462279, 13660656044257908064, 8412373337619394574, 2339103847573096711]), c1: BigInt([7257967342945106922, 424655545535540654, 10437649696771391658, 2043497577339397504]) }, QuadExtField { c0: BigInt([7549794667030092860, 12091472045934412889, 2042203846608129708, 3128456718281096167]), c1: BigInt([14251325668819487764, 18344948284702183865, 5708385434484838422, 1079126408711903980]) })","delta_g2":"(QuadExtField { c0: BigInt([5889638169522027653, 11103043464687642883, 12669454444038815541, 537241994131948866]), c1: BigInt([18246550204863788552, 4510383930737423002, 5403672835038642803, 330485621666458856]) }, QuadExtField { c0: BigInt([18080502540756873331, 16565057916665385078, 3771680086331732347, 2011125339598009827]), c1: BigInt([93762760187776114, 13110647528829513059, 17094684942484837362, 2092936316597786907]) })","gamma_abc_g1_0":"(21026995478701907804785064744978024566867057457688454831493531734751264095203, 15829721228471753455665584514925107616258669625903265595663233200200956692113)","gamma_g2":"(QuadExtField { c0: BigInt([8193645778261900289, 4834919303330060503, 11145740180955144293, 2228907344805196192]), c1: BigInt([2364107356591370440, 14740245067035687811, 11898824449386765704, 2914868381588809657]) }, QuadExtField { c0: BigInt([518945805511187219, 8634096964524037268, 12090326064236783812, 2066328747314500794]), c1: BigInt([9431315664255518579, 14368190573331388898, 3949373351069622642, 2529753536829180932]) })"}'
let vkString = '{"alpha_g1":"(17852767873561159599209236125683795018966032071233371417985565189253411755543, 18603560433620198276905541018676510600361867071688422142957802985909402114678)","beta_g2":"(QuadExtField { c0: BigInt([476265901820462279, 13660656044257908064, 8412373337619394574, 2339103847573096711]), c1: BigInt([7257967342945106922, 424655545535540654, 10437649696771391658, 2043497577339397504]) }, QuadExtField { c0: BigInt([15229566277959115019, 17272396172253021747, 11238988104666565040, 358541548521874498]), c1: BigInt([8528035276169720115, 11018919933485250771, 7572806516789856326, 2407871858091066685]) })","delta_g2":"(QuadExtField { c0: BigInt([5889638169522027653, 11103043464687642883, 12669454444038815541, 537241994131948866]), c1: BigInt([18246550204863788552, 4510383930737423002, 5403672835038642803, 330485621666458856]) }, QuadExtField { c0: BigInt([4698858404232334548, 12798810301522049558, 9509511864942962401, 1475872927204960838]), c1: BigInt([4238854111091880149, 16253220689357921578, 14633251082499409002, 1394061950205183757]) })","gamma_abc_g1_0":"(21026995478701907804785064744978024566867057457688454831493531734751264095203, 15829721228471753455665584514925107616258669625903265595663233200200956692113)","gamma_g2":"(QuadExtField { c0: BigInt([8193645778261900289, 4834919303330060503, 11145740180955144293, 2228907344805196192]), c1: BigInt([2364107356591370440, 14740245067035687811, 11898824449386765704, 2914868381588809657]) }, QuadExtField { c0: BigInt([3813671065768469044, 2283027179953845753, 1190865887037910937, 1420669519488469871]), c1: BigInt([13348045280733689300, 14995677644856045738, 9331818600205072106, 957244729973789733]) })"}'

vkString = prepareVk(vkString);

let vkJson = JSON.parse(vkString);

vkJson['alpha_g1'] = parseG1(vkJson['alpha_g1']);
vkJson['beta_g2'] = parseG2(vkJson['beta_g2']);
vkJson['delta_g2'] = parseG2(vkJson['delta_g2']);
vkJson['gamma_g2'] = parseG2(vkJson['gamma_g2']);
vkJson['gamma_abc_g1_0'] = parseG1(vkJson['gamma_abc_g1_0']);
console.log(vkJson);

// vkJson['alpha_g1'] = arrToAffine(vkJson['alpha_g1']);
vkJson['beta_g2'] = arrToAffine(vkJson['beta_g2']);
vkJson['delta_g2'] = arrToAffine(vkJson['delta_g2']);
vkJson['gamma_g2'] = arrToAffine(vkJson['gamma_g2']);
// vkJson['gamma_abc_g1_0'] = arrToAffine(vkJson['gamma_abc_g1_0']);
console.log(vkJson, typeof vkJson);

let params = []

_.forIn(vkJson, (value, key) => {
    console.log(key, value);
    params = params.concat(value);
})

console.log("params : ", params);
console.log("params length : ", params.length);

module.exports = function (deployer) {
    deployer.deploy(ccGroth16Bn128Lib);
    deployer.link(ccGroth16Bn128Lib, proofOfReserves);
    deployer.deploy(proofOfReserves, params);
}