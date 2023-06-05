/* global BigInt */

import math from '../utils/math.js';
import Config from '../config.js';
import CurveParam, { WeierstrassCurveParam } from './curveParam.js';

BigInt.prototype.mod = function(n){
    return ((this % n) + n)%n;
};

class AffinePoint{
    constructor(x , y, inf=false){
        this.x = BigInt(x);
        this.y = BigInt(y);
        this.inf = inf;
    }

    show() {
        return '(' + this.x.toString(16) + ' , ' + this.y.toString(16) + ')';
    }
}

class MontgomeryCurve{
    constructor(CurveParam){
        this.prime = CurveParam.prime;
        this.g = CurveParam.g;
        this.coefA = CurveParam.coefA;
        this.coefB = CurveParam.coefB;
    }

    preprocess(p, exp){
        let preTable = [p];

        for(let i =0;i<exp.toString(2).length; i+= 1){
            let baseP = preTable[preTable.length-1];
            preTable.push(this.doubleAffinePoint(baseP));
        }

        return preTable;
    }

    mul(preTable, exp) {
        let expBit = exp.toString(2).split('').reverse().join('');
        let result = preTable[preTable.length -1];

        for(const [i, value] of preTable.entries()){
            if(expBit[i] === '1'){
                result = this.addAffinePoint(result, value);
            }
        }
        result = this.subAffinePoint(result, preTable[preTable.length -1]);

        return result;
    }

    preprocessBasePoint(p){
        let newX = math.mod(p.x, this.prime);
        let newY = math.mod(p.y, this.prime);

        return new AffinePoint(newX, newY);
    }

    doubleAffinePoint(p) {
        let tmpX = math.mod(BigInt('3') * p.x *p.x + BigInt('2')*p.x*this.coefA + BigInt('1'),this.prime);
        let l1 = this.fieldDivision(tmpX, p.y * BigInt('2') * this.coefB);
        let b_l2 = math.mod(l1 * l1 * this.coefB, this.prime);
        let tmp1 = b_l2 - this.coefA; // The wired bug exists, to be fixed it later (line 84 ~ 86)
        let tmp2 = BigInt('2') * p.x;
        let tmp3 = tmp1 - tmp2;
        let newX =  math.mod(tmp3, this.prime);
        let newY = math.mod(((p.x * BigInt('3') + this.coefA - b_l2) * l1 - p.y),this.prime);

        return new AffinePoint(newX, newY);
    }

    addAffinePoint(p1, p2){
        let diffY = math.mod((p1.y - p2.y) ,this.prime);
        let diffX = math.mod((p1.x - p2.x) ,this.prime);
        let q = this.fieldDivision(diffY, diffX);
        let b_q2 = math.mod(((q * q) * this.coefB) , this.prime);
        let newX = math.mod((b_q2 - this.coefA - p1.x - p2.x) , this.prime);
        let newY = math.mod((q * (p1.x - newX) - p1.y) , this.prime);

        return new AffinePoint(newX, newY);
    }

    // 이거 쓰세요 BN254 경우
    addAffineG1(p1, p2) {
        if(p1.inf && p2.inf){return new AffinePoint(0,0,true);}
        if(p1.inf){return p2;}
        if(p2.inf){return p1;}

        let diffY = math.mod((p1.y - p2.y) ,this.prime);
        let diffX = math.mod((p1.x - p2.x) ,this.prime);
        let m = this.fieldDivision(diffY, diffX);
        let x3 = math.mod( m * m - p1.x - p2.x, this.prime);
        let y3 = math.mod( m * (p1.x - x3) - p1.y, this.prime);

        return new AffinePoint(x3, y3);
    }
    // 두배
    doubleAffineG1(p) {
        let s = math.mod( (3 * p.x * p.x + 2 * this.coefA * p.x + 1) * this.fieldDivision(1, 2 * this.coefB * p.y), this.prime);
    }

    subAffinePoint(p1, p2){
        let negP2 = new AffinePoint(p2.x, math.mod((-p2.y),this.prime));

        return this.addAffinePoint(p1, negP2);
    }

    fieldDivision(a, b) {
        return math.mod((a * math.modInv(b, this.prime)),this.prime);
    }

    checkScalar(value){
        return value.toString(2).length <= this.prime.toString(2).length;
    }

    computeYCoord(x) {
        let squared = math.mod(((x*x*x) + this.coefA * (x*x)+ x), this.prime);
        let ySquared = this.fieldDivision(squared, this.coefB);
        let y = math.modularSqrt(ySquared, this.prime);
        return y;
    }

