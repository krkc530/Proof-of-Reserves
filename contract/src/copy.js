const fs = require('fs');


const copyJson = (from, to) => {
    const contractJson = fs.readFileSync(from, 'utf-8');

    fs.writeFileSync(to, "export default " + contractJson);
}

const from = process.argv[2];
const to   = process.argv[3];

copyJson(__dirname + from , to);

//'/../build/contracts/ProofOfReservesContract.json'