const fs = require('fs');


const copyJson = (from, to) => {
    const contractJson = fs.readFileSync(from, 'utf-8');

    fs.writeFileSync(to, "export default " + contractJson);
}

const to = process.argv[2];

copyJson(__dirname + '/../build/contracts/ProofOfReservesContract.json', to);