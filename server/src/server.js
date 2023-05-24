import config, {
    initConfig
} from "./config";

import porContract from "./web3";

const server = async () => {
    initConfig();

    const receipt = await porContract.uploadCommitment(
        config.homePath + 'keys/proof_sw.json'
    )
    console.log(receipt)
}

export default server;