import legogro16 from '../napirs-legogroth16/index.js';
import path from 'path';

describe('legoro16 test', () => {

    const r1csPath = path.resolve('../napirs-legogroth16/circom/bn128/range_proof.r1cs')
    const wasmPath = path.resolve('../napirs-legogroth16/circom/bn128/range_proof.wasm');
    const pkPath = path.resolve('./crs/pk.bin')
    const vkPath = path.resolve('./crs/vk.bin')


    it('test setup',  async () => {
        legogro16.setupFromCircomR1CsBn128(
            r1csPath,
            1,
            randomNumber(),
            pkPath,
            vkPath
        );
    })

    it('test prove', async () => {
        for(let i = 0; i < 10; i++) {
            const proofPath = './proof/proof' + i + '.bin';
            const value = randomNumber().toString(16);

            legogro16.proveRangeBn128(
                r1csPath,
                wasmPath,
                pkPath,
                path.resolve(proofPath),
                value,
                randomNumber()
            );
    
            console.log('test proof : ', JSON.parse(legogro16.getProofBn128(path.resolve(proofPath))));
        }
    })
    
    it('test verify', async () => {
        const verifyResult  = legogro16.verifyRangeBn128(
            vkPath,
            path.resolve('./proof/proof1.bin'),
        );
        console.log('test verify\t: ', verifyResult);
    })
})

const randomNumber = () => {
    return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
}