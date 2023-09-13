import voca from "voca";
import fs from "fs";
import _ from "lodash";

export const prepareString = (str) => {
  let result = str;
  result = voca.replaceAll(result, "QuadExtField", "");
  result = voca.replaceAll(result, "BigInt", "");
  result = voca.replaceAll(result, "(", "");
  result = voca.replaceAll(result, ")", "");
  result = voca.replaceAll(result, "[", "");
  result = voca.replaceAll(result, "]", "");
  return result;
};

export const parseG1Point = (g1String, radix = 10) => {
  let result = g1String;
  result = result.split(",");
  result = result.map((x) => BigInt(x).toString(radix));

  return result;
};

export const parseG2Point = (g2String, radix = 10) => {
  let result = g2String;
  result = voca.replaceAll(result, "*", "");
  result = voca.replaceAll(result, "u", "");
  result = voca.replaceAll(result, "+", ",");

  result = result.split(",");
  result = result.map((x) => BigInt(x).toString(radix));
  for (let i = 0; i < result.length; i += 2) {
    let tmp = result[i];
    result[i] = result[i + 1];
    result[i + 1] = tmp;
  }

  return result;
};

export const jsonToContractFormat = (json) => {
  let result = [];
  _.forIn(json, (value, key) => {
    if (typeof value === "string") {
      let tmp = value;
      tmp = prepareString(tmp);

      if (key.search("g1") > 0) {
        tmp = parseG1Point(tmp);
      } else if (key.search("g2") > 0) {
        tmp = parseG2Point(tmp);
      }
      result = result.concat(tmp);
    }
  });
  return result;
};

export const vkFileToContractFormat = (path) => {
  const vkJson = JSON.parse(fs.readFileSync(path, "utf8"));
  console.log(vkJson);
  return jsonToContractFormat(vkJson);
};

export const proofFileToContractFormat = (path) => {
  const proofJson = JSON.parse(fs.readFileSync(path, "utf8"));
  return jsonToContractFormat(proofJson);
};

//gamma_abc_g1, eta_gamma_inv_g1
export const pedersenGenToContractFormat = (path) => {
  const pedersenGenJson = JSON.parse(fs.readFileSync(path, "utf8"));
  return jsonToContractFormat(pedersenGenJson);
};

export const formatNumberWithDecimal = (number, unit = 1, decimal = 2) => {
  const formattedNumber = (
    Math.round((number * 10 ** decimal) / unit) /
    10 ** decimal
  ).toFixed(decimal);

  return formattedNumber;
};
