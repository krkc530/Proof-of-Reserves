import legoroth from '../napirs-legogroth16/index.js'


// console.assert(plus100(0) === 100, 'Simple test failed')
console.log(legoroth.paramsBn128(11));
console.log(legoroth.proof("dong", "222", 11));
console.log(legoroth.verifyTheProof("dong"));
// console.log(getTotalPedCm(["Kim","dong"]));
// console.log(verifyPedTotalCm());
// console.info('Simple test passed')