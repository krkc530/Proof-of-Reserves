import voca from 'voca';

describe("test vkFormat", () => {
    it("test vkFormat", () => {
        let vkString ='{"alpha_g1":"(BigInt([10334430287288456727, 7228348736481749528, 13653274234761843061, 2844110009069559387]), BigInt([9463378473048513142, 345904539017913467, 2641087399476914178, 2963718164506407426]))","beta_g2":"(QuadExtField { c0: BigInt([476265901820462279, 13660656044257908064, 8412373337619394574, 2339103847573096711]), c1: BigInt([7257967342945106922, 424655545535540654, 10437649696771391658, 2043497577339397504]) }, QuadExtField { c0: BigInt([7549794667030092860, 12091472045934412889, 2042203846608129708, 3128456718281096167]), c1: BigInt([14251325668819487764, 18344948284702183865, 5708385434484838422, 1079126408711903980]) })","delta_g2":"(QuadExtField { c0: BigInt([5889638169522027653, 11103043464687642883, 12669454444038815541, 537241994131948866]), c1: BigInt([18246550204863788552, 4510383930737423002, 5403672835038642803, 330485621666458856]) }, QuadExtField { c0: BigInt([18080502540756873331, 16565057916665385078, 3771680086331732347, 2011125339598009827]), c1: BigInt([93762760187776114, 13110647528829513059, 17094684942484837362, 2092936316597786907]) })","gamma_g2":"(QuadExtField { c0: BigInt([8193645778261900289, 4834919303330060503, 11145740180955144293, 2228907344805196192]), c1: BigInt([2364107356591370440, 14740245067035687811, 11898824449386765704, 2914868381588809657]) }, QuadExtField { c0: BigInt([518945805511187219, 8634096964524037268, 12090326064236783812, 2066328747314500794]), c1: BigInt([9431315664255518579, 14368190573331388898, 3949373351069622642, 2529753536829180932]) })"}'
        vkString = prepareVk(vkString);
        
        let vkJson = JSON.parse(vkString);

        vkJson['alpha_g1'] = parseG1(vkJson['alpha_g1']);
        vkJson['beta_g2'] = parseG2(vkJson['beta_g2']);
        vkJson['delta_g2'] = parseG2(vkJson['delta_g2']);
        vkJson['gamma_g2'] = parseG2(vkJson['gamma_g2']);
        console.log(vkJson);

        vkJson['alpha_g1'] = arrToAffine(vkJson['alpha_g1']);
        vkJson['beta_g2'] = arrToAffine(vkJson['beta_g2']);
        vkJson['delta_g2'] = arrToAffine(vkJson['delta_g2']);
        vkJson['gamma_g2'] = arrToAffine(vkJson['gamma_g2']);
        console.log(vkJson);
    });
});

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

    return result;
}

const parseG1 = (g1String) => {
    let result = g1String;
    result = result.split(',');
    
    result = result.map(x => BigInt(x))

    return result;
}

/**
 * 
 * @param {Array<BigInt>} sliceArr 
 */
const arrToAffine = (sliceArr, radix=10) => {
    let Affine = []
    const len = sliceArr.length;

    for(let i = 0; i < len; i+=4) {
        let tmp = BigInt(0);
        for(let j = 3; j >= 0; j--) {
            tmp = tmp << BigInt(64);
            tmp += sliceArr[i + j];
        }
        Affine.push(tmp.toString(radix));
    }
    return Affine;
} 