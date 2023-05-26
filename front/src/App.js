import "./styles.css";
import React, { useEffect, createContext, useState } from "react";
import CommitmentScrollView, { testCommitmentArray } from "./components/CommitmentScrollView";
import Title from "./components/Title";
import { useAsync } from 'react-async';
import CommitmentUpdate from "./components/CommitmentUpdate";
import { getAllCommitments, setContractIns } from "./core/web3/contract";
import { getContractAddress } from "./core/http/http";



export const myContext = createContext({
  commitmentArray : [],
  setCommitmentArray : () =>{},
  contractAddress : "",
  setContractAddress : () =>{},
});

export default function App({Component}) {
  let [commitmentArray, setCommitmentArray] = useState([]);
  let [contractAddress, setContractAddress] = useState("");
  
  const loadCommitmentAndContractAddress = async () => {
    if (contractAddress === "") {
      const address = await getContractAddress();
      setContractAddress(address);
      setContractIns(address.data.Addr)
    }
  }
  loadCommitmentAndContractAddress();
  
  return (
    <myContext.Provider value={{
      commitmentArray   : commitmentArray,
      setCommitmentArray: setCommitmentArray,
      contractAddress: contractAddress,
      setContractAddress: setContractAddress,
    }}>
      <Title />
      <div className="main">
        <CommitmentScrollView />
        <CommitmentUpdate />
      </div>
    </myContext.Provider>
  );
}
