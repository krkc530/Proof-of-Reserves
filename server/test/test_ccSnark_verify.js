import voca from 'voca';
import Curve from '../src/crypto/curve.js';
import CurveParam from '../src/crypto/curveParam.js';

describe('ccSnark Verify TEST', () => {
    
    let vkString ='{"alpha_g1":"(17852767873561159599209236125683795018966032071233371417985565189253411755543, 18603560433620198276905541018676510600361867071688422142957802985909402114678)","beta_g2":"(QuadExtField { c0: BigInt([476265901820462279, 13660656044257908064, 8412373337619394574, 2339103847573096711]), c1: BigInt([7257967342945106922, 424655545535540654, 10437649696771391658, 2043497577339397504]) }, QuadExtField { c0: BigInt([7549794667030092860, 12091472045934412889, 2042203846608129708, 3128456718281096167]), c1: BigInt([14251325668819487764, 18344948284702183865, 5708385434484838422, 1079126408711903980]) })","delta_g2":"(QuadExtField { c0: BigInt([5889638169522027653, 11103043464687642883, 12669454444038815541, 537241994131948866]), c1: BigInt([18246550204863788552, 4510383930737423002, 5403672835038642803, 330485621666458856]) }, QuadExtField { c0: BigInt([18080502540756873331, 16565057916665385078, 3771680086331732347, 2011125339598009827]), c1: BigInt([93762760187776114, 13110647528829513059, 17094684942484837362, 2092936316597786907]) })","gamma_abc_g1_0":"(21026995478701907804785064744978024566867057457688454831493531734751264095203, 15829721228471753455665584514925107616258669625903265595663233200200956692113)","gamma_g2":"(QuadExtField { c0: BigInt([8193645778261900289, 4834919303330060503, 11145740180955144293, 2228907344805196192]), c1: BigInt([2364107356591370440, 14740245067035687811, 11898824449386765704, 2914868381588809657]) }, QuadExtField { c0: BigInt([518945805511187219, 8634096964524037268, 12090326064236783812, 2066328747314500794]), c1: BigInt([9431315664255518579, 14368190573331388898, 3949373351069622642, 2529753536829180932]) })"}'
    let proof = '{"a":"(6816668668471313958680220385113037009641901823102651163685570559919019490725, 1131039061874675590710543084181265209942821547121516082072521432203807876563)","b":"(QuadExtField { c0: BigInt([10722374589530658923, 5270264054726222964, 9809998763449676853, 3014687813029311774]), c1: BigInt([15962731169084934441, 5092853713360773985, 9730242827705258273, 3248861598461612676]) }, QuadExtField { c0: BigInt([1267509877046156236, 15134334058755184323, 4641524140176811788, 952766646510172599]), c1: BigInt([358662306732684028, 10969756032290119872, 6792341888584573548, 1101383607209189269]) })","c":"(17085529532819901834253789668097208014416635738668156160001174291922441366213, 14883290790166787111813184662095919626191481138017164522650272398982155087976)","d":"(10628878187431463915727069740849968982158399433099915408354856955180891242172, 21766210813743405297781664988936493153785402332235992748419207315858943955631)"}';

    it('test', () => {
        proof = prepareString(proof);
        console.log(proof);

        let proofJson = JSON.parse(proof);
        console.log(proofJson)  

        proofJson['a'] = parseG1(proofJson['a']);
        proofJson['b'] = arrToAffine(parseG2(proofJson['b']));
        proofJson['c'] = parseG1(proofJson['c']);
        proofJson['d'] = parseG1(proofJson['d']);
        console.log(proofJson);

        vkString = prepareString(vkString);
        let vkJson = JSON.parse(vkString);
        console.log(vkJson);

        vkJson['alpha_g1']      = parseG1(vkJson['alpha_g1']);
        vkJson['beta_g2']       = arrToAffine(parseG2(vkJson['beta_g2']));
        vkJson['delta_g2']      = arrToAffine(parseG2(vkJson['delta_g2']));
        vkJson['gamma_g2']      = arrToAffine(parseG2(vkJson['gamma_g2']));
        vkJson['gamma_abc_g1_0']= parseG1(vkJson['gamma_abc_g1_0']);
        console.log(vkJson);

        let proofD = new Curve.AffinePoint(proofJson['d'][0], proofJson['d'][1]);
        let gammaABCg1_0 = new Curve.AffinePoint(vkJson['gamma_abc_g1_0'][0], vkJson['gamma_abc_g1_0'][1]);
        
        let montgomeryCurve = new Curve.MontgomeryCurve(CurveParam('EC_BN254'));
        proofD = montgomeryCurve.addAffinePoint(
            montgomeryCurve.preprocessBasePoint(proofD), 
            montgomeryCurve.preprocessBasePoint(gammaABCg1_0)
        );

        // console.log(proofD);
        // console.log(gammaABCg1_0);
        // console.log(proofD);

        // (
        //     10628878187431463915727069740849968982158399433099915408354856955180891242172, 
        //     21766210813743405297781664988936493153785402332235992748419207315858943955631
        // )
        // (
        //     21026995478701907804785064744978024566867057457688454831493531734751264095203, 
        //     15829721228471753455665584514925107616258669625903265595663233200200956692113
        // )
        // (
        //     5637112125423955686285889638551993250798214992406574991602416499328266111643, 
        //     3906720224265609222625505916221288877198892593316919514403252288496011141435
        // )
        
        let a = new Curve.AffinePoint(
            '10628878187431463915727069740849968982158399433099915408354856955180891242172',
            '21766210813743405297781664988936493153785402332235992748419207315858943955631'
        );
        let b = new Curve.AffinePoint(
            '21026995478701907804785064744978024566867057457688454831493531734751264095203',
            '15829721228471753455665584514925107616258669625903265595663233200200956692113'
        );
    
        console.log(
            montgomeryCurve.addAffinePoint(a, b)
        );
        console.log(
            montgomeryCurve.addAffineG1(a,b)
        );
    })

    const prepareString = (myString) => {
        let result = myString;
        result = voca.replaceAll(result, 'QuadExtField', '');
        result = voca.replaceAll(result, 'BigInt', '');
        result = voca.replaceAll(result, '(', '');
        result = voca.replaceAll(result, ')', '');
        result = voca.replaceAll(result, '[', '');
        result = voca.replaceAll(result, ']', '');
        return result;
    }

    const parseG1 = (g1String, radix=10) => {
        let result = g1String;
        result = result.split(',');
        
        result = result.map(x => BigInt(x).toString(radix))
    
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

    const arrToAffine = (sliceArr, radix=10) => {
        let Affine = [];
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
})