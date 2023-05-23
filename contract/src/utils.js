const voca = require('voca');
const _ = require('lodash');

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

const proofToArr = (obj) => {
    let arr = []
    _.forIn(obj, (v, k) => {
      arr = arr.concat(v);
    })
    return arr;
  }

module.exports = {
    prepareVk,
    parseG1,
    parseG2,
    arrToAffine,
    proofToArr
}