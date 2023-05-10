import legogro16 from '../napirs-legogroth16/index.js';
import path from 'path';

describe('legoro16 test', () => {

    it('test setup',  async () => {
        console.log(path.resolve('../napirs-legogroth16/circom/bn128/range_proof.r1cs'))
        legogro16.setupFromCircomR1CsBn128(
            path.resolve('../napirs-legogroth16/circom/bn128/range_proof.r1cs'),
            1,
            randomNumber(),
            path.resolve('./pk.bin'),
            path.resolve('./vk.bin')
        );
    })

    it('test prove', async () => {
        legogro16.proveRangeBn128(
            path.resolve('../napirs-legogroth16/circom/bn128/range_proof.r1cs'),
            path.resolve('../napirs-legogroth16/circom/bn128/range_proof.wasm'),
            path.resolve('./pk.bin'),
            path.resolve('./proof.bin'),
            '0x123123ff',
            randomNumber()
        );

        console.log('test proof : ', JSON.parse(legogro16.getProofBn128(path.resolve('./proof.bin'))));
    })

    it('test verify', async () => {
        legogro16.verifyRangeBn128(
            path.resolve('./vk.bin'),
            path.resolve('./proof.bin'),
        );
    })
})

const randomNumber = () => {
    return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
}