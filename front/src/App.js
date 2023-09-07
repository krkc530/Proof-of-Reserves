import "./styles.css";
import React, { useEffect, createContext, useState } from "react";
import Select from "react-select";
import CommitmentScrollView from "./components/CommitmentScrollView";
import Title from "./components/Title";
import CommitmentUpdate from "./components/CommitmentUpdate";
import {
  getAllCommitments,
  getSumOfCommitmets,
  setContractInsL2,
} from "./core/web3/contractL2";
import { getContractAddress } from "./core/http/http";
import { getTotalValueFromContract } from "./core/web3/contractL1";
import { getTotalValue } from "./core/http/http";

export const myContext = createContext({
  commitmentArray: [],
  setCommitmentArray: () => {},
  contractAddressL2: "",
  setContractAddressL2: () => {},
  contractAddressL1: "",
  setContractAddressL1: () => {},
  assetIdx: "",
  setAssetIdx: () => {},
  setUpdate: () => {},
});

export default function App({ Component }) {
  let [commitmentArray, setCommitmentArray] = useState([]);
  let [totalValueFromContract, setTotalValueFromContract] = useState(0);
  let [totalValueFromServer, setTotalValueFromServer] = useState(0);
  let [sumOfCommitments, setSumOfCommitments] = useState(["0", "0"]);
  let [contractAddressL2, setContractAddressL2] = useState("");
  let [contractAddressL1, setContractAddressL1] = useState("");
  let [assetIdx, setAssetIdx] = useState("0");
  let [update, setUpdate] = useState(false);

  useEffect(() => {
    getContractAddress().then((addresses) => {
      setContractInsL2(addresses["AddressL2"]);
      setContractAddressL2(addresses["AddressL2"]);
      setContractAddressL1(addresses["AddressL1"]);
      // console.log(addresses);
    });
  });

  const updateAll = () => {
    getAllCommitments(assetIdx).then((r) => setCommitmentArray(r));
    getTotalValueFromContract(assetIdx).then((r) =>
      setTotalValueFromContract(r)
    );
    getTotalValue(assetIdx).then((r) => setTotalValueFromServer(r));
    getSumOfCommitmets(assetIdx).then((r) => setSumOfCommitments(r));
  };

  useEffect(() => {
    setUpdate(false);
    updateAll();
  }, [assetIdx, update]);

  useEffect(() => {
    const timer = setInterval(async () => {
      updateAll();
    }, 3333);

    return () => {
      clearInterval(timer);
    };
  });

  const assetIdxOptions = [
    { value: "0", label: "0" },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
  ];

  const handleOnChangeSelect = (e) => {
    setAssetIdx(e.value);
  };

  return (
    <myContext.Provider
      value={{
        commitmentArray,
        setCommitmentArray,
        contractAddressL2: contractAddressL2,
        setContractAddressL2: setContractAddressL2,
        contractAddressL1: contractAddressL1,
        setContractAddressL1: setContractAddressL1,
        assetIdx,
        setAssetIdx,
        setUpdate,
      }}
    >
      <Title
        totalValueFromContract={totalValueFromContract}
        totalValueFromServer={totalValueFromServer}
        sumOfCommitments={sumOfCommitments}
      />
      <Select
        defaultValue={assetIdxOptions[0]}
        onChange={handleOnChangeSelect}
        options={assetIdxOptions}
      />
      <div className="main">
        <CommitmentScrollView />
        <CommitmentUpdate />
      </div>
    </myContext.Provider>
  );
}
