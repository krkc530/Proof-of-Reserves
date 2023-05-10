import legogro16 from '../napirs-legogroth16/index.js';
import path from 'path';

describe('legoro16 test', () => {

    it('test setup',  async () => {
        console.log(path.resolve('../napirs-legogroth16/circom/bn128/range_proof.r1cs'))
        legogro16.setupFromCircomR1CsBn128(
            path.resolve('../napirs-legogroth16/circom/bn128/range_proof.r1cs'),
            1,
            randomNumber(),
            path.resolve('./crs/pk.bin'),
            path.resolve('./crs/vk.bin')
        );
    })

    it('test prove', async () => {
        for(let i = 0; i < 10; i++) {
            const proofPath = './proof/proof' + i + '.bin';
            const value = randomNumber().toString(16);
            console.log(i, "th value : ", value);
            legogro16.proveRangeBn128(
                path.resolve('../napirs-legogroth16/circom/bn128/range_proof.r1cs'),
                path.resolve('../napirs-legogroth16/circom/bn128/range_proof.wasm'),
                path.resolve('./crs/pk.bin'),
                path.resolve(proofPath),
                value,
                randomNumber()
            );
    
            console.log('test proof : ', JSON.parse(legogro16.getProofBn128(path.resolve(proofPath))));
        }
    })
    
    it('test verify', async () => {
        const verifyResult  = legogro16.verifyRangeBn128(
            path.resolve('./crs/vk.bin'),
            path.resolve('./proof/proof1.bin'),
        );
        console.log('test verify\t: ', verifyResult);
    })
})

const randomNumber = () => {
    return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
}