import "./styles.css";
import React, { useEffect, createContext, useState } from "react";
import Select from "react-select";

import Title from "./components/Title";
import CommitmentScrollView from "./components/CommitmentScrollView";
import CommitmentUpdate from "./components/CommitmentUpdate";

import { getBalances, getAllCommitments } from "./core/http/http";

export const myContext = createContext({
  commitmentArray: [],
  setCommitmentArray: () => {},
  assetIdx: "",
  setAssetIdx: () => {},
  setUpdate: () => {},
});

export default function App({ Component }) {
  let [commitmentArray, setCommitmentArray] = useState([]);
  let [totalValueFromContract, setTotalValueFromContract] = useState(0);
  let [totalValueFromServer, setTotalValueFromServer] = useState(0);
  let [sumOfCommitments, setSumOfCommitments] = useState(["0", "0"]);
  let [assetIdx, setAssetIdx] = useState("0");
  let [update, setUpdate] = useState(false);

  const updateAll = () => {
    getAllCommitments(assetIdx).then(({ commits, totalCommit }) => {
      setCommitmentArray(commits);
      setSumOfCommitments(totalCommit);
    });
    getBalances(assetIdx).then(({ serverBalance, chainBalance }) => {
      setTotalValueFromServer(serverBalance);
      setTotalValueFromContract(chainBalance);
    });
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
