import legogroth from '../napirs-legogroth16/index.js'


// console.assert(plus100(0) === 100, 'Simple test failed')
console.log(legogroth.paramsBn128(11));
console.log(legogroth.proof("dong", "222", 11));
console.log(legogroth.verifyTheProof("dong"));
// console.log(getTotalPedCm(["Kim","dong"]));
// console.log(verifyPedTotalCm());
// console.info('Simple test passed')