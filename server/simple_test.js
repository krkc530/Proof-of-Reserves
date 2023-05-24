const { plus100,paramsBn128,proof,verifyTheProof,totalPedCm,verifyPedTotalCm } = require('./napirs-legogroth16/index.js')



// console.assert(plus100(0) === 100, 'Simple test failed')
console.log(paramsBn128(11));
console.log(proof("dong","222",11));
console.log(verifyTheProof("dong"));
// console.log(getTotalPedCm(["Kim","dong"]));
// console.log(verifyPedTotalCm());
// console.info('Simple test passed')
