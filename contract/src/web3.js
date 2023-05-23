const Web3 = require('web3');
const Ganache = require('./ganache.js');
const fs = require('fs');

const ContractJson = JSON.parse(fs.readFileSync(__dirname + '/../build/contracts/ProofOfReservesContract.json', 'utf-8'))
const w3 = new Web3('http://localhost:7545');
const ins = new w3.eth.Contract(ContractJson.abi)
let contractAddr = undefined

const deploy = async (...params) => {
    const addr = Ganache.getAddress();
    const privateKey = Ganache.getPrivateKey();

    const rawTx = ins.deploy({
        data: ContractJson.bytecode,
        arguments: params
    })

    const gas = await rawTx.estimateGas();
    console.log("await rawTx.estimateGas() : ", gas);
    const signedTx = await w3.eth.accounts.signTransaction({
            from: `${addr}`,
            data: rawTx.encodeABI(),
            gas: gas,
            gasPrice: '0x1'
        },
        `${privateKey}`
    );

    const receipt = await w3.eth.sendSignedTransaction(signedTx.rawTransaction);
    console.log("receipt :", receipt);
    console.log(`Contract deployed at address: ${receipt.contractAddress}`);
    
    ins.options.address = receipt.contractAddress;
    contractAddr = receipt.contractAddress;

    return receipt;
}

// const gas = await this.contractMethod.registData(proof, inputs).estimateGas();

// this.sendContractCall(
//     this.contractMethod.registData(proof, inputs),
//     userEthAddress,
//     userEthPrivateKey,
//     gas
// )

const callTestVerify = async (proof) => {
    if(contractAddr === undefined){ return }

    console.log(ins.options.address)

    let txDescription = {
        from: Ganache.getAddress(1),
        gas: "0x1fff0000000bea",
    };
    const encodedABI = ins.methods.test_verify(proof).encodeABI();
    const txCount = await w3.eth.getTransactionCount(Ganache.getAddress(1), 'pending');
    const chainId = await w3.eth.getChainId();
    const rawTx = {
        ...txDescription,
        data: encodedABI,
        nonce: '0x' + txCount.toString(16),
        to: ins.options.address,
        common: {
            customChain: {
                networkId: chainId,
                chainId: chainId,
            },
        },
    };
    console.log(rawTx)

    const signedTx = await w3.eth.accounts.signTransaction(rawTx, Ganache.getPrivateKey(1));
    const receipt = await w3.eth.sendSignedTransaction(signedTx.rawTransaction);
    console.log(receipt)
    return receipt
}

const getAccountValue = async (addr) =>{

}

module.exports = {
    deploy,
    callTestVerify
}
//8866461766386951
//9007199254740991