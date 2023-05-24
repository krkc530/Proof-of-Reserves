import Web3 from 'web3';


const Deploy = async (from, sk, params, rpc, abi, bytecode, gasPrice = '0x01') => {
    const web3 = new Web3(rpc);

    const contract = new web3.eth.Contract(abi);

    const deployTx = contract.deploy({
        data: bytecode,
        arguments: params
    })

    const signedDeployTx = await web3.eth.accounts.signTransaction({
            from: from,
            data: deployTx.encodeABI(),
            gas: await deployTx.estimateGas(),
            gasPrice: gasPrice
        },
        sk
    )

    const receipt = await web3.eth.sendSignedTransaction(
        signedDeployTx.rawTransaction
    )

    return receipt
}

export default Deploy;