    checkPointOnCurve(p) {
        let lhs = math.mod((math.modPow(p.y, BigInt('2'), this.prime) * this.coefB), this.prime);
        let rhs = math.mod((math.modPow(p.x , BigInt('3'), this.prime) + this.coefA * math.modPow(p.x, BigInt('2'), this.prime) + p.x), this.prime);
        console.assert(lhs === rhs, 'lsh != rhs');
    }

    computeScalarMul(p, exp) {
        let bp = this.preprocessBasePoint(p);
        this.checkPointOnCurve(bp);
        let preTable = this.preprocess(bp, exp);
        let output = this.mul(preTable, exp);
        return output;
    }
}


export class WeierstrassCurve {
    constructor(wCurveParam=WeierstrassCurveParam()){
        this.PRIME = wCurveParam.PRIME;
        this.ORDER = wCurveParam.ORDER;
        this.A = wCurveParam.A;
        this.B = wCurveParam.B;
    }

    addAffineG1(p1, p2) {
        if(p1.inf && p2.inf){return new AffinePoint(0,0,true);}
        if(p1.inf){return p2;}
        if(p2.inf){return p1;}

        let diffY = math.mod((p1.y - p2.y) ,this.PRIME);
        let diffX = math.mod((p1.x - p2.x) ,this.PRIME);
        let m = this.fieldDivision(diffY, diffX);
        let x3 = math.mod( m * m - p1.x - p2.x, this.PRIME);
        let y3 = math.mod( m * (p1.x - x3) - p1.y, this.PRIME);

        return new AffinePoint(x3, y3);
    }

    /**
     * 
     * @param {AffinePoint} p 
     * @param {BigInt} n 
     */
    scalarMulG1(p, n){
        if(typeof n !== 'bigint'){throw new Error("n must be bigint type");}
        let tmp = p;
        let result = new AffinePoint(0,0,true);
        let nBit = n.toString(2);
        
        for(let i=nBit.length-1; i>=0; i--) {
            if(nBit[i] === '1'){
                result = this.addAffineG1(result, tmp);
            }
            tmp = this.doubleAffineG1(tmp);
        }

        return result;
    }

    /**
     * 
     *  s = (3x1^2 + a) / 2y1 
     * xr = s^2 - 2x1
     * yr = s(x1 - xr) - y1
     * @param {AffinePoint} p 
     * @returns 
     */
    doubleAffineG1(p) {
        const s = this.fieldDivision( 
            math.mod((BigInt('3') * p.x * p.x + this.A ), this.PRIME), 
            BigInt('2')  * p.y
        );

        const xr = math.mod( s * s - BigInt('2') * p.x, this.PRIME);
        const yr = math.mod( s * (p.x - xr) - p.y, this.PRIME);

        return new AffinePoint(xr, yr);
    }

    fieldDivision(a, b) {
        return math.mod((a * math.modInv(b, this.PRIME)),this.PRIME);
    }
}


/**
 *
 * @param {BigInt}      baseX       base point's 'x' coord
 * @param {BigInt}      exp         expo value
 * @returns {BigInt}                computed point's 'x' coord
 */
export function multscalar(baseX, exp, curveOption){
    let cvParam = curveOption !== undefined ? CurveParam(curveOption) : CurveParam(Config.EC_TYPE);
    let curve = new MontgomeryCurve(cvParam);
    let baseY = curve.computeYCoord(baseX);
    let bp = new AffinePoint(baseX, baseY);
    curve.checkPointOnCurve(bp);
    let result = curve.computeScalarMul(bp, exp);
    curve.checkPointOnCurve(result);

    return result.x;
}

/**
 *
 * @param {BigInt}      exp         expo value
 * @returns {BigInt}                computed point's 'x' coord
 */
export function basePointMul(exp, curveOption){
    let cvParam = curveOption !== undefined ? CurveParam(curveOption) : CurveParam(Config.EC_TYPE);
    let curve = new MontgomeryCurve(cvParam);
    let baseY = curve.computeYCoord(curve.g);
    let bp = new AffinePoint(curve.g, baseY);
    curve.checkPointOnCurve(bp);
    let result = curve.computeScalarMul(bp, exp);
    curve.checkPointOnCurve(result);
    return result.x;
}

const Curve = {
    AffinePoint,
    MontgomeryCurve,
    WeierstrassCurve,
    multscalar,
    basePointMul
};

export default Curve;