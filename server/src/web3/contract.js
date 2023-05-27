import _ from "lodash";
import Ganache from "./ganache.js";
import Deploy from "./deploy.js";
import Web3Interface from "./web3.interface.js";
import {
    proofFileToContractFormat
} from "../utils/string.js"

export default class proofOfReserveContract extends Web3Interface {
    constructor(endpoint, abi, contractAddress) {
        super(endpoint);
        this.Contract = new this.eth.Contract(abi, contractAddress);
        this.Method = this.Contract.methods;
        this.Addr = contractAddress;
    }

    static async deployAndconstruct(from, sk, params, rpc, abi, bytecode, gasPrice = '0x01') {
        const receipt = await Deploy(from, sk, [params], rpc, abi, bytecode, gasPrice);
        console.log("deploy receipt:", receipt);

        return new proofOfReserveContract(rpc, abi, receipt.contractAddress);
    }

    async uploadCommitment(
        proofPath,
        userEthAddress = Ganache.getAddress(),
        userEthPrivateKey = Ganache.getPrivateKey(),
    ) {
        const uploadUserMethod = this.Method.upload_commitment(
            proofFileToContractFormat(proofPath)
        );

        const gas = await uploadUserMethod.estimateGas();

        return this.sendContractCall(
            uploadUserMethod,
            userEthAddress,
            userEthPrivateKey,
            gas
        );
    }

    async updateCommitment(
        id,
        proofPath,
        userEthAddress = Ganache.getAddress(),
        userEthPrivateKey = Ganache.getPrivateKey(),
    ){
        const updateUserMethod = this.Method.update_commitment(
            id,
            proofFileToContractFormat(proofPath)
        );

        const gas = await updateUserMethod.estimateGas();

        return this.sendContractCall(
            updateUserMethod,
            userEthAddress,
            userEthPrivateKey,
            gas
        );

    }

    async getVk() {
        return this.localContractCall(
            this.Method.get_vk()
        )
    }

    async getAllCommitments() {
        return this.localContractCall(
            this.Method.get_all_commitments()
        )
    }

    async getCommimentCnt() {
        return this.localContractCall(
            this.Method.get_commitment_cnt()
        )
    }
}