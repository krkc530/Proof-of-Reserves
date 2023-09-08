import fs from "fs";
import config from "../config.js";
import Ganache from "../web3/ganache.js";
import {
  proofOfReserveContractL1,
  proofOfReserveContractL2,
} from "../web3/contract.js";
import {
  vkFileToContractFormat,
  pedersenGenToContractFormat,
} from "./string.js";

const DEFAULT_DB_PASSWD = "1234";

export const initConfig = async () => {
  config.PATH.homePath = process.env.PWD + "/";
  config.PATH.proofPath = config.PATH.homePath + "napirs-legogroth16/json/";
  config.DB.password = process.env.DB_PASSWORD || DEFAULT_DB_PASSWD;

  if (config.DB.password === DEFAULT_DB_PASSWD) {
    console.warn(
      "WARNING: Using the default database password. Consider setting DB_PASSWORD as an environment variable for security."
    );
  }
  const { porContractL1, porContractL2 } = await deployContract();
  config.L1_ADDRESS = porContractL1.Addr;
  config.L2_ADDRESS = porContractL2.Addr;
};

const deployContract = async () => {
  const contractL2Json = JSON.parse(
    fs.readFileSync(
      config.PATH.homePath + "src/web3/ProofOfReservesContractL2.json",
      "utf-8"
    )
  );
  const contractL1Json = JSON.parse(
    fs.readFileSync(
      config.PATH.homePath + "src/web3/ProofOfReservesContractL1.json",
      "utf-8"
    )
  );
  const vkPath = config.PATH.proofPath + "Proof_vk/VK.json";
  const genPath = config.PATH.proofPath + "Ped_cm/generator.json";

  const gen = pedersenGenToContractFormat(genPath);
  const porContractL2 = await proofOfReserveContractL2.deployAndconstruct(
    Ganache.getAddress(),
    Ganache.getPrivateKey(),
    vkFileToContractFormat(vkPath),
    config.testProvider,
    contractL2Json.abi,
    contractL2Json.bytecode
  );

  const porContractL1 = await proofOfReserveContractL1.deployAndconstruct(
    Ganache.getAddress(),
    Ganache.getPrivateKey(),
    [[gen[0], gen[1]], [gen[2], gen[3]], porContractL2.Addr],
    config.testProvider,
    contractL1Json.abi,
    contractL1Json.bytecode
  );

  return { porContractL1, porContractL2 };
};
