import fs from "fs";
import _ from "lodash";
import config from "../config.js";
import Ganache from "./ganache.js";
import Deploy from "./deploy.js";
import Web3Interface from "./web3.interface.js";
import { proofFileToContractFormat } from "../utils/string.js";
import sigmaProtocol from "../crypto/sigmaProtocol.js";

export class proofOfReserveContractL2 extends Web3Interface {
  constructor(endpoint, abi, contractAddress) {
    const senderEthAddr = Ganache.getAddress();
    const senderEthPrivateKey = Ganache.getPrivateKey();
    super(endpoint, senderEthAddr, senderEthPrivateKey);
    this.Contract = new this.eth.Contract(abi, contractAddress);
    this.Method = this.Contract.methods;
    this.Addr = contractAddress;
  }

  static async deployAndconstruct(
    from,
    sk,
    params,
    rpc,
    abi,
    bytecode,
    gasPrice = "0x01"
  ) {
    const receipt = await Deploy(
      from,
      sk,
      [params],
      rpc,
      abi,
      bytecode,
      gasPrice
    );
    console.log("deploy receipt:", receipt);

    return new proofOfReserveContractL2(rpc, abi, receipt.contractAddress);
  }

  async uploadCommitment(assetIdx, proofPath) {
    const uploadUserMethod = this.Method.upload_commitment(
      assetIdx,
      proofFileToContractFormat(proofPath)
    );

    const gas = await uploadUserMethod.estimateGas();

    return this.sendContractCall(uploadUserMethod, gas);
  }

  async updateCommitment(assetIdx, id, proofPath) {
    const updateUserMethod = this.Method.update_commitment(
      assetIdx,
      id,
      proofFileToContractFormat(proofPath)
    );

    const gas = await updateUserMethod.estimateGas();

    return this.sendContractCall(updateUserMethod, gas);
  }

  async getVk() {
    return this.localContractCall(this.Method.get_vk());
  }

  async getAllCommitments(assetIdx) {
    return this.localContractCall(this.Method.get_all_commitments(assetIdx));
  }

  async getCommimentCnt(assetIdx) {
    return this.localContractCall(this.Method.get_commitment_cnt(assetIdx));
  }

  async getTotalCommitment(assetIdx) {
    return this.localContractCall(this.Method.get_sum_of_commitments(assetIdx));
  }
}

export class proofOfReserveContractL1 extends Web3Interface {
  constructor(endpoint, abi, contractAddress) {
    const senderEthAddr = Ganache.getAddress();
    const senderEthPrivateKey = Ganache.getPrivateKey();
    super(endpoint, senderEthAddr, senderEthPrivateKey);
    this.Contract = new this.eth.Contract(abi, contractAddress);
    this.Method = this.Contract.methods;
    this.Addr = contractAddress;
  }

  static async deployAndconstruct(
    from,
    sk,
    params,
    rpc,
    abi,
    bytecode,
    gasPrice = "0x01"
  ) {
    const receipt = await Deploy(
      from,
      sk,
      params,
      rpc,
      abi,
      bytecode,
      gasPrice
    );
    console.log("deploy receipt:", receipt);

    return new proofOfReserveContractL1(rpc, abi, receipt.contractAddress);
  }

  async updateTotalValue(assetIdx) {
    const totalKeyJson = JSON.parse(
      fs.readFileSync(
        config.PATH.proofPath + "Ped_cm/CM_Key_total.json",
        "utf8"
      )
    );

    const totalValueString = totalKeyJson["w"] || "0";
    const totalRandomString = totalKeyJson["v"];

    console.log("totalValueString : ", totalValueString);
    console.log("totalRandomString : ", totalRandomString);

    const proof = sigmaProtocol().prove(
      BigInt(totalValueString),
      BigInt(totalRandomString)
    );
    console.log("proof : ", proof);

    const updateTotalValueMethod = this.Method.update_total_value(
      assetIdx,
      totalValueString,
      [proof["tx"], proof["ty"], proof["s"]]
    );

    const gas = await updateTotalValueMethod.estimateGas();

    return this.sendContractCall(updateTotalValueMethod, gas);
  }

  async getTotalValue(assetIdx) {
    return this.localContractCall(this.Method.get_total_value(assetIdx));
  }
}

export default {
  proofOfReserveContractL2,
  proofOfReserveContractL1,
};
