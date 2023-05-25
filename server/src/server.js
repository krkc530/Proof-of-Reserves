import config from "./config.js";

import porContract from "./web3/index.js";

const server = async () => {

    const receipt = await porContract.uploadCommitment(
        config.homePath + 'keys/proof_sw.json'
    )
    console.log(receipt)
}

export default server;